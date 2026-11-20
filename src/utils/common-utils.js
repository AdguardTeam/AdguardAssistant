export const cropDomain = (domain) => domain.replace('www.', '').replace(/:\d+/, '');

/**
 * Escapes a value for a double-quoted string in a CSS stylesheet.
 *
 * Values that break out of a string can add styles to a stylesheet built from
 * page or user data.
 *
 * @param {string} value Value to escape.
 * @returns {string} Escaped value.
 */
export const escapeCssString = (value) => value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/[\r\n\f]/g, '');

/**
 * CSS suffix of the rule that hides a blocked element.
 */
const HIDING_RULE_SUFFIX = '{display:none!important}';

let validationSheet = null;
let validationStyle = null;
let isValidationReady = false;

/**
 * Prepares the style sheet that parses rule text.
 *
 * A constructed style sheet belongs to no document, so neither CSP nor the
 * page can affect it. A style element in a detached document is the fallback
 * for browsers without constructed style sheets.
 */
const prepareValidation = () => {
    if (isValidationReady) {
        return;
    }

    isValidationReady = true;

    try {
        if (typeof CSSStyleSheet === 'function') {
            validationSheet = new CSSStyleSheet();
        }
    } catch (e) {
        validationSheet = null;
    }

    if (!validationSheet) {
        try {
            const validationDocument = document.implementation.createHTMLDocument('');
            validationStyle = validationDocument.createElement('style');
            validationDocument.head.appendChild(validationStyle);
            validationSheet = validationStyle.sheet;
        } catch (e) {
            validationStyle = null;
            validationSheet = null;
        }
    }
};

/**
 * Removes the parsed rules, so each check starts from an empty sheet.
 */
const clearValidationSheet = () => {
    if (!validationSheet) {
        return;
    }

    // A page can replace the constructor with an object whose rules never go
    // away, so the loop is bounded by the current rule count.
    const ruleCount = validationSheet.cssRules.length;

    for (let i = 0; i < ruleCount; i += 1) {
        try {
            validationSheet.deleteRule(0);
        } catch (e) {
            return;
        }
    }
};

/**
 * Parses the text as a rule list.
 *
 * @param {string} ruleText CSS text.
 * @returns {number} Number of parsed rules, or -1 when there is no parser.
 */
const parseRuleList = (ruleText) => {
    if (validationStyle) {
        validationStyle.textContent = ruleText;
        validationSheet = validationStyle.sheet;

        // A style element without a sheet parses nothing, and must not be
        // read as "no rules, so the text is fine".
        return validationSheet ? validationSheet.cssRules.length : -1;
    }

    if (validationSheet && typeof validationSheet.replaceSync === 'function') {
        validationSheet.replaceSync(ruleText);

        return validationSheet.cssRules.length;
    }

    return -1;
};

/**
 * Checks a selector for rule syntax outside quoted strings.
 *
 * A brace or a comment outside a quoted string can end the rule that a
 * selector belongs to. A quoted brace is part of an attribute value, for
 * example `div[data-code="{x}"]`, and escapes are skipped as in CSS. The
 * selector it rejects is never written, because the write checks the real
 * style sheet, so the check only keeps such a rule out of the filtering
 * engine.
 *
 * @param {string} selector CSS selector.
 * @returns {boolean} True if the selector holds rule syntax outside quotes.
 */
const hasUnquotedRuleSyntax = (selector) => {
    let quote = null;

    for (let i = 0; i < selector.length; i += 1) {
        const char = selector[i];

        if (char === '\\') {
            i += 1;
        } else if (quote !== null) {
            if (char === quote) {
                quote = null;
            }
        } else if (char === '"' || char === "'") {
            quote = char;
        } else if (char === '{' || char === '}' || (char === '/' && selector[i + 1] === '*')) {
            return true;
        }
    }

    return false;
};

/**
 * Checks that a parsed rule only hides the element.
 *
 * @param {CSSStyleRule} rule Parsed rule.
 * @returns {boolean} True if the rule has one declaration, `display: none`
 * with `!important`, and no nested rules.
 */
export const isHidingStyleRule = (rule) => Boolean(rule && rule.style)
    && rule.style.length === 1
    && rule.style.getPropertyValue('display') === 'none'
    && rule.style.getPropertyPriority('display') === 'important'
    && (!rule.cssRules || rule.cssRules.length === 0);

/**
 * Checks that a selector composes into a single rule that only hides the
 * element.
 *
 * The assistant writes `selector{display:none!important}` into a stylesheet
 * that belongs to the assistant, so a selector must not end early, add
 * declarations, or leave the sheet inside a string or a comment. The CSS
 * parser decides, because no lexical check can follow strings, comments, and
 * unquoted url tokens.
 *
 * A selector that the browser cannot parse is accepted, because extended CSS
 * may use syntax only the filtering engine knows. It hides nothing now and is
 * never written, but it must not carry rule syntax outside quotes.
 *
 * @param {string} selector CSS selector.
 * @returns {boolean} True if the selector is safe for the filtering engine.
 */
export const isHidingRuleSelector = (selector) => {
    if (typeof selector !== 'string') {
        return false;
    }

    prepareValidation();

    if (!validationSheet) {
        return !hasUnquotedRuleSyntax(selector);
    }

    const ruleText = selector + HIDING_RULE_SUFFIX;

    clearValidationSheet();

    // insertRule parses the text as one complete rule, so a text that holds
    // several rules, ends inside a string, or ends inside a comment fails.
    try {
        const index = validationSheet.insertRule(ruleText, 0);
        const rule = validationSheet.cssRules[index];
        const hidesOnly = isHidingStyleRule(rule);
        validationSheet.deleteRule(index);

        return hidesOnly;
    } catch (e) {
        // Not one complete rule, the list parse below tells the cases apart.
    }

    // A text that parses into no rule is extended CSS, or a selector the
    // browser cannot parse. The assistant never writes it, but it must not
    // carry rule syntax that another stylesheet could act on.
    if (hasUnquotedRuleSyntax(selector)) {
        return false;
    }

    return parseRuleList(ruleText) === 0;
};

/**
 * Checks that the user produced the event.
 *
 * Page scripts can dispatch events, and a dispatched event has `isTrusted`
 * set to false. Privileged actions must run only after a real user action.
 *
 * @param {Event} event DOM event.
 * @returns {boolean} True if a real user action produced the event.
 */
export const isTrustedEvent = (event) => Boolean(event) && event.isTrusted === true;

/**
 * Force clear the page cache
 * see: https://stackoverflow.com/questions/10719505/force-a-reload-of-page-in-chrome-using-javascript-no-cache/27058362#27058362
 * @param callback
 */
export const bypassCache = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href, true);

    xhr.setRequestHeader('Pragma', 'no-cache');
    xhr.setRequestHeader('Expires', '-1');
    xhr.setRequestHeader('Cache-Control', 'no-cache');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && callback) {
            callback();
        }
    };

    xhr.send();
};

/**
 * Reload page after bypassing cache
 */
export const reloadPageBypassCache = () => {
    bypassCache(() => {
        window.location.reload(true);
    });
};

/**
 * Multiple event handler helper.
 * @param {Object}  elements  element or nodeList.
 * @param {String}  events    multiple events divided by space.
 * @param {Function}  eventHandler   event handler.
 * @param {Boolean}  useCapture   capture.
 * @return {Function} add/remove.
 */
export const events = {
    add(elements, es, eventHandler, useCapture) {
        this.addRemoveEvents(true, elements, es, eventHandler, useCapture);
    },
    remove(elements, es, eventHandler, useCapture) {
        this.addRemoveEvents(false, elements, es, eventHandler, useCapture);
    },
    // eslint-disable-next-line consistent-return
    addRemoveEvents(add, elements, es, eventHandler, useCapture) {
        if (!elements || !es || !eventHandler) {
            return false;
        }

        const eventList = es.split(' ');

        if (!eventList || eventList.length < 1) {
            return false;
        }

        if (!elements.length) {
            // eslint-disable-next-line no-param-reassign
            elements = new Array(elements);
        }

        for (let el = 0; el < elements.length; el += 1) {
            for (let evt = 0; evt < eventList.length; evt += 1) {
                if (!eventList[evt] || !eventList[evt].length) {
                    // eslint-disable-next-line no-continue
                    continue;
                }

                if (add) {
                    elements[el].addEventListener(
                        eventList[evt],
                        eventHandler,
                        !!useCapture,
                    );
                } else {
                    elements[el].removeEventListener(
                        eventList[evt],
                        eventHandler,
                        !!useCapture,
                    );
                }
            }
        }
    },
};

/**
 * Common utils
 * @type {{
 * cropDomain: Function,
 * escapeCssString: Function,
 * isHidingRuleSelector: Function,
 * isTrustedEvent: Function,
 * bypassCache: Function,
 * reloadPageBypassCache: Function,
 * events: Object
 * }}
 */
const CommonUtils = {
    cropDomain,
    escapeCssString,
    isHidingRuleSelector,
    isTrustedEvent,
    bypassCache,
    reloadPageBypassCache,
    events,
};

export default CommonUtils;

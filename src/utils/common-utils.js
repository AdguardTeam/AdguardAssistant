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

let validationStyle = null;

/**
 * Returns a style element in a detached document, for CSS parsing.
 *
 * @returns {Element|null} Style element or null when it cannot be created.
 */
const getValidationStyle = () => {
    if (validationStyle === null) {
        try {
            const validationDocument = document.implementation.createHTMLDocument('');
            validationStyle = validationDocument.createElement('style');
            validationDocument.head.appendChild(validationStyle);
        } catch (e) {
            validationStyle = null;
        }
    }

    return validationStyle;
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
 * that carries the page CSP nonce, so a selector must not end early, add
 * declarations, or leave the sheet inside a string or a comment. The CSS
 * parser decides, because no lexical check can follow strings, comments, and
 * unquoted url tokens.
 *
 * @param {string} selector CSS selector.
 * @param {boolean} [allowUnparsed] Accept a selector that the CSS parser does
 * not understand and that parses into no rule. Extended CSS may use syntax
 * only the filtering engine knows, but such a selector hides nothing now and
 * must not be written.
 * @returns {boolean} True if the selector is safe to write into the stylesheet.
 */
export const isHidingRuleSelector = (selector, allowUnparsed) => {
    if (typeof selector !== 'string') {
        return false;
    }

    const style = getValidationStyle();
    if (!style) {
        return false;
    }

    const ruleText = selector + HIDING_RULE_SUFFIX;

    // insertRule parses the text as one complete rule, so a text that holds
    // several rules, ends inside a string, or ends inside a comment fails.
    const insertSheet = style.sheet;

    if (insertSheet) {
        try {
            const index = insertSheet.insertRule(ruleText, 0);
            const rule = insertSheet.cssRules[index];
            const hidesOnly = isHidingStyleRule(rule);
            insertSheet.deleteRule(index);
            return hidesOnly;
        } catch (e) {
            // Not one complete rule, the list parse below tells the cases
            // apart.
        }
    }

    if (allowUnparsed !== true) {
        return false;
    }

    // An unparsed text is either CSS that only the filtering engine knows, or
    // a text that parses into rules but not into one complete rule.
    style.textContent = ruleText;
    const listSheet = style.sheet;
    const count = listSheet ? listSheet.cssRules.length : 0;
    style.textContent = '';

    return count === 0;
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

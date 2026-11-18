import cssEscape from './libs/css.escape';
import protectedApi from './protectedApi';
import { escapeCssString } from './utils/common-utils';

/**
 * Adguard rules constructor
 * @type {Function}
 */
function AdguardRulesConstructorLib(api = {}) {
    const CSS_RULE_MARK = '##';
    const EXTENDED_CSS_RULE_MARK = '#?#';
    const RULE_OPTIONS_MARK = '$';

    const URLBLOCK_ATTRIBUTES = ['src', 'data'];

    /**
     * Rule marks that the element picker can build.
     */
    const ALLOWED_COSMETIC_MARKS = [CSS_RULE_MARK, EXTENDED_CSS_RULE_MARK];

    /**
     * Marks of the rule types that the element picker must never send to the
     * filtering engine: scriptlet, style injection, and exception rules.
     */
    const FORBIDDEN_RULE_MARKS = [
        '#%#',
        '#$#',
        '#@#',
        '#@%#',
        '#@$#',
        '#@?#',
        '#$?#',
        '$$',
    ];

    /**
     * Characters that separate rules in a filter list.
     */
    // eslint-disable-next-line no-control-regex
    const LINE_SEPARATOR_REGEX = /[\r\n\f\u000b\u0085\u2028\u2029]/;

    /**
     * Prefixes of the blocking URL rules that the element picker can build.
     */
    const URL_RULE_PREFIX_REGEX = /^(?:\|\||\||\/\/|https?:\/\/)/i;

    const ABSOLUTE_HTTP_URL_REGEX = /^https?:\/\//i;
    const HTTP_URL_REGEX = /^http:\/\//i;
    const PROTOCOL_RELATIVE_URL_REGEX = /^\/\//;
    const FILTER_SYNTAX_CHARS_REGEX = /[$#]/;

    const linkHelper = protectedApi.createElement('a');

    /**
     * Constructs css selector by combining classes by AND
     * @param classList
     * @returns {string}
     */
    const constructClassCssSelectorByAND = (classList) => {
        const selectors = [];
        if (classList) {
            for (let i = 0; i < classList.length; i += 1) {
                selectors.push(`.${cssEscape(classList[i])}`);
            }
        }
        return selectors.join('');
    };

    /**
     * Constructs css selector for element using tag name,
     * id and classed, like: tagName#id.class1.class2
     *
     * @param element Element
     * @param classList Override element classes
     * (If classList is null, element classes will be used)
     * @param excludeTagName Omit tag name in selector
     * @param excludeId Omit element id in selector
     * @returns {string}
     */
    const makeDefaultCssFilter = (element, classList, excludeTagName, excludeId) => {
        let cssSelector = excludeTagName ? '' : element.tagName.toLowerCase();
        if (element.id && !excludeId) {
            cssSelector += `#${cssEscape(element.id)}`;
        }
        cssSelector += constructClassCssSelectorByAND(classList || element.classList);
        return cssSelector;
    };

    /**
     * Constructs css selector for element using parent elements
     * and nth-child (first-child, last-child) pseudo classes.
     *
     * @param element Element
     * @param options Construct options.
     * For example: {excludeTagName: false, excludeId: false, classList: []}
     * @returns {string}
     */
    const makeCssNthChildFilter = (element, options) => {
        // eslint-disable-next-line no-param-reassign
        options = options || {};

        const { classList, excludeTagName, excludeId } = options;

        const excludeTagNameOverride = 'excludeTagName' in options;
        const excludeIdOverride = 'excludeId' in options;

        const path = [];
        let el = element;
        while (el.parentNode) {
            const nodeName = el && el.nodeName ? el.nodeName.toUpperCase() : '';
            if (nodeName === 'BODY') {
                break;
            }
            if (el.id) {
                /**
                 * Be default we don't include tag name and classes
                 * to selector for element with id attribute
                 */
                let cssSelector = '';
                if (el === element) {
                    cssSelector = makeDefaultCssFilter(
                        el,
                        classList || [],
                        excludeTagNameOverride ? excludeTagName : true,
                        excludeIdOverride ? excludeId : false,
                    );
                } else {
                    cssSelector = makeDefaultCssFilter(el, [], true, false);
                }
                path.unshift(cssSelector);
                break;
            } else {
                let c = 1;
                for (let e = el; e.previousSibling; e = e.previousSibling) {
                    if (e.previousSibling.nodeType === 1) {
                        c += 1;
                    }
                }

                let cldCount = 0;
                for (let i = 0; el.parentNode && i < el.parentNode.childNodes.length; i += 1) {
                    cldCount += el.parentNode.childNodes[i].nodeType === 1 ? 1 : 0;
                }

                let ch;
                if (cldCount === 0 || cldCount === 1) {
                    ch = '';
                } else if (c === 1) {
                    ch = ':first-child';
                } else if (c === cldCount) {
                    ch = ':last-child';
                } else {
                    ch = `:nth-child(${c})`;
                }

                /**
                 * By default we include tag name and
                 * element classes to selector for element without id attribute
                 */
                if (el === element) {
                    let p = makeDefaultCssFilter(
                        el,
                        classList,
                        excludeId,
                        excludeTagNameOverride ? excludeTagName : false,
                    );
                    p += ch;
                    path.unshift(p);
                } else {
                    path.unshift(makeDefaultCssFilter(el, el.classList, false, false) + ch);
                }

                el = el.parentNode;
            }
        }
        return path.join(' > ');
    };

    /**
     * Constructs css selector by combining classes by OR
     * @param classList
     * @returns {string}
     */
    const constructClassCssSelectorByOR = (classList) => {
        const selectors = [];
        if (classList) {
            for (let i = 0; i < classList.length; i += 1) {
                selectors.push(`.${cssEscape(classList[i])}`);
            }
        }
        return selectors.join(', ');
    };

    /**
     * Constructs element selector for matching elements
     * that contain any of classes in original element.
     * For example <el class='cl1 cl2 cl3'></el> => .cl1, .cl2, .cl3
     *
     * @param element Element
     * @param classList Override element classes
     * (If classList is null, element classes will be used)
     * @returns {string}
     */
    const makeSimilarCssFilter = (element, classList) => (
        constructClassCssSelectorByOR(classList || element.classList)
    );

    /**
     * Creates css rule text
     * @param element Element
     * @param options Construct options.
     * For example: {
     *  cssSelectorType: 'STRICT_FULL',
     *  excludeTagName: false,
     *  excludeId: false, classList: []
     * }
     * @returns {string}
     */
    const constructCssRuleText = (element, options) => {
        if (!element) {
            return;
        }

        // eslint-disable-next-line no-param-reassign
        options = options || {};
        const cssSelectorType = options.cssSelectorType || 'STRICT_FULL';

        let selector;
        switch (cssSelectorType) {
            case 'STRICT_FULL':
                selector = makeCssNthChildFilter(element, options);
                break;
            case 'STRICT':
                selector = makeDefaultCssFilter(
                    element,
                    options.classList,
                    options.excludeTagName,
                    options.excludeId,
                );
                break;
            case 'SIMILAR':
                selector = makeSimilarCssFilter(element, options.classList, true);
                break;
            default:
                break;
        }

        // eslint-disable-next-line consistent-return
        return selector ? CSS_RULE_MARK + selector : '';
    };

    /**
     * Parses a value of a `src` or `data` attribute into URL parts.
     *
     * Only absolute HTTP(S) and protocol-relative addresses are accepted.
     * Relative addresses, fragments, and data URIs resolve against the page
     * address, so a page-controlled attribute could turn them into filter
     * rule syntax. Characters that start the options or a cosmetic rule are
     * rejected too, because they would change the type of the built rule.
     *
     * @param {string} value Attribute value.
     * @returns {{protocolRelative: boolean, isHttp: boolean, host: string, path: string}|null}
     * URL parts or null if the value cannot be used in a rule.
     */
    const parseUrlBlockValue = (value) => {
        if (typeof value !== 'string') {
            return null;
        }

        const url = value.trim();
        const protocolRelative = PROTOCOL_RELATIVE_URL_REGEX.test(url);

        if (!protocolRelative && !ABSOLUTE_HTTP_URL_REGEX.test(url)) {
            return null;
        }

        // The helper anchor lives in a document without a base address, so a
        // protocol-relative address needs an explicit scheme to be parsed.
        linkHelper.href = protocolRelative ? `https:${url}` : url;

        const { host, pathname, search } = linkHelper;
        const path = `${pathname}${search}`;

        if (!host || FILTER_SYNTAX_CHARS_REGEX.test(host) || FILTER_SYNTAX_CHARS_REGEX.test(path)) {
            return null;
        }

        return {
            protocolRelative,
            isHttp: HTTP_URL_REGEX.test(url),
            host,
            path,
        };
    };

    /**
     * Builds a rule that blocks the address from a parsed URL value.
     *
     * @param {string} urlBlockValue Value of the `src` or `data` attribute.
     * @param {boolean} oneDomain True to block the address on all sites.
     * @param {string} domain Page domain.
     * @returns {string|null} Rule text or null if the value cannot be used.
     */
    const constructUrlBlockRuleText = (urlBlockValue, oneDomain, domain) => {
        const url = parseUrlBlockValue(urlBlockValue);

        if (!url) {
            return null;
        }

        let blockUrlRuleText;

        if (url.protocolRelative) {
            blockUrlRuleText = `//${url.host}${url.path}`;
        } else if (url.isHttp) {
            blockUrlRuleText = `||${url.host.replace(/^www\./i, '')}${url.path}`;
        } else {
            blockUrlRuleText = `https://${url.host}${url.path}`;
        }

        if (!oneDomain) {
            blockUrlRuleText = `${blockUrlRuleText}${RULE_OPTIONS_MARK}domain=${domain}`;
        }

        return blockUrlRuleText;
    };

    const getUrlBlockAttribute = (element) => {
        if (!element || !element.getAttribute) {
            return null;
        }

        for (let i = 0; i < URLBLOCK_ATTRIBUTES.length; i += 1) {
            const attr = URLBLOCK_ATTRIBUTES[i];
            const value = element.getAttribute(attr);
            if (parseUrlBlockValue(value)) {
                return value;
            }
        }

        return null;
    };

    const haveUrlBlockParameter = (element) => getUrlBlockAttribute(element) !== null;

    /**
     * Checks that a value resolves to a host name.
     *
     * @param {string} value Attribute value.
     * @returns {boolean} True if the value resolves to a host name.
     */
    const hasHost = (value) => {
        if (!value) {
            return false;
        }

        linkHelper.href = value;

        return Boolean(linkHelper.hostname);
    };

    const haveClassAttribute = (element) => element.classList && element.classList.length > 0;

    const haveIdAttribute = (element) => element.id && element.id.trim() !== '';

    const getUrl = (url) => {
        const pattern = '^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$';
        const rx = new RegExp(pattern);
        const parts = rx.exec(url);

        return {
            host: parts[4] || '',
            path: parts[7] || '',
        };
    };

    const cropDomain = (url) => {
        const domain = getUrl(url).host;
        return domain.replace('www.', '').replace(/:\d+/, '');
    };

    /**
     * Utility method
     *
     * @param element
     * @returns {string}
     */
    // eslint-disable-next-line no-param-reassign
    api.makeCssNthChildFilter = makeCssNthChildFilter;

    // eslint-disable-next-line no-param-reassign
    api.getUrlBlockAttribute = getUrlBlockAttribute;

    // eslint-disable-next-line no-param-reassign
    api.haveUrlBlockParameter = haveUrlBlockParameter;

    /**
     * Checks that the rule text can be passed to the filtering engine.
     *
     * The element picker builds a cosmetic rule or a blocking URL rule, and
     * the user can change the rule text in the dialog. The check accepts these
     * two families and rejects the types that the picker cannot build, so a
     * page-controlled value cannot turn an element rule into a scriptlet, a
     * style injection, or an exception rule. Line separators are rejected,
     * because one field must not submit several rules.
     *
     * @param {string} ruleText Rule text.
     * @returns {boolean} True if the text is a single blocking rule.
     */
    // eslint-disable-next-line no-param-reassign
    api.isValidRuleText = (ruleText) => {
        if (typeof ruleText !== 'string') {
            return false;
        }

        const rule = ruleText.trim();

        if (!rule || LINE_SEPARATOR_REGEX.test(rule)) {
            return false;
        }

        // Comments, preprocessor directives, and exception rules do not block
        // an element.
        if (rule[0] === '!' || rule[0] === '[' || rule.indexOf('@@') === 0) {
            return false;
        }

        if (FORBIDDEN_RULE_MARKS.some((mark) => rule.indexOf(mark) >= 0)) {
            return false;
        }

        const hasCosmeticMark = ALLOWED_COSMETIC_MARKS.some((mark) => rule.indexOf(mark) >= 0);

        return hasCosmeticMark || URL_RULE_PREFIX_REGEX.test(rule);
    };

    /**
     * Returns detailed element info
     *
     * @param element
     */
    // eslint-disable-next-line no-param-reassign
    api.getElementInfo = (element) => {
        // Convert attributes to array
        const attributes = [];
        const elementAttributes = element.attributes;
        if (elementAttributes) {
            for (let i = 0; i < elementAttributes.length; i += 1) {
                const attr = elementAttributes[i];
                attributes.push({
                    name: attr.name,
                    value: attr.value,
                });
            }
        }

        return {
            tagName: element.tagName,
            attributes,
            urlBlockAttributeValue: getUrlBlockAttribute(element),
            haveUrlBlockParameter: haveUrlBlockParameter(element),
            haveClassAttribute: haveClassAttribute(element),
            haveIdAttribute: haveIdAttribute(element),
        };
    };

    /**
     * Constructs css selector for specified rule
     *
     * @param ruleText rule text
     * @returns {string} css style selector
     */
    // eslint-disable-next-line no-param-reassign
    api.constructRuleCssSelector = (ruleText) => {
        if (!ruleText) {
            return null;
        }

        const index = ruleText.indexOf(CSS_RULE_MARK);
        const optionsIndex = ruleText.indexOf(RULE_OPTIONS_MARK);

        if (index >= 0) {
            return ruleText.substring(
                index + CSS_RULE_MARK.length,
                optionsIndex >= 0 ? optionsIndex : ruleText.length,
            );
        }

        let s = ruleText.substring(0, optionsIndex);
        s = s.replace(/[|]|[\^]/g, '');

        if (hasHost(s)) {
            return `[src*="${escapeCssString(s)}"]`;
        }

        return null;
    };

    /**
     * Constructs adguard rule text from element node and specified options
     *
     * const options = {
     *  urlMask: url block attributes,
     *  isBlockOneDomain: boolean,
     *  url: url,
     *  attributes: attributesSelectorText,
     *  ruleType: (URL, CSS)
     *  cssSelectorType: (STRICT_FULL, STRICT, SIMILAR),
     *  excludeTagName: false, (Exclude element tag name from selector)
     *  excludeId: false, (Exclude element identifier from selector)
     *  classList: []
     *      (Override element classes (If classList is null, element classes will be used))
     * }
     *
     * @param element
     * @param options
     * @returns {*}
     */
    // eslint-disable-next-line no-param-reassign
    api.constructRuleText = (element, options) => {
        const croppedDomain = cropDomain(options.url);

        if (options.ruleType === 'URL') {
            const blockUrlRuleText = constructUrlBlockRuleText(
                options.urlMask,
                options.isBlockOneDomain,
                croppedDomain,
            );

            if (blockUrlRuleText) {
                return blockUrlRuleText;
            }
        }

        // CSS rule, also used when the address cannot be turned into a URL
        // rule. An attribute value that the picker cannot parse must not
        // change the type of the rule.
        let result = constructCssRuleText(element, options);

        // Append html attributes to css selector
        if (options.attributes) {
            result = (result || CSS_RULE_MARK + result) + options.attributes;
        }

        if (!options.isBlockOneDomain) {
            result = croppedDomain + result;
        }

        return result;
    };

    return api;
}
const adguardRulesConstructor = new AdguardRulesConstructorLib();

export default adguardRulesConstructor;

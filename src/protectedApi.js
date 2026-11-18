import log from './log';

/**
 * TODO: rewrite to class
 * TODO: add relevant jsdoc
 * Protected API
 * @constructor
 */
function ProtectedApi() {
    /**
     * Default Trusted Types policy name provided by CoreLibs.
     */
    const DEFAULT_POLICY_NAME = 'AGPolicy';
    const win = window;
    const functionPType = Function.prototype;
    const originalGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const { documentMode, documentElement } = document;
    const originalAppendChild = document.appendChild;
    const originalCreateElement = document.createElement;
    const originalJSON = win.JSON;
    const functionApply = functionPType.apply;
    const functionBind = functionPType.bind;
    const COMPLETE = 'complete';
    const originalAttachShadow = documentElement.attachShadow;

    // eslint-disable-next-line func-names
    const apply = typeof Reflect !== 'undefined' ? Reflect.apply : function (target, _this, _arguments) {
        return functionApply.call(target, _this, _arguments);
    };

    const noop = () => { };
    const methodCallerFactory = (owner, prop) => {
        if (!owner) { return noop; }
        // Keeps reference to the method, so that it is unaffected
        // when `owner` is mutated.
        const method = owner[prop];
        // eslint-disable-next-line consistent-return, func-names
        return function () {
            if (method) {
                // eslint-disable-next-line prefer-rest-params
                return apply(method, owner, arguments);
            }
        };
    };

    const getReadyState = () => {
        // We need to add this hook for tests, because a phantomjs
        // doesn't work with Object.getOwnPropertyDescriptor correctly
        if (typeof originalGetOwnPropertyDescriptor(Document.prototype, 'readyState') === 'undefined') {
            return COMPLETE;
        }

        const readyStateGetter = originalGetOwnPropertyDescriptor(Document.prototype, 'readyState').get;
        return apply(readyStateGetter, document, []);
    };

    const addListenerToWindow = methodCallerFactory(win, 'addEventListener');
    const removeListenerFromWindow = methodCallerFactory(win, 'removeEventListener');
    const querySelector = methodCallerFactory(document, 'querySelector');

    const appendChildToElement = (elem, child) => {
        apply(originalAppendChild, elem, [child]);
    };

    /**
     * Creating element instead `document.createElement`
     * to prevented a custom `document.createElement`
     * see: https://github.com/AdguardTeam/AdguardAssistant/issues/165
     *
     * And also if browser supports Trusted Types,
     * we will use it with default AdGuard policy to create elements from strings.
     * see: https://github.com/AdguardTeam/AdguardAssistant/issues/438
     */
    const createElement = (markup) => {
        const doc = document.implementation.createHTMLDocument('');

        if (markup && markup[0] !== '<') {
            // eslint-disable-next-line no-param-reassign
            markup = `<${markup}></${markup}>`;
        }

        try {
            if (win.trustedTypes && win.trustedTypes.createPolicy) {
                const policy = win.trustedTypes.createPolicy(DEFAULT_POLICY_NAME, {
                    createHTML: (s) => s,
                });
                // eslint-disable-next-line no-param-reassign
                markup = policy.createHTML(markup);
            }
        } catch (e) {
            // Do nothing
        }

        doc.body.innerHTML = markup;

        return doc.body.firstChild;
    };

    /**
     * Creates an element in the page document.
     *
     * The element is a shadow host for the assistant UI. It is created in the
     * page document, because every browser supports a shadow root on such an
     * element. The original `document.createElement` method is used, so a
     * method replaced by page scripts cannot return another element.
     *
     * @param {string} tagName Tag name.
     * @returns {Element} New element.
     */
    const createElementInPageDocument = (tagName) => apply(originalCreateElement, document, [tagName]);

    /**
     * Set innerHTML to element.
     *
     * @param {HTMLElement} element Element to add HTML.
     * @param {string} html HTML string.
     */
    const setInnerHtml = (element, html) => {
        // Clear existing content
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }

        // Add new content
        element.appendChild(createElement(html));
    };

    const json = {
        parse: methodCallerFactory(originalJSON, 'parse'),
        stringify: methodCallerFactory(originalJSON, 'stringify'),
    };

    /**
     * Creating style element
     * @param {String} styles css styles in string
     * @param {String} nonce  attribute for content-security-policy
     * @param {String} id to prevent duplicates, can be empty
     * @return {Object|false} style tag with styles or false
     * if the styles with transferred id is exist
     */
    const createStylesElement = (styles, nonce, id) => {
        if (id && querySelector(`#${id}`)) {
            return false;
        }

        const tagNode = createElement('style');
        tagNode.setAttribute('type', 'text/css');

        if (id) {
            tagNode.setAttribute('id', id);
        }

        tagNode.setAttribute('nonce', nonce);

        if (tagNode.styleSheet) {
            tagNode.styleSheet.cssText = styles;
        } else {
            appendChildToElement(tagNode, document.createTextNode(styles));
        }

        return tagNode;
    };

    /**
     * Check browser shadow dom support.
     *
     * The assistant UI is kept in a closed shadow root, so page scripts cannot
     * read or change the rule shown in the element picker. Older Safari
     * versions crashed when a style element was added to a shadow root
     * (see: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/974),
     * so Safari was excluded from this path. Current Safari versions handle
     * this pattern, so the check is the same for all browsers.
     *
     * @returns {boolean} True if the browser can attach a shadow root.
     */
    const checkShadowDomSupport = () => typeof originalAttachShadow === 'function';

    /**
     * Attaches a closed shadow root to the element.
     *
     * The original `attachShadow` method is used, so a method replaced by page
     * scripts cannot open the root. Returns null when the root cannot be
     * attached.
     *
     * @param {Element} element Shadow host.
     * @returns {ShadowRoot|null} Closed shadow root or null.
     */
    const attachClosedShadowRoot = (element) => {
        if (!checkShadowDomSupport()) {
            return null;
        }

        try {
            return apply(originalAttachShadow, element, [{ mode: 'closed' }]);
        } catch (e) {
            log.warn('Can`t attach a closed shadow root to the assistant element');
            return null;
        }
    };

    return {
        functionBind,
        addListenerToWindow,
        removeListenerFromWindow,
        getReadyState,
        documentMode,
        appendChildToElement,
        createElement,
        createElementInPageDocument,
        setInnerHtml,
        json,
        createStylesElement,
        checkShadowDomSupport,
        attachClosedShadowRoot,
    };
}

const protectedApi = new ProtectedApi();

export default protectedApi;

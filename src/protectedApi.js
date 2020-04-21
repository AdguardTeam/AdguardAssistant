/**
 * TODO: rewrite to class
 * TODO: add relevant jsdoc
 * Protected API
 * @constructor
 */
function ProtectedApi() {
    const win = window;
    const functionPType = Function.prototype;
    const originalGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const { documentMode, documentElement } = document;
    const originalAppendChild = document.appendChild;
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
     */
    const createElement = (markup) => {
        const doc = document.implementation.createHTMLDocument('');

        if (markup && markup[0] !== '<') {
            // eslint-disable-next-line no-param-reassign
            markup = `<${markup}></${markup}>`;
        }

        doc.body.innerHTML = markup;

        return doc.body.firstChild;
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
     * Safari crashes after adding style tag in attachShadow so exclude it
     * see: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/974
     */
    const checkShadowDomSupport = () => {
        const SAFARI_UA_REGEX = /^((?!chrome|android).)*safari/i;
        const isSafari = window.safari !== undefined
            || SAFARI_UA_REGEX.test(navigator.userAgent);

        return typeof originalAttachShadow !== 'undefined' && !isSafari;
    };

    return {
        functionBind,
        addListenerToWindow,
        removeListenerFromWindow,
        getReadyState,
        documentMode,
        appendChildToElement,
        createElement,
        json,
        createStylesElement,
        checkShadowDomSupport,
    };
}

const protectedApi = new ProtectedApi();

export default protectedApi;

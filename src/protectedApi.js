/**
 * Protected API
 * @returns {{addListenerToWindow, removeListenerFromWindow, getReadyState, documentMode}}
 * @constructor
 */
var ProtectedApi = function () {
    var win = window;
    var functionPType = Function.prototype;
    var originalGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var documentMode = document.documentMode;
    var originalAppendChild = document.appendChild;
    var originalJSON = win.JSON;
    var functionApply = functionPType.apply;
    var functionBind = functionPType.bind;
    var COMPLETE = 'complete';

    var apply = typeof Reflect !== 'undefined' ? Reflect.apply : function(target, _this, _arguments) {
        return functionApply.call(target, _this, _arguments);
    };

    var noop = function() {};
    var methodCallerFactory = function(owner, prop) {
        if (!owner) { return noop; }
        // Keeps reference to the method, so that it is unaffected
        // when `owner` is mutated.
        var method = owner[prop];
        return function () {
            if (method) {
                return apply(method, owner, arguments);
            }
        };
    };

    var getReadyState = (function() {
        // We need to add this hook for tests, because a phantomjs
        // doesn't work with Object.getOwnPropertyDescriptor correctly
        if (typeof originalGetOwnPropertyDescriptor(Document.prototype, 'readyState') === 'undefined') {
            return function() {
                return COMPLETE;
            };
        }

        var readyStateGetter = originalGetOwnPropertyDescriptor(Document.prototype, 'readyState').get;
        return function() {
            return apply(readyStateGetter, document, []);
        };
    })();

    var addListenerToWindow = methodCallerFactory(win, 'addEventListener');
    var removeListenerFromWindow = methodCallerFactory(win, 'removeEventListener');
    var querySelector = methodCallerFactory(document, 'querySelector');

    var appendChildToElement = function(elem, child) {
        apply(originalAppendChild, elem, [child]);
    };

    /**
     * Creating element instead `document.createElement`
     * to prevented a custom `document.createElement`
     * see: https://github.com/AdguardTeam/AdguardAssistant/issues/165
     */
    var createElement = function(markup) {
        var doc = document.implementation.createHTMLDocument('');

        if (markup && markup[0] !== '<') {
            markup = '<' + markup + '></' + markup + '>';
        }

        doc.body.innerHTML = markup;

        return doc.body.firstChild;
    };

    var json = {
        parse: methodCallerFactory(originalJSON, 'parse'),
        stringify: methodCallerFactory(originalJSON, 'stringify'),
    };

    /**
     * Creating style element
     * @param {String}  styles css styles in string
     * @param {String}  nonce  attribute for content-security-policy
     * @param {String}  id     to prevent duplicates, can be empty
     * @return {Object|false}  style tag with styles or false if the styles with transferred id is exist
     */
    var createStylesElement = function(styles, nonce, id) {
        if (id && querySelector('#' + id)) {
            return false;
        }

        var tagNode = createElement('style');
        tagNode.setAttribute('type', 'text/css');

        if (id) {
            tagNode.setAttribute('id', id);
        }

        if (nonce) {
            tagNode.setAttribute('nonce', nonce);
        }

        if (tagNode.styleSheet) {
            tagNode.styleSheet.cssText = styles;
        } else {
            appendChildToElement(tagNode, document.createTextNode(styles));
        }

        return tagNode;
    };

    return {
        functionBind: functionBind,
        addListenerToWindow: addListenerToWindow,
        removeListenerFromWindow: removeListenerFromWindow,
        getReadyState: getReadyState,
        documentMode: documentMode,
        appendChildToElement: appendChildToElement,
        createElement: createElement,
        json: json,
        createStylesElement: createStylesElement
    };
};

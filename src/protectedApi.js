/**
 * Protected API
 * @returns {{addListenerToWindow, removeListenerFromWindow, getReadyState, documentMode}}
 * @constructor
 */
var ProtectedApi = function () {
    var win = window;
    var functionPType = Function.prototype;
    var _apply = functionPType.apply;
    var originalGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var documentMode = document.documentMode;

    var apply = typeof Reflect !== 'undefined' ? Reflect.apply : function(target, _this, _arguments) {
        return _apply.call(target, _this, _arguments);
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
        var readyStateGetter = originalGetOwnPropertyDescriptor(Document.prototype, 'readyState').get;
        return function() {
            return apply(readyStateGetter, document, []);
        };
    })();

    var addListenerToWindow = methodCallerFactory(win, 'addEventListener');
    var removeListenerFromWindow = methodCallerFactory(win, 'removeEventListener');

    return {
        addListenerToWindow: addListenerToWindow,
        removeListenerFromWindow: removeListenerFromWindow,
        getReadyState: getReadyState,
        documentMode: documentMode
    };
};

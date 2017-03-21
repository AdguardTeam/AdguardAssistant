/**
 * Custom event
 * @returns {{attach: attach, notify: notify}}
 * @constructor
 */
var Event = function () {
    var listeners = [];

    var attach = function (listener) {
        listeners.push(listener);
    };

    var notify = function (args) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](args);
        }
    };

    return {
        attach: attach,
        notify: notify
    };
};

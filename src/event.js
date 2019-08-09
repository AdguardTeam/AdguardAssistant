/**
 * Custom event
 * @returns {{attach: attach, notify: notify}}
 * @constructor
 */
export default function CustomEvent() { // jshint ignore:line
    const listeners = [];

    const attach = (listener) => {
        listeners.push(listener);
    };

    const notify = (args) => {
        for (let i = 0; i < listeners.length; i += 1) {
            listeners[i](args);
        }
    };

    return {
        attach,
        notify,
    };
}

import protectedApi from './protectedApi';

/**
 * Run callback with args on document-end
 * @returns {{}}
 * @constructor
 */
function RunSheduler() {
    const READY_STATE_CHANGE = 'readystatechange';
    const INTERACTIVE = 'interactive';
    const COMPLETE = 'complete';

    // readyState become 'interactive' too early on IE10 and lower
    // https://github.com/AdguardTeam/AdguardForWindows/issues/2042
    // https://github.com/mobify/mobifyjs/issues/136
    // We fallback to running on `complete` only, as what jquery did.
    const isIE10OrLess = protectedApi.documentMode < 11;
    const onDocumentEnd = (callback, arg) => {
        let done = false;

        const onreadystatechange = () => {
            const readyState = protectedApi.getReadyState();
            if ((!isIE10OrLess && readyState === INTERACTIVE)
                || readyState === COMPLETE) {
                // eslint-disable-next-line no-use-before-define
                _callback();
            }
        };

        // Function declarations
        // eslint-disable-next-line no-underscore-dangle
        const _callback = () => {
            if (done) { return; }
            done = true;
            protectedApi.removeListenerFromWindow(READY_STATE_CHANGE, onreadystatechange);
            callback(arg);
        };

        // Attaches event listeners
        const readyState = protectedApi.getReadyState();
        if ((!isIE10OrLess && readyState === INTERACTIVE) || readyState === COMPLETE) {
            _callback();
            return;
        }

        protectedApi.addListenerToWindow(READY_STATE_CHANGE, onreadystatechange, true);
    };

    return {
        onDocumentEnd,
    };
}
const runSheduler = new RunSheduler();

export default runSheduler;

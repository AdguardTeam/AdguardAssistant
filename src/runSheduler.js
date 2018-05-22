/**
 * Run callback with args on document-end
 * @returns {{}}
 * @constructor
 */
var RunSheduler = function (protectedApi) {
    var READY_STATE_CHANGE = 'readystatechange';
    var INTERACTIVE = 'interactive';
    var COMPLETE = 'complete';

    // readyState become 'interactive' too early on IE10 and lower
    // https://github.com/AdguardTeam/AdguardForWindows/issues/2042
    // https://github.com/mobify/mobifyjs/issues/136
    // We fallback to running on `complete` only, as what jquery did.
    var isIE10OrLess = protectedApi.documentMode < 11;
    var onDocumentEnd = function(callback, arg) {
        var done = false;

        // Function declarations
        var _callback = function() {
            if (done) { return; }
            done = true;
            protectedApi.removeListenerFromWindow(READY_STATE_CHANGE, onreadystatechange);
            callback(arg);
        };
        var onreadystatechange = function() {
            var readyState = protectedApi.getReadyState();
            if ((!isIE10OrLess && readyState === INTERACTIVE) ||
                readyState === COMPLETE) {
                _callback();
            }
        };

        // Attaches event listeners
        var readyState = protectedApi.getReadyState();
        if ((!isIE10OrLess && readyState === INTERACTIVE) || readyState === COMPLETE) {
            _callback();
            return;
        }

        protectedApi.addListenerToWindow(READY_STATE_CHANGE, onreadystatechange, true);
    };

    return {
        onDocumentEnd: onDocumentEnd
    };
};

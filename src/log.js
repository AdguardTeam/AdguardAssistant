/**
 * Simple logger with log levels
 * @returns {{warn: warn, info: info, debug: debug, error: error}}
 * @constructor
 */
var Log = function () { // jshint ignore:line
    var currentLevel;
    // gulp preprocess condition
    // @if DEBUG
    currentLevel = 'DEBUG';
    // @endif

    // @if !DEBUG
    currentLevel = 'ERROR';
    // @endif

    var LogLevels = {
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        DEBUG: 4
    };

    var print = function (level, method, args) {

        //check log level
        if (LogLevels[currentLevel] < LogLevels[level]) {
            return;
        }
        if (!args || args.length === 0 || !args[0]) {
            return;
        }
        var str = args[0] + '';
        args = Array.prototype.slice.call(args, 1);
        var formatted = str.replace(/{(\d+)}/g, function (match, number) {
            return typeof  args[number] !== 'undefined' ? args[number] : match;
        });
        if (LogLevels[level] >= LogLevels[currentLevel]) {
            var now = new Date();
            formatted = now.toISOString() + ': ' + formatted;
        }
        console[method](formatted);
    };

    var debug = function () {
        print('DEBUG', 'log', arguments);
    };

    var info = function () {
        print('INFO', 'info', arguments);
    };

    var warn = function () {
        print('WARN', 'info', arguments);
    };

    var error = function () {
        print('ERROR', 'error', arguments);
    };

    return {
        warn: warn,
        info: info,
        debug: debug,
        error: error
    };
};

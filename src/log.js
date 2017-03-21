/**
 * Simple logger with log levels
 * @returns {{warn: warn, info: info, debug: debug, error: error}}
 * @constructor
 */
var Log = function () {
    var currentLevel = "INFO";

    var LogLevels = {
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        DEBUG: 4
    };

    var debug = function () {
        _print("DEBUG", "log", arguments);
    };

    var info = function () {
        _print("INFO", "info", arguments);
    };

    var warn = function () {
        _print("WARN", "info", arguments);
    };

    var error = function () {
        _print("ERROR", "error", arguments);
    };

    var _print = function (level, method, args) {
        //check log level
        if (LogLevels[currentLevel] < LogLevels[level]) {
            return;
        }
        if (!args || args.length === 0 || !args[0]) {
            return;
        }
        var str = args[0] + "";
        args = Array.prototype.slice.call(args, 1);
        var formatted = str.replace(/{(\d+)}/g, function (match, number) {
            return typeof  args[number] != "undefined" ? args[number] : match;
        });
        if (LogLevels[level] >= LogLevels["INFO"]) {
            var now = new Date();
            formatted = now.toISOString() + ": " + formatted;
        }
        console[method](formatted);
    };
    return {
        warn: warn,
        info: info,
        debug: debug,
        error: error
    };
};

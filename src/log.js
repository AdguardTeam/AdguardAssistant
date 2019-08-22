/* global DEBUG */
/**
 * Simple logger with log levels
 * @returns {{
 *  warn: warn,
 *  info: info,
 *  debug: debug,
 *  error: error
 * }}
 * @constructor
 */
function Log() {
    const currentLevel = DEBUG ? 'DEBUG' : 'ERROR';

    const LogLevels = {
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        DEBUG: 4,
    };

    const print = (level, method, args) => {
        // check log level
        if (LogLevels[currentLevel] < LogLevels[level]) {
            return;
        }
        if (!args || args.length === 0 || !args[0]) {
            return;
        }
        let formatted;
        if (typeof args[0] === 'object') {
            // eslint-disable-next-line prefer-destructuring
            formatted = args[0];
        } else {
            const str = `${args[0]}`;
            // eslint-disable-next-line no-param-reassign
            args = Array.prototype.slice.call(args, 1);
            formatted = str.replace(
                /{(\d+)}/g,
                (match, number) => (typeof args[number] !== 'undefined' ? args[number] : match),
            );
            if (LogLevels[level] >= LogLevels[currentLevel]) {
                const now = new Date();
                formatted = `${now.toISOString()}: ${formatted}`;
            }
        }
        // eslint-disable-next-line no-console
        console[method](formatted);
    };

    const debug = (...args) => {
        print('DEBUG', 'log', args);
    };

    const info = (...args) => {
        print('INFO', 'info', args);
    };

    const warn = (...args) => {
        print('WARN', 'info', args);
    };

    const error = (...args) => {
        print('ERROR', 'error', args);
    };

    return {
        debug, info, warn, error,
    };
}

const log = new Log();

export default log;

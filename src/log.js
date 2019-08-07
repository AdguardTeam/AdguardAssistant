/**
 * Simple logger with log levels
 * @returns {{warn: warn, info: info, debug: debug, error: error}}
 * @constructor
 */
export default class Log {
    constructor() {
        this.currentLevel = null;

        // gulp preprocess condition
        // @if DEBUG
        this.currentLevel = 'DEBUG';
        // @endif

        // @if !DEBUG
        this.currentLevel = 'ERROR';
        // @endif

        this.LogLevels = {
            ERROR: 1,
            WARN: 2,
            INFO: 3,
            DEBUG: 4,
        };
    }

    print(level, method, args) {
        // check log level
        if (this.LogLevels[this.currentLevel] < this.LogLevels[level]) {
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
            if (this.LogLevels[level] >= this.LogLevels[this.currentLevel]) {
                const now = new Date();
                formatted = `${now.toISOString()}: ${formatted}`;
            }
        }
        console[method](formatted);
    }

    debug(...args) {
        this.print('DEBUG', 'log', args);
    }

    info(...args) {
        this.print('INFO', 'info', args);
    }

    warn(...args) {
        this.print('WARN', 'info', args);
    }

    error(...args) {
        this.print('ERROR', 'error', args);
    }
}

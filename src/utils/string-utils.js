/**
 * String utils
 */
const StringUtils = { // jshint ignore:line
    /**
     * Replaces the format items in a specified String with
     * the text equivalents of the values of corresponding object instances.
     * @param format
     */
    format(format) {
        let res;
        for (let i = 1; i < arguments.length; i += 1) {
            // eslint-disable-next-line prefer-rest-params
            res = format.replace(`{${i - 1}}`, arguments[i]);
        }
        return res;
    },
};

export default StringUtils;

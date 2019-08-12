/**
 * String utils
 */

// eslint-disable-next-line import/prefer-default-export, no-shadow
export const format = (format) => {
    let res;
    // eslint-disable-next-line prefer-rest-params, no-undef
    for (let i = 1; i < arguments.length; i += 1) {
        // eslint-disable-next-line prefer-rest-params, no-undef
        res = format.replace(`{${i - 1}}`, arguments[i]);
    }
    return res;
};

/* eslint-disable no-alert, no-param-reassign, camelcase */
/* global GM_getValue, GM_setValue, GM_getResourceText, GM_addStyle */
/**
 * Gm api wrapper
 * @param ADG_addRule
 * @param ADG_temporaryDontBlock
 * @param ADG_sendAbuse
 * @param ADG_isFiltered
 * @param ADG_changeFilteringState
 * @returns {{
 * getValue,
 * setValue,
 * GM_getResourceText,
 * GM_addStyle,
 * ADG_addRule: *,
 * ADG_temporaryDontBlock: *,
 * ADG_sendAbuse: *,
 * ADG_isFiltered: *,
 * ADG_changeFilteringState:
 * *}}
 * @constructor
 */
export default function GM(
    ADG_addRule,
    ADG_temporaryDontBlock,
    ADG_sendAbuse,
    ADG_isFiltered,
    ADG_changeFilteringState,
    protectedApi,
) {
    if (!ADG_addRule) {
        ADG_addRule = (rule, callback) => {
            alert(`GM_api is not supported. ${rule} rule added`);
            if (callback) callback();
        };
    }

    // TODO: fix calling this one
    if (!ADG_sendAbuse) {
        ADG_sendAbuse = (url, callback) => {
            alert(`GM_api is not supported. ${url} abused`);
            if (callback) callback();
        };
    }

    if (!ADG_temporaryDontBlock) {
        ADG_temporaryDontBlock = (timeout, callback) => {
            alert(`GM_api is not supported. Do not block for ${timeout} seconds`);
            if (callback) callback();
        };
    }

    if (!ADG_isFiltered) {
        ADG_isFiltered = (callback) => {
            if (callback) callback();
            return true;
        };
    }

    if (!ADG_changeFilteringState) {
        ADG_changeFilteringState = (callback) => {
            alert('GM_api is not supported. State changed');
            if (callback) callback();
        };
    }

    const getValue = value => new Promise(((resolve) => {
        resolve(GM_getValue(value));
    }));

    const setValue = (key, value) => new Promise(((resolve) => {
        GM_setValue(key, protectedApi.json.stringify(value));
        resolve();
    }));

    return {
        getValue,
        setValue,
        GM_getResourceText,
        GM_addStyle,
        ADG_addRule,
        ADG_temporaryDontBlock,
        ADG_sendAbuse,
        ADG_isFiltered,
        ADG_changeFilteringState,
    };
}

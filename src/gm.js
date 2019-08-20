/* eslint-disable no-global-assign, no-alert, no-param-reassign, camelcase  */
/* global
GM_getValue,
GM_setValue,
GM_getResourceText,
GM_addStyle,
ADG_addRule,
ADG_temporaryDontBlock,
ADG_sendAbuse,
ADG_isFiltered,
ADG_changeFilteringState
*/
import protectedApi from './protectedApi';

/**
 * Gm api wrapper
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
function GM() {
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

const gm = new GM();

export default gm;

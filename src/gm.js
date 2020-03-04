/* eslint-disable object-shorthand */
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
ADG_changeFilteringState,
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
    const addRule = typeof ADG_addRule !== 'undefined'
        ? ADG_addRule
        : (rule, callback) => {
            alert(`GM_api is not supported. ${rule} rule added`);
            if (callback) callback();
        };

    // TODO: fix calling this one
    const sendAbuse = typeof ADG_sendAbuse !== 'undefined'
        ? ADG_sendAbuse
        : (url, callback) => {
            alert(`GM_api is not supported. ${url} abused`);
            if (callback) callback();
        };

    const temporaryDontBlock = typeof ADG_temporaryDontBlock !== 'undefined'
        ? ADG_temporaryDontBlock
        : (timeout, callback) => {
            alert(`GM_api is not supported. Do not block for ${timeout} seconds`);
            if (callback) callback();
        };

    const isFiltered = typeof ADG_isFiltered !== 'undefined'
        ? ADG_isFiltered
        : (callback) => {
            if (callback) callback(true);
            return true;
        };

    const changeFilteringState = typeof ADG_changeFilteringState !== 'undefined'
        ? ADG_changeFilteringState
        : (state, callback) => {
            alert('GM_api is not supported. State changed');
            if (callback) callback();
        };

    const getValue = (value) => new Promise(((resolve) => {
        resolve(GM_getValue(value));
    }));

    const setValue = (key, value) => new Promise(((resolve) => {
        GM_setValue(key, protectedApi.json.stringify(value));
        resolve();
    }));

    return {
        getValue,
        setValue,
        GM_getResourceText: GM_getResourceText,
        GM_addStyle: GM_addStyle,
        ADG_addRule: addRule,
        ADG_temporaryDontBlock: temporaryDontBlock,
        ADG_sendAbuse: sendAbuse,
        ADG_isFiltered: isFiltered,
        ADG_changeFilteringState: changeFilteringState,
    };
}

const gm = new GM();

export default gm;

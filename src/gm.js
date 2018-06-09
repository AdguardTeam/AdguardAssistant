/**
 * Gm api wrapper
 * @param ADG_addRule
 * @param ADG_temporaryDontBlock
 * @param ADG_sendAbuse
 * @param ADG_isFiltered
 * @param ADG_changeFilteringState
 * @returns {{getValue, setValue, GM_getResourceText, GM_addStyle, ADG_addRule: *, ADG_temporaryDontBlock: *, ADG_sendAbuse: *, ADG_isFiltered: *, ADG_changeFilteringState: *}}
 * @constructor
 */
/* global GM_getValue, GM_setValue, GM_getResourceText, GM_addStyle */
var GM = function (ADG_addRule, ADG_temporaryDontBlock, ADG_sendAbuse, ADG_isFiltered, ADG_changeFilteringState, protectedApi) { // jshint ignore:line
    if (!ADG_addRule) {
        ADG_addRule = function (rule, callback) {
            alert('GM_api is not supported. ' + rule + ' rule added');
            if(callback) callback();
        };
    }

    if (!ADG_sendAbuse) {
        ADG_sendAbuse = function (url, callback) {
            alert('GM_api is not supported. ' + url + 'abused');
            if(callback) callback();
        };
    }

    if (!ADG_temporaryDontBlock) {
        ADG_temporaryDontBlock = function (timeout, callback) {
            alert('GM_api is not supported. ' + 'Do not block for ' + timeout + ' seconds');
            if(callback) callback();
        };
    }

    if (!ADG_isFiltered) {
        ADG_isFiltered = function (callback) {
            if(callback) callback();
            return true;
        };
    }

    if (!ADG_changeFilteringState) {
        ADG_changeFilteringState = function (callback) {
            alert('GM_api is not supported. ' + 'State changed');
            if(callback) callback();
        };
    }

    var getValue = function(value) {
        return new Promise(function(resolve, reject) {
            resolve(GM_getValue(value));
        });
    };

    var setValue = function (key, value) {
        return new Promise(function(resolve, reject) {
            GM_setValue(key, protectedApi.json.stringify(value));
            resolve();
        });
    };

    return {
        getValue: getValue,
        setValue: setValue,
        GM_getResourceText: GM_getResourceText,
        GM_addStyle: GM_addStyle,
        ADG_addRule: ADG_addRule,
        ADG_temporaryDontBlock: ADG_temporaryDontBlock,
        ADG_sendAbuse: ADG_sendAbuse,
        ADG_isFiltered: ADG_isFiltered,
        ADG_changeFilteringState: ADG_changeFilteringState
    };
};

/**
 * Gm api wrapper
 * @param ADG_addRule
 * @param ADG_temporaryDontBlock
 * @param ADG_sendAbuse
 * @param ADG_isFiltered
 * @param ADG_changeFilteringState
 * @returns {{GM_getValue, GM_setValue, GM_getResourceText, GM_addStyle, ADG_addRule: *, ADG_temporaryDontBlock: *, ADG_sendAbuse: *, ADG_isFiltered: *, ADG_changeFilteringState: *}}
 * @constructor
 */
var GM = function (ADG_addRule, ADG_temporaryDontBlock, ADG_sendAbuse, ADG_isFiltered, ADG_changeFilteringState) {
    if (!ADG_addRule) {
        var ADG_addRule = function (rule) {
            alert(rule + ' rule added');
        };
    }

    if (!ADG_sendAbuse) {
        var ADG_sendAbuse = function (url) {
            alert(url + 'abused');
        };
    }

    if (!ADG_temporaryDontBlock) {
        var ADG_temporaryDontBlock = function (timeout) {
            alert('Do not block for ' + timeout + ' seconds');
        };
    }

    if (!ADG_isFiltered) {
        var ADG_isFiltered = function () {
            return true;
        };
    }

    if (!ADG_changeFilteringState) {
        var ADG_changeFilteringState = function () {
            alert('State changed');
        };
    }

    return {
        GM_getValue: GM_getValue,
        GM_setValue: GM_setValue,
        GM_getResourceText: GM_getResourceText,
        GM_addStyle: GM_addStyle,
        ADG_addRule: ADG_addRule,
        ADG_temporaryDontBlock: ADG_temporaryDontBlock,
        ADG_sendAbuse: ADG_sendAbuse,
        ADG_isFiltered: ADG_isFiltered,
        ADG_changeFilteringState: ADG_changeFilteringState
    };
};
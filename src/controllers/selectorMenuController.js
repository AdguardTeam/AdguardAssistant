/**
 * Selector menu controller
 * @param $
 * @param selector
 * @returns {{init: init}}
 * @constructor
 */
var SelectorMenuController = function ($, selector) {
    var contentDocument = null;
    var iframeCtrl = Ioc.get('iframeController');

    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        _bindEvents();
        _startSelector();
    };

    var _bindEvents = function () {
        var menuEvents = {
            '.close': _close,
            '.btn-default': _close
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var _close = function () {
        iframeCtrl.removeIframe();
    };

    var _startSelector = function () {
        selector.reset();
        selector.init(_onElementSelected);
    };

    var _onElementSelected = function (element) {
        iframeCtrl.showSliderMenu(element);
    };

    iframeCtrl.onCloseMenu.attach(selector.close);

    return {
        init: init
    };
};
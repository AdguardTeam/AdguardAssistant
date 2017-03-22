/**
 * Block preview controller
 * @param $
 * @param selector
 * @param gmApi
 * @returns {{init: init, setSelectedElement: setSelectedElement}}
 * @constructor
 */
var BlockPreviewController = function ($, selector, gmApi) {
    var contentDocument = null;
    var selectedElement = null;
    var selectedPath = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
    Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        selectedPath = options.path;
        contentDocument = iframe.contentDocument;
        selector.reset();
        _bindEvents();
        _hideElement();
    };

    var _bindEvents = function () {
        var menuEvents = {
            '.close': _close,
            '#select-another-element': _selectAnotherElement,
            '#end-preview': _showDetailedMenu,
            '#block-element': _blockElement
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var _hideElement = function () {
        $(selectedElement).addClass('adguard-hide');
    };

    var _showElement = function () {
        $(selectedElement).removeClass('adguard-hide');
    };

    var _selectAnotherElement = function () {
        _showElement();
        iframeCtrl.showSelectorMenu();
    };

    var _blockElement = function () {
        gmApi.ADG_addRule(selectedPath);
    };

    var _showDetailedMenu = function () {
        _showElement();
        iframeCtrl.showSliderMenu(selectedElement);
    };

    var _close = function () {
        _showElement();
        iframeCtrl.removeIframe();
    };

    return {
        init: init
    };
};

/**
 * Block preview controller
 * @param $
 * @param selector
 * @param gmApi
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
var BlockPreviewController = function ($, selector, gmApi) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var selectedPath = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
     Called from IframeController.showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        selectedPath = options.path;
        contentDocument = iframe.contentDocument;
        selector.reset();
        bindEvents();
        hideElement();
    };

    var close = function () {
        showElement();
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '#select-another-element': selectAnotherElement,
            '#end-preview': showDetailedMenu,
            '#block-element': blockElement
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var hideElement = function () {
        if (!selectedElement) {
            return;
        }
        $(selectedElement).addClass('adguard-hide');
    };

    var showElement = function () {
        if (!selectedElement) {
            return;
        }
        $(selectedElement).removeClass('adguard-hide');
    };

    var selectAnotherElement = function () {
        showElement();
        iframeCtrl.showSelectorMenu();
    };

    var blockElement = function () {
        gmApi.ADG_addRule(selectedPath);
    };

    var showDetailedMenu = function () {
        showElement();
        iframeCtrl.showSliderMenu(selectedElement);
    };

    return {
        init: init
    };
};

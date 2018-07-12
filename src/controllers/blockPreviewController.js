/**
 * Block preview controller
 * @param $
 * @param selector
 * @param gmApi
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
var BlockPreviewController = function ($, selector, gmApi, addRule) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var selectedPath = null;
    var iframeAnchor = null;
    var optionsState = null;
    var iframeCtrl = Ioc.get('iframeController');
    var previewStyleID = 'ag-preview-style-id';

    /*
     Called from IframeController.showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        selectedPath = options.path;
        currentElement = options.currentElement;
        contentDocument = iframe.contentDocument;
        iframeAnchor = options.iframeAnchor;
        optionsState = options.options;
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
        if (!selectedPath) {
            log.error('Can`t block element: `selector` path is empty');
            return;
        }

        iframeCtrl.hideElementsByPath(selectedPath, previewStyleID);
    };

    var showElement = function () {
        iframeCtrl.showHiddenElements(previewStyleID);
    };

    var selectAnotherElement = function () {
        showElement();
        iframeCtrl.showSelectorMenu();
    };

    var blockElement = function () {
        iframeCtrl.blockElement(selectedPath);
    };

    var showDetailedMenu = function () {
        showElement();
        iframeCtrl.showSliderMenu(currentElement, selectedElement, selectedPath, optionsState);
    };

    return {
        init: init
    };
};

import Ioc from '../ioc';
import log from '../log';

/**
 * Block preview controller
 * @param $
 * @param selector
 * @param gmApi
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
export default function BlockPreviewController($, selector, gmApi, addRule) { // jshint ignore:line
    let contentDocument = null;
    let currentElement = null;
    let selectedElement = null;
    let selectedPath = null;
    // let iframeAnchor = null;
    let optionsState = null;
    const iframeCtrl = Ioc.get('iframeController');
    const previewStyleID = 'ag-preview-style-id';

    const showElement = () => {
        iframeCtrl.showHiddenElements(previewStyleID);
    };

    const close = () => {
        showElement();
        iframeCtrl.removeIframe();
    };

    const selectAnotherElement = () => {
        showElement();
        iframeCtrl.showSelectorMenu();
    };

    const blockElement = () => {
        iframeCtrl.blockElement(selectedPath, addRule);
    };

    const showDetailedMenu = () => {
        showElement();
        iframeCtrl.showSliderMenu(currentElement, selectedElement, selectedPath, optionsState);
    };

    const bindEvents = () => {
        const menuEvents = {
            '.close': close,
            '#select-another-element': selectAnotherElement,
            '#end-preview': showDetailedMenu,
            '#block-element': blockElement,
        };
        Object.keys(menuEvents).forEach((item) => {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    const hideElement = () => {
        if (!selectedPath) {
            log.error('Can`t block element: `selector` path is empty');
            return;
        }

        iframeCtrl.hideElementsByPath(selectedPath, previewStyleID);
    };

    /*
     Called from IframeController.showMenuItem to initialize view
     */
    const init = (iframe, options) => {
        selectedElement = options.element;
        selectedPath = options.path;
        // eslint-disable-next-line prefer-destructuring
        currentElement = options.currentElement;
        // eslint-disable-next-line prefer-destructuring
        contentDocument = iframe.contentDocument;
        // iframeAnchor = options.iframeAnchor;
        optionsState = options.options;
        selector.reset();
        bindEvents();
        hideElement();
    };

    return {
        init,
    };
}

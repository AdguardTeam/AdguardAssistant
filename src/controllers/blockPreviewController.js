import log from '../log';
import { toArray } from '../utils/dom-utils';
import selector from '../adguard-selector';

/**
 * Block preview controller
 * @param addRule
 * @param iframe
 * @returns {{init: init}}
 * @constructor
 */
export default function BlockPreviewController(addRule, iframe) {
    let contentDocument = null;
    let currentElement = null;
    let selectedElement = null;
    let selectedPath = null;
    let optionsState = null;
    const iframeCtrl = iframe;
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

    const blockElement = (e) => {
        e.stopPropagation();
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
            const elems = contentDocument.querySelectorAll(item);
            toArray(elems).forEach((elem) => elem.addEventListener('click', menuEvents[item]));
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
    // eslint-disable-next-line no-shadow
    const init = (iframe, options) => {
        selectedElement = options.element;
        selectedPath = options.path;
        // eslint-disable-next-line prefer-destructuring
        currentElement = options.currentElement;
        // eslint-disable-next-line prefer-destructuring
        contentDocument = iframe.contentDocument;
        optionsState = options.options;
        selector.reset();
        bindEvents();
        hideElement();
    };

    return {
        init,
    };
}

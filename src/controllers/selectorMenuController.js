import { toArray } from '../utils/dom-utils';
import selector from '../adguard-selector';

/**
 * Selector menu controller
 * @returns {{init: init}}
 * @constructor
 */
export default function SelectorMenuController(iframe) {
    let contentDocument = null;
    const iframeCtrl = iframe;

    const close = () => {
        iframeCtrl.removeIframe();
    };

    const bindEvents = () => {
        const menuEvents = {
            '.close': close,
            '.btn-default': close,
        };
        Object.keys(menuEvents).forEach((item) => {
            const elems = contentDocument.querySelectorAll(item);
            toArray(elems).forEach((elem) => elem.addEventListener('click', menuEvents[item]));
        });
    };

    const onElementSelected = (element) => {
        iframeCtrl.showSliderMenu(element);
    };

    const startSelector = () => {
        selector.reset();
        selector.init(onElementSelected);
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    // eslint-disable-next-line no-shadow
    const init = (iframe) => {
        // eslint-disable-next-line prefer-destructuring
        contentDocument = iframe.contentDocument;
        bindEvents();
        startSelector();
    };

    iframeCtrl.onCloseMenu.attach(selector.close);

    return {
        init,
        startSelector,
    };
}

import Ioc from '../ioc';
import { toArray } from '../utils/dom-utils';

/**
 * Selector menu controller
 * @param selector
 * @returns {{init: init}}
 * @constructor
 */
export default function SelectorMenuController(selector) {
    let contentDocument = null;
    const iframeCtrl = Ioc.get('iframeController');

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
            toArray(elems).forEach(elem => elem.addEventListener('click', menuEvents[item]));
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

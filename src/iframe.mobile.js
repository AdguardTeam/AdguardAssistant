import { CSS, HTML } from './inline-resources';
import Ioc from './ioc';
import { objectAssign } from './utils/common-utils';
import SelectorMenuController from './controllers/selectorMenuController';
import SliderMenuControllerMobile from './controllers/SliderMenuControllerMobile';
import CustomEvent from './event';

/**
 * Manages iframe and it's content
 * @param log
 * @param selector
 * @param localization
 * @returns {{
 * showSelectorMenu: showSelectorMenu,
 * showSliderMenu: showSliderMenu,
 * setButtonPosition: setButtonPosition,
 * onCloseMenu: CustomEvent,
 * onShowMenuItem: CustomEvent,
 * removeIframe: removeIframe
 * }}
 * @constructor
 */
export default function IframeControllerMobile(
    log,
    selector,
    localization,
    protectedApi,
) {
    let iframe = null;
    let iframeElement = null;
    let currentItem = null;

    const onCloseMenu = new CustomEvent();
    const onShowMenuItem = new CustomEvent();

    const views = {};

    views['mobilePopup.html'] = HTML.popup;
    views['mobileMenu.html'] = HTML.mobile_menu;

    const defaultCSS = {
        clip: 'auto',
        'z-index': 2147483647,
    };

    const defaultAttributes = {
        class: selector.ignoreClassName(),
        frameBorder: 0,
        allowTransparency: 'true',
        id: 'iframe-x2eRYVVQRsG9',
    };

    const updateIframeAttrs = (attrs) => {
        iframe.removeAttribute('style');
        iframe.removeAttribute('height');

        const attributes = objectAssign(defaultAttributes, attrs);

        Object.keys(attributes).forEach((item) => {
            iframe.setAttribute(item, attributes[item]);
        });
    };

    const updateIframeStyles = (styles) => {
        const css = objectAssign(defaultCSS, styles);

        Object.keys(css).forEach((item) => {
            iframe.style[item] = css[item];
        });
    };

    const createIframe = (onIframeLoadCallback, styles, attrs) => {
        log.debug('Creating iframe');

        if (document.querySelector(`#${defaultAttributes.id}`)) {
            log.error('Iframe already added');
            return;
        }

        iframe = protectedApi.createElement('iframe');
        iframe.addEventListener('load', () => {
            onIframeLoadCallback();
            updateIframeAttrs(attrs);
            updateIframeStyles(styles);
        });

        iframeElement = iframe;

        const adgStylesSelector = protectedApi.createStylesElement(CSS.selector, 'adg-styles-selector');
        if (adgStylesSelector) {
            document.documentElement.appendChild(adgStylesSelector);
        }

        document.documentElement.appendChild(iframeElement);
    };

    const appendContent = (view) => {
        const { body } = iframe.contentDocument;
        for (let i = 0; i < body.children.length; i += 1) {
            body.removeChild(body.children[i]);
        }
        body.appendChild(view);
    };

    const localize = () => {
        const elements = iframe.contentDocument.querySelectorAll('[i18n]');
        for (let i = 0; i < elements.length; i += 1) {
            const message = localization.getMessage(elements[i].getAttribute('i18n'));
            localization.translateElement(elements[i], message);
        }

        const elementsWithTitle = iframe.contentDocument.querySelectorAll('[i18n-title]');
        for (let j = 0; j < elementsWithTitle.length; j += 1) {
            const title = localization.getMessage(elementsWithTitle[j].getAttribute('i18n-title'));
            elementsWithTitle[j].setAttribute('title', title);
        }
    };

    const hideIframe = () => {
        if (iframe) {
            iframe.style.display = 'none';
        }
    };

    const showIframe = () => {
        if (iframe) {
            iframe.style.display = 'block';
        }
    };

    const showMenuItem = (viewName, controller, options, styles, attrs) => {
        if (currentItem === viewName) {
            return;
        }

        const onIframeLoad = () => {
            const frameElement = iframe;
            const view = protectedApi.createElement(views[viewName]);
            const iframeStyles = CSS.common + CSS.mobile;
            view.appendChild(protectedApi.createStylesElement(iframeStyles));
            appendContent(view);
            localize();

            if (!options) {
                // eslint-disable-next-line no-param-reassign
                options = {};
            }

            if (controller) {
                controller.init(frameElement, options);
            }
            updateIframeAttrs(attrs);
            updateIframeStyles(styles);

            currentItem = viewName;
            onShowMenuItem.notify();
            showIframe();
        };

        if (!iframe) {
            const adgStylesSelector = protectedApi.createStylesElement(CSS.selector, 'adg-styles-selector');
            if (adgStylesSelector) {
                document.documentElement.appendChild(adgStylesSelector);
            }

            createIframe(onIframeLoad, styles, attrs);
            return;
        }

        onIframeLoad();
    };

    const startSelect = () => {
        hideIframe();
        const controller = Ioc.get(SelectorMenuController);
        controller.startSelector();
    };

    const showSelectorMenu = () => {
        hideIframe();
        selector.close();
        const styles = {
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            'border-radius': '2px',
            background: 'transparent',
            width: '40vmax',
            height: '40vmax',
        };

        // eslint-disable-next-line no-use-before-define
        showMenuItem('mobilePopup.html', mobilePopupButtonsInit(), null, styles);
    };


    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    const removeIframe = (e) => {
        if (e && e.isTrusted === false) {
            return false;
        }

        if (!iframeElement) {
            return false;
        }

        document.removeEventListener('click', removeIframe);
        window.removeEventListener('orientationchange', showSelectorMenu);
        document.documentElement.removeChild(iframeElement);
        iframe = null;
        iframeElement = null;
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
        return undefined;
    };

    const mobilePopupButtonsInit = () => ({
        init() {
            const startSelectMode = iframe.contentDocument.querySelector('.start-select-mode');
            const cancelSelectMode = iframe.contentDocument.querySelector('.cancel-select-mode');

            startSelectMode.addEventListener('click', startSelect);
            cancelSelectMode.addEventListener('click', removeIframe);
        },
    });

    const showSliderMenu = (element) => {
        const controller = Ioc.get(SliderMenuControllerMobile);
        const options = {
            element,
        };
        const styles = {
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70vw',
            height: '27vw',
        };

        showMenuItem('mobileMenu.html', controller, options, styles);
    };

    return {
        showSelectorMenu,
        showSliderMenu,
        onCloseMenu,
        onShowMenuItem,
        removeIframe,
        startSelect,
    };
}

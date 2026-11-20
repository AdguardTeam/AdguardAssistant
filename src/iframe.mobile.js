import { CSS, HTML } from './inline-resources';
import ioc from './ioc';
import SelectorMenuController from './controllers/selectorMenuController';
import SliderMenuControllerMobile from './controllers/sliderMenuControllerMobile';
import CustomEvent from './event';
import protectedApi from './protectedApi';
import log from './log';
import selector from './adguard-selector';
import localization from './localization';
import settings from './settings';
import { adoptStyleSheet, supportsAdoptedStyleSheets } from './utils/style-sheet';
import pkg from '../package.json';

// package.json carries no version outside CI/release builds; show 'dev'
// instead of 'undefined' for local development builds.
const appVersion = pkg.version || 'dev';

/**
 * Manages iframe and it's content
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
export default function IframeControllerMobile() {
    let iframe = null;
    let iframeAnchor = null;
    let currentItem = null;

    const onCloseMenu = new CustomEvent();
    const onShowMenuItem = new CustomEvent();

    const views = {};

    views['mobilePopup.html'] = HTML.popup;
    views['mobileMenu.html'] = HTML.mobile_menu;

    /**
     * Marks the element that hosts the assistant dialog. The element can be a
     * shadow host, so page scripts cannot find the dialog by the iframe id.
     */
    const HOST_ATTRIBUTE = 'data-adguard-assistant-dialog';

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

        const attributes = { ...defaultAttributes, ...attrs };

        Object.keys(attributes).forEach((item) => {
            iframe.setAttribute(item, attributes[item]);
        });
    };

    const updateIframeStyles = (styles) => {
        const css = { ...defaultCSS, ...styles };

        Object.keys(css).forEach((item) => {
            iframe.style[item] = css[item];
        });
    };

    const createIframe = (onIframeLoadCallback, styles, attrs) => {
        log.debug('Creating iframe');

        if (iframe
            || document.querySelector(`#${defaultAttributes.id}`)
            || document.querySelector(`[${HOST_ATTRIBUTE}]`)) {
            log.error('Iframe already added');
            return;
        }

        iframe = protectedApi.createElement('iframe');
        iframe.addEventListener('load', () => {
            onIframeLoadCallback();
            updateIframeAttrs(attrs);
            updateIframeStyles(styles);
        });

        // The dialog is kept in a closed shadow root when Shadow DOM is
        // available, so page scripts cannot read or change the rule before
        // the user saves it.
        if (protectedApi.checkShadowDomSupport()) {
            const shadowHost = protectedApi.createElementInPageDocument('div');
            const shadowRoot = protectedApi.attachClosedShadowRoot(shadowHost);
            if (shadowRoot) {
                // Without the host reset the page CSS can hide the dialog,
                // for example `div:empty { display: none }`.
                shadowRoot.appendChild(
                    protectedApi.createStylesElement(CSS.host, settings.getStyleNonce()),
                );
                shadowRoot.appendChild(iframe);
                iframeAnchor = shadowHost;
            }
        }

        if (!iframeAnchor) {
            iframeAnchor = iframe;
        }
        iframeAnchor.setAttribute(HOST_ATTRIBUTE, '');

        if (!adoptStyleSheet('adg-styles-selector', CSS.selector)
            && !supportsAdoptedStyleSheets()) {
            const adgStylesSelector = protectedApi.createStylesElement(
                CSS.selector,
                settings.getStyleNonce(),
                'adg-styles-selector',
            );
            if (adgStylesSelector) {
                document.documentElement.appendChild(adgStylesSelector);
            }
        }

        document.documentElement.appendChild(iframeAnchor);
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
            view.appendChild(
                protectedApi.createStylesElement(iframeStyles, settings.getStyleNonce()),
            );
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
            if (!adoptStyleSheet('adg-styles-selector', CSS.selector)
                && !supportsAdoptedStyleSheets()) {
                const adgStylesSelector = protectedApi.createStylesElement(
                    CSS.selector,
                    settings.getStyleNonce(),
                    'adg-styles-selector',
                );
                if (adgStylesSelector) {
                    document.documentElement.appendChild(adgStylesSelector);
                }
            }

            createIframe(onIframeLoad, styles, attrs);
            return;
        }

        onIframeLoad();
    };

    const startSelect = () => {
        hideIframe();
        const controller = new SelectorMenuController(ioc.get('iframeController'));
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

        if (!iframeAnchor) {
            return false;
        }

        document.removeEventListener('click', removeIframe);
        window.removeEventListener('orientationchange', showSelectorMenu);
        document.documentElement.removeChild(iframeAnchor);
        iframe = null;
        iframeAnchor = null;
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
        return undefined;
    };

    const mobilePopupButtonsInit = () => ({
        init() {
            const startSelectMode = iframe.contentDocument.querySelector('.start-select-mode');
            const cancelSelectMode = iframe.contentDocument.querySelector('.cancel-select-mode');
            const appVersionElem = iframe.contentDocument.querySelector('#appVersion');

            startSelectMode.addEventListener('click', startSelect);
            cancelSelectMode.addEventListener('click', removeIframe);
            appVersionElem.innerText = `v${appVersion}`;
        },
    });

    const showSliderMenu = (element) => {
        const controller = new SliderMenuControllerMobile(
            ioc.get('addRule'),
            ioc.get('iframeController'),
        );
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

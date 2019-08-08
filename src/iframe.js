/**
 * Manages iframe and it's content
 * @param $
 * @param settings
 * @param uiUtils
 * @param gmApi
 * @param log
 * @param selector
 * @param uiValidationUtils
 * @param localization
 * @returns {{
 * showDetailedMenu: showDetailedMenu,
 * showSelectorMenu: showSelectorMenu,
 * showSliderMenu: showSliderMenu,
 * showBlockPreview: showBlockPreview,
 * showSettingsMenu: showSettingsMenu,
 * setButtonPosition: setButtonPosition,
 * onCloseMenu: CustomEvent,
 * onShowMenuItem: CustomEvent,
 * removeIframe: removeIframe,
 * resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced,
 * resizeSliderMenuToNormal: resizeSliderMenuToNormal
 * }}
 * @constructor
 */
/* global
StringUtils,
Ioc,
CommonUtils,
DetailedMenuController,
SelectorMenuController,
SliderMenuController,
BlockPreviewController,
SettingsMenuController
*/

import { HTML } from './inline-resources';

export default function IframeController(
    $,
    settings,
    uiUtils,
    gmApi,
    log,
    selector,
    uiValidationUtils,
    localization,
    protectedApi,
) {
    let iframe = null;
    let iframeAnchor = null;
    let currentItem = null;
    const iframeMaxWidth = 320;
    const iframeMaxHeight = 407;
    let menuMaxWidth = 668;
    let settingsMaxWidth = 458;
    const iframePositionOffset = 20;
    let buttonPosition = null;
    const blockedElementsStyleID = 'ag-hide-elements-style-id';

    const views = {};

    views[settings.MenuItemsNames.DetailedMenu] = HTML.detailed_menu;
    views[settings.MenuItemsNames.SelectorMenu] = HTML.selector_menu;
    views[settings.MenuItemsNames.SliderMenu] = HTML.slider_menu;
    views[settings.MenuItemsNames.BlockPreview] = HTML.preview;
    views[settings.MenuItemsNames.SettingsMenu] = HTML.settings_menu;

    if (window.innerWidth < menuMaxWidth) menuMaxWidth = window.innerWidth;
    if (window.innerWidth < settingsMaxWidth) settingsMaxWidth = window.innerWidth;

    const onCloseMenu = new CustomEvent();
    const onShowMenuItem = new CustomEvent();

    // Important attribute for all inline stylesheets.
    // It needs for Content-Security-Policy.
    const getStyleNonce = () => {
        const adgSettings = settings.getAdguardSettings();
        if (adgSettings === null) {
            return '';
        }
        return adgSettings.nonce;
    };

    const createShadowRootElement = (iframeAnc) => {
        const shadowiframeAnchor = iframeAnc.attachShadow({ mode: 'closed' });
        const stylesElement = protectedApi.createStylesElement(
            CSS.common + CSS.iframe,
            getStyleNonce(),
        );
        shadowiframeAnchor.appendChild(stylesElement);

        return shadowiframeAnchor;
    };

    const createIframe = (onIframeLoadCallback) => {
        log.debug('Creating iframe');
        iframe = protectedApi.createElement('iframe');

        // IE hack for prevent access denied error
        // see: https://stackoverflow.com/questions/1886547/access-is-denied-javascript-error-when-trying-to-access-the-document-object-of
        if (navigator.userAgent.match(/msie/i)) {
            iframe.src = `javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\"${document.domain}\\";<\\\\/script>\\');document.close();};</script>'`;
        }

        const attributes = {
            id: settings.Constants.IFRAME_ID,
            class: selector.ignoreClassName(),
            frameBorder: 0,
            allowTransparency: 'true',
        };
        Object.keys(attributes).forEach((item) => {
            iframe.setAttribute(item, attributes[item]);
        });
        let iframeAlreadyLoaded = false;
        $(iframe).on('load', () => {
            if (iframeAlreadyLoaded) {
                // IE calls load each time when we use document.close
                return;
            }

            iframeAlreadyLoaded = true;
            onIframeLoadCallback();
        });

        if (protectedApi.checkShadowDomSupport()) {
            iframeAnchor = protectedApi.createElement('div');
            createShadowRootElement(iframeAnchor).appendChild(iframe);
        } else {
            iframeAnchor = iframe;
        }

        document.documentElement.appendChild(iframeAnchor);
    };

    const getIframePosition = () => {
        const viewPort = uiValidationUtils.getViewPort();

        if (!buttonPosition) {
            return {
                left: iframe.offsetLeft <= 0 ? window.innerWidth : iframe.offsetLeft,
                top: parseInt(iframe.style.top, 10) || iframePositionOffset,
            };
        }

        const defaultPosition = {
            left: buttonPosition.left,
            top: buttonPosition.top,
        };
        const sides = [
            { // left top
                left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
                top: buttonPosition.top - iframeMaxHeight - iframePositionOffset,
            },
            { // right top
                left: buttonPosition.left + iframePositionOffset,
                checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
                top: buttonPosition.top - iframeMaxHeight - iframePositionOffset,
            },
            { // bottom right
                left: buttonPosition.left + iframePositionOffset,
                checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
                checkTop: buttonPosition.top + iframeMaxHeight + iframePositionOffset,
                top: buttonPosition.top + iframePositionOffset,
            },
            { // bottom left
                left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
                checkTop: buttonPosition.top + iframeMaxHeight + iframePositionOffset,
                top: buttonPosition.top + iframePositionOffset,
            },
        ];

        for (let i = 0; i < sides.length; i += 1) {
            const currentSide = sides[i];
            const left = currentSide.checkLeft ? currentSide.checkLeft : currentSide.left;
            const top = currentSide.checkTop ? currentSide.checkTop : currentSide.top;

            if (left < 0 || left > viewPort.width) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (top < 0 || top > viewPort.height) {
                // eslint-disable-next-line no-continue
                continue;
            }
            return currentSide;
        }

        return defaultPosition;
    };

    const specifyIframePosition = () => {
        const viewPort = uiValidationUtils.getViewPort();

        if ((iframe.offsetLeft + iframe.offsetWidth) > viewPort.width) {
            iframe.style.left = `${Math.max(0, (viewPort.width - iframe.offsetWidth - iframePositionOffset))}px`;
        }
        if (iframe.offsetLeft < 0) {
            iframe.style.left = `${iframePositionOffset}px`;
        }
        if ((iframe.offsetTop + iframe.offsetHeight) > viewPort.height) {
            iframe.style.top = `${Math.max(0, (viewPort.height - iframe.offsetHeight - iframePositionOffset))}px`;
        }
        if (iframe.offsetHeight < 0) {
            iframe.style.top = `${iframePositionOffset}px`;
        }
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
    };

    const resizeIframe = (width, height) => {
        const frame = iframe;

        // setting iframe height dynamically based on inner content
        if (height === 'auto' || !height) {
            // eslint-disable-next-line no-param-reassign
            height = frame.contentWindow.document.body.querySelector('.main').clientHeight || iframeMaxHeight;
        }

        if (width) {
            frame.width = width;
            frame.style.setProperty('width', `${width}px`, 'important');
        }

        if (height) {
            frame.height = height;
            frame.style.setProperty('height', `${height}px`, 'important');
        }
    };

    const showMenuItem = (viewName, controller, width, height, options) => {
        log.debug(StringUtils.format('Showing menu item: {0}', viewName));
        if (currentItem === viewName) {
            return;
        }
        const onIframeLoad = () => {
            const frameElement = iframe;

            const view = protectedApi.createElement(views[viewName]);
            const stylesElement = protectedApi.createStylesElement(
                CSS.common + CSS.button + CSS.iframe,
                getStyleNonce(),
            );
            view.appendChild(stylesElement);
            appendContent(view);
            localize();
            if (!options) {
                // eslint-disable-next-line no-param-reassign
                options = {};
            }
            // eslint-disable-next-line no-param-reassign
            options.iframeAnchor = iframeAnchor;
            controller.init(frameElement, options);
            currentItem = viewName;
            onShowMenuItem.notify();
            if (options.dragElement) {
                uiUtils.makeIframeDraggable(
                    iframe,
                    iframe.contentDocument.querySelector(options.dragElement),
                );
            }

            // make iframe size as like internal content size
            resizeIframe(width, height);

            const iframePosition = getIframePosition();
            iframe.style.left = `${iframePosition.left}px`;
            iframe.style.top = `${iframePosition.top}px`;

            // fixing iframe position after resize, to avoid iframe outside of the viewport
            specifyIframePosition();
        };

        if (!iframe) {
            const adgStylesSelector = protectedApi.createStylesElement(CSS.selector, getStyleNonce(), 'adg-styles-selector');
            if (adgStylesSelector) {
                document.documentElement.appendChild(adgStylesSelector);
            }

            createIframe(onIframeLoad);
            return;
        }
        onIframeLoad();
    };

    const setButtonPosition = (coords) => {
        buttonPosition = coords;
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
        document.documentElement.removeChild(iframeAnchor);
        iframe = null;
        iframeAnchor = null;
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
        return undefined;
    };

    const setCloseEventIfNotHitIframe = (setEvent) => {
        document.removeEventListener('click', removeIframe);

        if (setEvent) {
            window.setTimeout(() => {
                document.addEventListener('click', removeIframe);
            }, 150);
        }
    };

    const showDetailedMenu = () => {
        const controller = Ioc.get(DetailedMenuController);
        const options = { dragElement: '.menu-head' };
        showMenuItem(settings.MenuItemsNames.DetailedMenu, controller, iframeMaxWidth, 'auto', options);
        setCloseEventIfNotHitIframe(true);
    };

    const showSelectorMenu = () => {
        const controller = Ioc.get(SelectorMenuController);
        const options = { dragElement: '.head' };
        showMenuItem(settings.MenuItemsNames.SelectorMenu, controller, menuMaxWidth, 160, options);
        setCloseEventIfNotHitIframe(false);
    };

    const showSliderMenu = (initElement, currentElement, path, optionsState) => {
        const controller = Ioc.get(SliderMenuController);
        const options = {
            path,
            currentElement,
            element: initElement,
            dragElement: '.head',
            options: optionsState,
        };
        showMenuItem(settings.MenuItemsNames.SliderMenu, controller, menuMaxWidth, 'auto', options);
        setCloseEventIfNotHitIframe(true);
    };

    const showBlockPreview = (initElement, path, currentElement, optionsState) => {
        const controller = Ioc.get(BlockPreviewController);
        const options = {
            path,
            currentElement,
            element: initElement,
            dragElement: '.head',
            options: optionsState,
        };
        showMenuItem(settings.MenuItemsNames.BlockPreview, controller, menuMaxWidth, 'auto', options);
        setCloseEventIfNotHitIframe(true);
    };

    const showSettingsMenu = () => {
        const controller = Ioc.get(SettingsMenuController);
        const options = { dragElement: '.head' };
        showMenuItem(settings.MenuItemsNames.SettingsMenu, controller, 400, 468, options);
        setCloseEventIfNotHitIframe(true);
    };

    const resizeSliderMenuToAdvanced = () => {
        resizeIframe(null, null);
    };

    const resizeSliderMenuToNormal = () => {
        resizeIframe(null, null);
    };

    const hideElementsByPath = (selectedPath, styleID) => {
        if (!selectedPath) {
            return false;
        }

        let slctr;
        let style;

        if (selectedPath.indexOf('://') > 0) {
            // all images by src
            slctr = `[src*="${selectedPath.split('$domain=')[0]}"]`;
        } else {
            // eslint-disable-next-line prefer-destructuring
            slctr = selectedPath.split('##')[1];
        }

        if (slctr) {
            style = `${slctr}{display:none!important}`;
        } else {
            log.error('Can`t block element: `selector` path is empty');
            return false;
        }

        if (!styleID) {
            // eslint-disable-next-line no-param-reassign
            styleID = blockedElementsStyleID;
        }

        const stylesElement = document.documentElement.querySelector(`#${styleID}`);

        if (stylesElement) {
            stylesElement.innerHTML = `${stylesElement.innerHTML} ${style}`;
        } else {
            document.documentElement.appendChild(
                protectedApi.createStylesElement(style, getStyleNonce(), styleID),
            );
        }

        // do not hide assistant div if the user wrote a rule
        // that blocks all div or iframe elements
        iframeAnchor.style.setProperty('display', 'block', 'important');
        return undefined;
    };

    // show elements hidden by `hideElementsByPath` function
    const showHiddenElements = (styleID) => {
        if (!styleID) {
            // eslint-disable-next-line no-param-reassign
            styleID = blockedElementsStyleID;
        }
        const stylesElement = document.documentElement.querySelector(`#${styleID}`);

        if (stylesElement) {
            stylesElement.parentNode.removeChild(stylesElement);
        }
    };

    const blockElement = (path, addRule) => {
        if (gmApi.ADG_addRule) {
            gmApi.ADG_addRule(path, () => {
                removeIframe();
                hideElementsByPath(path);
                CommonUtils.bypassCache();
            });
        } else {
            if (!addRule) {
                log.error('Callback function `addRule` can\'t be undefined!');
            }

            addRule(path);
            removeIframe();
            hideElementsByPath(path);
            CommonUtils.bypassCache();
        }
    };

    return {
        showDetailedMenu,
        showSelectorMenu,
        showSliderMenu,
        showBlockPreview,
        showSettingsMenu,
        setButtonPosition,
        onCloseMenu,
        onShowMenuItem,
        removeIframe,
        resizeSliderMenuToAdvanced,
        resizeSliderMenuToNormal,
        resizeIframe,
        hideElementsByPath,
        showHiddenElements,
        blockElement,
    };
}

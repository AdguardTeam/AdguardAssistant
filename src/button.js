import { hasClass, addClass } from './utils/dom-utils';
import { HTML, CSS } from './inline-resources';
import protectedApi from './protectedApi';
import log from './log';
import settings from './settings';
import uiValidationUtils from './utils/ui-validation-utils';
import uiUtils from './utils/ui-utils';
import ioc from './ioc';

/**
 * Adguard assistant button
 * @returns {{show: show, remove: remove}}
 * @constructor
 */
function UIButton() {
    let button = null;
    let buttonElement = null;
    let isFullScreenEventsRegistered = false;
    let iframeController = null;

    // Important attribute for all inline stylesheets.
    // It needs for Content-Security-Policy.
    const getStyleNonce = () => {
        const adgSettings = settings.getAdguardSettings();
        if (adgSettings === null) {
            return '';
        }
        return adgSettings.nonce;
    };

    const isButtonAlreadyInDOM = () => {
        const alert = document.querySelector('.adguard-alert');
        if (alert) {
            log.error('Assistant button is already in DOM');
            return true;
        }
        return false;
    };

    /**
     * Checking browser and other requirements.
     * @private
     */
    const checkRequirements = () => {
        if (!uiValidationUtils.validateBrowser()) {
            return false;
        }

        if (!uiValidationUtils.validatePage()) {
            return false;
        }

        if (!uiValidationUtils.checkVisibleAreaSize()) {
            return false;
        }

        if (isButtonAlreadyInDOM()) {
            return false;
        }
        return true;
    };

    /**
     * Set a special classes for the pages on which
     * under the button there are important elements
     * issue: https://github.com/AdguardTeam/AdguardAssistant/issues/32
     */
    const respectPageElements = (btn) => {
        const buttonInRightBottom = hasClass(btn, 'adguard-assistant-button-bottom')
            && hasClass(btn, 'adguard-assistant-button-right');

        if (buttonInRightBottom && document.location.hostname.indexOf('vk.com') >= 0) {
            addClass(btn, 'adguard-assistant-button-respect adguard-assistant-button-respect-vk');
        }
        if (buttonInRightBottom && document.location.hostname.indexOf('facebook.com') >= 0) {
            addClass(btn, 'adguard-assistant-button-respect adguard-assistant-button-respect-fb');
        }
        return false;
    };

    const setPositionSettingsToButton = (btn) => {
        const position = settings.getUserPositionForButton();
        if (settings.getIconSize()) {
            addClass(btn, 'logo-small');
        }

        // The anchor determines from which side of the
        // browser the positions of `position.x`, `position.y`.
        // If `position` parameter is not defined,
        // so the position of the button is set in the corners of the browser
        if (position && position.storedAnchor) {
            uiUtils.setAnchorPosition.positionY(btn, position.storedAnchor.top);
            uiUtils.setAnchorPosition.positionX(btn, position.storedAnchor.left);
            uiUtils.moveElementTo(btn, position.x, position.y);
            uiUtils.checkElementPosition(btn, position);
            return false;
        }

        // Getting the corner of the browser where the button is placed
        const side = settings.getButtonSide();

        if (side) {
            uiUtils.setAnchorPosition.positionY(btn, side.top);
            uiUtils.setAnchorPosition.positionX(btn, side.left);
            respectPageElements(btn);
        }

        return undefined;
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    const getButtonPosition = (btn) => {
        const box = btn.getBoundingClientRect();
        return {
            top: box.top + btn.offsetHeight / 2,
            left: box.left + btn.offsetWidth / 2,
        };
    };

    const hideButton = () => {
        if (!button) {
            return;
        }
        button.style.setProperty('display', 'none', 'important');
    };

    const showButton = () => {
        if (!button) {
            return;
        }
        button.style.setProperty('display', 'block', 'important');
    };

    const hideRestoreOnFullScreen = () => {
        if (isFullScreenEventsRegistered) {
            return;
        }

        let isFullScreen = false;
        const onFullScreen = () => {
            if (!isFullScreen) {
                hideButton();
                isFullScreen = true;
            } else {
                showButton();
                isFullScreen = false;
            }
        };
        document.addEventListener('webkitfullscreenchange', onFullScreen);
        document.addEventListener('mozfullscreenchange', onFullScreen);
        document.addEventListener('fullscreenchange', onFullScreen);

        isFullScreenEventsRegistered = true;
    };

    const registerEvents = (btn) => {
        const onDragEnd = (data) => {
            settings.setUserPositionForButton(data);
        };

        const openMenu = () => {
            iframeController.setButtonPosition(getButtonPosition(btn));
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(btn, onDragEnd, openMenu);
        hideRestoreOnFullScreen();
    };

    /**
     * Shows Adguard initial button
     */
    const show = () => {
        // TODO: get rid of it
        iframeController = ioc.get('iframeController');
        iframeController.onCloseMenu.attach(showButton);
        iframeController.onShowMenuItem.attach(hideButton);

        if (!checkRequirements()) {
            log.info('Environment doesn\'t satisfy requirements, so don\'t show Adguard');
            return;
        }
        if (button) {
            return;
        }
        log.debug('Requirements checked, all ok');

        buttonElement = protectedApi.createElement('div');
        buttonElement.innerHTML = HTML.button;
        button = buttonElement.firstChild;
        let adgStylesButton;
        if (protectedApi.checkShadowDomSupport()) {
            const shadowbuttonElement = buttonElement.attachShadow({ mode: 'closed' });
            adgStylesButton = protectedApi.createStylesElement(
                CSS.common + CSS.button,
                getStyleNonce(),
            );
            shadowbuttonElement.appendChild(adgStylesButton);
            shadowbuttonElement.appendChild(button);
            document.documentElement.appendChild(buttonElement);
        } else {
            adgStylesButton = protectedApi.createStylesElement(CSS.button, getStyleNonce(), 'adg-styles-button');
            if (adgStylesButton) {
                document.documentElement.appendChild(adgStylesButton);
            }

            document.documentElement.appendChild(button);
            buttonElement = button;
        }

        setPositionSettingsToButton(button);
        registerEvents(button);
    };

    const removeButton = () => {
        if (!button) {
            return;
        }
        document.documentElement.removeChild(buttonElement);
        button = null;
    };

    return {
        show,
        remove: removeButton,
    };
}

const button = new UIButton();

export default button;

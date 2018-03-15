/**
 * Adguard assistant button
 * @param log Logger
 * @param settings User settings
 * @param uiValidationUtils Validation utils
 * @param $ balalaika
 * @param gmApi Gm API impl
 * @param uiUtils UI Utils
 * @param iframeController Iframe controller
 * @returns {{show: show, remove: remove}}
 * @constructor
 */
var UIButton = function(log, settings, uiValidationUtils, $, gmApi, uiUtils, iframeController) { // jshint ignore:line
    var button = null;
    var buttonElement = null;
    var isFullScreenEventsRegistered = false;

    /**
     * Shows Adguard initial button
     */
    var show = function() {
        if (!checkRequirements()) {
            log.info("Environment doesn't satisfy requirements, so don't show Adguard");
            return;
        }
        if (button) {
            return;
        }
        log.debug("Requirements checked, all ok");

        buttonElement = CommonUtils.createElement('div');
        buttonElement.innerHTML = HTML.button;
        button = buttonElement.firstChild;

        if (CommonUtils.checkShadowDomSupport()) {
            var shadowbuttonElement = buttonElement.attachShadow({mode: 'closed'});
            shadowbuttonElement.appendChild(CommonUtils.createStylesElement(CSS.common + CSS.button));
            shadowbuttonElement.appendChild(button);
            document.documentElement.appendChild(buttonElement);
        } else {
            var adgStylesButton = CommonUtils.createStylesElement(CSS.button, 'adg-styles-button');
            if (adgStylesButton) {
                document.documentElement.appendChild(adgStylesButton);
            }

            document.documentElement.appendChild(button);
            buttonElement = button;
        }

        setPositionSettingsToButton(button);
        registerEvents(button);
    };

    /**
     * Checking browser and other requirements.
     * @private
     */
    var checkRequirements = function() {
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

    var isButtonAlreadyInDOM = function() {
        var already =  $('.adguard-alert').length > 0;

        if (already) {
            log.error('Assistant button is already in DOM');
            return true;
        }
    };

    var setUserPositionIfExists = function(button) {
        var position = settings.getUserPositionForButton();

        // check if the browser stores old data without a anchor to prevent an error
        if (!position || !position.storedAnchor) {
            return false;
        }

        uiUtils.setAnchorPosition.positionY(button, position.storedAnchor.top);
        uiUtils.setAnchorPosition.positionX(button, position.storedAnchor.left);

        uiUtils.moveElementTo(button, position.x, position.y);

        // validate that button is in the viewport
        // with timeout for deferred execution
        setTimeout(function () {
            uiUtils.checkElementPosition(button, position);
        });

        return true;
    };

    var setPositionSettingsToButton = function(button) {
        var config = settings.getSettings();
        if (!config.largeIcon) {
            $(button).addClass('logo-small');
        }
        if (setUserPositionIfExists(button)) {
            return;
        }

        uiUtils.setAnchorPosition.positionY(button, config.buttonPositionTop);
        uiUtils.setAnchorPosition.positionX(button, config.buttonPositionLeft);

        respectPageElements(button);
    };

    var registerEvents = function(button) {
        var onDragEnd = function(data) {
            settings.setUserPositionForButton(data);
        };

        var openMenu = function() {
            iframeController.setButtonPosition(getButtonPosition(button));
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(button, onDragEnd, openMenu);
        hideRestoreOnFullScreen();
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    var getButtonPosition = function(button) {
        var box = button.getBoundingClientRect();
        return {
            top: box.top + button.offsetHeight / 2,
            left: box.left + button.offsetWidth / 2
        };
    };

    var hideRestoreOnFullScreen = function() {
        if (isFullScreenEventsRegistered) {
            return;
        }
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function() {
            if (uiUtils.tryFullScreenPrefix(document, "FullScreen") || uiUtils.tryFullScreenPrefix(document, "IsFullScreen")) {
                hideButton();
            } else {
                showButton();
            }
        });
        isFullScreenEventsRegistered = true;
    };

    var hideButton = function() {
        if (!button) {
            return;
        }
        $(button).addClass('sg_hide_element');
    };

    var showButton = function() {
        if (!button) {
            return;
        }
        $(button).removeClass('sg_hide_element');
    };

    var removeButton = function() {
        if (!button) {
            return;
        }
        document.documentElement.removeChild(buttonElement);
        button = null;
    };

    /**
     * Set a special classes for the pages on which
     * under the button there are important elements
     * issue: https://github.com/AdguardTeam/AdguardAssistant/issues/32
     */
    var respectPageElements = function(element) {
        var buttonInRightBottom =
            $(element).hasClass('adguard-assistant-button-bottom') &&
            $(element).hasClass('adguard-assistant-button-right');

        if (buttonInRightBottom && document.location.hostname.indexOf('vk.com') >= 0) {
            $(element).addClass('adguard-assistant-button-respect adguard-assistant-button-respect-vk');
        }
        if (buttonInRightBottom && document.location.hostname.indexOf('facebook.com') >= 0) {
            $(element).addClass('adguard-assistant-button-respect adguard-assistant-button-respect-fb');
        }
        return false;
    };

    iframeController.onCloseMenu.attach(showButton);
    iframeController.onShowMenuItem.attach(hideButton);

    return {
        show: show,
        remove: removeButton
    };
};

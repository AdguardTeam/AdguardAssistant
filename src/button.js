/**
 * Adguard assistant button
 * @param log Logger
 * @param settings User settings
 * @param uiValidationUtils Validation utils
 * @param $ balalaika
 * @param gmApi Gm API impl
 * @param uiUtils UI Utils
 * @param iframeController Iframe controller
 * @param resources Resources that generates in compiler
 * @returns {{show: show, remove: remove}}
 * @constructor
 */
var UIButton = function(log, settings, uiValidationUtils, $, gmApi, uiUtils, iframeController, resources) { // jshint ignore:line
    var button = null;
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
        button = $(resources.getResource('button.html'));
        gmApi.GM_addStyle(resources.getResource('selector.css'));
        setPositionSettingsToButton(button);
        var body = $('body')[0];
        if (!body) {
            log.error('Cant find body');
        }

        if(uiValidationUtils.checkShadowDomSupport()) {
            var buttonElement = document.createElement('div');
            body.appendChild(buttonElement);
            buttonElement.createShadowRoot();
            buttonElement.shadowRoot.innerHTML = '<style>' + resources.getResource('button.css') + '</style>';
            buttonElement.shadowRoot.appendChild(button[0]);
        } else {
            gmApi.GM_addStyle(resources.getResource('button.css'));
            body.appendChild(button[0]);
        }

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

        uiUtils.setAnchorPosition.positionY(button[0], position.storedAnchor.top);
        uiUtils.setAnchorPosition.positionX(button[0], position.storedAnchor.left);

        uiUtils.moveElementTo(button[0], position.x, position.y);

        // validate that button is in the viewport
        // with timeout for deferred execution
        setTimeout(function () {
            uiUtils.checkElementPosition(button[0], position);
        });

        return true;
    };

    var setPositionSettingsToButton = function(button) {
        var config = settings.getSettings();
        if (!config.largeIcon) {
            $(button[0].getElementsByClassName('adguard-a-logo')[0]).addClass('adguard-a-logo__small');
        }
        if (setUserPositionIfExists(button)) {
            return;
        }

        uiUtils.setAnchorPosition.positionY(button[0], config.buttonPositionTop);
        uiUtils.setAnchorPosition.positionX(button[0], config.buttonPositionLeft);

        respectPageElements(button[0]);
    };

    var registerEvents = function(button) {
        var onDragEnd = function(data) {
            settings.setUserPositionForButton(data);
        };

        var openMenu = function() {
            iframeController.setButtonPosition(getButtonPosition());
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(button[0], onDragEnd, openMenu);
        hideRestoreOnFullScreen();
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    var getButtonPosition = function() {
        var box = button[0].getBoundingClientRect();
        return {
            top: box.top + button[0].offsetHeight / 2,
            left: box.left + button[0].offsetWidth / 2
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
        button.addClass('adguard-hide');
    };

    var showButton = function() {
        if (!button) {
            return;
        }
        button.removeClass('adguard-hide');
    };

    var removeButton = function() {
        if (!button) {
            return;
        }
        $('body')[0].removeChild(button[0]);
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

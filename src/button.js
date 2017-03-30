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
var UIButton = function (log, settings, uiValidationUtils, $, gmApi, uiUtils, iframeController, resources) { // jshint ignore:line
    var button = null;
    var isFullScreenEventsRegistered = false;

    /**
     * Shows Adguard initial button
     */
    var show = function () {
        if (!checkRequirements()) {
            log.info("Environment doesn't satisfy requirements, so don't show Adguard");
            return;
        }
        if (button) {
            return;
        }
        log.debug("Requirements checked, all ok");
        button = $(resources.getResource('button.html'));
        gmApi.GM_addStyle(resources.getResource('button.css'));
        gmApi.GM_addStyle(resources.getResource('selector.css'));
        setPositionSettingsToButton(button);
        var body = $('body')[0];
        if (!body){
            log.error('Cant find body');
        }
        body.appendChild(button[0]);
        registerEvents(button);
    };

    /**
     * Checking browser and other requirements.
     * @private
     */
    var checkRequirements = function () {
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

    var isButtonAlreadyInDOM = function () {
        return $('.adguard-alert').length > 0;
    };

    var setUserPositionIfExists = function (button) {
        var position = settings.getUserPositionForButton();
        if (!position) {
            return false;
        }
        button[0].style.top = position.top + 'px';
        button[0].style.left = position.left + 'px';
        return true;
    };

    var setPositionSettingsToButton = function (button) {
        var config = settings.getSettings();
        if (!config.largeIcon) {
            $(button[0].getElementsByClassName('adguard-a-logo')[0]).addClass('adguard-a-logo__small');
        }
        if (setUserPositionIfExists(button)) {
            return;
        }
        if (config.buttonPositionTop) {
            button.addClass('adguard-assistant-button-top');
        }
        else {
            button.addClass('adguard-assistant-button-bottom');
        }
        if (config.buttonPositionLeft) {
            button.addClass('adguard-assistant-button-left');
        }
        else {
            button.addClass('adguard-assistant-button-right');
        }
    };

    var registerEvents = function (button) {
        var onDragEnd = function (coords) {
            settings.setUserPositionForButton(coords);
        };

        var openMenu = function () {
            iframeController.setButtonPosition(getButtonPosition());
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(button[0], onDragEnd, openMenu, removeFixedPosition);
        hideRestoreOnFullScreen();
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    var getButtonPosition = function () {
        var left = button[0].offsetLeft + button[0].offsetWidth / 2;
        var top = button[0].offsetTop + button[0].offsetHeight / 2;
        return {left: left, top: top};
    };

    var removeFixedPosition = function () {
        var buttonPositionClasses = ['adguard-assistant-button-top',
            'adguard-assistant-button-bottom', 'adguard-assistant-button-left', 'adguard-assistant-button-right'];
        for (var i = 0; i < buttonPositionClasses.length; i++) {
            var currentClass = buttonPositionClasses[i];
            if (button.hasClass(currentClass)) {
                button.removeClass(currentClass);
            }
        }
    };

    var hideRestoreOnFullScreen = function () {
        if (isFullScreenEventsRegistered) {
            return;
        }
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
            if (uiUtils.tryFullScreenPrefix(document, "FullScreen") || uiUtils.tryFullScreenPrefix(document, "IsFullScreen")) {
                hideButton();
            } else {
                showButton();
            }
        });
        isFullScreenEventsRegistered = true;
    };

    var hideButton = function () {
        if (!button) {
            return;
        }
        button.addClass('adguard-hide');
    };

    var showButton = function () {
        if (!button) {
            return;
        }
        button.removeClass('adguard-hide');
    };

    var removeButton = function () {
        if (!button) {
            return;
        }
        $('body')[0].removeChild(button[0]);
        button = null;
    };

    iframeController.onCloseMenu.attach(showButton);
    iframeController.onShowMenuItem.attach(hideButton);

    return {
        show: show,
        remove: removeButton
    };
};


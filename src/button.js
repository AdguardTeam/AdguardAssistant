/**
 * Adguard assistant button
 * @param log
 * @param settings
 * @param uiValidationUtils
 * @param $
 * @param gmApi
 * @param uiUtils
 * @param iframeController
 * @param resources
 * @returns {{show: show, remove: removeButton}}
 * @constructor
 */
var UIButton = function (log, settings, uiValidationUtils, $, gmApi, uiUtils, iframeController, resources) {
    var button = null;
    var fullScreenEventsSetted = false;

    /**
     * Shows Adguard initial button
     */
    var show = function () {
        if (!_checkRequirements()) {
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
        _setPositionSettingsToButton(button);
        $('body')[0].appendChild(button[0]);
        _registerEvents(button);
    };

    /**
     * Checking browser and other requirements.
     * @private
     */
    var _checkRequirements = function () {
        if (!uiValidationUtils.validateBrowser()) {
            return false;
        }
        if (!uiValidationUtils.validatePage()) {
            return false;
        }
        if (!uiValidationUtils.checkVisibleAreaSize()) {
            return false;
        }
        if (_isButtonAlreadyInDOM()) {
            return false;
        }
        return true;
    };

    var _isButtonAlreadyInDOM = function () {
        return $('.adguard-alert').length > 0;
    };

    var _setUserPositionIfExists = function (button) {
        var position = settings.getUserPositionForButton();
        if (!position) {
            return false;
        }
        button[0].style.top = position.top + 'px';
        button[0].style.left = position.left + 'px';
        return true;
    };

    var _setPositionSettingsToButton = function (button) {
        var config = settings.getSettings();
        if (!config.largeIcon) {
            $(button[0].getElementsByClassName('adguard-a-logo')[0]).addClass('adguard-a-logo__small');
        }
        if (_setUserPositionIfExists(button)) {
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

    var _registerEvents = function (button) {
        var onDragEnd = function (coords) {
            localStorage.setItem(settings.Constants.BUTTON_POSITION_ITEM_NAME, JSON.stringify(coords));
        };

        var openMenu = function () {
            iframeController.setButtonPosition(_getButtonPosition());
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(button[0], onDragEnd, openMenu, _removeFixedPosition);
        _hideRestoreOnFullScreen();
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    var _getButtonPosition = function () {
        var left = button[0].offsetLeft + button[0].offsetWidth / 2;
        var top = button[0].offsetTop + button[0].offsetHeight / 2;
        return {left: left, top: top};
    };

    var _removeFixedPosition = function () {
        var buttonPositionClasses = ['adguard-assistant-button-top',
            'adguard-assistant-button-bottom', 'adguard-assistant-button-left', 'adguard-assistant-button-right'];
        for (var i = 0; i < buttonPositionClasses.length; i++) {
            var currentClass = buttonPositionClasses[i];
            if (button.hasClass(currentClass)) {
                button.removeClass(currentClass);
            }
        }
    };

    var _hideRestoreOnFullScreen = function () {
        if (fullScreenEventsSetted) {
            return;
        }
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
            if (uiUtils.tryFullScreenPrefix(document, "FullScreen") || uiUtils.tryFullScreenPrefix(document, "IsFullScreen")) {
                _hideButton();
            } else {
                _showButton();
            }
        });
        fullScreenEventsSetted = true;
    };

    var _hideButton = function () {
        button.addClass('adguard-hide');
    };

    var _showButton = function () {
        button.removeClass('adguard-hide');
    };

    var removeButton = function () {
        $('body')[0].removeChild(button[0]);
        button = null;
    };

    iframeController.onCloseMenu.attach(_showButton);
    iframeController.onShowMenuItem.attach(_hideButton);

    return {
        show: show,
        remove: removeButton
    };
};


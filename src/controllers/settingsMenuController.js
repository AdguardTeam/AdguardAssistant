/**
 * Settings menu controller
 * @param $
 * @param settings
 * @param button
 * @returns {{init: init}}
 * @constructor
 */
var SettingsMenuController = function ($, settings, button) {
    var contentDocument = null;
    var iframeCtrl = Ioc.get('iframeController');
    var buttonSides = {
        'position-bottom-right': {top: false, left: false},
        'position-bottom-left': {top: false, left: true},
        'position-top-right': {top: true, left: false},
        'position-top-left': {top: true, left: true}
    };

    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        _bindEvents();
        _setDefaultSettings();
    };

    var _bindEvents = function () {
        var menuEvents = {
            '.close': _close,
            '#cancel': iframeCtrl.showDetailedMenu,
            '#save-settings': _saveSettings
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var _saveSettings = function () {
        var largeIcon = contentDocument.getElementById('size-big').checked;
        var sideItem = null;
        Object.keys(buttonSides).forEach(function (item) {
            if (contentDocument.getElementById(item).checked) {
                sideItem = item;
            }
        });
        var config = settings.getSettings();
        config.largeIcon = largeIcon;
        if (sideItem) {
            config.buttonPositionTop = buttonSides[sideItem].top;
            config.buttonPositionLeft = buttonSides[sideItem].left;
            settings.removeUserPosition();
        }
        settings.saveSettings(config);
        _close();
        button.remove();
        button.show();
    };

    var _setDefaultSettings = function () {
        var currentSettings = settings.getSettings();
        if (currentSettings.largeIcon) {
            contentDocument.getElementById('size-big').checked = true;
        }
        else {
            contentDocument.getElementById('size-small').checked = true;
        }
        var position = settings.getUserPositionForButton();
        if (position) {
            return;
        }
        var sideFromSettings = {top: currentSettings.buttonPositionTop, left: currentSettings.buttonPositionLeft};
        Object.keys(buttonSides).forEach(function (item) {
            var sideItem = buttonSides[item];
            if ((sideItem.left == sideFromSettings.left) && (sideItem.top == sideFromSettings.top)) {
                contentDocument.getElementById(item).checked = true;
            }
        });
    };

    var _close = function () {
        iframeCtrl.removeIframe();
    };

    return {
        init: init
    };
};


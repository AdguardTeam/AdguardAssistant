/**
 * Settings menu controller
 * @param $
 * @param settings
 * @param button
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
var SettingsMenuController = function ($, settings, button) { // jshint ignore:line
    var contentDocument = null;
    var iframeCtrl = Ioc.get('iframeController');
    var buttonSides = {
        'position-bottom-right': {top: false, left: false},
        'position-bottom-left': {top: false, left: true},
        'position-top-right': {top: true, left: false},
        'position-top-left': {top: true, left: true}
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        bindEvents();
        setDefaultSettings();
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '#cancel': iframeCtrl.showDetailedMenu,
            '#save-settings': saveSettings
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var setIconSize = function () {
        var largeIcon = contentDocument.getElementById('size-big').checked;
        settings.setIconSize(largeIcon);
    };

    var setPersonalParam = function () {
        var personalConfig = contentDocument.getElementById('this-site').checked;
        settings.setPersonalParam(personalConfig);
    };

    var setButtonSide = function () {
        var sideItem = null;
        Object.keys(buttonSides).forEach(function (item) {
            if (contentDocument.getElementById(item).checked) {
                sideItem = item;
            }
        });

        if (sideItem) {
            settings.setButtonSide(buttonSides[sideItem]);
        }
    };

    var saveSettings = function () {
        setPersonalParam();
        setIconSize();
        setButtonSide();
        settings.saveSettings();
        close();
        button.remove();
        button.show();
    };

    var setDefaultSettings = function () {
        if (settings.getIconSize()) {
            contentDocument.getElementById('size-big').checked = true;
        } else {
            contentDocument.getElementById('size-small').checked = true;
        }

        if (settings.getPersonalConfig()) {
            contentDocument.getElementById('this-site').checked = true;
        } else {
            contentDocument.getElementById('all-site').checked = true;
        }

        var position = settings.getUserPositionForButton();
        if (position) {
            return;
        }
        var sideFromSettings = settings.getButtonSide();

        Object.keys(buttonSides).forEach(function (item) {
            var sideItem = buttonSides[item];
            if ((sideItem.left === sideFromSettings.left) && (sideItem.top === sideFromSettings.top)) {
                contentDocument.getElementById(item).checked = true;
            }
        });
    };

    return {
        init: init
    };
};

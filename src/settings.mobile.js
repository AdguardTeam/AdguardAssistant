/**
 * Object that manages user settings.
 * @param log
 * @returns {{Constants: {MINIMUM_IE_SUPPORTED_VERSION: number, MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number, BUTTON_POSITION_ITEM_NAME: string, IFRAME_ID: string}, MenuItemsNames: {DetailedMenu: string, SelectorMenu: string, SliderMenu: string, BlockPreview: string, SettingsMenu: string}, getSettings: getSettings, loadSettings: loadSettings, getWotData: getWotData, setWotData: setWotData, saveSettings: saveSettings, getUserPositionForButton: getUserPositionForButton, removeUserPositionForButton: removeUserPositionForButton, selectedElement: *, setAdguardSettings: setAdguardSettings, getAdguardSettings: getAdguardSettings}}
 * @constructor
 */
var Settings = function (log) { // jshint ignore:line
    var Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 9,
        MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
        BUTTON_POSITION_ITEM_NAME: '__adbpos',
        IFRAME_ID: 'adguard-assistant-dialog',
        REPORT_URL: 'https://adguard.com/adguard-report/{0}/report.html'
    };
    var MenuItemsNames = {
        DetailedMenu: 'mainMenu.html',
        SelectorMenu: 'selectorMenu.html',
        SliderMenu: 'sliderMenu.html',
        BlockPreview: 'blockPreview.html',
        SettingsMenu: 'settingsMenu.html'
    };

    var DefaultConfig = {
        buttonPositionTop: false,
        buttonPositionLeft: false,
        largeIcon: true,
        assistantFirstStart: true,
        scriptVersion: 1
    };

    var wotData = null;
    var adguardSettings = null;

    var Config = null;

    var loadSettings = function () {
        var config;
        log.debug("Trying to get settings");
        // Empty settings
        var settings = "[]";
        try {
            config = JSON.parse(settings);
            validateSettings(config);
            log.debug('Settings parsed successfully');
        } catch (ex) {
            log.error(ex);
            config = JSON.parse(JSON.stringify(DefaultConfig));
            if (typeof settings !== 'undefined') {
                config.assistantFirstStart = false;
            }
            saveSettings(config);
        }
        Config = config;
    };

    var saveSettings = function (config) {
        log.debug("Saving settings");
        Config = config;
    };

    var getSettings = function () {
        return Config;
    };

    var getWotData = function () {
        return wotData;
    };

    var setWotData = function (data) {
        wotData = data;
    };

    var setAdguardSettings = function (settings) {
        if (!settings) {
            log.info("No Adguard API Found");
            return;
        }
        adguardSettings = settings;
    };

    var getAdguardSettings = function () {
        return adguardSettings;
    };

    var removeUserPositionForButton = function () {
        localStorage.removeItem(Constants.BUTTON_POSITION_ITEM_NAME);
    };

    var setUserPositionForButton = function (coords) {
        localStorage.setItem(Constants.BUTTON_POSITION_ITEM_NAME, JSON.stringify(coords));
    };

    var getUserPositionForButton = function () {
        try {
            var userPosition = localStorage.getItem(Constants.BUTTON_POSITION_ITEM_NAME);
            log.info("Check user position for domain");
            if (userPosition) {
                log.info("User position is set for this domain");
                return JSON.parse(userPosition);
            }
        } catch (ex) {
            removeUserPositionForButton();
            log.error(ex);
        }
        return null;
    };

    var validateSettings = function (settings) {
        if (!settings) {
            throw 'Invalid settings object';
        }
        for (var prop in settings) {
            if (!settings.hasOwnProperty(prop)) {
                continue;
            }
            var property = DefaultConfig[prop];
            if (property && typeof property !== typeof settings[prop]) {
                throw 'Invalid settings object';
            }
        }
        if (settings.scriptVersion > DefaultConfig.scriptVersion) {
            throw 'Invalid settings object';
        }
    };

    return {
        Constants: Constants,
        MenuItemsNames: MenuItemsNames,
        getSettings: getSettings,
        loadSettings: loadSettings,
        getWotData: getWotData,
        setWotData: setWotData,
        saveSettings: saveSettings,
        getUserPositionForButton: getUserPositionForButton,
        removeUserPositionForButton: removeUserPositionForButton,
        setUserPositionForButton: setUserPositionForButton,
        setAdguardSettings: setAdguardSettings,
        getAdguardSettings: getAdguardSettings
    };
};

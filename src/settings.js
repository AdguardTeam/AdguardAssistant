/**
 * Object that manages user settings.
 * @param log
 * @param gmApi
 * @returns {{Constants: {MINIMUM_IE_SUPPORTED_VERSION: number, MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number, BUTTON_POSITION_ITEM_NAME: string, IFRAME_ID: string}, MenuItemsNames: {DetailedMenu: string, SelectorMenu: string, SliderMenu: string, BlockPreview: string, SettingsMenu: string}, getSettings: getSettings, loadSettings: loadSettings, getWotData: getWotData, setWotData: setWotData, saveSettings: saveSettings, getUserPositionForButton: getUserPositionForButton, removeUserPositionForButton: removeUserPositionForButton, selectedElement: *, setAdguardSettings: setAdguardSettings, getAdguardSettings: getAdguardSettings}}
 * @constructor
 */
var Settings = function (log, gmApi) { // jshint ignore:line
    var Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 9,
        MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
        BUTTON_POSITION_ITEM_NAME: '__adbpos',
        PERSONAL_CONFIG: '__adbconfpersonal',
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

    var SITENAME = window.location.host;

    var loadSettings = function () {
        var config;
        log.debug("Trying to get settings");
        // Empty settings
        var settings = gmApi.GM_getValue('settings');
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
        gmApi.GM_setValue('settings', JSON.stringify(config));
        Config = config;
    };

    var getSettings = function () {
        if (Config.personalConfig) {
            var personalConfig = Config[Constants.PERSONAL_CONFIG];

            if (!personalConfig) {
                personalConfig = {};
            }

            if (!personalConfig[SITENAME]) {
                personalConfig[SITENAME] = {};
            }

            Config[Constants.PERSONAL_CONFIG] = personalConfig;
        }

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

    // function for backward compatibility. TODO: remove it in major update
    var removeUserPositionForButton = function () {
        try {
            localStorage.removeItem(Constants.BUTTON_POSITION_ITEM_NAME);
        } catch (ex) {
            log.error(ex);
        }
    };

    var getUserPositionForButton = function () {
        var config = getSettings();
        var userPosition;

        // for backward compatibility. TODO: remove it in major update
        try {
            userPosition = localStorage.getItem(Constants.BUTTON_POSITION_ITEM_NAME);
            if (userPosition) {
                return JSON.parse(userPosition);
            }
        } catch (ex) {
            removeUserPositionForButton();
            log.error(ex);
        }

        if (config.personalConfig) {
            userPosition = config[Constants.PERSONAL_CONFIG];

            if (userPosition) {
                userPosition = userPosition[SITENAME].position;
            }
        } else {
            userPosition = config.position;
        }

        if (userPosition) {
            return userPosition;
        }

        return null;
    };

    var setUserPositionForButton = function (position) {
        // function for backward compatibility. TODO: remove it in major update
        removeUserPositionForButton();
        var config = getSettings();
        if (config.personalConfig) {
            config[Constants.PERSONAL_CONFIG][SITENAME].position = position;
        } else {
            config.position = position;
        }

        saveSettings(config);
    };

    var setIconSize = function (largeIcon) {
        var config = getSettings();

        if (config.personalConfig) {
            config[Constants.PERSONAL_CONFIG][SITENAME].largeIcon = largeIcon;
        } else {
            config.largeIcon = largeIcon;
        }

        saveSettings(config);
    };

    var getIconSize = function () {
        var config = getSettings();

        if (config.personalConfig) {
            return config[Constants.PERSONAL_CONFIG][SITENAME].largeIcon;
        } else {
            return config.largeIcon;
        }
    };

    var setButtonSide = function (buttonSides) {
        // function for backward compatibility. TODO: remove it in major update
        removeUserPositionForButton();
        var config = getSettings();
        if (config.personalConfig) {
            config[Constants.PERSONAL_CONFIG][SITENAME].buttonPositionTop = buttonSides.top;
            config[Constants.PERSONAL_CONFIG][SITENAME].buttonPositionLeft = buttonSides.left;
        } else {
            config.buttonPositionTop = buttonSides.top;
            config.buttonPositionLeft = buttonSides.left;
        }

        saveSettings(config);
    };

    var setPersonalParam = function (personalConfig) {
        var config = getSettings();
        config.personalConfig = personalConfig;

        if (config.personalConfig) {
            config[Constants.PERSONAL_CONFIG][SITENAME].position = config.position;
        } else {
            config.position = config[Constants.PERSONAL_CONFIG][SITENAME].position;
        }
        saveSettings(config);
    };

    var getButtonSide = function () {
        var config = getSettings();
        if (config.personalConfig) {
            return {
                top: config[Constants.PERSONAL_CONFIG][SITENAME].buttonPositionTop,
                left: config[Constants.PERSONAL_CONFIG][SITENAME].buttonPositionLeft
            };
        } else {
            return {
                top: config.buttonPositionTop,
                left: config.buttonPositionLeft
            };
        }
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
        getButtonSide: getButtonSide,
        setIconSize: setIconSize,
        setUserPositionForButton: setUserPositionForButton,
        setAdguardSettings: setAdguardSettings,
        setPersonalParam: setPersonalParam,
        setButtonSide: setButtonSide,
        getAdguardSettings: getAdguardSettings,
        getIconSize: getIconSize
    };
};

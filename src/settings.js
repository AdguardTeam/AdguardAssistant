/**
 * Object that manages user settings.
 * @param log
 * @param gmApi
 * @param UpgradeHelper // backward compatibility class
 * @returns {{Constants: {MINIMUM_IE_SUPPORTED_VERSION: number, MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number, BUTTON_POSITION_ITEM_NAME: string, IFRAME_ID: string}, MenuItemsNames: {DetailedMenu: string, SelectorMenu: string, SliderMenu: string, BlockPreview: string, SettingsMenu: string}, getSettings: getSettings, loadSettings: loadSettings, getWotData: getWotData, setWotData: setWotData, saveSettings: saveSettings, getUserPositionForButton: getUserPositionForButton, removeUserPositionForButton: removeUserPositionForButton, selectedElement: *, setAdguardSettings: setAdguardSettings, getAdguardSettings: getAdguardSettings}}
 * @constructor
 */
var Settings = function (log, gmApi, UpgradeHelper) { // jshint ignore:line
    var Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 9,
        MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
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
        scriptVersion: 1,
        personal: {}
    };

    var wotData = null;

    var Config = null;
    var adguardSettings = null;

    var SITENAME = window.location.host;

    var loadSettings = function () {
        log.debug('Trying to get settings');
        var settings;

        gmApi.getValue('settings').then(function(settings) {
            var config;
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
        });
    };

    var saveSettings = function (config) {
        if (config) {
            Config = config;
        }
        gmApi.setValue('settings', Config);
    };

    var getSettings = function () {
        return gmApi.getValue('settings').then(function(config) {
            return JSON.parse(config);
        });
    };

    var getWotData = function () {
        return wotData;
    };

    var setWotData = function (data) {
        wotData = data;
    };

    var setAdguardSettings = function (settings) {
        if (!settings) {
            log.info('No Adguard API Found');
            return;
        }
        adguardSettings = settings;
    };

    var getAdguardSettings = function () {
        return adguardSettings;
    };

    var getUserPositionForButton = function () {
        return getSettings().then(function(config) {
            Config = config;
            var userPosition;

            var oldData = UpgradeHelper.getButtonPositionData();

            if (oldData) {
                return oldData;
            }

            if (config.personalConfig) {
                userPosition = config.personal;

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
        });
    };

    var setUserPositionForButton = function (position) {
        UpgradeHelper.removeUserPositionForButton();
        if (Config.personalConfig) {
            Config.personal[SITENAME].position = position;
        } else {
            Config.position = position;
        }

        saveSettings(Config);
    };

    var setIconSize = function (largeIcon) {
        if (Config.personalConfig) {
            Config.personal[SITENAME].largeIcon = largeIcon;
        } else {
            Config.largeIcon = largeIcon;
        }
    };

    var getIconSize = function () {
        var config = Config;

        if (config.personalConfig) {
            return config.personal[SITENAME].largeIcon;
        } else {
            return config.largeIcon;
        }
    };

    /**
     * Set the parameters to which corner of the browser
     * window the button position is placed by option (not drag)
     */
    var setButtonSide = function (buttonSides) {
        // function for backward compatibility. TODO: remove it in major update
        UpgradeHelper.removeUserPositionForButton();

        if (Config.personalConfig) {
            delete Config.personal[SITENAME].position;
            Config.personal[SITENAME].buttonPositionTop = buttonSides.top;
            Config.personal[SITENAME].buttonPositionLeft = buttonSides.left;
        } else {
            delete Config.position;
            Config.buttonPositionTop = buttonSides.top;
            Config.buttonPositionLeft = buttonSides.left;
        }
    };

    /**
     * Save a setting that specifies how to save button settings: for all sites or only on this
     */
    var setPersonalParam = function (personalConfig) {
        Config.personalConfig = personalConfig;

        if (Config.personalConfig && !Config.personal) {
            Config.personal = {};
            Config.personal[SITENAME] = {};
            Config.personal[SITENAME].position = Config.position;
        }

        if (!Config.personalConfig && Config.personal) {
            Config.position = Config.personal[SITENAME].position;
            delete Config.personal;
        }
    };

    /**
     * Get the option to which corner of the browser window the button position is placed
     * @return {Object}
     */
    var getButtonSide = function () {
        var config = Config;
        if (config.personalConfig) {
            return {
                top: config.personal[SITENAME].buttonPositionTop,
                left: config.personal[SITENAME].buttonPositionLeft
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

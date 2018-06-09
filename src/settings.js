/**
 * Object that manages user settings.
 * @param log
 * @param gmApi
 * @param UpgradeHelper // backward compatibility class
 * @returns {{Constants: {MINIMUM_IE_SUPPORTED_VERSION: number, MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number, BUTTON_POSITION_ITEM_NAME: string, IFRAME_ID: string}, MenuItemsNames: {DetailedMenu: string, SelectorMenu: string, SliderMenu: string, BlockPreview: string, SettingsMenu: string}, getSettings: getSettings, loadSettings: loadSettings, getWotData: getWotData, setWotData: setWotData, saveSettings: saveSettings, getUserPositionForButton: getUserPositionForButton, removeUserPositionForButton: removeUserPositionForButton, selectedElement: *, setAdguardSettings: setAdguardSettings, getAdguardSettings: getAdguardSettings}}
 * @constructor
 */
var Settings = function (log, gmApi, UpgradeHelper, protectedApi) { // jshint ignore:line
    var Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 10,
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

    /**
     * Config data stored in GM storage
     * @typedef {Object} DefaultConfig
     * @property {boolean} buttonPositionTop - Static button position from top.
     * @property {boolean} buttonPositionLeft - Static button position from left.
     * @property {boolean} smallIcon - Button size. true - small, false - large.
     * @property {boolean} personalConfig - Is the settings save for all sites or for each site individually.
     * @property {number} scriptVersion - Version of scheme. 2 is set since assistant version 4.2.
     * @property {object} personal - Object config that may includes the same properties, except `scriptVersion`, but for each site individually.
     */
    var DefaultConfig = {
        buttonPositionTop: false,
        buttonPositionLeft: false,
        smallIcon: false,
        personalConfig: true,
        scriptVersion: 2,
        personal: {}
    };

    var wotData = null;

    var Config = null;
    var adguardSettings = null;

    var SITENAME = window.location.host;

    var loadSettings = function (showButton) {
        log.debug('Trying to get settings');
        var settings;

        getSettings().then(function(config) {
            var checkedConfig = config && validateSettings(config);
            if (checkedConfig) {
                Config = checkedConfig;
                saveSettings(Config);
                log.debug('Settings parsed successfully');
            } else {
                Config = DefaultConfig;
                log.debug('No settings found');
            }
            showButton();
        });
    };

    var saveSettings = function (config) {
        if (config) {
            Config = config;
        }
        log.debug('Update settings...');
        log.debug(Config);
        gmApi.setValue('settings', Config);
    };

    var getSettings = function () {
        return gmApi.getValue('settings').then(function(config) {
            try {
                return config && protectedApi.json.parse(config);
            } catch (ex) {
                log.error(ex);
                return null;
            }
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
        var userPosition;

        if (Config.personalConfig) {
            if (Config.personal && Config.personal[SITENAME]) {
                userPosition = Config.personal[SITENAME].position;
            }
        } else {
            userPosition = Config.position;
        }

        if (userPosition) {
            return userPosition;
        }

        return null;
    };

    var setUserPositionForButton = function (position) {
        if (Config.personalConfig) {
            if (!Config.personal[SITENAME]) {
                Config.personal[SITENAME] = {};
            }
            Config.personal[SITENAME].position = position;
        } else {
            Config.position = position;
        }

        saveSettings(Config);
    };

    var setIconSize = function (smallIcon) {
        if (Config.personalConfig) {
            Config.personal[SITENAME].smallIcon = smallIcon;
        } else {
            Config.smallIcon = smallIcon;
        }
    };

    var getIconSize = function () {
        if (Config.personalConfig && Config.personal && Config.personal[SITENAME]) {
            return Config.personal[SITENAME].smallIcon;
        } else {
            return Config.smallIcon;
        }
    };

    /**
     * Set the parameters to which corner of the browser
     * window the button position is placed by option (not drag)
     */
    var setButtonSide = function (buttonSides) {
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
        }

        if (Config.personalConfig && !Config.personal[SITENAME]) {
            Config.personal[SITENAME] = {};
            Config.personal[SITENAME].position = Config.position;
        }

        if (!Config.personalConfig && Config.personal) {
            Config.position = Config.personal[SITENAME] && Config.personal[SITENAME].position;
            delete Config.personal;
        }
    };

    /**
     * Get config that specifies how to save button settings: for all sites or only on this
     */
    var getPersonalConfig = function () {
        return Config.personalConfig;
    };

    /**
     * Get the option to which corner of the browser window the button position is placed
     * @return {Object}
     */
    var getButtonSide = function () {
        var config = Config;
        if (config.personalConfig && config.personal && config.personal[SITENAME]) {
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
            log.error('Invalid settings object');
            return false;
        }
        for (var prop in settings) {
            if (!settings.hasOwnProperty(prop)) {
                continue;
            }
            var property = DefaultConfig[prop];
            if (property && typeof property !== typeof settings[prop]) {
                log.error('Invalid settings object');
                return false;
            }
        }
        if (settings.scriptVersion > DefaultConfig.scriptVersion) {
            log.error('Invalid settings object');
            return false;
        }
        if (settings.scriptVersion < DefaultConfig.scriptVersion) {
            log.info('Settings object is outdated. Updating...');
            settings = UpgradeHelper.upgradeGmStorage(settings, DefaultConfig.scriptVersion);
        }

        // save to gm store position data from localStorage
        settings = UpgradeHelper.upgradeLocalStorage(settings, SITENAME);

        return settings;
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
        getIconSize: getIconSize,
        getPersonalConfig: getPersonalConfig
    };
};

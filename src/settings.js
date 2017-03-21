/**
 * Object that manages user settings.
 * @param log
 * @param gmApi
 * @returns {{Constants: {MINIMUM_IE_SUPPORTED_VERSION: number, MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number, BUTTON_POSITION_ITEM_NAME: string, IFRAME_ID: string}, MenuItemsNames: {DetailedMenu: string, SelectorMenu: string, SliderMenu: string, BlockPreview: string, SettingsMenu: string}, getSettings: getSettings, loadSettings: loadSettings, getWotData: getWotData, setWotData: setWotData, saveSettings: saveSettings, getUserPositionForButton: getUserPositionForButton, removeUserPosition: removeUserPosition, selectedElement: *, setAdguardSettings: setAdguardSettings, getAdguardSettings: getAdguardSettings}}
 * @constructor
 */
var Settings = function (log, gmApi) {
    var Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 9,
        MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
        BUTTON_POSITION_ITEM_NAME: 'Adguard_Button_Position',
        IFRAME_ID: 'adguard-assistant-dialog'
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

    var selectedElement = null;
    var wotData = null;
    var adguardSettings = null;

    var Config = null;

    var loadSettings = function () {
        var config;
        log.info("Trying to get settings");
        // Empty settings
        var settings = gmApi.GM_getValue('settings');
        try {
            config = JSON.parse(settings);
            _validateSettings(config);
            log.info('Settings parsed successfully');
        } catch (ex) {
            log.error(ex);
            config = JSON.parse(JSON.stringify(DefaultConfig));
            if (typeof settings != 'undefined') {
                config.assistantFirstStart = false;
            }
            saveSettings(config);
        }
        Config = config;
    };

    var saveSettings = function (config) {
        log.info("Saving settings");
        gmApi.GM_setValue('settings', JSON.stringify(config));
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
        if (typeof settings == 'undefined') {
            log.info("No Adguard API Found");
            return;
        }
        adguardSettings = settings;
    };

    var getAdguardSettings = function () {
        return adguardSettings;
    };

    var removeUserPosition = function () {
        localStorage.removeItem(settings.Constants.BUTTON_POSITION_ITEM_NAME);
    };

    var getUserPositionForButton = function () {
        try {
            var userPosition = localStorage.getItem(settings.Constants.BUTTON_POSITION_ITEM_NAME);
            log.info("Check user position for domain");
            if (userPosition) {
                log.info("User position is set for this domain");
                var position = JSON.parse(userPosition);
                if (!position.top || !position.left) {
                    removeUserPosition();
                    throw "Invalid position";
                }
                return position;
            }
        }
        catch (ex) {
            log.error(ex);
        }
        return null;
    };

    var _validateSettings = function (settings) {
        if (!settings) {
            throw 'Invalid settings object';
        }
        for (var prop in settings) {
            if (!settings.hasOwnProperty(prop)) {
                continue;
            }
            var property = DefaultConfig[prop];
            if (typeof property != typeof settings[prop]) {
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
        removeUserPosition: removeUserPosition,
        selectedElement: selectedElement,
        setAdguardSettings: setAdguardSettings,
        getAdguardSettings: getAdguardSettings
    };
};


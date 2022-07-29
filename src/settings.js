import { bypassCache } from './utils/common-utils';
import protectedApi from './protectedApi';
import log from './log';
import upgradeHelper from './upgradeHelper';
import gm from './gm';

/**
 * Object that manages user settings.
 * @returns {{
 * Constants: {
 *  MINIMUM_IE_SUPPORTED_VERSION: number,
 *  MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number,
 *  BUTTON_POSITION_ITEM_NAME: string,
 *  IFRAME_ID: string
 * },
 * MenuItemsNames: {
 *  DetailedMenu: string,
 *  SelectorMenu: string,
 *  SliderMenu: string,
 *  BlockPreview: string,
 *  SettingsMenu: string
 * },
 * getSettings: getSettings,
 * loadSettings: loadSettings,
 * getWotData: getWotData,
 * setWotData: setWotData,
 * saveSettings: saveSettings,
 * getUserPositionForButton: getUserPositionForButton,
 * removeUserPositionForButton: removeUserPositionForButton,
 * selectedElement: *,
 * setAdguardSettings: setAdguardSettings,
 * getAdguardSettings: getAdguardSettings
 * }}
 * @constructor
 */
function Settings() {
    const Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 10,
        MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
        IFRAME_ID: 'adguard-assistant-dialog',
        REPORT_URL: 'https://link.adtidy.org/forward.html?action=site_report_page&domain={0}&from=main_menu&app=assistant',
    };

    const MenuItemsNames = {
        DetailedMenu: 'mainMenu.html',
        SelectorMenu: 'selectorMenu.html',
        SliderMenu: 'sliderMenu.html',
        BlockPreview: 'blockPreview.html',
        SettingsMenu: 'settingsMenu.html',
    };

    /**
     * Config data stored in GM storage
     * @typedef {Object} DefaultConfig
     * @property {boolean} buttonPositionTop - Static button position from top.
     * @property {boolean} buttonPositionLeft - Static button position from left.
     * @property {boolean} smallIcon - Button size. true - small, false - large.
     * @property {boolean} personalConfig - Is the settings save for all
     * sites or for each site individually.
     * @property {number} scriptVersion - Version of scheme. 2 is set since assistant version 4.2.
     * @property {object} personal - Object config that may includes the same properties,
     * except `scriptVersion`, but for each site individually.
     */
    const DefaultConfig = {
        buttonPositionTop: false,
        buttonPositionLeft: false,
        smallIcon: false,
        personalConfig: true,
        scriptVersion: 2,
        personal: {},
    };

    let wotData = null;

    let Config = null;
    let adguardSettings = null;

    const SITENAME = window.location.host;

    const getSettings = () => gm.getValue('settings')
        .then((config) => {
            try {
                return config && protectedApi.json.parse(config);
            } catch (ex) {
                log.error(ex);
                return null;
            }
        });

    const validateSettings = (settings) => {
        if (!settings) {
            log.error('Invalid settings object');
            return false;
        }
        // eslint-disable-next-line no-restricted-syntax, prefer-const
        for (let prop in settings) {
            // eslint-disable-next-line no-prototype-builtins
            if (!settings.hasOwnProperty(prop)) {
                // eslint-disable-next-line no-continue
                continue;
            }
            const property = DefaultConfig[prop];
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
            // eslint-disable-next-line no-param-reassign
            settings = upgradeHelper.upgradeGmStorage(settings, DefaultConfig.scriptVersion);
        }

        // save to gm store position data from localStorage
        // eslint-disable-next-line no-param-reassign
        settings = upgradeHelper.upgradeLocalStorage(settings, SITENAME);

        return settings;
    };

    const loadSettings = (showButton) => {
        log.debug('Trying to get settings');

        // getting config from gm storage
        getSettings().then((config) => {
            // check and validate config data for prevent errors and backward compatibility
            const checkedConfig = config && validateSettings(config);
            if (checkedConfig) {
                // saving existing settings to Config variable in the gm storage
                Config = checkedConfig;
                log.debug('Settings parsed successfully');
            } else {
                // use default settings without saving
                Config = DefaultConfig;
                log.debug('No settings found');
            }
            showButton();
        });
    };

    const saveSettings = (config) => {
        if (config) {
            Config = config;
        }
        log.debug('Update settings...');
        log.debug(Config);
        gm.setValue('settings', Config);
        bypassCache();
    };

    const getWotData = wotData;

    const setWotData = (data) => {
        wotData = data;
    };

    const setAdguardSettings = (settings) => {
        if (typeof settings === 'undefined') {
            log.info('No Adguard API Found');
            return;
        }
        adguardSettings = settings;
    };

    const getAdguardSettings = () => adguardSettings;

    const getUserPositionForButton = () => {
        let userPosition;

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

    const setUserPositionForButton = (position) => {
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

    const setIconSize = (smallIcon) => {
        if (Config.personalConfig) {
            Config.personal[SITENAME].smallIcon = smallIcon;
        } else {
            Config.smallIcon = smallIcon;
        }
    };

    const getIconSize = () => {
        if (Config.personalConfig && Config.personal && Config.personal[SITENAME]) {
            return Config.personal[SITENAME].smallIcon;
        }
        return Config.smallIcon;
    };

    /**
     * Set the parameters to which corner of the browser
     * window the button position is placed by option (not drag)
     */
    const setButtonSide = (buttonSides) => {
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
    const setPersonalParam = (personalConfig) => {
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
    const getPersonalConfig = () => Config.personalConfig;

    /**
     * Get the option to which corner of the browser window the button position is placed
     * @return {Object}
     */
    const getButtonSide = () => {
        const config = Config;
        if (config.personalConfig && config.personal && config.personal[SITENAME]) {
            return {
                top: config.personal[SITENAME].buttonPositionTop,
                left: config.personal[SITENAME].buttonPositionLeft,
            };
        }
        return {
            top: config.buttonPositionTop,
            left: config.buttonPositionLeft,
        };
    };

    return {
        Constants,
        MenuItemsNames,
        getSettings,
        loadSettings,
        getWotData,
        setWotData,
        saveSettings,
        getUserPositionForButton,
        getButtonSide,
        setIconSize,
        setUserPositionForButton,
        setAdguardSettings,
        setPersonalParam,
        setButtonSide,
        getAdguardSettings,
        getIconSize,
        getPersonalConfig,
    };
}

const settings = new Settings();

export default settings;

import protectedApi from './protectedApi';

/* eslint-disable no-param-reassign */
/**
 * Helper for backward compatibility
 * @returns {{}}
 * @constructor
 */
export default class UpgradeHelper {
    constructor(log) {
        this.log = log;

        this.Constants = {
            BUTTON_POSITION_ITEM_NAME: '__adbpos',
        };
    }

    getButtonPositionData() {
        try {
            const userPosition = localStorage.getItem(this.Constants.BUTTON_POSITION_ITEM_NAME);
            if (userPosition) {
                return protectedApi.json.parse(userPosition);
            }
            return undefined;
        } catch (ex) {
            this.log.error(ex);
            return undefined;
        }
    }

    removeUserPositionForButton() {
        try {
            localStorage.removeItem(this.Constants.BUTTON_POSITION_ITEM_NAME);
        } catch (ex) {
            this.log.error(ex);
        }
    }

    static upgradeGmStorage(settings, version) {
        settings.personal = {};
        settings.scriptVersion = version;
        settings.personalConfig = true;
        return settings;
    }

    // Helper for assistant update from 4.1 to 4.2
    upgradeLocalStorage(settings, sitename) {
        const position = this.getButtonPositionData();
        if (position) {
            if (!settings.personal[sitename]) {
                settings.personal[sitename] = {};
            }
            settings.personal[sitename].position = position;
            settings.personal[sitename].largeIcon = settings.largeIcon;
        }
        this.removeUserPositionForButton();
        return settings;
    }
}

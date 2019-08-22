import protectedApi from './protectedApi';
import log from './log';

/* eslint-disable no-param-reassign */
/**
 * Helper for backward compatibility
 * @returns {{}}
 * @constructor
 */
class UpgradeHelper {
    constructor() {
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
            log.error(ex);
            return undefined;
        }
    }

    removeUserPositionForButton() {
        try {
            localStorage.removeItem(this.Constants.BUTTON_POSITION_ITEM_NAME);
        } catch (ex) {
            log.error(ex);
        }
    }

    // eslint-disable-next-line class-methods-use-this
    upgradeGmStorage(settings, version) {
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

const upgradeHelper = new UpgradeHelper();

export default upgradeHelper;

/**
 * Helper for backward compatibility
 * @returns {{}}
 * @constructor
 */
var UpgradeHelper = function () {
    var Constants = {
        BUTTON_POSITION_ITEM_NAME: '__adbpos'
    };

    var getButtonPositionData = function () {
        try {
            userPosition = localStorage.getItem(Constants.BUTTON_POSITION_ITEM_NAME);
            if (userPosition) {
                return JSON.parse(userPosition);
            }
        } catch (ex) {
            return null;
        }
    };

    var removeUserPositionForButton = function () {
        try {
            localStorage.removeItem(Constants.BUTTON_POSITION_ITEM_NAME);
        } catch (ex) {
            log.error(ex);
        }
    };

    var upgradeGmStorage = function (settings, version) {
        settings.personal = {};
        settings.scriptVersion = version;
        settings.personalConfig = true;
        return settings;
    };

    // Helper for assistant update from 4.1 to 4.2
    var upgradeLocalStorage = function (settings, sitename) {
        var position = getButtonPositionData();
        if (position) {
            if (!settings.personal[sitename]) {
                settings.personal[sitename] = {};
            }
            settings.personal[sitename].position = position;
            settings.personal[sitename].largeIcon = settings.largeIcon;
        }
        removeUserPositionForButton();
        return settings;
    };

    return {
        upgradeGmStorage: upgradeGmStorage,
        upgradeLocalStorage: upgradeLocalStorage
    };
};

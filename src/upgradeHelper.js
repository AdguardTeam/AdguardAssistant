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
        var position = getButtonPositionData();
        if (position) {
            settings.position = position;
        }
        removeUserPositionForButton();
        settings.scriptVersion = version;
        return settings;
    };

    return {
        upgradeGmStorage: upgradeGmStorage
    };
};

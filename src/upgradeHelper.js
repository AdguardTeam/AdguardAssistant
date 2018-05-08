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
            removeUserPositionForButton();
            log.error(ex);
        }
    };

    var removeUserPositionForButton = function () {
        try {
            localStorage.removeItem(Constants.BUTTON_POSITION_ITEM_NAME);
        } catch (ex) {
            log.error(ex);
        }
    };

    return {
        removeUserPositionForButton: removeUserPositionForButton,
        getButtonPositionData: getButtonPositionData
    };
};

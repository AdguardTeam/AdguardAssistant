/**
 * Object that manages wot data
 * @returns {{registerWotEventHandler: Function, getWotData: Function, getWotScorecardUrl: Function, WOT_URL: string}}
 * @constructor
 */
/* global StringUtils */
var Wot = function () { // jshint ignore:line
    var wotUrlScorecardTemplate = 'http://adguard.com/wot-scorecard.html?domain={0}';
    var WOT_URL = 'http://adguard.com/wot.html';
    var wotData = null;

    /*
     Waiting for event from wot extension. Send event back to stop
     firing wot extension events
     */
    var registerWotEventHandler = function () {
        document.addEventListener('wot-score', function (e) {
            wotData = e.data.wotData;
            fireEvent('wot-accepted', null);
        });
    };

    var getWotData = function () {
        return wotData;
    };

    var getWotScorecardUrl = function (url) {
        return StringUtils.format(wotUrlScorecardTemplate, url);
    };

    var fireEvent = function (name, data) {
        var event = document.createEvent("Events");
        event.initEvent(name, true, true);
        event.data = data;
        document.dispatchEvent(event);
    };

    return {
        registerWotEventHandler: registerWotEventHandler,
        getWotData: getWotData,
        getWotScorecardUrl: getWotScorecardUrl,
        WOT_URL: WOT_URL
    };
};

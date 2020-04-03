/**
 * Object that manages wot data
 * @returns {{
 * registerWotEventHandler: Function,
 * getWotData: Function,
 * getWotScorecardUrl: Function,
 * WOT_URL: string
 * }}
 * @constructor
 */
function Wot() {
    const wotUrlScorecardTemplate = 'http://adguard.com/wot-scorecard.html?domain=';
    const WOT_URL = 'http://adguard.com/wot.html';
    let wotData = null;

    const registerWotEventHandler = () => {
        const wotDataCb = (data) => {
            wotData = data;
        };
        if (window.WotData) {
            wotData = window.WotData;
        } else {
            window.WotData = wotDataCb;
        }
    };

    const getWotData = () => wotData;

    const getWotScorecardUrl = (url) => `${wotUrlScorecardTemplate}${url}`;

    return {
        registerWotEventHandler,
        getWotData,
        getWotScorecardUrl,
        WOT_URL,
    };
}

const wot = new Wot();

export default wot;

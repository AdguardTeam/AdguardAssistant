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
    const wotUrlScorecardTemplate = 'https://link.adtidy.org/forward.html?action=wot_scorecard&from=main_menu&app=assistant&domain=';
    const WOT_URL = 'https://link.adtidy.org/forward.html?action=wot&from=main_menu&app=assistant';
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

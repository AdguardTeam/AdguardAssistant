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
/* global StringUtils */
export default function Wot() {
    const wotUrlScorecardTemplate = 'http://adguard.com/wot-scorecard.html?domain={0}';
    const WOT_URL = 'http://adguard.com/wot.html';
    let wotData = null;


    const fireEvent = (name, data) => {
        const event = document.createEvent('Events');
        event.initEvent(name, true, true);
        event.data = data;
        document.dispatchEvent(event);
    };
    /*
     Waiting for event from wot extension. Send event back to stop
     firing wot extension events
     */
    const registerWotEventHandler = () => {
        document.addEventListener('wot-score', (e) => {
            // eslint-disable-next-line prefer-destructuring
            wotData = e.data.wotData;
            fireEvent('wot-accepted', null);
        });
    };

    const getWotData = () => wotData;

    const getWotScorecardUrl = url => StringUtils.format(wotUrlScorecardTemplate, url);

    return {
        registerWotEventHandler,
        getWotData,
        getWotScorecardUrl,
        WOT_URL,
    };
}

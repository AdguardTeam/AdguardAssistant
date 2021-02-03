import { isMobile } from './helpers';
import { adguardAssistantMini, adguardAssistantExtended } from './main';

// eslint-disable-next-line func-names
(function (base) {
    const ua = navigator.userAgent;
    if (isMobile(ua)) {
        // eslint-disable-next-line no-param-reassign
        base.adguardAssistant = adguardAssistantMini;
    } else if (ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        // https://github.com/AdguardTeam/AdguardAssistant/issues/317#issuecomment-564502254
        // DO NOTHING
    } else {
        adguardAssistantExtended();
    }
}(this || window));

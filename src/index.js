import { adguardAssistantMini, adguardAssistantExtended } from './main';

const mobileReg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

// eslint-disable-next-line func-names
(function (base) {
    const ua = navigator.userAgent;
    if (mobileReg.test(ua)) {
        // eslint-disable-next-line no-param-reassign
        base.adguardAssistant = adguardAssistantMini;
    } else if (ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        // https://github.com/AdguardTeam/AdguardAssistant/issues/317#issuecomment-564502254
        // DO NOTHING
    } else {
        adguardAssistantExtended();
    }
}(this || window));

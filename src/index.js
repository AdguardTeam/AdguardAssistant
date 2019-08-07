import { adguardAssistantMini, adguardAssistantExtended } from './main';

const mobileReg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

if (mobileReg.test(navigator.userAgent)) {
    let self = {};
    if (typeof this === 'undefined') {
        self = this;
    }
    self.adguardAssistant = adguardAssistantMini;
} else {
    adguardAssistantExtended();
}

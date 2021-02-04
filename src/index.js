import { adguardAssistantMini, adguardAssistantExtended } from './embedded';
import { isMobile } from './helpers';

export const adguardAssistant = isMobile(navigator.userAgent)
    ? adguardAssistantMini
    : adguardAssistantExtended;

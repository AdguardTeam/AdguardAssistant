/* global AdguardSettings */

import ioc from './ioc';
import protectedApi from './protectedApi';
import wot from './wot';
import settings from './settings';
import IframeController from './iframe';
import IframeControllerMobile from './iframe.mobile';

/* embedded script for extensions */
/*
 * adguardAssistantExtended main function is for desktop browsers
 */
export function adguardAssistantExtended() {
    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;
    wot.registerWotEventHandler();
    settings.setAdguardSettings(adguardSettings);

    const iframeController = new IframeController();
    ioc.register('iframeController', iframeController);

    return {
        start(element, callback) {
            ioc.register('addRule', protectedApi.functionBind.call(callback, this));

            if (element) {
                iframeController.showSelectorMenu();
                iframeController.showSliderMenu(element);
            } else {
                iframeController.showSelectorMenu();
            }
        },
        close() {
            iframeController.removeIframe();
        },
    };
}

/*
 * adguardAssistantMini function is for mobile browsers
 */
export function adguardAssistantMini() {
    const iframeController = new IframeControllerMobile();
    ioc.register('iframeController', iframeController);

    return {
        start(element, callback) {
            ioc.register('addRule', protectedApi.functionBind.call(callback, this));

            if (element) {
                iframeController.showSelectorMenu();
                iframeController.showSliderMenu(element);
            } else {
                iframeController.showSelectorMenu();
            }
        },
        close() {
            iframeController.removeIframe();
        },
    };
}

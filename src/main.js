/* eslint-disable camelcase */
/*
    global
    AdguardSettings
*/
import ioc from './ioc';
import protectedApi from './protectedApi';
import wot from './wot';
import settings from './settings';
import IframeController from './iframe';
import runSheduler from './runSheduler';
import IframeControllerMobile from './iframe.mobile';
import button from './button';

/**
 * adguardAssistantExtended main function is for desktop browsers, running by onload event
 */
export const adguardAssistantExtended = () => {
    ioc.register('addRule', () => false);
    ioc.register('iframeController', new IframeController());

    wot.registerWotEventHandler();
    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;
    settings.setAdguardSettings(adguardSettings);

    runSheduler.onDocumentEnd(settings.loadSettings, button.show);
};

/**
 * adguardAssistantMini function is for mobile browsers
 * and stored in global variable `adguardAssistant` execute with callback:
 *
 * adguardAssistant().start(null, callback);
 */
export const adguardAssistantMini = () => ({
    start(callback) {
        ioc.register('addRule', protectedApi.functionBind.call(callback, this));

        const iframeController = new IframeControllerMobile();
        ioc.register('iframeController', iframeController);

        runSheduler.onDocumentEnd(iframeController.showSelectorMenu);
    },
});

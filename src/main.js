/* eslint-disable camelcase */
/*
    global
    AdguardSettings
*/
import Ioc from './ioc';
import protectedApi from './protectedApi';
import wot from './wot';
import settings from './settings';
import UIUtils from './utils/ui-utils';
import Localization from './localization';
import IframeController from './iframe';
import SliderWidget from './slider-widget';
import AdguardRulesConstructorLib from './adguard-rules-constructor';
import UIButton from './button';
import RunSheduler from './runSheduler';
import IframeControllerMobile from './iframe.mobile';

/**
 * adguardAssistantExtended main function is for desktop browsers, running by onload event
 */
export const adguardAssistantExtended = () => {
    Ioc.register('addRule', () => false);

    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    // TODO think where should we call it
    wot.registerWotEventHandler();
    // TODO think where should we call it
    settings.setAdguardSettings(adguardSettings);
    Ioc.register('uiUtils', Ioc.get(UIUtils));
    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('iframeController', Ioc.get(IframeController));
    Ioc.register('sliderWidget', new SliderWidget({}));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    const button = Ioc.get(UIButton);
    const runSheduler = Ioc.get(RunSheduler);
    Ioc.register('button', button);
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
        Ioc.register('addRule', protectedApi.functionBind.call(callback, this));
        Ioc.register('uiUtils', Ioc.get(UIUtils));
        Ioc.register('localization', Ioc.get(Localization));
        const iframeController = Ioc.get(IframeControllerMobile);
        Ioc.register('iframeController', iframeController);
        Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
        const runSheduler = Ioc.get(RunSheduler);
        runSheduler.onDocumentEnd(iframeController.showSelectorMenu);
    },
});

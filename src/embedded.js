/* global AdguardSettings */

import Ioc from './ioc';
import protectedApi from './protectedApi';
import wot from './wot';
import settings from './settings';
import Localization from './localization';
import SliderWidget from './slider-widget';
import AdguardRulesConstructorLib from './adguard-rules-constructor';
import IframeController from './iframe';
import IframeControllerMobile from './iframe.mobile';

/* embedded script for extensions */
/*
 * adguardAssistantExtended main function is for desktop browsers
 */
export function adguardAssistantExtended() {
    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    // todo: think about where we should call it
    wot.registerWotEventHandler();
    // TODO think where should we call it
    settings.setAdguardSettings(adguardSettings);

    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('sliderWidget', new SliderWidget({}));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    const iframe = Ioc.get(IframeController);
    Ioc.register('iframeController', iframe);

    return {
        start(element, callback) {
            Ioc.register('addRule', protectedApi.functionBind.call(callback, this));

            if (element) {
                iframe.showSelectorMenu();
                iframe.showSliderMenu(element);
            } else {
                iframe.showSelectorMenu();
            }
        },
        close() {
            iframe.removeIframe();
        },
    };
}

/*
 * adguardAssistantMini function is for mobile browsers
 */
export function adguardAssistantMini() {
    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    const iframeController = Ioc.get(IframeControllerMobile);
    Ioc.register('iframeController', iframeController);

    return {
        start(element, callback) {
            Ioc.register('addRule', protectedApi.functionBind.call(callback, this));

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

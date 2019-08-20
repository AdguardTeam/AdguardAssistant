/* global AdguardSettings */

import Ioc from './ioc';
import protectedApi from './protectedApi';
import Wot from './wot';
import Settings from './settings';
import UIValidationUtils from './utils/ui-validation-utils';
import AdguardSelectorLib from './selector/adguard-selector';
import UIUtils from './utils/ui-utils';
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
    Ioc.register('gmApi', () => false);

    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    const wot = new Wot();
    wot.registerWotEventHandler();
    Ioc.register('wot', wot);
    const settings = Ioc.get(Settings);
    settings.setAdguardSettings(adguardSettings);
    Ioc.register('settings', settings);
    Ioc.register('uiValidationUtils', Ioc.get(UIValidationUtils));
    Ioc.register('selector', new AdguardSelectorLib({}));
    Ioc.register('uiUtils', Ioc.get(UIUtils));
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
    Ioc.register('selector', new AdguardSelectorLib({}));
    Ioc.register('uiUtils', Ioc.get(UIUtils));
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

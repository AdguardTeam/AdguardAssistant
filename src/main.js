/* eslint-disable camelcase */
/*
    global
    AdguardSettings,
    ADG_addRule,
    ADG_temporaryDontBlock,
    ADG_sendAbuse,
    ADG_isFiltered,
    ADG_changeFilteringState
*/
import Ioc from './ioc';
import protectedApi from './protectedApi';
import AdguardSelectorLib from './selector/adguard-selector';
import GM from './gm';
import wot from './wot';
import Settings from './settings';
import UIValidationUtils from './utils/ui-validation-utils';
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

    const addRule = typeof (ADG_addRule) === 'undefined' ? null : ADG_addRule;
    const dontBlock = typeof (ADG_temporaryDontBlock) === 'undefined' ? null : ADG_temporaryDontBlock;
    const sendAbuse = typeof (ADG_sendAbuse) === 'undefined' ? null : ADG_sendAbuse;
    const checkRule = typeof (ADG_isFiltered) === 'undefined' ? null : ADG_isFiltered;
    const changeFilteringState = typeof (ADG_changeFilteringState) === 'undefined' ? null : ADG_changeFilteringState;
    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    Ioc.register('gmApi', new GM(
        addRule,
        dontBlock,
        sendAbuse,
        checkRule,
        changeFilteringState,
    ));
    // TODO think where should we call it
    wot.registerWotEventHandler();
    const settings = Ioc.get(Settings);
    settings.setAdguardSettings(adguardSettings);
    Ioc.register('settings', settings);
    Ioc.register('uiValidationUtils', Ioc.get(UIValidationUtils));
    Ioc.register('selector', new AdguardSelectorLib({}));
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
        Ioc.register('selector', new AdguardSelectorLib({}));
        Ioc.register('uiUtils', Ioc.get(UIUtils));
        Ioc.register('localization', Ioc.get(Localization));
        const iframeController = Ioc.get(IframeControllerMobile);
        Ioc.register('iframeController', iframeController);
        Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
        const runSheduler = Ioc.get(RunSheduler);
        runSheduler.onDocumentEnd(iframeController.showSelectorMenu);
    },
});

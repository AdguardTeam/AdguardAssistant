/* eslint-disable camelcase */
/*
    global
    ProtectedApi,
    Ioc,
    Log,
    GM,
    Wot,
    Settings,
    AdguardSettings,
    UIValidationUtils,
    balalaika,
    UIUtils,
    Localization,
    IframeController,
    IframeControllerMobile,
    RunSheduler,
    SliderWidget,
    AdguardRulesConstructorLib,
    AdguardSelectorLib,
    UIButton,
    UpgradeHelper,
    ADG_addRule,
    ADG_temporaryDontBlock,
    ADG_sendAbuse,
    ADG_isFiltered,
    ADG_changeFilteringState
*/

/*
 * adguardAssistantExtended main function is for desktop browsers, running by onload event
 */
export const adguardAssistantExtended = () => {
    Ioc.register('protectedApi', new ProtectedApi());
    Ioc.register('log', new Log());
    Ioc.register('UpgradeHelper', new UpgradeHelper(Ioc.get(Log), Ioc.get(ProtectedApi)));

    const protectedApiCtrl = Ioc.get(ProtectedApi);

    Ioc.register('addRule', () => false);

    const addRule = typeof (ADG_addRule) === 'undefined' ? null : ADG_addRule;
    const dontBlock = typeof (ADG_temporaryDontBlock) === 'undefined' ? null : ADG_temporaryDontBlock;
    const sendAbuse = typeof (ADG_sendAbuse) === 'undefined' ? null : ADG_sendAbuse;
    const checkRule = typeof (ADG_isFiltered) === 'undefined' ? null : ADG_isFiltered;
    const changeFilteringState = typeof (ADG_changeFilteringState) === 'undefined' ? null : ADG_changeFilteringState;
    const adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    Ioc.register('gmApi', new GM(addRule, dontBlock, sendAbuse, checkRule, changeFilteringState, protectedApiCtrl));
    const wot = new Wot();
    wot.registerWotEventHandler();
    Ioc.register('wot', wot);
    const settings = Ioc.get(Settings);
    settings.setAdguardSettings(adguardSettings);
    Ioc.register('settings', settings);
    Ioc.register('uiValidationUtils', Ioc.get(UIValidationUtils));
    Ioc.register('$', balalaika);
    Ioc.register('selector', new AdguardSelectorLib({}, balalaika, protectedApiCtrl));
    Ioc.register('uiUtils', Ioc.get(UIUtils));
    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('iframeController', Ioc.get(IframeController));
    Ioc.register('sliderWidget', new SliderWidget({}, balalaika, protectedApiCtrl));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}, protectedApiCtrl));
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
        Ioc.register('protectedApi', new ProtectedApi());
        const protectedApiCtrl = Ioc.get(ProtectedApi);
        Ioc.register('log', new Log());
        Ioc.register('addRule', protectedApiCtrl.functionBind.call(callback, this));
        Ioc.register('$', balalaika);
        Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
        Ioc.register('uiUtils', Ioc.get(UIUtils));
        Ioc.register('localization', Ioc.get(Localization));
        const iframeController = Ioc.get(IframeControllerMobile);
        Ioc.register('iframeController', iframeController);
        Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
        const runSheduler = Ioc.get(RunSheduler);
        runSheduler.onDocumentEnd(iframeController.showSelectorMenu);
    },
});

/* global Ioc, Log, GM, Resources, Wot, Settings, AdguardSettings, UIValidationUtils, balalaika, UIUtils, Localization, IframeController, SliderWidget, AdguardRulesConstructorLib, AdguardSelectorLib, UIButton */

/* global ADG_addRule, ADG_temporaryDontBlock, ADG_sendAbuse, ADG_isFiltered, ADG_changeFilteringState */

(function () {
    Ioc.register('log', new Log());

    var addRule = typeof (ADG_addRule) === 'undefined' ? null : ADG_addRule;
    var dontBlock = typeof (ADG_temporaryDontBlock) === 'undefined' ? null : ADG_temporaryDontBlock;
    var sendAbuse = typeof (ADG_sendAbuse) === 'undefined' ? null : ADG_sendAbuse;
    var checkRule = typeof (ADG_isFiltered) === 'undefined' ? null : ADG_isFiltered;
    var changeFilteringState = typeof (ADG_changeFilteringState) === 'undefined' ? null : ADG_changeFilteringState;

    Ioc.register('gmApi', new GM(addRule, dontBlock, sendAbuse, checkRule, changeFilteringState));

    Ioc.register('resources', new Resources());
    var wot = new Wot();
    wot.registerWotEventHandler();
    Ioc.register('wot', wot);
    var settings = Ioc.get(Settings);
    settings.setAdguardSettings(AdguardSettings);
    Ioc.register('settings', settings);
    Ioc.register('uiValidationUtils', Ioc.get(UIValidationUtils));
    Ioc.register('$', balalaika);
    Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
    Ioc.register('uiUtils', Ioc.get(UIUtils));
    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('iframeController', Ioc.get(IframeController));
    Ioc.register('sliderWidget', new SliderWidget({}, balalaika));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    settings.loadSettings();
    var button = Ioc.get(UIButton);
    Ioc.register('button', button);
    button.show();

})();
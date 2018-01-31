/* global Ioc, Log, GM, Wot, Settings, AdguardSettings, UIValidationUtils, balalaika, UIUtils, Localization, IframeController, SliderWidget, AdguardRulesConstructorLib, AdguardSelectorLib, UIButton */

/* global ADG_addRule, ADG_temporaryDontBlock, ADG_sendAbuse, ADG_isFiltered, ADG_changeFilteringState */

/*
 * adguardAssistantExtended main function is for desktop browsers, running by onload event
 */
var adguardAssistantExtended = function () {
    Ioc.register('log', new Log());

    var addRule = typeof (ADG_addRule) === 'undefined' ? null : ADG_addRule;
    var dontBlock = typeof (ADG_temporaryDontBlock) === 'undefined' ? null : ADG_temporaryDontBlock;
    var sendAbuse = typeof (ADG_sendAbuse) === 'undefined' ? null : ADG_sendAbuse;
    var checkRule = typeof (ADG_isFiltered) === 'undefined' ? null : ADG_isFiltered;
    var changeFilteringState = typeof (ADG_changeFilteringState) === 'undefined' ? null : ADG_changeFilteringState;
    var adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    Ioc.register('gmApi', new GM(addRule, dontBlock, sendAbuse, checkRule, changeFilteringState));
    var wot = new Wot();
    wot.registerWotEventHandler();
    Ioc.register('wot', wot);
    var settings = Ioc.get(Settings);
    settings.setAdguardSettings(adguardSettings);
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
};

/*
 * adguardAssistantMini function is for mobile browsers and stored in global variable `adguardAssistant`
 * execute with callback:
 *
 * adguardAssistant.start(function(rules){
        // apply rules
    });
 */
var adguardAssistantMini = (function() {
    return {
        start: function(callback) {
            Ioc.register('log', new Log());
            Ioc.register('addRule', callback.bind(this));
            Ioc.register('$', balalaika);
            Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
            Ioc.register('uiUtils', Ioc.get(UIUtils));
            Ioc.register('localization', Ioc.get(Localization));
            var iframeController = Ioc.get(IframeControllerMobile);
            Ioc.register('iframeController', iframeController);
            Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));

            iframeController.showSelectorMenu();
        }
    };
})();

var mobileReg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

if (mobileReg.test(navigator.userAgent)) {
    this.adguardAssistant = adguardAssistantMini;
} else {
    adguardAssistantExtended();
}

/* embedded script for extensions */

/* global Ioc, Log, Wot, Settings, AdguardSettings, UIValidationUtils, balalaika, UIUtils, Localization, IframeController, SliderWidget, AdguardRulesConstructorLib, AdguardSelectorLib */

/*
 * adguardAssistantExtended main function is for desktop browsers
 */
var adguardAssistantExtended = function () {
    Ioc.register('log', new Log());

    Ioc.register('gmApi', function() {
        return false;
    });

    var adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

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
    Ioc.register('sliderWidget', new SliderWidget({}, balalaika));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    var iframe = Ioc.get(IframeController);
    Ioc.register('iframeController', iframe);

    return {
        start: function(element, callback) {
            Ioc.register('addRule', callback.bind(this));

            if (element) {
                iframe.showSliderMenu(element);
            } else {
                iframe.showSelectorMenu();
            }
        },
        close: function() {
            iframe.removeIframe();
        }
    };
};

/*
 * adguardAssistantMini function is for mobile browsers
 */
var adguardAssistantMini = function() {
    Ioc.register('log', new Log());
    Ioc.register('$', balalaika);
    Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
    Ioc.register('uiUtils', Ioc.get(UIUtils));
    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    var iframeController = Ioc.get(IframeControllerMobile);
    Ioc.register('iframeController', iframeController);

    return {
        start: function(callback) {
            Ioc.register('addRule', callback.bind(this));
            iframeController.showSelectorMenu();
        },
        close: function() {
            iframeController.removeIframe();
        }
    };
};

var mobileReg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

if (mobileReg.test(navigator.userAgent)) {
    this.adguardAssistant = adguardAssistantMini();
} else {
    this.adguardAssistant = adguardAssistantExtended();
}

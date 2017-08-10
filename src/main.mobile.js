/* global Ioc, Log, Resources, Settings, UIValidationUtils, balalaika, UIUtils, Localization, IframeControllerMobile, SliderWidget, AdguardRulesConstructorLib, AdguardSelectorLib, UIButtonMobile */

this.adguardAssistant = (function() {
    return {
        start: function(callback) {
            Ioc.register('log', new Log());
            Ioc.register('addRule', callback.bind(this));

            Ioc.register('resources', new Resources());
            var settings = Ioc.get(Settings);
            settings.setAdguardSettings();
            Ioc.register('settings', settings);
            Ioc.register('uiValidationUtils', Ioc.get(UIValidationUtils));
            Ioc.register('$', balalaika);
            Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
            Ioc.register('uiUtils', Ioc.get(UIUtils));
            Ioc.register('localization', Ioc.get(Localization));
            Ioc.register('iframeController', Ioc.get(IframeControllerMobile));
            Ioc.register('sliderWidget', new SliderWidget({}, balalaika));
            Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
            settings.loadSettings();
            var button = Ioc.get(UIButtonMobile);
            Ioc.register('button', button);
            button.show();
        }
    };
})();

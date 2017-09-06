/* global Ioc, Log, Resources, Settings, UIValidationUtils, balalaika, UIUtils, Localization, IframeControllerMobile, SliderWidget, AdguardRulesConstructorLib, AdguardSelectorLib, UIButtonMobile */

this.adguardAssistant = (function() {
    return {
        start: function(callback) {
            Ioc.register('log', new Log());
            Ioc.register('addRule', callback.bind(this));

            Ioc.register('resources', new Resources());
            Ioc.register('$', balalaika);
            Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
            Ioc.register('uiUtils', Ioc.get(UIUtils));
            Ioc.register('localization', Ioc.get(Localization));
            var iframeController = Ioc.get(IframeControllerMobile);
            Ioc.register('iframeController', iframeController);
            Ioc.register('sliderWidget', new SliderWidget({}, balalaika));
            Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));

            iframeController.showSelectorMenu();
        }
    };
})();

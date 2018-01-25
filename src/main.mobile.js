/* global Ioc, Log, Settings, UIValidationUtils, balalaika, UIUtils, Localization, IframeControllerMobile, AdguardRulesConstructorLib, AdguardSelectorLib, UIButtonMobile */

this.adguardAssistant = (function() {
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

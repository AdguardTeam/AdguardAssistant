Ioc.add('log', new Log());

var addRule = typeof (ADG_addRule) == 'undefined' ? null : ADG_addRule;
var dontBlock = typeof (ADG_temporaryDontBlock) == 'undefined' ? null : ADG_temporaryDontBlock;
var sendAbuse = typeof (ADG_sendAbuse) == 'undefined' ? null : ADG_sendAbuse;
var checkRule = typeof (ADG_isFiltered) == 'undefined' ? null : ADG_isFiltered;
var changeFilteringState = typeof (ADG_changeFilteringState) == 'undefined' ? null : ADG_changeFilteringState;

Ioc.add('gmApi', new GM(addRule, dontBlock, sendAbuse, checkRule, changeFilteringState));

Ioc.add('resources', new Resources());
var wot = new Wot();
wot.registerWotEventHandler();
Ioc.add('wot', wot);
var settings = Ioc.get(Settings);
settings.setAdguardSettings(AdguardSettings);
Ioc.add('settings', settings);
Ioc.add('uiValidationUtils', Ioc.get(UIValidationUtils));
Ioc.add('$', balalaika);
Ioc.add('selector', new AdguardSelectorLib({}, balalaika));
Ioc.add('uiUtils', Ioc.get(UIUtils));
Ioc.add('localization', Ioc.get(Localization));
Ioc.add('iframeController', Ioc.get(IframeController));
Ioc.add('sliderWidget', new SliderWidget({}, balalaika));
Ioc.add('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
settings.loadSettings();
var button = Ioc.get(UIButton);
Ioc.add('button', button);
button.show();

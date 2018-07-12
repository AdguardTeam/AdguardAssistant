/**
 * Slider menu controller
 * @param $
 * @param selector
 * @param sliderWidget
 * @param settings
 * @param adguardRulesConstructor
 * @param localization
 * @param gmApi
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc, CommonUtils */
var SliderMenuController = function ($, selector, sliderWidget, settings, adguardRulesConstructor, localization, gmApi, addRule) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var startElement = null;
    var currentElement = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        startElement = selectedElement;
        contentDocument = iframe.contentDocument;
        currentElement = options.currentElement;
        bindEvents();
        createSlider(currentElement);
        onScopeChange();
        selector.selectElement(selectedElement);

        // select current element after returning from preview mode
        if (currentElement) {
            onSliderMove(currentElement);
        }

        // make input clickable with right mouse button for text editing
        CommonUtils.events.add(contentDocument.getElementById('filter-rule'), 'contextmenu', function(e) {
            e.stopPropagation();
        });

        if (options.path) {
            setFilterRuleInputText(options.path);
            expandAdvanced();
        }

        if (options.options) {
            makeDefaultCheckboxesForDetailedMenu(options.options);
        }
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '#ExtendedSettingsText': expandAdvanced,
            '#adg-cancel': iframeCtrl.showSelectorMenu,
            '#adg-preview': showPreview,
            '#adg-accept': blockElement,
            '#block-by-url-checkbox-block': onScopeChange,
            '#one-domain-checkbox-block': onScopeChange,
            '#block-similar-checkbox-block': onScopeChange
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var blockElement = function () {
        var path = getFilterRuleInputText();
        iframeCtrl.blockElement(path);
    };

    var expandAdvanced = function () {
        var hidden = !$(contentDocument.getElementById('adv-settings')).hasClass("open");
        if (hidden) {
            $(contentDocument.getElementById('adv-settings')).addClass('open');
            $(contentDocument.getElementById('ExtendedSettingsText')).addClass('active');
            iframeCtrl.resizeSliderMenuToAdvanced();
        } else {
            $(contentDocument.getElementById('adv-settings')).removeClass('open');
            $(contentDocument.getElementById('ExtendedSettingsText')).removeClass('active');
            iframeCtrl.resizeSliderMenuToNormal();
        }
    };

    var showPreview = function () {
        var options = {
            isBlockByUrl: contentDocument.getElementById('block-by-url-checkbox').checked,
            isBlockSimilar: contentDocument.getElementById('block-similar-checkbox').checked,
            isBlockOneDomain: contentDocument.getElementById('one-domain-checkbox').checked
        };

        iframeCtrl.showBlockPreview(selectedElement, getFilterRuleInputText(), startElement, options);
    };

    var createSlider = function (setElement) {
        var parents = CommonUtils.getParentsLevel(selectedElement);
        var children = CommonUtils.getAllChildren(selectedElement);

        var value = Math.abs(parents.length + 1);
        var max = parents.length + children.length + 1;

        var min = 1;
        var options = {value: value, min: min, max: max};
        var slider = contentDocument.getElementById('slider');
        var sliderArea = contentDocument.getElementById('slider-area');

        if (min === max) {
            //hide slider text
            $(slider).hide();
            $(contentDocument.getElementsByClassName('element-rule_text')).hide();
            expandAdvanced();
        }

        options.onSliderMove = function (delta) {
            var elem;
            if (delta > 0) {
                elem = parents[delta - 1];
            }
            if (delta === 0) {
                elem = startElement;
            }
            if (delta < 0) {
                elem = children[Math.abs(delta + 1)];
            }

            onSliderMove(elem);
        };

        var currentVal = options.value;

        // set slider position on current element after returning from preview mode
        if (setElement) {
            var setElementparents = CommonUtils.getParentsLevel(setElement);
            currentVal = setElementparents.length + 1;
        }

        sliderWidget.init(slider, {
            min: options.min,
            max: options.max,
            value: currentVal,
            onValueChanged: function (value) {
                var delta = options.value - value;
                options.onSliderMove(delta);
            },
            sliderArea: sliderArea
        });
    };

    var onSliderMove = function (element) {
        selectedElement = element;
        selector.selectElement(element);

        makeDefaultCheckboxesForDetailedMenu();
        onScopeChange();
        handleShowBlockSettings(haveUrlBlockParameter(element), haveClassAttribute(element));
    };

    var makeDefaultCheckboxesForDetailedMenu = function (options) {
        contentDocument.getElementById('block-by-url-checkbox').checked = options && options.isBlockByUrl;
        contentDocument.getElementById('block-similar-checkbox').checked = options && options.isBlockSimilar;
        contentDocument.getElementById('one-domain-checkbox').checked = options && options.isBlockOneDomain;

        if (options && (options.isBlockByUrl || options.isBlockSimilar)) {
            handleShowBlockSettings(options.isBlockByUrl, options.isBlockSimilar);
        }
    };

    var onScopeChange = function () {

        var isBlockByUrl = contentDocument.getElementById('block-by-url-checkbox').checked;
        var isBlockSimilar = contentDocument.getElementById('block-similar-checkbox').checked;
        var isBlockOneDomain = contentDocument.getElementById('one-domain-checkbox').checked;

        handleShowBlockSettings(haveUrlBlockParameter(selectedElement) && !isBlockSimilar, haveClassAttribute(selectedElement) && !isBlockByUrl);

        var options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: isBlockSimilar ? "SIMILAR" : "STRICT_FULL",
            isBlockOneDomain: isBlockOneDomain,
            url: document.location,
            ruleType: isBlockByUrl ? "URL" : "CSS"
        };

        var ruleText = adguardRulesConstructor.constructRuleText(selectedElement, options);
        setFilterRuleInputText(ruleText);
        iframeCtrl.resizeIframe();
    };

    var haveUrlBlockParameter = function (element) {
        var value = getUrlBlockAttribute(element);
        return value && value !== '';
    };

    var getUrlBlockAttribute = function (element) {
        var urlBlockAttributes = ["src", "data"];
        for (var i = 0; i < urlBlockAttributes.length; i++) {
            var attr = urlBlockAttributes[i];
            var value = element.getAttribute(attr);
            if (value) {
                return value;
            }
        }
        return null;
    };

    var haveClassAttribute = function (element) {
        var className = element.className;
        return className && typeof className === 'string' && className.trim() !== '';
    };

    var handleShowBlockSettings = function (showBlockByUrl, showBlockSimilar) {
        var blockByUrlBlock = $(contentDocument.getElementById('block-by-url-checkbox-block'));
        var blockSimilarBlock = $(contentDocument.getElementById('block-similar-checkbox-block'));
        if (showBlockByUrl) {
            blockByUrlBlock.show();
        } else {
            contentDocument.getElementById('block-by-url-checkbox').checked = false;
            blockByUrlBlock.hide();
        }
        if (showBlockSimilar) {
            blockSimilarBlock.show();
        } else {
            contentDocument.getElementById('block-similar-checkbox').checked = false;
            blockSimilarBlock.hide();
        }
    };

    var setFilterRuleInputText = function (ruleText) {
        contentDocument.getElementById('filter-rule').value = ruleText;
    };

    var getFilterRuleInputText = function () {
        return contentDocument.getElementById('filter-rule').value;
    };

    return {
        init: init
    };
};

/**
 * Slider menu controller
 * @param $
 * @param selector
 * @param sliderWidget
 * @param settings
 * @param adguardRulesConstructor
 * @param localization
 * @param gmApi
 * @returns {{init: init, setSelectedElement: setSelectedElement}}
 * @constructor
 */
var SliderMenuController = function ($, selector, sliderWidget, settings, adguardRulesConstructor, localization, gmApi) {
    var contentDocument = null;
    var selectedElement = null;
    var iframeCtrl = Ioc.get('iframeController');

    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        _bindEvents();
        _createSlider();
        _onScopeChange();
        selector.selectElement(selectedElement);
    };

    var _bindEvents = function () {
        var menuEvents = {
            '.close': _close,
            '#ExtendedSettingsText': _expandAdvanced,
            '#adv-settings': _onScopeChange,
            '#adg-cancel': iframeCtrl.showSelectorMenu,
            '#adg-preview': _showPreview,
            '#adg-accept': _blockElement
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var _blockElement = function () {
        gmApi.ADG_addRule(_getFilterRuleInputText());
        iframeCtrl.removeIframe();
    };

    var _expandAdvanced = function () {
        var hidden = !$(contentDocument.getElementById('adv-settings')).hasClass("open");
        if (hidden) {
            iframeCtrl.resizeSliderMenuToAdvanced();
            $(contentDocument.getElementById('adv-settings')).addClass('open');
            $(contentDocument.getElementById('ExtendedSettingsText')).addClass('active');
        } else {
            iframeCtrl.resizeSliderMenuToNormal();
            $(contentDocument.getElementById('adv-settings')).removeClass('open');
            $(contentDocument.getElementById('ExtendedSettingsText')).removeClass('active');
        }
    };

    var _showPreview = function () {
        iframeCtrl.showBlockPreview(selectedElement, _getFilterRuleInputText());
    };

    var _createSlider = function () {
        var parents = CommonUtils.getParentsLevel(selectedElement);
        var children = CommonUtils.getAllChildren(selectedElement);
        var value = Math.abs(parents.length + 1);
        var max = parents.length + children.length + 1;
        var min = 1;
        var options = {value: value, min: min, max: max};
        var slider = contentDocument.getElementById('slider');
        if (min == max) {
            //hide slider text
            $(slider).hide();
            $(contentDocument.getElementsByClassName('element-rule_text')).hide();
            _expandAdvanced();
        }

        options.onSliderMove = function (delta) {
            var elem;
            if (delta > 0) {
                elem = parents[delta - 1];
            }
            if (delta === 0) {
                elem = selectedElement;
            }
            if (delta < 0) {
                elem = children[Math.abs(delta + 1)];
            }
            _onSliderMove(elem);
        };

        sliderWidget.init(slider, {
            min: options.min,
            max: options.max,
            value: options.value,
            onValueChanged: function (value) {
                var delta = options.value - value;
                options.onSliderMove(delta);
            }
        });
    };

    var _onSliderMove = function (element) {
        selectedElement = element;
        selector.selectElement(element);

        _makeDefaultCheckboxesForDetailedMenu();
        _onScopeChange();
        _handleShowBlockSettings(_haveUrlBlockParameter(element), _haveClassAttribute(element));
    };

    var _makeDefaultCheckboxesForDetailedMenu = function () {
        contentDocument.getElementById('block-by-url-checkbox').checked = false;
        contentDocument.getElementById('block-similar-checkbox').checked = false;
        contentDocument.getElementById('one-domain-checkbox').checked = false;
    };

    var _onScopeChange = function () {

        var isBlockByUrl = contentDocument.getElementById('block-by-url-checkbox').checked;
        var isBlockSimilar = contentDocument.getElementById('block-similar-checkbox').checked;
        var isBlockOneDomain = contentDocument.getElementById('one-domain-checkbox').checked;

        _handleShowBlockSettings(_haveUrlBlockParameter(selectedElement) && !isBlockSimilar, _haveClassAttribute(selectedElement) && !isBlockByUrl);

        var options = {
            isBlockByUrl: isBlockByUrl,
            urlMask: _getUrlBlockAttribute(selectedElement),
            isBlockSimilar: isBlockSimilar,
            isBlockOneDomain: isBlockOneDomain,
            domain: CommonUtils.cropDomain(location.host)
        };

        var ruleText = adguardRulesConstructor.constructRuleText(selectedElement, options);
        _setFilterRuleInputText(ruleText);
    };

    var _haveUrlBlockParameter = function (element) {
        var value = _getUrlBlockAttribute(element);
        return value && value !== '';
    };

    var _getUrlBlockAttribute = function (element) {
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

    var _haveClassAttribute = function (element) {
        var className = element.className;
        return className && className.trim() !== '';
    };

    var _handleShowBlockSettings = function (showBlockByUrl, showBlockSimilar) {
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

    var _setFilterRuleInputText = function (ruleText) {
        contentDocument.getElementById('filter-rule').value = ruleText;
    };

    var _getFilterRuleInputText = function () {
        return contentDocument.getElementById('filter-rule').value;
    };

    var setSelectedElement = function (element) {
        selectedElement = element;
    };

    var _close = function () {
        iframeCtrl.removeIframe();
    };

    return {
        init: init,
        setSelectedElement: setSelectedElement
    };
};

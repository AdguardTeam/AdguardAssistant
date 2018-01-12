/**
 * Slider menu controller mobile
 * @param $
 * @param selector
 * @param adguardRulesConstructor
 * @param localization
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc, CommonUtils */
var SliderMenuControllerMobile = function ($, selector, adguardRulesConstructor, localization, addRule) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var rule = null;
    var iframeCtrl = Ioc.get('iframeController');

    var nodeParentsCount = 0;
    var nodeChildsCount = 0;
    var parents, children;
    var nodeNumber = 0;

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        contentDocument = iframe.contentDocument;
        bindEvents();
        createSlider();
        onScopeChange();
        selector.selectElement(selectedElement);

        children = CommonUtils.getAllChildren(selectedElement);
        parents = CommonUtils.getParentsLevel(selectedElement);

        parents.splice(0,0,selectedElement);

        nodeParentsCount = parents.length;
        nodeChildsCount = children.length;
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var plus = function() {
        (nodeNumber + 1) > nodeParentsCount ? nodeNumber = nodeNumber : nodeNumber++;

        if (nodeNumber >= 0) {
            if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
        } else {
            if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
        }
    };

    var minus = function() {
        nodeNumber <= -nodeChildsCount ? nodeNumber = nodeNumber : nodeNumber--;

        if (nodeNumber >= 0) {
            if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
        } else {
            if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
        }
    };

    var bindEvents = function () {
        var menuEvents = {
            '.adg-close': iframeCtrl.startSelect,
            '.adg-preview': showPreview,
            '.adg-accept': blockElement,
            '.adg-plus': plus,
            '.adg-minus': minus
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });

        window.addEventListener('resize', iframeCtrl.startSelect);
    };

    var blockElement = function () {
        iframeCtrl.removeIframe();
    };

    var showPreview = function () {
        iframeCtrl.showBlockPreview(selectedElement, rule);
    };

    var createSlider = function () {
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
                elem = selectedElement;
            }
            if (delta < 0) {
                elem = children[Math.abs(delta + 1)];
            }
            onSliderMove(elem);
        };
    };

    var onSliderMove = function (element) {
        selectedElement = element;
        selector.selectElement(element);
        onScopeChange();
    };

    var onScopeChange = function () {
        var options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: "STRICT_FULL",
            isBlockOneDomain: true,
            url: document.location,
            ruleType: "CSS"
        };

        rule = adguardRulesConstructor.constructRuleText(selectedElement, options);
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
        var className = element.getAttribute("class");
        return className && className.trim() !== '';
    };

    return {
        init: init
    };
};

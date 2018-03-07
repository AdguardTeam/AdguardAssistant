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
            '.adg-close': iframeCtrl.showSelectorMenu,
            '.adg-preview': showPreview,
            '.adg-accept': blockElement,
            '.adg-plus': plus,
            '.adg-minus': minus
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });

        window.addEventListener('orientationchange', iframeCtrl.showSelectorMenu);
    };

    var blockElement = function () {
        selectedElement.style.display = 'none';
        addRule(getFilterText());
        iframeCtrl.removeIframe();
    };

    var showPreview = function () {
        selector.reset();

        if (this.classList.contains('active')) {
            selectedElement.classList.remove('sg_hide_element');
            this.classList.remove('active');
            selector.selectElement(selectedElement);
            contentDocument.querySelector('.adg-plus').removeAttribute('disabled');
            contentDocument.querySelector('.adg-minus').removeAttribute('disabled');
            contentDocument.querySelector('.adg-close').removeAttribute('disabled');
        } else {
            selectedElement.classList.add('sg_hide_element');
            this.classList.add('active');
            contentDocument.querySelector('.adg-plus').setAttribute('disabled','disabled');
            contentDocument.querySelector('.adg-minus').setAttribute('disabled','disabled');
            contentDocument.querySelector('.adg-close').setAttribute('disabled','disabled');
        }
    };

    var onSliderMove = function (element) {
        selectedElement = element;
        selector.selectElement(element);
    };

    var getFilterText = function () {
        var options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: "STRICT_FULL",
            isBlockOneDomain: false,
            url: document.location,
            ruleType: "CSS"
        };

        return adguardRulesConstructor.constructRuleText(selectedElement, options);
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

    return {
        init: init
    };
};

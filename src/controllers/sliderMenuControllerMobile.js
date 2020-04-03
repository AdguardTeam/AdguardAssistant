import {
    toArray,
    getAllChildren,
    getParentsLevel,
    removeClass,
    addClass,
} from '../utils/dom-utils';
import selector from '../adguard-selector';
import adguardRulesConstructor from '../adguard-rules-constructor';

/**
 * Slider menu controller mobile
 * @param addRule
 * @param iframe
 * @returns {{init: init}}
 * @constructor
 */
export default function SliderMenuControllerMobile(addRule, iframe) {
    let contentDocument = null;
    let selectedElement = null;
    const iframeCtrl = iframe;

    let nodeParentsCount = 0;
    let nodeChildsCount = 0;
    let parents;
    let children;
    let nodeNumber = 0;

    function showPreview() {
        selector.reset();

        if (this.classList.contains('active')) {
            removeClass(selectedElement, 'sg_hide_element');
            removeClass(this, 'active');
            selector.selectElement(selectedElement);
            contentDocument.querySelector('.adg-plus').removeAttribute('disabled');
            contentDocument.querySelector('.adg-minus').removeAttribute('disabled');
            contentDocument.querySelector('.adg-close').removeAttribute('disabled');
        } else {
            addClass(selectedElement, 'sg_hide_element');
            addClass(this, 'active');
            contentDocument.querySelector('.adg-plus').setAttribute('disabled', 'disabled');
            contentDocument.querySelector('.adg-minus').setAttribute('disabled', 'disabled');
            contentDocument.querySelector('.adg-close').setAttribute('disabled', 'disabled');
        }
    }

    const getUrlBlockAttribute = (element) => {
        const urlBlockAttributes = ['src', 'data'];
        for (let i = 0; i < urlBlockAttributes.length; i += 1) {
            const attr = urlBlockAttributes[i];
            const value = element.getAttribute(attr);
            if (value) {
                return value;
            }
        }
        return null;
    };

    const getFilterText = () => {
        const options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: 'STRICT_FULL',
            isBlockOneDomain: false,
            url: document.location,
            ruleType: 'CSS',
        };

        return adguardRulesConstructor.constructRuleText(selectedElement, options);
    };

    const blockElement = () => {
        selectedElement.classList.remove('sg_hide_element');
        selectedElement.style.display = 'none';
        addRule(getFilterText());
        iframeCtrl.removeIframe();
    };

    const onSliderMove = (element) => {
        selectedElement = element;
        selector.selectElement(element);
    };

    const plus = () => {
        nodeNumber = (nodeNumber + 1) > nodeParentsCount
            ? nodeNumber
            : nodeNumber + 1;

        if (nodeNumber >= 0) {
            if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
            // eslint-disable-next-line no-bitwise
        } else if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
    };

    const minus = () => {
        // TODO: rewrite this
        // eslint-disable-next-line no-unused-expressions, no-self-assign
        nodeNumber <= -nodeChildsCount ? nodeNumber = nodeNumber : nodeNumber -= 1;

        if (nodeNumber >= 0) {
            if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
            // eslint-disable-next-line no-bitwise
        } else if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
    };

    const bindEvents = () => {
        const menuEvents = {
            '.adg-close': iframeCtrl.showSelectorMenu,
            '.adg-preview': showPreview,
            '.adg-accept': blockElement,
            '.adg-plus': plus,
            '.adg-minus': minus,
        };
        Object.keys(menuEvents).forEach((item) => {
            const elems = contentDocument.querySelectorAll(item);
            toArray(elems).forEach((elem) => elem.addEventListener('click', menuEvents[item]));
        });

        window.addEventListener('orientationchange', iframeCtrl.showSelectorMenu);
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    // eslint-disable-next-line no-shadow
    const init = (iframe, options) => {
        selectedElement = options.element;
        // eslint-disable-next-line prefer-destructuring
        contentDocument = iframe.contentDocument;
        bindEvents();
        selector.selectElement(selectedElement);

        children = getAllChildren(selectedElement);
        parents = getParentsLevel(selectedElement);

        parents.splice(0, 0, selectedElement);

        nodeParentsCount = parents.length;
        nodeChildsCount = children.length;
    };

    return {
        init,
    };
}

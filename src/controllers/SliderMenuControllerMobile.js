import Ioc from '../ioc';
import { getAllChildren, getParentsLevel } from '../utils/common-utils';


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
export default function SliderMenuControllerMobile(
    $,
    selector,
    adguardRulesConstructor,
    localization,
    addRule,
) {
    let contentDocument = null;
    let selectedElement = null;
    const iframeCtrl = Ioc.get('iframeController');

    let nodeParentsCount = 0;
    let nodeChildsCount = 0;
    let parents;
    let children;
    let nodeNumber = 0;

    function showPreview() {
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
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });

        window.addEventListener('orientationchange', iframeCtrl.showSelectorMenu);
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
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

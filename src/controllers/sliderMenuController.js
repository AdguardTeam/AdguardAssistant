import { events } from '../utils/common-utils';
import {
    hasClass,
    addClass,
    removeClass,
    show,
    hide,
    toArray,
    getParentsLevel,
    getAllChildren,
} from '../utils/dom-utils';
import selector from '../adguard-selector';
import sliderWidget from '../slider-widget';
import adguardRulesConstructor from '../adguard-rules-constructor';

/**
 * Slider menu controller
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
export default function SliderMenuController(addRule, iframe) {
    let contentDocument = null;
    let selectedElement = null;
    let startElement = null;
    let currentElement = null;
    const iframeCtrl = iframe;

    const getFilterRuleInputText = () => contentDocument.getElementById('filter-rule').value;

    const close = () => {
        iframeCtrl.removeIframe();
    };

    const expandAdvanced = () => {
        const advancedSettings = contentDocument.querySelector('#advanced-settings');
        const extendedSettingsText = contentDocument.querySelector('#ExtendedSettingsText');
        const hidden = !hasClass(advancedSettings, 'open');
        if (hidden) {
            addClass(advancedSettings, 'open');
            addClass(extendedSettingsText, 'active');
            iframeCtrl.resizeSliderMenuToAdvanced();
        } else {
            removeClass(advancedSettings, 'open');
            removeClass(extendedSettingsText, 'active');
            iframeCtrl.resizeSliderMenuToNormal();
        }
    };

    const showPreview = () => {
        const options = {
            isBlockByUrl: contentDocument.getElementById('block-by-url-checkbox').checked,
            isBlockSimilar: contentDocument.getElementById('block-similar-checkbox').checked,
            isBlockOneDomain: contentDocument.getElementById('one-domain-checkbox').checked,
        };

        iframeCtrl.showBlockPreview(
            selectedElement,
            getFilterRuleInputText(),
            startElement,
            options,
        );
    };

    const blockElement = () => {
        const path = getFilterRuleInputText();
        iframeCtrl.blockElement(path, addRule);
    };

    const handleShowBlockSettings = (showBlockByUrl, showBlockSimilar) => {
        const blockByUrlBlock = contentDocument.querySelector('#block-by-url-checkbox-block');
        const blockSimilarBlock = contentDocument.querySelector('#block-similar-checkbox-block');
        if (showBlockByUrl) {
            show(blockByUrlBlock);
        } else {
            contentDocument.getElementById('block-by-url-checkbox').checked = false;
            hide(blockByUrlBlock);
        }
        if (showBlockSimilar) {
            show(blockSimilarBlock);
        } else {
            contentDocument.getElementById('block-similar-checkbox').checked = false;
            hide(blockSimilarBlock);
        }
    };

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

    const haveUrlBlockParameter = (element) => {
        const value = getUrlBlockAttribute(element);
        return value && value !== '';
    };

    const haveClassAttribute = (element) => {
        const { className } = element;
        return className && typeof className === 'string' && className.trim() !== '';
    };

    const setFilterRuleInputText = (ruleText) => {
        contentDocument.getElementById('filter-rule').value = ruleText;
    };

    const onScopeChange = () => {
        const isBlockByUrl = contentDocument.getElementById('block-by-url-checkbox').checked;
        const isBlockSimilar = contentDocument.getElementById('block-similar-checkbox').checked;
        const isBlockOneDomain = contentDocument.getElementById('one-domain-checkbox').checked;

        handleShowBlockSettings(
            haveUrlBlockParameter(selectedElement) && !isBlockSimilar,
            haveClassAttribute(selectedElement) && !isBlockByUrl,
        );

        const options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: isBlockSimilar ? 'SIMILAR' : 'STRICT_FULL',
            isBlockOneDomain,
            url: document.location,
            ruleType: isBlockByUrl ? 'URL' : 'CSS',
        };

        const ruleText = adguardRulesConstructor.constructRuleText(selectedElement, options);
        setFilterRuleInputText(ruleText);
        iframeCtrl.resizeIframe();
    };

    const bindEvents = () => {
        const menuEvents = {
            '.close': close,
            '#ExtendedSettingsText': expandAdvanced,
            '#adg-cancel': iframeCtrl.showSelectorMenu,
            '#adg-preview': showPreview,
            '#adg-accept': blockElement,
            '#block-by-url-checkbox-block': onScopeChange,
            '#one-domain-checkbox-block': onScopeChange,
            '#block-similar-checkbox-block': onScopeChange,
        };
        Object.keys(menuEvents).forEach((item) => {
            const elems = contentDocument.querySelectorAll(item);
            toArray(elems).forEach((elem) => elem.addEventListener('click', menuEvents[item]));
        });
    };

    const makeDefaultCheckboxesForDetailedMenu = (options) => {
        contentDocument.getElementById('block-by-url-checkbox').checked = options && options.isBlockByUrl;
        contentDocument.getElementById('block-similar-checkbox').checked = options && options.isBlockSimilar;
        contentDocument.getElementById('one-domain-checkbox').checked = options && options.isBlockOneDomain;

        if (options && (options.isBlockByUrl || options.isBlockSimilar)) {
            handleShowBlockSettings(options.isBlockByUrl, options.isBlockSimilar);
        }
    };

    const onSliderMove = (element) => {
        selectedElement = element;
        selector.selectElement(element);

        makeDefaultCheckboxesForDetailedMenu();
        onScopeChange();
        handleShowBlockSettings(haveUrlBlockParameter(element), haveClassAttribute(element));
    };

    const createSlider = (setElement) => {
        const parents = getParentsLevel(selectedElement);
        const children = getAllChildren(selectedElement);

        const value = Math.abs(parents.length + 1);
        const max = parents.length + children.length + 1;

        const min = 1;
        const options = { value, min, max };
        const slider = contentDocument.querySelector('#slider');
        const sliderArea = contentDocument.querySelector('#slider-area');

        if (min === max) {
            // hide slider text
            hide(slider);
            hide(contentDocument.querySelectorAll('.element-rule_text'));
            expandAdvanced();
        }

        options.onSliderMove = (delta) => {
            let elem;
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

        let currentVal = options.value;

        // set slider position on current element after returning from preview mode
        if (setElement) {
            const setElementparents = getParentsLevel(setElement);
            currentVal = setElementparents.length + 1;
        }

        sliderWidget.init(slider, {
            min: options.min,
            max: options.max,
            value: currentVal,
            // eslint-disable-next-line no-shadow
            onValueChanged(value) {
                const delta = options.value - value;
                options.onSliderMove(delta);
            },
            sliderArea,
        });
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    // eslint-disable-next-line no-shadow
    const init = (iframe, options) => {
        selectedElement = options.element;
        startElement = selectedElement;
        // eslint-disable-next-line prefer-destructuring
        contentDocument = iframe.contentDocument;
        // eslint-disable-next-line prefer-destructuring
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
        events.add(contentDocument.getElementById('filter-rule'), 'contextmenu', (e) => {
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

    return {
        init,
    };
}

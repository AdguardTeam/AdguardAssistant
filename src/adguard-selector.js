/* eslint-disable no-param-reassign, func-names */
import {
    removeClass,
    hasClass,
    addStyle,
    hide,
    toArray,
    show,
} from './utils/dom-utils';
import protectedApi from './protectedApi';

/**
 * Adguard selector
 * @type {Function}
 */
function AdguardSelector(api = {}) {
    const PLACEHOLDER_PREFIX = 'adguard-placeholder';
    let placeholdedElements = null;
    let transparentPlaceholdedElement = null;

    let restrictedElements = null;

    const SELECTED_CLASS = 'adguard_sg_selected';
    const REJECTED_CLASS = 'adguard_sg_rejected';
    const IGNORED_CLASS = 'adguard_sg_ignore';

    let unbound = true;
    let onElementSelectedHandler = null;

    let ignoreTouchEvent = 0;

    let selectionRenderer;

    // PRIVATE METHODS

    const removeClassName = function (className) {
        const elem = document.querySelectorAll(`.${className}`);
        removeClass(elem, className);
    };

    const firstSelectedOrSuggestedParent = function (element) {
        if (hasClass(element, SELECTED_CLASS)) {
            return element;
        }

        // eslint-disable-next-line no-cond-assign, no-param-reassign
        while (element.parentNode && (element = element.parentNode)) {
            if (restrictedElements.indexOf(element) === -1) {
                if (hasClass(element, SELECTED_CLASS)) {
                    return element;
                }
            }
        }

        return null;
    };

    const px = function (p) {
        return `${p}px`;
    };

    const getTagPath = function (element) {
        if (element.parentNode) {
            return `${element.parentNode.tagName.toLowerCase()} ${element.tagName.toLowerCase()}`;
        }
        return element.tagName.toLowerCase();
    };

    /** ******** Events ************** */
    const sgMouseoverHandler = function (e) {
        e.stopPropagation();

        if (unbound) {
            return true;
        }

        if (this === document.documentElement || this === document.documentElement.parentNode) {
            return false;
        }

        const parent = firstSelectedOrSuggestedParent(this);
        if (parent !== null && parent !== this) {
            selectionRenderer.add(parent);
        } else {
            selectionRenderer.add(this);
        }

        return false;
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    const sgMousedownHandler = function (e) {
        if (e && e.isTrusted === false) {
            return false;
        }
        if (hasClass(e.target, IGNORED_CLASS)) {
            return false;
        }

        e.preventDefault();
        e.stopImmediatePropagation();
        if (unbound) {
            return true;
        }

        let elem = e.target;

        const borders = elem === selectionRenderer.borderTop
            || elem === selectionRenderer.borderLeft
            || elem === selectionRenderer.borderRight
            || elem === selectionRenderer.borderBottom;

        if (borders) {
            // Clicked on one of our floating borders, target the element that we are bordering.
            elem = elem.target_elem || elem;
        }

        if (elem === document.documentElement || elem === document.documentElement.parentNode) {
            return undefined;
        }

        selectionRenderer.remove();

        onElementSelectedHandler(elem);

        return false;
    };

    /** ******** Touch event handlers ************** */
    const touchElementSelectHandler = function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        sgMouseoverHandler.call(this, e);
        sgMousedownHandler.call(this, e);
    };

    const removeElementToPreventEvents = function () {
        if (!transparentPlaceholdedElement) {
            return false;
        }
        transparentPlaceholdedElement.removeEventListener('click', touchElementSelectHandler);
        transparentPlaceholdedElement.removeEventListener('touchstart', touchElementSelectHandler);
        transparentPlaceholdedElement.removeEventListener('pointerdown', touchElementSelectHandler);
        transparentPlaceholdedElement.parentNode.removeChild(transparentPlaceholdedElement);
        transparentPlaceholdedElement = null;
        return undefined;
    };

    const clearSelected = function () {
        removeElementToPreventEvents();
        removeClassName(SELECTED_CLASS);
        removeClassName(REJECTED_CLASS);

        selectionRenderer.remove();
    };

    /**
     * Returns element offset coordinates extended with width and height values.
     *
     * @param elem
     * @returns {{top: number, left: number, outerWidth: number, outerHeight: number}}
     */
    const getOffsetExtended = function (elem) {
        const bodyRect = document.documentElement.getBoundingClientRect();
        const elemRect = elem.getBoundingClientRect();

        const rectTop = elemRect.top - bodyRect.top;
        const rectLeft = elemRect.left - bodyRect.left;

        return {
            top: rectTop,
            left: rectLeft,
            outerWidth: elem.offsetWidth,
            outerHeight: elem.offsetHeight,
        };
    };

    /**
     * Adds borders to selected element.
     *
     * Default implementation of selection renderer.
     * Can be overwritten with custom implementation as a parameter of init function.
     *
     * @param element
     * @private
     */
    // eslint-disable-next-line no-shadow
    const BorderSelectionRenderer = (function (api) {
        const BORDER_WIDTH = 5;
        const BORDER_PADDING = 2;

        const BORDER_CSS = {
            position: 'absolute',
            background: 'white',
            margin: '0px',
            padding: '0px',
            display: 'block',
            float: 'none',
            border: '0',
            outline: '0',
            'background-color': '#13a35e',
            'font-style': 'normal',
            'vertical-align': 'baseline',
            'text-align': 'left',
            'line-height': '12px',
            'box-sizing': 'content-box',
            'min-height': 'auto',
            'max-height': 'auto',
            'min-width': 'auto',
            'max-width': 'auto',
            width: 0,
            height: 0,
            'z-index': 2147483646,
            'border-radius': 0,
        };

        const BORDER_BOTTOM_CSS = {
            'font-size': '10px',
            'font-weight': 'bold',
            color: 'white',
            padding: '2px 0px 2px 5px',
            overflow: 'hidden',
        };

        let borderTop = null;
        let borderLeft = null;
        let borderRight = null;
        let borderBottom = null;

        const showBorders = function () {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                show(borderTop);
                show(borderBottom);
                show(borderLeft);
                show(borderRight);
            }
        };

        const addBorderToDom = function () {
            document.documentElement.appendChild(borderTop);
            document.documentElement.appendChild(borderBottom);
            document.documentElement.appendChild(borderLeft);
            document.documentElement.appendChild(borderRight);
        };

        const addBorderCSS = function () {
            Object.keys(BORDER_CSS).forEach((item) => {
                borderTop.style[item] = BORDER_CSS[item];
                borderBottom.style[item] = BORDER_CSS[item];
                borderLeft.style[item] = BORDER_CSS[item];
                borderRight.style[item] = BORDER_CSS[item];
            });

            Object.keys(BORDER_BOTTOM_CSS).forEach((item) => {
                borderBottom.style[item] = BORDER_BOTTOM_CSS[item];
            });
        };

        const removeBorderFromDom = function () {
            if (borderTop) {
                const parent = borderTop.parentNode;

                if (parent) {
                    parent.removeChild(borderTop);
                    parent.removeChild(borderBottom);
                    parent.removeChild(borderLeft);
                    parent.removeChild(borderRight);
                }
            }

            borderTop = null;
            borderBottom = null;
            borderRight = null;
            borderLeft = null;
        };

        /**
         * Preparing renderer.
         */
        api.init = function () {
            if (!borderTop) {
                const width = px(BORDER_WIDTH);
                const bottomHeight = px(BORDER_WIDTH + 6);

                borderTop = protectedApi.createElement('div');
                borderBottom = protectedApi.createElement('div');
                borderLeft = protectedApi.createElement('div');
                borderRight = protectedApi.createElement('div');

                borderTop.addEventListener('click', sgMousedownHandler);
                borderBottom.addEventListener('click', sgMousedownHandler);
                borderLeft.addEventListener('click', sgMousedownHandler);
                borderRight.addEventListener('click', sgMousedownHandler);

                addStyle(borderTop, 'height', width);
                addStyle(borderBottom, 'height', bottomHeight);
                addStyle(borderLeft, 'width', width);
                addStyle(borderRight, 'width', width);

                hide(borderTop);
                hide(borderBottom);
                hide(borderLeft);
                hide(borderRight);

                // eslint-disable-next-line prefer-destructuring
                api.borderTop = borderTop;
                // eslint-disable-next-line prefer-destructuring
                api.borderBottom = borderBottom;
                // eslint-disable-next-line prefer-destructuring
                api.borderLeft = borderLeft;
                // eslint-disable-next-line prefer-destructuring
                api.borderRight = borderRight;

                addBorderCSS();
                addBorderToDom();
            }
        };

        /**
         * Clearing DOM and so on.
         */
        api.finalize = function () {
            removeBorderFromDom();
        };

        /**
         * Adds borders to specified element
         *
         * @param element
         */
        api.add = function (element) {
            api.remove();

            if (!element) {
                return;
            }

            const p = getOffsetExtended(element);
            const { top } = p;
            const { left } = p;
            const width = p.outerWidth;
            const height = p.outerHeight;

            addStyle(borderTop, 'width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH * 2));
            addStyle(borderTop, 'height', px(5));
            addStyle(borderTop, 'top', px(top - BORDER_WIDTH - BORDER_PADDING));
            addStyle(borderTop, 'left', px(left - BORDER_PADDING - BORDER_WIDTH));

            addStyle(borderBottom, 'width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH));
            addStyle(borderBottom, 'height', px(12));
            addStyle(borderBottom, 'top', px(top + height + BORDER_PADDING));
            addStyle(borderBottom, 'left', px(left - BORDER_PADDING - BORDER_WIDTH));

            addStyle(borderLeft, 'height', px(height + BORDER_PADDING * 2));
            addStyle(borderLeft, 'width', px(5));
            addStyle(borderLeft, 'top', px(top - BORDER_PADDING));
            addStyle(borderLeft, 'left', px(left - BORDER_PADDING - BORDER_WIDTH));

            addStyle(borderRight, 'height', px(height + BORDER_PADDING * 2));
            addStyle(borderRight, 'width', px(5));
            addStyle(borderRight, 'top', px(top - BORDER_PADDING));
            addStyle(borderRight, 'left', px(left + width + BORDER_PADDING));

            borderBottom.textContent = getTagPath(element);
            borderRight.target_elem = element;
            borderLeft.target_elem = element;
            borderTop.target_elem = element;
            borderBottom.target_elem = element;

            showBorders();
        };

        /**
         * Removes borders
         */
        api.remove = function () {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                hide(borderTop);
                hide(borderBottom);
                hide(borderLeft);
                hide(borderRight);
            }
        };

        return api;
        // eslint-disable-next-line no-use-before-define
    }(BorderSelectionRenderer || {}));

    const linkHelper = protectedApi.createElement('a');
    const getHost = function (url) {
        if (!url) {
            return '';
        }

        linkHelper.href = url;
        return linkHelper.hostname;
    };

    const makePlaceholderImage = function (element) {
        const placeHolder = protectedApi.createElement('div');
        const style = window.getComputedStyle(element);
        placeHolder.style.height = style.height;
        placeHolder.style.width = style.width;
        placeHolder.style.position = style.position;
        placeHolder.style.top = style.top;
        placeHolder.style.bottom = style.bottom;
        placeHolder.style.left = style.left;
        placeHolder.style.right = style.right;
        placeHolder.className += `${PLACEHOLDER_PREFIX} ${IGNORED_CLASS}`;

        const icon = protectedApi.createElement('div');
        icon.className += `${PLACEHOLDER_PREFIX}-icon ${IGNORED_CLASS}`;

        const domain = protectedApi.createElement('div');
        domain.textContent = getHost(element.src);
        domain.className += `${PLACEHOLDER_PREFIX}-domain ${IGNORED_CLASS}`;

        icon.appendChild(domain);
        placeHolder.appendChild(icon);

        return placeHolder;
    };

    const removePlaceholders = function () {
        removeElementToPreventEvents();
        if (!placeholdedElements) {
            return;
        }
        const elements = placeholdedElements;
        for (let i = 0; i < elements.length; i += 1) {
            const current = elements[i];
            const id = PLACEHOLDER_PREFIX + i;

            const placeHolder = document.querySelector(`#${id}`);
            if (placeHolder) {
                const parent = placeHolder.parentNode;
                if (parent) {
                    parent.replaceChild(current, placeHolder);
                }
            }
        }

        placeholdedElements = null;
    };

    const placeholderClick = function (element) {
        selectionRenderer.remove();
        removePlaceholders();

        onElementSelectedHandler(element);
    };

    /**
     * Making top level transparent layer to prevented events on emerging ad.
     * see: https://github.com/AdguardTeam/AdguardAssistant/issues/220
     *
     * @param element element where ad is added
     */
    const preventEvents = function (element) {
        const placeHolder = protectedApi.createElement('div');
        const style = getOffsetExtended(element);
        placeHolder.style.height = px(style.outerHeight);
        placeHolder.style.width = px(style.outerWidth);
        placeHolder.style.top = px(style.top);
        placeHolder.style.left = px(style.left);
        placeHolder.style.background = 'transparent';
        placeHolder.style.position = 'absolute';
        placeHolder.style['pointer-events'] = 'all';
        placeHolder.style['box-sizing'] = 'content-box';
        placeHolder.style['z-index'] = '2147483646';
        placeHolder.className += IGNORED_CLASS;
        transparentPlaceholdedElement = placeHolder;
        placeHolder.addEventListener('click', touchElementSelectHandler);
        placeHolder.addEventListener('touchstart', touchElementSelectHandler);
        placeHolder.addEventListener('pointerdown', touchElementSelectHandler);
        document.documentElement.appendChild(placeHolder);
    };

    const gestureEndHandler = function () {
        ignoreTouchEvent = 2;
        return true;
    };

    const touchMoveHandler = function () {
        ignoreTouchEvent = 1;
        return true;
    };

    const needIgnoreTouchEvent = function () {
        if (ignoreTouchEvent > 0) {
            ignoreTouchEvent -= 1;
            return true;
        }

        return false;
    };

    const makeIFrameAndEmbeddedSelector = function () {
        placeholdedElements = document.querySelectorAll(`iframe:not(.${IGNORED_CLASS}),embed,object`);
        toArray(placeholdedElements)
            .filter((elem) => {
                const isVisible = elem.style.display !== 'none';
                const isHaveSize = elem.offsetWidth !== 0 && elem.offsetHeight !== 0;
                return isVisible && isHaveSize;
            });

        const elements = placeholdedElements;
        for (let i = 0; i < elements.length; i += 1) {
            const current = elements[i];
            // eslint-disable-next-line no-shadow
            (function (current) {
                const placeHolder = makePlaceholderImage(current);
                const id = PLACEHOLDER_PREFIX + i;

                placeHolder.setAttribute('id', id);

                const parent = current.parentNode;
                if (parent) {
                    parent.replaceChild(placeHolder, current);

                    placeHolder.addEventListener('gestureend', gestureEndHandler);
                    placeHolder.addEventListener('touchmove', touchMoveHandler);
                    // eslint-disable-next-line consistent-return
                    placeHolder.addEventListener('touchend', (e) => {
                        e.preventDefault();
                        if (needIgnoreTouchEvent()) {
                            return true;
                        }
                        placeholderClick(current);
                    });

                    const elems = document.querySelectorAll(`#${id}`);
                    toArray(elems).forEach((elem) => {
                        elem.addEventListener('click', (e) => {
                            e.preventDefault();
                            placeholderClick(current);
                        });
                    });
                }
            }(current));
        }
    };

    const sgMouseoutHandler = function () {
        if (unbound) {
            return true;
        }

        if (this === document.documentElement || this === document.documentElement.parentNode) {
            return false;
        }

        selectionRenderer.remove();
        return false;
    };

    const elementTouchendHandler = function (e) {
        if (hasClass(e.target, IGNORED_CLASS)) {
            return false;
        }

        e.stopPropagation();

        if (needIgnoreTouchEvent()) {
            return true;
        }

        touchElementSelectHandler.call(this, e);
        return false;
    };

    const emptyEventHandler = function (e) {
        e.stopPropagation();

        return false;
    };

    const setupEventHandlers = function () {
        makeIFrameAndEmbeddedSelector();
        const elements = document.querySelectorAll(`body *:not(.${IGNORED_CLASS})`);
        toArray(elements).forEach((el) => {
            el.addEventListener('gestureend', gestureEndHandler);
            el.addEventListener('touchmove', touchMoveHandler);
            el.addEventListener('touchend', elementTouchendHandler, true);
            el.addEventListener('touchstart', emptyEventHandler);
            el.addEventListener('mouseover', sgMouseoverHandler);
            el.addEventListener('mouseout', sgMouseoutHandler);
            el.addEventListener('click', sgMousedownHandler, true);
        });
    };

    const deleteEventHandlers = function () {
        removePlaceholders();

        const elements = document.querySelectorAll('body *');
        toArray(elements).forEach((el) => {
            el.removeEventListener('gestureend', gestureEndHandler);
            el.removeEventListener('touchmove', touchMoveHandler);
            el.removeEventListener('touchend', elementTouchendHandler, true);
            el.removeEventListener('touchstart', emptyEventHandler);
            el.removeEventListener('mouseover', sgMouseoverHandler);
            el.removeEventListener('mouseout', sgMouseoutHandler);
            el.removeEventListener('click', sgMousedownHandler, true);
        });
    };

    // Define default implementation of selection renderer.
    selectionRenderer = BorderSelectionRenderer;

    // PUBLIC API

    /**
     * Starts selector module.
     *
     * @param onElementSelected callback function
     * @param selectionRenderImpl optional object contains selection presentation implementation
     */
    api.init = function (onElementSelected, selectionRenderImpl) {
        onElementSelectedHandler = onElementSelected;
        if (selectionRenderImpl && typeof selectionRenderImpl === 'object') {
            selectionRenderer = selectionRenderImpl;
        }

        restrictedElements = ['html', 'body', 'head', 'base']
            .map((selector) => document.querySelector(selector));

        selectionRenderer.init();
        setupEventHandlers();
        unbound = false;
    };

    /**
     * Resets state of selector.
     * Clears current selection.
     */
    api.reset = function () {
        clearSelected();
    };

    /**
     * Destroys selector module.
     * Removes all selector elements and unbinds event handlers.
     */
    api.close = function () {
        unbound = true;

        selectionRenderer.finalize();
        deleteEventHandlers();
    };

    /**
     * Selects specified element.
     * Marks element as selected and holds selection on it.
     *
     * @param element
     */
    api.selectElement = function (element) {
        selectionRenderer.add(element);
        removePlaceholders();
        unbound = true;
        preventEvents(element);
    };

    /**
     Returns css class name.
     If this class assigns to HTML element, then Adguard Selector ignores it.
     */
    // eslint-disable-next-line func-names
    api.ignoreClassName = function () {
        return IGNORED_CLASS;
    };

    return api;
}

const selector = new AdguardSelector();

export default selector;

/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/**
 *
 * TODO: make class
 * TODO: lint
 * Adguard selector library
 * @type {Function}
 */
const AdguardSelectorLib = (function (api, $, protectedApi) {
    // PRIVATE FIELDS

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
        $(`.${className}`).removeClass(className);
    };

    const firstSelectedOrSuggestedParent = function (element) {
        if ($(element).hasClass(SELECTED_CLASS)) {
            return element;
        }

        // eslint-disable-next-line no-cond-assign, no-param-reassign
        while (element.parentNode && (element = element.parentNode)) {
            if (restrictedElements.indexOf(element) === -1) {
                if ($(element).hasClass(SELECTED_CLASS)) {
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
        if (e && e.isTrusted === false) return false;
        if ($(e.target).hasClass(IGNORED_CLASS)) return false;
        e.preventDefault();
        e.stopImmediatePropagation();
        if (unbound) {
            return true;
        }

        let elem = e.target;

        const borders = elem === selectionRenderer.borderTop[0]
            || elem === selectionRenderer.borderLeft[0]
            || elem === selectionRenderer.borderRight[0]
            || elem === selectionRenderer.borderBottom[0];

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
        $(transparentPlaceholdedElement).off('click touchstart pointerdown', touchElementSelectHandler);
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
                borderTop.show();
                borderBottom.show();
                borderLeft.show();
                borderRight.show();
            }
        };

        const addBorderToDom = function () {
            document.documentElement.appendChild(borderTop.get(0));
            document.documentElement.appendChild(borderBottom.get(0));
            document.documentElement.appendChild(borderLeft.get(0));
            document.documentElement.appendChild(borderRight.get(0));
        };

        const addBorderCSS = function () {
            Object.keys(BORDER_CSS).forEach((item) => {
                borderTop[0].style[item] = BORDER_CSS[item];
                borderBottom[0].style[item] = BORDER_CSS[item];
                borderLeft[0].style[item] = BORDER_CSS[item];
                borderRight[0].style[item] = BORDER_CSS[item];
            });

            Object.keys(BORDER_BOTTOM_CSS).forEach((item) => {
                borderBottom[0].style[item] = BORDER_BOTTOM_CSS[item];
            });
        };

        const removeBorderFromDom = function () {
            if (borderTop && borderTop.get(0)) {
                const parent = borderTop.get(0).parentNode;

                if (parent) {
                    parent.removeChild(borderTop.get(0));
                    parent.removeChild(borderBottom.get(0));
                    parent.removeChild(borderLeft.get(0));
                    parent.removeChild(borderRight.get(0));
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

                borderTop = $(protectedApi.createElement('div'))
                    .css('height', width)
                    .hide()
                    .on('click', sgMousedownHandler);
                borderBottom = $(protectedApi.createElement('div'))
                    .css('height', bottomHeight)
                    .hide()
                    .on('click', sgMousedownHandler);
                borderLeft = $(protectedApi.createElement('div'))
                    .css('width', width)
                    .hide()
                    .on('click', sgMousedownHandler);
                borderRight = $(protectedApi.createElement('div'))
                    .css('width', width)
                    .hide()
                    .on('click', sgMousedownHandler);

                // eslint-disable-next-line prefer-destructuring
                api.borderTop = borderTop[0];
                // eslint-disable-next-line prefer-destructuring
                api.borderBottom = borderBottom[0];
                // eslint-disable-next-line prefer-destructuring
                api.borderLeft = borderLeft[0];
                // eslint-disable-next-line prefer-destructuring
                api.borderRight = borderRight[0];

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

            borderTop.css('width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH * 2))
                .css('height', px(5))
                .css('top', px(top - BORDER_WIDTH - BORDER_PADDING))
                .css('left', px(left - BORDER_PADDING - BORDER_WIDTH));

            borderBottom.css('width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH))
                .css('height', px(12))
                .css('top', px(top + height + BORDER_PADDING))
                .css('left', px(left - BORDER_PADDING - BORDER_WIDTH));

            borderLeft.css('height', px(height + BORDER_PADDING * 2))
                .css('width', px(5))
                .css('top', px(top - BORDER_PADDING))
                .css('left', px(left - BORDER_PADDING - BORDER_WIDTH));

            borderRight.css('height', px(height + BORDER_PADDING * 2))
                .css('width', px(5))
                .css('top', px(top - BORDER_PADDING))
                .css('left', px(left + width + BORDER_PADDING));

            borderBottom.get(0).textContent = getTagPath(element);
            borderRight.get(0).target_elem = element;
            borderLeft.get(0).target_elem = element;
            borderTop.get(0).target_elem = element;
            borderBottom.get(0).target_elem = element;

            showBorders();
        };

        /**
         * Removes borders
         */
        api.remove = function () {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                borderTop.hide();
                borderBottom.hide();
                borderLeft.hide();
                borderRight.hide();
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

            const placeHolder = $(`#${id}`).get(0);
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
        $(placeHolder).on('click touchstart pointerdown', touchElementSelectHandler);
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
        placeholdedElements = $(`iframe:not(.${IGNORED_CLASS}),embed,object`).filter((elem) => {
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

                    $(placeHolder).on('gestureend', gestureEndHandler);
                    $(placeHolder).on('touchmove', touchMoveHandler);
                    // eslint-disable-next-line consistent-return
                    $(placeHolder).on('touchend', (e) => {
                        e.preventDefault();

                        if (needIgnoreTouchEvent()) {
                            return true;
                        }

                        placeholderClick(current);
                    });

                    $(`#${id}`).on('click', (e) => {
                        e.preventDefault();

                        placeholderClick(current);
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
        if ($(e.target).hasClass(IGNORED_CLASS)) return false;

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
        const elements = $(`body *:not(.${IGNORED_CLASS})`);

        elements.forEach((el) => {
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

        const elements = $('body *');
        elements.forEach((el) => {
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
            .map(selector => $(selector).get(0));

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
});

export default AdguardSelectorLib;

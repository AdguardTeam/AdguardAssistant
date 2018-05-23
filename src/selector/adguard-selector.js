/**
 * Adguard selector library
 * @type {Function}
 */
var AdguardSelectorLib = (function(api, $, protectedApi) {
    // PRIVATE FIELDS
console.log(protectedApi);
    var PLACEHOLDER_PREFIX = 'adguard-placeholder';
    var placeholdedElements = null;
    var transparentPlaceholdedElement = null;

    var restrictedElements = null;

    var SELECTED_CLASS = 'adguard_sg_selected';
    var REJECTED_CLASS = 'adguard_sg_rejected';
    var IGNORED_CLASS = 'adguard_sg_ignore';

    var selectedElements = [];
    var rejectedElements = [];

    var selectMode = 'exact';
    var unbound = true;
    var onElementSelectedHandler = null;

    var ignoreTouchEvent = 0;

    var selectionRenderer;

    // PRIVATE METHODS

    var removeClassName = function(className) {
        $('.' + className).removeClass(className);
    };

    var firstSelectedOrSuggestedParent = function(element) {
        if ($(element).hasClass(SELECTED_CLASS)) {
            return element;
        }

        while (element.parentNode && (element = element.parentNode)) {
            if (restrictedElements.indexOf(element) == -1) {
                if ($(element).hasClass(SELECTED_CLASS)) {
                    return element;
                }
            }
        }

        return null;
    };

    var px = function(p) {
        return p + 'px';
    };

    var getTagPath = function(element) {
        if (element.parentNode) {
            return element.parentNode.tagName.toLowerCase() + ' ' + element.tagName.toLowerCase();
        } else {
            return element.tagName.toLowerCase();
        }
    };

    var clearSelected = function() {
        removeElementToPreventEvents();
        selectedElements = [];
        rejectedElements = [];

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
    var getOffsetExtended = function(elem) {
        var bodyRect = document.documentElement.getBoundingClientRect();
        var elemRect = elem.getBoundingClientRect();

        var rectTop = elemRect.top - bodyRect.top;
        var rectLeft = elemRect.left - bodyRect.left;

        return {
            top: rectTop,
            left: rectLeft,
            outerWidth: elem.offsetWidth,
            outerHeight: elem.offsetHeight
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
    var BorderSelectionRenderer = (function(api) {
        var BORDER_WIDTH = 5;
        var BORDER_PADDING = 2;

        var BORDER_CSS = {
            'position': 'absolute',
            'background': 'white',
            'margin': '0px',
            'padding': '0px',
            'display': 'block',
            'float': 'none',
            'border': '0',
            'outline': '0',
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
            'width': 0,
            'height': 0,
            'z-index': 2147483645,
            'border-radius': 0
        };

        var BORDER_BOTTOM_CSS = {
            'font-size': '10px',
            'font-weight': 'bold',
            'color': 'white',
            'padding': '2px 0px 2px 5px',
            'overflow': 'hidden',
        };

        var borderTop = null;
        var borderLeft = null;
        var borderRight = null;
        var borderBottom = null;

        var showBorders = function() {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                borderTop.show();
                borderBottom.show();
                borderLeft.show();
                borderRight.show();
            }
        };

        var addBorderToDom = function() {
            document.documentElement.appendChild(borderTop.get(0));
            document.documentElement.appendChild(borderBottom.get(0));
            document.documentElement.appendChild(borderLeft.get(0));
            document.documentElement.appendChild(borderRight.get(0));
        };

        var addBorderCSS = function() {
            Object.keys(BORDER_CSS).forEach(function (item) {
                borderTop[0].style[item] = BORDER_CSS[item];
                borderBottom[0].style[item] = BORDER_CSS[item];
                borderLeft[0].style[item] = BORDER_CSS[item];
                borderRight[0].style[item] = BORDER_CSS[item];
            });

            Object.keys(BORDER_BOTTOM_CSS).forEach(function (item) {
                borderBottom[0].style[item] = BORDER_BOTTOM_CSS[item];
            });
        };

        var removeBorderFromDom = function() {
            if (borderTop && borderTop.get(0)) {
                var parent = borderTop.get(0).parentNode;

                if (parent) {
                    parent.removeChild(borderTop.get(0));
                    parent.removeChild(borderBottom.get(0));
                    parent.removeChild(borderLeft.get(0));
                    parent.removeChild(borderRight.get(0));
                }
            }

            borderTop = borderBottom = borderRight = borderLeft = null;
        };

        /**
         * Preparing renderer.
         */
        api.init = function() {
            if (!borderTop) {
                var width = px(BORDER_WIDTH);
                var bottomHeight = px(BORDER_WIDTH + 6);

                borderTop = $(protectedApi.createElement('div')).css('height', width).hide().on('click', sgMousedownHandler);
                borderBottom = $(protectedApi.createElement('div')).css('height', bottomHeight).hide().on('click', sgMousedownHandler);
                borderLeft = $(protectedApi.createElement('div')).css('width', width).hide().on('click', sgMousedownHandler);
                borderRight = $(protectedApi.createElement('div')).css('width', width).hide().on('click', sgMousedownHandler);

                api.borderTop = borderTop[0];
                api.borderBottom = borderBottom[0];
                api.borderLeft = borderLeft[0];
                api.borderRight = borderRight[0];

                addBorderCSS();
                addBorderToDom();
            }
        };

        /**
         * Clearing DOM and so on.
         */
        api.finalize = function() {
            removeBorderFromDom();
        };

        /**
         * Adds borders to specified element
         *
         * @param element
         */
        api.add = function(element) {
            api.remove();

            if (!element) {
                return;
            }

            var p = getOffsetExtended(element);

            var top = p.top;
            var left = p.left;
            var width = p.outerWidth;
            var height = p.outerHeight;

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
            borderRight.get(0).target_elem = borderLeft.get(0).target_elem = borderTop.get(0).target_elem = borderBottom.get(0).target_elem = element;

            showBorders();
        };

        /**
         * Removes borders
         */
        api.remove = function() {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                borderTop.hide();
                borderBottom.hide();
                borderLeft.hide();
                borderRight.hide();
            }
        };

        return api;
    })(BorderSelectionRenderer || {});

    var linkHelper = protectedApi.createElement('a');
    var getHost = function(url) {
        if (!url) {
            return '';
        }

        linkHelper.href = url;
        return linkHelper.hostname;
    };

    var makePlaceholderImage = function(element) {
        var placeHolder = protectedApi.createElement('div');
        var style = window.getComputedStyle(element);
        placeHolder.style.height = style.height;
        placeHolder.style.width = style.width;
        placeHolder.style.position = style.position;
        placeHolder.style.top = style.top;
        placeHolder.style.bottom = style.bottom;
        placeHolder.style.left = style.left;
        placeHolder.style.right = style.right;
        placeHolder.className += PLACEHOLDER_PREFIX + ' ' + IGNORED_CLASS;

        var icon = protectedApi.createElement('div');
        icon.className += PLACEHOLDER_PREFIX + '-icon ' + IGNORED_CLASS;

        var domain = protectedApi.createElement('div');
        domain.textContent = getHost(element.src);
        domain.className += PLACEHOLDER_PREFIX + '-domain ' + IGNORED_CLASS;

        icon.appendChild(domain);
        placeHolder.appendChild(icon);

        return placeHolder;
    };

    var removePlaceholders = function() {
        removeElementToPreventEvents();
        if (!placeholdedElements) {
            return;
        }
        var elements = placeholdedElements;
        for (var i = 0; i < elements.length; i++) {
            var current = elements[i];
            var id = PLACEHOLDER_PREFIX + i;

            var placeHolder = $('#' + id).get(0);
            if (placeHolder) {
                var parent = placeHolder.parentNode;
                if (parent) {
                    parent.replaceChild(current, placeHolder);
                }
            }
        }

        placeholdedElements = null;
    };

    var placeholderClick = function(element) {
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
    var preventEvents = function(element) {
        var placeHolder = protectedApi.createElement('div');
        var style = getOffsetExtended(element);
        placeHolder.style.height = px(style.outerHeight);
        placeHolder.style.width = px(style.outerWidth);
        placeHolder.style.top = px(style.top);
        placeHolder.style.left = px(style.left);
        placeHolder.style.background = 'transparent';
        placeHolder.style.position = 'absolute';
        placeHolder.style['pointer-events'] = 'all';
        placeHolder.style['box-sizing'] = 'content-box';
        placeHolder.style['z-index'] = '99999999999999999999';
        placeHolder.className += IGNORED_CLASS;
        transparentPlaceholdedElement = placeHolder;
        $(placeHolder).on('click touchstart pointerdown', touchElementSelectHandler);
        document.documentElement.appendChild(placeHolder);
    };

    var removeElementToPreventEvents = function() {
        if (!transparentPlaceholdedElement) {
            return false;
        }
        $(transparentPlaceholdedElement).off('click touchstart pointerdown', touchElementSelectHandler);
        transparentPlaceholdedElement.parentNode.removeChild(transparentPlaceholdedElement);
        transparentPlaceholdedElement = null;
    };

    var makeIFrameAndEmbeddedSelector = function() {
        placeholdedElements = $('iframe:not(.' + IGNORED_CLASS + '),embed,object').filter(function(elem) {
            var isVisible = elem.style.display != 'none';
            var isHaveSize = elem.offsetWidth != 0 && elem.offsetHeight != 0;
            return isVisible && isHaveSize;
        });

        var elements = placeholdedElements;
        for (var i = 0; i < elements.length; i++) {
            var current = elements[i];
            (function(current) {
                var placeHolder = makePlaceholderImage(current);
                var id = PLACEHOLDER_PREFIX + i;

                placeHolder.setAttribute('id', id);

                var parent = current.parentNode;
                if (parent) {
                    parent.replaceChild(placeHolder, current);

                    $(placeHolder).on('gestureend', gestureEndHandler);
                    $(placeHolder).on('touchmove', touchMoveHandler);
                    $(placeHolder).on('touchend', function(e) {
                        e.preventDefault();

                        if (needIgnoreTouchEvent()) {
                            return true;
                        }

                        placeholderClick(current);
                    });

                    $('#' + id).on('click', function(e) {
                        e.preventDefault();

                        placeholderClick(current);
                    });

                }

            })(current);
        }
    };

    /********** Events ***************/
    var sgMouseoverHandler = function(e) {
        e.stopPropagation();

        if (unbound) {
            return true;
        }

        if (this == document.documentElement || this == document.documentElement.parentNode) {
            return false;
        }

        var parent = firstSelectedOrSuggestedParent(this);
        if (parent != null && parent != this) {
            selectionRenderer.add(parent);
        } else {
            selectionRenderer.add(this);
        }

        return false;
    };

    var sgMouseoutHandler = function() {
        if (unbound) {
            return true;
        }

        if (this == document.documentElement || this == document.documentElement.parentNode) {
            return false;
        }

        selectionRenderer.remove();
        return false;
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    var sgMousedownHandler = function(e) {
        if (e && e.isTrusted === false) return false;
        if ($(e.target).hasClass(IGNORED_CLASS)) return false;
        e.preventDefault();
        e.stopImmediatePropagation();
        if (unbound) {
            return true;
        }

        var elem = e.target;

        var borders =
            elem == selectionRenderer.borderTop[0] ||
            elem == selectionRenderer.borderLeft[0] ||
            elem == selectionRenderer.borderRight[0] ||
            elem == selectionRenderer.borderBottom[0];

        if (borders) {
            //Clicked on one of our floating borders, target the element that we are bordering.
            elem = elem.target_elem || elem;
        }

        if (elem == document.documentElement || elem == document.documentElement.parentNode) {
            return;
        }

        selectionRenderer.remove();

        onElementSelectedHandler(elem);

        return false;
    };

    /********** Touch event handlers ***************/
    var touchElementSelectHandler = function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        sgMouseoverHandler.call(this, e);
        sgMousedownHandler.call(this, e);
    };

    var needIgnoreTouchEvent = function() {

        if (ignoreTouchEvent > 0) {

            ignoreTouchEvent--;
            return true;
        }

        return false;
    };

    var elementTouchendHandler = function(e) {
        if($(e.target).hasClass(IGNORED_CLASS)) return false;

        e.stopPropagation();

        if (needIgnoreTouchEvent()) {
            return true;
        }

        touchElementSelectHandler.call(this, e);
        return false;
    };

    var emptyEventHandler = function(e) {
        e.stopPropagation();

        return false;
    };

    var gestureEndHandler = function() {
        ignoreTouchEvent = 2;
        return true;
    };

    var touchMoveHandler = function() {
        ignoreTouchEvent = 1;
        return true;
    };


    var setupEventHandlers = function() {
        makeIFrameAndEmbeddedSelector();
        var elements = $('body *:not(.' + IGNORED_CLASS + ')');

        elements.forEach(function(el) {
            el.addEventListener('gestureend', gestureEndHandler);
            el.addEventListener('touchmove', touchMoveHandler);
            el.addEventListener('touchend', elementTouchendHandler, true);
            el.addEventListener('touchstart', emptyEventHandler);
            el.addEventListener('mouseover', sgMouseoverHandler);
            el.addEventListener('mouseout', sgMouseoutHandler);
            el.addEventListener('click', sgMousedownHandler, true);
        });
    };

    var deleteEventHandlers = function() {
        removePlaceholders();

        var elements = $('body *');
        elements.forEach(function(el) {
            el.removeEventListener('gestureend', gestureEndHandler);
            el.removeEventListener('touchmove', touchMoveHandler);
            el.removeEventListener('touchend', elementTouchendHandler, true);
            el.removeEventListener('touchstart', emptyEventHandler);
            el.removeEventListener('mouseover', sgMouseoverHandler);
            el.removeEventListener('mouseout', sgMouseoutHandler);
            el.removeEventListener('click', sgMousedownHandler, true);
        });
    };

    //Define default implementation of selection renderer.
    selectionRenderer = BorderSelectionRenderer;

    // PUBLIC API

    /**
     * Starts selector module.
     *
     * @param onElementSelected callback function
     * @param selectionRenderImpl optional object contains selection presentation implementation
     */
    api.init = function(onElementSelected, selectionRenderImpl) {

        onElementSelectedHandler = onElementSelected;
        if (selectionRenderImpl && typeof selectionRenderImpl === 'object') {
            selectionRenderer = selectionRenderImpl;
        }

        restrictedElements = ['html', 'body', 'head', 'base'].map(function(selector) {
            return $(selector).get(0);
        });

        selectionRenderer.init();
        setupEventHandlers();
        unbound = false;
    };

    /**
     * Resets state of selector.
     * Clears current selection.
     */
    api.reset = function() {
        clearSelected();
    };

    /**
     * Destroys selector module.
     * Removes all selector elements and unbinds event handlers.
     */
    api.close = function() {
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
    api.selectElement = function(element) {
        selectionRenderer.add(element);
        removePlaceholders();
        unbound = true;
        preventEvents(element);
    };

    /**
     Returns css class name.
     If this class assigns to HTML element, then Adguard Selector ignores it.
     */
    api.ignoreClassName = function() {
        return IGNORED_CLASS;
    };

    return api;

});

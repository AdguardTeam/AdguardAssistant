/**
 * UI utils
 * @param $
 * @returns {{makeElementDraggable: Function, makeIframeDraggable: Function}}
 * @constructor
 */
var UIUtils = function($, protectedApi) { // jshint ignore:line
    var elWidth, elHeight, windowWidth, windowHeight;

    /**
     * Make element draggable
     * @param element
     * @param onDragEnd
     * @param onClick
     */
    var makeElementDraggable = function(element, onDragEnd, onClick) {
        var coords, shiftX, shiftY;

        var moveAt = function(e) {
            var position = {
                x: getOriginalEvent(e).pageX - shiftX,
                y: getOriginalEvent(e).pageY - shiftY
            };

            // disable mousemove if button element outside the screen
            var out = outsidePosition.top(position) ||
                outsidePosition.left(position) ||
                outsidePosition.bottom(position) ||
                outsidePosition.right(position);

            if (out) {
                onMouseUp(e, true);
            } else {
                moveElementTo(element, position.x, position.y);
            }
        };

        var onMouseMove = function(e) {
            pauseEvent(e);
            moveAt(e);
        };

        var getCoords = function(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top,
                left: box.left,
                bottom: box.bottom,
                right: box.right
            };
        };

        /**
         * Prevent text selection
         * With cursor drag
         */
        var pauseEvent = function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;

            return false;
        };

        var preventedEvent = function(e) {
            e.preventDefault();
        };

        var mouseDown = function(e) {
            pauseEvent(e);

            // prevent browser scroll
            CommonUtils.events.add(document.documentElement, 'wheel mousewheel', preventedEvent);

            // prevent right button mousedown
            if (e.button > 0) return;

            elWidth = element.clientWidth;
            elHeight = element.clientWidth;

            windowWidth = getWindowSize().width;
            windowHeight = getWindowSize().height;

            coords = getCoords(element);

            if (storedAnchor.top) {
                shiftY = getOriginalEvent(e).pageY - coords.top;
            } else {
                shiftY = windowHeight - (coords.bottom - getOriginalEvent(e).pageY);
            }

            if (storedAnchor.left) {
                shiftX = getOriginalEvent(e).pageX - coords.left;
            } else {
                shiftX = windowWidth - (coords.right - getOriginalEvent(e).pageX);
            }

            /**
             * binding both mouse and touch/pointer events simultaneously
             * see: http://www.html5rocks.com/en/mobile/touchandmouse/
             */
            CommonUtils.events.add(document.documentElement, 'mouseup touchend pointerup', onMouseUp);
            CommonUtils.events.add(document.documentElement, 'mousemove touchmove pointermove', onMouseMove);
        };

        /**
         * On mouse up event
         * @param {Object} e  event object
         * @param {Boolean|undefined} doNotOpenIframe  do not open the iframe if true. This is necessary when the cursor is out of bounds
         */
        var onMouseUp = function(e, doNotOpenIframe) {
            e.stopPropagation();

            // make scroll availalbe
            CommonUtils.events.remove(document.documentElement, 'wheel mousewheel', preventedEvent);

            // When a user finishes dragging icon, we set icon anchor
            // depending on the icon position, i.e. which quarter
            // of the screen it belongs.
            var lastX, lastY, lastCoords = getCoords(element);

            var topHalf = lastCoords.top < windowHeight / 2;
            var leftHalf = lastCoords.left < windowWidth / 2;

            setAnchorPosition.positionY(element, topHalf);
            setAnchorPosition.positionX(element, leftHalf);

            if (topHalf) {
                lastY = lastCoords.top;
            } else {
                lastY = lastCoords.bottom - windowHeight;
            }

            if (leftHalf) {
                lastX = lastCoords.left;
            } else {
                lastX = lastCoords.right - windowWidth;
            }

            moveElementTo(element, lastX, lastY);

            // Open the frame if the button has been shifted by no more than 5 pixels
            if (Math.abs(coords.left - lastCoords.left) > 5 || Math.abs(coords.top - lastCoords.top) > 5) {
                if (onDragEnd) {
                    var store = {
                        "x": lastX,
                        "y": lastY,
                        "storedAnchor": storedAnchor
                    };
                    onDragEnd(store);
                }
            } else {
                if (onClick && !doNotOpenIframe) {
                    onClick(e);
                }
            }

            CommonUtils.events.remove(document.documentElement, 'mouseup touchend pointerup', onMouseUp);
            CommonUtils.events.remove(document.documentElement, 'mousemove touchmove pointermove', onMouseMove);
        };

        CommonUtils.events.add(element, 'mousedown touchstart', protectedApi.functionBind.call(mouseDown, this));
        CommonUtils.events.add(element, 'dragstart', function() {return;});
    };

    var outsidePosition = {
        top: function(pos) {
            return storedAnchor.top && (pos.y + elHeight > windowHeight || pos.y < 0);
        },
        bottom: function(pos) {
            return !storedAnchor.top && (Math.abs(pos.y) + elHeight > windowHeight || pos.y > 0);
        },
        left: function(pos) {
            return storedAnchor.left && (pos.x + elWidth > windowWidth || pos.x < 0);
        },
        right: function(pos) {
            return !storedAnchor.left && (Math.abs(pos.x) + elWidth > windowWidth || pos.x > 0);
        }
    };

    /**
     * Makes iframe draggable
     *
     * @param iframe
     * @param handleElement
     */
    var makeIframeDraggable = function(iframe, handleElement) {
        var iframeDoc = iframe.contentDocument;

        var offset = Object.create(null);

        /**
         * Function that does actual "dragging"
         *
         * @param x
         * @param y
         */
        var drag = function(x, y) {
            iframe.style.left = x + 'px';
            iframe.style.top = y + 'px';
        };

        var cancelIFrameSelection = function(e) {
            e.preventDefault();
            e.stopPropagation();
        };

        var onMouseMove = function(e) {
            var eventPosition = getOriginalEvent(e);
            drag(eventPosition.screenX + offset.x, eventPosition.screenY + offset.y);
        };

        var onMouseDown = function(e) {
            var eventPosition = getOriginalEvent(e);
            var rect = iframe.getBoundingClientRect();

            offset.x = rect.left + handleElement.offsetLeft - eventPosition.screenX;
            offset.y = rect.top + handleElement.offsetTop - eventPosition.screenY;

            CommonUtils.events.add(iframeDoc, 'mousemove touchmove pointermove', onMouseMove);
            CommonUtils.events.add(iframeDoc, 'selectstart', cancelIFrameSelection);
        };

        var onMouseUp = function() {
            CommonUtils.events.remove(iframeDoc, 'mousemove touchmove pointermove', onMouseMove);
            CommonUtils.events.remove(iframeDoc, 'selectstart', cancelIFrameSelection);
        };

        // prevent iframe dragging while browser tabs is switching
        document.addEventListener('visibilitychange', onMouseUp);

        CommonUtils.events.add(handleElement, 'mousedown touchstart', onMouseDown);
        CommonUtils.events.add(iframeDoc, 'mouseup touchend pointerup', onMouseUp);
        CommonUtils.events.add(iframeDoc, 'contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    };

    /**
     * Set transition css property for drag
     * translate3d is for better rendering performance
     * see: https://www.html5rocks.com/en/tutorials/speed/layers/
     */
    var moveElementTo = function(el, x, y) {
        var transform = 'translate3d(' + x + 'px,' + y + 'px, 0px)';
        el.style.webkitTransform = transform;
        el.style.mozTransform = transform;
        el.style.msTransform = transform;
        el.style.oTransform = transform;
        el.style.transform = transform;
    };

    /**
     * Get original event object for touch
     * devices to getting current coordinates
     * @param {Object}
     * @return {Object}
     */
    var getOriginalEvent = function(e) {
        return e.targetTouches ? e.targetTouches[0] : e;
    };

    /**
     * Functions for saving left/top anchors and setting class position
     *
     * @param {Object} element  button element
     * @param {Boolean} anchor  anchors positions `true` for top/left or `false` for bottom/right
     */
    var setAnchorPosition = {
        positionY: function(element, anchor) {
            storedAnchor.top = anchor;

            if (storedAnchor.top) {
                $(element).addClass('adguard-assistant-button-top');
                $(element).removeClass('adguard-assistant-button-bottom');
            } else {
                $(element).addClass('adguard-assistant-button-bottom');
                $(element).removeClass('adguard-assistant-button-top');
            }
        },
        positionX: function(element, anchor) {
            storedAnchor.left = anchor;

            if (storedAnchor.left) {
                $(element).addClass('adguard-assistant-button-left');
                $(element).removeClass('adguard-assistant-button-right');
            } else {
                $(element).addClass('adguard-assistant-button-right');
                $(element).removeClass('adguard-assistant-button-left');
            }
        }
    };

    // getting screen width and height without scroll bars
    var getWindowSize = function() {
        return {
            width: Math.min(document.documentElement.clientWidth, window.innerWidth || screen.width),
            height: Math.min(document.documentElement.clientHeight, window.innerHeight || screen.height)
        };
    };

    var checkElementPosition = function(element, pos) {
        windowWidth = getWindowSize().width;
        windowHeight = getWindowSize().height;

        elWidth = element.clientWidth;
        elHeight = element.clientHeight;

        if(outsidePosition.top(pos)) pos.y = windowHeight - 60;
        if(outsidePosition.bottom(pos)) pos.y = - windowHeight + 60;
        if(outsidePosition.left(pos)) pos.x = windowWidth - 60;
        if(outsidePosition.right(pos)) pos.x = - windowWidth + 60;

        moveElementTo(element, pos.x, pos.y);
    };

    var storedAnchor = {
        top: false,
        left: false
    };

    return {
        makeElementDraggable: makeElementDraggable,
        makeIframeDraggable: makeIframeDraggable,
        moveElementTo: moveElementTo,
        setAnchorPosition: setAnchorPosition,
        checkElementPosition: checkElementPosition
    };
};

/**
 * Utils that checks environment for compatibility with assistant
 * @param settings
 * @param log
 * @returns {{checkVisibleAreaSize: checkVisibleAreaSize, validateBrowser: validateBrowser, validatePage: validatePage, getViewPort: getViewPort}}
 * @constructor
 */
var UIValidationUtils = function(settings, log) { // jshint ignore:line
    var document = window.document;
    /**
     * Check if visible area are enough to show menu.
     * @returns boolean. True if area enough
     */
    var checkVisibleAreaSize = function() {
        var viewPort = getViewPort();
        var visibleAreaSize = viewPort.height > settings.Constants.MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON;

        if (!visibleAreaSize) {
            log.error('Viewport height is too small: ' + viewPort.height);
        }

        return visibleAreaSize;
    };

    var getViewPort = function() {
        var viewPortWidth;
        var viewPortHeight;

        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;

        return {
            width: viewPortWidth,
            height: viewPortHeight
        };
    };

    /**
     * Checks if browser is valid for Adguard assistant
     * @returns boolean. True if browser valid
     */
    var validateBrowser = function() {
        var valid = !document.documentMode || (document.documentMode > settings.Constants.MINIMUM_IE_SUPPORTED_VERSION);

        if (!valid) {
            log.error('IE version is ' + document.documentMode);
        }

        return valid;
    };

    /**
     * Checks if page is valid for Adguard assistant to work here.
     */
    var validatePage = function() {
        // Assistant do not work in iframes
        if (window.window !== window.top) {
            log.error('Page is iframe: ' + window.location.href);
            return false;
        } else {
            return true;
        }
    };

    return {
        checkVisibleAreaSize: checkVisibleAreaSize,
        validateBrowser: validateBrowser,
        validatePage: validatePage,
        getViewPort: getViewPort
    };
};

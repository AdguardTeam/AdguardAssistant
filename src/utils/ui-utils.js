/**
 * UI utils
 * @param $
 * @returns {{makeElementDraggable: Function, makeIframeDraggable: Function, tryFullScreenPrefix: Function}}
 * @constructor
 */
var UIUtils = function($) { // jshint ignore:line
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
                onMouseUp(e);
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

        coords = getCoords(element);

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
            $(document).on('wheel mousewheel', preventedEvent);

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

            document.body.appendChild(element);

            /**
             * binding both mouse and touch/pointer events simultaneously
             * see: http://www.html5rocks.com/en/mobile/touchandmouse/
             */
            $(document).on('mouseup touchend pointerup', onMouseUp);
            $(document).on('mousemove touchmove pointermove', onMouseMove);
        };

        var onMouseUp = function(e) {
            e.stopPropagation();

            // make scroll availalbe
            $(document).off('wheel mousewheel', preventedEvent);

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

            // Open the frame if the button has been shifted by no more than 20 pixels
            if (Math.abs(coords.left - lastCoords.left) > 20 || Math.abs(coords.top - lastCoords.top) > 20) {
                if (onDragEnd) {
                    var store = {
                        "x": lastX,
                        "y": lastY,
                        "storedAnchor": storedAnchor
                    };
                    onDragEnd(store);
                }
            } else {
                if (onClick) {
                    onClick(e);
                    e.stopPropagation();
                }
            }

            $(document).off('mouseup touchend pointerup', onMouseUp);

            $(document).off('mousemove touchmove pointermove', onMouseMove);
        };

        $(element).on('mousedown touchstart', mouseDown.bind(this));
        $(element).on('dragstart', function() {return;});
        $(element).on('click', function(e) {
            onClick();
        });
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
        var iframeJ = iframe;
        var dragHandle = handleElement;
        var $iframeDocument = $(iframe[0].contentDocument);

        var offset = Object.create(null);

        /**
         * Function that does actual "dragging"
         *
         * @param x
         * @param y
         */
        var drag = function(x, y) {
            var newPositionX = x;
            var newPositionY = y;
            // Don't drag it off the top or left of the screen?
            if (newPositionX < 0) {
                newPositionX = 0;
            }
            if (newPositionY < 0) {
                newPositionY = 0;
            }

            iframeJ.css('left', newPositionX + 'px');
            iframeJ.css('top', newPositionY + 'px');
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
            var dragHandleEl = dragHandle.get(0);
            var rect = iframeJ.get(0).getBoundingClientRect();

            offset.x = rect.left + dragHandleEl.offsetLeft - eventPosition.screenX;
            offset.y = rect.top + dragHandleEl.offsetTop - eventPosition.screenY;

            $iframeDocument.on('mousemove touchmove pointermove', onMouseMove);
            $iframeDocument.on('selectstart', cancelIFrameSelection);
        };

        var onMouseUp = function() {
            $iframeDocument.off('mousemove touchmove pointermove', onMouseMove);
            $iframeDocument.off('selectstart', cancelIFrameSelection);
        };

        // prevent iframe dragging while browser tabs is switching
        // modern browsers
        document.addEventListener('visibilitychange', onMouseUp);
        // old browsers
        window.addEventListener('focus', onMouseUp);
        window.addEventListener('blur', onMouseUp);

        dragHandle.on('mousedown touchstart', onMouseDown);
        $iframeDocument.on('mouseup touchend pointerup', onMouseUp);
    };

    var browserPrefixes = ["webkit", "moz", "ms", "o", ""];

    /*
     Checks prefixes for full screen mode.
     */
    var tryFullScreenPrefix = function(obj, method) {
        var i = 0,
            currentMethod = null,
            type;
        while (i < browserPrefixes.length && !obj[currentMethod]) {
            currentMethod = method;
            if (browserPrefixes[i] === "") {
                currentMethod = currentMethod.substr(0, 1).toLowerCase() + currentMethod.substr(1);
            }
            currentMethod = browserPrefixes[i] + currentMethod;
            type = typeof obj[currentMethod];
            if (type !== "undefined") {
                browserPrefixes = [browserPrefixes[i]];
                return (type === "function" ? obj[currentMethod]() : obj[currentMethod]);
            }
            i++;
        }
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
        tryFullScreenPrefix: tryFullScreenPrefix,
        moveElementTo: moveElementTo,
        setAnchorPosition: setAnchorPosition,
        checkElementPosition: checkElementPosition
    };
};

/**
 * Utils that checks environment for compatibility with assistant
 * @param settings
 * @returns {{checkVisibleAreaSize: checkVisibleAreaSize, validateBrowser: validateBrowser, validatePage: validatePage}}
 * @constructor
 */
var UIValidationUtils = function(settings) { // jshint ignore:line
    var document = window.document;
    /**
     * Check if visible area are enough to show menu.
     * @returns boolean. True if area enough
     */
    var checkVisibleAreaSize = function() {
        var viewPort = getViewPort();
        return viewPort.height > settings.Constants.MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON;
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
        return !document.documentMode || (document.documentMode > settings.Constants.MINIMUM_IE_SUPPORTED_VERSION);
    };

    /**
     * Checks if page is valid for Adguard assistant to work here.
     */
    var validatePage = function() {
        // Assistant do not work in iframes
        if (window.window !== window.top) {
            return false;
        }

        // Check for necessary html elements existence
        return document.getElementsByTagName('head').length &&
            document.getElementsByTagName('body').length;
    };

    return {
        checkVisibleAreaSize: checkVisibleAreaSize,
        validateBrowser: validateBrowser,
        validatePage: validatePage,
        getViewPort: getViewPort
    };
};

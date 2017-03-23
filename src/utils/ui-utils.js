/**
 * UI utils
 * @param $
 * @returns {{makeElementDraggable: Function, makeIframeDraggable: Function, tryFullScreenPrefix: Function}}
 * @constructor
 */
var UIUtils = function ($) {
    /**
     * Make element draggable
     * @param element
     * @param onDragEnd
     * @param onClick
     */
    var makeElementDraggable = function (element, onDragEnd, onClick, onMouseDown) {
        var getCoords = function (elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top,
                left: box.left
            };
        };

        element.onmousedown = function (e) {
            var coords = getCoords(element);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            document.body.appendChild(element);

            var moveAt = function (e) {
                element.style.left = e.pageX - shiftX + 'px';
                element.style.top = e.pageY - shiftY + 'px';
            };

            moveAt(e);
            if (onMouseDown) {
                onMouseDown();
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            element.onmouseup = function (e) {
                document.onmousemove = null;
                element.onmouseup = null;
                var lastCoords = getCoords(element);
                if ((coords.left != lastCoords.left) || (coords.top != lastCoords.top)) {
                    if (onDragEnd) {
                        onDragEnd(getCoords(element));
                    }
                }
                else {
                    if (onClick) {
                        onClick(e);
                        e.stopPropagation();
                    }
                }
            };
        };

        element.ondragstart = function () {
            return false;
        };
    };

    /**
     * Makes iframe draggable
     *
     * @param iframe
     */
    var makeIframeDraggable = function (iframe, handleElement) {

        var iframeJ = iframe;
        var dragHandle = handleElement;
        var $iframeDocument = $(iframe[0].contentDocument);

        var offset = Object.create(null);

        /**
         * Generalized function to get position of an event (like mousedown, mousemove, etc)
         *
         * @param e
         * @returns {{x: (Number|number), y: (Number|number)}}
         */
        var getEventPosition = function (e) {
            if (!e) {
                e = window.event;
            }
            return {
                x: e.screenX,
                y: e.screenY
            };
        };

        /**
         * Function that does actual "dragging"
         *
         * @param x
         * @param y
         */
        var drag = function (x, y) {
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

        var cancelIFrameSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };

        var onMouseMove = function (e) {
            var eventPosition = getEventPosition(e);
            drag(eventPosition.x + offset.x, eventPosition.y + offset.y);
        };

        var onMouseDown = function (e) {
            var eventPosition = getEventPosition(e);
            var dragHandleEl = dragHandle.get(0);
            var rect = iframeJ.get(0).getBoundingClientRect();

            offset.x = rect.left + dragHandleEl.offsetLeft - eventPosition.x;
            offset.y = rect.top + dragHandleEl.offsetTop - eventPosition.y;

            $iframeDocument.on('mousemove', onMouseMove);
            $iframeDocument.on('selectstart', cancelIFrameSelection);
        };

        var onMouseUp = function () {
            $iframeDocument.off('mousemove', onMouseMove);
            $iframeDocument.off('selectstart', cancelIFrameSelection);
        };

        dragHandle.on('mousedown', onMouseDown);
        $iframeDocument.on('mouseup', onMouseUp);
    };

    var browser_prefixes = ["webkit", "moz", "ms", "o", ""];
    var tryFullScreenPrefix = function (obj, method) {
        var i = 0, currentMethod, type;
        while (i < browser_prefixes.length && !obj[currentMethod]) {
            currentMethod = method;
            if (browser_prefixes[i] == "") {
                currentMethod = currentMethod.substr(0, 1).toLowerCase() + currentMethod.substr(1);
            }
            currentMethod = browser_prefixes[i] + currentMethod;
            type = typeof obj[currentMethod];
            if (type != "undefined") {
                browser_prefixes = [browser_prefixes[i]];
                return (type == "function" ? obj[currentMethod]() : obj[currentMethod]);
            }
            i++;
        }
    };

    return {
        makeElementDraggable: makeElementDraggable,
        makeIframeDraggable: makeIframeDraggable,
        tryFullScreenPrefix: tryFullScreenPrefix
    }
};

/**
 * Utils that checks environment for compatibility with assistant
 * @param settings
 * @returns {{checkVisibleAreaSize: checkVisibleAreaSize, validateBrowser: validateBrowser, validatePage: validatePage}}
 * @constructor
 */
var UIValidationUtils = function (settings) {
    var document = window.document;
    /**
     * Check if visible area are enough to show menu.
     * @returns boolean. True if area enough
     */
    var checkVisibleAreaSize = function () {
        var viewPort = getViewPort();
        return viewPort.height > settings.Constants.MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON;
    };

    var getViewPort = function () {
        var viewPortWidth;
        var viewPortHeight;

        viewPortWidth = window.innerWidth,
            viewPortHeight = window.innerHeight;

        return {width: viewPortWidth, height: viewPortHeight};
    };

    /**
     * Checks if browser is valid for Adguard assistant
     * @returns boolean. True if browser valid
     */
    var validateBrowser = function () {
        return !document.documentMode || (document.documentMode > settings.Constants.MINIMUM_IE_SUPPORTED_VERSION);
    };

    /**
     * Checks if page is valid for Adguard assistant to work here.
     */
    var validatePage = function () {
        // Assistant do not work in iframes
        if (window != top) return false;

        // Check for necessary html elements existence
        return document.getElementsByTagName('head').length &&
            document.getElementsByTagName('body').length;
    };


    return {
        checkVisibleAreaSize: checkVisibleAreaSize,
        validateBrowser: validateBrowser,
        validatePage: validatePage,
        getViewPort: getViewPort
    }
};



/**
 * UI utils
 * @param $
 * @returns {{makeElementDraggable: Function, makeIframeDraggable: Function, tryFullScreenPrefix: Function}}
 * @constructor
 */
var UIUtils = function ($) { // jshint ignore:line
    /**
     * Make element draggable
     * @param element
     * @param onDragEnd
     * @param onClick
     * @param onMouseDown
     */
    var makeElementDraggable = function (element, onDragEnd, onClick, onMouseDown) {
        var getCoords = function (elem) {
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
         **/
        var pauseEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        };

        $(element).on('mousedown', function (e) {
            pauseEvent(e);
            var coords = getCoords(element);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            document.body.appendChild(element);

            var moveAt = function (e) {
                var position = {
                    top: e.pageY - shiftY,
                    left: e.pageX - shiftX
                };

                // stack the icon to the border and
                // remove mousemove event listener if it outside
                var outsidePosition =
                    position.left + element.offsetWidth > window.innerWidth ||
                    position.top + element.offsetHeight > window.innerHeight ||
                    position.left <= 0 ||
                    position.top <= 0;

                if(outsidePosition) {
                    $(document).off('mousemove');
                }else{
                    moveElementTo(element, position.left, position.top);
                }
            };

            moveAt(e);

            if (onMouseDown) {
                onMouseDown();
            }

            var onMouseMove = function (e) {
                e.stopPropagation();
                pauseEvent(e);
                moveAt(e);
            };
            $(document).on('mousemove', onMouseMove);

            var onMouseUp = function (e) {
                e.stopPropagation();
                $(document).off('mousemove', onMouseMove);
                $(element).off('mouseup', onMouseUp);
                var lastCoords = getCoords(element);
                if ((coords.left !== lastCoords.left) || (coords.top !== lastCoords.top)) {
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
            $(element).on('mouseup', onMouseUp);
        });

        $(element).on('dragstart', function () {
            return false;
        });


        /**
         * Resize window event listener to ensure that the icon
         * does not outside the bottom right corner
         */
        var resizeWindow = function() {
            var fixedClasses =
                $(element).hasClass('adguard-assistant-button-bottom') ||
                $(element).hasClass('adguard-assistant-button-right');

            if(fixedClasses) return false;

            var coords = getCoords(element);

            var position = {
                left: coords.right > window.innerWidth ? window.innerWidth - element.offsetWidth : coords.left,
                top: coords.bottom > window.innerHeight ? window.innerHeight - element.offsetHeight : coords.top
            };

            moveElementTo(element, position.left, position.top);
        };

        window.addEventListener('resize', resizeWindow);
    };

    /**
     * Makes iframe draggable
     *
     * @param iframe
     * @param handleElement
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

    var browserPrefixes = ["webkit", "moz", "ms", "o", ""];

    /*
     Checks prefixes for full screen mode.
     */
    var tryFullScreenPrefix = function (obj, method) {
        var i = 0, currentMethod = null, type;
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

    return {
        makeElementDraggable: makeElementDraggable,
        makeIframeDraggable: makeIframeDraggable,
        tryFullScreenPrefix: tryFullScreenPrefix,
        moveElementTo: moveElementTo
    };
};

/**
 * Utils that checks environment for compatibility with assistant
 * @param settings
 * @returns {{checkVisibleAreaSize: checkVisibleAreaSize, validateBrowser: validateBrowser, validatePage: validatePage}}
 * @constructor
 */
var UIValidationUtils = function (settings) { // jshint ignore:line
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

        viewPortWidth = window.innerWidth;
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

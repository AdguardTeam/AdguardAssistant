import { events } from './common-utils';
import { addClass, removeClass } from './dom-utils';
import protectedApi from '../protectedApi';

/**
 * UI utils
 * @returns {{
 *  makeElementDraggable: Function,
 *  makeIframeDraggable: Function,
 *  moveElementTo: Function,
`*  setAnchorPosition: Function,
 *  checkElementPosition: Function,
 * }}
 * @constructor
 */
function UIUtils() {
    let elWidth;
    let elHeight;
    let windowWidth;
    let windowHeight;

    // Stored button anchor position
    const storedAnchor = {};

    /**
     * Get original event object for touch
     * devices to getting current coordinates
     * @param {Object}
     * @returns {Object}
     */
    const getOriginalEvent = (e) => (e.targetTouches ? e.targetTouches[0] : e);

    const outsidePosition = {
        top(pos) {
            return storedAnchor.top && (pos.y + elHeight > windowHeight || pos.y < 0);
        },
        bottom(pos) {
            return !storedAnchor.top && (Math.abs(pos.y) + elHeight > windowHeight || pos.y > 0);
        },
        left(pos) {
            return storedAnchor.left && (pos.x + elWidth > windowWidth || pos.x < 0);
        },
        right(pos) {
            return !storedAnchor.left && (Math.abs(pos.x) + elWidth > windowWidth || pos.x > 0);
        },
    };

    /**
     * Set transition css property for drag
     * translate3d is for better rendering performance
     * see: https://www.html5rocks.com/en/tutorials/speed/layers/
     */
    const moveElementTo = (el, x, y) => {
        const transform = `translate3d(${x}px,${y}px, 0px)`;
        // eslint-disable-next-line no-param-reassign
        el.style.webkitTransform = transform;
        // eslint-disable-next-line no-param-reassign
        el.style.mozTransform = transform;
        // eslint-disable-next-line no-param-reassign
        el.style.msTransform = transform;
        // eslint-disable-next-line no-param-reassign
        el.style.oTransform = transform;
        // eslint-disable-next-line no-param-reassign
        el.style.transform = transform;
    };

    // getting screen width and height without scroll bars
    const getWindowSize = () => ({
        width: Math.min(document.documentElement.clientWidth, window.innerWidth
            || window.screen.width),
        height: Math.min(document.documentElement.clientHeight, window.innerHeight
            || window.screen.height),
    });

    /**
     * Functions for saving left/top anchors and setting class position
     *
     * @param {Object} element  button element
     * @param {Boolean} anchor  anchors positions `true` for top/left or `false` for bottom/right
     */
    const setAnchorPosition = {
        positionY(element, anchor) {
            storedAnchor.top = anchor;

            if (storedAnchor.top) {
                addClass(element, 'adguard-assistant-button-top');
                removeClass(element, 'adguard-assistant-button-bottom');
            } else {
                addClass(element, 'adguard-assistant-button-bottom');
                removeClass(element, 'adguard-assistant-button-top');
            }
        },
        positionX(element, anchor) {
            storedAnchor.left = anchor;

            if (storedAnchor.left) {
                addClass(element, 'adguard-assistant-button-left');
                removeClass(element, 'adguard-assistant-button-right');
            } else {
                addClass(element, 'adguard-assistant-button-right');
                removeClass(element, 'adguard-assistant-button-left');
            }
        },
    };

    /**
     * Make element draggable
     * @param element
     * @param onDragEnd
     * @param onClick
     */
    function makeElementDraggable(element, onDragEnd, onClick) {
        let coords;
        let shiftX;
        let shiftY;

        /**
         * Prevent text selection
         * With cursor drag
         */
        const pauseEvent = (e) => {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;

            return false;
        };

        const onMouseMove = (e) => {
            pauseEvent(e);
            // eslint-disable-next-line no-use-before-define
            moveAt(e);
        };

        const preventedEvent = (e) => {
            e.preventDefault();
        };

        const getCoords = (elem) => {
            const box = elem.getBoundingClientRect();
            return {
                top: box.top,
                left: box.left,
                bottom: box.bottom,
                right: box.right,
            };
        };

        /**
         * On mouse up event
         * @param {Object} e  event object
         * @param {Boolean|undefined} doNotOpenIframe do not open the iframe if true.
         * This is necessary when the cursor is out of bounds
         */
        const onMouseUp = (e, doNotOpenIframe) => {
            e.stopPropagation();

            // make scroll availalbe
            events.remove(document.documentElement, 'wheel mousewheel', preventedEvent);

            // When a user finishes dragging icon, we set icon anchor
            // depending on the icon position, i.e. which quarter
            // of the screen it belongs.
            let lastX;
            let lastY;
            const lastCoords = getCoords(element);

            const topHalf = lastCoords.top < windowHeight / 2;
            const leftHalf = lastCoords.left < windowWidth / 2;

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
            if (Math.abs(coords.left - lastCoords.left) > 5
                || Math.abs(coords.top - lastCoords.top) > 5) {
                if (onDragEnd) {
                    const store = {
                        x: lastX,
                        y: lastY,
                        storedAnchor,
                    };
                    onDragEnd(store);
                }
            } else if (onClick && !doNotOpenIframe) {
                onClick(e);
            }

            events.remove(document.documentElement, 'mouseup touchend pointerup', onMouseUp);
            events.remove(document.documentElement, 'mousemove touchmove pointermove', onMouseMove);
        };

        const moveAt = (e) => {
            const position = {
                x: getOriginalEvent(e).pageX - shiftX,
                y: getOriginalEvent(e).pageY - shiftY,
            };

            // disable mousemove if button element outside the screen
            const out = outsidePosition.top(position)
                || outsidePosition.left(position)
                || outsidePosition.bottom(position)
                || outsidePosition.right(position);

            if (out) {
                onMouseUp(e, true);
            } else {
                moveElementTo(element, position.x, position.y);
            }
        };

        const mouseDown = (e) => {
            pauseEvent(e);

            // prevent browser scroll
            events.add(document.documentElement, 'wheel mousewheel', preventedEvent);

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
            events.add(document.documentElement, 'mouseup touchend pointerup', onMouseUp);
            events.add(document.documentElement, 'mousemove touchmove pointermove', onMouseMove);
        };

        events.add(element, 'mousedown touchstart', protectedApi.functionBind.call(mouseDown, this));
        events.add(element, 'dragstart', () => { });
    }

    /**
     * Makes iframe draggable
     *
     * @param iframe
     * @param handleElement
     */
    const makeIframeDraggable = (iframe, handleElement) => {
        const iframeDoc = iframe.contentDocument;

        const offset = Object.create(null);

        /**
         * Function that does actual "dragging"
         *
         * @param x
         * @param y
         */
        const drag = (x, y) => {
            // eslint-disable-next-line no-param-reassign
            iframe.style.left = `${x}px`;
            // eslint-disable-next-line no-param-reassign
            iframe.style.top = `${y}px`;
        };

        const cancelIFrameSelection = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        const onMouseMove = (e) => {
            const eventPosition = getOriginalEvent(e);
            drag(eventPosition.screenX + offset.x, eventPosition.screenY + offset.y);
        };

        const onMouseDown = (e) => {
            const eventPosition = getOriginalEvent(e);
            const rect = iframe.getBoundingClientRect();

            offset.x = rect.left + handleElement.offsetLeft - eventPosition.screenX;
            offset.y = rect.top + handleElement.offsetTop - eventPosition.screenY;

            events.add(iframeDoc, 'mousemove touchmove pointermove', onMouseMove);
            events.add(iframeDoc, 'selectstart', cancelIFrameSelection);
        };

        const onMouseUp = () => {
            events.remove(iframeDoc, 'mousemove touchmove pointermove', onMouseMove);
            events.remove(iframeDoc, 'selectstart', cancelIFrameSelection);
        };

        // prevent iframe dragging while browser tabs is switching
        document.addEventListener('visibilitychange', onMouseUp);

        events.add(handleElement, 'mousedown touchstart', onMouseDown);
        events.add(iframeDoc, 'mouseup touchend pointerup', onMouseUp);
        events.add(iframeDoc, 'contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    };

    const checkElementPosition = (element, pos) => {
        const position = pos;
        windowWidth = getWindowSize().width;
        windowHeight = getWindowSize().height;

        elWidth = element.clientWidth;
        elHeight = element.clientHeight;

        if (outsidePosition.top(position)) position.y = windowHeight - 60;
        if (outsidePosition.bottom(position)) position.y = -windowHeight + 60;
        if (outsidePosition.left(position)) position.x = windowWidth - 60;
        if (outsidePosition.right(position)) position.x = -windowWidth + 60;

        moveElementTo(element, position.x, position.y);
    };

    return {
        makeElementDraggable,
        makeIframeDraggable,
        moveElementTo,
        setAnchorPosition,
        checkElementPosition,
    };
}

const uiUtils = new UIUtils();

export default uiUtils;

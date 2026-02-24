import protectedApi from './protectedApi';

/**
 * Slider widget
 * @type {Function}
 */
function SliderWidget(api = {}) {
    const CLUE_CLASS = 'adg-slide_clue';
    const CLUE_MIN_CLASS = `${CLUE_CLASS} ${CLUE_CLASS}--min`;
    const CLUE_MAX_CLASS = `${CLUE_CLASS} ${CLUE_CLASS}--max`;
    const TRACK_CLASS = 'adg-slide_track';
    const HANDLE_CLASS = 'adg-slide_handle';
    const TICK_CLASS = 'adg-slide_tick';
    const TICK_ACTIVE_CLASS = `${TICK_CLASS} ${TICK_CLASS}--active`;

    // Horizontal padding of the track, should match with .adg-slide_track class in CSS
    const TRACK_OFFSET = 28;

    let placeholder = null;
    let clueMin = null;
    let clueMax = null;
    let track = null;
    let handle = null;
    let ticks = null;

    let min = 0;
    let max = 1;
    let value = 0;
    let onValueChanged = null;

    /*
     * Updates slider UI.
     *
     * @param {number} newValue Value to set for slider.
     */
    const updateSliderUi = (newValue) => {
        // Clamp the new value between min and max
        if (newValue < min) {
            value = min;
        } else if (newValue > max) {
            value = max;
        } else {
            value = newValue;
        }

        // Update handle position
        const trackWidth = track.offsetWidth - (TRACK_OFFSET * 2);
        const valueRange = max - min;
        const valuePercentage = (value - min) / valueRange;
        const handlePosition = (valuePercentage * trackWidth) + TRACK_OFFSET;
        handle.style.left = `${handlePosition}px`;

        // Activate all ticks up to the new value
        for (let i = 0; i < ticks.length; i += 1) {
            // Add `min`, because ticks are 0-based, but values are starts from `min`
            if (i + min < value) {
                ticks[i].setAttribute('class', TICK_ACTIVE_CLASS);
            } else {
                ticks[i].setAttribute('class', TICK_CLASS);
            }
        }
    };

    /*
     * Checks if value changed, updates slider and fires value changed event.
     *
     * @param {number} newValue Value to set for slider.
     */
    const activateValue = (newValue) => {
        // Do nothing if the value is the same
        if (newValue === value) {
            return;
        }

        updateSliderUi(newValue);

        onValueChanged(value);
    };

    const render = () => {
        // Render clue min
        clueMin = protectedApi.createElement('div');
        clueMin.setAttribute('class', CLUE_MIN_CLASS);
        clueMin.textContent = 'Min';
        placeholder.appendChild(clueMin);

        // Render clue max
        clueMax = protectedApi.createElement('div');
        clueMax.setAttribute('class', CLUE_MAX_CLASS);
        clueMax.textContent = 'Max';
        placeholder.appendChild(clueMax);

        // Render handle
        handle = protectedApi.createElement('div');
        handle.setAttribute('class', HANDLE_CLASS);

        // Render track
        track = protectedApi.createElement('div');
        track.setAttribute('class', TRACK_CLASS);
        track.appendChild(handle);
        placeholder.appendChild(track);

        // Render ticks
        const tickCount = max - min;
        ticks = [];
        for (let i = 0; i < tickCount; i += 1) {
            const tick = protectedApi.createElement('div');
            tick.setAttribute('class', TICK_CLASS);
            track.appendChild(tick);
            ticks.push(tick);
        }
    };

    const bindEvents = () => {
        clueMin.addEventListener('click', () => {
            activateValue(min);
        });

        clueMax.addEventListener('click', () => {
            activateValue(max);
        });

        // Track dragging logic using pointer events with pointer capture
        track.addEventListener('pointerdown', (pointerDownEvent) => {
            // Prevent default behavior to avoid text selection during dragging
            pointerDownEvent.preventDefault();

            // Set pointer capture to the track element
            track.setPointerCapture(pointerDownEvent.pointerId);

            // Flag to track active dragging
            let isDragging = true;

            // Calculate the value based on pointer position
            const calculateValueFromPosition = (clientX) => {
                const trackRect = track.getBoundingClientRect();
                const trackWidth = trackRect.width - (TRACK_OFFSET * 2);
                const valueRange = max - min;

                // Calculate the offset within the track, accounting for padding
                let offsetX = clientX - trackRect.left - TRACK_OFFSET;

                // Keep offset within bounds
                if (offsetX < 0) {
                    offsetX = 0;
                }
                if (offsetX > trackWidth) {
                    offsetX = trackWidth;
                }

                // Calculate value based on position
                const valuePercentage = offsetX / trackWidth;
                const newValue = min + (valuePercentage * valueRange);

                // Round to nearest value
                return Math.round(newValue);
            };

            // Set initial value based on where the user clicked
            activateValue(calculateValueFromPosition(pointerDownEvent.clientX));

            // Handle pointer movement
            const handlePointerMove = (pointerMoveEvent) => {
                if (!isDragging) {
                    return;
                }

                // Prevent default to avoid unwanted side effects
                pointerMoveEvent.preventDefault();

                // Update value based on pointer position
                activateValue(calculateValueFromPosition(pointerMoveEvent.clientX));
            };

            // Handle pointer up - cleanup
            const handlePointerUp = (pointerUpEvent) => {
                // Release pointer capture
                if (track.hasPointerCapture(pointerUpEvent.pointerId)) {
                    track.releasePointerCapture(pointerUpEvent.pointerId);
                }

                // Set dragging flag to false
                isDragging = false;

                // Remove event listeners
                track.removeEventListener('pointermove', handlePointerMove);
                track.removeEventListener('pointerup', handlePointerUp);
                track.removeEventListener('pointercancel', handlePointerUp);
                track.removeEventListener('pointerleave', handlePointerUp);
            };

            // Add pointer event listeners
            track.addEventListener('pointermove', handlePointerMove);
            track.addEventListener('pointerup', handlePointerUp);
            track.addEventListener('pointercancel', handlePointerUp);
            track.addEventListener('pointerleave', handlePointerUp);
        });
    };

    /**
     * @param placeholderElement
     * @param options
     */
    // eslint-disable-next-line no-param-reassign
    api.init = (placeholderElement, options) => {
        placeholder = placeholderElement;
        // eslint-disable-next-line prefer-destructuring
        min = options.min;
        // eslint-disable-next-line prefer-destructuring
        max = options.max;
        // eslint-disable-next-line prefer-destructuring
        value = options.value;
        // eslint-disable-next-line prefer-destructuring
        onValueChanged = options.onValueChanged;

        render();
        bindEvents();

        // Defer visual update to ensure DOM is fully rendered
        requestAnimationFrame(() => {
            updateSliderUi(value);
        });
    };

    // eslint-disable-next-line no-param-reassign
    api.getValue = () => value;

    return api;
}

const sliderWidget = new SliderWidget();

export default sliderWidget;

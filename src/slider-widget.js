import { addStyle, addClass } from './utils/dom-utils';
import protectedApi from './protectedApi';

const BASIC_GREEN_COLOR = '#36BA53';
const DARK_GREEN_COLOR = '#4D995F';
const TICK_RIGHT_COLOR = '#E0DFDB';

/**
 * Slider widget
 * @type {Function}
 */
function SliderWidget(api = {}) {
    const PLACEHOLDER_CLASS = 'adg-slide ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all';
    const HANDLE_CLASS = 'ui-slider-handle';
    const HANDLE_FULL_CLASS = 'ui-slider-handle ui-state-default ui-corner-all';
    const TICK_CLASS = 'tick';
    const TICK_FULL_CLASS = 'tick ui-widget-content';
    let tickLeftColor = BASIC_GREEN_COLOR;

    let placeholder = null;

    let min = 0;
    let max = 1;
    let value = 0;
    let sliderArea = null;
    let onValueChanged = null;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        tickLeftColor = DARK_GREEN_COLOR;
    }

    const refresh = () => {
        const handle = placeholder.querySelectorAll(`.${HANDLE_CLASS}`);
        addStyle(handle, 'left', `${((value - 1) * 100) / (max - min)}%`);

        const ticks = placeholder.querySelectorAll(`.${TICK_CLASS}`);
        for (let i = 0; i < ticks.length; i += 1) {
            if (i + 1 < value) {
                addStyle(ticks[i], 'background-color', tickLeftColor);
            } else {
                addStyle(ticks[i], 'background-color', TICK_RIGHT_COLOR);
            }
        }
    };

    const render = () => {
        addClass(placeholder, PLACEHOLDER_CLASS);

        const handle = protectedApi.createElement('span');
        handle.setAttribute('class', HANDLE_FULL_CLASS);
        placeholder.appendChild(handle);

        const count = max - min;
        const prepare = (i) => {
            const tick = protectedApi.createElement('div');
            tick.setAttribute('class', TICK_FULL_CLASS);
            tick.style.left = `${(100 / count) * i}%`;
            tick.style.width = `${100 / count}%`;

            placeholder.appendChild(tick);
        };

        for (let i = 0; i < count; i += 1) {
            prepare(i);
        }

        refresh();
    };

    const setValue = (v) => {
        if (v < min) {
            value = min;
        } else if (v > max) {
            value = max;
        } else {
            value = v;
        }

        refresh();

        onValueChanged(value);
    };

    const bindEvents = () => {
        const rect = placeholder.getBoundingClientRect();
        const sliderWidth = rect.width;
        const offsetLeft = rect.left + document.body.scrollLeft;

        const getSliderValue = (pageX) => Math.round(
            ((max - min) / sliderWidth) * (pageX - offsetLeft) + min,
        );

        const onMouseMove = (e) => {
            // calculate the correct position of the slider set the value
            const val = getSliderValue(e.pageX);
            setValue(val);
        };

        const onClick = (e) => {
            // calculate the correct position of the slider set the value
            const val = getSliderValue(e.pageX);
            setValue(val);
        };

        const onMouseDown = (e) => {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;

            sliderArea.addEventListener('mousemove', onMouseMove);
            sliderArea.addEventListener('touchmove', onMouseMove);
            sliderArea.addEventListener('pointermove', onMouseMove);
        };

        const sliderAreaRemoveListeners = () => {
            sliderArea.removeEventListener('mousemove', onMouseMove);
            sliderArea.removeEventListener('touchmove', onMouseMove);
            sliderArea.removeEventListener('pointermove', onMouseMove);
        };

        document.addEventListener('mouseup', sliderAreaRemoveListeners);
        document.addEventListener('touchend', sliderAreaRemoveListeners);
        document.addEventListener('pointerup', sliderAreaRemoveListeners);

        placeholder.addEventListener('click', onClick);
        placeholder.addEventListener('mousedown', onMouseDown);
        placeholder.addEventListener('touchstart', onMouseDown);

        sliderArea.addEventListener('mouseup', sliderAreaRemoveListeners);
        sliderArea.addEventListener('touchend', sliderAreaRemoveListeners);
        sliderArea.addEventListener('pointerup', sliderAreaRemoveListeners);
        sliderArea.addEventListener('mouseleave', sliderAreaRemoveListeners);
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
        // eslint-disable-next-line prefer-destructuring
        sliderArea = options.sliderArea;

        render();
        bindEvents();
    };

    return api;
}

const sliderWidget = new SliderWidget();

export default sliderWidget;

/**
 * Slider widget
 * @type {Function}
 */
export default function SliderWidget(api, $, protectedApi) {
    const PLACEHOLDER_CLASS = 'adg-slide ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all';
    const HANDLE_CLASS = 'ui-slider-handle';
    const HANDLE_FULL_CLASS = 'ui-slider-handle ui-state-default ui-corner-all';
    const TICK_CLASS = 'tick';
    const TICK_FULL_CLASS = 'tick ui-widget-content';
    const TICK_LEFT_COLOR = '#36BA53';
    const TICK_RIGHT_COLOR = '#E0DFDB';

    let placeholder = null;

    let min = 0;
    let max = 1;
    let value = 0;
    let sliderArea = null;
    let onValueChanged = null;

    const refresh = () => {
        const handle = placeholder.querySelectorAll(`.${HANDLE_CLASS}`);
        $(handle).css('left', `${(value - 1) * 100 / (max - min)}%`);

        const ticks = placeholder.querySelectorAll(`.${TICK_CLASS}`);
        for (let i = 0; i < ticks.length; i += 1) {
            if (i + 1 < value) {
                $(ticks[i]).css('background-color', TICK_LEFT_COLOR);
            } else {
                $(ticks[i]).css('background-color', TICK_RIGHT_COLOR);
            }
        }
    };

    const render = () => {
        $(placeholder).addClass(PLACEHOLDER_CLASS);

        const handle = protectedApi.createElement('span');
        handle.setAttribute('class', HANDLE_FULL_CLASS);
        placeholder.appendChild(handle);

        const count = max - min;
        const prepare = (i) => {
            const tick = protectedApi.createElement('div');
            tick.setAttribute('class', TICK_FULL_CLASS);
            tick.style.left = `${100 / count * i}%`;
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
        const $placeholder = $(placeholder);
        const $sliderArea = $(sliderArea);

        const rect = placeholder.getBoundingClientRect();
        const sliderWidth = rect.width;
        const offsetLeft = rect.left + document.body.scrollLeft;

        const getSliderValue = pageX => Math.round(
            (max - min) / sliderWidth * (pageX - offsetLeft) + min,
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

            $sliderArea.on('mousemove touchmove pointermove', onMouseMove);
        };

        $(document).on('mouseup touchend pointerup', () => {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });

        $placeholder.on('click', onClick);
        $placeholder.on('mousedown touchstart', onMouseDown);

        $sliderArea.on('mouseup touchend pointerup', () => {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });

        $sliderArea.on('mouseleave', () => {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
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
        // eslint-disable-next-line prefer-destructuring
        sliderArea = options.sliderArea;

        render();
        bindEvents();
    };

    return api;
}

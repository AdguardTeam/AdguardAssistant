/**
 * Slider widget
 * @type {Function}
 */
var SliderWidget = (function(api, $, protectedApi) { // jshint ignore:line
    var PLACEHOLDER_CLASS = "adg-slide ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all";
    var HANDLE_CLASS = "ui-slider-handle";
    var HANDLE_FULL_CLASS = "ui-slider-handle ui-state-default ui-corner-all";
    var TICK_CLASS = "tick";
    var TICK_FULL_CLASS = "tick ui-widget-content";
    var TICK_LEFT_COLOR = "#36BA53";
    var TICK_RIGHT_COLOR = "#E0DFDB";

    var placeholder = null;

    var min = 0;
    var max = 1;
    var value = 0;
    var sliderArea = null;
    var onValueChanged = null;

    var refresh = function() {
        var handle = placeholder.querySelectorAll("." + HANDLE_CLASS);
        $(handle).css('left', (value - 1) * 100 / (max - min) + "%");

        var ticks = placeholder.querySelectorAll("." + TICK_CLASS);
        for (var i = 0; i < ticks.length; i++) {
            if (i + 1 < value) {
                $(ticks[i]).css('background-color', TICK_LEFT_COLOR);
            } else {
                $(ticks[i]).css('background-color', TICK_RIGHT_COLOR);
            }
        }
    };

    var render = function() {
        $(placeholder).addClass(PLACEHOLDER_CLASS);

        var handle = protectedApi.createElement('span');
        handle.setAttribute('class', HANDLE_FULL_CLASS);
        placeholder.appendChild(handle);

        var count = max - min;
        var prepare = function(i) {
            var tick = protectedApi.createElement('div');
            tick.setAttribute('class', TICK_FULL_CLASS);
            tick.style.left = (100 / count * i) + '%';
            tick.style.width = (100 / count) + '%';

            placeholder.appendChild(tick);
        };

        for (var i = 0; i < count; i++) {
            prepare(i);
        }

        refresh();
    };

    var setValue = function(v) {
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

    var bindEvents = function() {
        var $placeholder = $(placeholder);
        var handle = placeholder.querySelectorAll("." + HANDLE_CLASS);
        var $handle = $(handle);
        var $sliderArea = $(sliderArea);

        $(document).on('mouseup touchend pointerup', function() {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });

        var rect = placeholder.getBoundingClientRect();
        var sliderWidth = rect.width;
        var offsetLeft = rect.left + document.body.scrollLeft;

        var getSliderValue = function(pageX) {
            return Math.round((max - min) / sliderWidth * (pageX - offsetLeft) + min);
        };

        var onClick = function(e) {
            //calculate the correct position of the slider set the value
            var value = getSliderValue(e.pageX);
            setValue(value);
        };

        var onMouseMove = function(e) {
            //calculate the correct position of the slider set the value
            var value = getSliderValue(e.pageX);
            setValue(value);
        };

        var onMouseDown = function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;

            $sliderArea.on('mousemove touchmove pointermove', onMouseMove);
        };

        $placeholder.on('click', onClick);
        $placeholder.on('mousedown touchstart', onMouseDown);

        $sliderArea.on('mouseup touchend pointerup', function() {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });

        $sliderArea.on('mouseleave', function() {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });
    };

    /**
     * @param placeholderElement
     * @param options
     */
    api.init = function(placeholderElement, options) {
        placeholder = placeholderElement;

        min = options.min;
        max = options.max;
        value = options.value;
        onValueChanged = options.onValueChanged;
        sliderArea = options.sliderArea;

        render();
        bindEvents();
    };

    return api;
});

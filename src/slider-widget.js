/**
 * Slider widget
 * @type {Function}
 */
var SliderWidget = (function (api, $) { // jshint ignore:line
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

    var onValueChanged = null;


    var refresh = function () {
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

    var render = function () {
        $(placeholder).addClass(PLACEHOLDER_CLASS);

        var handle = document.createElement('a');
        handle.setAttribute('href', '#');
        handle.setAttribute('class', HANDLE_FULL_CLASS);
        placeholder.appendChild(handle);

        var count = max - min;
        var prepare = function (i) {
            var tick = document.createElement('div');
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

    var setValue = function (v) {
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

    var bindEvents = function () {
        var $placeholder = $(placeholder);
        var handle = placeholder.querySelectorAll("." + HANDLE_CLASS);
        var $handle = $(handle);

        $(document).on('mouseup', function () {
            $placeholder.off('mousemove');
            $handle.off('mousemove');
        });

        //While the ui-slider-handle is being held down reference it parent.
        $handle.on('mousedown', function (e) {
            e.preventDefault();
            return $(this.parentNode).trigger('mousedown');
        });

        var rect = placeholder.getBoundingClientRect();
        var sliderWidth = rect.width;
        var offsetLeft = rect.left + document.body.scrollLeft;

        var getSliderValue = function (pageX) {
            return Math.round((max - min) / sliderWidth * (pageX - offsetLeft) + min);
        };

        //This will prevent the slider from moving if the mouse is taken out of the
        //slider area before the mouse down has been released.
        $placeholder.on('mouseenter', function () {
            $placeholder.on('click', function (e) {
                //calculate the correct position of the slider set the value
                var value = getSliderValue(e.pageX);
                setValue(value);
            });
            $placeholder.on('mousedown', function () {
                $(this).on('mousemove', function (e) {
                    //calculate the correct position of the slider set the value
                    var value = getSliderValue(e.pageX);
                    setValue(value);
                });
            });
            $placeholder.on('mouseup', function () {
                $(this).off('mousemove');
            });
        });

        $placeholder.on('mouseleave', function () {
            $placeholder.off('mousemove');
            $placeholder.off('click');
        });
    };

    /**
     *
     * @param placeholderElement
     * @param options
     */
    api.init = function (placeholderElement, options) {
        placeholder = placeholderElement;

        min = options.min;
        max = options.max;
        value = options.value;
        onValueChanged = options.onValueChanged;

        render();
        bindEvents();
    };

    return api;
});
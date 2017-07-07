/**
 * Balalaika library
 *
 * https://github.com/finom/balalaika/blob/master/balalaika.js
 *
 * The patch includes methods `addClass`, `removeClass`, `hasClass`, `get`, `css`, `hide`, `show`, `remove`, `text`, `attr`, `trigger`.
 * Also, for registration in the Ioc, the library is used through the variable `balalaika`
 */
var balalaika = (function (window, document, fn, nsRegAndEvents, id, s_EventListener, s_MatchesSelector, i, j, k, l, $) {
    $ = function (s, context) {
        return new $.i(s, context);
    };

    $.i = function (s, context) {
        var st;
        if (!s) {
            st = fn;
        } else {
            if (s.nodeType || s == window) {
                st = [s];
            } else {
                if (typeof(s) === 'string') {
                    if (/</.test(s)) {
                        st = ((i = document.createElement(context || 'q')).innerHTML = s, i.children);
                    } else {
                        st = (context && $(context)[0] || document).querySelectorAll(s);
                    }
                } else {
                    if (/f/.test(typeof s)) {
                        if (/c/.test(document.readyState)) {
                            st = s();
                        } else {
                            st = $(document).on('DOMContentLoaded', s);
                        }
                    } else {
                        st = s;
                    }
                }
            }
        }
        st = [].slice.call(st);
        fn.push.apply(this, st);
    };

    $.i[l = 'prototype'] = ( $.extend = function (obj) {
        k = arguments;
        for (i = 1; i < k.length; i++) {
            if (l = k[i]) {
                for (j in l) {
                    obj[j] = l[j];
                }
            }
        }

        return obj;
    })($.fn = $[l] = fn, { // $.fn = $.prototype = fn
        on: function (n, f) {
            // n = [ eventName, nameSpace ]
            n = n.split(nsRegAndEvents);
            this.map(function (item) {
                n.map(function (ev) {
                    item['add' + s_EventListener](ev, f);
                });
            });
            return this;
        },
        off: function (n, f) {
            // n = [ eventName, nameSpace ]
            n = n.split(nsRegAndEvents);
            // l = 'removeEventListener'
            l = 'remove' + s_EventListener;
            this.map(function (item) {
                n.map(function (ev) {
                    item[l](ev, f);
                });
            });
            return this;
        },
        is: function (s) {
            i = this[0];
            return (i.matches
            || i['webkit' + s_MatchesSelector]
            || i['moz' + s_MatchesSelector]
            || i['ms' + s_MatchesSelector]
            || i['o' + s_MatchesSelector]).call(i, s);
        }
    });
    return $;
})(window, window.document, [], /\.| /, 0, 'EventListener', 'MatchesSelector');

/**
 * Add some more functions to balalaika
 */
balalaika.fn.hasClass = function (className) {
    return !!this[0] && (this[0].classList != undefined) && this[0].classList.contains(className);
};

balalaika.fn.addClass = function (className) {
    this.forEach(function (item) {
        var classList = item.classList;
        classList.add.apply(classList, className.split(/\s/));
    });
    return this;
};

balalaika.fn.removeClass = function (className) {
    this.forEach(function (item) {
        var classList = item.classList;
        classList.remove.apply(classList, className.split(/\s/));
    });
    return this;
};

balalaika.fn.get = function (index) {
    return this.length > index ? this[index] : null;
};

balalaika.fn.css = function (attr, value) {
    this.forEach(function (item) {
        item.style[attr] = value;
    });
    return this;
};

balalaika.fn.hide = function () {
    this.forEach(function (item) {
        item.style['display'] = 'none';
    });
    return this;
};

balalaika.fn.show = function () {
    this.forEach(function (item) {
        item.style['display'] = 'block';
    });
    return this;
};

balalaika.fn.remove = function () {
    this.forEach(function (item) {
        item.parentNode.removeChild(item);
    });
    return this;
};

balalaika.fn.text = function (v) {
    this.forEach(function (item) {
        item.textContent = v;
    });
    return this;
};

balalaika.fn.attr = function (k, v) {
    this.forEach(function (item) {
        item.setAttribute(k, v);
    });
    return this;
};

balalaika.fn.trigger = function (eventName, options) {
    this.forEach(function (item) {
        if (window.CustomEvent) {
            var event = new CustomEvent(eventName, {detail: options});
        } else {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, options);
        }

        item.dispatchEvent(event);
    });
    return this;
};

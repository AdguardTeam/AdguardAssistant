/**
 * String utils
 */
var StringUtils = { // jshint ignore:line
    /**
     * Replaces the format items in a specified String with the text equivalents of the values of corresponding object instances.
     * @param format
     */
    format: function (format) {
        for (var i = 1; i < arguments.length; i++) {
            format = format.replace('{' + (i - 1) + '}', arguments[i]);
        }
        return format;
    }
};

/**
 * Common utils
 * @type {{getParentsLevel: Function, getNodeName: Function, getAllChilds: Function, getSingleChildren: Function, cropDomain: Function}}
 */
var CommonUtils = { // jshint ignore:line

    getParentsLevel: function (element) {
        var parent = element;
        var parentArr = [];
        while ((parent = parent.parentNode) && this.getNodeName(parent) !== "BODY") {
            parentArr.push(parent);
        }
        return parentArr;
    },

    getNodeName: function (element) {
        return element && element.nodeName ? element.nodeName.toUpperCase() : "";
    },

    getAllChildren: function (element) {
        var childArray = [];
        var child = element;
        while ((child = this.getSingleChildren(child))) {
            childArray.push(child);
        }
        return childArray;
    },

    getSingleChildren: function (element) {
        var children = element.childNodes;
        if (children) {
            var count = 0;
            var child;
            var i;
            for (i = 0; i < children.length; i++) {
                if (children[i].nodeType === 1) {
                    child = children[i];
                    count++;
                }
            }
            return count === 1 ? child : null;
        }
    },

    cropDomain: function (domain) {
        return domain.replace("www.", "").replace(/:\d+/, '');
    },

    /**
     * Force clear page cache
     * see: https://stackoverflow.com/questions/10719505/force-a-reload-of-page-in-chrome-using-javascript-no-cache/27058362#27058362
     * @param notReload  reload page if false and do not reload page if true
     */
    reloadPageBypassCache: function(notReload) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', window.location.href, true);

        xhr.setRequestHeader('Pragma', 'no-cache');
        xhr.setRequestHeader('Expires', -1);
        xhr.setRequestHeader('Cache-Control', 'no-cache');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && !notReload) {
                window.location.reload(true);
            }
        };

        xhr.send();
    },

    /*
     * Function as like Object.assign()
     * @param {Object}
     * @return {Object}
     */
    objectAssign: function() {
        var from;
        var to = {};

        for (var s = 0; s < arguments.length; s++) {
            from = Object(arguments[s]);

            if (from != null) {
                for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                    }
                }
            }
        }

        return to;
    },

     /**
      * Multiplue event handler helper.
      * @param {Object}  elements  element or nodeList.
      * @param {String}  events    multiple events divided by space.
      * @param {Function}  eventHandler   event handler.
      * @param {Boolean}  useCapture   capture.
      * @return {Function} add/remove.
      */
    events: {
        add: function(elements, events, eventHandler, useCapture) {
            this.addRemoveEvents(true, elements, events, eventHandler, useCapture);
        },
        remove: function(elements, events, eventHandler, useCapture) {
            this.addRemoveEvents(false, elements, events, eventHandler, useCapture);
        },
        addRemoveEvents: function (add, elements, events, eventHandler, useCapture) {
            if (!elements || !events || !eventHandler) {
                return false;
            }

            var eventList = events.split(' ');

            if (!eventList || eventList.length < 1) {
                return false;
            }

            if (!elements.length) {
                elements = new Array(elements);
            }

            for (var el = 0; el < elements.length; el++) {
                for (var evt = 0; evt < eventList.length; evt++) {
                    if (!eventList[evt] || !eventList[evt].length) {
                        continue;
                    }

                    if (add) {
                        elements[el].addEventListener(eventList[evt], eventHandler, !!useCapture);
                    } else {
                        elements[el].removeEventListener(eventList[evt], eventHandler, !!useCapture);
                    }
                }
            }
        }
    }
};

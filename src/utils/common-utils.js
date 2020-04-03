export const cropDomain = (domain) => domain.replace('www.', '').replace(/:\d+/, '');

/**
 * Force clear the page cache
 * see: https://stackoverflow.com/questions/10719505/force-a-reload-of-page-in-chrome-using-javascript-no-cache/27058362#27058362
 * @param callback
 */
export const bypassCache = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href, true);

    xhr.setRequestHeader('Pragma', 'no-cache');
    xhr.setRequestHeader('Expires', '-1');
    xhr.setRequestHeader('Cache-Control', 'no-cache');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && callback) {
            callback();
        }
    };

    xhr.send();
};

/**
 * Reload page after bypassing cache
 */
export const reloadPageBypassCache = () => {
    bypassCache(() => {
        window.location.reload(true);
    });
};

/**
 * Multiple event handler helper.
 * @param {Object}  elements  element or nodeList.
 * @param {String}  events    multiple events divided by space.
 * @param {Function}  eventHandler   event handler.
 * @param {Boolean}  useCapture   capture.
 * @return {Function} add/remove.
 */
export const events = {
    add(elements, es, eventHandler, useCapture) {
        this.addRemoveEvents(true, elements, es, eventHandler, useCapture);
    },
    remove(elements, es, eventHandler, useCapture) {
        this.addRemoveEvents(false, elements, es, eventHandler, useCapture);
    },
    // eslint-disable-next-line consistent-return
    addRemoveEvents(add, elements, es, eventHandler, useCapture) {
        if (!elements || !es || !eventHandler) {
            return false;
        }

        const eventList = es.split(' ');

        if (!eventList || eventList.length < 1) {
            return false;
        }

        if (!elements.length) {
            // eslint-disable-next-line no-param-reassign
            elements = new Array(elements);
        }

        for (let el = 0; el < elements.length; el += 1) {
            for (let evt = 0; evt < eventList.length; evt += 1) {
                if (!eventList[evt] || !eventList[evt].length) {
                    // eslint-disable-next-line no-continue
                    continue;
                }

                if (add) {
                    elements[el].addEventListener(
                        eventList[evt],
                        eventHandler,
                        !!useCapture,
                    );
                } else {
                    elements[el].removeEventListener(
                        eventList[evt],
                        eventHandler,
                        !!useCapture,
                    );
                }
            }
        }
    },
};

/**
 * Common utils
 * @type {{
 * cropDomain: Function,
 * bypassCache: Function,
 * reloadPageBypassCache: Function,
 * events: Object
 * }}
 */
const CommonUtils = {
    cropDomain,
    bypassCache,
    reloadPageBypassCache,
    events,
};

export default CommonUtils;

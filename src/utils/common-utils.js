export const getNodeName = element => (element && element.nodeName ? element.nodeName.toUpperCase() : '');

export const getParentsLevel = (element) => {
    let parent = element;
    const parentArr = [];
    // eslint-disable-next-line no-cond-assign
    while ((parent = parent.parentNode) && getNodeName(parent) !== 'BODY') {
        parentArr.push(parent);
    }
    return parentArr;
};

// eslint-disable-next-line consistent-return
export const getSingleChildren = (element) => {
    const children = element.childNodes;
    if (children) {
        let count = 0;
        let child;
        for (let i = 0; i < children.length; i += 1) {
            if (children[i].nodeType === 1) {
                child = children[i];
                count += 1;
            }
        }
        return count === 1 ? child : null;
    }
};

export const getAllChildren = (element) => {
    const childArray = [];
    let child = element;
    // eslint-disable-next-line no-cond-assign
    while ((child = getSingleChildren(child))) {
        childArray.push(child);
    }
    return childArray;
};

export const cropDomain = domain => domain.replace('www.', '').replace(/:\d+/, '');

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

export const reloadPageBypassCache = () => {
    bypassCache(() => {
        window.location.reload(true);
    });
};

/**
 * TODO: Replace with Object.assign everywhere
 * Function as like Object.assign()
 */
export const objectAssign = (...args) => {
    let from;
    const to = {};

    for (let s = 0; s < args.length; s += 1) {
        // eslint-disable-next-line prefer-rest-params
        from = Object(args[s]);

        if (from != null) {
            // eslint-disable-next-line no-restricted-syntax
            for (const key in from) {
                if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                }
            }
        }
    }

    return to;
};

/**
 * Multiplue event handler helper.
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
 *
 * TODO: remove this object when refactor all files
 * @type {{
 * getParentsLevel: Function,
 * getNodeName: Function,
 * getAllChilds: Function,
 * getSingleChildren: Function,
 * cropDomain: Function
 * }}
 */
const CommonUtils = {
    getNodeName,
    getParentsLevel,
    getSingleChildren,
    getAllChildren,
    cropDomain,
    bypassCache,
    reloadPageBypassCache,
    objectAssign,
    events,
};

export default CommonUtils;

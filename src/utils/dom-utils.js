/**
 * Returns tag name for passed element
 * @param {Element} element target element
 */
export const getNodeName = (element) => (
    element && element.nodeName ? element.nodeName.toUpperCase() : ''
);

/**
 * Returns arrays of parents for passed element
 * @param {Element} element target element
 */
export const getParentsLevel = (element) => {
    let parent = element;
    const parentArr = [];
    // eslint-disable-next-line no-cond-assign
    while ((parent = parent.parentNode) && getNodeName(parent) !== 'BODY') {
        parentArr.push(parent);
    }
    return parentArr;
};

/**
 * Returns child element if it only one ELEMENT_NODE child
 * @param {Element} element target element
 */
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

/**
 * Returns all children for target element
 * @param {Element} element target element
 */
export const getAllChildren = (element) => {
    const childArray = [];
    let child = element;
    // eslint-disable-next-line no-cond-assign
    while ((child = getSingleChildren(child))) {
        childArray.push(child);
    }
    return childArray;
};

/**
 * Converts passed argument to array
 * Usually used for transformatin NodeList to simple Array
 * @param {any} elems
 */
export const toArray = (elems) => (elems && elems.length !== undefined
    ? Array.prototype.slice.call(elems)
    : [elems]);

/**
 * Adds passed classes to target element
 * @param {Element} elem target element
 * @param {string} className string where classess must be separeted with space
 */
export const addClass = (elem, className) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        const { classList } = item;
        classList.add(...className.split(/\s/));
    });
};

/**
 * Removes passed classes from target element
 * @param {Element} elem target element
 * @param {string} className string where classess must be separeted with space
 */
export const removeClass = (elem, className) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        const { classList } = item;
        classList.remove(...className.split(/\s/));
    });
};

/**
 * Checks whether class in target element
 * @param {Element} elem target element
 * @param {string} className target classname
 */
export const hasClass = (elem, className) => {
    const elems = toArray(elem);
    const [target] = elems;
    return !!(target.classList && target.classList.contains(className));
};

/**
 * Makes element visible via style.display = block
 * @param {Element} elem target element
 */
export const show = (elem) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style.display = 'block';
    });
};

/**
 * Makes element invisible via style.display = none
 * @param {Element} elem target element
 */
export const hide = (elem) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style.display = 'none';
    });
};

/**
 * Inlines css styles to target element
 * @param {Element} elem target element
 * @param {string} attr css name
 * @param {string} value css value
 */
export const addStyle = (elem, attr, value) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style[attr] = value;
    });
};

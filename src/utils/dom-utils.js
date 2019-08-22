/**
 * Converts passed argument to array
 * Usually used for transformatin NodeList to simple Array
 * @param {any} elems
 */
export const toArray = elems => (elems && elems.length !== undefined
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
    return target.classList !== undefined && target.classList.contains(className);
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

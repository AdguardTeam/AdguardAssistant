export const toArray = elems => (elems && elems.length !== undefined
    ? Array.prototype.slice.call(elems)
    : [elems]);


export default function $$(elem) {
    if (typeof elem === 'string') {
        return toArray(document.querySelectorAll(elem));
    }
    return elem;
}

export const addClass = (elem, className) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        const { classList } = item;
        classList.add(className.split(/\s/));
    });
};

export const removeClass = (elem, className) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        const { classList } = item;
        classList.remove(className.split(/\s/));
    });
};

export const hasClass = (elem, className) => {
    const elems = toArray(elem);
    const [target] = elems;
    return target.classList !== undefined && target.classList.contains(className);
};

export const show = (elem) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style.display = 'block';
    });
};

export const hide = (elem) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style.display = 'none';
    });
};

export const addStyle = (elem, attr, value) => {
    const elems = toArray(elem);
    elems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style[attr] = value;
    });
};

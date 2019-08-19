export default function $$(elem) {
    if (typeof elem === 'string') {
        return document.querySelectorAll(elem);
    }
    return elem;
}

export const toArray = elems => (elems && elems.length !== undefined
    ? Array.prototype.slice.call(elems)
    : [elems]);

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

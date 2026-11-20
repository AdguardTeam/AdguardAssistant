/**
 * Style sheets that the assistant adopts into the document.
 *
 * An adopted constructed style sheet is not an element in the page DOM, so a
 * page script cannot read the CSP nonce from it. The page can still reach the
 * sheet through `document.adoptedStyleSheets`, as it could reach the style
 * element before. The assistant falls back to a style element in browsers
 * without constructed style sheets.
 */
const adoptedSheets = {};

let isAdoptionChecked = false;
let isAdoptionSupported = false;

/**
 * Checks that this environment can adopt a constructed style sheet.
 *
 * Some browsers expose the API but refuse the assignment: a Firefox content
 * script before 153 goes through an Xray wrapper and throws on
 * `document.adoptedStyleSheets` (Bugzilla 1751346). The check adopts an empty
 * sheet once, so such a browser falls back to a style element instead of
 * writing nothing.
 *
 * @returns {boolean} True if adoption works here.
 */
export const canAdoptStyleSheets = () => {
    if (typeof CSSStyleSheet !== 'function'
        || typeof document === 'undefined'
        || !('adoptedStyleSheets' in document)) {
        return false;
    }

    if (!isAdoptionChecked) {
        isAdoptionChecked = true;

        try {
            const sheet = new CSSStyleSheet();
            const current = document.adoptedStyleSheets;

            document.adoptedStyleSheets = [...current, sheet];
            document.adoptedStyleSheets = current;
            isAdoptionSupported = true;
        } catch (e) {
            isAdoptionSupported = false;
        }
    }

    return isAdoptionSupported;
};

/**
 * Returns the adopted style sheet for the id.
 *
 * @param {string} id Sheet id.
 * @returns {CSSStyleSheet|null} Adopted sheet or null.
 */
export const getAdoptedStyleSheet = (id) => adoptedSheets[id] || null;

/**
 * Adopts a constructed style sheet for the id.
 *
 * @param {string} id Sheet id.
 * @param {string} [styles] Initial CSS text.
 * @returns {CSSStyleSheet|null} Adopted sheet, or null when the browser does
 * not support constructed style sheets.
 */
export const adoptStyleSheet = (id, styles = '') => {
    if (!canAdoptStyleSheets()) {
        return null;
    }

    try {
        if (!adoptedSheets[id]) {
            const createdSheet = new CSSStyleSheet();

            if (styles) {
                createdSheet.replaceSync(styles);
            }

            adoptedSheets[id] = createdSheet;
        }

        const sheet = adoptedSheets[id];

        // The page can drop the sheet from the document, so adopt it again
        // instead of writing into a sheet that no longer applies.
        if (document.adoptedStyleSheets.indexOf(sheet) < 0) {
            document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
        }

        return sheet;
    } catch (e) {
        delete adoptedSheets[id];

        return null;
    }
};

/**
 * Removes the adopted style sheet for the id.
 *
 * @param {string} id Sheet id.
 */
export const removeAdoptedStyleSheet = (id) => {
    const sheet = adoptedSheets[id];

    if (!sheet) {
        return;
    }

    try {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter((item) => item !== sheet);
    } catch (e) {
        // The page can make the property read-only, the sheet is gone anyway.
    }

    delete adoptedSheets[id];
};

/**
 * Style sheet utils
 * @type {{
 * canAdoptStyleSheets: Function,
 * getAdoptedStyleSheet: Function,
 * adoptStyleSheet: Function,
 * removeAdoptedStyleSheet: Function
 * }}
 */
const StyleSheetUtils = {
    canAdoptStyleSheets,
    getAdoptedStyleSheet,
    adoptStyleSheet,
    removeAdoptedStyleSheet,
};

export default StyleSheetUtils;

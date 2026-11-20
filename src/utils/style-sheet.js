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

/**
 * Checks that the browser adopts constructed style sheets.
 *
 * @returns {boolean} True if `document.adoptedStyleSheets` is supported.
 */
export const supportsAdoptedStyleSheets = () => typeof CSSStyleSheet === 'function'
    && typeof document !== 'undefined'
    && 'adoptedStyleSheets' in document;

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
    if (!supportsAdoptedStyleSheets()) {
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
 * supportsAdoptedStyleSheets: Function,
 * getAdoptedStyleSheet: Function,
 * adoptStyleSheet: Function,
 * removeAdoptedStyleSheet: Function
 * }}
 */
const StyleSheetUtils = {
    supportsAdoptedStyleSheets,
    getAdoptedStyleSheet,
    adoptStyleSheet,
    removeAdoptedStyleSheet,
};

export default StyleSheetUtils;

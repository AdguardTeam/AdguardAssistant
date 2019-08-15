/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

// https://drafts.csswg.org/cssom/#serialize-an-identifier
export default function cssEscape(value) {
    if (arguments.length === 0) {
        throw new TypeError('`CSS.escape` requires an argument.');
    }
    const string = String(value);
    const { length } = string;
    let index = -1;
    let codeUnit;
    let result = '';
    const firstCodeUnit = string.charCodeAt(0);
    // eslint-disable-next-line no-plusplus
    while (++index < length) {
        codeUnit = string.charCodeAt(index);
        // Note: there’s no need to special-case astral symbols, surrogate
        // pairs, or lone surrogates.

        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
        // (U+FFFD).
        if (codeUnit === 0x0000) {
            result += '\uFFFD';
            // eslint-disable-next-line no-continue
            continue;
        }

        if (
            // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            // eslint-disable-next-line eqeqeq
            (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F
            // If the character is the first character and is in the range [0-9]
            // (U+0030 to U+0039), […]
            || (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039)
            // If the character is the second character and is in the range [0-9]
            // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
            || (
                index === 1
                && codeUnit >= 0x0030
                && codeUnit <= 0x0039
                // eslint-disable-next-line eqeqeq
                && firstCodeUnit == 0x002D
            )
        ) {
            // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
            result += `\\${codeUnit.toString(16)} `;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (
            // If the character is the first character and is a `-` (U+002D), and
            // there is no second character, […]
            index === 0
            && length === 1
            // eslint-disable-next-line eqeqeq
            && codeUnit == 0x002D
        ) {
            result += `\\${string.charAt(index)}`;
            // eslint-disable-next-line no-continue
            continue;
        }

        // If the character is not handled by one of the above rules and is
        // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
        // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
        // U+005A), or [a-z] (U+0061 to U+007A), […]
        if (
            codeUnit >= 0x0080
            // eslint-disable-next-line eqeqeq
            || codeUnit == 0x002D
            // eslint-disable-next-line eqeqeq
            || codeUnit == 0x005F
            || (codeUnit >= 0x0030 && codeUnit <= 0x0039)
            || (codeUnit >= 0x0041 && codeUnit <= 0x005A)
            || (codeUnit >= 0x0061 && codeUnit <= 0x007A)
        ) {
            // the character itself
            result += string.charAt(index);
            // eslint-disable-next-line no-continue
            continue;
        }

        // Otherwise, the escaped character.
        // https://drafts.csswg.org/cssom/#escape-a-character
        result += `\\${string.charAt(index)}`;
    }
    return result;
}

const { LOCALES_EQUIVALENTS_MAP } = require('./constants');

/**
 * Returns equivalent of specified locale code
 * @param {string} locale locale
 */
const getEquivalent = (locale) => LOCALES_EQUIVALENTS_MAP[locale] || locale;

/**
 * Normalizes locale code before validation.
 *
 * @param {string} rawLocale Locale code to normalize.
 *
 * @returns {string} Normalized locale code.
 *
 * @example
 * 'pt_BR' -> 'pt_br'
 * 'es_419' -> 'es'
 * 'sr-Latn' -> 'sr_latn'
 */
const normalizeLocale = (rawLocale) => {
    // locale should be lowercase, e.g. 'pt_br', not 'pt_BR'
    // and with underscore, not dash, e.g. 'sr_latn', not 'sr-latn'
    const locale = rawLocale.toLowerCase().replace('-', '_');

    return getEquivalent(locale);
};

module.exports = {
    getEquivalent,
    normalizeLocale,
};

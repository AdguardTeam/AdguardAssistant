const path = require('path');
const fs = require('fs-extra');

const { validator } = require('@adguard/translate');

const { cliLog } = require('./cli-log');
const {
    BASE_LOCALE,
    THRESHOLD_PERCENTAGE,
    LOCALES_EQUIVALENTS_MAP,
    REQUIRED_LOCALES,
    LOCALES,
    LOCALES_DIR,
    LOCALE_DATA_FILENAME,
} = require('./constants');
const { normalizeLocale } = require('./helpers');

/**
 * @typedef {Object} Result Validation result for locale.
 * @property {string} locale Locale code.
 * @property {number} level %, current level of translated.
 * @property {Array<string>} untranslatedStrings Array of untranslated strings.
 * @property {Array} invalidTranslations Array of invalid translations.
 */

/**
 * Logs translations readiness (default validation process).
 *
 * @param {Result[]} results Array of validation results.
 * @param {boolean} [isMinimum=false] If true, only critical errors are logged.
 */
const printTranslationsResults = (results, isMinimum = false) => {
    cliLog.info('Translations readiness:');
    results.forEach((r) => {
        const record = `${r.locale} -- ${r.level}%`;
        if (r.level < THRESHOLD_PERCENTAGE) {
            cliLog.warningRed(record);
            if (r.untranslatedStrings.length > 0) {
                cliLog.warning('  untranslated:');
                r.untranslatedStrings.forEach((str) => {
                    cliLog.warning(`    - ${str}`);
                });
            }
            if (!isMinimum) {
                if (r.invalidTranslations.length > 0) {
                    cliLog.warning('  invalid:');
                    r.invalidTranslations.forEach((obj) => {
                        cliLog.warning(`    - ${obj.key} -- ${obj.error}`);
                    });
                }
            }
        } else {
            cliLog.success(record);
        }
    });
};

/**
 * Logs invalid translations (critical errors).
 *
 * @param {Result[]} criticals Array of critical validation results.
 */
const printCriticalResults = (criticals) => {
    cliLog.warning('Invalid translated string:');
    criticals.forEach((cr) => {
        cliLog.warningRed(`${cr.locale}:`);
        cr.invalidTranslations.forEach((obj) => {
            cliLog.warning(`   - ${obj.key} -- ${obj.error}`);
        });
    });
};

/**
 * Retrieves translations for a specific locale.
 *
 * @param {string} locale Locale identifier (e.g., 'en', 'fr') to fetch translations for.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing key-value pairs of translation strings.
 *
 * @throws If the file for the specified locale cannot be read or parsed.
 */
const getLocaleTranslations = async (rawLocale) => {
    const locale = LOCALES_EQUIVALENTS_MAP[rawLocale] || rawLocale;
    const filePath = path.join(__dirname, LOCALES_DIR, locale, LOCALE_DATA_FILENAME);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};

/**
 * Compares two arrays and returns true if they have the same elements
 * @param {Array} arr1 First array
 * @param {Array} arr2 Second array
 * @returns {boolean} True if arrays are equal
 */
const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    for (let i = 0; i < sortedArr1.length; i += 1) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    return true;
};

/**
 * Retrieves the value of a translation string.
 *
 * Needed since some value may be stored as an object value,
 * while others may be stored in its `message` property.
 *
 * @example
 * ```
 * {
 *     "assistant_select_element_start": "Start",
 *     "menu_block_ad_on_site": {
 *         "message": "Block ad on this website"
 *     },
 * }
 * ```
 *
 * @param {Object} translationData Translation data.
 * @param {string} key Translation key.
 *
 * @returns {string | undefined} Translation value or undefined if not found.
 */
const getStringValue = (translationData, key) => {
    return translationData[key].message || translationData[key];
};

/**
 * @typedef {Object} InvalidValidation
 * @property {string} key Key of the base locale string.
 * @property {string} error Error message.
 */

/**
 * Validates that localized string correspond by structure to base locale string.
 *
 * @param {string} baseKey Key of the base locale string.
 * @param {object} baseLocaleTranslations Translations of the base locale.
 * @param {string} rawLocale Locale to validate.
 * @param {object} localeTranslations Translations of the locale to validate.
 *
 * @returns {InvalidValidation | undefined} Validation result if error occurred,
 * otherwise undefined.
 */
const validateMessage = (baseKey, baseLocaleTranslations, rawLocale, localeTranslations) => {
    const baseMessageValue = getStringValue(baseLocaleTranslations, baseKey);
    if (!baseMessageValue) {
        return {
            key: baseKey,
            error: `Base locale does not have a message with key ${baseKey}`,
        };
    }

    const localeMessageValue = getStringValue(localeTranslations, baseKey);
    if (!localeMessageValue) {
        return {
            key: baseKey,
            error: `Locale ${rawLocale} does not have a message with key ${baseKey}`,
        };
    }

    const locale = normalizeLocale(rawLocale);

    let validation;
    try {
        if (!validator.isTranslationValid(
            baseMessageValue,
            localeMessageValue,
            locale,
        )) {
            throw new Error('Invalid translation');
        }
    } catch (error) {
        validation = { key: baseKey, error };
    }
    return validation;
};

/**
 * @typedef {Object} ValidationFlags
 * @property {boolean} [isMinimum=false] for minimum level of validation:
 * critical errors for all and full translations level for our locales
 * @property {boolean} [isInfo=false] for logging translations info without throwing the error
 */

/**
 * Checks locales translations readiness
 *
 * @param {string[]} locales List of locales.
 * @param {ValidationFlags} flags Validation flags.
 *
 * @returns {Promise<Result[]>} Array of validation results.
 */
const checkTranslations = async (locales, flags = {}) => {
    const { isMinimum = false, isInfo = false } = flags;
    const baseLocaleTranslations = await getLocaleTranslations(BASE_LOCALE);
    const baseMessages = Object.keys(baseLocaleTranslations);
    const baseMessagesCount = baseMessages.length;

    // Process each locale and check translations
    const translationResults = await Promise.all(locales.map(async (locale) => {
        const localeTranslations = await getLocaleTranslations(locale);
        const localeMessages = Object.keys(localeTranslations);
        const localeMessagesCount = localeMessages.length;

        const untranslatedStrings = [];
        const invalidTranslations = [];
        baseMessages.forEach((baseKey) => {
            if (!localeMessages.includes(baseKey)) {
                untranslatedStrings.push(baseKey);
            } else {
                const validationError = validateMessage(
                    baseKey,
                    baseLocaleTranslations,
                    locale,
                    localeTranslations,
                );
                if (validationError) {
                    invalidTranslations.push(validationError);
                }
            }
        });

        const validLocaleMessagesCount = localeMessagesCount - invalidTranslations.length;

        const strictLevel = ((validLocaleMessagesCount / baseMessagesCount) * 100);
        const level = Math.round((strictLevel + Number.EPSILON) * 100) / 100;

        return {
            locale, level, untranslatedStrings, invalidTranslations,
        };
    }));

    const filteredCriticalResults = translationResults.filter((result) => {
        return result.invalidTranslations.length > 0;
    });

    const filteredReadinessResults = translationResults.filter((result) => {
        return isMinimum
            ? result.level < THRESHOLD_PERCENTAGE && REQUIRED_LOCALES.includes(result.locale)
            : result.level < THRESHOLD_PERCENTAGE;
    });

    if (isInfo) {
        printTranslationsResults(translationResults);
    } else {
        // critical errors and required locales translations levels check
        if (isMinimum) {
            let isSuccess = true;
            // check for invalid strings
            if (filteredCriticalResults.length === 0) {
                cliLog.success('No invalid translations found');
            } else {
                isSuccess = false;
                printCriticalResults(filteredCriticalResults);
                cliLog.warningRed('Locales above should not have invalid strings');
            }
            // check for translations readiness for required locales
            if (filteredReadinessResults.length === 0) {
                cliLog.success('Our locales have required level of translations');
            } else {
                isSuccess = false;
                printTranslationsResults(filteredReadinessResults, isMinimum);
                cliLog.warningRed('In-house locales should be done for 100%');
            }
            if (!isSuccess) {
                // throw error finally
                throw new Error('Locales validation failed!');
            }
        }
        // common translations check
        if (filteredReadinessResults.length === 0) {
            let message = `Level of translations is required for locales: ${locales.join(', ')}`;
            if (areArraysEqual(locales, LOCALES)) {
                message = 'All locales have required level of translations';
            }
            cliLog.success(message);
        } else {
            printTranslationsResults(filteredReadinessResults);
            throw new Error('Locales above should be done for 100%');
        }
    }

    return translationResults;
};

module.exports = {
    checkTranslations,
};

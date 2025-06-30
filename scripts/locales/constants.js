const [{
    // Base locale
    base_locale: BASE_LOCALE,
    // Twosky project see mapping https://twosky.int.agrd.dev/api/v1/mapping
    project_id: PROJECT_ID,
    // Available translations list
    languages: LANGUAGES,
    // Crowdin files for downloading/uploading
    localizable_files: LOCALIZABLE_FILES,
}] = require('../../.twosky.json');

const LOCALES_DIR = '../../locales';

/**
 * Users locale may be defined with only two chars (language code)
 * Here we provide a map of equivalent translation for such locales
 */
const LOCALES_EQUIVALENTS_MAP = {
    'pt-BR': 'pt',
    'zh-CN': 'zh',
};

const LOCALES = Object.keys(LANGUAGES);

const REQUIRED_LOCALES = [
    'de',
    'es',
    'fr',
    'it',
    'ja',
    'ko',
    'pt',
    'pt-PT',
    'ru',
    'zh',
    'zh-TW',
];

/**
 * Threshold percentage for validation of required locales.
 */
const THRESHOLD_PERCENTAGE = 100;

/**
 * Name of the locale data file.
 */
const LOCALE_DATA_FILENAME = 'messages.json';

module.exports = {
    LOCALES_EQUIVALENTS_MAP,
    BASE_LOCALE,
    PROJECT_ID,
    LANGUAGES,
    LOCALIZABLE_FILES,
    LOCALES,
    REQUIRED_LOCALES,
    THRESHOLD_PERCENTAGE,
    LOCALES_DIR,
    LOCALE_DATA_FILENAME,
};

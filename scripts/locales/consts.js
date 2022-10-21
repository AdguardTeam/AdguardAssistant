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

/**
 * Users locale may be defined with only two chars (language code)
 * Here we provide a map of equivalent translation for such locales
 */
const LOCALES_EQUIVALENTS_MAP = {
    'pt-BR': 'pt',
    'zh-CN': 'zh',
};

module.exports = {
    LOCALES_EQUIVALENTS_MAP,
    BASE_LOCALE,
    PROJECT_ID,
    LANGUAGES,
    LOCALIZABLE_FILES,
};

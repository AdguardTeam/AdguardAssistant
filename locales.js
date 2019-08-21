/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const twoskyConfig = require('./.twosky.json')[0];

// URLs
const BASE_URL = 'https://twosky.adtidy.org/api/v1';
const BASE_DOWNLOAD_URL = `${BASE_URL}/download`;
const BASE_UPLOAD_URL = `${BASE_URL}/upload`;
// Directory where locales should be stored
const LOCALES_DIR = './locales';
// Base locale
const BASE_LOCALE = twoskyConfig.base_locale;
// Twosky project see mapping https://twosky.adtidy.org/api/v1/mapping
const CROWDIN_PROJECT = twoskyConfig.project_id;
// Available translations list
const LOCALES = Object.keys(twoskyConfig.languages);
// Crowdin files for downloading/uploading
const CROWDIN_FILES = twoskyConfig.localizable_files
    .map(pathToFile => pathToFile.split('/').pop());

/**
 * Users locale may be defined with only two chars (language code)
 * Here we provide a map of equivalent translation for such locales
 */
const LOCALES_EQUIVALENTS_MAP = {
    'pt-BR': 'pt',
    'zh-CN': 'zh',
};

/**
 * Build query string for downloading tranlations
 * @param {string} lang locale code
 * @param {string} file crowdin file name
 */
const getQueryString = (lang, file) => {
    let res = '?format=json';
    res += `&language=${lang}`;
    res += `&project=${CROWDIN_PROJECT}`;
    res += `&filename=${file}`;
    return res;
};

/**
 * Iterates over translation object and removes keys with empty values
 *
 * For some reasons "Skip untranslated strings" option does not work properly with json files
 * and Crowdin returns translations with empty string.
 * Here we exclude such translations to keep changeset clear.
 *
 * @param {Object} data translation
 */
const removeEmptyStrings = (data) => {
    const result = {};
    Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'string') {
            if (value !== '') {
                result[key] = value;
            }
        } else if (typeof value === 'object') {
            // eslint-disable-next-line dot-notation
            if (value['message'] !== '') {
                result[key] = value;
            }
        }
    });
    return result;
};

/**
 * Returns equivalent of specified locale code
 * @param {string} locale locale
 */
const getEquivalent = locale => LOCALES_EQUIVALENTS_MAP[locale] || locale;

/**
 * Build form data for uploading tranlation
 * @param {string} file crowdin file name
 */
const getFormData = (file) => {
    const pathToBaseFile = path.resolve(LOCALES_DIR, BASE_LOCALE, file);
    const body = new FormData();

    body.append('format', 'json');
    body.append('language', BASE_LOCALE);
    body.append('project', CROWDIN_PROJECT);
    body.append('filename', `${file}`);
    body.append('file', fs.createReadStream(pathToBaseFile));
    return body;
};

/**
 * Returns link for downloading translations
 * @param {string} lang locale code
 * @param {string} file crowdin file name
 */
const getDownloadlURL = (lang, file) => BASE_DOWNLOAD_URL + getQueryString(lang, file);

/**
 * Save file by path with passed content
 * @param {string} filePath path to file
 * @param {any} content
 */
function saveFile(filePath, content) {
    fs.outputJson(filePath, content, { spaces: 4 });
}

/**
 * Entry point for downloading translations
 */
function download() {
    LOCALES.forEach((lang) => {
        CROWDIN_FILES.forEach(async (file) => {
            try {
                const { data } = await axios.get(getDownloadlURL(lang, file));
                const resultLocale = getEquivalent(lang);
                const filePath = path.resolve(LOCALES_DIR, resultLocale, `${file}`);
                const formatted = removeEmptyStrings(data);
                saveFile(filePath, formatted);
            } catch (e) {
                console.log(getDownloadlURL(lang, file));
                console.log(e.message);
            }
        });
    });
}

/**
 * Entry point for uploading translations
 */
function upload() {
    CROWDIN_FILES.forEach(async (filename) => {
        try {
            const formData = getFormData(filename);
            await axios.post(BASE_UPLOAD_URL, formData, {
                contentType: 'multipart/form-data',
                headers: formData.getHeaders(),
            });
            console.log('Successfully uploaded');
        } catch (e) {
            console.log(e);
        }
    });
}

/**
 * You need set environment variable LOCALES=DOWNLOAD|UPLOAD when run the script
 */
if (process.env.LOCALES === 'DOWNLOAD') {
    download();
} else if (process.env.LOCALES === 'UPLOAD') {
    upload();
} else {
    console.log('Option DOWNLOAD/UPLOAD locales is not set');
}

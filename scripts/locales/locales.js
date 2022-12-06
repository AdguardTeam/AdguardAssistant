/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const {
    BASE_LOCALE,
    PROJECT_ID,
    LANGUAGES,
    LOCALIZABLE_FILES,
    LOCALES_EQUIVALENTS_MAP,
} = require('./consts');

// URLs
const BASE_URL = 'https://twosky.int.agrd.dev/api/v1';
const BASE_DOWNLOAD_URL = `${BASE_URL}/download`;
const BASE_UPLOAD_URL = `${BASE_URL}/upload`;
// Directory where locales should be stored
const LOCALES_DIR = './locales';
const CROWDIN_PROJECT = PROJECT_ID;
const LOCALES = Object.keys(LANGUAGES);
const CROWDIN_FILES = LOCALIZABLE_FILES
    .map((pathToFile) => pathToFile.split('/')
        .pop());

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
    Object.entries(data)
        .forEach(([key, value]) => {
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
const getEquivalent = (locale) => LOCALES_EQUIVALENTS_MAP[locale] || locale;

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
const getDownloadURL = (lang, file) => BASE_DOWNLOAD_URL + getQueryString(lang, file);

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
async function download() {
    // eslint-disable-next-line no-restricted-syntax
    for (const lang of LOCALES) {
        // eslint-disable-next-line no-restricted-syntax
        for (const file of CROWDIN_FILES) {
            const url = getDownloadURL(lang, file);
            try {
                console.log('Downloading:', url);
                // eslint-disable-next-line no-await-in-loop
                const { data } = await axios.get(url);
                const resultLocale = getEquivalent(lang);
                const filePath = path.resolve(LOCALES_DIR, resultLocale, `${file}`);
                const formatted = removeEmptyStrings(data);
                saveFile(filePath, formatted);
            } catch (e) {
                console.log('Error on downloading url:', url);
                console.log(e.message);
            }
        }
    }
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
    download().catch((e) => {
        console.log(e);
        process.exit(1);
    });
} else if (process.env.LOCALES === 'UPLOAD') {
    upload();
} else {
    console.log('Option DOWNLOAD/UPLOAD locales is not set');
}

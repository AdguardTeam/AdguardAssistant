const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const {
    BASE_LOCALE,
    PROJECT_ID,
    LOCALIZABLE_FILES,
    LOCALES,
    LOCALES_DIR,
} = require('./constants');
const { checkTranslations } = require('./validate');
const { getEquivalent } = require('./helpers');
const { cliLog } = require('./cli-log');

// URLs
const BASE_URL = 'https://twosky.int.agrd.dev/api/v1';
const BASE_DOWNLOAD_URL = `${BASE_URL}/download`;
const BASE_UPLOAD_URL = `${BASE_URL}/upload`;

const CROWDIN_FILES = LOCALIZABLE_FILES
    .map((pathToFile) => pathToFile.split('/')
        .pop());

/**
 * Build query string for downloading translations
 * @param {string} lang locale code
 * @param {string} file crowdin file name
 */
const getQueryString = (lang, file) => {
    let res = '?format=json';
    res += `&language=${lang}`;
    res += `&project=${PROJECT_ID}`;
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
 * Build form data for uploading translation
 * @param {string} file crowdin file name
 */
const getFormData = (file) => {
    const pathToBaseFile = path.resolve(__dirname, LOCALES_DIR, BASE_LOCALE, file);
    const body = new FormData();

    body.append('format', 'json');
    body.append('language', BASE_LOCALE);
    body.append('project', PROJECT_ID);
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
                cliLog.info(`Downloading: ${url}...`);
                // eslint-disable-next-line no-await-in-loop
                const { data } = await axios.get(url);
                const resultLocale = getEquivalent(lang);
                const filePath = path.resolve(__dirname, LOCALES_DIR, resultLocale, `${file}`);
                const formatted = removeEmptyStrings(data);
                saveFile(filePath, formatted);
                cliLog.success(`Downloaded ${file} for ${resultLocale}`);
            } catch (e) {
                cliLog.error(`Error on downloading url: ${url}`);
                cliLog.error(e.message);
            }
        }
    }
}

/**
 * Entry point for uploading translations
 */
async function upload() {
    CROWDIN_FILES.forEach(async (filename) => {
        try {
            const formData = getFormData(filename);
            await axios.post(BASE_UPLOAD_URL, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            cliLog.success(`Successfully uploaded ${filename}`);
        } catch (e) {
            cliLog.error(e.message);
        }
    });
}

async function validateRequired() {
    await checkTranslations(LOCALES, { isMinimum: true });
}

async function validateAll() {
    await checkTranslations(LOCALES);
}

/**
 * You need set environment variable LOCALES when run the script. Available options:
 * - DOWNLOAD
 * - VALIDATE-ALL
 * - VALIDATE-MIN
 * - UPLOAD
 */
const main = async () => {
    if (process.env.LOCALES === 'DOWNLOAD') {
        try {
            await download();
        } catch (e) {
            cliLog.error(e.message);
            process.exit(1);
        }
        await validateRequired();
    } else if (process.env.LOCALES === 'VALIDATE-ALL') {
        await validateAll();
    } else if (process.env.LOCALES === 'VALIDATE-MIN') {
        await validateRequired();
    } else if (process.env.LOCALES === 'UPLOAD') {
        await upload();
    } else {
        cliLog.error('No valid LOCALES environment variable set');
        process.exit(1);
    }
};

(async () => {
    await main();
})();

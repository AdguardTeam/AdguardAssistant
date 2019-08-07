/* eslint-disable */
const path = require('path');
const glob = require('glob');
const copyfile = require('cp-file');
const replaceInFile = require('replace-in-file');
const concat = require('concat');

const PLUGIN_NAME = 'MetaDataPlugin';
const DEFAULT_METADATA_TEMPLATE = './meta.template.js';
const DEFAULT_LOCALES_DIR = './locales';
const DEFAULT_POSTFIX = '';
const BASE_LOCALE = 'en';

/**
 * Replace multiple strings in file
 * @param {Object} source object with interace`{ [key: string]: string }
 * @param {string} filePath path to file for replacing
 */
function replaceWithMultipleSource(source, filePath) {
    const replaceOptions = Object.entries(source)
        .reduce((acc, [key, value]) => ({
            from: [...acc.from, `[${key}]`],
            to: [...acc.to, value || ''],
        }), { from: [], to: [] });

    replaceOptions.files = filePath;
    replaceInFile.sync(replaceOptions);
}

/**
 * Replace string with value in file
 * @param {string} from source string, placeholder
 * @param {*} to result string
 * @param {*} filePath path to file for replacing
 */
function replace(from, to, filePath) {
    const replaceOptions = {
        from, to,
        files: filePath,
    };
    replaceInFile.sync(replaceOptions);
}

/**
 * Generate metadata file
 * @param {Compilation} compilation webpack's compiler Compilation object
 * @param {Function} callback function which should be executed in the end of the plugin's work
 * @param {Object} options passed to plugin constructor options
 */
function createMetadata(compilation, callback, options) {
    const {
        filename,
        metadataTemplate = DEFAULT_METADATA_TEMPLATE,
        localesDir = DEFAULT_LOCALES_DIR,
        postfix = DEFAULT_POSTFIX,
        fields = {},
    } = options;

    // Calculate result metadata file path
    const metadataOutputPath = path.join(compilation.outputOptions.path, filename);

    // Copy template file to output directory
    copyfile.sync(metadataTemplate, metadataOutputPath);

    // Separate fields which have multiple translations and simple fields
    const multipleFields = {};
    const singleFields = {};
    Object.entries(fields).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            multipleFields[key] = value;
        } else {
            singleFields[key] = value;
        }
    });

    // Replace simple fields
    replaceWithMultipleSource(singleFields, metadataOutputPath);

    // Get all locales paths
    glob(`${localesDir}/**/*.meta.json`, (er, translations) => {
        if (er) {
            console.error(er);
            throw new Error(er);
        }

        /**
         * Grab the language from path to translations file
         * @param {string} str path to translations file
         * @example
         * ```
         * // './locales/en.json' => 'en'
         * // './locales/en/messages.json' => 'en'
         * ```
         */
        const getLangFromPathString = (str) => {
            const regexp = new RegExp(`${localesDir}|messages|json|meta|\\.|\\/`, 'gi');
            let lang = str.replace(regexp, '');
            return lang;
        }

        /**
         * Get value from translation file by key
         * @param {string} messageKey the key from translation
         * @param {Object} translation 
         */
        const getMessageValue = (messageKey, translation) => {
            const arr = messageKey.split('.');
            const lastKey = arr[arr.length - 1];
            let resultObject = translation;
            
            for (let i = 0; i < arr.length - 1; i += 1) {
                if(typeof resultObject[arr[i]] === 'object') {
                    resultObject = resultObject[arr[i]];
                } else {
                    resultObject = {};
                }
            }

            console.log(resultObject);

            if (typeof resultObject[lastKey] === 'object') {
                return resultObject[lastKey]['message'];
            }
            return resultObject[lastKey];
        }

        /**
         * Building value string from locales
         * @param {string} fields result string
         * @param {Object} translation translation object
         * @param {number} index current index
         * @param {Object} fieldOptions object with options for metadata field
         * @example
         * ```
         * // example output: `// desctiption:ru Пример\n// desctiption:en Example\n`
         * ```
         */
        const getField = (translation, fieldOptions) => {
            const json = require(translation);
            const { metaName, messageKey, usePostfix } = fieldOptions;

            const value = getMessageValue(messageKey, json);
            if (!value) {
                return '';
            }

            // define lang for field
            const lang = getLangFromPathString(translation);
            const langTxt = lang === BASE_LOCALE ? '' : `:${lang}`;
            const post = usePostfix ? `${postfix}` : '';

            // concat current field with already calculated fields
            return [lang, `@${metaName}${langTxt} ${value} ${post}`];
        }

        // replace fields with multiple values from translations
        Object.entries(multipleFields).forEach(([key, fieldOptions]) => {
            const fieldsString = translations
                .map(translation => getField(translation, fieldOptions))
                .filter(str => !!str)
                .sort(([lang]) => lang === BASE_LOCALE ? -1 : 1)
                .map(([lang, field], i, ar) => {
                    if (i !== 0) {
                        field = `// ${field}`
                    };
                    if (i !== ar.length - 1) {
                        field += '\n';
                    }
                    return field;
                })
                .join('');

            // replace needed key with result string
            replace(`[${key}]`, fieldsString, metadataOutputPath);
        });

        callback();
    });
}

/**
 * Concats result metadatafile with output code
 * @param {Object} compilation Webpack compilation object
 * @param {Object} options passed to plugin constructor options
 */
function concatMetaWithOutput(compilation, options) {
    const { filename } = options;
    const metadataOutputPath = path.join(compilation.outputOptions.path, filename);

    compilation.chunks.forEach(chunk => {
        chunk.files.forEach(file => {
            const chunkOutputPath = path.resolve(compilation.outputOptions.path, file);
            concat([metadataOutputPath, chunkOutputPath], chunkOutputPath);
        });
    });
}

/**
 * MetaDataPlugin
 * Creates a copy of metadata template file and replaces placeholders to values
 */
class MetaDataPlugin {
    /**
     * @param {Object} options
     * @property {string} postfix string which will be added to field (need to set `usePostfix` for specifing the fields with postfix)
     * @property {string} metadataTemplate Default './meta.template.js' path to template file with meta.
     * @property {string} localesDir Default './locales'. path to locales directory.
     * @property {Object} fields object with key:value pairs where `key` means placeholder in template file,
     * if value is Object, it means that this value should be taken from locales files, in that case
     * following properties should be defined in this object:
     * `messageKey` - message key from file with translations
     * `metaName` - the name of metadata sting
     * `usePostfix` - boolean, is should be postfix added for this field
     *
     * @example
     * ```
     * postfix: 'Dev',
     * metadataTemplate: './some-meta.template.js'
     * localesDir: './_locales',
     * fields: {
     *    NAME: {
     *        messageKey: 'name',
     *        metaName: 'name',
     *        usePostfix: true
     *    },
     *    DESCRIPTION: {
     *        messageKey: 'description',
     *        metaName: 'description'
     *    },
     *    DOWNLOAD_URL: 'https://example.com',
     * }
     * ```
     */
    constructor(options) {
        if (!options.filename) {
            throw new Error('Property "filename" is not defined for metadata file');
        }
        this.options = {
            ...options,
            filename: options.filename + '.meta.js'
        };
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync(PLUGIN_NAME,
            (compilation, callback) => createMetadata(compilation, callback, this.options));

        compiler.hooks.done.tapAsync(PLUGIN_NAME,
            ({ compilation }) => concatMetaWithOutput(compilation, this.options));
    }
}

module.exports = MetaDataPlugin;

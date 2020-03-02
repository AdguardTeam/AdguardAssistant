const { LOCALES_EQUIVALENTS_MAP, LANGUAGES } = require('../consts');

const locales = Object.keys(LANGUAGES)
    .reduce((acc, language) => {
        const resultLocale = LOCALES_EQUIVALENTS_MAP[language] || language;
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const dictionary = require(`./${resultLocale}/messages.json`);
        acc[language] = dictionary;
        return acc;
    }, {});

export default locales;

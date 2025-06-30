const { getEquivalent } = require('../scripts/locales/helpers');

const { LANGUAGES, LOCALE_DATA_FILENAME } = require('../scripts/locales/constants');

const locales = Object.keys(LANGUAGES)
    .reduce((acc, language) => {
        const resultLocale = getEquivalent(language);
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const dictionary = require(`./${resultLocale}/${LOCALE_DATA_FILENAME}`);
        acc[resultLocale] = dictionary;
        return acc;
    }, {});

export default locales;

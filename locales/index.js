const twoskyConfig = require('../.twosky.json');
const { getEquivalent } = require('../locales.js');

const [{ languages }] = twoskyConfig;

const locales = Object.keys(languages)
    .reduce((acc, language) => {
        const resultLocale = getEquivalent(language);
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const dictionary = require(`./${resultLocale}/messages.json`);
        acc[language] = dictionary;
        return acc;
    }, {});

export default locales;

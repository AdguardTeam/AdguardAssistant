import { LOCALES_EQUIVALENTS_MAP, LANGUAGES } from '../scripts/locales/consts';

const locales = Object.keys(LANGUAGES)
    .reduce(async (acc, language) => {
        const resultLocale = LOCALES_EQUIVALENTS_MAP[language] || language;
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const dictionary = await import(`./${resultLocale}/messages.json`);
        acc[resultLocale] = dictionary;
        return acc;
    }, {});

export default locales;

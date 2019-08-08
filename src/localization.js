import * as locales from '../locales/index';

/**
 * Object that manages localizations
 * @returns {{getMessage: Function, translateElement: Function}}
 * @constructor
 */
/* global AdguardSettings, protectedApi */

export default function Localization() {
    let currentLocale = null;
    let locale;
    const supportedLocales = { ...locales };

    /*
     * In Edge, there is undocumented behavior. When you run the script
     * through `executeScript`, the Edge browser blocks access to the
     * `languages` property of the `navigator` object without displaying
     * an error in the console and stopping the processing of the code.
     * When you call `navigator.languages` manually from the console,
     * there is no error and the correct value is returned. Therefore,
     * it is necessary to check `typeof navigator.languages !== 'undefined'`.
     * issue: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/983
     */
    if (typeof AdguardSettings !== 'undefined') {
        // eslint-disable-next-line prefer-destructuring
        locale = AdguardSettings.locale;
    } else if (typeof navigator.languages !== 'undefined') {
        // eslint-disable-next-line prefer-destructuring
        locale = navigator.languages[0];
    } else if (navigator.language) {
        locale = navigator.language;
    } else if (navigator.browserLanguage) {
        locale = navigator.browserLanguage;
    } else {
        locale = 'en';
    }

    if (supportedLocales[locale]) {
        currentLocale = locale;
    } else {
        const langSplit = locale.split('-')[0];
        if (supportedLocales[langSplit]) {
            currentLocale = langSplit;
        } else {
            currentLocale = 'en';
        }
    }

    const getMessage = (messageId) => {
        const message = supportedLocales[currentLocale][messageId];
        if (!message) {
            return messageId;
        }
        return supportedLocales[currentLocale][messageId].message
            || supportedLocales[currentLocale][messageId];
    };

    const createElement = (tagName, attributes) => {
        const el = protectedApi.createElement(tagName);
        if (!attributes) {
            return el;
        }

        const attrs = attributes.split(/([a-z]+='[^']+')/);
        for (let i = 0; i < attrs.length; i += 1) {
            const attr = attrs[i].trim();
            if (!attr) {
                // eslint-disable-next-line no-continue
                continue;
            }
            const index = attr.indexOf('=');
            let attrName;
            let attrValue;
            if (index > 0) {
                attrName = attr.substring(0, index);
                attrValue = attr.substring(index + 2, attr.length - 1);
            }
            if (attrName && attrValue) {
                el.setAttribute(attrName, attrValue);
            }
        }
        return el;
    };

    const processString = (str, element) => {
        let el;

        const match1 = /^([^]*?)<(a|strong|span|i)([^>]*)>(.*?)<\/\2>([^]*)$/m.exec(str);
        const match2 = /^([^]*?)<(br|input)([^>]*)\/?>([^]*)$/m.exec(str);
        if (match1) {
            processString(match1[1], element);

            el = createElement(match1[2], match1[3]);

            processString(match1[4], el);
            element.appendChild(el);

            processString(match1[5], element);
        } else if (match2) {
            processString(match2[1], element);

            el = createElement(match2[2], match2[3]);
            element.appendChild(el);

            processString(match2[4], element);
        } else {
            element.appendChild(document.createTextNode(str.replace(/&nbsp;/g, '\u00A0')));
        }
    };

    const translateElement = (element, message) => {
        try {
            while (element.lastChild) {
                element.removeChild(element.lastChild);
            }
            processString(message, element);
        } catch (ex) {
            // Ignore exceptions
        }
    };

    return {
        getMessage,
        translateElement,
    };
}

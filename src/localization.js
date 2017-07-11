/**
 * Object that manages localizations
 * @returns {{getMessage: Function, translateElement: Function}}
 * @constructor
 */
/* global en, ru, AdguardSettings */

var Localization = function () { // jshint ignore:line
    var currentLocale = null;
    var SupportedLocales = {'en': en, 'ru': ru, 'uk': uk, 'pl': pl, 'de': de, 'zh': zh, 'he': he, 'it': it, 'fa': fa};

    if (typeof AdguardSettings !== 'undefined') {
            var locale = AdguardSettings.locale;
        if (SupportedLocales[locale]) {
            currentLocale = locale;
        }
    }
    if (!currentLocale) {
        currentLocale = 'en';
    }


    var getMessage = function (messageId) {
        var message = SupportedLocales[currentLocale][messageId];
        if (!message) {
            throw messageId + ' not localized';
        }
        return SupportedLocales[currentLocale][messageId].message;
    };

    var translateElement = function (element, message) {
        try {
            while (element.lastChild) {
                element.removeChild(element.lastChild);
            }
            processString(message, element);
        } catch (ex) {
            // Ignore exceptions
        }
    };

    var processString = function (str, element) {
        var el;

        var match1 = /^([^]*?)<(a|strong|span|i)([^>]*)>(.*?)<\/\2>([^]*)$/m.exec(str);
        var match2 = /^([^]*?)<(br|input)([^>]*)\/?>([^]*)$/m.exec(str);
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

    var createElement = function (tagName, attributes) {

        var el = document.createElement(tagName);
        if (!attributes) {
            return el;
        }

        var attrs = attributes.split(/([a-z]+='[^']+')/);
        for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i].trim();
            if (!attr) {
                continue;
            }
            var index = attr.indexOf("=");
            var attrName;
            var attrValue;
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

    return {
        getMessage: getMessage,
        translateElement: translateElement
    };
};

/**
 * Manages iframe and it's content
 * @param $
 * @param log
 * @param selector
 * @param localization
 * @param resources
 * @returns {{showSelectorMenu: showSelectorMenu, showSliderMenu: showSliderMenu, setButtonPosition: setButtonPosition, onCloseMenu: CustomEvent, onShowMenuItem: CustomEvent, removeIframe: removeIframe}}
 * @constructor
 */
/* global CommonUtils, Ioc, DetailedMenuController, SelectorMenuController, SliderMenuControllerMobile */
var IframeControllerMobile = function ($, log, selector, localization, resources) { // jshint ignore:line
    var iframe = null;
    var iframeElement = null;
    var currentItem = null;
    var iframePositionOffset = 5;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var defaultCSS = {
        clip: 'auto',
        'z-index': 999999999999
    };

    var defaultAttributes = {
        'class': selector.ignoreClassName(),
        frameBorder: 0,
        width: 320,
        height: 'auto',
        allowTransparency: 'true',
        id: 'iframe-x2eRYVVQRsG9'
    };

    var createIframe = function (onIframeLoadCallback, styles, attrs) {
        log.debug('Creating iframe');

        if (document.querySelector('#' + defaultAttributes.id)) {
            log.error("Iframe already added");
            return;
        }

        iframe = $('<iframe/>');

        $(iframe).on('load', function () {
            // styles inside iframe
            appendDefaultStyleInIframe();
            onIframeLoadCallback();

            updateIframeAttrs(attrs);
            updateIframeStyles(styles);
        });

        if (CommonUtils.checkShadowDomSupport()) {
            iframeElement = document.createElement('div');
            createShadowRootElement(iframeElement).appendChild(iframe[0]);
        } else {
            iframeElement = iframe[0];
        }

        document.documentElement.appendChild(iframeElement);
    };

    var createShadowRootElement = function(iframeElement) {
        var shadowiframeElement = iframeElement.attachShadow({mode: 'closed'});

        var shadowRootDefaultStyle = {
            display: 'block',
            position: 'relative',
            width: 0,
            height: 0,
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            'z-index': 9999999999
        };

        var style = [];

        Object.keys(shadowRootDefaultStyle).forEach(function(key) {
            style.push(key + ':' + shadowRootDefaultStyle[key] + '!important;');
        });

        style = ':host {' + style.join() + '}';
        shadowiframeElement.innerHTML = '<style>' + style + '</style>';

        return shadowiframeElement;
    };

    var updateIframeAttrs = function(attrs) {
        var frame = iframe[0];

        frame.removeAttribute('style');
        frame.removeAttribute('height');

        var attributes = CommonUtils.objectAssign(defaultAttributes, attrs);

        Object.keys(attributes).forEach(function (item) {
            iframe.attr(item, attributes[item]);
        });

        frame.setAttribute('width', attributes.width);
        frame.setAttribute('height', attributes.height === 'auto' ? frame.contentDocument.body.scrollHeight : attributes.height);
    };

    var updateIframeStyles = function (styles) {
        var frame = iframe[0];

        var css = CommonUtils.objectAssign(defaultCSS, styles);

        Object.keys(css).forEach(function (item) {
            iframe.css(item, css[item]);
        });

        frame.style.height = frame.contentDocument.body.scrollHeight + 'px';
    };

    var appendSelectorStyles = function() {
        if(document.querySelector('.adg-styles')) {
            return false;
        }

        var selectorStyleTag = document.createElement('style');
        var selectorStyles = resources.getResource('selector.css');
        selectorStyleTag.classList.add('adg-styles');

        if (selectorStyleTag.styleSheet) {
            selectorStyleTag.styleSheet.cssText = selectorStyles;
        } else {
            selectorStyleTag.appendChild(document.createTextNode(selectorStyles));
        }

        document.getElementsByTagName("head")[0].appendChild(selectorStyleTag);
    };

    var appendDefaultStyleInIframe = function () {
        try {
            log.info('Iframe loaded writing styles');
            var doc = iframe[0].contentDocument;
            doc.open();
            doc.write('<html><head><style type="text/css">'+resources.getResource('mobile-style.css')+'</style></head></html>');
            doc.close();
        } catch (ex) {
            log.error(ex);
        }
    };

    var showMenuItem = function (viewName, controller, options, styles, attrs) {
        if (currentItem === viewName) {
            return;
        }

        var onIframeLoad = function () {
            var frameElement = iframe[0];
            var view = $(resources.getResource(viewName))[0];
            appendContent(view);
            localize();

            if (!options) {
                options = {};
            }

            if (controller) {
                controller.init(frameElement, options);
            }
            updateIframeAttrs(attrs);
            updateIframeStyles(styles);

            currentItem = viewName;
            onShowMenuItem.notify();
            showIframe();
        };

        if (!iframe) {
            createIframe(onIframeLoad, styles, attrs);
            return;
        }

        onIframeLoad();
    };

    var hideIframe = function() {
        if (iframe && iframe[0]) {
            iframe[0].style.display = 'none';
        }
    };

    var showIframe = function() {
        if (iframe && iframe[0]) {
            iframe[0].style.display = 'block';
        }
    };

    var showSelectorMenu = function () {
        hideIframe();
        selector.close();
        var styles = {
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            'border-radius': '2px',
            'background': 'transparent'
        };

        showMenuItem('mobilePopup.html', null, null, styles);

        var startSelectMode = iframe[0].contentDocument.querySelector('.start-select-mode');
        var cancelSelectMode = iframe[0].contentDocument.querySelector('.cancel-select-mode');

        startSelectMode.addEventListener('click', startSelect);
        cancelSelectMode.addEventListener('click', removeIframe);
    };

    var startSelect = function() {
        hideIframe();
        var controller = Ioc.get(SelectorMenuController);
        controller.startSelector();
    };

    var showSliderMenu = function(element) {
        var controller = Ioc.get(SliderMenuControllerMobile);
        var options = {
            element: element
        };
        var styles = {
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)'
        };

        showMenuItem('mobileMenu.html', controller, options, styles);
    };

    var localize = function () {
        var elements = iframe[0].contentDocument.querySelectorAll('[i18n]');
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute('i18n'));
            localization.translateElement(elements[i], message);
        }

        var elementsWithTitle = iframe[0].contentDocument.querySelectorAll('[i18n-title]');
        for (var j = 0; j < elementsWithTitle.length; j++) {
            var title = localization.getMessage(elementsWithTitle[j].getAttribute('i18n-title'));
            elementsWithTitle[j].setAttribute('title', title);
        }
    };

    var appendContent = function (view) {
        var body = iframe[0].contentDocument.body;
        for (var i = 0; i < body.children.length; i++) {
            body.removeChild(body.children[i]);
        }
        body.appendChild(view);
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    var removeIframe = function (e) {
        if (e && e.isTrusted === false) return false;
        if (!iframe) return false;
        document.removeEventListener('click', removeIframe);
        window.removeEventListener('orientationchange', showSelectorMenu);
        document.documentElement.removeChild(iframeElement);
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
    };

    appendSelectorStyles();

    return {
        showSelectorMenu: showSelectorMenu,
        showSliderMenu: showSliderMenu,
        onCloseMenu: onCloseMenu,
        onShowMenuItem: onShowMenuItem,
        removeIframe: removeIframe,
        startSelect: startSelect
    };
};

/**
 * Manages iframe and it's content
 * @param $
 * @param log
 * @param selector
 * @param localization
 * @returns {{showSelectorMenu: showSelectorMenu, showSliderMenu: showSliderMenu, setButtonPosition: setButtonPosition, onCloseMenu: CustomEvent, onShowMenuItem: CustomEvent, removeIframe: removeIframe}}
 * @constructor
 */

/* global CSS, HTML, CommonUtils, Ioc, SelectorMenuController, SliderMenuControllerMobile */

var IframeControllerMobile = function ($, log, selector, localization, protectedApi) { // jshint ignore:line
    var iframe = null;
    var iframeElement = null;
    var currentItem = null;
    var iframePositionOffset = 5;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var views = {};

    views['mobilePopup.html'] = HTML.popup;
    views['mobileMenu.html'] = HTML.mobile_menu;

    var defaultCSS = {
        clip: 'auto',
        'z-index': 2147483647
    };

    var defaultAttributes = {
        'class': selector.ignoreClassName(),
        frameBorder: 0,
        allowTransparency: 'true',
        id: 'iframe-x2eRYVVQRsG9'
    };

    var createIframe = function (onIframeLoadCallback, styles, attrs) {
        log.debug('Creating iframe');

        if (document.querySelector('#' + defaultAttributes.id)) {
            log.error("Iframe already added");
            return;
        }

        iframe = protectedApi.createElement('iframe');

        $(iframe).on('load', function () {
            onIframeLoadCallback();

            updateIframeAttrs(attrs);
            updateIframeStyles(styles);
        });

        iframeElement = iframe;

        var adgStylesSelector = protectedApi.createStylesElement(CSS.selector, 'adg-styles-selector');
        if (adgStylesSelector) {
            document.documentElement.appendChild(adgStylesSelector);
        }

        document.documentElement.appendChild(iframeElement);
    };

    var updateIframeAttrs = function(attrs) {
        iframe.removeAttribute('style');
        iframe.removeAttribute('height');

        var attributes = CommonUtils.objectAssign(defaultAttributes, attrs);

        Object.keys(attributes).forEach(function (item) {
            iframe.setAttribute(item, attributes[item]);
        });
    };

    var updateIframeStyles = function (styles) {
        var css = CommonUtils.objectAssign(defaultCSS, styles);

        Object.keys(css).forEach(function (item) {
            iframe.style[item] = css[item];
        });
    };

    var showMenuItem = function (viewName, controller, options, styles, attrs) {
        if (currentItem === viewName) {
            return;
        }

        var onIframeLoad = function () {
            var frameElement = iframe;
            var view = protectedApi.createElement(views[viewName]);
            var iframeStyles = CSS.common + CSS.mobile;
            view.appendChild(protectedApi.createStylesElement(iframeStyles));
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
            var adgStylesSelector = protectedApi.createStylesElement(CSS.selector, 'adg-styles-selector');
            if (adgStylesSelector) {
                document.documentElement.appendChild(adgStylesSelector);
            }

            createIframe(onIframeLoad, styles, attrs);
            return;
        }

        onIframeLoad();
    };

    var hideIframe = function() {
        if (iframe) {
            iframe.style.display = 'none';
        }
    };

    var showIframe = function() {
        if (iframe) {
            iframe.style.display = 'block';
        }
    };

    var mobilePopupButtonsInit = function() {
        return {
            init: function() {
                var startSelectMode = iframe.contentDocument.querySelector('.start-select-mode');
                var cancelSelectMode = iframe.contentDocument.querySelector('.cancel-select-mode');

                startSelectMode.addEventListener('click', startSelect);
                cancelSelectMode.addEventListener('click', removeIframe);
            }
        };
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
            'background': 'transparent',
            width: '55vw',
            height: '56vw',
        };

        showMenuItem('mobilePopup.html', mobilePopupButtonsInit(), null, styles);
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
            transform: 'translateX(-50%)',
            width: '70vw',
            height: '27vw'
        };

        showMenuItem('mobileMenu.html', controller, options, styles);
    };

    var localize = function () {
        var elements = iframe.contentDocument.querySelectorAll('[i18n]');
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute('i18n'));
            localization.translateElement(elements[i], message);
        }

        var elementsWithTitle = iframe.contentDocument.querySelectorAll('[i18n-title]');
        for (var j = 0; j < elementsWithTitle.length; j++) {
            var title = localization.getMessage(elementsWithTitle[j].getAttribute('i18n-title'));
            elementsWithTitle[j].setAttribute('title', title);
        }
    };

    var appendContent = function (view) {
        var body = iframe.contentDocument.body;
        for (var i = 0; i < body.children.length; i++) {
            body.removeChild(body.children[i]);
        }
        body.appendChild(view);
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    var removeIframe = function (e) {
        if (e && e.isTrusted === false) {
            return false;
        }

        if (!iframeElement) {
            return false;
        }

        document.removeEventListener('click', removeIframe);
        window.removeEventListener('orientationchange', showSelectorMenu);
        document.documentElement.removeChild(iframeElement);
        iframe = null;
        iframeElement = null;
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
    };

    return {
        showSelectorMenu: showSelectorMenu,
        showSliderMenu: showSliderMenu,
        onCloseMenu: onCloseMenu,
        onShowMenuItem: onShowMenuItem,
        removeIframe: removeIframe,
        startSelect: startSelect
    };
};

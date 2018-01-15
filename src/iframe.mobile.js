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
/* global StringUtils, Ioc, DetailedMenuController, SelectorMenuController, SliderMenuControllerMobile, BlockPreviewController, SettingsMenuController */
var IframeControllerMobile = function ($, log, selector, localization, resources) { // jshint ignore:line
    var iframe = null;
    var currentItem = null;
    var iframePositionOffset = 5;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var defaultCSS = {
        clip: 'auto',
        'z-index': 999999999999999
    };

    var defaultAttributes = {
        'class': selector.ignoreClassName(),
        frameBorder: 0,
        width: 300,
        height: 'auto',
        allowTransparency: 'true'
    };

    var createIframe = function (onIframeLoadCallback, styles, attrs) {
        log.debug('Creating iframe');

        if (document.querySelector('.sg_ignore')) {
            log.error("Iframe already added");
            return;
        }

        iframe = $('<iframe/>');

        var css = Object.assign({}, defaultCSS, styles);
        var attributes = Object.assign({}, defaultAttributes, attrs);

        Object.keys(css).forEach(function (item) {
            iframe.css(item, css[item]);
        });

        Object.keys(attributes).forEach(function (item) {
            iframe.attr(item, attributes[item]);
        });

        var iframeAlreadyLoaded = false;

        $(iframe).on('load', function () {
            iframeAlreadyLoaded = true;
            appendDefaultStyleInIframe();
            onIframeLoadCallback();
        });

        document.documentElement.appendChild(iframe[0]);

        // set iframe size
        iframe[0].setAttribute('width', attributes.width);
        iframe[0].setAttribute('height', attributes.height === 'auto' ? iframe[0].contentWindow.document.body.scrollHeight : attributes.height);
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
        log.debug(StringUtils.format("Showing menu item: {0}", viewName));
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

            currentItem = viewName;
            onShowMenuItem.notify();
        };
        if (!iframe) {
            createIframe(onIframeLoad, styles, attrs);
            return;
        }
        onIframeLoad();
    };

    var showSelectorMenu = function () {
        var styles = {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: 'auto'
        };

        showMenuItem('mobilePopup.html', null, null, styles);

        var startSelectMode = iframe[0].contentDocument.querySelector('.start-select-mode');
        var cancelSelectMode = iframe[0].contentDocument.querySelector('.cancel-select-mode');

        startSelectMode.addEventListener('click', startSelect);
        cancelSelectMode.addEventListener('click', removeIframe);
    };

    var startSelect = function() {
        removeIframe();
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

    var showBlockPreview = function (element, path) {
        selector.reset();
        element.classList.add('sg_hide_element');
        removeIframe();

        document.addEventListener('click', function() {
            element.classList.remove('sg_hide_element');
            startSelect();
        });
    };

    var localize = function () {
        var elements = iframe[0].contentDocument.querySelectorAll("[i18n]");
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute("i18n"));
            localization.translateElement(elements[i], message);
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
        window.removeEventListener('resize', startSelect);
        document.documentElement.removeChild(iframe[0]);
        iframe = null;
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
        showBlockPreview: showBlockPreview,
        startSelect: startSelect
    };
};

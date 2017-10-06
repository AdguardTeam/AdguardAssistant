/**
 * Manages iframe and it's content
 * @param $
 * @param log
 * @param selector
 * @param localization
 * @param resources
 * @returns {{showSelectorMenu: showSelectorMenu, showSliderMenu: showSliderMenu, showBlockPreview: showBlockPreview, setButtonPosition: setButtonPosition, onCloseMenu: CustomEvent, onShowMenuItem: CustomEvent, removeIframe: removeIframe, resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced, resizeSliderMenuToNormal: resizeSliderMenuToNormal}}
 * @constructor
 */
/* global StringUtils, Ioc, DetailedMenuController, SelectorMenuController, SliderMenuControllerMobile, BlockPreviewController, SettingsMenuController */
var IframeControllerMobile = function ($, log, selector, localization, resources) { // jshint ignore:line
    var iframe = null;
    var currentItem = null;
    var iframePositionOffset = 5;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var createIframe = function (onIframeLoadCallback) {
        log.debug('Creating iframe');
        iframe = $('<iframe/>');
        var css = {
            position: 'fixed',
            left: 0,
            top: 'auto',
            bottom: '20px',
            clip: 'auto',
            width: '100%',
            height: '10vh',
            'z-index': 999999999999999
        };
        var attributes = {
            'class': selector.ignoreClassName(),
            frameBorder: 0,
            allowTransparency: 'true'
        };
        Object.keys(css).forEach(function (item) {
            iframe.css(item, css[item]);
        });
        Object.keys(attributes).forEach(function (item) {
            iframe.attr(item, attributes[item]);
        });
        var iframeAlreadyLoaded = false;
        $(iframe).on('load', function () {
            if (iframeAlreadyLoaded) {
                //IE calls load each time when we use document.close
                return;
            }
            iframeAlreadyLoaded = true;
            appendDefaultStyle();
            onIframeLoadCallback();
        });
        var body = $('body')[0];
        if (!body) {
            log.error("Body not found");
            return;
        }
        body.appendChild(iframe[0]);

        var selectorCSS = document.createElement('style');
        var styles = resources.getResource('selector.css');

        if (selectorCSS.styleSheet) {
            selectorCSS.styleSheet.cssText = styles;
        }else {
            selectorCSS.appendChild(document.createTextNode(styles));
        }

        document.getElementsByTagName("head")[0].appendChild(selectorCSS);
    };

    var appendDefaultStyle = function () {
        try {
            log.info('Iframe loaded writing styles');
            var doc = iframe[0].contentDocument;
            doc.open();
            doc.write(
                StringUtils.format("<html><head>{0}</head></html>",
                StringUtils.format('<style {0} type="text/css">{1}{2}</style>',
                getStyleNonce(),
                resources.getResource('style.css'),
                resources.getResource('mobile-style.css')))
            );
            doc.close();
        } catch (ex) {
            log.error(ex);
        }
    };

    var getStyleNonce = function () {
        return '';
    };

    var showMenuItem = function (viewName, controller, width, height, options) {
        log.debug(StringUtils.format("Showing menu item: {0}", viewName));
        if (currentItem === viewName) {
            return;
        }
        var onIframeLoad = function () {
            var frameElement = iframe[0];
            frameElement.width = width;
            frameElement.height = height;
            var view = $(resources.getResource(viewName))[0];
            appendContent(view);
            localize();
            if (!options) {
                options = {};
            }
            controller.init(frameElement, options);
            currentItem = viewName;
            onShowMenuItem.notify();
        };
        if (!iframe) {
            createIframe(onIframeLoad);
            return;
        }
        onIframeLoad();
    };

    var showSelectorMenu = function () {
        var controller = Ioc.get(SelectorMenuController);
        var options = {dragElement: 'head'};
        showMenuItem('selectorMenu.html', controller, 'auto', 'auto', options);
        iframe.css('height', '10vh');
    };

    var showSliderMenu = function (element) {
        var controller = Ioc.get(SliderMenuControllerMobile);
        var options = {element: element, dragElement: 'head'};
        showMenuItem('sliderMenu.html', controller, 'auto', 'auto', options);
        iframe.css('height', window.innerWidth < 400 ? '10vh' : '30vh');
    };

    var showBlockPreview = function (element, path) {
        var controller = Ioc.get(BlockPreviewController);
        var options = {element: element, path: path, dragElement: 'head'};
        showMenuItem('blockPreview.html', controller, 'auto', 'auto', options);
        iframe.css('height', '10vh');
    };

    var localize = function () {
        var elements = iframe[0].contentDocument.querySelectorAll("[i18n]");
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute("i18n"));
            localization.translateElement(elements[i], message);
        }
    };

    var resizeSliderMenuToAdvanced = function () {
        resizeIframe(null, sliderMenuHeight.advanced);
    };

    var resizeSliderMenuToNormal = function () {
        resizeIframe(null, sliderMenuHeight.normal);
    };

    var appendContent = function (view) {
        var body = iframe[0].contentDocument.body;
        for (var i = 0; i < body.children.length; i++) {
            body.removeChild(body.children[i]);
        }
        body.appendChild(view);
    };

    var removeIframe = function () {
        $(document).off('click', removeIframe);
        $('body')[0].removeChild(iframe[0]);
        iframe = null;
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
    };

    return {
        showSelectorMenu: showSelectorMenu,
        showSliderMenu: showSliderMenu,
        showBlockPreview: showBlockPreview,
        onCloseMenu: onCloseMenu,
        onShowMenuItem: onShowMenuItem,
        removeIframe: removeIframe,
        resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced,
        resizeSliderMenuToNormal: resizeSliderMenuToNormal
    };
};

/**
 * Manages iframe and it's content
 * @param $
 * @param settings
 * @param uiUtils
 * @param gmApi
 * @param log
 * @param selector
 * @param uiValidationUtils
 * @param localization
 * @param resources
 * @returns {{showDetailedMenu: showDetailedMenu, showSelectorMenu: showSelectorMenu, showSliderMenu: showSliderMenu, showBlockPreview: showBlockPreview, showSettingsMenu: showSettingsMenu, setButtonPosition: setButtonPosition, onCloseMenu: CustomEvent, onShowMenuItem: CustomEvent, removeIframe: removeIframe, resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced, resizeSliderMenuToNormal: resizeSliderMenuToNormal}}
 * @constructor
 */
/* global StringUtils, Ioc, DetailedMenuController, SelectorMenuController, SliderMenuController, BlockPreviewController, SettingsMenuController */
var IframeController = function ($, settings, uiUtils, gmApi, log, selector, uiValidationUtils, localization, resources) { // jshint ignore:line
    var iframe = null;
    var currentItem = null;
    var iframeMaxWidth = 418;
    var iframeMaxHeight = 407;
    var menuMaxWidth = 668;
    var settingsMaxWidth = 458;
    var iframePositionOffset = 5;
    var sliderMenuHeight = {advanced: 503, normal: 403};
    var buttonPosition = null;

    if(window.innerWidth < iframeMaxWidth) iframeMaxWidth = window.innerWidth;
    if(window.innerWidth < menuMaxWidth) menuMaxWidth = window.innerWidth;
    if(window.innerWidth < settingsMaxWidth) settingsMaxWidth = window.innerWidth;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var createIframe = function (onIframeLoadCallback) {
        log.debug('Creating iframe');
        iframe = $('<iframe/>');
        var iframePosition = getIframePosition();
        var css = {
            position: 'fixed',
            left: iframePosition.left + 'px',
            top: iframePosition.top + 'px',
            clip: 'auto'
        };
        var attributes = {
            id: settings.Constants.IFRAME_ID,
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
    };

    var getIframePosition = function () {
        var viewPort = uiValidationUtils.getViewPort();

        var defaultPosition = {
            left: buttonPosition.left,
            top: buttonPosition.top
        };
        var sides = [{//left top
            left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
            top: buttonPosition.top - iframeMaxHeight - iframePositionOffset
        },
            {   //right top
                left: buttonPosition.left + iframePositionOffset,
                checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
                top: buttonPosition.top - iframeMaxHeight - iframePositionOffset
            },
            {   //bottom right
                left: buttonPosition.left + iframePositionOffset,
                checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
                checkTop: buttonPosition.top + iframeMaxHeight + iframePositionOffset,
                top: buttonPosition.top + iframePositionOffset
            },
            {   //bottom left
                left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
                checkTop: buttonPosition.top + iframeMaxHeight + iframePositionOffset,
                top: buttonPosition.top + iframePositionOffset
            }];

        for (var i = 0; i < sides.length; i++) {
            var currentSide = sides[i];
            var left = currentSide.checkLeft ? currentSide.checkLeft : currentSide.left;
            var top = currentSide.checkTop ? currentSide.checkTop : currentSide.top;

            if (left < 0 || left > viewPort.width) {
                continue;
            }
            if (top < 0 || top > viewPort.height) {
                continue;
            }
            return currentSide;
        }

        return defaultPosition;
    };

    var specifyIframePosition = function () {
        var viewPort = uiValidationUtils.getViewPort();
        var frameElement = iframe[0];
        if ((frameElement.offsetLeft + frameElement.offsetWidth) > viewPort.width) {
            frameElement.style.left = Math.max(0, (viewPort.width - frameElement.offsetWidth - iframePositionOffset)) + 'px';
        }
        if (frameElement.offsetLeft < 0) {
            frameElement.style.left = iframePositionOffset + 'px';
        }
        if ((frameElement.offsetTop + frameElement.offsetHeight) > viewPort.height) {
            frameElement.style.top = Math.max(0, (viewPort.height - frameElement.offsetHeight - iframePositionOffset)) + 'px';
        }
        if (frameElement.offsetHeight < 0) {
            frameElement.style.top = iframePositionOffset + 'px';
        }

    };

    var appendDefaultStyle = function () {
        try {
            log.info('Iframe loaded writing styles');
            var doc = iframe[0].contentDocument;
            doc.open();
            doc.write(StringUtils.format("<html><head>{0}</head></html>",
                StringUtils.format('<style {0} type="text/css">{1}</style>', getStyleNonce(), resources.getResource('style.css'))));
            doc.close();
        } catch (ex) {
            log.error(ex);
        }
    };

    var getStyleNonce = function () {
        var adgSettings = settings.getAdguardSettings();
        if (adgSettings === null) {
            return '';
        }
        return 'nonce="' + adgSettings.nonce + '"';
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
            frameElement.style.setProperty('width', width + 'px', 'important');
            frameElement.style.setProperty('height', height + 'px', 'important');
            var view = $(resources.getResource(viewName))[0];
            appendContent(view);
            localize();
            specifyIframePosition();
            if (!options) {
                options = {};
            }
            controller.init(frameElement, options);
            currentItem = viewName;
            onShowMenuItem.notify();
            if (options.dragElement) {
                uiUtils.makeIframeDraggable(iframe, $(frameElement.contentDocument.getElementsByClassName(options.dragElement)));
            }
        };
        if (!iframe) {
            createIframe(onIframeLoad);
            return;
        }
        onIframeLoad();
    };

    var setButtonPosition = function (coords) {
        buttonPosition = coords;
    };

    var showDetailedMenu = function () {
        var controller = Ioc.get(DetailedMenuController);
        var options = {dragElement: 'menu-head'};
        showMenuItem(settings.MenuItemsNames.DetailedMenu, controller, iframeMaxWidth, 456, options);
        setCloseEventIfNotHitIframe(true);
    };

    var showSelectorMenu = function () {
        var controller = Ioc.get(SelectorMenuController);
        var options = {dragElement: 'head'};
        showMenuItem(settings.MenuItemsNames.SelectorMenu, controller, menuMaxWidth, 213, options);
        setCloseEventIfNotHitIframe(false);
    };

    var showSliderMenu = function (element) {
        var controller = Ioc.get(SliderMenuController);
        var options = {element: element, dragElement: 'head'};
        showMenuItem(settings.MenuItemsNames.SliderMenu, controller, menuMaxWidth, sliderMenuHeight.normal, options);
        setCloseEventIfNotHitIframe(false);
    };

    var showBlockPreview = function (element, path) {
        var controller = Ioc.get(BlockPreviewController);
        var options = {element: element, path: path, dragElement: 'head'};
        showMenuItem(settings.MenuItemsNames.BlockPreview, controller, menuMaxWidth, 213, options);
        setCloseEventIfNotHitIframe(false);
    };

    var showSettingsMenu = function () {
        var controller = Ioc.get(SettingsMenuController);
        var options = {dragElement: 'head'};
        showMenuItem(settings.MenuItemsNames.SettingsMenu, controller, settingsMaxWidth, 414, options);
        setCloseEventIfNotHitIframe(false);
    };

    var localize = function () {
        var elements = iframe[0].contentDocument.querySelectorAll("[i18n]");
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute("i18n"));
            localization.translateElement(elements[i], message);
        }
    };

    var resizeIframe = function (width, height) {
        var frame = iframe[0];
        if (width) {
            frame.style.width = width + 'px';
        }
        if (height) {
            frame.style.height = height + 'px';
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

    var setCloseEventIfNotHitIframe = function () {
        window.setTimeout(function () {
            $(document).on('click', removeIframe);
        }, 150);
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
        showDetailedMenu: showDetailedMenu,
        showSelectorMenu: showSelectorMenu,
        showSliderMenu: showSliderMenu,
        showBlockPreview: showBlockPreview,
        showSettingsMenu: showSettingsMenu,
        setButtonPosition: setButtonPosition,
        onCloseMenu: onCloseMenu,
        onShowMenuItem: onShowMenuItem,
        removeIframe: removeIframe,
        resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced,
        resizeSliderMenuToNormal: resizeSliderMenuToNormal
    };
};

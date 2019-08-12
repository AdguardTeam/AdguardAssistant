/**
 * Settings menu controller
 * @param $
 * @param settings
 * @param button
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
export default function SettingsMenuController($, settings, button) {
    let contentDocument = null;
    const iframeCtrl = Ioc.get('iframeController');
    const buttonSides = {
        'position-bottom-right': { top: false, left: false },
        'position-bottom-left': { top: false, left: true },
        'position-top-right': { top: true, left: false },
        'position-top-left': { top: true, left: true },
    };


    const close = () => {
        iframeCtrl.removeIframe();
    };

    const setIconSize = () => {
        const smallIcon = contentDocument.getElementById('size-small').checked;
        settings.setIconSize(smallIcon);
    };

    const setPersonalParam = () => {
        const personalConfig = contentDocument.getElementById('this-site').checked;
        settings.setPersonalParam(personalConfig);
    };

    const setButtonSide = () => {
        let sideItem = null;
        Object.keys(buttonSides).forEach((item) => {
            if (contentDocument.getElementById(item).checked) {
                sideItem = item;
            }
        });

        if (sideItem) {
            settings.setButtonSide(buttonSides[sideItem]);
        }
    };

    const setDefaultSettings = () => {
        if (settings.getIconSize()) {
            contentDocument.getElementById('size-small').checked = true;
        } else {
            contentDocument.getElementById('size-big').checked = true;
        }

        if (settings.getPersonalConfig()) {
            contentDocument.getElementById('this-site').checked = true;
        } else {
            contentDocument.getElementById('all-site').checked = true;
        }

        const position = settings.getUserPositionForButton();
        if (position) {
            return;
        }
        const sideFromSettings = settings.getButtonSide();

        Object.keys(buttonSides).forEach((item) => {
            const sideItem = buttonSides[item];
            if ((sideItem.left === sideFromSettings.left)
                && (sideItem.top === sideFromSettings.top)) {
                contentDocument.getElementById(item).checked = true;
            }
        });
    };

    const saveSettings = () => {
        setPersonalParam();
        setIconSize();
        setButtonSide();
        settings.saveSettings();
        close();
        button.remove();
        button.show();
    };

    const bindEvents = () => {
        const menuEvents = {
            '.close': close,
            '#cancel': iframeCtrl.showDetailedMenu,
            '#save-settings': saveSettings,
        };
        Object.keys(menuEvents).forEach((item) => {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    const init = (iframe) => {
        // eslint-disable-next-line prefer-destructuring
        contentDocument = iframe.contentDocument;
        bindEvents();
        setDefaultSettings();
    };

    return {
        init,
    };
}

/* Inline resource generating by gulp tasks/compile.js */

/* global
RESOURCE_CSS_COMMON,
RESOURCE_CSS_BUTTON,
RESOURCE_CSS_IFRAME,
RESOURCE_CSS_SELECTOR,
RESOURCE_CSS_MOBILE,
*/

import RESOURCE_TEMPLATE_BUTTON from './templates/button.html';
import RESOURCE_TEMPLATE_DETAILEDMENU from './templates/mainMenu.html';
import RESOURCE_TEMPLATE_SELECTORMENU from './templates/selectorMenu.html';
import RESOURCE_TEMPLATE_SETTINGSMENU from './templates/settingsMenu.html';
import RESOURCE_TEMPLATE_SLIDERMENU from './templates/sliderMenu.html';
import RESOURCE_TEMPLATE_BLOCKPREVIEW from './templates/blockPreview.html';
import RESOURCE_TEMPLATE_POPUP from './templates/mobilePopup.html';
import RESOURCE_TEMPLATE_MENU from './templates/mobileMenu.html';

export const HTML = {
    button: RESOURCE_TEMPLATE_BUTTON,
    detailed_menu: RESOURCE_TEMPLATE_DETAILEDMENU,
    selector_menu: RESOURCE_TEMPLATE_SELECTORMENU,
    settings_menu: RESOURCE_TEMPLATE_SETTINGSMENU,
    slider_menu: RESOURCE_TEMPLATE_SLIDERMENU,
    preview: RESOURCE_TEMPLATE_BLOCKPREVIEW,
    popup: RESOURCE_TEMPLATE_POPUP,
    mobile_menu: RESOURCE_TEMPLATE_MENU,
};

export const CSS = {
    common: RESOURCE_CSS_COMMON,
    button: RESOURCE_CSS_BUTTON,
    iframe: RESOURCE_CSS_IFRAME,
    selector: RESOURCE_CSS_SELECTOR,
    mobile: RESOURCE_CSS_MOBILE,
};



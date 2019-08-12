/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */

import RESOURCE_CSS_COMMON from 'raw-loader!less-loader!./styles/base/base-common.less';
import RESOURCE_CSS_BUTTON from 'raw-loader!less-loader!./styles/button.less';
import RESOURCE_CSS_IFRAME from 'raw-loader!less-loader!./styles/menu.less';
import RESOURCE_CSS_SELECTOR from 'raw-loader!less-loader!./styles/selector.less';
import RESOURCE_CSS_MOBILE from 'raw-loader!less-loader!./styles/mobile-style.less';

import RESOURCE_TEMPLATE_BUTTON from 'raw-loader!./templates/button.html';
import RESOURCE_TEMPLATE_DETAILEDMENU from 'raw-loader!./templates/mainMenu.html';
import RESOURCE_TEMPLATE_SELECTORMENU from 'raw-loader!./templates/selectorMenu.html';
import RESOURCE_TEMPLATE_SETTINGSMENU from 'raw-loader!./templates/settingsMenu.html';
import RESOURCE_TEMPLATE_SLIDERMENU from 'raw-loader!./templates/sliderMenu.html';
import RESOURCE_TEMPLATE_BLOCKPREVIEW from 'raw-loader!./templates/blockPreview.html';
import RESOURCE_TEMPLATE_POPUP from 'raw-loader!./templates/mobilePopup.html';
import RESOURCE_TEMPLATE_MENU from 'raw-loader!./templates/mobileMenu.html';

export const CSS = {
    common: RESOURCE_CSS_COMMON,
    button: RESOURCE_CSS_BUTTON,
    iframe: RESOURCE_CSS_IFRAME,
    selector: RESOURCE_CSS_SELECTOR,
    mobile: RESOURCE_CSS_MOBILE,
};

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

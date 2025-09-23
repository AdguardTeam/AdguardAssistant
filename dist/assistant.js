/*!
 * AdGuard Assistant - v4.3.77 - Tue Sep 23 2025
 * https://github.com/AdguardTeam/AdguardAssistant#adguard-assistant
 * Copyright (c) 2025 AdGuard. Licensed GPL-3.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Pomočnik","description":"Omogoča preprost in priročen način za upravljanje filtriranja neposredno iz brskalnika"}}}');

/***/ }),

/***/ 70:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Assistent d\'AdGuard","description":"Proporciona una manera fàcil i còmoda de gestionar el filtratge directament des del navegador"}}}');

/***/ }),

/***/ 234:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Помошник на AdGuard","description":"Обезбедува лесен и удобен начин за управување со филтрирањето директно од прелистувачот"}}}');

/***/ }),

/***/ 356:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"وبسایت","settings_position_save_all":"همه وبسایت ها","settings_position_save_this":"این وبسایت","assistant_select_element_start":"شروع","assistant_select_element_text":"عنصری در صفحه برای مسدودسازی انتخاب کنید. برای لغو،صفحه را رفرش کنید.","menu_filtration_status":{"message":"فیلترینگ در این وبسایت"},"menu_do_not_filter_30_sec":{"message":"به مدت 30 ثانیه فیلتر نکن"},"menu_block_ad_on_site":{"message":"مسدودسازی تبلیغ در این وبسایت"},"menu_report_abuse":{"message":"گزارش وبسایت"},"menu_site_report":{"message":"گزارش امنیتی وبسایت"},"menu_settings":{"message":"تنظیمات دستیار"},"menu_wot_reputation_indicator":{"message":"نشانگر اعتبار سایت"},"menu_wot_reputation_confidence_level":{"message":"سطح اعتبار"},"assistant_select_element":{"message":"مسدودسازی یک عنصر"},"assistant_select_element_ext":{"message":"روی اجزایی که می‌خواهید مسدود کنید کلیک کنید. AdGuard یک رویهٔ کاربر برای آن ایجاد خواهد کرد."},"assistant_select_element_cancel":{"message":"لغو"},"assistant_block_element":{"message":"مسدودسازی یک عنصر"},"assistant_block_element_explain":{"message":"ایجاد یک رویهٔ مسدودسازی اجزاء"},"assistant_slider_explain":{"message":"اسلایدر را جابه‌جا کنید تا اندازه قاب را تنظیم کنید."},"assistant_extended_settings":{"message":"تنظیمات پیشرفته"},"assistant_apply_rule_to_all_sites":{"message":"اِعمال دستور در همه وبسایت ها"},"assistant_block_by_reference":{"message":"مسدودسازی با لینک مرجع"},"assistant_block_similar":{"message":"مسدودسازی مشابه"},"assistant_another_element":{"message":"عنصر دیگری انتخاب کنید"},"assistant_preview":{"message":"پیشنمایش"},"assistant_block":{"message":"مسدود"},"assistant_settings":{"message":"تنظیمات دستیار"},"assistant_preview_header":{"message":"پیش‌نمایش اجزاء مسدود شده"},"assistant_preview_header_info":{"message":"بررسی کنید که آیا جزء به درستی مسدود شده است یا خیر"},"assistant_preview_end":{"message":"خروج از پیشنمایش"},"wot_unknown_description":{"message":"اعتبار تعریف نشده است"},"wot_bad_description":{"message":"این وبسایت اعتبار خیلی بدی دارد\\nبر طبق "},"wot_poor_description":{"message":"این وبسایت اعتبار بدی دارد\\nبر طبق "},"wot_unsatisfactory_description":{"message":"این وبسایت اعتبار کمی دارد\\nبر طبق "},"wot_good_description":{"message":"این وبسایت اعتبار خوبی دارد\\nبر طبق "},"wot_excellent_description":{"message":"این وبسایت اعتبار عالی دارد\\nبر طبق "},"settings_choose_size_and_position":{"message":"تنظیم اندازه و موقعیت دستیار AdGuard"},"settings_icon_size":{"message":"اندازه آیکون:"},"settings_small":{"message":"کوچک"},"settings_big":{"message":"بزرگ"},"settings_position":{"message":"موقعیت:"},"settings_left_top":{"message":"بالا سمت چپ"},"settings_right_top":{"message":"بالا سمت راست"},"settings_left_bottom":{"message":"پایین سمت چپ"},"settings_right_bottom":{"message":"پایین سمت راست"},"settings_cancel":{"message":"لغو"},"settings_save":{"message":"ذخیره تغییرات"}}');

/***/ }),

/***/ 370:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Nettsider","settings_position_save_all":"Alle nettsider","settings_position_save_this":"Denne nettsiden","assistant_select_element_start":"Start","assistant_select_element_text":"Velg et element på siden som skal blokkeres. Oppdater siden for å avbryte elementblokkeringsmodusen.","menu_filtration_status":{"message":"Filtrering på denne nettsiden"},"menu_do_not_filter_30_sec":{"message":"Ikke filtrer i 30 sekunder"},"menu_block_ad_on_site":{"message":"Blokker annonse på denne nettsiden"},"menu_report_abuse":{"message":"Rapporter denne nettsiden"},"menu_site_report":{"message":"Nettsidens sikkerhetsrapport"},"menu_settings":{"message":"Assistentinnstillinger"},"menu_wot_reputation_indicator":{"message":"Nettsteds-rykteindikator"},"menu_wot_reputation_confidence_level":{"message":"Ryktepålitelighetsnivå"},"assistant_select_element":{"message":"Blokker et element"},"assistant_select_element_ext":{"message":"Klikk på et element du vil blokkere. AdGuard vil lage en brukerregel for den"},"assistant_select_element_cancel":{"message":"Avbryt"},"assistant_block_element":{"message":"Blokker et element"},"assistant_block_element_explain":{"message":"Opprette en blokkeringsregel for elementer"},"assistant_slider_explain":{"message":"Flytt glidebryteren for å justere størrelsen på rammen"},"assistant_extended_settings":{"message":"Avanserte innstillinger"},"assistant_apply_rule_to_all_sites":{"message":"Bruk regelen for alle nettsider"},"assistant_block_by_reference":{"message":"Blokker med referanselenke"},"assistant_block_similar":{"message":"Blokker lignende"},"assistant_another_element":{"message":"Velg et annet element"},"assistant_preview":{"message":"Forhåndsvisning"},"assistant_block":{"message":"Blokker"},"assistant_settings":{"message":"Assistentinnstillinger"},"assistant_preview_header":{"message":"Forhåndsvis blokkert element"},"assistant_preview_header_info":{"message":"Sjekk om elementet er blokkert riktig"},"assistant_preview_end":{"message":"Avslutt forhåndsvisning"},"wot_unknown_description":{"message":"Rykte er ikke definert"},"wot_bad_description":{"message":"Denne nettsiden har et veldig dårlig rykte\\ni følge $1"},"wot_poor_description":{"message":"Denne nettsiden har et dårlig rykte\\ni følge $1"},"wot_unsatisfactory_description":{"message":"Denne nettsiden har et dårlig rykte\\ni følge $1"},"wot_good_description":{"message":"Denne nettsiden har et godt rykte\\ni følge $1"},"wot_excellent_description":{"message":"Denne nettsiden har et utmerket rykte\\ni følge $1"},"settings_choose_size_and_position":{"message":"Juster størrelsen og posisjonen til AdGuard-assistent"},"settings_icon_size":{"message":"Ikonstørrelse:"},"settings_small":{"message":"Liten"},"settings_big":{"message":"Stor"},"settings_position":{"message":"Posisjoner:"},"settings_left_top":{"message":"Øverst til venstre"},"settings_right_top":{"message":"Øverst til høyre"},"settings_left_bottom":{"message":"Nederst til venstre"},"settings_right_bottom":{"message":"Nederst til høyre"},"settings_cancel":{"message":"Avbryt"},"settings_save":{"message":"Lagre endringer"}}');

/***/ }),

/***/ 495:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Βοηθός AdGuard","description":"Παρέχει εύκολο και βολικό τρόπο διαχείρισης του φιλτραρίσματος απευθείας από το πρόγραμμα περιήγησης"}}}');

/***/ }),

/***/ 563:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"دستیار AdGuard","description":"روش راحت و آسان برای مدیریت فیلترینگ مستیق از داخل مرورگر."}}}');

/***/ }),

/***/ 683:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Памочнік AdGuard","description":"Дазваляе лёгка і хутка кіраваць фільтрацыяй непасрэдна з браўзара"}}}');

/***/ }),

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDExLjc3MkM2LjY2NjY3IDguNTkwNjUgOS4zMzMzMyA3IDEyIDdDMTQuNjY2NyA3IDE3LjMzMzMgOC41OTA2NSAyMCAxMS43NzJDMjAgMTEuNzcyIDE2IDE2Ljc3MiAxMiAxNi43NzJDOCAxNi43NzIgNCAxMS43NzIgNCAxMS43NzJaIiBzdHJva2U9IiM2N0IyNzkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxMEMxMy4xMDQ2IDEwIDE0IDEwLjg5NTQgMTQgMTJDMTQgMTMuMTA0NiAxMy4xMDQ2IDE0IDEyIDE0QzEwLjg5NTQgMTQgMTAgMTMuMTA0NiAxMCAxMkMxMCAxMC44OTU0IDEwLjg5NTQgMTAgMTIgMTBaIiBzdHJva2U9IiM2N0IyNzkiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(2608);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDZWMTBINiIgc3Ryb2tlPSIjQTRBNEE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxOFYxNEg2IiBzdHJva2U9IiNBNEE0QTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDZWMTBIMTgiIHN0cm9rZT0iI0E0QTRBNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQgMThWMTRIMTgiIHN0cm9rZT0iI0E0QTRBNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Assistent","description":"Biedt een gemakkelijke en handige manier om filters rechtstreeks vanuit de browser te beheren"}}}');

/***/ }),

/***/ 817:
/***/ ((module) => {

// Module
var code = "<div class=\"main\"> <div class=\"close\"></div> <div class=\"menu-head\"> <div class=\"menu-head_title\"> <span class=\"menu-head_name\"></span> <div class=\"confidence-indication wot-hide\"> <a class=\"wot-indicator wot-hide\" target=\"_blank\" href=\"https://link.adtidy.org/forward.html?action=wot_scorecard&from=main_menu&app=assistant&domain=example.org\"> <i id=\"WotIndication\" class=\"adg-wot tooltip\" data-title=\"Site reputation indicator\"></i> </a> <i id=\"ConfidenceIndication\" class=\"adg-wot-confidence tooltip\" data-title=\"Reputation Confidence Level\"></i> </div> </div> <div class=\"menu-head_text wot-hide\" id=\"WotDescriptionText\"></div> </div> <div class=\"menu-filter\"> <div i18n=\"menu_filtration_status\" class=\"menu-filter_lbl\"> </div> <div class=\"menu-filter_val\"> <input type=\"checkbox\" class=\"menu-filter_input\" id=\"is-filter\"> <label for=\"is-filter\" class=\"menu-filter_label\"></label> </div> </div> <div class=\"menu\"> <div id=\"do-not-block-30-sec\" class=\"menu__btn menu__btn--clock\" i18n=\"menu_do_not_filter_30_sec\"></div> <div id=\"block-ad\" class=\"menu__btn menu__btn--landscape\" i18n=\"menu_block_ad_on_site\"></div> <div id=\"report-abuse\" class=\"menu__btn menu__btn--report\" i18n=\"menu_report_abuse\"></div> <div id=\"site-report\" class=\"menu__btn menu__btn--security\" i18n=\"menu_site_report\"></div> <div id=\"assistant-settings\" class=\"menu__btn menu__btn--settings\" i18n=\"menu_settings\"></div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 890:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5590);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "iframe#adguard-assistant-dialog {\n  position: fixed;\n  clip: auto;\n  border-radius: 8px;\n  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.1);\n  z-index: 2147483647;\n  display: block!important;\n}\n.sg_hide_element {\n  display: none!important;\n}\nimg.adguard_sg_selected {\n  border: 5px solid #0F0 !important;\n}\n#_sg_div.sg_top {\n  top: 5px !important;\n}\n#_sg_div.sg_bottom {\n  bottom: 5px !important;\n}\n#_sg_div input {\n  margin-right: 10px !important;\n  font-size: 15px !important;\n}\n#_sg_path_field {\n  width: 400px !important;\n}\n#_sg_div .sg_new_line {\n  clear: both !important;\n}\n#_sg_div .sg_option {\n  float: left !important;\n}\n#_sg_div .adguard_sg_selected_option {\n  text-decoration: underline;\n}\n.adguard-placeholder {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUM5OUE4MEZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUM5OUE4MUZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Qzk5QTdFRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5Qzk5QTdGRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rJm9wAAAAZQTFRF2+7g1OfZ+LX/EgAAACtJREFUeNpiYIQABhhA5TIyoHIhfCS1DKhcEB/FJAZG7AYzoNlLLy5AgAEAMigAar6TcqkAAAAASUVORK5CYII=);\n}\n.adguard-placeholder-icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkNBQTNGMkZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkNBQTNGM0ZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2Q0FBM0YwRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2Q0FBM0YxRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49sbDwAAAl9JREFUeNrMmE0o5VEYxq9vJmpI2SBZjCSNKKGwkDE0m8mg2QwzEtkNCeUjGyVhYTbTUIZEMWmkbCVlw9QkG4mammbK5zAWuLqek3ch3W7v+Z8P/7d+u/cczz3neM7zP0Htg12eR6wUkA+eg2yQDOLAYegjiIkEr0AjyAPRfnp8toW9Be20QoHKa0tYEhgCVdwBNoQVgCmQKjPItLAKMAtiZAeaFFYM5sATJ4ODDYl6BuadijIlLAJMgHiFOWJMbGUfmaZsHYN98Bvs6haWA1olx2yCMfAd/DF1+Psl5rwGPWAYXJn8r3wNXjB7L0ENrZLRwy/m6ZDorw8kSqewUpDL7P0Epm3YRRBoYfbugW5bPpZDK8apTnBqS9h7WjWOLXyz5fxPQSWjz0dWcmPrEhdJNIEprIlW198Z7aUV1SasQWJnAp3Dzw+FqWxlOmV2HeXVecbegHBTYS5YYVy1yejrVJhIpxluFPaB6V1WhSWQTXjcJqyKjFVnhagabBhFFk7tgnPmlp+oChNbmMXM70XgL3Nen6qwj8y+xfv53fQZKweFzN5xW4c/Cgwwe9fAui1hIuBlMntHZOKNirAyiQ+NLbBkw8fEE9IM2QSnBv19I+oWVguWQSxzrnX6EVrqoV2I15kS0AxeSszjo+326hQm3hoSQRqR6mCeL2BV5x0VSjYQojDHNmgzcYn/Uxj/H9SBM7fkMQ951Tuw4aageEMpY8FUHnPy+XZECXbRTUFxhezEqCiZFfsFRnXdg1xhgcT9BF/BJG2htRKiDjx376EX9Md36HoR/NDp5jJ1K8AAcQBmooZhTgQAAAAASUVORK5CYII=);\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 100%;\n}\n.adguard-placeholder-domain {\n  background: #778b7c;\n  color: #ffffff;\n  left: 0;\n  top: 0;\n  padding: 2px 4px;\n  position: relative;\n}\n@media print {\n  .adguard-alert,\n  #adguard-assistant-dialog {\n    display: none!important;\n    opacity: 0!important;\n    visibility: hidden!important;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(2718),
  LOCALES_EQUIVALENTS_MAP = _require.LOCALES_EQUIVALENTS_MAP;

/**
 * Returns equivalent of specified locale code
 * @param {string} locale locale
 */
var getEquivalent = function getEquivalent(locale) {
  return LOCALES_EQUIVALENTS_MAP[locale] || locale;
};

/**
 * Normalizes locale code before validation.
 *
 * @param {string} rawLocale Locale code to normalize.
 *
 * @returns {string} Normalized locale code.
 *
 * @example
 * 'pt_BR' -> 'pt_br'
 * 'es_419' -> 'es'
 * 'sr-Latn' -> 'sr_latn'
 */
var normalizeLocale = function normalizeLocale(rawLocale) {
  // locale should be lowercase, e.g. 'pt_br', not 'pt_BR'
  // and with underscore, not dash, e.g. 'sr_latn', not 'sr-latn'
  var locale = rawLocale.toLowerCase().replace('-', '_');
  return getEquivalent(locale);
};
module.exports = {
  getEquivalent: getEquivalent,
  normalizeLocale: normalizeLocale
};

/***/ }),

/***/ 940:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Situs web","settings_position_save_all":"Semua situs web","settings_position_save_this":"Situs web ini","assistant_select_element_start":"Mulai","assistant_select_element_text":"Pilih elemen di halaman untuk diblokir. Segarkan halaman untuk membatalkan mode pemblokiran elemen.","menu_filtration_status":{"message":"Penyaringan di situs ini"},"menu_do_not_filter_30_sec":{"message":"Nonaktifkan penyaring untuk 30 detik"},"menu_block_ad_on_site":{"message":"Blokir iklan di situs ini"},"menu_report_abuse":{"message":"Laporkan situs"},"menu_site_report":{"message":"Laporan keamanan situs"},"menu_settings":{"message":"Pengaturan Asisten"},"menu_wot_reputation_indicator":{"message":"Indikator reputasi situs"},"menu_wot_reputation_confidence_level":{"message":"Tingkat Keyakinan Reputasi"},"assistant_select_element":{"message":"Blokir elemen"},"assistant_select_element_ext":{"message":"Klik elemen yang ingin Anda blokir. AdGuard akan membuat aturan pengguna untuk itu"},"assistant_select_element_cancel":{"message":"Batalkan"},"assistant_block_element":{"message":"Blokir elemen"},"assistant_block_element_explain":{"message":"Buat aturan pemblokiran elemen"},"assistant_slider_explain":{"message":"Pindahkan penggeser untuk menyesuaikan ukuran bingkai"},"assistant_extended_settings":{"message":"Pengaturan lanjutan"},"assistant_apply_rule_to_all_sites":{"message":"Aktifkan aturan untuk seluruh situs"},"assistant_block_by_reference":{"message":"Blok berdasarkan referensi situs"},"assistant_block_similar":{"message":"Blok semacamnya"},"assistant_another_element":{"message":"Pilih elemen lainnya"},"assistant_preview":{"message":"Pratinjau"},"assistant_block":{"message":"Blokir"},"assistant_settings":{"message":"Pengaturan Asisten"},"assistant_preview_header":{"message":"Pratinjau elemen yang diblokir"},"assistant_preview_header_info":{"message":"Periksa apakah elemen diblokir dengan benar"},"assistant_preview_end":{"message":"Keluar pratinjau"},"wot_unknown_description":{"message":"Reputasi tidak terdefinisi"},"wot_bad_description":{"message":"Situs ini mempunyai reputasi sangat buruk\\nberdasarkan $1"},"wot_poor_description":{"message":"Situs ini mempunyai reputasi buruk\\nberdasarkan $1"},"wot_unsatisfactory_description":{"message":"Situs ini mempunyai reputasi biasa \\nberdasarkan $1"},"wot_good_description":{"message":"Situs ini mempunyai reputasi baik \\nberdasarkan $1"},"wot_excellent_description":{"message":"Situs ini mempunyai reputasi sempurna \\nberdasarkan $1"},"settings_choose_size_and_position":{"message":"Atur ukuran dan posisi AdGuard Assistant"},"settings_icon_size":{"message":"Ukuran ikon:"},"settings_small":{"message":"Kecil"},"settings_big":{"message":"Besar"},"settings_position":{"message":"Posisi:"},"settings_left_top":{"message":"Atas kiri"},"settings_right_top":{"message":"Atas kanan"},"settings_left_bottom":{"message":"Bawah kiri"},"settings_right_bottom":{"message":"Bawah kanan"},"settings_cancel":{"message":"Batal"},"settings_save":{"message":"Simpan perubahan"}}');

/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUyIDE4Ij4KICAgIDxwYXRoIGQ9Ik01LjM1Myw3LjQxMiBMNS4zMDQsNy4zNjMgQzcuMTIxLDcuMTI1IDguNTI5LDUuNTg3IDguNTI5LDMuNzA2IEM4LjUyOSwxLjY1OSA2Ljg3LDAgNC44MjQsMCBDMi43NzcsMCAxLjExOCwxLjY1OSAxLjExOCwzLjcwNiBDMS4xMTgsNS41NzIgMi41MDIsNy4wOTkgNC4yOTQsNy4zNTggTDQuMjk0LDcuNDEyIEMxLjExOCw3LjQxMiAwLjA1OSw5LjUyOSAwLjA1OSw5LjUyOSBMMS4xMTgsMTUuODgyIEMxLjExOCwxNi45MzggMi40NzUsMTcuODA2IDQuMjQ0LDE3Ljk2NyBMNC4yOTQsMTggTDUuMzUzLDE4IEw1LjQwMywxNy45NjcgQzcuMTcyLDE3LjgwNiA4LjUyOSwxNi45MzggOC41MjksMTUuODgyIEw5LjU4OCw5LjUyOSBDOS41ODgsOS41MjkgOC41MjksNy40MTIgNS4zNTMsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTE1Ljk0MSw3LjQxMiBMMTUuODkyLDcuMzYzIEMxNy43MDksNy4xMjUgMTkuMTE4LDUuNTg3IDE5LjExOCwzLjcwNiBDMTkuMTE4LDEuNjU5IDE3LjQ1OCwwIDE1LjQxMiwwIEMxMy4zNjUsMCAxMS43MDYsMS42NTkgMTEuNzA2LDMuNzA2IEMxMS43MDYsNS41NzIgMTMuMDksNy4wOTkgMTQuODgyLDcuMzU4IEwxNC44ODIsNy40MTIgQzExLjcwNiw3LjQxMiAxMC42NDcsOS41MjkgMTAuNjQ3LDkuNTI5IEwxMS43MDYsMTUuODgyIEMxMS43MDYsMTYuOTM4IDEzLjA2MywxNy44MDYgMTQuODMzLDE3Ljk2NyBMMTQuODgyLDE4IEwxNS45NDEsMTggTDE1Ljk5MSwxNy45NjcgQzE3Ljc2LDE3LjgwNiAxOS4xMTgsMTYuOTM4IDE5LjExOCwxNS44ODIgTDIwLjE3Niw5LjUyOSBDMjAuMTc2LDkuNTI5IDE5LjExOCw3LjQxMiAxNS45NDEsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgogICAgPHBhdGggZD0iTTI2LjUyOSw3LjQxMiBMMjYuNDgxLDcuMzYzIEMyOC4yOTgsNy4xMjUgMjkuNzA2LDUuNTg3IDI5LjcwNiwzLjcwNiBDMjkuNzA2LDEuNjU5IDI4LjA0NywwIDI2LDAgQzIzLjk1MywwIDIyLjI5NCwxLjY1OSAyMi4yOTQsMy43MDYgQzIyLjI5NCw1LjU3MiAyMy42NzgsNy4wOTkgMjUuNDcxLDcuMzU4IEwyNS40NzEsNy40MTIgQzIyLjI5NCw3LjQxMiAyMS4yMzUsOS41MjkgMjEuMjM1LDkuNTI5IEwyMi4yOTQsMTUuODgyIEMyMi4yOTQsMTYuOTM4IDIzLjY1MiwxNy44MDYgMjUuNDIxLDE3Ljk2NyBMMjUuNDcxLDE4IEwyNi41MjksMTggTDI2LjU3OSwxNy45NjcgQzI4LjM0OCwxNy44MDYgMjkuNzA2LDE2LjkzOCAyOS43MDYsMTUuODgyIEwzMC43NjUsOS41MjkgQzMwLjc2NSw5LjUyOSAyOS43MDYsNy40MTIgMjYuNTI5LDcuNDEyIHoiIGZpbGw9IiNENkQ2RDYiLz4KICAgIDxwYXRoIGQ9Ik0zNy4xMTgsNy40MTIgTDM3LjA2OSw3LjM2MyBDMzguODg2LDcuMTI1IDQwLjI5NCw1LjU4NyA0MC4yOTQsMy43MDYgQzQwLjI5NCwxLjY1OSAzOC42MzUsMCAzNi41ODgsMCBDMzQuNTQyLDAgMzIuODgyLDEuNjU5IDMyLjg4MiwzLjcwNiBDMzIuODgyLDUuNTcyIDM0LjI2Niw3LjA5OSAzNi4wNTksNy4zNTggTDM2LjA1OSw3LjQxMiBDMzIuODgyLDcuNDEyIDMxLjgyNCw5LjUyOSAzMS44MjQsOS41MjkgTDMyLjg4MiwxNS44ODIgQzMyLjg4MiwxNi45MzggMzQuMjQsMTcuODA2IDM2LjAwOSwxNy45NjcgTDM2LjA1OSwxOCBMMzcuMTE4LDE4IEwzNy4xNjcsMTcuOTY3IEMzOC45MzcsMTcuODA2IDQwLjI5NCwxNi45MzggNDAuMjk0LDE1Ljg4MiBMNDEuMzUzLDkuNTI5IEM0MS4zNTMsOS41MjkgNDAuMjk0LDcuNDEyIDM3LjExOCw3LjQxMiB6IiBmaWxsPSIjRDZENkQ2Ii8+CiAgICA8cGF0aCBkPSJNNDcuNzA2LDcuNDEyIEw0Ny42NTcsNy4zNjMgQzQ5LjQ3NCw3LjEyNSA1MC44ODIsNS41ODcgNTAuODgyLDMuNzA2IEM1MC44ODIsMS42NTkgNDkuMjIzLDAgNDcuMTc2LDAgQzQ1LjEzLDAgNDMuNDcxLDEuNjU5IDQzLjQ3MSwzLjcwNiBDNDMuNDcxLDUuNTcyIDQ0Ljg1NCw3LjA5OSA0Ni42NDcsNy4zNTggTDQ2LjY0Nyw3LjQxMiBDNDMuNDcxLDcuNDEyIDQyLjQxMiw5LjUyOSA0Mi40MTIsOS41MjkgTDQzLjQ3MSwxNS44ODIgQzQzLjQ3MSwxNi45MzggNDQuODI4LDE3LjgwNiA0Ni41OTcsMTcuOTY3IEw0Ni42NDcsMTggTDQ3LjcwNiwxOCBMNDcuNzU2LDE3Ljk2NyBDNDkuNTI1LDE3LjgwNiA1MC44ODIsMTYuOTM4IDUwLjg4MiwxNS44ODIgTDUxLjk0MSw5LjUyOSBDNTEuOTQxLDkuNTI5IDUwLjg4Miw3LjQxMiA0Ny43MDYsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgo8L3N2Zz4K");

/***/ }),

/***/ 1066:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard 助理","description":"提供簡單的且方便的方法以直接地從該瀏覽器管理過濾"}}}');

/***/ }),

/***/ 1080:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"ウェブサイト","settings_position_save_all":"すべてのウェブサイト","settings_position_save_this":"このウェブサイト","assistant_select_element_start":"開始","assistant_select_element_text":"ブロックするページ上の要素を選択してください。 ページを更新し要素のブロックモードを解除します。","menu_filtration_status":{"message":"このウェブサイトをフィルタリング"},"menu_do_not_filter_30_sec":{"message":"30秒間フィルタリングしない"},"menu_block_ad_on_site":{"message":"このサイトで広告を手動ブロックする"},"menu_report_abuse":{"message":"このサイトの問題を報告する"},"menu_site_report":{"message":"ウェブサイトのセキュリティレポート"},"menu_settings":{"message":"アシスタントの設定"},"menu_wot_reputation_indicator":{"message":"ウェブサイトの評価基準"},"menu_wot_reputation_confidence_level":{"message":"評判の信頼度（Reputation Confidence Level）"},"assistant_select_element":{"message":"手動で要素をブロック"},"assistant_select_element_ext":{"message":"ブロックしたい要素をクリックしてください。AdGuardがその要素に対してユーザールールを作成します。"},"assistant_select_element_cancel":{"message":"キャンセル"},"assistant_block_element":{"message":"手動で要素をブロック"},"assistant_block_element_explain":{"message":"要素のブロックルールを作成します。"},"assistant_slider_explain":{"message":"スライダーを移動してフレームのサイズを調整してください："},"assistant_extended_settings":{"message":"高度な設定"},"assistant_apply_rule_to_all_sites":{"message":"全てのウェブサイトにこのルールを適用"},"assistant_block_by_reference":{"message":"参照リンクによるブロック"},"assistant_block_similar":{"message":"類似項目をブロック"},"assistant_another_element":{"message":"他の要素を選択"},"assistant_preview":{"message":"プレビュー"},"assistant_block":{"message":"ブロック"},"assistant_settings":{"message":"アシスタントの設定"},"assistant_preview_header":{"message":"要素ブロック後の画面プレビューを確認する"},"assistant_preview_header_info":{"message":"画面プレビューで要素が思い通りにブロックされているかを確認してください。"},"assistant_preview_end":{"message":"プレビューを終了"},"wot_unknown_description":{"message":"評判が定義されていません"},"wot_bad_description":{"message":"このウェブサイトは非常に評判が悪いです: "},"wot_poor_description":{"message":"このウェブサイトは評判が悪いです: "},"wot_unsatisfactory_description":{"message":"このウェブサイトは評判がやや悪いです: "},"wot_good_description":{"message":"このウェブサイトは評判が良いです: "},"wot_excellent_description":{"message":"このウェブサイトはとても評判が良いです: "},"settings_choose_size_and_position":{"message":"AdGuardアシスタントのサイズと位置を調整する"},"settings_icon_size":{"message":"アイコンの大きさ:"},"settings_small":{"message":"小"},"settings_big":{"message":"大"},"settings_position":{"message":"位置:"},"settings_left_top":{"message":"左上"},"settings_right_top":{"message":"右上"},"settings_left_bottom":{"message":"左下"},"settings_right_bottom":{"message":"右下"},"settings_cancel":{"message":"キャンセル"},"settings_save":{"message":"設定を保存"}}');

/***/ }),

/***/ 1266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICAgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCA0MDAgMjAwIj4KICAgIDxkZWZzPgogICAgICAgIDxnIGlkPSJhcnIiPgogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjE4LjgsODQuNSAxOC44LDMyIDg2LjcsMTAwIDEwMCw4Ni43IDMyLDE4LjggODQuNSwxOC44IDg0LjUsMCAxOC44LDAgMCwwIDAsMTguOAogICAgICAgICAgICAgICAgMCw4NC41IAkiLz4KICAgICAgICA8L2c+CiAgICA8L2RlZnM+CgogICAgPHVzZSB4bGluazpocmVmPSIjYXJyIiBmaWxsPSIjYWJhYmFiIi8+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNhcnIiIGZpbGw9IiNhYmFiYWIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDEwMCAxMDApIi8+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNhcnIiIGZpbGw9IiNhYmFiYWIiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxMDAgMTAwKSIvPgogICAgPHVzZSB4bGluazpocmVmPSIjYXJyIiBmaWxsPSIjYWJhYmFiIiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTAwIDEwMCkiLz4KCiAgICA8dXNlIHhsaW5rOmhyZWY9IiNhcnIiIGZpbGw9IiNmZmYiIHg9IjIwMCIvPgogICAgPHVzZSB4bGluazpocmVmPSIjYXJyIiBmaWxsPSIjZmZmIiB5PSItMjAwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMDAgMTAwKSIvPgogICAgPHVzZSB4bGluazpocmVmPSIjYXJyIiBmaWxsPSIjZmZmIiB4PSItMjAwIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTAwIDEwMCkiLz4KICAgIDx1c2UgeGxpbms6aHJlZj0iI2FyciIgZmlsbD0iI2ZmZiIgeT0iMjAwIiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTAwIDEwMCkiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 1295:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Interneto svetainės","settings_position_save_all":"Visos svetainės","settings_position_save_this":"Ši svetainė","assistant_select_element_start":"Pradėti","assistant_select_element_text":"Pasirinkite elementą puslapyje, kurį norite blokuoti. Atnaujinkite puslapį, kad atšauktumėte elementų blokavimo režimą.","menu_filtration_status":{"message":"Filtravimas šioje svetainėje"},"menu_do_not_filter_30_sec":{"message":"Nefiltruoti 30 sekundžių"},"menu_block_ad_on_site":{"message":"Blokuoti reklamą šioje svetainėje"},"menu_report_abuse":{"message":"Pranešti apie svetainę"},"menu_site_report":{"message":"Svetainės saugumo ataskaita"},"menu_settings":{"message":"Asistento nustatymai"},"menu_wot_reputation_indicator":{"message":"Svetainės reputacijos rodiklis"},"menu_wot_reputation_confidence_level":{"message":"Reputacijos pasitikėjimo lygis"},"assistant_select_element":{"message":"Blokuoti elementą"},"assistant_select_element_ext":{"message":"Spustelėkite elementą, kurį norite užblokuoti. \\"AdGuard\\" sukurs vartotojo taisyklę"},"assistant_select_element_cancel":{"message":"Atšaukti"},"assistant_block_element":{"message":"Blokuoti elementą"},"assistant_block_element_explain":{"message":"Sukurti elemento blokavimo taisyklę"},"assistant_slider_explain":{"message":"Perkelkite slankiklį, kad pakoreguotumėte rėmelio dydį"},"assistant_extended_settings":{"message":"Išplėstiniai nustatymai"},"assistant_apply_rule_to_all_sites":{"message":"Pritaikyti taisyklę visoms svetainėms"},"assistant_block_by_reference":{"message":"Blokuoti pagal nuorodą"},"assistant_block_similar":{"message":"Blokuoti panašius"},"assistant_another_element":{"message":"Pasirinkti kitą elementą"},"assistant_preview":{"message":"Peržiūra"},"assistant_block":{"message":"Užblokuoti"},"assistant_settings":{"message":"Asistento nustatymai"},"assistant_preview_header":{"message":"Peržiūrėti užblokuotą elementą"},"assistant_preview_header_info":{"message":"Patikrinkite, ar elementas tinkamai užblokuotas"},"assistant_preview_end":{"message":"Baigti peržiūrą"},"wot_unknown_description":{"message":"Šios svetainės reputacija nėra apibrėžta $1"},"wot_bad_description":{"message":"Ši svetainė turi labai blogą reputaciją\\npagal $1"},"wot_poor_description":{"message":"Ši svetainė turi blogą reputaciją pagal $1"},"wot_unsatisfactory_description":{"message":"Ši svetainė turi prastą reputaciją pagal $1"},"wot_good_description":{"message":"Ši svetainė turi gerą reputaciją pagal $1"},"wot_excellent_description":{"message":"Ši svetainė turi puikią reputaciją pagal $1"},"settings_choose_size_and_position":{"message":"Nustatykite AdGuard Asistento dydį ir padėtį"},"settings_icon_size":{"message":"Piktogramos dydis:"},"settings_small":{"message":"Maža"},"settings_big":{"message":"Didelė"},"settings_position":{"message":"Padėtis:"},"settings_left_top":{"message":"Viršuje kairėje"},"settings_right_top":{"message":"Viršuje dešinėje"},"settings_left_bottom":{"message":"Apačioje kairėje"},"settings_right_bottom":{"message":"Apačioje dešinėje"},"settings_cancel":{"message":"Atšaukti"},"settings_save":{"message":"Išsaugoti pakeitimus"}}');

/***/ }),

/***/ 1468:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Сайты","settings_position_save_all":"На всех","settings_position_save_this":"Только на этом","assistant_select_element_start":"Начать","assistant_select_element_text":"Выберите на странице элемент для блокирования. Обновите страницу, чтобы отменить режим блокировки элементов.","menu_filtration_status":{"message":"Фильтрация на этом сайте"},"menu_do_not_filter_30_sec":{"message":"Не фильтровать 30 секунд"},"menu_block_ad_on_site":{"message":"Заблокировать рекламу на сайте"},"menu_report_abuse":{"message":"Пожаловаться на сайт"},"menu_site_report":{"message":"Отчёт о безопасности сайта"},"menu_settings":{"message":"Настроить помощник"},"menu_wot_reputation_indicator":{"message":"Индикатор репутации сайта"},"menu_wot_reputation_confidence_level":{"message":"Уровень доверия к репутации"},"assistant_select_element":{"message":"Заблокировать элемент"},"assistant_select_element_ext":{"message":"Нажмите на элемент, который хотите заблокировать. AdGuard создаст для него правило блокировки"},"assistant_select_element_cancel":{"message":"Отмена"},"assistant_block_element":{"message":"Заблокировать элемент"},"assistant_block_element_explain":{"message":"Будет создано правило блокировки элемента"},"assistant_slider_explain":{"message":"Двигайте ползунок, чтобы отрегулировать размер"},"assistant_extended_settings":{"message":"Расширенные настройки"},"assistant_apply_rule_to_all_sites":{"message":"Применить правило для всех сайтов"},"assistant_block_by_reference":{"message":"Блокировать по ссылке"},"assistant_block_similar":{"message":"Блокировать похожие"},"assistant_another_element":{"message":"Выбрать другой элемент"},"assistant_preview":{"message":"Предпросмотр"},"assistant_block":{"message":"Заблокировать"},"assistant_settings":{"message":"Настройка помощника"},"assistant_preview_header":{"message":"Предпросмотр"},"assistant_preview_header_info":{"message":"Проверьте, что элемент заблокировано верно"},"assistant_preview_end":{"message":"Назад"},"wot_unknown_description":{"message":"Репутация не определена расширением $1"},"wot_bad_description":{"message":"У сайта очень плохая репутация по данным $1"},"wot_poor_description":{"message":"У сайта плохая репутация по данным $1"},"wot_unsatisfactory_description":{"message":"У сайта неудовлетворительная репутация по данным $1"},"wot_good_description":{"message":"У сайта хорошая репутация по данным $1"},"wot_excellent_description":{"message":"У сайта отличная репутация по данным $1"},"settings_choose_size_and_position":{"message":"Настройте размер и положение помощника AdGuard"},"settings_icon_size":{"message":"Размер иконки:"},"settings_small":{"message":"Маленькая"},"settings_big":{"message":"Большая"},"settings_position":{"message":"Расположение:"},"settings_left_top":{"message":"Вверху слева"},"settings_right_top":{"message":"Вверху справа"},"settings_left_bottom":{"message":"Внизу слева"},"settings_right_bottom":{"message":"Внизу справа"},"settings_cancel":{"message":"Отмена"},"settings_save":{"message":"Сохранить настройки"}}');

/***/ }),

/***/ 1733:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Web stranice","settings_position_save_all":"Sve web stranice","settings_position_save_this":"Ova web stranica","assistant_select_element_start":"Započni","assistant_select_element_text":"Odaberite element na stranici za blokiranje. Osvježite stranicu za izlazak iz načina blokade elemenata.","menu_filtration_status":{"message":"Filtriranje na ovoj web stranici"},"menu_do_not_filter_30_sec":{"message":"Ne filtriraj idućih 30 sekundi"},"menu_block_ad_on_site":{"message":"Blokiraj oglas na ovoj web stranici"},"menu_report_abuse":{"message":"Prijavi ovu stranicu"},"menu_site_report":{"message":"Sigurnosni izvještaj stranice"},"menu_settings":{"message":"Postavke pomoćnika"},"menu_wot_reputation_indicator":{"message":"Indikator reputacije stranice"},"menu_wot_reputation_confidence_level":{"message":"Razina povjerenja reputacije"},"assistant_select_element":{"message":"Blokiraj element"},"assistant_select_element_ext":{"message":"Kliknite element koji želite blokirati. AdGuard će za to stvoriti korisničko pravilo"},"assistant_select_element_cancel":{"message":"Poništi"},"assistant_block_element":{"message":"Blokiraj element"},"assistant_block_element_explain":{"message":"Izradite pravilo za blokiranje elemenata"},"assistant_slider_explain":{"message":"Pomaknite klizač za podešavanje veličine okvira"},"assistant_extended_settings":{"message":"Napredne postavke"},"assistant_apply_rule_to_all_sites":{"message":"Primjeni pravilo na sve web stranice"},"assistant_block_by_reference":{"message":"Blokiraj referentnom vezom"},"assistant_block_similar":{"message":"Blokiraj slične"},"assistant_another_element":{"message":"Odaberite drugi element"},"assistant_preview":{"message":"Pregled"},"assistant_block":{"message":"Blokiraj"},"assistant_settings":{"message":"Postavke pomoćnika"},"assistant_preview_header":{"message":"Pregled blokiranog elementa"},"assistant_preview_header_info":{"message":"Provjerite je li element ispravno blokiran"},"assistant_preview_end":{"message":"Izlaz iz pregleda"},"wot_unknown_description":{"message":"Reputaciju stranice nije odredio $1"},"wot_bad_description":{"message":"Web stranica ima jako lošu reputaciju \\nprema $1"},"wot_poor_description":{"message":"Web stranica ima lošu reputaciju \\nprema $1"},"wot_unsatisfactory_description":{"message":"Web stranica ima lošu reputaciju \\nprema $1"},"wot_good_description":{"message":"Web stranica ima dobru reputaciju \\nprema $1"},"wot_excellent_description":{"message":"Web stranica ima odličnu reputaciju \\nprema $1"},"settings_choose_size_and_position":{"message":"Podesite veličinu i poziciju AdGuard Pomoćnika"},"settings_icon_size":{"message":"Veličina ikone:"},"settings_small":{"message":"Malo"},"settings_big":{"message":"Veliko"},"settings_position":{"message":"Pozicija:"},"settings_left_top":{"message":"Gore lijevo"},"settings_right_top":{"message":"Gore desno"},"settings_left_bottom":{"message":"Dolje lijevo"},"settings_right_bottom":{"message":"Dolje desno"},"settings_cancel":{"message":"Poništi"},"settings_save":{"message":"Spremi promjene"}}');

/***/ }),

/***/ 1774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogICAgPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWVlIiBzdHJva2Utd2lkdGg9IjIwIiB4MT0iNSIgeTE9IjUiIHgyPSI5NSIgeTI9Ijk1Ii8+CiAgICA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNlZWUiIHN0cm9rZS13aWR0aD0iMjAiIHgxPSI5NSIgeTE9IjUiIHgyPSI1IiB5Mj0iOTUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 1777:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Siteler","settings_position_save_all":"Tüm siteler","settings_position_save_this":"Bu site","assistant_select_element_start":"Başla","assistant_select_element_text":"Engellemek için sayfada bir öğe seçin. Öğe engelleme modunu iptal etmek için sayfayı yenileyin.","menu_filtration_status":{"message":"Bu sitedeki filtreleme"},"menu_do_not_filter_30_sec":{"message":"30 saniyeliğine filtreleme yapma"},"menu_block_ad_on_site":{"message":"Bu sitede reklam engelle"},"menu_report_abuse":{"message":"Siteyi bildir"},"menu_site_report":{"message":"Sitenin güvenlik raporu"},"menu_settings":{"message":"Asistan ayarları"},"menu_wot_reputation_indicator":{"message":"Site itibarı göstergesi"},"menu_wot_reputation_confidence_level":{"message":"İtibarın Güven Seviyesi"},"assistant_select_element":{"message":"Bir öğeyi engelle"},"assistant_select_element_ext":{"message":"Engellemek istediğiniz bir öğeye tıklayın. AdGuard bunun için bir kullanıcı kuralı oluşturur"},"assistant_select_element_cancel":{"message":"İptal"},"assistant_block_element":{"message":"Bir öğeyi engelle"},"assistant_block_element_explain":{"message":"Öğe engelleme kuralı oluşturun"},"assistant_slider_explain":{"message":"Çerçevenin boyutunu ayarlamak için kaydırıcıyı hareket ettirin"},"assistant_extended_settings":{"message":"Gelişmiş ayarlar"},"assistant_apply_rule_to_all_sites":{"message":"Kuralı tüm sitelerde uygula"},"assistant_block_by_reference":{"message":"Referans bağlantı ile engelle"},"assistant_block_similar":{"message":"Benzerlerini engelle"},"assistant_another_element":{"message":"Farklı bir öğe seç"},"assistant_preview":{"message":"Önizleme"},"assistant_block":{"message":"Engelle"},"assistant_settings":{"message":"Asistan ayarları"},"assistant_preview_header":{"message":"Engellenen öğeyi önizleyin"},"assistant_preview_header_info":{"message":"Öğenin doğru şekilde engellenip engellenmediğini kontrol edin"},"assistant_preview_end":{"message":"Önizlemeden çık"},"wot_unknown_description":{"message":"Bu sitenin itibarı $1 tarafından henüz belirlenmemiş"},"wot_bad_description":{"message":"1$\'a göre bu site çok kötü \\nbir itibara sahip"},"wot_poor_description":{"message":"1$\'a göre bu site kötü \\nbir itibara sahip"},"wot_unsatisfactory_description":{"message":"1$\'a göre bu site zayıf\\nbir itibara sahip"},"wot_good_description":{"message":"1$\'a göre bu site iyi\\nbir itibara sahip"},"wot_excellent_description":{"message":"1$\'a göre bu site mükemmel\\nbir itibara sahip"},"settings_choose_size_and_position":{"message":"AdGuard Asistanın boyutunu ve konumunu ayarlayın"},"settings_icon_size":{"message":"Simge boyutu:"},"settings_small":{"message":"Küçük"},"settings_big":{"message":"Büyük"},"settings_position":{"message":"Konum:"},"settings_left_top":{"message":"Sol üst"},"settings_right_top":{"message":"Sağ üst"},"settings_left_bottom":{"message":"Sol alt"},"settings_right_bottom":{"message":"Sağ alt"},"settings_cancel":{"message":"İptal"},"settings_save":{"message":"Değişiklikleri kaydet"}}');

/***/ }),

/***/ 1903:
/***/ ((module) => {

// Module
var code = "<div class=\"main mobile main-popup\"> <div class=\"main-popup__logo adguard-assistant-button-main-logo\"></div> <h2 class=\"mobile-title main-popup__title\" i18n=\"assistant_select_element\"></h2> <div class=\"content main-popup__content\" i18n=\"assistant_select_element_text\"></div> <div class=\"footer\"> <button i18n=\"assistant_select_element_start\" class=\"btn btn-active start-select-mode main-popup__btn main-popup__btn--green\"></button> <button i18n=\"assistant_select_element_cancel\" class=\"btn cancel-select-mode main-popup__btn\"></button> </div> <i class=\"main-version\" id=\"appVersion\"></i> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 1912:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Pomoćnik","description":"Pruža jednostavan i praktičan način upravljanja filtriranjem izravno iz preglednika"}}}');

/***/ }),

/***/ 1915:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Помощник AdGuard","description":"Позволяет легко и быстро управлять фильтрацией прямо из браузера"}}}');

/***/ }),

/***/ 1932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUyIDE4Ij4KICAgIDxwYXRoIGQ9Ik01LjM1Myw3LjQxMiBMNS4zMDQsNy4zNjMgQzcuMTIxLDcuMTI1IDguNTI5LDUuNTg3IDguNTI5LDMuNzA2IEM4LjUyOSwxLjY1OSA2Ljg3LDAgNC44MjQsMCBDMi43NzcsMCAxLjExOCwxLjY1OSAxLjExOCwzLjcwNiBDMS4xMTgsNS41NzIgMi41MDIsNy4wOTkgNC4yOTQsNy4zNTggTDQuMjk0LDcuNDEyIEMxLjExOCw3LjQxMiAwLjA1OSw5LjUyOSAwLjA1OSw5LjUyOSBMMS4xMTgsMTUuODgyIEMxLjExOCwxNi45MzggMi40NzUsMTcuODA2IDQuMjQ0LDE3Ljk2NyBMNC4yOTQsMTggTDUuMzUzLDE4IEw1LjQwMywxNy45NjcgQzcuMTcyLDE3LjgwNiA4LjUyOSwxNi45MzggOC41MjksMTUuODgyIEw5LjU4OCw5LjUyOSBDOS41ODgsOS41MjkgOC41MjksNy40MTIgNS4zNTMsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTE1Ljk0MSw3LjQxMiBMMTUuODkyLDcuMzYzIEMxNy43MDksNy4xMjUgMTkuMTE4LDUuNTg3IDE5LjExOCwzLjcwNiBDMTkuMTE4LDEuNjU5IDE3LjQ1OCwwIDE1LjQxMiwwIEMxMy4zNjUsMCAxMS43MDYsMS42NTkgMTEuNzA2LDMuNzA2IEMxMS43MDYsNS41NzIgMTMuMDksNy4wOTkgMTQuODgyLDcuMzU4IEwxNC44ODIsNy40MTIgQzExLjcwNiw3LjQxMiAxMC42NDcsOS41MjkgMTAuNjQ3LDkuNTI5IEwxMS43MDYsMTUuODgyIEMxMS43MDYsMTYuOTM4IDEzLjA2MywxNy44MDYgMTQuODMzLDE3Ljk2NyBMMTQuODgyLDE4IEwxNS45NDEsMTggTDE1Ljk5MSwxNy45NjcgQzE3Ljc2LDE3LjgwNiAxOS4xMTgsMTYuOTM4IDE5LjExOCwxNS44ODIgTDIwLjE3Niw5LjUyOSBDMjAuMTc2LDkuNTI5IDE5LjExOCw3LjQxMiAxNS45NDEsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTI2LjUyOSw3LjQxMiBMMjYuNDgxLDcuMzYzIEMyOC4yOTgsNy4xMjUgMjkuNzA2LDUuNTg3IDI5LjcwNiwzLjcwNiBDMjkuNzA2LDEuNjU5IDI4LjA0NywwIDI2LDAgQzIzLjk1MywwIDIyLjI5NCwxLjY1OSAyMi4yOTQsMy43MDYgQzIyLjI5NCw1LjU3MiAyMy42NzgsNy4wOTkgMjUuNDcxLDcuMzU4IEwyNS40NzEsNy40MTIgQzIyLjI5NCw3LjQxMiAyMS4yMzUsOS41MjkgMjEuMjM1LDkuNTI5IEwyMi4yOTQsMTUuODgyIEMyMi4yOTQsMTYuOTM4IDIzLjY1MiwxNy44MDYgMjUuNDIxLDE3Ljk2NyBMMjUuNDcxLDE4IEwyNi41MjksMTggTDI2LjU3OSwxNy45NjcgQzI4LjM0OCwxNy44MDYgMjkuNzA2LDE2LjkzOCAyOS43MDYsMTUuODgyIEwzMC43NjUsOS41MjkgQzMwLjc2NSw5LjUyOSAyOS43MDYsNy40MTIgMjYuNTI5LDcuNDEyIHoiIGZpbGw9IiNENkQ2RDYiLz4KICAgIDxwYXRoIGQ9Ik0zNy4xMTgsNy40MTIgTDM3LjA2OSw3LjM2MyBDMzguODg2LDcuMTI1IDQwLjI5NCw1LjU4NyA0MC4yOTQsMy43MDYgQzQwLjI5NCwxLjY1OSAzOC42MzUsMCAzNi41ODgsMCBDMzQuNTQyLDAgMzIuODgyLDEuNjU5IDMyLjg4MiwzLjcwNiBDMzIuODgyLDUuNTcyIDM0LjI2Niw3LjA5OSAzNi4wNTksNy4zNTggTDM2LjA1OSw3LjQxMiBDMzIuODgyLDcuNDEyIDMxLjgyNCw5LjUyOSAzMS44MjQsOS41MjkgTDMyLjg4MiwxNS44ODIgQzMyLjg4MiwxNi45MzggMzQuMjQsMTcuODA2IDM2LjAwOSwxNy45NjcgTDM2LjA1OSwxOCBMMzcuMTE4LDE4IEwzNy4xNjcsMTcuOTY3IEMzOC45MzcsMTcuODA2IDQwLjI5NCwxNi45MzggNDAuMjk0LDE1Ljg4MiBMNDEuMzUzLDkuNTI5IEM0MS4zNTMsOS41MjkgNDAuMjk0LDcuNDEyIDM3LjExOCw3LjQxMiB6IiBmaWxsPSIjRDZENkQ2Ii8+CiAgICA8cGF0aCBkPSJNNDcuNzA2LDcuNDEyIEw0Ny42NTcsNy4zNjMgQzQ5LjQ3NCw3LjEyNSA1MC44ODIsNS41ODcgNTAuODgyLDMuNzA2IEM1MC44ODIsMS42NTkgNDkuMjIzLDAgNDcuMTc2LDAgQzQ1LjEzLDAgNDMuNDcxLDEuNjU5IDQzLjQ3MSwzLjcwNiBDNDMuNDcxLDUuNTcyIDQ0Ljg1NCw3LjA5OSA0Ni42NDcsNy4zNTggTDQ2LjY0Nyw3LjQxMiBDNDMuNDcxLDcuNDEyIDQyLjQxMiw5LjUyOSA0Mi40MTIsOS41MjkgTDQzLjQ3MSwxNS44ODIgQzQzLjQ3MSwxNi45MzggNDQuODI4LDE3LjgwNiA0Ni41OTcsMTcuOTY3IEw0Ni42NDcsMTggTDQ3LjcwNiwxOCBMNDcuNzU2LDE3Ljk2NyBDNDkuNTI1LDE3LjgwNiA1MC44ODIsMTYuOTM4IDUwLjg4MiwxNS44ODIgTDUxLjk0MSw5LjUyOSBDNTEuOTQxLDkuNTI5IDUwLjg4Miw3LjQxMiA0Ny43MDYsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgo8L3N2Zz4K");

/***/ }),

/***/ 1973:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"웹사이트","settings_position_save_all":"모든 웹사이트","settings_position_save_this":"이 웹사이트","assistant_select_element_start":"시작","assistant_select_element_text":"페이지에서 차단할 요소를 선택하세요. 요소 차단 모드를 취소하려면 페이지를 새로 고침하세요.","menu_filtration_status":{"message":"이 웹사이트에서의 보호"},"menu_do_not_filter_30_sec":{"message":"30초 동안 차단 일시정지"},"menu_block_ad_on_site":{"message":"이 웹사이트에서 광고 차단"},"menu_report_abuse":{"message":"이 웹사이트에 관한 불만 사항 제출"},"menu_site_report":{"message":"웹사이트 보안 보고"},"menu_settings":{"message":"어시스턴트 설정"},"menu_wot_reputation_indicator":{"message":"웹사이트 평판 표시기"},"menu_wot_reputation_confidence_level":{"message":"평판 신뢰 수준"},"assistant_select_element":{"message":"요소 차단"},"assistant_select_element_ext":{"message":"차단하려는 요소를 클릭합니다. AdGuard가 해당 요소에 대한 사용자 규칙을 생성합니다."},"assistant_select_element_cancel":{"message":"선택 모드 취소"},"assistant_block_element":{"message":"요소 차단"},"assistant_block_element_explain":{"message":"요소 차단 규칙을 생성하세요."},"assistant_slider_explain":{"message":"슬라이더를 움직여 프레임 크기를 조정합니다."},"assistant_extended_settings":{"message":"고급 설정"},"assistant_apply_rule_to_all_sites":{"message":"모든 웹사이트에 이 규칙 적용"},"assistant_block_by_reference":{"message":"참조 링크가 차단"},"assistant_block_similar":{"message":"유사한 요소 차단"},"assistant_another_element":{"message":"다른 요소 선택"},"assistant_preview":{"message":"미리 보기"},"assistant_block":{"message":"차단"},"assistant_settings":{"message":"어시스턴트 설정"},"assistant_preview_header":{"message":"차단된 요소 미리보기"},"assistant_preview_header_info":{"message":"요소가 올바르게 차단되었는지 확인하세요."},"assistant_preview_end":{"message":"미리 보기 종료"},"wot_unknown_description":{"message":"평판이 등록되지 않았습니다."},"wot_bad_description":{"message":"이 웹사이트는 아주 나쁜 평판을 갖고 있습니다.\\n제공 "},"wot_poor_description":{"message":"이 웹사이트는 나쁜 평판을 갖고 있습니다.\\n제공 "},"wot_unsatisfactory_description":{"message":"이 웹사이트는 좋지 않은 평판을 갖고 있습니다.\\n제공 "},"wot_good_description":{"message":"이 웹사이트는 좋은 평판을 갖고 있습니다.\\n제공 "},"wot_excellent_description":{"message":"이 웹사이트는 아주 좋은 평판을 갖고 있습니다.\\n제공 "},"settings_choose_size_and_position":{"message":"AdGuard 어시스턴트 크기와 위치를 조정합니다"},"settings_icon_size":{"message":"아이콘 크기:"},"settings_small":{"message":"작게"},"settings_big":{"message":"크게"},"settings_position":{"message":"위치:"},"settings_left_top":{"message":"왼쪽 위"},"settings_right_top":{"message":"오른쪽 위"},"settings_left_bottom":{"message":"왼쪽 아래"},"settings_right_bottom":{"message":"오른쪽 아래"},"settings_cancel":{"message":"취소"},"settings_save":{"message":"저장"}}');

/***/ }),

/***/ 2013:
/***/ ((module) => {

// Module
var code = "<div class=\"main adguard_sg_ignore\"> <div class=\"main_close adg-close\" id=\"close-button\"> <svg> <use xlink:href=\"#icon-cross\"/> </svg> </div> <div class=\"head\" id=\"drag-handle\"> <div i18n=\"assistant_select_element\" class=\"head_title\"></div> <div i18n=\"assistant_select_element_ext\" class=\"head_text\"></div> </div> <div class=\"foot\"> <button i18n=\"assistant_select_element_cancel\" type=\"button\" class=\"btn btn-default\" id=\"cancel-select-mode\"></button> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 2066:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save_all":"كافة مواقع الويب","settings_position_save_this":"هذا الموقع","assistant_select_element_start":"بدء","assistant_select_element_text":"اختر عنصرا في الصفحة للحظرقم بتحديث الصفحة لالغاء وضع حظر العنصر","menu_filtration_status":{"message":"تفعيل الفلترةعلى هذا الموقع"},"menu_do_not_filter_30_sec":{"message":"عدم الفلترة لمده 30 ثانيه"},"menu_block_ad_on_site":{"message":"منع الإعلان على هذا الموقع"},"menu_report_abuse":{"message":"الإبلاغ عن هذا الموقع"},"menu_site_report":{"message":"تقرير أمن الموقع"},"menu_settings":{"message":"إعدادات المساعد"},"menu_wot_reputation_indicator":{"message":"مؤشر سمعة الموقع"},"menu_wot_reputation_confidence_level":{"message":"مستوى الثقة في السمعة"},"assistant_select_element":{"message":"حظر العنصر"},"assistant_select_element_cancel":{"message":"الغاء"},"assistant_block_element":{"message":"حظر العنصر"},"assistant_extended_settings":{"message":"إعدادات متقدمة"},"assistant_apply_rule_to_all_sites":{"message":"تطبيق القاعدة علي كافة مواقع الويب"},"assistant_block_by_reference":{"message":"حظر حسب الارتباط المرجعي"},"assistant_block_similar":{"message":"حظر عنصر مما ثل"},"assistant_another_element":{"message":"حدد عنصرًا مختلفًا"},"assistant_preview":{"message":"المعاينه"},"assistant_block":{"message":"حظر"},"assistant_settings":{"message":"إعدادات المساعد"},"assistant_preview_end":{"message":"إنهاء المعاينة"},"wot_unknown_description":{"message":"$1 لم يتم تعريف سمعه هذا الموقع من قبل"},"wot_bad_description":{"message":"$1هذا الموقع لديه سمعة سيئة للغاية \\nوفقاً لـ"},"wot_poor_description":{"message":"$1 هذا الموقع له سمعة سيئة \\nوفقا لـ"},"wot_unsatisfactory_description":{"message":"$1هذا الموقع له سمعة سيئة\\nوفقا لـ"},"wot_good_description":{"message":"$1يتمتع هذا الموقع بسمعة طيبة\\nوفقا لـ"},"wot_excellent_description":{"message":"هذا الموقع يتمتع بسمعة ممتازة\\nوفقاً لـ $1"},"settings_choose_size_and_position":{"message":"وموضعه AdGuard ضبط حجم مساعد"},"settings_icon_size":{"message":":حجم الرمز"},"settings_small":{"message":"صغير"},"settings_big":{"message":"كبير"},"settings_position":{"message":"وضع"},"settings_left_top":{"message":"اعلي اليسار"},"settings_right_top":{"message":"اعلي اليمين"},"settings_left_bottom":{"message":"أسفل لليسار"},"settings_right_bottom":{"message":"أسفل لليمين"},"settings_cancel":{"message":"الغاء"},"settings_save":{"message":"حفظ التغييرات"}}');

/***/ }),

/***/ 2079:
/***/ ((module) => {

// Module
var code = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"> <symbol id=\"icon-cross\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\"> <path d=\"M6 5.99976L18 17.9998\"/> <path d=\"M6 17.9998L18 5.99976\"/> </symbol> <symbol id=\"icon-arrow-down\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M18 16L12 10L6 16\"/> </symbol> <symbol id=\"icon-checkbox-off\" viewBox=\"0 0 24 24\" fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M21 3H3V21H21V3Z\"/> </symbol> <symbol id=\"icon-checkbox-on\" viewBox=\"0 0 24 24\" fill=\"none\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"> <path fill=\"currentColor\" d=\"M22 2V22H2V2H22Z\"/> <path fill=\"white\" d=\"M17.4885 8.43092C17.8028 8.70071 17.8389 9.17421 17.5691 9.48851L11.028 17.1087L6.46449 12.4546C6.17448 12.1589 6.17915 11.684 6.4749 11.394C6.77066 11.104 7.24551 11.1087 7.53551 11.4044L10.9546 14.8913L16.4309 8.51151C16.7007 8.19721 17.1742 8.16113 17.4885 8.43092Z\"/> </symbol> </svg> ";
// Exports
module.exports = code;

/***/ }),

/***/ 2271:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Sitios web","settings_position_save_all":"Todos los sitios web","settings_position_save_this":"Este sitio web","assistant_select_element_start":"Comenzar","assistant_select_element_text":"Elige un elemento en la página para bloquear. Actualiza la página para cancelar el bloqueo de elementos.","menu_filtration_status":{"message":"Filtrado en este sitio web"},"menu_do_not_filter_30_sec":{"message":"No filtrar durante 30 segundos"},"menu_block_ad_on_site":{"message":"Bloquear anuncios en este sitio web"},"menu_report_abuse":{"message":"Reportar el sitio web"},"menu_site_report":{"message":"Informe de seguridad del sitio web"},"menu_settings":{"message":"Configuración del asistente"},"menu_wot_reputation_indicator":{"message":"Indicador de reputación del sitio"},"menu_wot_reputation_confidence_level":{"message":"Nivel de confianza de reputación"},"assistant_select_element":{"message":"Bloquear un elemento"},"assistant_select_element_ext":{"message":"Haz clic en un elemento que deseas bloquear. AdGuard creará una regla de usuario para él"},"assistant_select_element_cancel":{"message":"Cancelar"},"assistant_block_element":{"message":"Bloquear un elemento"},"assistant_block_element_explain":{"message":"Crea una regla de bloqueo de elementos"},"assistant_slider_explain":{"message":"Mueve el control deslizante para ajustar el tamaño del marco"},"assistant_extended_settings":{"message":"Configuración avanzada"},"assistant_apply_rule_to_all_sites":{"message":"Aplicar la regla a todos los sitios web"},"assistant_block_by_reference":{"message":"Bloquear por enlace de referencia"},"assistant_block_similar":{"message":"Bloquear elemento similar"},"assistant_another_element":{"message":"Seleccionar otro elemento"},"assistant_preview":{"message":"Vista previa"},"assistant_block":{"message":"Bloquear"},"assistant_settings":{"message":"Configuración del asistente"},"assistant_preview_header":{"message":"Vista previa del elemento bloqueado"},"assistant_preview_header_info":{"message":"Verifica si el elemento está bloqueado correctamente"},"assistant_preview_end":{"message":"Salir de vista previa"},"wot_unknown_description":{"message":"La reputación de este sitio web no está definida por $1"},"wot_bad_description":{"message":"Este sitio web tiene muy mala reputación\\nde acuerdo a $1"},"wot_poor_description":{"message":"Este sitio web tiene mala reputación\\nde acuerdo a $1"},"wot_unsatisfactory_description":{"message":"Este sitio web tiene pobre reputación\\nde acuerdo a $1"},"wot_good_description":{"message":"Este sitio web tiene buena reputación\\nde acuerdo a $1"},"wot_excellent_description":{"message":"Este sitio web tiene excelente reputación\\nde acuerdo a $1"},"settings_choose_size_and_position":{"message":"Ajustar el tamaño y la posición del Asistente de AdGuard"},"settings_icon_size":{"message":"Tamaño del icono:"},"settings_small":{"message":"Pequeño"},"settings_big":{"message":"Grande"},"settings_position":{"message":"Posición:"},"settings_left_top":{"message":"Arriba a la izquierda"},"settings_right_top":{"message":"Arriba a la derecha"},"settings_left_bottom":{"message":"Abajo a la izquierda"},"settings_right_bottom":{"message":"Abajo a la derecha"},"settings_cancel":{"message":"Cancelar"},"settings_save":{"message":"Guardar cambios"}}');

/***/ }),

/***/ 2287:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5590);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9869);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(5767);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.id, ":host {\n  display: block!important;\n  position: relative!important;\n  width: 0!important;\n  height: 0!important;\n  margin: 0!important;\n  padding: 0!important;\n  z-index: 2147483647!important;\n}\n:host ::after,\n:host ::before {\n  display: none!important;\n}\n.adguard-assistant-button-main-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") !important;\n}\n.adguard-alert {\n  cursor: pointer;\n  left: 0;\n  top: 0;\n  position: fixed !important;\n  z-index: 2147483647 !important;\n  width: 40px !important;\n  height: 40px !important;\n  zoom: 1 !important;\n  display: inline-block !important;\n  margin: 0 !important;\n  border: 0 !important;\n  padding: 0 !important;\n  will-change: transform;\n  opacity: 1;\n  touch-action: none;\n  -ms-touch-action: none;\n  visibility: visible !important;\n  min-height: auto !important;\n  max-height: auto !important;\n  min-width: auto !important;\n  max-width: auto !important;\n  background-size: 21px!important;\n  background-position: center center!important;\n  background-repeat: no-repeat !important;\n  background-color: #fff !important;\n  border: none !important;\n  box-shadow: 0 0 10px 3px rgba(162, 161, 161, 0.3) !important;\n  border-radius: 100% !important;\n  transition: background-color 0.3s ease;\n}\n.adguard-alert.sg_hide_element {\n  display: none!important;\n}\n.adguard-alert.logo-small {\n  width: 24px !important;\n  height: 24px !important;\n  background-position: 50% 6px!important;\n  background-size: 14px!important;\n}\n.adguard-alert:hover {\n  background-color: #ccf0d4 !important;\n}\n@media print {\n  .adguard-alert {\n    display: none!important;\n  }\n}\n.adguard-assistant-button-right {\n  left: auto;\n  right: 0;\n}\n.adguard-assistant-button-left {\n  left: 0;\n  right: auto;\n}\n.adguard-assistant-button-top {\n  top: 0;\n  bottom: auto;\n}\n.adguard-assistant-button-bottom {\n  top: auto;\n  bottom: 0;\n}\n.adguard-assistant-button-top.adguard-assistant-button-left {\n  left: 0;\n  right: auto;\n  transform: translate3d(10px, 10px, 0);\n}\n.adguard-assistant-button-top.adguard-assistant-button-right {\n  left: auto;\n  right: 0;\n  transform: translate3d(-10px, 10px, 0);\n}\n.adguard-assistant-button-bottom.adguard-assistant-button-left {\n  left: 0;\n  right: auto;\n  transform: translate3d(10px, -10px, 0);\n}\n.adguard-assistant-button-bottom.adguard-assistant-button-right {\n  left: auto;\n  right: 0;\n  transform: translate3d(-10px, -10px, 0);\n}\n.adguard-assistant-button-bottom.adguard-assistant-button-respect-vk {\n  transform: translate3d(-70px, -5px, 0);\n}\n.adguard-assistant-button-bottom.adguard-assistant-button-respect-fb {\n  transform: translate3d(-5px, -40px, 0);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 2360:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Ιστοσελίδες","settings_position_save_all":"Όλοι οι ιστότοποι","settings_position_save_this":"Αυτός ο ιστότοπος","assistant_select_element_start":"Εκκίνηση","assistant_select_element_text":"Επιλέξτε ένα στοιχείο στη σελίδα για αποκλεισμό. Ανανεώστε τη σελίδα για να ακυρώσετε τη λειτουργία αποκλεισμού στοιχείων.","menu_filtration_status":{"message":"Φιλτράρισμα σε αυτόν τον ιστότοπο"},"menu_do_not_filter_30_sec":{"message":"Παύση φιλτραρίσματος για 30 δευτερόλεπτα"},"menu_block_ad_on_site":{"message":"Αποκλεισμός διαφήμισης σε αυτόν τον ιστότοπο"},"menu_report_abuse":{"message":"Αναφέρετε αυτόν τον ιστότοπο"},"menu_site_report":{"message":"Αναφορά ασφάλειας ιστότοπου"},"menu_settings":{"message":"Ρυθμίσεις βοηθού"},"menu_wot_reputation_indicator":{"message":"Δείκτης φήμης ιστότοπου"},"menu_wot_reputation_confidence_level":{"message":"Επίπεδο εμπιστοσύνης φήμης"},"assistant_select_element":{"message":"Αποκλεισμός ενός στοιχείου"},"assistant_select_element_ext":{"message":"Κάντε κλικ σε ένα στοιχείο που θέλετε να αποκλείσετε. Το AdGuard θα δημιουργήσει έναν κανόνα χρήστη για αυτό"},"assistant_select_element_cancel":{"message":"Άκυρο"},"assistant_block_element":{"message":"Αποκλεισμός ενός στοιχείου"},"assistant_block_element_explain":{"message":"Δημιουργήστε έναν κανόνα αποκλεισμού στοιχείων"},"assistant_slider_explain":{"message":"Μετακινήστε το ρυθμιστικό για να ρυθμίσετε το μέγεθος του πλαισίου"},"assistant_extended_settings":{"message":"Προηγμένες ρυθμίσεις"},"assistant_apply_rule_to_all_sites":{"message":"Εφαρμογή του κανόνα σε όλες τις ιστοσελίδες"},"assistant_block_by_reference":{"message":"Αποκλεισμός μέσω συνδέσμου αναφοράς"},"assistant_block_similar":{"message":"Αποκλεισμός παρόμοιου"},"assistant_another_element":{"message":"Επιλέξτε ένα διαφορετικό στοιχείο"},"assistant_preview":{"message":"Προεπισκόπηση"},"assistant_block":{"message":"Αποκλεισμός"},"assistant_settings":{"message":"Ρυθμίσεις βοηθού"},"assistant_preview_header":{"message":"Προεπισκόπηση αποκλεισμένου στοιχείου"},"assistant_preview_header_info":{"message":"Ελέγξτε αν το στοιχείο έχει μπλοκαριστεί σωστά"},"assistant_preview_end":{"message":"Έξοδος προεπισκόπησης"},"wot_unknown_description":{"message":"Η φήμη αυτού του ιστότοπου δεν έχει καθοριστεί από το $1"},"wot_bad_description":{"message":"Αυτός ο ιστότοπος έχει πολύ κακή φήμη\\nσύμφωνα με το $1"},"wot_poor_description":{"message":"Αυτός ο ιστότοπος έχει κακή φήμη\\nσύμφωνα με το $1"},"wot_unsatisfactory_description":{"message":"Αυτός ο ιστότοπος έχει κακή φήμη\\nσύμφωνα με το $1"},"wot_good_description":{"message":"Αυτός ο ιστότοπος έχει καλή φήμη\\nσύμφωνα με το $1"},"wot_excellent_description":{"message":"Αυτός ο ιστότοπος έχει εξαιρετική φήμη\\nσύμφωνα με το $1"},"settings_choose_size_and_position":{"message":"Προσαρμόστε το μέγεθος και τη θέση του Βοηθού AdGuard"},"settings_icon_size":{"message":"Μέγεθος εικονιδίου:"},"settings_small":{"message":"Μικρό"},"settings_big":{"message":"Μεγάλο"},"settings_position":{"message":"Θέση:"},"settings_left_top":{"message":"Πάνω αριστερά"},"settings_right_top":{"message":"Πάνω δεξιά"},"settings_left_bottom":{"message":"Κάτω αριστερά"},"settings_right_bottom":{"message":"Κάτω δεξιά"},"settings_cancel":{"message":"Άκυρο"},"settings_save":{"message":"Αποθήκευση αλλαγών"}}');

/***/ }),

/***/ 2458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTBWNkgxME02IDE0VjE4SDEwTTE4IDEwVjZIMTRNMTggMTRWMThIMTQiIHN0cm9rZT0iI0E0QTRBNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");

/***/ }),

/***/ 2484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuMDAwMDAwLCAtMjYzLjAwMDAwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0zMC4wMjM1ODk1LDI4MC4xMTkwMjQgQzI5Ljk3MTAwMTYsMjgwLjExOTAyNCAyOS45MTgzNjI1LDI4MC4xMTA4OTggMjkuODY3NjY1NSwyODAuMDk0NjQ3IEMyOC4xNjM1OTE1LDI3OS41NDg3ODUgMjYuNzEyNzk4MSwyNzguNTAxNzc5IDI1LjU1NTUwNTcsMjc2Ljk4Mjc1OSBDMjQuNjQ0MzkwMywyNzUuNzg2ODMxIDIzLjkxNDg1NCwyNzQuMjk4MzczIDIzLjM4NzI4ODEsMjcyLjU1ODcyOSBDMjIuNDk3MzMwNSwyNjkuNjI0NDg1IDIyLjQ4NzEwOTQsMjY3LjAxMDUyMiAyMi40ODcxMDk0LDI2Ni45MDA2OTYgQzIyLjQ4NzEwOTQsMjY2LjYzNzUwMSAyMi42ODcwMzU1LDI2Ni40MTcyODYgMjIuOTQ5MDU1MywyNjYuMzkxOTg4IEMyMi45ODg1MDksMjY2LjM4ODE1NSAyNi45NTc2OTc0LDI2NS45ODA2ODggMjkuNzIzMjkxNCwyNjMuOTcyMjc5IEMyOS45MDIzNjY0LDI2My44NDIxNjMgMzAuMTQ0ODYzNywyNjMuODQyMzE2IDMwLjMyMzkzODcsMjYzLjk3MjMzIEMzMy4wODg3NjYyLDI2NS45ODA2ODggMzcuMDU4NDY1NiwyNjYuMzg4MTU1IDM3LjA5ODIyNTksMjY2LjM5MjAzOSBDMzcuMzYwMDQxMywyNjYuNDE3NTkyIDM3LjU1OTkxNjMsMjY2LjYzNzcwNSAzNy41NTk5MTYzLDI2Ni45MDA2OTYgQzM3LjU1OTkxNjMsMjY3LjAxMDUyMiAzNy41NDk2OTUyLDI2OS42MjQ0ODUgMzYuNjU5Nzg4NywyNzIuNTU4NzggQzM2LjEzMjE3MTcsMjc0LjI5ODQyNCAzNS40MDI2ODY1LDI3NS43ODY4ODIgMzQuNDkxNTcxMSwyNzYuOTgyODExIEMzMy4zMzQzMjk5LDI3OC41MDE4MyAzMS44ODM1MzY1LDI3OS41NDg4MzYgMzAuMTc5NDYyNCwyODAuMDk0Njk4IEMzMC4xMjg3NjU0LDI4MC4xMTA4OTggMzAuMDc2MTc3NSwyODAuMTE5MDI0IDMwLjAyMzU4OTUsMjgwLjExOTAyNCBMMzAuMDIzNTg5NSwyODAuMTE5MDI0IFoiIGlkPSJQYXRoIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iMS4zNSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ 2501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwLjc2Nzk2ODc1IiB5PSIwLjk4MDY2NDA2MyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE1Ljg4MDUxNzYiIHJ4PSIxLjgiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMC4wMDAwMDAsIC0xODQuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjAwMDAwMCwgMTg0LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlIj4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIxLjM1IiB4PSIxLjQ0Mjk2ODc1IiB5PSIxLjY1NTY2NDA2IiB3aWR0aD0iMTYuNjUiIGhlaWdodD0iMTQuNTMwNTE3NiIgcng9IjEuOCI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iTGluZS0zIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iMS4zNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgcG9pbnRzPSIxLjYyNjY2MDE2IDEzLjA3MTMzNzkgNS4yMjY2NjAxNiA5LjQ3MTMzNzg5IDguMTc0MDcyMjcgMTIuMTE1NTI3MyAxMi45Mjk4MzQgNi43MjgyNzE0OCAxNy44Njc5Njg3IDEyLjMzMzA1NjYiPjwvcG9seWxpbmU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ 2608:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5590);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9869);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(4706);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(1774);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.id, "/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n}\n*:after,\n*:before {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  position: relative;\n  font-size: 1.3rem;\n  line-height: 1.42857143;\n  background-color: #e6e6e6;\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-weight: 400;\n  overflow-y: hidden;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  outline: none;\n  border-radius: 0;\n  box-shadow: none;\n}\na {\n  color: #36ba53;\n  text-decoration: underline;\n  outline: 0;\n}\na:hover {\n  color: #257f39;\n  text-decoration: underline;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n  max-width: 100%;\n}\nform {\n  margin: 0;\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 1.57142857;\n  font-size: 21px;\n  line-height: inherit;\n  border: 0;\n}\nlabel {\n  display: inline-block;\n}\ninput[type=\"search\"] {\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  display: none;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 16px;\n  font-size: 16px;\n  line-height: 1.3;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-radius: 8px;\n  border: 1px solid;\n}\n.form-control:focus {\n  border-color: #8c8c8c;\n  outline: 0;\n}\n.form-control::-moz-placeholder {\n  color: #777777;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #777777;\n}\n.form-control::-webkit-input-placeholder {\n  color: #777777;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n  background-color: #fff;\n  opacity: 1;\n}\ntextarea.form-control {\n  height: auto;\n}\n/*\n.fieldset.error{\n    .form-control{\n        border-color: @state-danger-text;\n        .placeholder(@state-danger-text);\n    }\n}\n*/\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  line-height: 22px;\n}\n.form-group {\n  margin: 23px 0 0;\n}\n.form-group:first-child {\n  margin-top: 0;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n@font-face {\n    font-family: 'Roboto';\n    src: url('data:application/font-woff2;base64,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') format('woff2');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('data:application/font-woff2;base64,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') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('data:application/font-woff2;base64,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') format('woff2');\n    font-weight: 700;\n    font-style: normal;\n}\n\n.weight-regular {\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-weight: 400;\n}\n.weight-medium {\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-weight: 600;\n}\n.weight-bold {\n  font-family: \"Roboto\", Arial, sans-serif;\n  font-weight: 700;\n}\n.form-ui {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0;\n  line-height: 20px;\n  font-weight: 400;\n  cursor: pointer;\n}\n.form-ui-control {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  outline: 0 none;\n}\n.form-ui-txt {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  padding: 2px 0 0 30px;\n}\n.form-ui-txt:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 22px;\n  height: 22px;\n}\n.form-ui-txt:after {\n  content: '';\n  position: absolute;\n}\ninput[type=\"radio\"] + .form-ui .form-ui-txt:before {\n  border: 1px solid #cfcfcf;\n  border-radius: 50%;\n}\ninput[type=\"radio\"] + .form-ui .form-ui-txt:after {\n  top: 7px;\n  left: 7px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\ninput[type=\"radio\"]:disabled + .form-ui .form-ui-txt:before {\n  background: #f2f2f2;\n  opacity: 0.6;\n}\ninput[type=\"radio\"]:disabled + .form-ui .form-ui-txt:after {\n  opacity: 0.6;\n}\ninput[type=\"checkbox\"] + .form-ui {\n  display: flex;\n  column-gap: 12px;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-txt {\n  padding: 3px 0;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-txt:before,\ninput[type=\"checkbox\"] + .form-ui .form-ui-txt:after {\n  content: none;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon {\n  width: 24px;\n  height: 24px;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n  display: block;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon--on {\n  display: none;\n}\ninput[type=\"checkbox\"]:disabled + .form-ui .form-ui-icon {\n  opacity: 0.6;\n}\ninput[type=\"checkbox\"]:checked + .form-ui .form-ui-icon--off {\n  display: none;\n}\ninput[type=\"checkbox\"]:checked + .form-ui .form-ui-icon--on {\n  display: block;\n}\n.btn {\n  display: inline-block;\n  margin: 0;\n  padding: 18px 16px;\n  font-size: 16px;\n  line-height: 1.3;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  user-select: none;\n  border-radius: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;\n}\n.btn:disabled,\n.btn[disabled],\n.btn.disabled {\n  cursor: default;\n  pointer-events: none;\n}\n@media (max-width: 320px) {\n  .btn-another-el {\n    font-size: 9px;\n    padding-left: 0;\n    padding-right: 0;\n    background-color: transparent;\n    border: 0;\n    color: #000;\n  }\n  .btn-another-el:hover {\n    border-color: transparent;\n    background: transparent;\n    color: #000;\n  }\n}\n.btn-lg {\n  font-size: 20px;\n  padding: 14px 24px 12px;\n}\n.btn-sm {\n  font-size: 16px;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n.btn-xs {\n  font-size: 14px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.btn-upload {\n  position: relative;\n  overflow: hidden;\n}\n.btn-upload input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  font-size: 600%;\n  line-height: 600%;\n  width: auto;\n  height: auto;\n  opacity: 0;\n  cursor: pointer;\n}\n.old-btn {\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 10px 20px;\n  font-size: 13px;\n  line-height: 18px;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  user-select: none;\n}\n.old-btn:hover {\n  color: #000;\n  text-decoration: none;\n}\n.old-btn:active,\n.old-btn.active {\n  outline: none;\n}\n.old-btn:focus {\n  outline: none;\n  box-shadow: inset 0 0 0 1px #fff;\n}\n.old-btn[disabled],\n.old-btn.disabled {\n  cursor: default;\n  box-shadow: none;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.old-btn-default {\n  border-color: #58595b;\n  background: #58595b;\n  color: #fff;\n}\n.old-btn-default:hover {\n  border-color: #717275;\n  background: #717275;\n  color: #fff;\n}\n.old-btn-default.active,\n.old-btn-default:active {\n  border-color: #717275;\n  background: #717275;\n}\n.old-btn-default.disabled,\n.old-btn-default[disabled] {\n  border-color: #58595b;\n  background: #58595b;\n}\n@media (prefers-color-scheme: light) {\n  body {\n    color: #3D3D3D;\n  }\n  .main {\n    background: #FFFFFF;\n  }\n  .main-popup__btn {\n    background: #ffffff;\n    border: 1px solid #cfcfcf;\n  }\n  .main-popup__btn:hover {\n    background-color: #efefef;\n  }\n  .main-menu__btn {\n    background-color: #ffffff;\n  }\n  .main-menu__btn:hover {\n    background-color: #efefef;\n  }\n  .main-menu__btn:active,\n  .main-menu__btn.active {\n    background-color: #f3f3f3;\n  }\n  .main-version {\n    color: #dfdfdf;\n  }\n  .main_close {\n    color: #7F7F7F;\n  }\n  .main_close:hover {\n    color: #3D3D3D;\n  }\n  .head_title {\n    color: #3D3D3D;\n  }\n  .head_text {\n    color: #5B5B5B;\n  }\n  .head::after {\n    background-color: #D2D2D2;\n  }\n  .element-rule_expand-link {\n    color: #3D3D3D;\n  }\n  .element-rule_expand-link_arr {\n    color: #7F7F7F;\n  }\n  .element-rule_expand-link:hover .element-rule_expand-link_arr {\n    color: #3D3D3D;\n  }\n  .element-rule_text {\n    color: #5B5B5B;\n  }\n  .close {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0 / cover;\n    opacity: 0.6;\n  }\n  .close:hover {\n    opacity: 0.8;\n  }\n  .form-control {\n    color: #3D3D3D;\n    background-color: #F6F6F6;\n    border-color: #D2D2D2;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-txt {\n    color: #3D3D3D;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n    color: #7F7F7F;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-icon--on {\n    color: #67B279;\n  }\n  .menu,\n  .menu-filter {\n    border-top: 1px solid #e0dfdb;\n  }\n  .settings_fieldset {\n    border-top: 1px solid #e0dfdb;\n  }\n  .btn-primary {\n    color: #3D3D3D;\n    background-color: #FFFFFF;\n    border-color: #FFFFFF;\n  }\n  .btn-primary:hover,\n  .btn-primary:focus-visible {\n    background-color: #F6F6F6;\n    border-color: #F6F6F6;\n  }\n  .btn-primary:active,\n  .btn-primary.active {\n    background-color: #E4E4E4;\n    border-color: #E4E4E4;\n  }\n  .btn-primary:disabled,\n  .btn-primary[disabled],\n  .btn-primary.disabled {\n    color: #A4A4A4;\n    background-color: #FFFFFF;\n    border-color: #FFFFFF;\n  }\n  .btn-cancel {\n    color: #FFFFFF;\n    background-color: #F67247;\n    border-color: #F67247;\n  }\n  .btn-cancel:hover,\n  .btn-cancel:focus-visible {\n    background-color: #DF6740;\n    border-color: #DF6740;\n  }\n  .btn-cancel:active,\n  .btn-cancel.active {\n    background-color: #B55434;\n    border-color: #B55434;\n  }\n  .btn-cancel:disabled,\n  .btn-cancel[disabled],\n  .btn-cancel.disabled {\n    background-color: #FAA98F;\n    border-color: #FAA98F;\n  }\n  .btn-default {\n    color: #3D3D3D;\n    background-color: #FFFFFF;\n    border-color: #3D3D3D;\n  }\n  .btn-default:hover,\n  .btn-default:focus-visible {\n    background-color: #F6F6F6;\n  }\n  .btn-default:active,\n  .btn-default.active {\n    background-color: #E4E4E4;\n  }\n  .btn-default:disabled,\n  .btn-default[disabled],\n  .btn-default.disabled {\n    color: #A4A4A4;\n    background-color: #FFFFFF;\n    border-color: #A4A4A4;\n  }\n  .change-position_input:checked + .change-position_label {\n    border-color: #36ba53;\n    background: #36ba53;\n  }\n  input[type=\"radio\"] + .form-ui .form-ui-txt:before {\n    background: #ffffff;\n  }\n  input[type=\"radio\"]:checked + .form-ui .form-ui-txt:after {\n    background: #36ba53;\n  }\n  .menu-head_title {\n    color: #343434;\n  }\n  .menu-head_text {\n    color: #343434;\n  }\n  .menu-filter_handle {\n    background: #ffffff;\n  }\n  .adg-slide_clue {\n    color: #3D3D3D;\n  }\n  .adg-slide_tick {\n    background-color: #C0C0C0;\n  }\n  .adg-slide_tick--active,\n  .adg-slide_handle {\n    background-color: #67B279 !important;\n  }\n  .old-btn-primary {\n    border-color: #36ba53;\n    background: #36ba53;\n    color: #fff;\n  }\n  .old-btn-primary:hover {\n    border-color: #30a64a;\n    background: #30a64a;\n    color: #fff;\n  }\n  .old-btn-primary.active,\n  .old-btn-primary:active {\n    border-color: #30a64a;\n    background: #30a64a;\n  }\n  .old-btn-primary.disabled,\n  .old-btn-primary[disabled] {\n    border-color: #30a64a;\n    background: #30a64a;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    color: #E4E4E4;\n  }\n  .main {\n    background: #3D3D3D;\n  }\n  .main-popup__btn {\n    background: #323232;\n    border: 1px solid #666;\n  }\n  .main-popup__btn:hover {\n    background-color: #555555;\n  }\n  .main-menu__btn {\n    background-color: #323232;\n  }\n  .main-menu__btn:hover {\n    background-color: #555555;\n  }\n  .main-menu__btn:active,\n  .main-menu__btn.active {\n    background-color: #4d4d4d;\n  }\n  .main-version {\n    color: #444;\n  }\n  .main_close {\n    color: #C0C0C0;\n  }\n  .main_close:hover {\n    color: #E4E4E4;\n  }\n  .head_title {\n    color: #E4E4E4;\n  }\n  .head_text {\n    color: #D2D2D2;\n  }\n  .head::after {\n    background-color: #5B5B5B;\n  }\n  .element-rule_expand-link {\n    color: #E4E4E4;\n  }\n  .element-rule_expand-link_arr {\n    color: #C0C0C0;\n  }\n  .element-rule_expand-link:hover .element-rule_expand-link_arr {\n    color: #E4E4E4;\n  }\n  .element-rule_text {\n    color: #D2D2D2;\n  }\n  .close {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0 / cover;\n    opacity: 0.7;\n  }\n  .close:hover {\n    opacity: 1;\n  }\n  .form-control {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #5B5B5B;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-txt {\n    color: #E4E4E4;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n    color: #C0C0C0;\n  }\n  .menu,\n  .menu-filter {\n    border-top: 1px solid #444;\n  }\n  .settings_fieldset {\n    border-top: 1px solid #444;\n  }\n  .btn-primary {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #3D3D3D;\n  }\n  .btn-primary:hover,\n  .btn-primary:focus-visible {\n    background-color: #5B5B5B;\n    border-color: #5B5B5B;\n  }\n  .btn-primary:active,\n  .btn-primary.active {\n    background-color: #7F7F7F;\n    border-color: #7F7F7F;\n  }\n  .btn-primary:disabled,\n  .btn-primary[disabled],\n  .btn-primary.disabled {\n    background-color: #3D3D3D;\n    border-color: #3D3D3D;\n  }\n  .btn-cancel:disabled,\n  .btn-cancel[disabled],\n  .btn-cancel.disabled {\n    background-color: #7B3923;\n    border-color: #7B3923;\n  }\n  .btn-default {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #E4E4E4;\n  }\n  .btn-default:hover,\n  .btn-default:focus-visible {\n    background-color: #5B5B5B;\n  }\n  .btn-default:active,\n  .btn-default.active {\n    background-color: #7F7F7F;\n  }\n  .btn-default:disabled,\n  .btn-default[disabled],\n  .btn-default.disabled {\n    background-color: #3D3D3D;\n  }\n  .change-position_input:checked + .change-position_label {\n    border-color: #4D995F;\n    background: #4D995F;\n  }\n  input[type=\"radio\"] + .form-ui .form-ui-txt:before {\n    background: #323232;\n  }\n  input[type=\"radio\"]:checked + .form-ui .form-ui-txt:after {\n    background: #4D995F;\n  }\n  .menu-head_title {\n    color: #ccc;\n  }\n  .menu-head_text {\n    color: #ccc;\n  }\n  .menu-filter_handle {\n    background: #323232;\n  }\n  .adg-slide_clue {\n    color: #E4E4E4;\n  }\n  .adg-slide_tick {\n    background-color: #7F7F7F;\n  }\n  .old-btn-primary {\n    border-color: #4D995F;\n    background: #4D995F;\n    color: #fff;\n  }\n  .old-btn-primary:hover {\n    border-color: #39774C;\n    background: #39774C;\n    color: #fff;\n  }\n  .old-btn-primary.active,\n  .old-btn-primary:active {\n    border-color: #39774C;\n    background: #39774C;\n  }\n  .old-btn-primary.disabled,\n  .old-btn-primary[disabled] {\n    border-color: #39774C;\n    background: #39774C;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 2718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _require = __webpack_require__(6539),
  _require2 = _slicedToArray(_require, 1),
  _require2$ = _require2[0],
  BASE_LOCALE = _require2$.base_locale,
  PROJECT_ID = _require2$.project_id,
  LANGUAGES = _require2$.languages,
  LOCALIZABLE_FILES = _require2$.localizable_files;
var LOCALES_DIR = '../../locales';

/**
 * Users locale may be defined with only two chars (language code)
 * Here we provide a map of equivalent translation for such locales
 */
var LOCALES_EQUIVALENTS_MAP = {
  'pt-BR': 'pt',
  'zh-CN': 'zh'
};
var LOCALES = Object.keys(LANGUAGES);
var REQUIRED_LOCALES = ['de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'pt-PT', 'ru', 'zh', 'zh-TW'];

/**
 * Threshold percentage for validation of required locales.
 */
var THRESHOLD_PERCENTAGE = 100;

/**
 * Name of the locale data file.
 */
var LOCALE_DATA_FILENAME = 'messages.json';
module.exports = {
  LOCALES_EQUIVALENTS_MAP: LOCALES_EQUIVALENTS_MAP,
  BASE_LOCALE: BASE_LOCALE,
  PROJECT_ID: PROJECT_ID,
  LANGUAGES: LANGUAGES,
  LOCALIZABLE_FILES: LOCALIZABLE_FILES,
  LOCALES: LOCALES,
  REQUIRED_LOCALES: REQUIRED_LOCALES,
  THRESHOLD_PERCENTAGE: THRESHOLD_PERCENTAGE,
  LOCALES_DIR: LOCALES_DIR,
  LOCALE_DATA_FILENAME: LOCALE_DATA_FILENAME
};

/***/ }),

/***/ 2725:
/***/ ((module) => {

// Module
var code = "<div class=\"main\"> <div class=\"main_close adg-close\"> <svg> <use xlink:href=\"#icon-cross\"/> </svg> </div> <div class=\"head head--slider\"> <div class=\"head_in head_in--slider\"> <div i18n=\"assistant_block_element\" class=\"head_title head_title--slider\" id=\"head_title\"></div> <div class=\"element-rule_more element-rule_more--mobile\"> <span class=\"element-rule_expand-link\" id=\"ExtendedSettingsTextMobile\"></span> <button i18n=\"assistant_block\" type=\"button\" class=\"btn btn-cancel\" id=\"adg-accept\"></button> <button i18n=\"assistant_another_element\" type=\"button\" class=\"btn btn-default\" id=\"adg-cancel\"></button> </div> </div> <div class=\"adg-slide-btns\"> <div class=\"adg-slide-btn adg-slide-btn--minus\"></div> <div class=\"adg-slide-btn adg-slide-btn--plus\"></div> </div> <div i18n=\"assistant_block_element_explain\" class=\"head_text head_text--mobile-h\" id=\"head_text\"></div> </div> <div class=\"content\"> <div class=\"element-rule element-rule--slider\"> <div i18n=\"assistant_slider_explain\" class=\"element-rule_text element-rule_text--slider\"></div> <div class=\"element-rule_slider\"> <div class=\"adg-slide\" id=\"slider\"></div> </div> <div class=\"element-rule_more\"> <span class=\"element-rule_expand-link\" id=\"ExtendedSettingsText\"> <span i18n=\"assistant_extended_settings\" class=\"element-rule_expand-link_txt\"></span> <svg class=\"element-rule_expand-link_arr\"> <use xlink:href=\"#icon-arrow-down\"/> </svg> </span> </div> <div class=\"element-rule_form\" id=\"advanced-settings\"> <div class=\"element-rule_form-cont\"> <div class=\"element-rule_fieldset\" id=\"one-domain-checkbox-block\"> <input class=\"form-ui-control\" id=\"one-domain-checkbox\" type=\"checkbox\"/> <label for=\"one-domain-checkbox\" class=\"form-ui\"> <svg class=\"form-ui-icon form-ui-icon--off\"> <use xlink:href=\"#icon-checkbox-off\"/> </svg> <svg class=\"form-ui-icon form-ui-icon--on\"> <use xlink:href=\"#icon-checkbox-on\"/> </svg> <span i18n=\"assistant_apply_rule_to_all_sites\" class=\"form-ui-txt\"></span> </label> </div> <div style=\"display:none\" class=\"element-rule_fieldset\" id=\"block-by-url-checkbox-block\"> <input class=\"form-ui-control\" id=\"block-by-url-checkbox\" type=\"checkbox\"/> <label for=\"block-by-url-checkbox\" class=\"form-ui\"> <svg class=\"form-ui-icon form-ui-icon--off\"> <use xlink:href=\"#icon-checkbox-off\"/> </svg> <svg class=\"form-ui-icon form-ui-icon--on\"> <use xlink:href=\"#icon-checkbox-on\"/> </svg> <span i18n=\"assistant_block_by_reference\" class=\"form-ui-txt\"></span> </label> </div> <div style=\"display:none\" class=\"element-rule_fieldset\" id=\"block-similar-checkbox-block\"> <input class=\"form-ui-control\" id=\"block-similar-checkbox\" type=\"checkbox\"/> <label for=\"block-similar-checkbox\" class=\"form-ui\"> <svg class=\"form-ui-icon form-ui-icon--off\"> <use xlink:href=\"#icon-checkbox-off\"/> </svg> <svg class=\"form-ui-icon form-ui-icon--on\"> <use xlink:href=\"#icon-checkbox-on\"/> </svg> <span i18n=\"assistant_block_similar\" class=\"form-ui-txt\"></span> </label> </div> <div class=\"element-rule_fieldset\"> <input class=\"form-control\" id=\"filter-rule\" type=\"text\"/> </div> </div> </div> </div> </div> <div class=\"foot foot--slider\"> <button i18n=\"assistant_block\" type=\"button\" class=\"btn btn-cancel\" id=\"adg-accept\"></button> <button i18n=\"assistant_preview\" type=\"button\" class=\"btn btn-default\" id=\"adg-preview\"></button> <button i18n=\"assistant_another_element\" type=\"button\" class=\"btn btn-primary btn-another-el\" id=\"adg-cancel\"></button> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 2739:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"เว็บไซต์","settings_position_save_all":"ทุกเว็บไซต์","settings_position_save_this":"เว็บไซต์นี้","assistant_select_element_start":"เริ่ม","assistant_select_element_text":"เลือกองค์ประกอบบนหน้าเพื่อปิดกั้น รีเฟรชหน้านี้เพื่อยกเลิกโหมดการปิดกั้นองค์ประกอบ","menu_filtration_status":{"message":"การกรองบนเว็บไซต์นี้"},"menu_do_not_filter_30_sec":{"message":"ห้ามกรองเป็นเวลา 30 วินาที"},"menu_block_ad_on_site":{"message":"ปิดกั้นโฆษณาบนเว็บไซต์นี้"},"menu_report_abuse":{"message":"รายงานเว็บไซต์นี้"},"menu_site_report":{"message":"รายงานความปลอดภัยของเว็บไซต์"},"menu_settings":{"message":"ตั้งค่าการช่วยเหลือ"},"menu_wot_reputation_indicator":{"message":"ตัวบ่งชี้ชื่อเสียงของเว็บไซต์"},"menu_wot_reputation_confidence_level":{"message":"ชื่อเสียงระดับความเชื่อมั่น"},"assistant_select_element":{"message":"ปิดกั้นองค์ประกอบ"},"assistant_select_element_ext":{"message":"คลิกองค์ประกอบที่คุณต้องการบล็อก AdGuard จะสร้างกฎผู้ใช้สำหรับมัน"},"assistant_select_element_cancel":{"message":"ยกเลิก"},"assistant_block_element":{"message":"ปิดกั้นองค์ประกอบ"},"assistant_block_element_explain":{"message":"สร้างกฎการปิดกั้นองค์ประกอบ"},"assistant_slider_explain":{"message":"เลื่อนสไลด์เพื่อปรับขนาดของกรอบ"},"assistant_extended_settings":{"message":"การตั้งค่าขั้นสูง"},"assistant_apply_rule_to_all_sites":{"message":"ใช้กฏนี้กับทุกเว็บไซต์"},"assistant_block_by_reference":{"message":"ปิดกั้นโดยลิงค์อ้างอิง"},"assistant_block_similar":{"message":"ปิดกั้นที่คล้ายกัน"},"assistant_another_element":{"message":"เลือกองค์ประกอบที่แตกต่าง"},"assistant_preview":{"message":"ดูตัวอย่าง"},"assistant_block":{"message":"ปิดกั้น"},"assistant_settings":{"message":"ตั้งค่าการช่วยเหลือ"},"assistant_preview_header":{"message":"ดูตัวอย่างองค์ประกอบที่ถูกบล็อค"},"assistant_preview_header_info":{"message":"ตรวจสอบว่าองค์ประกอบถูกบล็อคอย่างถูกต้องหรือไม่"},"assistant_preview_end":{"message":"ออกจากตัวอย่าง"},"wot_unknown_description":{"message":"ชื่อเสียงของเว็บไซต์นี้ไม่ได้กำหนดไว้ที่ $1"},"wot_bad_description":{"message":"เว็บไซต์นี้มีชื่อเสียงแย่มาก\\nตาม $1"},"wot_poor_description":{"message":"เว็บไซต์นี้มีชื่อเสียงไม่ดี\\nตาม $1"},"wot_unsatisfactory_description":{"message":"เว็บไซต์นี้มีชื่อเสียงไม่ดี\\nตาม $1"},"wot_good_description":{"message":"เว็บไซต์นี้มีชื่อเสียงดี\\nตาม $1"},"wot_excellent_description":{"message":"เว็บไซต์นี้มีชื่อเสียงที่ยอดเยี่ยม\\nตาม $1"},"settings_choose_size_and_position":{"message":"ปรับขนาดและตำแหน่ง AdGuard Assistant"},"settings_icon_size":{"message":"ขนาดไอคอน:"},"settings_small":{"message":"เล็ก"},"settings_big":{"message":"ใหญ่"},"settings_position":{"message":"ตำแหน่ง:"},"settings_left_top":{"message":"บนซ้าย"},"settings_right_top":{"message":"บนขวา"},"settings_left_bottom":{"message":"ล่างซ้าย"},"settings_right_bottom":{"message":"ล่างขวา"},"settings_cancel":{"message":"ยกเลิก"},"settings_save":{"message":"บันทึกการเปลี่ยนแปลง"}}');

/***/ }),

/***/ 2902:
/***/ ((module) => {

// Module
var code = "<div class=\"main mobile main-menu\"> <button i18n-title=\"close\" class=\"adg-close main-menu__btn main-menu__btn--close\">close</button> <button i18n-title=\"minus\" class=\"adg-minus main-menu__btn main-menu__btn--minus\">minus</button> <button i18n-title=\"plus\" class=\"adg-plus main-menu__btn main-menu__btn--plus\">plus</button> <button i18n-title=\"assistant_preview\" class=\"adg-preview main-menu__btn main-menu__btn--preview\">preview</button> <button i18n-title=\"assistant_block\" class=\"adg-accept main-menu__btn main-menu__btn--accept\">accept</button> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 2993:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"مساعد AdGuard","description":"يوفر طريقه سهله ومريحه لأداره التصفية الحقيقة من المتصفح"}}}');

/***/ }),

/***/ 3022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUyIDE4Ij4KICAgIDxwYXRoIGQ9Ik01LjM1Myw3LjQxMiBMNS4zMDQsNy4zNjMgQzcuMTIxLDcuMTI1IDguNTI5LDUuNTg3IDguNTI5LDMuNzA2IEM4LjUyOSwxLjY1OSA2Ljg3LDAgNC44MjQsMCBDMi43NzcsMCAxLjExOCwxLjY1OSAxLjExOCwzLjcwNiBDMS4xMTgsNS41NzIgMi41MDIsNy4wOTkgNC4yOTQsNy4zNTggTDQuMjk0LDcuNDEyIEMxLjExOCw3LjQxMiAwLjA1OSw5LjUyOSAwLjA1OSw5LjUyOSBMMS4xMTgsMTUuODgyIEMxLjExOCwxNi45MzggMi40NzUsMTcuODA2IDQuMjQ0LDE3Ljk2NyBMNC4yOTQsMTggTDUuMzUzLDE4IEw1LjQwMywxNy45NjcgQzcuMTcyLDE3LjgwNiA4LjUyOSwxNi45MzggOC41MjksMTUuODgyIEw5LjU4OCw5LjUyOSBDOS41ODgsOS41MjkgOC41MjksNy40MTIgNS4zNTMsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgogICAgPHBhdGggZD0iTTE1Ljk0MSw3LjQxMiBMMTUuODkyLDcuMzYzIEMxNy43MDksNy4xMjUgMTkuMTE4LDUuNTg3IDE5LjExOCwzLjcwNiBDMTkuMTE4LDEuNjU5IDE3LjQ1OCwwIDE1LjQxMiwwIEMxMy4zNjUsMCAxMS43MDYsMS42NTkgMTEuNzA2LDMuNzA2IEMxMS43MDYsNS41NzIgMTMuMDksNy4wOTkgMTQuODgyLDcuMzU4IEwxNC44ODIsNy40MTIgQzExLjcwNiw3LjQxMiAxMC42NDcsOS41MjkgMTAuNjQ3LDkuNTI5IEwxMS43MDYsMTUuODgyIEMxMS43MDYsMTYuOTM4IDEzLjA2MywxNy44MDYgMTQuODMzLDE3Ljk2NyBMMTQuODgyLDE4IEwxNS45NDEsMTggTDE1Ljk5MSwxNy45NjcgQzE3Ljc2LDE3LjgwNiAxOS4xMTgsMTYuOTM4IDE5LjExOCwxNS44ODIgTDIwLjE3Niw5LjUyOSBDMjAuMTc2LDkuNTI5IDE5LjExOCw3LjQxMiAxNS45NDEsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgogICAgPHBhdGggZD0iTTI2LjUyOSw3LjQxMiBMMjYuNDgxLDcuMzYzIEMyOC4yOTgsNy4xMjUgMjkuNzA2LDUuNTg3IDI5LjcwNiwzLjcwNiBDMjkuNzA2LDEuNjU5IDI4LjA0NywwIDI2LDAgQzIzLjk1MywwIDIyLjI5NCwxLjY1OSAyMi4yOTQsMy43MDYgQzIyLjI5NCw1LjU3MiAyMy42NzgsNy4wOTkgMjUuNDcxLDcuMzU4IEwyNS40NzEsNy40MTIgQzIyLjI5NCw3LjQxMiAyMS4yMzUsOS41MjkgMjEuMjM1LDkuNTI5IEwyMi4yOTQsMTUuODgyIEMyMi4yOTQsMTYuOTM4IDIzLjY1MiwxNy44MDYgMjUuNDIxLDE3Ljk2NyBMMjUuNDcxLDE4IEwyNi41MjksMTggTDI2LjU3OSwxNy45NjcgQzI4LjM0OCwxNy44MDYgMjkuNzA2LDE2LjkzOCAyOS43MDYsMTUuODgyIEwzMC43NjUsOS41MjkgQzMwLjc2NSw5LjUyOSAyOS43MDYsNy40MTIgMjYuNTI5LDcuNDEyIHoiIGZpbGw9IiNENkQ2RDYiLz4KICAgIDxwYXRoIGQ9Ik0zNy4xMTgsNy40MTIgTDM3LjA2OSw3LjM2MyBDMzguODg2LDcuMTI1IDQwLjI5NCw1LjU4NyA0MC4yOTQsMy43MDYgQzQwLjI5NCwxLjY1OSAzOC42MzUsMCAzNi41ODgsMCBDMzQuNTQyLDAgMzIuODgyLDEuNjU5IDMyLjg4MiwzLjcwNiBDMzIuODgyLDUuNTcyIDM0LjI2Niw3LjA5OSAzNi4wNTksNy4zNTggTDM2LjA1OSw3LjQxMiBDMzIuODgyLDcuNDEyIDMxLjgyNCw5LjUyOSAzMS44MjQsOS41MjkgTDMyLjg4MiwxNS44ODIgQzMyLjg4MiwxNi45MzggMzQuMjQsMTcuODA2IDM2LjAwOSwxNy45NjcgTDM2LjA1OSwxOCBMMzcuMTE4LDE4IEwzNy4xNjcsMTcuOTY3IEMzOC45MzcsMTcuODA2IDQwLjI5NCwxNi45MzggNDAuMjk0LDE1Ljg4MiBMNDEuMzUzLDkuNTI5IEM0MS4zNTMsOS41MjkgNDAuMjk0LDcuNDEyIDM3LjExOCw3LjQxMiB6IiBmaWxsPSIjRDZENkQ2Ii8+CiAgICA8cGF0aCBkPSJNNDcuNzA2LDcuNDEyIEw0Ny42NTcsNy4zNjMgQzQ5LjQ3NCw3LjEyNSA1MC44ODIsNS41ODcgNTAuODgyLDMuNzA2IEM1MC44ODIsMS42NTkgNDkuMjIzLDAgNDcuMTc2LDAgQzQ1LjEzLDAgNDMuNDcxLDEuNjU5IDQzLjQ3MSwzLjcwNiBDNDMuNDcxLDUuNTcyIDQ0Ljg1NCw3LjA5OSA0Ni42NDcsNy4zNTggTDQ2LjY0Nyw3LjQxMiBDNDMuNDcxLDcuNDEyIDQyLjQxMiw5LjUyOSA0Mi40MTIsOS41MjkgTDQzLjQ3MSwxNS44ODIgQzQzLjQ3MSwxNi45MzggNDQuODI4LDE3LjgwNiA0Ni41OTcsMTcuOTY3IEw0Ni42NDcsMTggTDQ3LjcwNiwxOCBMNDcuNzU2LDE3Ljk2NyBDNDkuNTI1LDE3LjgwNiA1MC44ODIsMTYuOTM4IDUwLjg4MiwxNS44ODIgTDUxLjk0MSw5LjUyOSBDNTEuOTQxLDkuNTI5IDUwLjg4Miw3LjQxMiA0Ny43MDYsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgo8L3N2Zz4K");

/***/ }),

/***/ 3131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(5213);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 3377:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Webové stránky","settings_position_save_all":"Všetky stránky","settings_position_save_this":"Táto stránka","assistant_select_element_start":"Štart","assistant_select_element_text":"Vyberte prvok na stránke, ktorý chcete zablokovať. Obnovte stránku pre zrušenie režimu blokovania prvkov.","menu_filtration_status":{"message":"Filtrácia na tejto stránke"},"menu_do_not_filter_30_sec":{"message":"Nefiltrovať počas 30 sekúnd"},"menu_block_ad_on_site":{"message":"Blokovať reklamy na tejto stránke"},"menu_report_abuse":{"message":"Nahlásiť stránku"},"menu_site_report":{"message":"Bezpečnostná správa o stránke"},"menu_settings":{"message":"Nastavenia asistenta"},"menu_wot_reputation_indicator":{"message":"Indikátor reputácie stránok"},"menu_wot_reputation_confidence_level":{"message":"Úroveň spoľahlivosti reputácie"},"assistant_select_element":{"message":"Blokovanie prvku"},"assistant_select_element_ext":{"message":"Kliknite na prvok, ktorý chcete zablokovať. AdGuard preň vytvorí používateľské pravidlo"},"assistant_select_element_cancel":{"message":"Zrušiť"},"assistant_block_element":{"message":"Blokovanie prvku"},"assistant_block_element_explain":{"message":"Vytvorenie pravidla blokovania prvkov"},"assistant_slider_explain":{"message":"Posuňte posúvač a upravte veľkosť rámčeka"},"assistant_extended_settings":{"message":"Pokročilé nastavenia"},"assistant_apply_rule_to_all_sites":{"message":"Použiť pravidlo na všetky stránky"},"assistant_block_by_reference":{"message":"Blokovať referenčným odkazom"},"assistant_block_similar":{"message":"Blokovať podobné"},"assistant_another_element":{"message":"Zvoliť iný prvok"},"assistant_preview":{"message":"Náhľad"},"assistant_block":{"message":"Blokovať"},"assistant_settings":{"message":"Nastavenia asistenta"},"assistant_preview_header":{"message":"Náhľad blokovaného prvku"},"assistant_preview_header_info":{"message":"Skontrolujte, či je prvok správne zablokovaný"},"assistant_preview_end":{"message":"Ukončenie náhľadu"},"wot_unknown_description":{"message":"Reputácia tejto webovej stránky nie je v $1 definovaná"},"wot_bad_description":{"message":"Táto stránka má podľa $1\\nveľmi zlú reputáciu"},"wot_poor_description":{"message":"Táto stránka má podľa $1\\nzlú reputáciu"},"wot_unsatisfactory_description":{"message":"Táto stránka má podľa $1\\nslabú reputáciu"},"wot_good_description":{"message":"Táto stránka má podľa $1\\ndobrú reputáciu"},"wot_excellent_description":{"message":"Táto stránka má podľa $1\\nvýbornú reputáciu"},"settings_choose_size_and_position":{"message":"Prispôsobiť veľkosť a polohu AdGuard asistenta"},"settings_icon_size":{"message":"Veľkosť ikony:"},"settings_small":{"message":"Malá"},"settings_big":{"message":"Veľká"},"settings_position":{"message":"Poloha:"},"settings_left_top":{"message":"Vľavo hore"},"settings_right_top":{"message":"Vpravo hore"},"settings_left_bottom":{"message":"Vľavo dole"},"settings_right_bottom":{"message":"Vpravo dole"},"settings_cancel":{"message":"Zrušiť"},"settings_save":{"message":"Uložiť zmeny"}}');

/***/ }),

/***/ 3378:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Помічник AdGuard","description":"Забезпечує простий та зручний спосіб керування фільтруванням безпосередньо у браузері"}}}');

/***/ }),

/***/ 3382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTEuNzY2NUwxMC41ODc4IDE3TDE5IDgiIHN0cm9rZT0iIzY3QjI3OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");

/***/ }),

/***/ 3412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _require = __webpack_require__(938),
  getEquivalent = _require.getEquivalent;
var _require2 = __webpack_require__(2718),
  LANGUAGES = _require2.LANGUAGES,
  LOCALE_DATA_FILENAME = _require2.LOCALE_DATA_FILENAME;
var locales = Object.keys(LANGUAGES).reduce(function (acc, language) {
  var resultLocale = getEquivalent(language);
  // eslint-disable-next-line global-require,import/no-dynamic-require
  var dictionary = __webpack_require__(5641)("./".concat(resultLocale, "/").concat(LOCALE_DATA_FILENAME));
  acc[resultLocale] = dictionary;
  return acc;
}, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);

/***/ }),

/***/ 3492:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"使用 AdGuard 助手","description":"提供简单方便的方法来管理浏览器筛选"}}}');

/***/ }),

/***/ 3580:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Asistent","description":"Poskytuje jednoduchý a pohodlný spôsob manažmentu filtrov priamo z prehliadača"}}}');

/***/ }),

/***/ 3734:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Assistant","description":"มอบวิธีที่ง่ายและสะดวกในการจัดการการกรองจากเบราว์เซอร์"}}}');

/***/ }),

/***/ 3741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUyIDE4Ij4KICAgIDxwYXRoIGQ9Ik01LjM1Myw3LjQxMiBMNS4zMDQsNy4zNjMgQzcuMTIxLDcuMTI1IDguNTI5LDUuNTg3IDguNTI5LDMuNzA2IEM4LjUyOSwxLjY1OSA2Ljg3LDAgNC44MjQsMCBDMi43NzcsMCAxLjExOCwxLjY1OSAxLjExOCwzLjcwNiBDMS4xMTgsNS41NzIgMi41MDIsNy4wOTkgNC4yOTQsNy4zNTggTDQuMjk0LDcuNDEyIEMxLjExOCw3LjQxMiAwLjA1OSw5LjUyOSAwLjA1OSw5LjUyOSBMMS4xMTgsMTUuODgyIEMxLjExOCwxNi45MzggMi40NzUsMTcuODA2IDQuMjQ0LDE3Ljk2NyBMNC4yOTQsMTggTDUuMzUzLDE4IEw1LjQwMywxNy45NjcgQzcuMTcyLDE3LjgwNiA4LjUyOSwxNi45MzggOC41MjksMTUuODgyIEw5LjU4OCw5LjUyOSBDOS41ODgsOS41MjkgOC41MjksNy40MTIgNS4zNTMsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTE1Ljk0MSw3LjQxMiBMMTUuODkyLDcuMzYzIEMxNy43MDksNy4xMjUgMTkuMTE4LDUuNTg3IDE5LjExOCwzLjcwNiBDMTkuMTE4LDEuNjU5IDE3LjQ1OCwwIDE1LjQxMiwwIEMxMy4zNjUsMCAxMS43MDYsMS42NTkgMTEuNzA2LDMuNzA2IEMxMS43MDYsNS41NzIgMTMuMDksNy4wOTkgMTQuODgyLDcuMzU4IEwxNC44ODIsNy40MTIgQzExLjcwNiw3LjQxMiAxMC42NDcsOS41MjkgMTAuNjQ3LDkuNTI5IEwxMS43MDYsMTUuODgyIEMxMS43MDYsMTYuOTM4IDEzLjA2MywxNy44MDYgMTQuODMzLDE3Ljk2NyBMMTQuODgyLDE4IEwxNS45NDEsMTggTDE1Ljk5MSwxNy45NjcgQzE3Ljc2LDE3LjgwNiAxOS4xMTgsMTYuOTM4IDE5LjExOCwxNS44ODIgTDIwLjE3Niw5LjUyOSBDMjAuMTc2LDkuNTI5IDE5LjExOCw3LjQxMiAxNS45NDEsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTI2LjUyOSw3LjQxMiBMMjYuNDgxLDcuMzYzIEMyOC4yOTgsNy4xMjUgMjkuNzA2LDUuNTg3IDI5LjcwNiwzLjcwNiBDMjkuNzA2LDEuNjU5IDI4LjA0NywwIDI2LDAgQzIzLjk1MywwIDIyLjI5NCwxLjY1OSAyMi4yOTQsMy43MDYgQzIyLjI5NCw1LjU3MiAyMy42NzgsNy4wOTkgMjUuNDcxLDcuMzU4IEwyNS40NzEsNy40MTIgQzIyLjI5NCw3LjQxMiAyMS4yMzUsOS41MjkgMjEuMjM1LDkuNTI5IEwyMi4yOTQsMTUuODgyIEMyMi4yOTQsMTYuOTM4IDIzLjY1MiwxNy44MDYgMjUuNDIxLDE3Ljk2NyBMMjUuNDcxLDE4IEwyNi41MjksMTggTDI2LjU3OSwxNy45NjcgQzI4LjM0OCwxNy44MDYgMjkuNzA2LDE2LjkzOCAyOS43MDYsMTUuODgyIEwzMC43NjUsOS41MjkgQzMwLjc2NSw5LjUyOSAyOS43MDYsNy40MTIgMjYuNTI5LDcuNDEyIHoiIGZpbGw9IiM3MTcxNzEiLz4KICAgIDxwYXRoIGQ9Ik0zNy4xMTgsNy40MTIgTDM3LjA2OSw3LjM2MyBDMzguODg2LDcuMTI1IDQwLjI5NCw1LjU4NyA0MC4yOTQsMy43MDYgQzQwLjI5NCwxLjY1OSAzOC42MzUsMCAzNi41ODgsMCBDMzQuNTQyLDAgMzIuODgyLDEuNjU5IDMyLjg4MiwzLjcwNiBDMzIuODgyLDUuNTcyIDM0LjI2Niw3LjA5OSAzNi4wNTksNy4zNTggTDM2LjA1OSw3LjQxMiBDMzIuODgyLDcuNDEyIDMxLjgyNCw5LjUyOSAzMS44MjQsOS41MjkgTDMyLjg4MiwxNS44ODIgQzMyLjg4MiwxNi45MzggMzQuMjQsMTcuODA2IDM2LjAwOSwxNy45NjcgTDM2LjA1OSwxOCBMMzcuMTE4LDE4IEwzNy4xNjcsMTcuOTY3IEMzOC45MzcsMTcuODA2IDQwLjI5NCwxNi45MzggNDAuMjk0LDE1Ljg4MiBMNDEuMzUzLDkuNTI5IEM0MS4zNTMsOS41MjkgNDAuMjk0LDcuNDEyIDM3LjExOCw3LjQxMiB6IiBmaWxsPSIjRDZENkQ2Ii8+CiAgICA8cGF0aCBkPSJNNDcuNzA2LDcuNDEyIEw0Ny42NTcsNy4zNjMgQzQ5LjQ3NCw3LjEyNSA1MC44ODIsNS41ODcgNTAuODgyLDMuNzA2IEM1MC44ODIsMS42NTkgNDkuMjIzLDAgNDcuMTc2LDAgQzQ1LjEzLDAgNDMuNDcxLDEuNjU5IDQzLjQ3MSwzLjcwNiBDNDMuNDcxLDUuNTcyIDQ0Ljg1NCw3LjA5OSA0Ni42NDcsNy4zNTggTDQ2LjY0Nyw3LjQxMiBDNDMuNDcxLDcuNDEyIDQyLjQxMiw5LjUyOSA0Mi40MTIsOS41MjkgTDQzLjQ3MSwxNS44ODIgQzQzLjQ3MSwxNi45MzggNDQuODI4LDE3LjgwNiA0Ni41OTcsMTcuOTY3IEw0Ni42NDcsMTggTDQ3LjcwNiwxOCBMNDcuNzU2LDE3Ljk2NyBDNDkuNTI1LDE3LjgwNiA1MC44ODIsMTYuOTM4IDUwLjg4MiwxNS44ODIgTDUxLjk0MSw5LjUyOSBDNTEuOTQxLDkuNTI5IDUwLjg4Miw3LjQxMiA0Ny43MDYsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgo8L3N2Zz4K");

/***/ }),

/***/ 3753:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Webové stránky","settings_position_save_all":"Všechny webové stránky","settings_position_save_this":"Tato webová stránka","assistant_select_element_start":"Spustit","assistant_select_element_text":"Vyberte prvek na stránce, který chcete zablokovat. Obnovte stránku pro zrušení režimu blokování prvků.","menu_filtration_status":{"message":"Filtrování na těchto webových stránkách"},"menu_do_not_filter_30_sec":{"message":"Nefiltrovat po dobu 30 sekund"},"menu_block_ad_on_site":{"message":"Blokovat reklamy na této webové stránce"},"menu_report_abuse":{"message":"Nahlásit webovou stránku"},"menu_site_report":{"message":"Zpráva o bezpečnosti webové stránky"},"menu_settings":{"message":"Nastavení asistenta"},"menu_wot_reputation_indicator":{"message":"Indikátor reputace webu"},"menu_wot_reputation_confidence_level":{"message":"Úroveň důvěryhodnosti reputace"},"assistant_select_element":{"message":"Blokovat prvek"},"assistant_select_element_ext":{"message":"Klikněte na prvek, který chcete blokovat. AdGuard pro něj vytvoří uživatelské pravidlo"},"assistant_select_element_cancel":{"message":"Zrušit"},"assistant_block_element":{"message":"Blokovat prvek"},"assistant_block_element_explain":{"message":"Vytvořte pravidlo blokování prvku"},"assistant_slider_explain":{"message":"Posunutím posuvníku upravíte velikost rámečku"},"assistant_extended_settings":{"message":"Pokročilá nastavení"},"assistant_apply_rule_to_all_sites":{"message":"Použít pravidlo pro všechny webové stránky"},"assistant_block_by_reference":{"message":"Blokovat referenčním odkazem"},"assistant_block_similar":{"message":"Blokovat podobné"},"assistant_another_element":{"message":"Vyber jiný prvek"},"assistant_preview":{"message":"Náhled"},"assistant_block":{"message":"Blokovat"},"assistant_settings":{"message":"Nastavení asistenta"},"assistant_preview_header":{"message":"Náhled blokovaného prvku"},"assistant_preview_header_info":{"message":"Zkontrolujte, zda je prvek správně zablokován"},"assistant_preview_end":{"message":"Ukončit náhled"},"wot_unknown_description":{"message":"Pověst této webové stránky není definována podle $1"},"wot_bad_description":{"message":"Tato webová stránka má velmi špatnou pověst \\npodle $1"},"wot_poor_description":{"message":"Tato webová stránka má špatnou pověst \\npodle $1"},"wot_unsatisfactory_description":{"message":"Tato webová stránka má špatnou pověst \\npodle $1"},"wot_good_description":{"message":"Tato webová stránka má dobrou pověst \\npodle $1"},"wot_excellent_description":{"message":"Tato webová stránka má výbornou pověst \\npodle $1"},"settings_choose_size_and_position":{"message":"Upravit velikost a pozici AdGuard Asistenta"},"settings_icon_size":{"message":"Velikost ikony:"},"settings_small":{"message":"Malá"},"settings_big":{"message":"Velká"},"settings_position":{"message":"Pozice:"},"settings_left_top":{"message":"Vlevo nahoře"},"settings_right_top":{"message":"Vpravo nahoře"},"settings_left_bottom":{"message":"Vlevo dole"},"settings_right_bottom":{"message":"Vpravo dole"},"settings_cancel":{"message":"Zrušit"},"settings_save":{"message":"Uložit změny"}}');

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Avustaja","description":"Voit muutta hiljattain käyttämiesi sovellusten ja verkkosivujen suodatusasetuksia kätevästi suoraan selaimesta."}}}');

/***/ }),

/***/ 3994:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Asistentas","description":"Suteikia lengvą ir patogų būdą valdyti filtravimą iš naršyklės"}}}');

/***/ }),

/***/ 4005:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard-Assistent","description":"Bietet eine einfache und bequeme Möglichkeit, das Filtern direkt im Browser zu verwalten"}}}');

/***/ }),

/***/ 4067:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Strony internetowe","settings_position_save_all":"Wszystkie strony internetowe","settings_position_save_this":"Ta strona internetowa","assistant_select_element_start":"Rozpocznij","assistant_select_element_text":"Wybierz element na stronie do zablokowania. Odśwież stronę, aby anulować tryb blokowania elementu.","menu_filtration_status":{"message":"Filtrowanie na tej stronie internetowej"},"menu_do_not_filter_30_sec":{"message":"Nie filtruj przez 30 sekund"},"menu_block_ad_on_site":{"message":"Zablokuj reklamę na tej stronie internetowej"},"menu_report_abuse":{"message":"Raportuj stronę internetową"},"menu_site_report":{"message":"Raport bezpieczeństwa strony internetowej"},"menu_settings":{"message":"Ustawienia Asystenta"},"menu_wot_reputation_indicator":{"message":"Wskaźnik reputacji witryny"},"menu_wot_reputation_confidence_level":{"message":"Poziom zaufania do reputacji"},"assistant_select_element":{"message":"Zablokuj element"},"assistant_select_element_ext":{"message":"Kliknij element, który chcesz zablokować. AdGuard utworzy dla niego regułę użytkownika"},"assistant_select_element_cancel":{"message":"Anuluj"},"assistant_block_element":{"message":"Zablokuj element"},"assistant_block_element_explain":{"message":"Utwórz regułę blokowania elementów"},"assistant_slider_explain":{"message":"Przesuń suwak, aby dostosować rozmiar ramki"},"assistant_extended_settings":{"message":"Ustawienia zaawansowane"},"assistant_apply_rule_to_all_sites":{"message":"Zastosuj regułę dla wszystkich stron internetowych"},"assistant_block_by_reference":{"message":"Blokuj używając linka referencyjnego"},"assistant_block_similar":{"message":"Blokuj podobne"},"assistant_another_element":{"message":"Wybierz inny element"},"assistant_preview":{"message":"Podgląd"},"assistant_block":{"message":"Blokuj"},"assistant_settings":{"message":"Ustawienia Asystenta"},"assistant_preview_header":{"message":"Podgląd zablokowanego elementu"},"assistant_preview_header_info":{"message":"Sprawdź, czy element jest poprawnie zablokowany"},"assistant_preview_end":{"message":"Zamknij podgląd"},"wot_unknown_description":{"message":"Reputacja nie jest zdefiniowana"},"wot_bad_description":{"message":"Ta strona internetowa ma bardzo złą reputację zgodnie z $1"},"wot_poor_description":{"message":"Ta strona internetowa ma złą reputację zgodnie z $1"},"wot_unsatisfactory_description":{"message":"Ta strona internetowa ma słabą reputację zgodnie z $1"},"wot_good_description":{"message":"Ta strona internetowa ma dobrą reputację zgodnie z $1"},"wot_excellent_description":{"message":"Ta strona internetowa ma doskonałą reputację zgodnie z $1"},"settings_choose_size_and_position":{"message":"Dostosuj rozmiar i pozycję Asystenta AdGuarda"},"settings_icon_size":{"message":"Rozmiar ikony:"},"settings_small":{"message":"Mały"},"settings_big":{"message":"Duży"},"settings_position":{"message":"Pozycja:"},"settings_left_top":{"message":"Lewy górny"},"settings_right_top":{"message":"Prawy górny"},"settings_left_bottom":{"message":"Na dole po lewej"},"settings_right_bottom":{"message":"Na dole po prawej"},"settings_cancel":{"message":"Anuluj"},"settings_save":{"message":"Zapisz zmiany"}}');

/***/ }),

/***/ 4134:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Уебсайтове","settings_position_save_all":"Всички уебсайтове","settings_position_save_this":"Този уебсайт","assistant_select_element_start":"Старт","assistant_select_element_text":"Изберете елемент на страницата, който да блокирате. Опреснете страницата, за да отмените режима за блокиране на елементи.","menu_filtration_status":{"message":"Филтриране в този уебсайт"},"menu_do_not_filter_30_sec":{"message":"Не филтрирайте в продължение на 30 секунди"},"menu_block_ad_on_site":{"message":"Блокирай реклама на този сайт"},"menu_report_abuse":{"message":"Докладвай този уебсайт"},"menu_site_report":{"message":"Доклад за сигурността на сайта"},"menu_settings":{"message":"Настройки на Асистента"},"menu_wot_reputation_indicator":{"message":"Индикатор за репутация на сайта"},"menu_wot_reputation_confidence_level":{"message":"Ниво на доверие в репутацията"},"assistant_select_element":{"message":"Блокирай елемент"},"assistant_select_element_ext":{"message":"Кликнете върху елемент, който искате да блокирате. AdGuard ще създаде правило за него"},"assistant_select_element_cancel":{"message":"Отказ"},"assistant_block_element":{"message":"Блокирай елемент"},"assistant_block_element_explain":{"message":"Създаване на правило за блокиране на елемент"},"assistant_slider_explain":{"message":"Преместете плъзгача, за да регулирате размера на рамката"},"assistant_extended_settings":{"message":"Разширени настройки"},"assistant_apply_rule_to_all_sites":{"message":"Приложи правилото към всички сайтове"},"assistant_block_by_reference":{"message":"Блокиране по референтен линк"},"assistant_block_similar":{"message":"Блокиране на подобни"},"assistant_another_element":{"message":"Избор на различен елемент"},"assistant_preview":{"message":"Преглед"},"assistant_block":{"message":"Блокирай"},"assistant_settings":{"message":"Настройки на Асистента"},"assistant_preview_header":{"message":"Преглед на блокирания елемент"},"assistant_preview_header_info":{"message":"Проверете дали елементът е блокиран правилно"},"assistant_preview_end":{"message":"Изход от преглед"},"wot_unknown_description":{"message":"Репутацията на този уебсайт не е определена от $1"},"wot_bad_description":{"message":"Този уебсайт е с много лоша репутация\\nспоред $1"},"wot_poor_description":{"message":"Този уебсайт е с лоша репутация според $1"},"wot_unsatisfactory_description":{"message":"Този сайт е с лоша репутация според $1"},"wot_good_description":{"message":"Този уебсайт има добра репутация\\nспоред $1"},"wot_excellent_description":{"message":"Този уебсайт е с отлична репутация\\nспоред $1"},"settings_choose_size_and_position":{"message":"Настройване на размера и позицията на AdGuard Assistant"},"settings_icon_size":{"message":"Размер на иконата:"},"settings_small":{"message":"Малка"},"settings_big":{"message":"Голяма"},"settings_position":{"message":"Позиция:"},"settings_left_top":{"message":"Горе вляво"},"settings_right_top":{"message":"Горе вдясно"},"settings_left_bottom":{"message":"Долу вляво"},"settings_right_bottom":{"message":"Долу вдясно"},"settings_cancel":{"message":"Отказ"},"settings_save":{"message":"Запази промените"}}');

/***/ }),

/***/ 4224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTcgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDAwMDAwLCAtMjI0LjAwMDAwMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0yMi44MTc1NzgxLDIzNC40MTc0NTUgTDIyLjgxNzU3ODEsMjQwLjU1OTc0NyBMMzYuODk2MDY2LDIzMi43MjMwODkgTDIyLjgxNzU3ODEsMjI1LjY5OTEyMSBMMjIuODE3NTc4MSwyMzEuMDgwNTcyIEwyNS45Nzg4MzYzLDIzMi42NTc3NzEgTDIyLjgxNzU3ODEsMjM0LjQxNzQ1NSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIxLjM1Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ 4314:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"אתרים","settings_position_save_all":"כל האתרים","settings_position_save_this":"האתר הזה","assistant_select_element_start":"התחל","assistant_select_element_text":".בחר אלמנט בדף לחסימה .רענן את הדף כדי לבטל את מצב חסימת האלמנטים","menu_filtration_status":{"message":"סינון באתר זה"},"menu_do_not_filter_30_sec":{"message":"אל תסנן למשך 30 שניות"},"menu_block_ad_on_site":{"message":"חסום פרסומת באתר זה"},"menu_report_abuse":{"message":"דווח על האתר"},"menu_site_report":{"message":"דוח אבטחת אתר"},"menu_settings":{"message":"הגדרות המסייע"},"menu_wot_reputation_indicator":{"message":"מד של מוניטין אתרים"},"menu_wot_reputation_confidence_level":{"message":"רמת אמון מוניטין"},"assistant_select_element":{"message":"חסום אלמנט"},"assistant_select_element_ext":{"message":"לחץ על רכיב שברצונך לחסום. AdGuard ייצור עבורו כלל משתמש."},"assistant_select_element_cancel":{"message":"בטל"},"assistant_block_element":{"message":"חסום אלמנט"},"assistant_block_element_explain":{"message":"צור כלל לחסימת אלמנט"},"assistant_slider_explain":{"message":"הזז את המחוון כדי להתאים את גודל המסגרת"},"assistant_extended_settings":{"message":"הגדרות מתקדמות"},"assistant_apply_rule_to_all_sites":{"message":"החל את הכלל בכל האתרים"},"assistant_block_by_reference":{"message":"חסום לפי קישור הפניה"},"assistant_block_similar":{"message":"חסום דומה"},"assistant_another_element":{"message":"בחר אלמנט אחר"},"assistant_preview":{"message":"הצג מראש"},"assistant_block":{"message":"חסום"},"assistant_settings":{"message":"הגדרות המסייע"},"assistant_preview_header":{"message":"תצוגה מקדימה של אלמנט חסום"},"assistant_preview_header_info":{"message":"בדוק אם האלמנט חסום כראוי"},"assistant_preview_end":{"message":"צא מתצוגה מקדימה"},"wot_unknown_description":{"message":"המוניטין של אתר זה אינו מוגדר על ידי $1"},"wot_bad_description":{"message":"לאתר זה יש מוניטין רע מאוד\\nעל פי $1"},"wot_poor_description":{"message":"לאתר זה יש מוניטין רע \\nעל פי $1"},"wot_unsatisfactory_description":{"message":"לאתר זה יש מוניטין ירוד\\nעל פי $1"},"wot_good_description":{"message":"לאתר זה יש מוניטין טוב\\nעל פי $1"},"wot_excellent_description":{"message":"לאתר זה יש מוניטין מצויין\\nעל פי $1"},"settings_choose_size_and_position":{"message":"התאם גודל ומיקום של מסייע AdGuard"},"settings_icon_size":{"message":"גודל איקון:"},"settings_small":{"message":"קטן"},"settings_big":{"message":"גדול"},"settings_position":{"message":"מיקום:"},"settings_left_top":{"message":"בחלק העליון משמאל"},"settings_right_top":{"message":"בחלק העליון מימין"},"settings_left_bottom":{"message":"צד שמאל למטה"},"settings_right_bottom":{"message":"צד ימין למטה"},"settings_cancel":{"message":"בטל"},"settings_save":{"message":"שמור שינויים"}}');

/***/ }),

/***/ 4450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUyIDE4Ij4KICAgIDxwYXRoIGQ9Ik01LjM1Myw3LjQxMiBMNS4zMDQsNy4zNjMgQzcuMTIxLDcuMTI1IDguNTI5LDUuNTg3IDguNTI5LDMuNzA2IEM4LjUyOSwxLjY1OSA2Ljg3LDAgNC44MjQsMCBDMi43NzcsMCAxLjExOCwxLjY1OSAxLjExOCwzLjcwNiBDMS4xMTgsNS41NzIgMi41MDIsNy4wOTkgNC4yOTQsNy4zNTggTDQuMjk0LDcuNDEyIEMxLjExOCw3LjQxMiAwLjA1OSw5LjUyOSAwLjA1OSw5LjUyOSBMMS4xMTgsMTUuODgyIEMxLjExOCwxNi45MzggMi40NzUsMTcuODA2IDQuMjQ0LDE3Ljk2NyBMNC4yOTQsMTggTDUuMzUzLDE4IEw1LjQwMywxNy45NjcgQzcuMTcyLDE3LjgwNiA4LjUyOSwxNi45MzggOC41MjksMTUuODgyIEw5LjU4OCw5LjUyOSBDOS41ODgsOS41MjkgOC41MjksNy40MTIgNS4zNTMsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTE1Ljk0MSw3LjQxMiBMMTUuODkyLDcuMzYzIEMxNy43MDksNy4xMjUgMTkuMTE4LDUuNTg3IDE5LjExOCwzLjcwNiBDMTkuMTE4LDEuNjU5IDE3LjQ1OCwwIDE1LjQxMiwwIEMxMy4zNjUsMCAxMS43MDYsMS42NTkgMTEuNzA2LDMuNzA2IEMxMS43MDYsNS41NzIgMTMuMDksNy4wOTkgMTQuODgyLDcuMzU4IEwxNC44ODIsNy40MTIgQzExLjcwNiw3LjQxMiAxMC42NDcsOS41MjkgMTAuNjQ3LDkuNTI5IEwxMS43MDYsMTUuODgyIEMxMS43MDYsMTYuOTM4IDEzLjA2MywxNy44MDYgMTQuODMzLDE3Ljk2NyBMMTQuODgyLDE4IEwxNS45NDEsMTggTDE1Ljk5MSwxNy45NjcgQzE3Ljc2LDE3LjgwNiAxOS4xMTgsMTYuOTM4IDE5LjExOCwxNS44ODIgTDIwLjE3Niw5LjUyOSBDMjAuMTc2LDkuNTI5IDE5LjExOCw3LjQxMiAxNS45NDEsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTI2LjUyOSw3LjQxMiBMMjYuNDgxLDcuMzYzIEMyOC4yOTgsNy4xMjUgMjkuNzA2LDUuNTg3IDI5LjcwNiwzLjcwNiBDMjkuNzA2LDEuNjU5IDI4LjA0NywwIDI2LDAgQzIzLjk1MywwIDIyLjI5NCwxLjY1OSAyMi4yOTQsMy43MDYgQzIyLjI5NCw1LjU3MiAyMy42NzgsNy4wOTkgMjUuNDcxLDcuMzU4IEwyNS40NzEsNy40MTIgQzIyLjI5NCw3LjQxMiAyMS4yMzUsOS41MjkgMjEuMjM1LDkuNTI5IEwyMi4yOTQsMTUuODgyIEMyMi4yOTQsMTYuOTM4IDIzLjY1MiwxNy44MDYgMjUuNDIxLDE3Ljk2NyBMMjUuNDcxLDE4IEwyNi41MjksMTggTDI2LjU3OSwxNy45NjcgQzI4LjM0OCwxNy44MDYgMjkuNzA2LDE2LjkzOCAyOS43MDYsMTUuODgyIEwzMC43NjUsOS41MjkgQzMwLjc2NSw5LjUyOSAyOS43MDYsNy40MTIgMjYuNTI5LDcuNDEyIHoiIGZpbGw9IiM3MTcxNzEiLz4KICAgIDxwYXRoIGQ9Ik0zNy4xMTgsNy40MTIgTDM3LjA2OSw3LjM2MyBDMzguODg2LDcuMTI1IDQwLjI5NCw1LjU4NyA0MC4yOTQsMy43MDYgQzQwLjI5NCwxLjY1OSAzOC42MzUsMCAzNi41ODgsMCBDMzQuNTQyLDAgMzIuODgyLDEuNjU5IDMyLjg4MiwzLjcwNiBDMzIuODgyLDUuNTcyIDM0LjI2Niw3LjA5OSAzNi4wNTksNy4zNTggTDM2LjA1OSw3LjQxMiBDMzIuODgyLDcuNDEyIDMxLjgyNCw5LjUyOSAzMS44MjQsOS41MjkgTDMyLjg4MiwxNS44ODIgQzMyLjg4MiwxNi45MzggMzQuMjQsMTcuODA2IDM2LjAwOSwxNy45NjcgTDM2LjA1OSwxOCBMMzcuMTE4LDE4IEwzNy4xNjcsMTcuOTY3IEMzOC45MzcsMTcuODA2IDQwLjI5NCwxNi45MzggNDAuMjk0LDE1Ljg4MiBMNDEuMzUzLDkuNTI5IEM0MS4zNTMsOS41MjkgNDAuMjk0LDcuNDEyIDM3LjExOCw3LjQxMiB6IiBmaWxsPSIjNzE3MTcxIi8+CiAgICA8cGF0aCBkPSJNNDcuNzA2LDcuNDEyIEw0Ny42NTcsNy4zNjMgQzQ5LjQ3NCw3LjEyNSA1MC44ODIsNS41ODcgNTAuODgyLDMuNzA2IEM1MC44ODIsMS42NTkgNDkuMjIzLDAgNDcuMTc2LDAgQzQ1LjEzLDAgNDMuNDcxLDEuNjU5IDQzLjQ3MSwzLjcwNiBDNDMuNDcxLDUuNTcyIDQ0Ljg1NCw3LjA5OSA0Ni42NDcsNy4zNTggTDQ2LjY0Nyw3LjQxMiBDNDMuNDcxLDcuNDEyIDQyLjQxMiw5LjUyOSA0Mi40MTIsOS41MjkgTDQzLjQ3MSwxNS44ODIgQzQzLjQ3MSwxNi45MzggNDQuODI4LDE3LjgwNiA0Ni41OTcsMTcuOTY3IEw0Ni42NDcsMTggTDQ3LjcwNiwxOCBMNDcuNzU2LDE3Ljk2NyBDNDkuNTI1LDE3LjgwNiA1MC44ODIsMTYuOTM4IDUwLjg4MiwxNS44ODIgTDUxLjk0MSw5LjUyOSBDNTEuOTQxLDkuNTI5IDUwLjg4Miw3LjQxMiA0Ny43MDYsNy40MTIgeiIgZmlsbD0iI0Q2RDZENiIvPgo8L3N2Zz4K");

/***/ }),

/***/ 4506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMTBDNCAxMCA4IDE0Ljc3MiAxMiAxNC43NzJDMTYgMTQuNzcyIDIwIDEwIDIwIDEwIiBzdHJva2U9IiM2N0IyNzkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyIDE1VjE3IiBzdHJva2U9IiM2N0IyNzkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE4IDEzVjE1IiBzdHJva2U9IiM2N0IyNzkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTYgMTNWMTUiIHN0cm9rZT0iIzY3QjI3OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K");

/***/ }),

/***/ 4682:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Asistente de Adguard","description":"Permite fácilmente administrar el filtrado directamente desde el navegador"}}}');

/***/ }),

/***/ 4706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogICAgPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIwIiB4MT0iNSIgeTE9IjUiIHgyPSI5NSIgeTI9Ijk1Ii8+CiAgICA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMjAiIHgxPSI5NSIgeTE9IjUiIHgyPSI1IiB5Mj0iOTUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 4818:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Assistant AdGuard ","description":"Fournit un moyen simple et pratique de gérer le filtrage directement depuis le navigateur"}}}');

/***/ }),

/***/ 4890:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Weboldalak","settings_position_save_all":"Minden weboldal","settings_position_save_this":"Ez a weboldal","assistant_select_element_start":"Indítás","assistant_select_element_text":"Válassza ki az elemet az oldalon, amit blokkolni szeretne. Frissítse az oldalt, hogy kilépjen az elemblokkoló módból.","menu_filtration_status":{"message":"Szűrés ezen a weboldalon"},"menu_do_not_filter_30_sec":{"message":"Szüneteltetés 30 másodpercig"},"menu_block_ad_on_site":{"message":"Hirdetés blokkolása ezen a weboldalon"},"menu_report_abuse":{"message":"Weboldal jelentése"},"menu_site_report":{"message":"Weboldal biztonsági jelentése"},"menu_settings":{"message":"Asszisztens beállításai"},"menu_wot_reputation_indicator":{"message":"A webhely hírnevének mutatója"},"menu_wot_reputation_confidence_level":{"message":"A hírnév bizalmi szintje"},"assistant_select_element":{"message":"Elem blokkolása"},"assistant_select_element_ext":{"message":"Kattintson a blokkolni kívánt elemre. Az AdGuard létrehoz egy felhasználói szabályt"},"assistant_select_element_cancel":{"message":"Mégse"},"assistant_block_element":{"message":"Elem blokkolása"},"assistant_block_element_explain":{"message":"Elemblokkoló szabály létrehozása"},"assistant_slider_explain":{"message":"Mozgassa a csúszkát a keret méretének beállításához"},"assistant_extended_settings":{"message":"Haladó beállítások"},"assistant_apply_rule_to_all_sites":{"message":"Szabály alkalmazása az összes weboldalra"},"assistant_block_by_reference":{"message":"Blokkolás link alapján"},"assistant_block_similar":{"message":"Hasonlók blokkolása"},"assistant_another_element":{"message":"Másik elem választása"},"assistant_preview":{"message":"Előnézet"},"assistant_block":{"message":"Blokkolás"},"assistant_settings":{"message":"Asszisztens beállításai"},"assistant_preview_header":{"message":"Blokkolt elem előnézete"},"assistant_preview_header_info":{"message":"Ellenőrizze, hogy az elem helyesen lett-e letiltva"},"assistant_preview_end":{"message":"Kilépés az előnézetből"},"wot_unknown_description":{"message":"Ez a weboldal nincs nyilvántartva a $1 alapján"},"wot_bad_description":{"message":"Ennek a weboldalnak nagyon rossz a megítélése a $1 alapján"},"wot_poor_description":{"message":"Ennek a weboldalnak rossz a megítélése a $1 alapján"},"wot_unsatisfactory_description":{"message":"Ennek a weboldalnak gyenge a megítélése a $1 alapján"},"wot_good_description":{"message":"Ennek a weboldalnak jó a megítélése a $1 alapján"},"wot_excellent_description":{"message":"Ennek a weboldalnak kitűnő a megítélése a $1 alapján"},"settings_choose_size_and_position":{"message":"Állítsa be az AdGuard Assistant méretét és pozícióját"},"settings_icon_size":{"message":"Ikon mérete:"},"settings_small":{"message":"Kicsi"},"settings_big":{"message":"Nagy"},"settings_position":{"message":"Pozíció:"},"settings_left_top":{"message":"Bal felül"},"settings_right_top":{"message":"Jobb felül"},"settings_left_bottom":{"message":"Bal alul"},"settings_right_bottom":{"message":"Jobb alul"},"settings_cancel":{"message":"Mégse"},"settings_save":{"message":"Változások mentése"}}');

/***/ }),

/***/ 5037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(2287);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 5180:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5590);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9869);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(1266);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(3022);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(959);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(1932);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(3741);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(4450);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(8675);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(9100);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(9268);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(2501);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(4224);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(2484);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(7800);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(9389);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(4706);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(1774);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
// Module
exports.push([module.id, ".close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: inline-block;\n  vertical-align: top;\n  width: 1em;\n  font-size: 12px;\n  line-height: 1;\n  cursor: pointer;\n  transition: opacity 0.3s ease;\n}\n.close:before {\n  content: \"\\00a0\";\n}\n@media (max-width: 320px) {\n  .close {\n    font-size: 15px;\n    top: 18px;\n    right: 14px;\n  }\n}\n.a-logo {\n  display: inline-block;\n  vertical-align: top;\n  width: 40px;\n  height: 40px;\n  padding: 10px 0 0;\n  font-size: 20px;\n  text-align: center;\n  border: 1px solid #cdcdcd;\n  border-radius: 50%;\n  background: #fff;\n}\n.a-logo__small {\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  padding: 6px 0 0;\n}\n.tooltip {\n  position: relative;\n}\n.tooltip:before {\n  display: none;\n  content: attr(data-title);\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 170px;\n  margin: 7px 0 0 -85px;\n  padding: 6px 0 5px;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.tooltip:after {\n  display: none;\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin: 3px 0 0 -4px;\n  border-bottom: 4px solid rgba(0, 0, 0, 0.8);\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.tooltip:hover:before,\n.tooltip:hover:after {\n  display: block;\n}\n.main {\n  position: relative;\n}\n.main--roboto {\n  font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n  font-weight: 400;\n}\n.main_close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: inline-block;\n  vertical-align: top;\n  width: 24px;\n  height: 24px;\n  line-height: 1;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.main_close svg {\n  width: 100%;\n  height: 100%;\n}\n.head {\n  padding: 32px 32px 24px;\n  cursor: move;\n  touch-action: none;\n  -ms-touch-action: none;\n}\n.head_title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.2;\n  padding: 6px 0;\n}\n.head_text {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.head::after {\n  content: '';\n  display: block;\n  margin-top: 16px;\n  height: 1px;\n  width: 100%;\n}\n.foot {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 16px;\n  padding: 0 32px 32px;\n}\n.foot .btn {\n  width: 256px;\n}\n.foot .btn:nth-child(3) {\n  width: 328px;\n  margin: 0 auto;\n}\n.old-head {\n  padding: 18px 20px;\n  cursor: move;\n}\n.old-head_title {\n  font-size: 16px;\n  font-weight: 700;\n}\n.old-head_text {\n  margin: 4px 0 0;\n  font-size: 12px;\n}\n.old-foot {\n  padding: 20px;\n}\n.old-foot_action {\n  float: right;\n}\n.old-foot_action_btn {\n  font-size: 0;\n}\n.old-foot_action_btn .old-btn + .old-btn {\n  margin-left: 10px;\n}\n.old-foot .cf {\n  clear: right;\n}\n.element-rule {\n  padding: 0 32px 24px;\n}\n.element-rule_slider {\n  user-select: none;\n}\n@media (max-width: 320px) {\n  .element-rule_slider {\n    display: none;\n  }\n}\n.element-rule_expand-link {\n  font-size: 18px;\n  line-height: 1.2;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 8px 0;\n  display: flex;\n  column-gap: 4px;\n}\n.element-rule_expand-link_txt {\n  display: inline-block;\n  vertical-align: top;\n  padding: 1px 0;\n}\n.element-rule_expand-link_arr {\n  display: inline-block;\n  vertical-align: top;\n  width: 24px;\n  height: 24px;\n  transition: color 0.3s ease, transform 0.3s ease;\n  line-height: 1;\n}\n.element-rule_expand-link.active .element-rule_expand-link_arr {\n  transform: rotate(180deg);\n}\n.element-rule_form {\n  display: none;\n}\n.element-rule_form.open {\n  display: block;\n}\n.element-rule_fieldset {\n  padding: 8px 0;\n}\n.element-rule_more--mobile {\n  display: none;\n}\n@media (max-width: 320px) {\n  .element-rule_more--mobile {\n    display: block;\n  }\n  .element-rule_more--mobile .element-rule_expand-link {\n    display: none;\n  }\n  .element-rule_more--mobile #adg-cancel {\n    width: 106px;\n    padding: 10px 7px;\n  }\n  .element-rule_more--mobile #adg-accept {\n    padding: 10px 6px;\n  }\n}\n.element-rule_text {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.adg-slide {\n  display: flex;\n  padding: 16px 0;\n}\n.adg-slide_clue {\n  padding: 9px 0;\n  font-size: 18px;\n  font-weight: 700;\n  cursor: pointer;\n  line-height: 1.2;\n}\n.adg-slide_clue--min {\n  order: 1;\n}\n.adg-slide_clue--max {\n  order: 3;\n}\n.adg-slide_track {\n  order: 2;\n  flex: 1 1 auto;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  column-gap: 4px;\n  padding: 18px 28px;\n  cursor: pointer;\n  touch-action: none;\n}\n.adg-slide_tick {\n  flex: 1 1 auto;\n  width: auto;\n  height: 4px;\n  pointer-events: none;\n}\n.adg-slide_handle {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n}\n.adg-slide-btns {\n  display: none;\n}\n.adg-slide-btn {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  border: 2px solid #e2e2e2;\n  border-radius: 2px;\n}\n.adg-slide-btn:after {\n  content: \"\";\n  position: absolute;\n  left: 8px;\n  top: 15.3px;\n  width: 18px;\n  height: 2px;\n  background-color: #4e4e4e;\n  border-radius: 2px;\n}\n.adg-slide-btn--plus {\n  margin-left: 9px;\n}\n.adg-slide-btn--plus:before {\n  content: \"\";\n  position: absolute;\n  left: 16px;\n  top: 8px;\n  height: 17px;\n  width: 2px;\n  background-color: #4e4e4e;\n  border-radius: 2px;\n}\n.settings_fieldset {\n  padding: 20px;\n}\n.settings_fieldset:first-child {\n  border: 0;\n}\n.settings_fieldset_lbl {\n  float: left;\n  width: 126px;\n  margin: 1px 0 0;\n  font-weight: 500;\n}\n.settings_fieldset_lbl__pos {\n  margin-top: 21px;\n}\n.settings_fieldset_val {\n  margin: 0 0 0 126px;\n}\n.choice-size {\n  position: relative;\n  font-size: 14px;\n}\n.choice-size_field {\n  margin: 10px 0 0;\n}\n.choice-size_field:first-child {\n  margin: 0;\n}\n.choice-size_logo {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  width: 40px;\n  height: 40px;\n  background-size: 21px;\n  background-position: 50% 11px;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  border: none ;\n  box-shadow: 0 0 10px 3px rgba(162, 161, 161, 0.3);\n  border-radius: 100% ;\n}\n.choice-size_logo.logo__small {\n  top: 15px;\n  right: 20px;\n  width: 24px;\n  height: 24px;\n  background-position: 50% 6px;\n  background-size: 14px;\n}\n.choice-size_input:checked ~ .choice-size_logo {\n  display: block;\n}\n[class^=\"s-position-arr-\"] {\n  display: block;\n  width: 11px;\n  height: 11px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: 44px 22px;\n}\n.s-position-arr-top-left {\n  background-position: 0 0;\n}\n.s-position-arr-top-right {\n  background-position: -11px 0;\n}\n.s-position-arr-bottom-left {\n  background-position: 0 -11px;\n}\n.s-position-arr-bottom-right {\n  background-position: -11px -11px;\n}\n.change-position {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 70px;\n  margin: -3px 0 0 -3px;\n}\n.change-position_i {\n  float: left;\n  margin: 3px 0 0 3px;\n}\n.change-position_input:checked + .change-position_label .s-position-arr-top-left {\n  background-position: -22px 0;\n}\n.change-position_input:checked + .change-position_label .s-position-arr-top-right {\n  background-position: -33px 0;\n}\n.change-position_input:checked + .change-position_label .s-position-arr-bottom-left {\n  background-position: -22px -11px;\n}\n.change-position_input:checked + .change-position_label .s-position-arr-bottom-right {\n  background-position: -33px -11px;\n}\n.change-position_input:checked ~ .change-position_val {\n  display: block;\n}\n.change-position_label {\n  display: block;\n  width: 32px;\n  height: 32px;\n  margin: 0;\n  padding: 9px 0 0 9px;\n  border: 1px solid #dfdedb;\n  cursor: pointer;\n}\n.change-position_val {\n  display: none;\n  position: absolute;\n  top: 27px;\n  left: 82px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.position-save .position-save_field {\n  margin-bottom: 10px;\n}\n.wot-indicator {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 5px;\n}\n#WotDescriptionText {\n  white-space: pre-line;\n}\n#WotDescriptionText #WotLogo {\n  cursor: pointer;\n}\n.adg-wot {\n  width: 18px;\n  height: 18px;\n  display: block;\n  border: 5px solid #000;\n  border-radius: 50%;\n}\n.adg-wot-unknown {\n  border-color: #ccc;\n}\n.adg-wot-red {\n  border-color: #b60000;\n}\n.adg-wot-lightRed {\n  border-color: #f21800;\n}\n.adg-wot-yellow {\n  border-color: #fac000;\n}\n.adg-wot-lightGreen {\n  border-color: #69d225;\n}\n.adg-wot-green {\n  border-color: #00ae17;\n}\n.adg-wot-confidence {\n  width: 52px;\n  height: 18px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.adg-wot-confidence-0 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.adg-wot-confidence-1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.adg-wot-confidence-2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.adg-wot-confidence-3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.adg-wot-confidence-4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.adg-wot-confidence-5 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.confidence-indication,\n.wot-indicator {\n  text-decoration: none;\n  vertical-align: middle;\n}\n.confidence-indication:hover,\n.wot-indicator:hover {\n  text-decoration: none;\n}\n.confidence-indication {\n  display: inline-block;\n  margin-right: 10px;\n}\n.wot-logo {\n  display: inline-block;\n  vertical-align: top;\n  width: 31px;\n  height: 12px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat 0 0 / cover;\n  margin-top: 3px;\n}\n.wot-hide {\n  display: none;\n}\niframe#adguard-assistant-dialog {\n  position: fixed;\n  clip: auto;\n  border-radius: 8px;\n  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.1);\n  z-index: 2147483647;\n  display: block!important;\n}\n.sg_hide_element {\n  display: none!important;\n}\nimg.adguard_sg_selected {\n  border: 5px solid #0F0 !important;\n}\n#_sg_div.sg_top {\n  top: 5px !important;\n}\n#_sg_div.sg_bottom {\n  bottom: 5px !important;\n}\n#_sg_div input {\n  margin-right: 10px !important;\n  font-size: 15px !important;\n}\n#_sg_path_field {\n  width: 400px !important;\n}\n#_sg_div .sg_new_line {\n  clear: both !important;\n}\n#_sg_div .sg_option {\n  float: left !important;\n}\n#_sg_div .adguard_sg_selected_option {\n  text-decoration: underline;\n}\n.adguard-placeholder {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUM5OUE4MEZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUM5OUE4MUZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Qzk5QTdFRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5Qzk5QTdGRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rJm9wAAAAZQTFRF2+7g1OfZ+LX/EgAAACtJREFUeNpiYIQABhhA5TIyoHIhfCS1DKhcEB/FJAZG7AYzoNlLLy5AgAEAMigAar6TcqkAAAAASUVORK5CYII=);\n}\n.adguard-placeholder-icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkNBQTNGMkZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkNBQTNGM0ZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2Q0FBM0YwRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2Q0FBM0YxRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49sbDwAAAl9JREFUeNrMmE0o5VEYxq9vJmpI2SBZjCSNKKGwkDE0m8mg2QwzEtkNCeUjGyVhYTbTUIZEMWmkbCVlw9QkG4mammbK5zAWuLqek3ch3W7v+Z8P/7d+u/cczz3neM7zP0Htg12eR6wUkA+eg2yQDOLAYegjiIkEr0AjyAPRfnp8toW9Be20QoHKa0tYEhgCVdwBNoQVgCmQKjPItLAKMAtiZAeaFFYM5sATJ4ODDYl6BuadijIlLAJMgHiFOWJMbGUfmaZsHYN98Bvs6haWA1olx2yCMfAd/DF1+Psl5rwGPWAYXJn8r3wNXjB7L0ENrZLRwy/m6ZDorw8kSqewUpDL7P0Epm3YRRBoYfbugW5bPpZDK8apTnBqS9h7WjWOLXyz5fxPQSWjz0dWcmPrEhdJNIEprIlW198Z7aUV1SasQWJnAp3Dzw+FqWxlOmV2HeXVecbegHBTYS5YYVy1yejrVJhIpxluFPaB6V1WhSWQTXjcJqyKjFVnhagabBhFFk7tgnPmlp+oChNbmMXM70XgL3Nen6qwj8y+xfv53fQZKweFzN5xW4c/Cgwwe9fAui1hIuBlMntHZOKNirAyiQ+NLbBkw8fEE9IM2QSnBv19I+oWVguWQSxzrnX6EVrqoV2I15kS0AxeSszjo+326hQm3hoSQRqR6mCeL2BV5x0VSjYQojDHNmgzcYn/Uxj/H9SBM7fkMQ951Tuw4aageEMpY8FUHnPy+XZECXbRTUFxhezEqCiZFfsFRnXdg1xhgcT9BF/BJG2htRKiDjx376EX9Md36HoR/NDp5jJ1K8AAcQBmooZhTgQAAAAASUVORK5CYII=);\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 100%;\n}\n.adguard-placeholder-domain {\n  background: #778b7c;\n  color: #ffffff;\n  left: 0;\n  top: 0;\n  padding: 2px 4px;\n  position: relative;\n}\n@media print {\n  .adguard-alert,\n  #adguard-assistant-dialog {\n    display: none!important;\n    opacity: 0!important;\n    visibility: hidden!important;\n  }\n}\n.menu-head {\n  padding: 18px 20px;\n  cursor: move;\n  touch-action: none;\n  -ms-touch-action: none;\n}\n.menu-head_title {\n  font-size: 16px;\n  font-weight: 700;\n}\n.menu-head_name {\n  display: inline-block;\n  vertical-align: top;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 260px;\n  line-height: 26px;\n  margin: 0 10px 5px 0;\n}\n.menu-head_text {\n  margin: 4px 10px 0 0;\n  font-size: 12px;\n}\n.menu-filter {\n  width: 100%;\n  display: table;\n  padding: 20px;\n}\n.menu-filter_lbl {\n  display: table-cell;\n  vertical-align: middle;\n}\n.menu-filter_val {\n  display: table-cell;\n  vertical-align: middle;\n}\n.menu-filter_label {\n  position: relative;\n  width: 30px;\n  height: 12px;\n  border-radius: 25px;\n  background-color: #ed7865;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  float: right;\n}\n.menu-filter_label:after {\n  content: \"\";\n  cursor: pointer;\n  border-radius: 100%;\n  position: absolute;\n  left: -3px;\n  top: -4px;\n  box-shadow: 0 0 10px 3px rgba(162, 161, 161, 0.3);\n  width: 20px;\n  height: 20px;\n  background-color: #e85037;\n  transition: all 0.3s ease;\n}\n.menu-filter_handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 1px;\n  left: 1px;\n  border-radius: 4px;\n}\n.menu-filter_input:checked + .menu-filter_label {\n  background-color: #bde5c1;\n}\n.menu-filter_input:checked + .menu-filter_label:after {\n  left: 12px;\n  background-color: #68bc72;\n}\n.menu__btn {\n  position: relative;\n  cursor: pointer;\n  line-height: 45px;\n  height: 45px;\n  background-repeat: no-repeat;\n  background-position: 20px 50%;\n  transition: 0.3s ease;\n  padding: 0 20px 0 60px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.menu__btn:hover {\n  background-color: rgba(104, 188, 113, 0.2);\n}\n.menu__btn--clock {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-size: 16px 19px;\n}\n.menu__btn--landscape {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-size: 19px 17px;\n}\n.menu__btn--report {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-size: 16px 17px;\n}\n.menu__btn--security {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  background-size: 15px 16px;\n}\n.menu__btn--extensions {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  background-size: 18px;\n}\n.menu__btn--settings {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-size: 19px;\n}\n.menu__btn.hidden {\n  display: none;\n}\nbody {\n  color: #3D3D3D;\n}\n.main {\n  background: #FFFFFF;\n}\n.main-popup__btn {\n  background: #ffffff;\n  border: 1px solid #cfcfcf;\n}\n.main-popup__btn:hover {\n  background-color: #efefef;\n}\n.main-menu__btn {\n  background-color: #ffffff;\n}\n.main-menu__btn:hover {\n  background-color: #efefef;\n}\n.main-menu__btn:active,\n.main-menu__btn.active {\n  background-color: #f3f3f3;\n}\n.main-version {\n  color: #dfdfdf;\n}\n.main_close {\n  color: #7F7F7F;\n}\n.main_close:hover {\n  color: #3D3D3D;\n}\n.head_title {\n  color: #3D3D3D;\n}\n.head_text {\n  color: #5B5B5B;\n}\n.head::after {\n  background-color: #D2D2D2;\n}\n.element-rule_expand-link {\n  color: #3D3D3D;\n}\n.element-rule_expand-link_arr {\n  color: #7F7F7F;\n}\n.element-rule_expand-link:hover .element-rule_expand-link_arr {\n  color: #3D3D3D;\n}\n.element-rule_text {\n  color: #5B5B5B;\n}\n.close {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") no-repeat 0 0 / cover;\n  opacity: 0.6;\n}\n.close:hover {\n  opacity: 0.8;\n}\n.form-control {\n  color: #3D3D3D;\n  background-color: #F6F6F6;\n  border-color: #D2D2D2;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-txt {\n  color: #3D3D3D;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n  color: #7F7F7F;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon--on {\n  color: #67B279;\n}\n.menu,\n.menu-filter {\n  border-top: 1px solid #e0dfdb;\n}\n.settings_fieldset {\n  border-top: 1px solid #e0dfdb;\n}\n.btn-primary {\n  color: #3D3D3D;\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n.btn-primary:hover,\n.btn-primary:focus-visible {\n  background-color: #F6F6F6;\n  border-color: #F6F6F6;\n}\n.btn-primary:active,\n.btn-primary.active {\n  background-color: #E4E4E4;\n  border-color: #E4E4E4;\n}\n.btn-primary:disabled,\n.btn-primary[disabled],\n.btn-primary.disabled {\n  color: #A4A4A4;\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n.btn-cancel {\n  color: #FFFFFF;\n  background-color: #F67247;\n  border-color: #F67247;\n}\n.btn-cancel:hover,\n.btn-cancel:focus-visible {\n  background-color: #DF6740;\n  border-color: #DF6740;\n}\n.btn-cancel:active,\n.btn-cancel.active {\n  background-color: #B55434;\n  border-color: #B55434;\n}\n.btn-cancel:disabled,\n.btn-cancel[disabled],\n.btn-cancel.disabled {\n  background-color: #FAA98F;\n  border-color: #FAA98F;\n}\n.btn-default {\n  color: #3D3D3D;\n  background-color: #FFFFFF;\n  border-color: #3D3D3D;\n}\n.btn-default:hover,\n.btn-default:focus-visible {\n  background-color: #F6F6F6;\n}\n.btn-default:active,\n.btn-default.active {\n  background-color: #E4E4E4;\n}\n.btn-default:disabled,\n.btn-default[disabled],\n.btn-default.disabled {\n  color: #A4A4A4;\n  background-color: #FFFFFF;\n  border-color: #A4A4A4;\n}\n.change-position_input:checked + .change-position_label {\n  border-color: #36ba53;\n  background: #36ba53;\n}\ninput[type=\"radio\"] + .form-ui .form-ui-txt:before {\n  background: #ffffff;\n}\ninput[type=\"radio\"]:checked + .form-ui .form-ui-txt:after {\n  background: #36ba53;\n}\n.menu-head_title {\n  color: #343434;\n}\n.menu-head_text {\n  color: #343434;\n}\n.menu-filter_handle {\n  background: #ffffff;\n}\n.adg-slide_clue {\n  color: #3D3D3D;\n}\n.adg-slide_tick {\n  background-color: #C0C0C0;\n}\n.adg-slide_tick--active,\n.adg-slide_handle {\n  background-color: #67B279 !important;\n}\n.old-btn-primary {\n  border-color: #36ba53;\n  background: #36ba53;\n  color: #fff;\n}\n.old-btn-primary:hover {\n  border-color: #30a64a;\n  background: #30a64a;\n  color: #fff;\n}\n.old-btn-primary.active,\n.old-btn-primary:active {\n  border-color: #30a64a;\n  background: #30a64a;\n}\n.old-btn-primary.disabled,\n.old-btn-primary[disabled] {\n  border-color: #30a64a;\n  background: #30a64a;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    color: #E4E4E4;\n  }\n  .main {\n    background: #3D3D3D;\n  }\n  .main-popup__btn {\n    background: #323232;\n    border: 1px solid #666;\n  }\n  .main-popup__btn:hover {\n    background-color: #555555;\n  }\n  .main-menu__btn {\n    background-color: #323232;\n  }\n  .main-menu__btn:hover {\n    background-color: #555555;\n  }\n  .main-menu__btn:active,\n  .main-menu__btn.active {\n    background-color: #4d4d4d;\n  }\n  .main-version {\n    color: #444;\n  }\n  .main_close {\n    color: #C0C0C0;\n  }\n  .main_close:hover {\n    color: #E4E4E4;\n  }\n  .head_title {\n    color: #E4E4E4;\n  }\n  .head_text {\n    color: #D2D2D2;\n  }\n  .head::after {\n    background-color: #5B5B5B;\n  }\n  .element-rule_expand-link {\n    color: #E4E4E4;\n  }\n  .element-rule_expand-link_arr {\n    color: #C0C0C0;\n  }\n  .element-rule_expand-link:hover .element-rule_expand-link_arr {\n    color: #E4E4E4;\n  }\n  .element-rule_text {\n    color: #D2D2D2;\n  }\n  .close {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") no-repeat 0 0 / cover;\n    opacity: 0.7;\n  }\n  .close:hover {\n    opacity: 1;\n  }\n  .form-control {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #5B5B5B;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-txt {\n    color: #E4E4E4;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n    color: #C0C0C0;\n  }\n  .menu,\n  .menu-filter {\n    border-top: 1px solid #444;\n  }\n  .settings_fieldset {\n    border-top: 1px solid #444;\n  }\n  .btn-primary {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #3D3D3D;\n  }\n  .btn-primary:hover,\n  .btn-primary:focus-visible {\n    background-color: #5B5B5B;\n    border-color: #5B5B5B;\n  }\n  .btn-primary:active,\n  .btn-primary.active {\n    background-color: #7F7F7F;\n    border-color: #7F7F7F;\n  }\n  .btn-primary:disabled,\n  .btn-primary[disabled],\n  .btn-primary.disabled {\n    background-color: #3D3D3D;\n    border-color: #3D3D3D;\n  }\n  .btn-cancel:disabled,\n  .btn-cancel[disabled],\n  .btn-cancel.disabled {\n    background-color: #7B3923;\n    border-color: #7B3923;\n  }\n  .btn-default {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #E4E4E4;\n  }\n  .btn-default:hover,\n  .btn-default:focus-visible {\n    background-color: #5B5B5B;\n  }\n  .btn-default:active,\n  .btn-default.active {\n    background-color: #7F7F7F;\n  }\n  .btn-default:disabled,\n  .btn-default[disabled],\n  .btn-default.disabled {\n    background-color: #3D3D3D;\n  }\n  .change-position_input:checked + .change-position_label {\n    border-color: #4D995F;\n    background: #4D995F;\n  }\n  input[type=\"radio\"] + .form-ui .form-ui-txt:before {\n    background: #323232;\n  }\n  input[type=\"radio\"]:checked + .form-ui .form-ui-txt:after {\n    background: #4D995F;\n  }\n  .menu-head_title {\n    color: #ccc;\n  }\n  .menu-head_text {\n    color: #ccc;\n  }\n  .menu-filter_handle {\n    background: #323232;\n  }\n  .adg-slide_clue {\n    color: #E4E4E4;\n  }\n  .adg-slide_tick {\n    background-color: #7F7F7F;\n  }\n  .old-btn-primary {\n    border-color: #4D995F;\n    background: #4D995F;\n    color: #fff;\n  }\n  .old-btn-primary:hover {\n    border-color: #39774C;\n    background: #39774C;\n    color: #fff;\n  }\n  .old-btn-primary.active,\n  .old-btn-primary:active {\n    border-color: #39774C;\n    background: #39774C;\n  }\n  .old-btn-primary.disabled,\n  .old-btn-primary[disabled] {\n    border-color: #39774C;\n    background: #39774C;\n  }\n}\n:host {\n  display: block!important;\n  position: relative!important;\n  width: 0!important;\n  height: 0!important;\n  margin: 0!important;\n  padding: 0!important;\n  z-index: 2147483647!important;\n}\n:host ::after,\n:host ::before {\n  display: none!important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 5213:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5590);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9869);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(4706);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(1774);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(5767);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(3382);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(713);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(4506);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(2458);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(770);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(9734);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
exports.push([module.id, ":host {\n  display: block!important;\n  position: relative!important;\n  width: 0!important;\n  height: 0!important;\n  margin: 0!important;\n  padding: 0!important;\n  z-index: 2147483647!important;\n}\n:host ::after,\n:host ::before {\n  display: none!important;\n}\nbody {\n  color: #3D3D3D;\n}\n.main {\n  background: #FFFFFF;\n}\n.main-popup__btn {\n  background: #ffffff;\n  border: 1px solid #cfcfcf;\n}\n.main-popup__btn:hover {\n  background-color: #efefef;\n}\n.main-menu__btn {\n  background-color: #ffffff;\n}\n.main-menu__btn:hover {\n  background-color: #efefef;\n}\n.main-menu__btn:active,\n.main-menu__btn.active {\n  background-color: #f3f3f3;\n}\n.main-version {\n  color: #dfdfdf;\n}\n.main_close {\n  color: #7F7F7F;\n}\n.main_close:hover {\n  color: #3D3D3D;\n}\n.head_title {\n  color: #3D3D3D;\n}\n.head_text {\n  color: #5B5B5B;\n}\n.head::after {\n  background-color: #D2D2D2;\n}\n.element-rule_expand-link {\n  color: #3D3D3D;\n}\n.element-rule_expand-link_arr {\n  color: #7F7F7F;\n}\n.element-rule_expand-link:hover .element-rule_expand-link_arr {\n  color: #3D3D3D;\n}\n.element-rule_text {\n  color: #5B5B5B;\n}\n.close {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0 / cover;\n  opacity: 0.6;\n}\n.close:hover {\n  opacity: 0.8;\n}\n.form-control {\n  color: #3D3D3D;\n  background-color: #F6F6F6;\n  border-color: #D2D2D2;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-txt {\n  color: #3D3D3D;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n  color: #7F7F7F;\n}\ninput[type=\"checkbox\"] + .form-ui .form-ui-icon--on {\n  color: #67B279;\n}\n.menu,\n.menu-filter {\n  border-top: 1px solid #e0dfdb;\n}\n.settings_fieldset {\n  border-top: 1px solid #e0dfdb;\n}\n.btn-primary {\n  color: #3D3D3D;\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n.btn-primary:hover,\n.btn-primary:focus-visible {\n  background-color: #F6F6F6;\n  border-color: #F6F6F6;\n}\n.btn-primary:active,\n.btn-primary.active {\n  background-color: #E4E4E4;\n  border-color: #E4E4E4;\n}\n.btn-primary:disabled,\n.btn-primary[disabled],\n.btn-primary.disabled {\n  color: #A4A4A4;\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n.btn-cancel {\n  color: #FFFFFF;\n  background-color: #F67247;\n  border-color: #F67247;\n}\n.btn-cancel:hover,\n.btn-cancel:focus-visible {\n  background-color: #DF6740;\n  border-color: #DF6740;\n}\n.btn-cancel:active,\n.btn-cancel.active {\n  background-color: #B55434;\n  border-color: #B55434;\n}\n.btn-cancel:disabled,\n.btn-cancel[disabled],\n.btn-cancel.disabled {\n  background-color: #FAA98F;\n  border-color: #FAA98F;\n}\n.btn-default {\n  color: #3D3D3D;\n  background-color: #FFFFFF;\n  border-color: #3D3D3D;\n}\n.btn-default:hover,\n.btn-default:focus-visible {\n  background-color: #F6F6F6;\n}\n.btn-default:active,\n.btn-default.active {\n  background-color: #E4E4E4;\n}\n.btn-default:disabled,\n.btn-default[disabled],\n.btn-default.disabled {\n  color: #A4A4A4;\n  background-color: #FFFFFF;\n  border-color: #A4A4A4;\n}\n.change-position_input:checked + .change-position_label {\n  border-color: #36ba53;\n  background: #36ba53;\n}\ninput[type=\"radio\"] + .form-ui .form-ui-txt:before {\n  background: #ffffff;\n}\ninput[type=\"radio\"]:checked + .form-ui .form-ui-txt:after {\n  background: #36ba53;\n}\n.menu-head_title {\n  color: #343434;\n}\n.menu-head_text {\n  color: #343434;\n}\n.menu-filter_handle {\n  background: #ffffff;\n}\n.adg-slide_clue {\n  color: #3D3D3D;\n}\n.adg-slide_tick {\n  background-color: #C0C0C0;\n}\n.adg-slide_tick--active,\n.adg-slide_handle {\n  background-color: #67B279 !important;\n}\n.old-btn-primary {\n  border-color: #36ba53;\n  background: #36ba53;\n  color: #fff;\n}\n.old-btn-primary:hover {\n  border-color: #30a64a;\n  background: #30a64a;\n  color: #fff;\n}\n.old-btn-primary.active,\n.old-btn-primary:active {\n  border-color: #30a64a;\n  background: #30a64a;\n}\n.old-btn-primary.disabled,\n.old-btn-primary[disabled] {\n  border-color: #30a64a;\n  background: #30a64a;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    color: #E4E4E4;\n  }\n  .main {\n    background: #3D3D3D;\n  }\n  .main-popup__btn {\n    background: #323232;\n    border: 1px solid #666;\n  }\n  .main-popup__btn:hover {\n    background-color: #555555;\n  }\n  .main-menu__btn {\n    background-color: #323232;\n  }\n  .main-menu__btn:hover {\n    background-color: #555555;\n  }\n  .main-menu__btn:active,\n  .main-menu__btn.active {\n    background-color: #4d4d4d;\n  }\n  .main-version {\n    color: #444;\n  }\n  .main_close {\n    color: #C0C0C0;\n  }\n  .main_close:hover {\n    color: #E4E4E4;\n  }\n  .head_title {\n    color: #E4E4E4;\n  }\n  .head_text {\n    color: #D2D2D2;\n  }\n  .head::after {\n    background-color: #5B5B5B;\n  }\n  .element-rule_expand-link {\n    color: #E4E4E4;\n  }\n  .element-rule_expand-link_arr {\n    color: #C0C0C0;\n  }\n  .element-rule_expand-link:hover .element-rule_expand-link_arr {\n    color: #E4E4E4;\n  }\n  .element-rule_text {\n    color: #D2D2D2;\n  }\n  .close {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0 / cover;\n    opacity: 0.7;\n  }\n  .close:hover {\n    opacity: 1;\n  }\n  .form-control {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #5B5B5B;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-txt {\n    color: #E4E4E4;\n  }\n  input[type=\"checkbox\"] + .form-ui .form-ui-icon--off {\n    color: #C0C0C0;\n  }\n  .menu,\n  .menu-filter {\n    border-top: 1px solid #444;\n  }\n  .settings_fieldset {\n    border-top: 1px solid #444;\n  }\n  .btn-primary {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #3D3D3D;\n  }\n  .btn-primary:hover,\n  .btn-primary:focus-visible {\n    background-color: #5B5B5B;\n    border-color: #5B5B5B;\n  }\n  .btn-primary:active,\n  .btn-primary.active {\n    background-color: #7F7F7F;\n    border-color: #7F7F7F;\n  }\n  .btn-primary:disabled,\n  .btn-primary[disabled],\n  .btn-primary.disabled {\n    background-color: #3D3D3D;\n    border-color: #3D3D3D;\n  }\n  .btn-cancel:disabled,\n  .btn-cancel[disabled],\n  .btn-cancel.disabled {\n    background-color: #7B3923;\n    border-color: #7B3923;\n  }\n  .btn-default {\n    color: #E4E4E4;\n    background-color: #3D3D3D;\n    border-color: #E4E4E4;\n  }\n  .btn-default:hover,\n  .btn-default:focus-visible {\n    background-color: #5B5B5B;\n  }\n  .btn-default:active,\n  .btn-default.active {\n    background-color: #7F7F7F;\n  }\n  .btn-default:disabled,\n  .btn-default[disabled],\n  .btn-default.disabled {\n    background-color: #3D3D3D;\n  }\n  .change-position_input:checked + .change-position_label {\n    border-color: #4D995F;\n    background: #4D995F;\n  }\n  input[type=\"radio\"] + .form-ui .form-ui-txt:before {\n    background: #323232;\n  }\n  input[type=\"radio\"]:checked + .form-ui .form-ui-txt:after {\n    background: #4D995F;\n  }\n  .menu-head_title {\n    color: #ccc;\n  }\n  .menu-head_text {\n    color: #ccc;\n  }\n  .menu-filter_handle {\n    background: #323232;\n  }\n  .adg-slide_clue {\n    color: #E4E4E4;\n  }\n  .adg-slide_tick {\n    background-color: #7F7F7F;\n  }\n  .old-btn-primary {\n    border-color: #4D995F;\n    background: #4D995F;\n    color: #fff;\n  }\n  .old-btn-primary:hover {\n    border-color: #39774C;\n    background: #39774C;\n    color: #fff;\n  }\n  .old-btn-primary.active,\n  .old-btn-primary:active {\n    border-color: #39774C;\n    background: #39774C;\n  }\n  .old-btn-primary.disabled,\n  .old-btn-primary[disabled] {\n    border-color: #39774C;\n    background: #39774C;\n  }\n}\nbody {\n  padding: 1vw;\n  background: transparent;\n}\n.main {\n  position: relative;\n  padding: 8vw 3vw;\n}\n.main .footer {\n  letter-spacing: 3vw;\n}\n.main-version {\n  position: absolute;\n  bottom: 0;\n  right: 7px;\n  font-size: 5vw;\n}\n.main-popup {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5vw;\n  box-shadow: 0 0px 5vw 0 rgba(0, 0, 0, 0.2);\n}\n.main-popup__logo {\n  width: 11vw;\n  height: 11vw;\n}\n.main-popup__logo.adguard-assistant-button-main-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n}\n.main-popup__title {\n  font-size: 6vw;\n  margin: 3vw 0;\n}\n.main-popup__content {\n  font-size: 5vw;\n  padding: 0 3vw;\n  margin-bottom: 5vw;\n  border-top: none;\n}\n.main-popup__btn {\n  font-size: 5vw;\n  padding: 2vh 8vw;\n  border-radius: 3px;\n  letter-spacing: normal;\n}\n.main-popup__btn--green {\n  color: #ffffff;\n  border: 1px solid #66B574;\n  background-color: #66B574;\n  box-shadow: none;\n}\n.main-popup__btn--green:hover {\n  background-color: #5ea76b;\n  color: #fff;\n}\n.main-popup__btn:focus {\n  box-shadow: none;\n}\n.main-menu {\n  margin: 4vw;\n  padding: 4vw;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 4vw;\n  box-shadow: 0 0 4vw -2px rgba(0, 0, 0, 0.3);\n}\n.main-menu__info {\n  width: 100%;\n  text-align: center;\n}\n.main-menu__btn {\n  border: 0;\n  font-size: 0;\n  width: 12vw;\n  height: 12vw;\n  border-radius: 2vw;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100%;\n  position: relative;\n}\n.main-menu__btn:disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.main-menu__btn--accept {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.main-menu__btn--preview {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.main-menu__btn--preview:active,\n.main-menu__btn--preview.active {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.main-menu__btn--plus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.main-menu__btn--minus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.main-menu__btn--close {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 5278:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Websites","settings_position_save_all":"Alle Websites","settings_position_save_this":"Diese Webseite","assistant_select_element_start":"Starten","assistant_select_element_text":"Wählen Sie ein zu sperrendes Element auf der Seite aus. Laden Sie die Seite neu, um den Sperrmodus zu verlassen.","menu_filtration_status":{"message":"Diese Webseite filtern"},"menu_do_not_filter_30_sec":{"message":"Schutz für 30 Sekunden deaktivieren"},"menu_block_ad_on_site":{"message":"Werbung auf dieser Seite sperren"},"menu_report_abuse":{"message":"Diese Webseite melden"},"menu_site_report":{"message":"Sicherheitsbericht dieser Webseite"},"menu_settings":{"message":"Assistent-Einstellungen"},"menu_wot_reputation_indicator":{"message":"Website-Reputations-Indikator"},"menu_wot_reputation_confidence_level":{"message":"Reputationsvertrauensgrad"},"assistant_select_element":{"message":"Element blockieren"},"assistant_select_element_ext":{"message":"Klicken Sie auf ein Element — AdGuard erstellt dafür eine Benutzerregel"},"assistant_select_element_cancel":{"message":"Abbrechen"},"assistant_block_element":{"message":"Element blockieren"},"assistant_block_element_explain":{"message":"Erstellen Sie eine Blockierregel für dieses Element"},"assistant_slider_explain":{"message":"Bewegen Sie den Schieberegler, um die Größe des Rahmens anzupassen"},"assistant_extended_settings":{"message":"Erweiterte Einstellungen"},"assistant_apply_rule_to_all_sites":{"message":"Regel auf alle Webseiten anwenden"},"assistant_block_by_reference":{"message":"Durch Referenzlink sperren"},"assistant_block_similar":{"message":"Ähnliche Elemente blockieren"},"assistant_another_element":{"message":"Ein anderes Element wählen"},"assistant_preview":{"message":"Vorschau"},"assistant_block":{"message":"Sperren"},"assistant_settings":{"message":"Assistent-Einstellungen"},"assistant_preview_header":{"message":"Blockiertes Element vorab anzeigen"},"assistant_preview_header_info":{"message":"Prüfen Sie, ob das Element korrekt blockiert ist"},"assistant_preview_end":{"message":"Vorschau beenden"},"wot_unknown_description":{"message":"Der Ruf dieser Webseite wird nicht durch $1 festgelegt"},"wot_bad_description":{"message":"Diese Webseite hat einen sehr schlechten Ruf laut $1"},"wot_poor_description":{"message":"Diese Webseite hat einen schlechten Ruf laut $1"},"wot_unsatisfactory_description":{"message":"Diese Webseite hat einen schlechten Ruf laut $1"},"wot_good_description":{"message":"Diese Webseite hat einen guten Ruf laut $1"},"wot_excellent_description":{"message":"Diese Webseite hat einen exzellenten Ruf laut $1"},"settings_choose_size_and_position":{"message":"Anpassen der Größe und Position des AdGuard-Assistent"},"settings_icon_size":{"message":"Symbol-Größe:"},"settings_small":{"message":"Klein"},"settings_big":{"message":"Groß"},"settings_position":{"message":"Position:"},"settings_left_top":{"message":"Oben links"},"settings_right_top":{"message":"Oben rechts"},"settings_left_bottom":{"message":"Unten links"},"settings_right_bottom":{"message":"Unten rechts"},"settings_cancel":{"message":"Abbrechen"},"settings_save":{"message":"Änderungen speichern"}}');

/***/ }),

/***/ 5468:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Siti","settings_position_save_all":"Tutti i siti","settings_position_save_this":"Questo sito web","assistant_select_element_start":"Inizio","assistant_select_element_text":"Seleziona un elemento nella pagina per bloccarlo. Ricarica la pagina per annullare la modalità di blocco di un elemento.","menu_filtration_status":{"message":"Filtraggio su questo sito web"},"menu_do_not_filter_30_sec":{"message":"Non filtrare per 30 secondi"},"menu_block_ad_on_site":{"message":"Blocca annunci su questo sito web"},"menu_report_abuse":{"message":"Segnala il sito"},"menu_site_report":{"message":"Rapporto di sicurezza del sito"},"menu_settings":{"message":"Impostazioni di Assistant"},"menu_wot_reputation_indicator":{"message":"Indicatore reputazione sito"},"menu_wot_reputation_confidence_level":{"message":"Livello della reputazione"},"assistant_select_element":{"message":"Blocca un elemento"},"assistant_select_element_ext":{"message":"Clicca un elemento che vuoi bloccare. AdGuard creerà per esso una regola utente"},"assistant_select_element_cancel":{"message":"Annulla"},"assistant_block_element":{"message":"Blocca un elemento"},"assistant_block_element_explain":{"message":"Crea una regola di bloccaggio elementi"},"assistant_slider_explain":{"message":"Sposta il cursore per regolare la dimensione della cornice"},"assistant_extended_settings":{"message":"Impostazioni avanzate"},"assistant_apply_rule_to_all_sites":{"message":"Applica la regola a tutti i siti"},"assistant_block_by_reference":{"message":"Blocco mediante indirizzo di riferimento"},"assistant_block_similar":{"message":"Blocca simile"},"assistant_another_element":{"message":"Seleziona un altro elemento"},"assistant_preview":{"message":"Anteprima"},"assistant_block":{"message":"Blocca"},"assistant_settings":{"message":"Impostazioni di Assistant"},"assistant_preview_header":{"message":"Anteprima elemento bloccato"},"assistant_preview_header_info":{"message":"Controlla se l\'elemento è bloccato correttamente"},"assistant_preview_end":{"message":"Esci dall\'anteprima"},"wot_unknown_description":{"message":"La reputazione di questo sito web non è definita da $1"},"wot_bad_description":{"message":"Questo sito web ha una pessima reputazione\\nsecondo $1"},"wot_poor_description":{"message":"Questo sito web ha una brutta reputazione\\nsecondo $1"},"wot_unsatisfactory_description":{"message":"Questo sito web ha una mediocre reputazione\\nsecondo $1"},"wot_good_description":{"message":"Questo sito web ha una buona reputazione\\nsecondo $1"},"wot_excellent_description":{"message":"Questo sito web ha una eccellente reputazione\\nsecondo $1"},"settings_choose_size_and_position":{"message":"Regola dimensione e posizione di AdGuard Assistant"},"settings_icon_size":{"message":"Grandezza dell\'icona:"},"settings_small":{"message":"Piccola"},"settings_big":{"message":"Grande"},"settings_position":{"message":"Posizione:"},"settings_left_top":{"message":"In alto a sinistra"},"settings_right_top":{"message":"In alto a destra"},"settings_left_bottom":{"message":"In basso a sinistra"},"settings_right_bottom":{"message":"In basso a destra"},"settings_cancel":{"message":"Annulla"},"settings_save":{"message":"Salva cambiamenti"}}');

/***/ }),

/***/ 5590:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 5641:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 3412,
	"./ar/messages": 2066,
	"./ar/messages.json": 2066,
	"./ar/messages.meta": 2993,
	"./ar/messages.meta.json": 2993,
	"./be/messages": 7500,
	"./be/messages.json": 7500,
	"./be/messages.meta": 683,
	"./be/messages.meta.json": 683,
	"./bg/messages": 4134,
	"./bg/messages.json": 4134,
	"./bg/messages.meta": 6077,
	"./bg/messages.meta.json": 6077,
	"./ca/messages": 7699,
	"./ca/messages.json": 7699,
	"./ca/messages.meta": 70,
	"./ca/messages.meta.json": 70,
	"./cs/messages": 3753,
	"./cs/messages.json": 3753,
	"./cs/messages.meta": 5972,
	"./cs/messages.meta.json": 5972,
	"./da/messages": 8626,
	"./da/messages.json": 8626,
	"./da/messages.meta": 9025,
	"./da/messages.meta.json": 9025,
	"./de/messages": 5278,
	"./de/messages.json": 5278,
	"./de/messages.meta": 4005,
	"./de/messages.meta.json": 4005,
	"./el/messages": 2360,
	"./el/messages.json": 2360,
	"./el/messages.meta": 495,
	"./el/messages.meta.json": 495,
	"./en/messages": 6642,
	"./en/messages.json": 6642,
	"./en/messages.meta": 9921,
	"./en/messages.meta.json": 9921,
	"./es/messages": 2271,
	"./es/messages.json": 2271,
	"./es/messages.meta": 4682,
	"./es/messages.meta.json": 4682,
	"./fa/messages": 356,
	"./fa/messages.json": 356,
	"./fa/messages.meta": 563,
	"./fa/messages.meta.json": 563,
	"./fi/messages": 7804,
	"./fi/messages.json": 7804,
	"./fi/messages.meta": 3787,
	"./fi/messages.meta.json": 3787,
	"./fr/messages": 9335,
	"./fr/messages.json": 9335,
	"./fr/messages.meta": 4818,
	"./fr/messages.meta.json": 4818,
	"./he/messages": 4314,
	"./he/messages.json": 4314,
	"./he/messages.meta": 7241,
	"./he/messages.meta.json": 7241,
	"./hi/messages": 8158,
	"./hi/messages.json": 8158,
	"./hi/messages.meta": 6837,
	"./hi/messages.meta.json": 6837,
	"./hr/messages": 1733,
	"./hr/messages.json": 1733,
	"./hr/messages.meta": 1912,
	"./hr/messages.meta.json": 1912,
	"./hu/messages": 4890,
	"./hu/messages.json": 4890,
	"./hu/messages.meta": 9097,
	"./hu/messages.meta.json": 9097,
	"./id/messages": 940,
	"./id/messages.json": 940,
	"./id/messages.meta": 9083,
	"./id/messages.meta.json": 9083,
	"./index": 3412,
	"./index.js": 3412,
	"./it/messages": 5468,
	"./it/messages.json": 5468,
	"./it/messages.meta": 7579,
	"./it/messages.meta.json": 7579,
	"./ja/messages": 1080,
	"./ja/messages.json": 1080,
	"./ja/messages.meta": 9727,
	"./ja/messages.meta.json": 9727,
	"./ko/messages": 1973,
	"./ko/messages.json": 1973,
	"./ko/messages.meta": 8008,
	"./ko/messages.meta.json": 8008,
	"./lt/messages": 1295,
	"./lt/messages.json": 1295,
	"./lt/messages.meta": 3994,
	"./lt/messages.meta.json": 3994,
	"./mk/messages": 8463,
	"./mk/messages.json": 8463,
	"./mk/messages.meta": 234,
	"./mk/messages.meta.json": 234,
	"./nl/messages": 9841,
	"./nl/messages.json": 9841,
	"./nl/messages.meta": 796,
	"./nl/messages.meta.json": 796,
	"./no/messages": 370,
	"./no/messages.json": 370,
	"./no/messages.meta": 7313,
	"./no/messages.meta.json": 7313,
	"./pl/messages": 4067,
	"./pl/messages.json": 4067,
	"./pl/messages.meta": 7382,
	"./pl/messages.meta.json": 7382,
	"./pt-PT/messages": 6254,
	"./pt-PT/messages.json": 6254,
	"./pt-PT/messages.meta": 6245,
	"./pt-PT/messages.meta.json": 6245,
	"./pt/messages": 7435,
	"./pt/messages.json": 7435,
	"./pt/messages.meta": 7118,
	"./pt/messages.meta.json": 7118,
	"./ro/messages": 7150,
	"./ro/messages.json": 7150,
	"./ro/messages.meta": 5797,
	"./ro/messages.meta.json": 5797,
	"./ru/messages": 1468,
	"./ru/messages.json": 1468,
	"./ru/messages.meta": 1915,
	"./ru/messages.meta.json": 1915,
	"./sk/messages": 3377,
	"./sk/messages.json": 3377,
	"./sk/messages.meta": 3580,
	"./sk/messages.meta.json": 3580,
	"./sl/messages": 9422,
	"./sl/messages.json": 9422,
	"./sl/messages.meta": 37,
	"./sl/messages.meta.json": 37,
	"./sr/messages": 8896,
	"./sr/messages.json": 8896,
	"./sr/messages.meta": 8983,
	"./sr/messages.meta.json": 8983,
	"./sv/messages": 6428,
	"./sv/messages.json": 6428,
	"./sv/messages.meta": 9707,
	"./sv/messages.meta.json": 9707,
	"./th/messages": 2739,
	"./th/messages.json": 2739,
	"./th/messages.meta": 3734,
	"./th/messages.meta.json": 3734,
	"./tr/messages": 1777,
	"./tr/messages.json": 1777,
	"./tr/messages.meta": 7020,
	"./tr/messages.meta.json": 7020,
	"./uk/messages": 7415,
	"./uk/messages.json": 7415,
	"./uk/messages.meta": 3378,
	"./uk/messages.meta.json": 3378,
	"./vi/messages": 9692,
	"./vi/messages.json": 9692,
	"./vi/messages.meta": 8315,
	"./vi/messages.meta.json": 8315,
	"./zh-HK/messages": 6359,
	"./zh-HK/messages.json": 6359,
	"./zh-HK/messages.meta": 9762,
	"./zh-HK/messages.meta.json": 9762,
	"./zh-TW/messages": 6543,
	"./zh-TW/messages.json": 6543,
	"./zh-TW/messages.meta": 1066,
	"./zh-TW/messages.meta.json": 1066,
	"./zh/messages": 9161,
	"./zh/messages.json": 9161,
	"./zh/messages.meta": 3492,
	"./zh/messages.meta.json": 3492
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5641;

/***/ }),

/***/ 5767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0LjAwMDAwMCwgLTIxOS4wMDAwMDApIj4KICAgICAgICA8ZyBpZD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxOTAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC41MDAwMDAsIDI5LjQxNDA2MikiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NTM2NTYsIDAuMjI2ODI4KSI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNMTYuNzE1NzQ5MiwwIEMxMS40OTA5MTk1LDAgNS4xODg0Njg3NywxLjI2NTU4MzUxIDUuMTI2MjAxMTRlLTA2LDQuMDUxMjIyMzkgQzUuMTI2MjAxMTRlLTA2LDEwLjA2NzQ0OTUgLTAuMDcxNjEzNjMyNCwyNS4wNTU2OTI1IDE2LjcxNTc0OTIsMzUuMjk2Njc5OCBDMzMuNTAzNDgzLDI1LjA1NTY5MjUgMzMuNDMyMjM1NCwxMC4wNjc0NDk1IDMzLjQzMjIzNTQsNC4wNTEyMjIzOSBDMjguMjQzNDAwNiwxLjI2NTU4MzUxIDIxLjk0MDk0OTksMCAxNi43MTU3NDkyLDAgTDE2LjcxNTc0OTIsMCBaIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSJQYXRoIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9IiM2OEJDNzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi42OTg2NzQzLDM1LjI4NjI1ODIgQy0wLjA3MTU2NTA2MDUsMjUuMDQ1NTI2OCA1LjEyNjIwMTEzZS0wNiwxMC4wNjU0MDkxIDUuMTI2MjAxMTNlLTA2LDQuMDUxMjIyMzkgQzUuMTgyODE4MDIsMS4yNjg2MTczNCAxMS40NzcxOTI5LDAuMDAyNzU4NDkxMjQgMTYuNjk4Njc0Myw0LjUwMzc4MzExZS0wNiBMMTYuNjk4Njc0MywzNS4yODYyNjE3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzY3QjI3OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSJNMTYuMTA2MDI0NywyMy41NTEwOTQgTDI2LjIxNDMxNTUsOS41MTgwMTg2OSBDMjUuNDczNjAwNSw4LjkwNjQ3MjQ5IDI0LjgyMzg4NzYsOS4zMzgwODkxNiAyNC40NjYyMjgxLDkuNjcyMjQ0IEwyNC40NTMxNzc0LDkuNjczMzE1MDEgTDE2LjAyNDg5ODcsMTguNzA0NDIwOCBMMTIuODQ5MzQ3NywxNC43NjgxMDUzIEMxMS4zMzQ0MDkxLDEyLjk2NTI0IDkuMjc0ODY4NjYsMTQuMzQwNDE1NyA4Ljc5Mzc1NjYyLDE0LjcwMzg0NDggTDE2LjEwNjAyNDcsMjMuNTUxMDk0IgogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9IkZpbGwtMTEiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ 5797:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Asistentul AdGuard","description":"Oferă o manieră ușoară și convenabilă de a gera filtrarea chiar din browser"}}}');

/***/ }),

/***/ 5972:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Asistent","description":"Poskytuje snadný a pohodlný způsob správy filtrování přímo z prohlížeče"}}}');

/***/ }),

/***/ 6077:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Асистент на AdGuard","description":"Осигурява лесен и удобен начин за управление на филтрирането директно от браузъра"}}}');

/***/ }),

/***/ 6088:
/***/ ((module) => {

// Module
var code = "<div class=\"main\"> <div class=\"main_close\"> <svg> <use xlink:href=\"#icon-cross\"/> </svg> </div> <div class=\"head\"> <div i18n=\"assistant_preview_header\" class=\"head_title\"> </div> <div i18n=\"assistant_preview_header_info\" class=\"head_text\"> </div> </div> <div class=\"foot\"> <button i18n=\"assistant_block\" class=\"btn btn-cancel\" id=\"block-element\" type=\"button\"></button> <button i18n=\"assistant_preview_end\" class=\"btn btn-default\" id=\"end-preview\" type=\"button\"></button> <button i18n=\"assistant_another_element\" class=\"btn btn-primary\" id=\"select-another-element\" type=\"button\"></button> </div> </div>";
// Exports
module.exports = code;

/***/ }),

/***/ 6109:
/***/ ((module) => {

// Module
var code = "<div class=\"main\"> <div class=\"close\"></div> <div class=\"old-head\"> <div i18n=\"assistant_settings\" class=\"old-head_title\"></div> <div i18n=\"settings_choose_size_and_position\" class=\"old-head_text old-head_text--mobile-h\"></div> </div> <div class=\"content\"> <div class=\"settings settings__horizontal\"> <div class=\"settings_fieldset\"> <div i18n=\"settings_position_save\" class=\"settings_fieldset_lbl\"></div> <div class=\"settings_fieldset_val\"> <div class=\"position-save\"> <div class=\"position-save_group\"> <div class=\"position-save_field\"> <input class=\"form-ui-control\" id=\"all-site\" type=\"radio\" name=\"position-save\"> <label class=\"form-ui\" for=\"all-site\"> <span i18n=\"settings_position_save_all\" class=\"form-ui-txt\"></span> </label> </div> <div class=\"position-save_field\"> <input class=\"form-ui-control\" id=\"this-site\" type=\"radio\" name=\"position-save\"> <label class=\"form-ui\" for=\"this-site\"> <span i18n=\"settings_position_save_this\" class=\"form-ui-txt\"></span> </label> </div> </div> </div> </div> </div> <div class=\"settings_fieldset\"> <div i18n=\"settings_icon_size\" class=\"settings_fieldset_lbl\"></div> <div class=\"settings_fieldset_val\"> <div class=\"choice-size\"> <div class=\"choice-size_group\"> <div class=\"choice-size_field\"> <input class=\"choice-size_input form-ui-control\" id=\"size-small\" type=\"radio\" name=\"radio\"> <label class=\"form-ui\" for=\"size-small\"> <span i18n=\"settings_small\" class=\"form-ui-txt\"></span> </label> <div class=\"adguard-assistant-button-main-logo choice-size_logo logo__small\"></div> </div> <div class=\"choice-size_field\"> <input class=\"choice-size_input form-ui-control\" id=\"size-big\" type=\"radio\" name=\"radio\"> <label class=\"form-ui\" for=\"size-big\"> <span i18n=\"settings_big\" class=\"form-ui-txt\"></span> </label> <div class=\"adguard-assistant-button-main-logo choice-size_logo\"></div> </div> </div> </div> </div> </div> <div class=\"settings_fieldset\"> <div i18n=\"settings_position\" class=\"settings_fieldset_lbl settings_fieldset_lbl__pos\"></div> <div class=\"settings_fieldset_val\"> <div class=\"change-position\"> <div class=\"change-position_i\"> <input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-top-left\"> <label class=\"change-position_label\" for=\"position-top-left\"> <span class=\"s-position-arr-top-left\"></span> </label> <div i18n=\"settings_left_top\" class=\"change-position_val\"></div> </div> <div class=\"change-position_i\"> <input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-top-right\"> <label class=\"change-position_label\" for=\"position-top-right\"> <span class=\"s-position-arr-top-right\"></span> </label> <div i18n=\"settings_right_top\" class=\"change-position_val\"></div> </div> <div class=\"change-position_i\"> <input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-bottom-left\"> <label class=\"change-position_label\" for=\"position-bottom-left\"> <span class=\"s-position-arr-bottom-left\"></span> </label> <div i18n=\"settings_left_bottom\" class=\"change-position_val\"></div> </div> <div class=\"change-position_i\"> <input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-bottom-right\"> <label class=\"change-position_label\" for=\"position-bottom-right\"> <span class=\"s-position-arr-bottom-right\"></span> </label> <div i18n=\"settings_right_bottom\" class=\"change-position_val\"></div> </div> </div> </div> </div> </div> </div> <div class=\"old-foot\"> <div class=\"old-foot_action\"> <div class=\"old-foot_action_btn\"> <button i18n=\"settings_cancel\" class=\"old-btn old-btn-default\" type=\"button\" id=\"cancel\"></button> <button i18n=\"settings_save\" class=\"old-btn old-btn-primary\" type=\"button\" id=\"save-settings\"></button> </div> </div> <div class=\"cf\"></div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 6245:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Assistente do AdGuard","description":"Fornece uma forma fácil e conveniente de gerir a filtragem a partir do seu navegador"}}}');

/***/ }),

/***/ 6254:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Sítios","settings_position_save_all":"Todos os sítios","settings_position_save_this":"Este sítio","assistant_select_element_start":"Iniciar","assistant_select_element_text":"Escolha um elemento na página para bloquear. Atualize a página para cancelar o bloqueio do elemento.","menu_filtration_status":{"message":"A filtrar este sítio"},"menu_do_not_filter_30_sec":{"message":"Não filtrar durante 30 segundos"},"menu_block_ad_on_site":{"message":"Bloquear publicidade neste sítio"},"menu_report_abuse":{"message":"Denunciar o sítio"},"menu_site_report":{"message":"Relatório de segurança do sítio"},"menu_settings":{"message":"Configurações do assistente"},"menu_wot_reputation_indicator":{"message":"Indicador de reputação do sítio"},"menu_wot_reputation_confidence_level":{"message":"Nível de Confiança de Reputação"},"assistant_select_element":{"message":"Bloquear um elemento"},"assistant_select_element_ext":{"message":"Clique num elemento que pretende bloquear. O AdGuard criará uma regra de utilizador para esse elemento"},"assistant_select_element_cancel":{"message":"Cancelar"},"assistant_block_element":{"message":"Bloquear um elemento"},"assistant_block_element_explain":{"message":"Criar uma regra de bloqueio do elemento"},"assistant_slider_explain":{"message":"Mova o controlo deslizante para ajustar o tamanho do quadro"},"assistant_extended_settings":{"message":"Definições avançadas"},"assistant_apply_rule_to_all_sites":{"message":"Aplicar a regra para todos os sítios"},"assistant_block_by_reference":{"message":"Bloquear por link de referência"},"assistant_block_similar":{"message":"Bloquear semelhante"},"assistant_another_element":{"message":"Selecionar um elemento diferente"},"assistant_preview":{"message":"Pré-visualização"},"assistant_block":{"message":"Bloquear"},"assistant_settings":{"message":"Configurações do assistente"},"assistant_preview_header":{"message":"Pré-visualizar elemento bloqueado"},"assistant_preview_header_info":{"message":"Verifique se o elemento está corretamente bloqueado"},"assistant_preview_end":{"message":"Sair da previsualização"},"wot_unknown_description":{"message":"A reputação deste sítio não está definida por $1"},"wot_bad_description":{"message":"Este sítio tem uma péssima reputação\\nde acordo com $1"},"wot_poor_description":{"message":"Este sítio tem uma má reputação\\nde acordo com $1"},"wot_unsatisfactory_description":{"message":"Este sítio tem uma frágil reputação\\nde acordo com $1"},"wot_good_description":{"message":"Este sítio tem uma boa reputação\\nde acordo com $1"},"wot_excellent_description":{"message":"Este sítio tem uma excelente reputação\\nde acordo com $1"},"settings_choose_size_and_position":{"message":"Ajustar o tamanho e a posição do Assistente do AdGuard"},"settings_icon_size":{"message":"Tamanho do ícone:"},"settings_small":{"message":"Pequeno"},"settings_big":{"message":"Grande"},"settings_position":{"message":"Posição:"},"settings_left_top":{"message":"Canto superior esquerdo"},"settings_right_top":{"message":"Canto superior direito"},"settings_left_bottom":{"message":"Canto inferior esquerdo"},"settings_right_bottom":{"message":"Canto inferior direito"},"settings_cancel":{"message":"Cancelar"},"settings_save":{"message":"Guardar alterações"}}');

/***/ }),

/***/ 6359:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"網站","settings_position_save_all":"所有網站","settings_position_save_this":"此網站","assistant_select_element_start":"開始","assistant_select_element_text":"選擇網頁上的元素來阻擋。若要取消重新整理網頁即可。","menu_filtration_status":{"message":"過濾此網頁上的廣告"},"menu_do_not_filter_30_sec":{"message":"暫停過濾 30 秒"},"menu_block_ad_on_site":{"message":"封鎖此網頁上的廣告"},"menu_report_abuse":{"message":"回報此網站"},"menu_site_report":{"message":"網站安全性報告"},"menu_settings":{"message":"助手設定"},"menu_wot_reputation_indicator":{"message":"網頁名譽指標"},"menu_wot_reputation_confidence_level":{"message":"名譽可信程度"},"assistant_select_element_cancel":{"message":"取消"},"assistant_extended_settings":{"message":"進階設定"},"assistant_apply_rule_to_all_sites":{"message":"套用至所有網站"},"assistant_block_by_reference":{"message":"通過參考連結封鎖"},"assistant_block_similar":{"message":"封鎖相關或類似的"},"assistant_another_element":{"message":"選取其他網頁元素"},"assistant_preview":{"message":"預覽"},"assistant_block":{"message":"封鎖"},"assistant_settings":{"message":"助手設定"},"assistant_preview_end":{"message":"關閉預覽"},"wot_unknown_description":{"message":"此網站名譽尚未被 $1 評定"},"wot_bad_description":{"message":"根據 $1\\n此網站名譽非常糟糕"},"wot_poor_description":{"message":"根據 $1\\n此網站擁有不良的名譽"},"wot_unsatisfactory_description":{"message":"根據 $1\\n此網站擁有不好的名譽"},"wot_good_description":{"message":"根據 $1\\n此網站擁有良好的名譽"},"wot_excellent_description":{"message":"根據 $1\\n此網站擁有非常優秀的名譽"},"settings_choose_size_and_position":{"message":"調整 AdGuard 小助手大小與位置"},"settings_icon_size":{"message":"圖示大小："},"settings_small":{"message":"小"},"settings_big":{"message":"大"},"settings_position":{"message":"位置："},"settings_left_top":{"message":"左上角"},"settings_right_top":{"message":"右上角"},"settings_left_bottom":{"message":"左下角"},"settings_right_bottom":{"message":"右下角"},"settings_cancel":{"message":"取消"},"settings_save":{"message":"儲存變更"}}');

/***/ }),

/***/ 6428:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Webbplatser","settings_position_save_all":"Alla webbplatser","settings_position_save_this":"Den här webbplatsen","assistant_select_element_start":"Starta","assistant_select_element_text":"Välj ett element sidan att blockera. Återladda sidan för att återställa elementblockeringsläget.","menu_filtration_status":{"message":"Webbplatsens filtrering"},"menu_do_not_filter_30_sec":{"message":"Pausa filtrering 30 sekunder"},"menu_block_ad_on_site":{"message":"Blockera annons på den här webbplatsen"},"menu_report_abuse":{"message":"Rapportera webbplatsen"},"menu_site_report":{"message":"Säkerhetsrapport för webbplatsen"},"menu_settings":{"message":"Assistentinställningar"},"menu_wot_reputation_indicator":{"message":"Indikator för webbplatsens rykte"},"menu_wot_reputation_confidence_level":{"message":"Förtroendenivå för rykte"},"assistant_select_element":{"message":"Blockera ett element"},"assistant_select_element_ext":{"message":"Klicka på ett element du vill blockera. AdGuard skapar en användarregel för det"},"assistant_select_element_cancel":{"message":"Avbryt"},"assistant_block_element":{"message":"Blockera ett element"},"assistant_block_element_explain":{"message":"Skapa en blockeringsregel för element"},"assistant_slider_explain":{"message":"Flytta reglaget för att justera ramens storlek"},"assistant_extended_settings":{"message":"Avancerade val"},"assistant_apply_rule_to_all_sites":{"message":"Tillämpa regelns på alla webbplatster"},"assistant_block_by_reference":{"message":"Blockera med referenslänk"},"assistant_block_similar":{"message":"Blockera liknande"},"assistant_another_element":{"message":"Markera ett annat annonselement"},"assistant_preview":{"message":"Förhandsgranska"},"assistant_block":{"message":"Blockera"},"assistant_settings":{"message":"Assistentval"},"assistant_preview_header":{"message":"Förhandsgranska blockerad element"},"assistant_preview_header_info":{"message":"Kontrollera om elementet är blockerat korrekt"},"assistant_preview_end":{"message":"Avsluta förhandsgranskningen"},"wot_unknown_description":{"message":"Den här sajtens anseende är inte klarlagd av $1"},"wot_bad_description":{"message":"Webbplatsen har ett mycket dåligt anseende\\nenligt $1"},"wot_poor_description":{"message":"Webbplatsen har dåligt anseende\\nenligt $1"},"wot_unsatisfactory_description":{"message":"Webbplatsen har tveksamt anseende\\nenligt $1"},"wot_good_description":{"message":"Webbplatsen har gott anseende\\nenligt $1"},"wot_excellent_description":{"message":"Webbplatsen har ett mycket gott anseende\\nenligt $1"},"settings_choose_size_and_position":{"message":"Anpassas storlek och läge för AdGuardassistenten"},"settings_icon_size":{"message":"Ikonstorlek"},"settings_small":{"message":"Liten"},"settings_big":{"message":"Stor"},"settings_position":{"message":"Läge:"},"settings_left_top":{"message":"Ovan vänster"},"settings_right_top":{"message":"Ovan höger"},"settings_left_bottom":{"message":"Nedan vänster"},"settings_right_bottom":{"message":"Nedan höger"},"settings_cancel":{"message":"Avbryt"},"settings_save":{"message":"Spara ändringar"}}');

/***/ }),

/***/ 6539:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"project_id":"adguard-assistant","base_locale":"en","languages":{"en":"English","ar":"Arabic","be":"Belarusian","bg":"Bulgarian","ca":"Catalan","cs":"Czech","da":"Danish","de":"German","el":"Greek","es":"Spanish","fa":"Persian","fi":"Finnish","fr":"French","he":"Hebrew","hi":"Hindi","hr":"Croatian","hu":"Hungarian","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","lt":"Lithuanian","mk":"Macedonian","no":"Norwegian","nl":"Dutch","pl":"Polish","pt-BR":"Portuguese (Brazil)","pt-PT":"Portuguese","ro":"Romanian","ru":"Russian","sk":"Slovak","sl":"Slovenian","sr":"Serbian (latin)","sv":"Swedish","th":"Thai","tr":"Turkish","uk":"Ukrainian","vi":"Vietnamese","zh-CN":"Chinese Simplified (mainland China)","zh-HK":"Chinese Traditional (Hong Kong)","zh-TW":"Chinese Traditional (Taiwan)"},"localizable_files":["locales/en/messages.json","locales/en/messages.meta.json"]}]');

/***/ }),

/***/ 6543:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"網站","settings_position_save_all":"所有的網站","settings_position_save_this":"此網站","assistant_select_element_start":"開始","assistant_select_element_text":"選擇於該頁面上之元件以封鎖。重新整理該頁面以取消元件封鎖模式。","menu_filtration_status":{"message":"對此網站之過濾"},"menu_do_not_filter_30_sec":{"message":"計 30 秒不過濾"},"menu_block_ad_on_site":{"message":"封鎖於此網站上之廣告"},"menu_report_abuse":{"message":"報告該網站"},"menu_site_report":{"message":"網站安全性報告"},"menu_settings":{"message":"助理設定"},"menu_wot_reputation_indicator":{"message":"網站信譽指標"},"menu_wot_reputation_confidence_level":{"message":"信譽信賴等級"},"assistant_select_element":{"message":"封鎖元件"},"assistant_select_element_ext":{"message":"點選想要封鎖的元件。AdGuard 將創建一條使用者規則。"},"assistant_select_element_cancel":{"message":"取消"},"assistant_block_element":{"message":"封鎖元件"},"assistant_block_element_explain":{"message":"建立元件封鎖規則"},"assistant_slider_explain":{"message":"移動滑塊以調整框架大小"},"assistant_extended_settings":{"message":"進階設定"},"assistant_apply_rule_to_all_sites":{"message":"對所有的網站套用該規則"},"assistant_block_by_reference":{"message":"按照參考連結封鎖"},"assistant_block_similar":{"message":"封鎖相似之物"},"assistant_another_element":{"message":"選擇不同的元件"},"assistant_preview":{"message":"預覽"},"assistant_block":{"message":"封鎖"},"assistant_settings":{"message":"助理設定"},"assistant_preview_header":{"message":"預覽已封鎖元件"},"assistant_preview_header_info":{"message":"檢查該元件是否被正確封鎖"},"assistant_preview_end":{"message":"離開預覽"},"wot_unknown_description":{"message":"此網站的信譽未被 $1 界定"},"wot_bad_description":{"message":"根據 $1，\\n此網站有非常壞的信譽"},"wot_poor_description":{"message":"根據 $1，\\n此網站有壞的信譽"},"wot_unsatisfactory_description":{"message":"根據 $1，\\n此網站有不好的信譽"},"wot_good_description":{"message":"根據 $1，\\n此網站有好的信譽"},"wot_excellent_description":{"message":"根據 $1，\\n此網站有極好的信譽"},"settings_choose_size_and_position":{"message":"調整 AdGuard 助理尺寸和位置"},"settings_icon_size":{"message":"圖示尺寸："},"settings_small":{"message":"小的"},"settings_big":{"message":"大的"},"settings_position":{"message":"位置："},"settings_left_top":{"message":"左上角"},"settings_right_top":{"message":"右上角"},"settings_left_bottom":{"message":"左下角"},"settings_right_bottom":{"message":"右下角"},"settings_cancel":{"message":"取消"},"settings_save":{"message":"儲存更改"}}');

/***/ }),

/***/ 6642:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Websites","settings_position_save_all":"All websites","settings_position_save_this":"This website","assistant_select_element_start":"Start","assistant_select_element_text":"Choose an element on the page to block. Refresh the page to cancel the element blocking mode.","menu_filtration_status":{"message":"Filtering on this website"},"menu_do_not_filter_30_sec":{"message":"Do not filter for 30 seconds"},"menu_block_ad_on_site":{"message":"Block ad on this website"},"menu_report_abuse":{"message":"Report the website"},"menu_site_report":{"message":"Website security report"},"menu_settings":{"message":"Assistant settings"},"menu_wot_reputation_indicator":{"message":"Site reputation indicator"},"menu_wot_reputation_confidence_level":{"message":"Reputation Confidence Level"},"assistant_select_element":{"message":"Block an element"},"assistant_select_element_ext":{"message":"Click an element you want to block. AdGuard will create a user rule for it"},"assistant_select_element_cancel":{"message":"Cancel"},"assistant_block_element":{"message":"Block an element"},"assistant_block_element_explain":{"message":"Create an element blocking rule"},"assistant_slider_explain":{"message":"Move the slider to adjust the size of the frame"},"assistant_extended_settings":{"message":"Advanced settings"},"assistant_apply_rule_to_all_sites":{"message":"Apply the rule to all websites"},"assistant_block_by_reference":{"message":"Block by reference link"},"assistant_block_similar":{"message":"Block similar"},"assistant_another_element":{"message":"Select a different element"},"assistant_preview":{"message":"Preview"},"assistant_block":{"message":"Block"},"assistant_settings":{"message":"Assistant settings"},"assistant_preview_header":{"message":"Preview blocked element"},"assistant_preview_header_info":{"message":"Check if the element is blocked correctly"},"assistant_preview_end":{"message":"Exit preview"},"wot_unknown_description":{"message":"This website\'s reputation is not defined by $1"},"wot_bad_description":{"message":"This website has a very bad reputation\\naccording to $1"},"wot_poor_description":{"message":"This website has a bad reputation \\naccording to $1"},"wot_unsatisfactory_description":{"message":"This website has a poor reputation\\naccording to $1"},"wot_good_description":{"message":"This website has a good reputation\\naccording to $1"},"wot_excellent_description":{"message":"This website has an excellent reputation\\naccording to $1"},"settings_choose_size_and_position":{"message":"Adjust AdGuard Assistant size and position"},"settings_icon_size":{"message":"Icon size:"},"settings_small":{"message":"Small"},"settings_big":{"message":"Large"},"settings_position":{"message":"Position:"},"settings_left_top":{"message":"Top left"},"settings_right_top":{"message":"Top right"},"settings_left_bottom":{"message":"Bottom left"},"settings_right_bottom":{"message":"Bottom right"},"settings_cancel":{"message":"Cancel"},"settings_save":{"message":"Save changes"}}');

/***/ }),

/***/ 6837:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard सहायक","description":""}}}');

/***/ }),

/***/ 7020:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Asistanı","description":"Filtrelemeyi doğrudan tarayıcıdan yönetmenin kolay ve kullanışlı bir yolunu sağlar"}}}');

/***/ }),

/***/ 7118:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Assistente do AdGuard","description":"Fornece uma maneira fácil e conveniente de gerenciar a filtragem diretamente do seu navegador"}}}');

/***/ }),

/***/ 7150:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Site web","settings_position_save_all":"Toate site-urile","settings_position_save_this":"Acest site","assistant_select_element_start":"Start","assistant_select_element_text":"Alegeți elementul de blocat pe pagină. Actualizați pagina ca să anulați modul de blocare a elementului.","menu_filtration_status":{"message":"Filtrare pe acest site web"},"menu_do_not_filter_30_sec":{"message":"Nu filtra pentru 30 secunde"},"menu_block_ad_on_site":{"message":"Blocare reclame pe acest site"},"menu_report_abuse":{"message":"Raportați site-ul"},"menu_site_report":{"message":"Raport de securitate site"},"menu_settings":{"message":"Setări asistent"},"menu_wot_reputation_indicator":{"message":"Indicator reputație site"},"menu_wot_reputation_confidence_level":{"message":"Nivel de încredere în reputație"},"assistant_select_element":{"message":"Blocați un element"},"assistant_select_element_ext":{"message":"Faceți clic pe un element pe care doriți să îl blocați. AdGuard va crea o regulă de utilizator"},"assistant_select_element_cancel":{"message":"Anulare"},"assistant_block_element":{"message":"Blocați un element"},"assistant_block_element_explain":{"message":"Creați o regulă de blocare a elementelor"},"assistant_slider_explain":{"message":"Mutați glisorul pentru a regla dimensiunea cadrului"},"assistant_extended_settings":{"message":"Setări avansate"},"assistant_apply_rule_to_all_sites":{"message":"Aplică regula pe orice site"},"assistant_block_by_reference":{"message":"Blocare după link de referință"},"assistant_block_similar":{"message":"Blocare similare"},"assistant_another_element":{"message":"Alegeți un element diferit"},"assistant_preview":{"message":"Ecran"},"assistant_block":{"message":"Blocați"},"assistant_settings":{"message":"Setări asistent"},"assistant_preview_header":{"message":"Previzualizare element blocat"},"assistant_preview_header_info":{"message":"Verifică dacă elementul este blocat corect"},"assistant_preview_end":{"message":"Ieșire ecran"},"wot_unknown_description":{"message":"Reputația acestui site nu este definită de $1"},"wot_bad_description":{"message":"Acest site are o reputație foarte proastă\\nconform cu $1"},"wot_poor_description":{"message":"Acest site are o reputație proastă\\nconform cu $1"},"wot_unsatisfactory_description":{"message":"Acest site are o reputație slabă\\nconform cu $1"},"wot_good_description":{"message":"Acest site are o reputație bună\\nconform cu $1"},"wot_excellent_description":{"message":"Acest site are o reputație excelentă\\nconform cu $1"},"settings_choose_size_and_position":{"message":"Ajustați talia și poziția Asistentului AdGuard"},"settings_icon_size":{"message":"Talie icoană:"},"settings_small":{"message":"Mică"},"settings_big":{"message":"Mare"},"settings_position":{"message":"Poziție:"},"settings_left_top":{"message":"Stânga sus"},"settings_right_top":{"message":"Dreapta sus"},"settings_left_bottom":{"message":"Stânga jos"},"settings_right_bottom":{"message":"Dreapta jos"},"settings_cancel":{"message":"Anulare"},"settings_save":{"message":"Salvare alegeri"}}');

/***/ }),

/***/ 7241:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"העוזר האישי של אדגארד","description":"מספק דרך קלה ונוחה לנהל סינון תקין ישירות מהדפדפן"}}}');

/***/ }),

/***/ 7313:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard-assistent","description":"Tilbyr en enkel og praktisk måte å administrere filtrering rett fra nettleseren"}}}');

/***/ }),

/***/ 7382:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Asystent AdGuarda","description":"Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki"}}}');

/***/ }),

/***/ 7415:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Сайти","settings_position_save_all":"На всіх","settings_position_save_this":"Тільки на даному","assistant_select_element_start":"Почати","assistant_select_element_text":"Виберіть елемент на сторінці, який треба заблокувати. Оновіть сторінку, щоб скасувати режим блокування.","menu_filtration_status":{"message":"Фільтрування на цьому сайті"},"menu_do_not_filter_30_sec":{"message":"Не фільтрувати 30 секунд"},"menu_block_ad_on_site":{"message":"Заблокувати рекламу на даному сайті"},"menu_report_abuse":{"message":"Повідомити про сайт"},"menu_site_report":{"message":"Звіт про безпеку сайту"},"menu_settings":{"message":"Налаштування помічника"},"menu_wot_reputation_indicator":{"message":"Індикатор репутації сайту"},"menu_wot_reputation_confidence_level":{"message":"Рівень надійності репутації"},"assistant_select_element":{"message":"Заблокувати елемент"},"assistant_select_element_cancel":{"message":"Скасувати"},"assistant_block_element":{"message":"Заблокувати елемент"},"assistant_extended_settings":{"message":"Розширені налаштування"},"assistant_apply_rule_to_all_sites":{"message":"Застосувати правило для всіх сайтів"},"assistant_block_by_reference":{"message":"Блокувати за посиланням"},"assistant_block_similar":{"message":"Блокувати схожі елементи"},"assistant_another_element":{"message":"Вибрати інший елемент"},"assistant_preview":{"message":"Попередній перегляд"},"assistant_block":{"message":"Заблокувати"},"assistant_settings":{"message":"Налаштування помічника"},"assistant_preview_end":{"message":"Закінчити попередній перегляд"},"wot_unknown_description":{"message":"Репутація цього вебсайту не визначена"},"wot_bad_description":{"message":"Цей сайт має дуже погану репутацію\\nза версією $1"},"wot_poor_description":{"message":"Цей сайт має погану репутацію\\nза версією $1"},"wot_unsatisfactory_description":{"message":"Цей сайт має незадовільну репутацію\\nза версією $1"},"wot_good_description":{"message":"Цей сайт має добру репутацію\\nза версією $1"},"wot_excellent_description":{"message":"Цей сайт має дуже відмінну репутацію\\nза версією $1"},"settings_choose_size_and_position":{"message":"Налаштуйте розмір і положення помічника AdGuard"},"settings_icon_size":{"message":"Розмір іконки:"},"settings_small":{"message":"Маленька"},"settings_big":{"message":"Велика"},"settings_position":{"message":"Позиція:"},"settings_left_top":{"message":"Зверху зліва"},"settings_right_top":{"message":"Зверху справа"},"settings_left_bottom":{"message":"Внизу зліва"},"settings_right_bottom":{"message":"Внизу справа"},"settings_cancel":{"message":"Скасувати"},"settings_save":{"message":"Зберегти зміни"}}');

/***/ }),

/***/ 7435:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Sites","settings_position_save_all":"Todos os sites","settings_position_save_this":"Neste site","assistant_select_element_start":"Iniciar","assistant_select_element_text":"Escolha um elemento na página para bloquear. Atualize a página para cancelar o bloqueio do elemento.","menu_filtration_status":{"message":"Filtragem neste site"},"menu_do_not_filter_30_sec":{"message":"Não filtrar durante 30 segundos"},"menu_block_ad_on_site":{"message":"Bloquear anúncios neste site"},"menu_report_abuse":{"message":"Reportar o site"},"menu_site_report":{"message":"Relatório de segurança do site"},"menu_settings":{"message":"Configurações do assistente"},"menu_wot_reputation_indicator":{"message":"Indicador de reputação do site"},"menu_wot_reputation_confidence_level":{"message":"Nível de confiança de reputação"},"assistant_select_element":{"message":"Bloquear elemento"},"assistant_select_element_ext":{"message":"Clique em um elemento que você deseja bloquear. O AdGuard criará uma regra de usuário para ele"},"assistant_select_element_cancel":{"message":"Cancelar"},"assistant_block_element":{"message":"Bloquear elemento"},"assistant_block_element_explain":{"message":"Criar uma regra de bloqueio do elemento"},"assistant_slider_explain":{"message":"Mova o controle deslizante para ajustar o tamanho da moldura"},"assistant_extended_settings":{"message":"Configurações avançadas"},"assistant_apply_rule_to_all_sites":{"message":"Aplicar regra para todos os sites"},"assistant_block_by_reference":{"message":"Bloquear pelo link de referência"},"assistant_block_similar":{"message":"Bloquear semelhante"},"assistant_another_element":{"message":"Selecione um elemento diferente"},"assistant_preview":{"message":"Pré-visualização"},"assistant_block":{"message":"Bloquear"},"assistant_settings":{"message":"Configurações do assistente"},"assistant_preview_header":{"message":"Pré-visualização do elemento bloqueado"},"assistant_preview_header_info":{"message":"Verifique se o elemento está corretamente bloqueado"},"assistant_preview_end":{"message":"Sair da pré-visualização"},"wot_unknown_description":{"message":"A reputação deste site ainda não foi definida por $1"},"wot_bad_description":{"message":"Este site tem uma reputação muito ruim\\nde acordo com $1"},"wot_poor_description":{"message":"Este site tem uma má reputação\\nde acordo com $1"},"wot_unsatisfactory_description":{"message":"Este site tem uma reputação ruim\\nde acordo com $1"},"wot_good_description":{"message":"Este site tem uma boa reputação\\nde acordo com $1"},"wot_excellent_description":{"message":"Este site tem uma excelente reputação\\nde acordo com $1"},"settings_choose_size_and_position":{"message":"Ajuste o tamanho e posição do Assistente do AdGuard"},"settings_icon_size":{"message":"Tamanho do ícone:"},"settings_small":{"message":"Pequeno"},"settings_big":{"message":"Grande"},"settings_position":{"message":"Posição:"},"settings_left_top":{"message":"Canto superior esquerdo"},"settings_right_top":{"message":"Canto superior direito"},"settings_left_bottom":{"message":"Canto inferior esquerdo"},"settings_right_bottom":{"message":"Canto inferior direito"},"settings_cancel":{"message":"Cancelar"},"settings_save":{"message":"Salvar alterações"}}');

/***/ }),

/***/ 7500:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save_all":"На ўсіх","settings_position_save_this":"Толькі на гэтым","assistant_select_element_start":"Пачаць","assistant_select_element_text":"Абярыце на старонцы элемент для блакавання. Абнавіце старонку, каб скасаваць рэжым блакавання элементаў.","menu_filtration_status":{"message":"Фільтрацыя на гэтым сайце"},"menu_do_not_filter_30_sec":{"message":"Не фільтраваць 30 секундаў"},"menu_block_ad_on_site":{"message":"Заблакаваць рэкламу на сайце"},"menu_site_report":{"message":"Справаздача пра бяспеку сайта"},"menu_wot_reputation_indicator":{"message":"Індыкатар рэпутацыі сайта"},"menu_wot_reputation_confidence_level":{"message":"Узровень верагоднасці рэпутацыі"},"assistant_select_element_cancel":{"message":"Скасаваць"},"assistant_extended_settings":{"message":"Пашыраныя налады"},"assistant_apply_rule_to_all_sites":{"message":"Ужыць правіла для ўсіх сайтаў"},"assistant_block_by_reference":{"message":"Блакаваць па спасылцы"},"assistant_another_element":{"message":"Абраць іншы элемент"},"assistant_preview":{"message":"Перадпрагляд"},"assistant_block":{"message":"Заблакіраваць"},"wot_unknown_description":{"message":"Рэпутацыя не вызначана"},"wot_bad_description":{"message":"У сайта вельмі дрэнная рэпутацыя па дадзеных $1"},"wot_poor_description":{"message":"У сайта дрэнная рэпутацыя па дадзеных $1"},"wot_unsatisfactory_description":{"message":"У сайта нездавальняльная рэпутацыя па дадзеных $1"},"wot_excellent_description":{"message":"У сайта выдатная рэпутацыя па дадзеных $1"},"settings_choose_size_and_position":{"message":"Наладзьце памер і становішча памочніка AdGuard"},"settings_big":{"message":"Вялікая"},"settings_left_top":{"message":"Уверсе злева"},"settings_right_top":{"message":"Уверсе справа"},"settings_left_bottom":{"message":"Унізе злева"},"settings_right_bottom":{"message":"Унізе справа"},"settings_cancel":{"message":"Скасаваць"}}');

/***/ }),

/***/ 7579:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Assistant","description":"Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser"}}}');

/***/ }),

/***/ 7699:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Llocs web","settings_position_save_all":"Tots els llocs web","settings_position_save_this":"Aquest lloc web","assistant_select_element_start":"Començar","assistant_select_element_text":"Trieu un element de la pàgina per bloquejar. Actualitzeu la pàgina per cancel·lar el mode de bloqueig d\'elements.","menu_filtration_status":{"message":"Filtrat en aquest lloc web"},"menu_do_not_filter_30_sec":{"message":"No filtrar durant 30 segons"},"menu_block_ad_on_site":{"message":"Bloquejar anuncis en aquest lloc web"},"menu_report_abuse":{"message":"Informar del lloc web"},"menu_site_report":{"message":"Informe de seguretat del lloc web"},"menu_settings":{"message":"Configuració de l\'assistent"},"menu_wot_reputation_indicator":{"message":"Indicador de reputació del lloc"},"menu_wot_reputation_confidence_level":{"message":"Nivell de confiança de la reputació"},"assistant_select_element":{"message":"Bloqueja un element"},"assistant_select_element_ext":{"message":"Fes clic en un element que vulguis bloquejar. AdGuard crearà una regla d\'usuari per a això"},"assistant_select_element_cancel":{"message":"Cancel·lar"},"assistant_block_element":{"message":"Bloqueja un element"},"assistant_block_element_explain":{"message":"Crea una regla de bloqueig d\'elements"},"assistant_slider_explain":{"message":"Mou el control lliscant per ajustar la mida del marc"},"assistant_extended_settings":{"message":"Configuració avançada"},"assistant_apply_rule_to_all_sites":{"message":"Apliqueu la regla a tots els llocs web"},"assistant_block_by_reference":{"message":"Bloqueja per enllaç de referència"},"assistant_block_similar":{"message":"Bloquejar element similar"},"assistant_another_element":{"message":"Seleccioneu un element diferent"},"assistant_preview":{"message":"Vista prèvia"},"assistant_block":{"message":"Bloquejeu"},"assistant_settings":{"message":"Configuració de l\'assistent"},"assistant_preview_header":{"message":"Previsualitza l\'element bloquejat"},"assistant_preview_header_info":{"message":"Comproveu si l\'element està bloquejat correctament"},"assistant_preview_end":{"message":"Sortir de la vista prèvia"},"wot_unknown_description":{"message":"La reputació d\'aquest lloc web no està definida per $1"},"wot_bad_description":{"message":"Aquest lloc web té una molt mala reputació\\nsegons $1"},"wot_poor_description":{"message":"Aquest lloc web té una mala reputació \\nsegons $1"},"wot_unsatisfactory_description":{"message":"Aquest lloc web té una pobra reputació\\nsegons $1"},"wot_good_description":{"message":"Aquest lloc web té una bona reputació\\nsegons $1"},"wot_excellent_description":{"message":"Aquest lloc web té una excel·lent reputació\\nsegons $1"},"settings_choose_size_and_position":{"message":"Ajusteu la mida i la posició de l\'AdGuard Assistant"},"settings_icon_size":{"message":"Mida de la icona:"},"settings_small":{"message":"Petit"},"settings_big":{"message":"Gran"},"settings_position":{"message":"Posició:"},"settings_left_top":{"message":"A dalt a l\'esquerra"},"settings_right_top":{"message":"A dalt a la dreta"},"settings_left_bottom":{"message":"A baix a l\'esquerra"},"settings_right_bottom":{"message":"A baix a la dreta"},"settings_cancel":{"message":"Cancel·lar"},"settings_save":{"message":"Guardar canvis"}}');

/***/ }),

/***/ 7800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMjcuNjE1NjkzMSwzMjIuMjg4MDg2IEwyMC43Njc5Njg3LDMyMi4yODgwODYgTDIwLjc2Nzk2ODcsMzE1LjQxNjAyNiBMMjEuOTU5OTMxNCwzMTUuNDE2MDI2IEMyMi41MTAyOTA4LDMxNS40MTYwMjYgMjIuOTU2NDQ1MywzMTQuOTY5ODcxIDIyLjk1NjQ0NTMsMzE0LjQxOTUxMiBDMjIuOTU2NDQ1MywzMTMuODY5MTUzIDIyLjUxMDI5MDgsMzEzLjQyMjk5OCAyMS45NTk5MzE0LDMxMy40MjI5OTggTDIwLjc2Nzk2ODcsMzEzLjQyMjk5OCBMMjAuNzY3OTY4NywzMDYuOTE3MTEgTDI1LjkzOTg5MjYsMzA2LjkxNzExIEwyNS45Mzk4OTI2LDMwNi44MTYzNjggQzI1LjkzOTg5MjYsMzA1LjMyNTE5OSAyNy4xNDg3MjM4LDMwNC4xMTYzNjggMjguNjM5ODkyNiwzMDQuMTE2MzY4IEMzMC4xMzEwNjE0LDMwNC4xMTYzNjggMzEuMzM5ODkyNiwzMDUuMzI1MTk5IDMxLjMzOTg5MjYsMzA2LjgxNjM2OCBMMzEuMzM5ODkyNiwzMDYuOTE3MTEgTDM2LjEzODk0NDUsMzA2LjkxNzExIEwzNi4xMzg5NDQ1LDMxMS45MDI1OTggTDM2LjMzMjA4MDEsMzExLjkwMjU5OCBDMzcuODIzMjQ4OSwzMTEuOTAyNTk4IDM5LjAzMjA4MDEsMzEzLjExMTQyOSAzOS4wMzIwODAxLDMxNC42MDI1OTggQzM5LjAzMjA4MDEsMzE2LjA5Mzc2NyAzNy44MjMyNDg5LDMxNy4zMDI1OTggMzYuMzMyMDgwMSwzMTcuMzAyNTk4IEwzNi4xMzg5NDQ1LDMxNy4zMDI1OTggTDM2LjEzODk0NDUsMzIyLjI4ODA4NiBMMjkuNjA4NzIwOSwzMjIuMjg4MDg2IEwyOS42MDg3MjA5LDMyMC41NzE2OSBDMjkuNjA4NzIwOSwzMjAuMDIxMzMgMjkuMTYyNTY2NSwzMTkuNTc1MTc2IDI4LjYxMjIwNywzMTkuNTc1MTc2IEMyOC4wNjE4NDc2LDMxOS41NzUxNzYgMjcuNjE1NjkzMSwzMjAuMDIxMzMgMjcuNjE1NjkzMSwzMjAuNTcxNjkgTDI3LjYxNTY5MzEsMzIyLjI4ODA4NiBaIgogICAgICAgICAgICBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMDAwMDAwLCAtMzA0LjAwMDAwMCkiPgogICAgICAgIDxnPgogICAgICAgICAgICA8dXNlIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBzdHJva2U9IiM5Nzk3OTciCiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9IjEuMzUiCiAgICAgICAgICAgICAgICBkPSJNMjYuOTQwNjkzMSwzMjEuNjEzMDg2IEwyNi45NDA2OTMxLDMyMC41NzE2OSBDMjYuOTQwNjkzMSwzMTkuNjQ4NTM4IDI3LjY4OTA1NTQsMzE4LjkwMDE3NiAyOC42MTIyMDcsMzE4LjkwMDE3NiBDMjkuNTM1MzU4NywzMTguOTAwMTc2IDMwLjI4MzcyMDksMzE5LjY0ODUzOCAzMC4yODM3MjA5LDMyMC41NzE2OSBMMzAuMjgzNzIwOSwzMjEuNjEzMDg2IEwzNS40NjM5NDQ1LDMyMS42MTMwODYgTDM1LjQ2Mzk0NDUsMzE2LjYyNzU5OCBMMzYuMzMyMDgwMSwzMTYuNjI3NTk4IEMzNy40NTA0NTY3LDMxNi42Mjc1OTggMzguMzU3MDgwMSwzMTUuNzIwOTc1IDM4LjM1NzA4MDEsMzE0LjYwMjU5OCBDMzguMzU3MDgwMSwzMTMuNDg0MjIxIDM3LjQ1MDQ1NjcsMzEyLjU3NzU5OCAzNi4zMzIwODAxLDMxMi41Nzc1OTggTDM1LjQ2Mzk0NDUsMzEyLjU3NzU5OCBMMzUuNDYzOTQ0NSwzMDcuNTkyMTEgTDMwLjY2NDg5MjYsMzA3LjU5MjExIEwzMC42NjQ4OTI2LDMwNi44MTYzNjggQzMwLjY2NDg5MjYsMzA1LjY5Nzk5MSAyOS43NTgyNjkyLDMwNC43OTEzNjggMjguNjM5ODkyNiwzMDQuNzkxMzY4IEMyNy41MjE1MTYsMzA0Ljc5MTM2OCAyNi42MTQ4OTI2LDMwNS42OTc5OTEgMjYuNjE0ODkyNiwzMDYuODE2MzY4IEwyNi42MTQ4OTI2LDMwNy41OTIxMSBMMjEuNDQyOTY4NywzMDcuNTkyMTEgTDIxLjQ0Mjk2ODcsMzEyLjc0Nzk5OCBMMjEuOTU5OTMxNCwzMTIuNzQ3OTk4IEMyMi44ODMwODMxLDMxMi43NDc5OTggMjMuNjMxNDQ1MywzMTMuNDk2MzYgMjMuNjMxNDQ1MywzMTQuNDE5NTEyIEMyMy42MzE0NDUzLDMxNS4zNDI2NjQgMjIuODgzMDgzMSwzMTYuMDkxMDI2IDIxLjk1OTkzMTQsMzE2LjA5MTAyNiBMMjEuNDQyOTY4NywzMTYuMDkxMDI2IEwyMS40NDI5Njg3LDMyMS42MTMwODYgTDI2Ljk0MDY5MzEsMzIxLjYxMzA4NiBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ 7804:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Sivustot","settings_position_save_all":"Kaikki sivustot","settings_position_save_this":"Tämä sivusto","assistant_select_element_start":"Aloita","assistant_select_element_text":"Valitse sivulta estettävä elementti. Päivitä sivu poistuaksesi elementtien estotilasta.","menu_filtration_status":{"message":"Tämän sivuston suodatus"},"menu_do_not_filter_30_sec":{"message":"Pysäytä suodatus 30 sekunnin ajaksi"},"menu_block_ad_on_site":{"message":"Estä mainos tältä sivustolta"},"menu_report_abuse":{"message":"Ilmoita ongelmasta"},"menu_site_report":{"message":"Sivuston suojausraportti"},"menu_settings":{"message":"Apurin asetukset"},"menu_wot_reputation_indicator":{"message":"Sivuston maine"},"menu_wot_reputation_confidence_level":{"message":"Mainearvion luotettavuus"},"assistant_select_element":{"message":"Estä elementti"},"assistant_select_element_ext":{"message":"Klikkaa elementtiä, jonka haluat estää. AdGuard luo sille käyttäjäsäännön"},"assistant_select_element_cancel":{"message":"Peruuta"},"assistant_block_element":{"message":"Estä elementti"},"assistant_block_element_explain":{"message":"Luo elementin estämissääntö"},"assistant_slider_explain":{"message":"Säädä kehyksen kokoa siirtämällä liukusäädintä"},"assistant_extended_settings":{"message":"Lisäasetukset"},"assistant_apply_rule_to_all_sites":{"message":"Käytä kaikilla sivustoilla"},"assistant_block_by_reference":{"message":"Estä viitelinkillä"},"assistant_block_similar":{"message":"Estä samankaltaiset"},"assistant_another_element":{"message":"Valitse eri elementti"},"assistant_preview":{"message":"Esikatselu"},"assistant_block":{"message":"Estä"},"assistant_settings":{"message":"Apurin asetukset"},"assistant_preview_header":{"message":"Esikatselu estetty elementti"},"assistant_preview_header_info":{"message":"Tarkista, onko elementti lukittu oikein"},"assistant_preview_end":{"message":"Sulje esikatselu"},"wot_unknown_description":{"message":"$1 ei tarjoa sivustolle mainearviointia"},"wot_bad_description":{"message":"$1 arvioinnin mukaan sivustolla on erittäin huono maine"},"wot_poor_description":{"message":"$1 arvioinnin mukaan sivustolla on huono maine"},"wot_unsatisfactory_description":{"message":"$1 arvioinnin mukaan sivustolla on heikko maine"},"wot_good_description":{"message":"$1 arvioinnin mukaan sivustolla on hyvä maine"},"wot_excellent_description":{"message":"$1 arvioinnin mukaan sivustolla on erinomainen maine"},"settings_choose_size_and_position":{"message":"Säädä AdGuard Avustajan kokoa ja sijaintia"},"settings_icon_size":{"message":"Kuvakkeen koko:"},"settings_small":{"message":"Pieni"},"settings_big":{"message":"Suuri"},"settings_position":{"message":"Sijainti:"},"settings_left_top":{"message":"Ylhäällä vasemmalla"},"settings_right_top":{"message":"Ylhäällä oikealla"},"settings_left_bottom":{"message":"Alhaalla vasemmalla"},"settings_right_bottom":{"message":"Alhaalla oikealla"},"settings_cancel":{"message":"Peruuta"},"settings_save":{"message":"Tallenna muutokset"}}');

/***/ }),

/***/ 8008:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard 어시스턴트","description":"브라우저에서 바로 필터링 관리를 쉽고 간편하게 할 수 있도록 도와줍니다."}}}');

/***/ }),

/***/ 8158:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"assistant_select_element_cancel":{"message":"रद्द करें"},"assistant_extended_settings":{"message":"उन्नत सेटिंग"},"assistant_block":{"message":"अवरुद्ध"},"settings_icon_size":{"message":"आइकन का आकार:"},"settings_small":{"message":"छोटा"},"settings_big":{"message":"बड़ा"},"settings_cancel":{"message":"रद्द करें"}}');

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Trợ Lý AdGuard","description":"Cung cấp cách dễ dàng và thuận tiện để quản lý lọc ngay từ trình duyệt"}}}');

/***/ }),

/***/ 8463:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Веб-страници","settings_position_save_all":"Сите веб-локации","settings_position_save_this":"Оваа веб-локација","assistant_select_element_start":"Започнете","assistant_select_element_text":"Изберете елемент на страницата за блокирање. Освежете ја страницата за да го откажете режимот за блокирање елементи.","menu_filtration_status":{"message":"Филтрирање на оваа веб-локација"},"menu_do_not_filter_30_sec":{"message":"Не филтрирајте 30 секунди"},"menu_block_ad_on_site":{"message":"Блокирајте ја рекламата на оваа веб-локација"},"menu_report_abuse":{"message":"Пријавете ја веб-страницата"},"menu_site_report":{"message":"Извештај за безбедност на веб-страницата"},"menu_settings":{"message":"Поставки за Помошникот"},"menu_wot_reputation_indicator":{"message":"Индикатор за репутација на локацијата"},"menu_wot_reputation_confidence_level":{"message":"Ниво на доверба на репутацијата"},"assistant_select_element":{"message":"Блокирање на елемент"},"assistant_select_element_ext":{"message":"Кликнете на елемент што сакате да го блокирате. AdGuard ќе создаде корисничко правило"},"assistant_select_element_cancel":{"message":"Откажи"},"assistant_block_element":{"message":"Блокирање на елемент"},"assistant_block_element_explain":{"message":"Креирајте правило за блокирање на елемент"},"assistant_slider_explain":{"message":"Преместете го лизгачот за да ја прилагодите големината на рамката"},"assistant_extended_settings":{"message":"Напредни поставки"},"assistant_apply_rule_to_all_sites":{"message":"Применете го правилото на сите веб-локации"},"assistant_block_by_reference":{"message":"Блокирај по референтен линк"},"assistant_block_similar":{"message":"Блокирајте слични работи"},"assistant_another_element":{"message":"Изберете друг елемент"},"assistant_preview":{"message":"Преглед"},"assistant_block":{"message":"Блокирај"},"assistant_settings":{"message":"Поставки за Помошникот"},"assistant_preview_header":{"message":"Преглед на блокиран елемент"},"assistant_preview_header_info":{"message":"Провери дали елементот е правилно блокиран"},"assistant_preview_end":{"message":"Излезете од прегледот"},"wot_unknown_description":{"message":"Репутацијата на оваа веб-локација не е дефинирана со $1"},"wot_bad_description":{"message":"Оваа веб-локација има многу лоша репутација\\nспоред $1"},"wot_poor_description":{"message":"Оваа веб-локација има лоша репутација \\nспоред $1"},"wot_unsatisfactory_description":{"message":"Оваа веб-локација има лоша репутација\\nспоред $1"},"wot_good_description":{"message":"Оваа веб-локација има добра репутација\\nспоред $1"},"wot_excellent_description":{"message":"Оваа веб-локација има одлична репутација\\nспоред $1"},"settings_choose_size_and_position":{"message":"Прилагодете ја големината и положбата на „Помошник на AdGuard“"},"settings_icon_size":{"message":"Големина на иконата:"},"settings_small":{"message":"Мала"},"settings_big":{"message":"Голема"},"settings_position":{"message":"Поставеност:"},"settings_left_top":{"message":"Горе лево"},"settings_right_top":{"message":"Горе десно"},"settings_left_bottom":{"message":"Долу лево"},"settings_right_bottom":{"message":"Долу десно"},"settings_cancel":{"message":"Откажи"},"settings_save":{"message":"Зачувајте ги промените"}}');

/***/ }),

/***/ 8523:
/***/ ((module) => {

// Module
var code = "<div class=\"adguard-alert adguard-assistant-button-fixed adguard-assistant-button-main-logo\"></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 8626:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Websteder","settings_position_save_all":"Alle websteder","settings_position_save_this":"Dette websted","assistant_select_element_start":"Start","assistant_select_element_text":"Vælg et element på denne side, der skal blokeres. Opfrisk siden for at afbryde elementblokeringstilstanden.","menu_filtration_status":{"message":"Filtrering på dette websted"},"menu_do_not_filter_30_sec":{"message":"Filtrér ikke i 30 sekunder"},"menu_block_ad_on_site":{"message":"Blokér annoncer på dette websted"},"menu_report_abuse":{"message":"Anmeld dette websted"},"menu_site_report":{"message":"Webstedssikkerhedsrapport"},"menu_settings":{"message":"Assistent-indstillinger"},"menu_wot_reputation_indicator":{"message":"Webstedsomdømmeindikator"},"menu_wot_reputation_confidence_level":{"message":"Omdømmetillidsniveau"},"assistant_select_element":{"message":"Blokere et element"},"assistant_select_element_ext":{"message":"Klik på et element, der skal blokeres. AdGuard opretter en brugerregel for det"},"assistant_select_element_cancel":{"message":"Afbryd"},"assistant_block_element":{"message":"Blokere et element"},"assistant_block_element_explain":{"message":"Opret en elementblokereringsregel"},"assistant_slider_explain":{"message":"Flyt skyderen for at justere rammestørrelsen"},"assistant_extended_settings":{"message":"Avancerede indstillinger"},"assistant_apply_rule_to_all_sites":{"message":"Anvend reglen på alle websteder"},"assistant_block_by_reference":{"message":"Blokér efter referencelink"},"assistant_block_similar":{"message":"Blokér lignende"},"assistant_another_element":{"message":"Vælg et andet element"},"assistant_preview":{"message":"Forhåndsvisning"},"assistant_block":{"message":"Blokér"},"assistant_settings":{"message":"Assistent-indstillinger"},"assistant_preview_header":{"message":"Forhåndsvisningsblokeret element"},"assistant_preview_header_info":{"message":"Tjek, om elementet blokeres korrekt"},"assistant_preview_end":{"message":"Afslut forhåndsvisning"},"wot_unknown_description":{"message":"Dette websteds omdømme er ikke defineret af $1"},"wot_bad_description":{"message":"Dette websted har et meget dårligt omdømme jf. $1"},"wot_poor_description":{"message":"Dette websted har et dårligt omdømme jf. $1"},"wot_unsatisfactory_description":{"message":"Dette websted har et ringe omdømme jf. $1"},"wot_good_description":{"message":"Dette websted har et godt omdømme jf. $1"},"wot_excellent_description":{"message":"Dette websted har et fremragende omdømme \\njf. $1"},"settings_choose_size_and_position":{"message":"Justér størrelse og position for AdGuard Assistent"},"settings_icon_size":{"message":"Ikonstørrelse:"},"settings_small":{"message":"Lille"},"settings_big":{"message":"Stor"},"settings_position":{"message":"Position:"},"settings_left_top":{"message":"Øverst til venstre"},"settings_right_top":{"message":"Øverst til højre"},"settings_left_bottom":{"message":"Nederst til venstre"},"settings_right_bottom":{"message":"Nederst til højre"},"settings_cancel":{"message":"Afbryd"},"settings_save":{"message":"Gem ændringer"}}');

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUyIDE4Ij4KICAgIDxwYXRoIGQ9Ik01LjM1Myw3LjQxMiBMNS4zMDQsNy4zNjMgQzcuMTIxLDcuMTI1IDguNTI5LDUuNTg3IDguNTI5LDMuNzA2IEM4LjUyOSwxLjY1OSA2Ljg3LDAgNC44MjQsMCBDMi43NzcsMCAxLjExOCwxLjY1OSAxLjExOCwzLjcwNiBDMS4xMTgsNS41NzIgMi41MDIsNy4wOTkgNC4yOTQsNy4zNTggTDQuMjk0LDcuNDEyIEMxLjExOCw3LjQxMiAwLjA1OSw5LjUyOSAwLjA1OSw5LjUyOSBMMS4xMTgsMTUuODgyIEMxLjExOCwxNi45MzggMi40NzUsMTcuODA2IDQuMjQ0LDE3Ljk2NyBMNC4yOTQsMTggTDUuMzUzLDE4IEw1LjQwMywxNy45NjcgQzcuMTcyLDE3LjgwNiA4LjUyOSwxNi45MzggOC41MjksMTUuODgyIEw5LjU4OCw5LjUyOSBDOS41ODgsOS41MjkgOC41MjksNy40MTIgNS4zNTMsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTE1Ljk0MSw3LjQxMiBMMTUuODkyLDcuMzYzIEMxNy43MDksNy4xMjUgMTkuMTE4LDUuNTg3IDE5LjExOCwzLjcwNiBDMTkuMTE4LDEuNjU5IDE3LjQ1OCwwIDE1LjQxMiwwIEMxMy4zNjUsMCAxMS43MDYsMS42NTkgMTEuNzA2LDMuNzA2IEMxMS43MDYsNS41NzIgMTMuMDksNy4wOTkgMTQuODgyLDcuMzU4IEwxNC44ODIsNy40MTIgQzExLjcwNiw3LjQxMiAxMC42NDcsOS41MjkgMTAuNjQ3LDkuNTI5IEwxMS43MDYsMTUuODgyIEMxMS43MDYsMTYuOTM4IDEzLjA2MywxNy44MDYgMTQuODMzLDE3Ljk2NyBMMTQuODgyLDE4IEwxNS45NDEsMTggTDE1Ljk5MSwxNy45NjcgQzE3Ljc2LDE3LjgwNiAxOS4xMTgsMTYuOTM4IDE5LjExOCwxNS44ODIgTDIwLjE3Niw5LjUyOSBDMjAuMTc2LDkuNTI5IDE5LjExOCw3LjQxMiAxNS45NDEsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgogICAgPHBhdGggZD0iTTI2LjUyOSw3LjQxMiBMMjYuNDgxLDcuMzYzIEMyOC4yOTgsNy4xMjUgMjkuNzA2LDUuNTg3IDI5LjcwNiwzLjcwNiBDMjkuNzA2LDEuNjU5IDI4LjA0NywwIDI2LDAgQzIzLjk1MywwIDIyLjI5NCwxLjY1OSAyMi4yOTQsMy43MDYgQzIyLjI5NCw1LjU3MiAyMy42NzgsNy4wOTkgMjUuNDcxLDcuMzU4IEwyNS40NzEsNy40MTIgQzIyLjI5NCw3LjQxMiAyMS4yMzUsOS41MjkgMjEuMjM1LDkuNTI5IEwyMi4yOTQsMTUuODgyIEMyMi4yOTQsMTYuOTM4IDIzLjY1MiwxNy44MDYgMjUuNDIxLDE3Ljk2NyBMMjUuNDcxLDE4IEwyNi41MjksMTggTDI2LjU3OSwxNy45NjcgQzI4LjM0OCwxNy44MDYgMjkuNzA2LDE2LjkzOCAyOS43MDYsMTUuODgyIEwzMC43NjUsOS41MjkgQzMwLjc2NSw5LjUyOSAyOS43MDYsNy40MTIgMjYuNTI5LDcuNDEyIHoiIGZpbGw9IiM3MTcxNzEiLz4KICAgIDxwYXRoIGQ9Ik0zNy4xMTgsNy40MTIgTDM3LjA2OSw3LjM2MyBDMzguODg2LDcuMTI1IDQwLjI5NCw1LjU4NyA0MC4yOTQsMy43MDYgQzQwLjI5NCwxLjY1OSAzOC42MzUsMCAzNi41ODgsMCBDMzQuNTQyLDAgMzIuODgyLDEuNjU5IDMyLjg4MiwzLjcwNiBDMzIuODgyLDUuNTcyIDM0LjI2Niw3LjA5OSAzNi4wNTksNy4zNTggTDM2LjA1OSw3LjQxMiBDMzIuODgyLDcuNDEyIDMxLjgyNCw5LjUyOSAzMS44MjQsOS41MjkgTDMyLjg4MiwxNS44ODIgQzMyLjg4MiwxNi45MzggMzQuMjQsMTcuODA2IDM2LjAwOSwxNy45NjcgTDM2LjA1OSwxOCBMMzcuMTE4LDE4IEwzNy4xNjcsMTcuOTY3IEMzOC45MzcsMTcuODA2IDQwLjI5NCwxNi45MzggNDAuMjk0LDE1Ljg4MiBMNDEuMzUzLDkuNTI5IEM0MS4zNTMsOS41MjkgNDAuMjk0LDcuNDEyIDM3LjExOCw3LjQxMiB6IiBmaWxsPSIjNzE3MTcxIi8+CiAgICA8cGF0aCBkPSJNNDcuNzA2LDcuNDEyIEw0Ny42NTcsNy4zNjMgQzQ5LjQ3NCw3LjEyNSA1MC44ODIsNS41ODcgNTAuODgyLDMuNzA2IEM1MC44ODIsMS42NTkgNDkuMjIzLDAgNDcuMTc2LDAgQzQ1LjEzLDAgNDMuNDcxLDEuNjU5IDQzLjQ3MSwzLjcwNiBDNDMuNDcxLDUuNTcyIDQ0Ljg1NCw3LjA5OSA0Ni42NDcsNy4zNTggTDQ2LjY0Nyw3LjQxMiBDNDMuNDcxLDcuNDEyIDQyLjQxMiw5LjUyOSA0Mi40MTIsOS41MjkgTDQzLjQ3MSwxNS44ODIgQzQzLjQ3MSwxNi45MzggNDQuODI4LDE3LjgwNiA0Ni41OTcsMTcuOTY3IEw0Ni42NDcsMTggTDQ3LjcwNiwxOCBMNDcuNzU2LDE3Ljk2NyBDNDkuNTI1LDE3LjgwNiA1MC44ODIsMTYuOTM4IDUwLjg4MiwxNS44ODIgTDUxLjk0MSw5LjUyOSBDNTEuOTQxLDkuNTI5IDUwLjg4Miw3LjQxMiA0Ny43MDYsNy40MTIgeiIgZmlsbD0iIzcxNzE3MSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 8896:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Sajtovi","settings_position_save_all":"Svi sajtovi","settings_position_save_this":"Ovaj sajt","assistant_select_element_start":"Započni","assistant_select_element_text":"Izaberite element na stranici koji želite da blokirate. Osvežite stranicu da otkažete blokiranje elemenata.","menu_filtration_status":{"message":"Filtriranje na ovom sajtu"},"menu_do_not_filter_30_sec":{"message":"Ne filtriraj u narednih 30 sekundi"},"menu_block_ad_on_site":{"message":"Blokiraj reklamu na ovom sajtu"},"menu_report_abuse":{"message":"Prijavi sajt"},"menu_site_report":{"message":"Bezbednosni izveštaj o sajtu"},"menu_settings":{"message":"Postavke pomoćnika"},"menu_wot_reputation_indicator":{"message":"Indikator reputacije sajta"},"menu_wot_reputation_confidence_level":{"message":"Nivo poverljivosti reputacije"},"assistant_select_element":{"message":"Blokiraj element"},"assistant_select_element_ext":{"message":"Kliknite na element koji želite da blokirate. AdGuard će kreirati korisničko pravilo za to"},"assistant_select_element_cancel":{"message":"Otkaži"},"assistant_block_element":{"message":"Blokiraj element"},"assistant_block_element_explain":{"message":"Kreirajte pravilo blokiranja elementa"},"assistant_slider_explain":{"message":"Pomerite klizač da biste podesili veličinu okvira"},"assistant_extended_settings":{"message":"Napredne postavke"},"assistant_apply_rule_to_all_sites":{"message":"Primeni pravilo na sve sajtove"},"assistant_block_by_reference":{"message":"Blokiraj po linku reference"},"assistant_block_similar":{"message":"Blokiraj slično"},"assistant_another_element":{"message":"Izaberite drugi element"},"assistant_preview":{"message":"Pregled"},"assistant_block":{"message":"Blokiraj"},"assistant_settings":{"message":"Postavke pomoćnika"},"assistant_preview_header":{"message":"Pregled blokiran element"},"assistant_preview_header_info":{"message":"Proverite da li je element ispravno blokiran"},"assistant_preview_end":{"message":"Napusti pregled"},"wot_unknown_description":{"message":"Reputacija nije definisana"},"wot_bad_description":{"message":"Ovaj sajt ima veoma lošu reputaciju\\nprema "},"wot_poor_description":{"message":"Ovaj sajt ima lošu reputaciju\\nprema "},"wot_unsatisfactory_description":{"message":"Ovaj sajt ima slabu reputaciju\\nprema "},"wot_good_description":{"message":"Ovaj sajt ima dobru reputaciju\\nprema "},"wot_excellent_description":{"message":"Ovaj sajt ima odličnu reputaciju\\nprema "},"settings_choose_size_and_position":{"message":"Podesite veličinu i poziciju AdGuard pomoćnika"},"settings_icon_size":{"message":"Veličina ikonice"},"settings_small":{"message":"Mala"},"settings_big":{"message":"Velika"},"settings_position":{"message":"Pozicija:"},"settings_left_top":{"message":"Gore levo"},"settings_right_top":{"message":"Gore desno"},"settings_left_bottom":{"message":"Dole levo"},"settings_right_bottom":{"message":"Dole desno"},"settings_cancel":{"message":"Otkaži"},"settings_save":{"message":"Sačuvaj promene"}}');

/***/ }),

/***/ 8914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(5180);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 8983:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard pomoćnik","description":"Pruža jednostavan i zgodan način upravljanja filtriranjem direktno iz preglednika"}}}');

/***/ }),

/***/ 9025:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Assistent","description":"Muliggør nem og bekvem filtreringshåndtering direkte fra browseren"}}}');

/***/ }),

/***/ 9060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(890);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 9083:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"Asisten AdGuard","description":"Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban"}}}');

/***/ }),

/***/ 9097:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Asszisztens","description":"Könnyű és kényelmes módot kínál a szűrés kezelésére közvetlenül a böngészőből"}}}');

/***/ }),

/***/ 9100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4IDE1Ij4KICAgIDxwYXRoIGQ9Ik0yMS45MSwxLjA4MyBDMTguMDA4LDEuMDgzIDE0Ljg0Niw0LjA3IDE0Ljg0Niw3Ljc1OCBDMTQuODQ2LDExLjQ0NSAxOC4wMDgsMTQuNDMyIDIxLjkxLDE0LjQzMiBDMjUuODEzLDE0LjQzMiAyOC45NzcsMTEuNDQ1IDI4Ljk3Nyw3Ljc1OCBDMjguOTc4LDQuMDcgMjUuODEzLDEuMDgzIDIxLjkxLDEuMDgzIHogTTIxLjc3MSwxMS45IEMxOS41LDExLjkgMTcuNjU3LDEwLjA1NiAxNy42NTcsNy43ODMgQzE3LjY1Nyw1LjUwOCAxOS41MDEsMy42NjQgMjEuNzcxLDMuNjY0IEMyNC4wNDUsMy42NjQgMjUuODg2LDUuNTA4IDI1Ljg4Niw3Ljc4MyBDMjUuODg2LDEwLjA1NyAyNC4wNDUsMTEuOSAyMS43NzEsMTEuOSB6IiBmaWxsPSIjNzRCMDNFIi8+CiAgICA8cGF0aCBkPSJNMTYuNzUxLDAuNjQyIEwxNy4wMzEsMCBMMTQuMDYzLDAgTDExLjI3LDggTDguNjQ4LDAgTDguMjcyLDAgTDUuNjUsOCBMMywwIEwwLjAzMSwwIEw0LjksMTMuNDg2IEM0LjksMTMuNDg2IDUuMDc4LDEzLjg2IDUuMjc1LDEzLjg2IEM1LjQ1MSwxMy44NiA1LjY0OSwxMy40ODYgNS42NDksMTMuNDg2IEw4LjQ0NSw2LjQwNiBMMTEuMjY5LDEzLjQ4NiBDMTEuMjY5LDEzLjQ4NiAxMS40NTUsMTMuODYgMTEuNjQzLDEzLjg2IEMxMS44MjksMTMuODYgMTIuMDE4LDEzLjQ4NiAxMi4wMTgsMTMuNDg2IEwxMy42MTQsOS4wNjcgQzEzLjQ0NSw4LjQzMyAxMy4zNDUsNy43NzMgMTMuMzQ1LDcuMDg5IEMxMy4zNDYsNC40NTMgMTQuNjg2LDIuMTE4IDE2Ljc1MSwwLjY0MiB6IiBmaWxsPSIjRUUzNDI4Ii8+CiAgICA8cGF0aCBkPSJNMjcuMDMxLDAgTDI3LjAzMSwwLjYxMyBDMjcuOTQ0LDEuMjU4IDI4LjcxNSwyLjA2NyAyOS4yOTUsMyBMMzEuMDMxLDMgTDMxLjAzMSwxNCBMMzQuMDMxLDE0IEwzNC4wMzEsMyBMMzguMDMxLDMgTDM4LjAzMSwwIEwyNy4wMzEsMCB6IiBmaWxsPSIjRjA4NjE1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 9161:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"网站","settings_position_save_all":"所有网站","settings_position_save_this":"此网站","assistant_select_element_start":"开始","assistant_select_element_text":"选择要拦截的网页元素。要取消元素拦截模式，请刷新网页。","menu_filtration_status":{"message":"对此网站进行过滤"},"menu_do_not_filter_30_sec":{"message":"暂停过滤 30 秒"},"menu_block_ad_on_site":{"message":"拦截此网站上的广告"},"menu_report_abuse":{"message":"报告此网站"},"menu_site_report":{"message":"网站安全报告"},"menu_settings":{"message":"助手设置"},"menu_wot_reputation_indicator":{"message":"网站声誉指标"},"menu_wot_reputation_confidence_level":{"message":"声望置信度"},"assistant_select_element":{"message":"拦截元素"},"assistant_select_element_ext":{"message":"点击想要拦截的元素。AdGuard 将创建一条用户规则。"},"assistant_select_element_cancel":{"message":"取消"},"assistant_block_element":{"message":"拦截元素"},"assistant_block_element_explain":{"message":"创建元素拦截规则"},"assistant_slider_explain":{"message":"移动滑块以调整框架大小"},"assistant_extended_settings":{"message":"高级设置"},"assistant_apply_rule_to_all_sites":{"message":"应用规则至所有网站"},"assistant_block_by_reference":{"message":"通过参考链接进行拦截"},"assistant_block_similar":{"message":"拦截类似元素"},"assistant_another_element":{"message":"选择其它元素"},"assistant_preview":{"message":"预览"},"assistant_block":{"message":"拦截"},"assistant_settings":{"message":"AdGuard 助手设置"},"assistant_preview_header":{"message":"预览已拦截元素"},"assistant_preview_header_info":{"message":"检查该元素是否被正确拦截"},"assistant_preview_end":{"message":"退出预览"},"wot_unknown_description":{"message":"声望尚未定义"},"wot_bad_description":{"message":"此网站在以下数据库中声望极低"},"wot_poor_description":{"message":"此网站在以下数据库中声望低下 "},"wot_unsatisfactory_description":{"message":"此网站在以下数据库中声望不佳 "},"wot_good_description":{"message":"此网站在以下数据库中声望良好 "},"wot_excellent_description":{"message":"此网站在以下数据库中声望极佳 "},"settings_choose_size_and_position":{"message":"调整 AdGuard 助手的大小与位置"},"settings_icon_size":{"message":"图标大小："},"settings_small":{"message":"小"},"settings_big":{"message":"大"},"settings_position":{"message":"位置："},"settings_left_top":{"message":"左上角"},"settings_right_top":{"message":"右上角"},"settings_left_bottom":{"message":"左下角"},"settings_right_bottom":{"message":"右下角"},"settings_cancel":{"message":"取消"},"settings_save":{"message":"保存更改"}}');

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTcgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMi4wMDAwMDAsIC0xNDQuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjAwMDAwMCwgMTQxLjAwMDAwMCkiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIxLjM1Ij4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjcuODcwMzYxMzMiIGN5PSIxMS4yNzU5NzY2IiByPSI3LjM3ODg1NzQyIj48L2NpcmNsZT4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJMaW5lLTIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHBvaW50cz0iNy43Njc5Njg3NSA3LjQ2MzI4MTI1IDcuNzY3OTY4NzUgMTEuOTYzMjgxMiAxMS4zNjc5Njg3IDExLjk2MzI4MTIiPjwvcG9seWxpbmU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ 9335:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Sites web","settings_position_save_all":"Tous les sites web","settings_position_save_this":"Ce site web","assistant_select_element_start":"Démarrer","assistant_select_element_text":"Choisissez un élément de la page à bloquer. Pour afficher l\'élément de nouveau, rafraîchissez la page.","menu_filtration_status":{"message":"Filtrages sur ce site"},"menu_do_not_filter_30_sec":{"message":"Ne pas filtrer pendant 30 secondes "},"menu_block_ad_on_site":{"message":"Blocage des annonces sur ce site "},"menu_report_abuse":{"message":"Signaler le site"},"menu_site_report":{"message":"Rapport de sécurité du site"},"menu_settings":{"message":"Réglages de l\'Assistant AdGuard"},"menu_wot_reputation_indicator":{"message":"Indice de réputation du site"},"menu_wot_reputation_confidence_level":{"message":"Niveau de confiance"},"assistant_select_element":{"message":"Bloquer un élément"},"assistant_select_element_ext":{"message":"Cliquez sur l\'élément à bloquer. AdGuard créera une règle utilisateur pour cet élément"},"assistant_select_element_cancel":{"message":"Annuler"},"assistant_block_element":{"message":"Bloquer un élément"},"assistant_block_element_explain":{"message":"Créer une règle de blocage d\'élément"},"assistant_slider_explain":{"message":"Déplacez le curseur pour ajuster la taille du cadre"},"assistant_extended_settings":{"message":"Paramétrages avancés "},"assistant_apply_rule_to_all_sites":{"message":"Appliquer la règle à tous les sites"},"assistant_block_by_reference":{"message":"Blocage par liens de reference"},"assistant_block_similar":{"message":"Blocage des objets similaires "},"assistant_another_element":{"message":"Sélectionner un élément différent"},"assistant_preview":{"message":"Previsualisation "},"assistant_block":{"message":"Blocage "},"assistant_settings":{"message":"Réglages de l\'Assistant AdGuard"},"assistant_preview_header":{"message":"Aperçu de l\'élément bloqué"},"assistant_preview_header_info":{"message":"Vérifiez si l\'élément est correctement bloqué"},"assistant_preview_end":{"message":"Sortir de la previsualisation "},"wot_unknown_description":{"message":"La définition de la réputation de ce site web n\'est pas définie par $1"},"wot_bad_description":{"message":"Ce site web a très mauvaise réputation selon $1"},"wot_poor_description":{"message":"Ce site web a mauvaise réputation selon $1"},"wot_unsatisfactory_description":{"message":"Ce site web a une reputation médiocre selon $1"},"wot_good_description":{"message":"Ce site a bonne réputation selon $1"},"wot_excellent_description":{"message":"Ce site a une réputation excellente selon $1"},"settings_choose_size_and_position":{"message":"Affiner la taille et la position de l\'assistant AdGuard "},"settings_icon_size":{"message":"Taille de l\'icone"},"settings_small":{"message":"Petite"},"settings_big":{"message":"Grande"},"settings_position":{"message":"Positionnement"},"settings_left_top":{"message":"En haut à gauche"},"settings_right_top":{"message":"En haut à droite"},"settings_left_bottom":{"message":"En bas à gauche"},"settings_right_bottom":{"message":"En bas à droite "},"settings_cancel":{"message":"Annuler"},"settings_save":{"message":"Sauvegarder les modifications "}}');

/***/ }),

/***/ 9389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTkgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMDAwMDAwLCAtMzQzLjAwMDAwMCkiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjE0MjM4MywgMzQzLjMwMzQ2NykiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIxLjM1Ij4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIGQ9Ik03LjcxMTUyMzQ0LDEuOTAwNjM0NzcgTDcuNzExNTIzNDQsMi44OTYzNDMxNSBMNy4yMjkwNjY5NCwzLjAzOTkyOTIyIEM2LjgxMTM1NTQzLDMuMTY0MjQ2MjUgNi40MDg2MjIwOCwzLjMzMTQ2NDY4IDYuMDI2NDg4NDEsMy41Mzg1MzQ3NyBMNS41ODM3MDgzMiwzLjc3ODQ2Nzg2IEw0Ljg3OTEwMjQyLDMuMDczODYxOTYgQzQuNDM5NzYyNiwyLjYzNDUyMjE0IDMuNzI3NDUxOTksMi42MzQ1MjIxNCAzLjI4ODExMjE3LDMuMDczODYxOTYgTDMuMDAyMjMxMSwzLjM1OTc0MzAzIEMyLjU2Mjg5MTI4LDMuNzk5MDgyODUgMi41NjI4OTEyOCw0LjUxMTM5MzQ2IDMuMDAyMjMxMSw0Ljk1MDczMzI4IEwzLjcwNjgzNyw1LjY1NTMzOTE4IEwzLjQ2NjkwMzkxLDYuMDk4MTE5MjcgQzMuMjU5ODMzODIsNi40ODAyNTI5MyAzLjA5MjYxNTM5LDYuODgyOTg2MjkgMi45NjgyOTgzNiw3LjMwMDY5NzggTDIuODI0NzEyMjksNy43ODMxNTQzIEwxLjgyOTAwMzkxLDcuNzgzMTU0MyBDMS4yMDc2ODM1Niw3Ljc4MzE1NDMgMC43MDQwMDM5MDYsOC4yODY4MzM5NSAwLjcwNDAwMzkwNiw4LjkwODE1NDMgTDAuNzA0MDAzOTA2LDkuMzEyNDUxMTcgQzAuNzA0MDAzOTA2LDkuOTMzNzcxNTIgMS4yMDc2ODM1NiwxMC40Mzc0NTEyIDEuODI5MDAzOTEsMTAuNDM3NDUxMiBMMi44MjQ3MTIyOSwxMC40Mzc0NTEyIEwyLjk2ODI5ODM2LDEwLjkxOTkwNzcgQzMuMDkyNjE1MzksMTEuMzM3NjE5MiAzLjI1OTgzMzgyLDExLjc0MDM1MjUgMy40NjY5MDM5MSwxMi4xMjI0ODYyIEwzLjcwNjgzNywxMi41NjUyNjYzIEwzLjAwMjIzMTEsMTMuMjY5ODcyMiBDMi41NjI4OTEyOCwxMy43MDkyMTIgMi41NjI4OTEyOCwxNC40MjE1MjI2IDMuMDAyMjMxMSwxNC44NjA4NjI0IEwzLjI4ODExMjE3LDE1LjE0Njc0MzUgQzMuNzI3NDUxOTksMTUuNTg2MDgzMyA0LjQzOTc2MjYsMTUuNTg2MDgzMyA0Ljg3OTEwMjQyLDE1LjE0Njc0MzUgTDUuNTgzNzA4MzIsMTQuNDQyMTM3NiBMNi4wMjY0ODg0MSwxNC42ODIwNzA3IEM2LjQwODYyMjA4LDE0Ljg4OTE0MDggNi44MTEzNTU0MywxNS4wNTYzNTkyIDcuMjI5MDY2OTQsMTUuMTgwNjc2MiBMNy43MTE1MjM0NCwxNS4zMjQyNjIzIEw3LjcxMTUyMzQ0LDE2LjMxOTk3MDcgQzcuNzExNTIzNDQsMTYuOTQxMjkxIDguMjE1MjAzMDksMTcuNDQ0OTcwNyA4LjgzNjUyMzQ0LDE3LjQ0NDk3MDcgTDkuMjQwODIwMzEsMTcuNDQ0OTcwNyBDOS44NjIxNDA2NiwxNy40NDQ5NzA3IDEwLjM2NTgyMDMsMTYuOTQxMjkxIDEwLjM2NTgyMDMsMTYuMzE5OTcwNyBMMTAuMzY1ODIwMywxNS4zMjQyNjIzIEwxMC44NDgyNzY4LDE1LjE4MDY3NjIgQzExLjI2NTk4ODMsMTUuMDU2MzU5MiAxMS42Njg3MjE3LDE0Ljg4OTE0MDggMTIuMDUwODU1MywxNC42ODIwNzA3IEwxMi40OTM2MzU0LDE0LjQ0MjEzNzYgTDEzLjE5ODI0MTMsMTUuMTQ2NzQzNSBDMTMuNjM3NTgxMiwxNS41ODYwODMzIDE0LjM0OTg5MTgsMTUuNTg2MDgzMyAxNC43ODkyMzE2LDE1LjE0Njc0MzUgTDE1LjA3NTExMjYsMTQuODYwODYyNCBDMTUuNTE0NDUyNSwxNC40MjE1MjI2IDE1LjUxNDQ1MjUsMTMuNzA5MjEyIDE1LjA3NTExMjYsMTMuMjY5ODcyMiBMMTQuMzcwNTA2NywxMi41NjUyNjYzIEwxNC42MTA0Mzk4LDEyLjEyMjQ4NjIgQzE0LjgxNzUwOTksMTEuNzQwMzUyNSAxNC45ODQ3Mjg0LDExLjMzNzYxOTIgMTUuMTA5MDQ1NCwxMC45MTk5MDc3IEwxNS4yNTI2MzE1LDEwLjQzNzQ1MTIgTDE2LjI0ODMzOTgsMTAuNDM3NDUxMiBDMTYuODY5NjYwMiwxMC40Mzc0NTEyIDE3LjM3MzMzOTgsOS45MzM3NzE1MiAxNy4zNzMzMzk4LDkuMzEyNDUxMTcgTDE3LjM3MzMzOTgsOC45MDgxNTQzIEMxNy4zNzMzMzk4LDguMjg2ODMzOTUgMTYuODY5NjYwMiw3Ljc4MzE1NDMgMTYuMjQ4MzM5OCw3Ljc4MzE1NDMgTDE1LjI1MjYzMTUsNy43ODMxNTQzIEwxNS4xMDkwNDU0LDcuMzAwNjk3OCBDMTQuOTg0NzI4NCw2Ljg4Mjk4NjI5IDE0LjgxNzUwOTksNi40ODAyNTI5MyAxNC42MTA0Mzk4LDYuMDk4MTE5MjcgTDE0LjM3MDUwNjcsNS42NTUzMzkxOCBMMTUuMDc1MTEyNiw0Ljk1MDczMzI4IEMxNS41MTQ0NTI1LDQuNTExMzkzNDYgMTUuNTE0NDUyNSwzLjc5OTA4Mjg1IDE1LjA3NTExMjYsMy4zNTk3NDMwMyBMMTQuNzg5MjMxNiwzLjA3Mzg2MTk2IEMxNC4zNDk4OTE4LDIuNjM0NTIyMTQgMTMuNjM3NTgxMiwyLjYzNDUyMjE0IDEzLjE5ODI0MTMsMy4wNzM4NjE5NiBMMTIuNDkzNjM1NCwzLjc3ODQ2Nzg2IEwxMi4wNTA4NTUzLDMuNTM4NTM0NzcgQzExLjY2ODcyMTcsMy4zMzE0NjQ2OCAxMS4yNjU5ODgzLDMuMTY0MjQ2MjUgMTAuODQ4Mjc2OCwzLjAzOTkyOTIyIEwxMC4zNjU4MjAzLDIuODk2MzQzMTUgTDEwLjM2NTgyMDMsMS45MDA2MzQ3NyBDMTAuMzY1ODIwMywxLjI3OTMxNDQyIDkuODYyMTQwNjYsMC43NzU2MzQ3NjYgOS4yNDA4MjAzMSwwLjc3NTYzNDc2NiBMOC44MzY1MjM0NCwwLjc3NTYzNDc2NiBDOC4yMTUyMDMwOSwwLjc3NTYzNDc2NiA3LjcxMTUyMzQ0LDEuMjc5MzE0NDIgNy43MTE1MjM0NCwxLjkwMDYzNDc3IFoiCiAgICAgICAgICAgICAgICBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0xNSIgY3g9IjkuMDM4NjcxODgiIGN5PSI5LjExMDMwMjczIiByPSIxLjgiPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ 9422:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Spletne strani","settings_position_save_all":"Vse pletne strani","settings_position_save_this":"To spletno stran","assistant_select_element_start":"Začni","assistant_select_element_text":"Izberite element na strani, ki jo želite onemogočiti. Osvežite stran, da prekličete način zaviranja elementa.","menu_filtration_status":{"message":"Filtriranje na tej spletni strani"},"menu_do_not_filter_30_sec":{"message":"Ne filtriraj 30 sekund"},"menu_block_ad_on_site":{"message":"Onemogoči oglas na tej spletni strani"},"menu_report_abuse":{"message":"Prijavi spletno stran"},"menu_site_report":{"message":"Poročilo o varnosti spletne strani"},"menu_settings":{"message":"Nastavitve Pomočnika"},"menu_wot_reputation_indicator":{"message":"Kazalnik ugleda spletnestrani"},"menu_wot_reputation_confidence_level":{"message":"Raven ugleda zaupanja"},"assistant_select_element":{"message":"Onemogoči element"},"assistant_select_element_ext":{"message":"Kliknite element, ki ga želite blokirati. AdGuard bo zanj ustvaril uporabniško pravilo"},"assistant_select_element_cancel":{"message":"Prekliči"},"assistant_block_element":{"message":"Onemogoči element"},"assistant_block_element_explain":{"message":"Ustvarite pravilo za blokiranje elementov"},"assistant_slider_explain":{"message":"Premaknite drsnik, da prilagodite velikost okvirja"},"assistant_extended_settings":{"message":"Napredne nastavitve"},"assistant_apply_rule_to_all_sites":{"message":"Uporabi pravilo za vse spletne strani"},"assistant_block_by_reference":{"message":"Onemogočij z napotitveno povezavo"},"assistant_block_similar":{"message":"Onemogoči podobno"},"assistant_another_element":{"message":"Izberi drug element"},"assistant_preview":{"message":"Predogled"},"assistant_block":{"message":"Onemogoči"},"assistant_settings":{"message":"Nastavitve Pomočnika"},"assistant_preview_header":{"message":"Predogled blokiranega elementa"},"assistant_preview_header_info":{"message":"Preverite, ali je element pravilno blokiran"},"assistant_preview_end":{"message":"Zapusti predogled"},"wot_unknown_description":{"message":"Ugled te spletne strani ni opredeljen z $1"},"wot_bad_description":{"message":"Ta spletna stran ima zelo slab ugled\\nglede na $1"},"wot_poor_description":{"message":"Ta spletna stran ima slab ugled\\nglede na $1"},"wot_unsatisfactory_description":{"message":"Ta spletna stran ima zelo slab ugled\\nglede na $1"},"wot_good_description":{"message":"Ta spletna stran ima dober ugled\\nglede na $1"},"wot_excellent_description":{"message":"Ta spletna stran ima odličen ugled\\nglede na $1"},"settings_choose_size_and_position":{"message":"Prilagodi velikost in položaj AdGuard Pomočnika"},"settings_icon_size":{"message":"Velikost ikone:"},"settings_small":{"message":"Majhna"},"settings_big":{"message":"Velika"},"settings_position":{"message":"Položaj:"},"settings_left_top":{"message":"Zgoraj levo"},"settings_right_top":{"message":"Zgoraj desno"},"settings_left_bottom":{"message":"Spodaj levo"},"settings_right_bottom":{"message":"Spodaj desno"},"settings_cancel":{"message":"Prekliči"},"settings_save":{"message":"Shrani nastavitve"}}');

/***/ }),

/***/ 9692:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Trang Web","settings_position_save_all":"Tất cả trang web","settings_position_save_this":"Chỉ trang web này","assistant_select_element_start":"Bắt đầu","assistant_select_element_text":"Chọn một thành phần trên trang để chặn. Làm mới trang web để hủy bỏ chế độ chặn thành phần.","menu_filtration_status":{"message":"Lọc trên website này"},"menu_do_not_filter_30_sec":{"message":"Không lọc trong 30 giây"},"menu_block_ad_on_site":{"message":"Chặn quảng cáo đối với trang web này"},"menu_report_abuse":{"message":"Báo cáo trang web này"},"menu_site_report":{"message":"Báo cáo bảo mật website"},"menu_settings":{"message":"Cài đặt trợ lý"},"menu_wot_reputation_indicator":{"message":"Chỉ số danh tiếng của trang Web"},"menu_wot_reputation_confidence_level":{"message":"Mức độ đáng tin của danh tiếng"},"assistant_select_element":{"message":"Chặn một thành phần"},"assistant_select_element_ext":{"message":"Nhấp vào phần tử bạn muốn chặn. AdGuard sẽ tạo quy tắc người dùng cho phần tử đó"},"assistant_select_element_cancel":{"message":"Hủy bỏ"},"assistant_block_element":{"message":"Chặn một thành phần"},"assistant_block_element_explain":{"message":"Tạo một quy tắc chặn yếu tố"},"assistant_slider_explain":{"message":"Di chuyển thanh trượt để điều chỉnh kích thước của khung"},"assistant_extended_settings":{"message":"Cài đặt nâng cao"},"assistant_apply_rule_to_all_sites":{"message":"Áp dụng tất cả các điều luật đối với mọi trang web"},"assistant_block_by_reference":{"message":"Chặn theo liên kết tham chiếu"},"assistant_block_similar":{"message":"Chặn tương tự"},"assistant_another_element":{"message":"Chọn một phần tử khác"},"assistant_preview":{"message":"Xem trước"},"assistant_block":{"message":"Chặn"},"assistant_settings":{"message":"Cài đặt trợ lý"},"assistant_preview_header":{"message":"Xem trước yếu tố đã bị chặn"},"assistant_preview_header_info":{"message":"Kiểm tra xem phần tử có bị chặn đúng không"},"assistant_preview_end":{"message":"Thoát xem trước"},"wot_unknown_description":{"message":"Website này danh tiếng chưa được xác định bởi $1"},"wot_bad_description":{"message":"Website này có danh tiếng cực xấu dựa theo $1"},"wot_poor_description":{"message":"Website này có danh tiếng xấu dựa theo $1"},"wot_unsatisfactory_description":{"message":"Website này có danh tiếng không tốt dựa theo $1"},"wot_good_description":{"message":"Website này có danh tiếng tốt dựa theo $1"},"wot_excellent_description":{"message":"Website này có danh tiếng tuyệt vời dựa theo $1"},"settings_choose_size_and_position":{"message":"Điều chỉnh kích thước và vị trí của Trợ Lý AdGuard"},"settings_icon_size":{"message":"Kích thước biểu tượng:"},"settings_small":{"message":"Nhỏ"},"settings_big":{"message":"Lớn"},"settings_position":{"message":"Vị trí:"},"settings_left_top":{"message":"Trên cùng bên trái"},"settings_right_top":{"message":"Trên cùng bên phải"},"settings_left_bottom":{"message":"Dưới cùng bên trái"},"settings_right_bottom":{"message":"Dưới cùng bên phải"},"settings_cancel":{"message":"Hủy bỏ"},"settings_save":{"message":"Lưu các thay đổi"}}');

/***/ }),

/***/ 9707:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard-assistent","description":"Erbjuder ett enkelt och bekvämt sätt att hantera filtrering direkt i webbläsaren"}}}');

/***/ }),

/***/ 9727:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuardアシスタント","description":"ブラウザから簡単にフィルタリングを管理する便利な機能を提供します。"}}}');

/***/ }),

/***/ 9734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNDI4NTcgNi40Mjg1N0wxNy42MDQzIDE3LjYwNDMiIHN0cm9rZT0iI0E0QTRBNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi40Mjc3MyAxNy41NzE0TDE3LjYwMzUgNi4zOTU2MyIgc3Ryb2tlPSIjQTRBNEE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 9762:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard 小助手","description":"在瀏覽器中提供了簡易且直覺的管理過濾方式"}}}');

/***/ }),

/***/ 9841:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings_position_save":"Websites","settings_position_save_all":"Alle websites","settings_position_save_this":"Deze website","assistant_select_element_start":"Starten","assistant_select_element_text":"Kies een element op deze webpagina om te blokkeren. Herlaad de pagina om het blokkeren van het element te stoppen.","menu_filtration_status":{"message":"Filteren op deze website"},"menu_do_not_filter_30_sec":{"message":"Niet filtreren voor 30 seconden"},"menu_block_ad_on_site":{"message":"Blokkeer ad op deze website"},"menu_report_abuse":{"message":"Rapporteer de website"},"menu_site_report":{"message":"Beveiligingsrapport van website"},"menu_settings":{"message":"Instelling van de assistent"},"menu_wot_reputation_indicator":{"message":"Website reputatie indicator"},"menu_wot_reputation_confidence_level":{"message":"Vertrouwensniveau reputatie"},"assistant_select_element":{"message":"Element blokkeren"},"assistant_select_element_ext":{"message":"Klik op een element dat je wilt blokkeren. AdGuard zal er een gebruikersregel voor aanmaken"},"assistant_select_element_cancel":{"message":"Annuleren"},"assistant_block_element":{"message":"Element blokkeren"},"assistant_block_element_explain":{"message":"Een elementblokkerende regel aanmaken"},"assistant_slider_explain":{"message":"Verplaats de schuifregelaar om de grootte van het kader aan te passen"},"assistant_extended_settings":{"message":"Geavanceerde instellingen"},"assistant_apply_rule_to_all_sites":{"message":"Regel toepassen op alle websites"},"assistant_block_by_reference":{"message":"Blokkeren via referentielink"},"assistant_block_similar":{"message":"Blokkeer vergelijkbare"},"assistant_another_element":{"message":"Een ander element selecteren"},"assistant_preview":{"message":"Voorbeeldweergave"},"assistant_block":{"message":"Blokkeren"},"assistant_settings":{"message":"Assistent instellingen"},"assistant_preview_header":{"message":"Voorbeeld geblokkeerd element"},"assistant_preview_header_info":{"message":"Controleer of het element correct is geblokkeerd"},"assistant_preview_end":{"message":"Voorbeeldweergave afsluiten"},"wot_unknown_description":{"message":"De reputatie van deze website wordt niet bepaald door $1"},"wot_bad_description":{"message":"Deze website heeft een zeer slechte reputatie\\nvolgens $1"},"wot_poor_description":{"message":"Deze website heeft een slechte reputatie\\nvolgens $ 1"},"wot_unsatisfactory_description":{"message":"Deze website heeft een slechte reputatie volgens $1"},"wot_good_description":{"message":"Deze website heeft een goede reputatie volgens $1"},"wot_excellent_description":{"message":"Deze website heeft een uitstekende reputatie volgens $1"},"settings_choose_size_and_position":{"message":"Grootte en positie van AdGuard Assistent aanpassen"},"settings_icon_size":{"message":"Grootte pictogram:"},"settings_small":{"message":"Klein"},"settings_big":{"message":"Groot"},"settings_position":{"message":"Positie:"},"settings_left_top":{"message":"Linksboven"},"settings_right_top":{"message":"Rechtsboven"},"settings_left_bottom":{"message":"Linksonder"},"settings_right_bottom":{"message":"Rechtsonder"},"settings_cancel":{"message":"Annuleren"},"settings_save":{"message":"Wijzigingen opslaan"}}');

/***/ }),

/***/ 9869:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 9921:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extension":{"assistant":{"name":"AdGuard Assistant","description":"Provides easy and convenient way to manage filtering right from the browser"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  adguardAssistant: () => (/* binding */ adguardAssistant)
});

;// ./src/ioc.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getArguments = function getArguments(func) {
  // This regex is from require.js
  var FN_ARGS = /^function\s*[^(]*\(\s*([^)]*)\)/m;
  var args = func.toString().match(FN_ARGS)[1].split(',');
  if (args[0] === '') {
    return [];
  }
  return args;
};
var Ioc = /*#__PURE__*/function () {
  function Ioc() {
    _classCallCheck(this, Ioc);
    this.dependencies = {};
  }
  return _createClass(Ioc, [{
    key: "resolveDependencies",
    value: function resolveDependencies(func) {
      var args = getArguments(func);
      var resolved = [];
      for (var i = 0; i < args.length; i += 1) {
        var depName = args[i].trim();
        var dep = this.dependencies[depName];
        if (!dep) {
          throw new Error("Can't find dependency: ".concat(depName));
        }
        resolved.push(this.dependencies[depName]);
      }
      return resolved;
    }
  }, {
    key: "register",
    value: function register(qualifier, obj) {
      this.dependencies[qualifier] = obj;
    }
  }, {
    key: "get",
    value: function get(func) {
      if (typeof func === 'string') {
        var resolved = this.dependencies[func];
        if (!resolved) {
          throw new Error("Can't resolve ".concat(func));
        }
        return resolved;
      }
      var resolvedDependencies = this.resolveDependencies(func);
      function FuncWrapper() {
        return func.apply(func, resolvedDependencies);
      }
      FuncWrapper.prototype = func.prototype;
      return new FuncWrapper();
    }
  }]);
}();
var ioc = new Ioc();
/* harmony default export */ const src_ioc = (ioc);
;// ./src/protectedApi.js
/**
 * TODO: rewrite to class
 * TODO: add relevant jsdoc
 * Protected API
 * @constructor
 */
function ProtectedApi() {
  /**
   * Default Trusted Types policy name provided by CoreLibs.
   */
  var DEFAULT_POLICY_NAME = 'AGPolicy';
  var win = window;
  var functionPType = Function.prototype;
  var originalGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var _document = document,
    documentMode = _document.documentMode,
    documentElement = _document.documentElement;
  var originalAppendChild = document.appendChild;
  var originalJSON = win.JSON;
  var functionApply = functionPType.apply;
  var functionBind = functionPType.bind;
  var COMPLETE = 'complete';
  var originalAttachShadow = documentElement.attachShadow;

  // eslint-disable-next-line func-names
  var apply = typeof Reflect !== 'undefined' ? Reflect.apply : function (target, _this, _arguments) {
    return functionApply.call(target, _this, _arguments);
  };
  var noop = function noop() {};
  var methodCallerFactory = function methodCallerFactory(owner, prop) {
    if (!owner) {
      return noop;
    }
    // Keeps reference to the method, so that it is unaffected
    // when `owner` is mutated.
    var method = owner[prop];
    // eslint-disable-next-line consistent-return, func-names
    return function () {
      if (method) {
        // eslint-disable-next-line prefer-rest-params
        return apply(method, owner, arguments);
      }
    };
  };
  var getReadyState = function getReadyState() {
    // We need to add this hook for tests, because a phantomjs
    // doesn't work with Object.getOwnPropertyDescriptor correctly
    if (typeof originalGetOwnPropertyDescriptor(Document.prototype, 'readyState') === 'undefined') {
      return COMPLETE;
    }
    var readyStateGetter = originalGetOwnPropertyDescriptor(Document.prototype, 'readyState').get;
    return apply(readyStateGetter, document, []);
  };
  var addListenerToWindow = methodCallerFactory(win, 'addEventListener');
  var removeListenerFromWindow = methodCallerFactory(win, 'removeEventListener');
  var querySelector = methodCallerFactory(document, 'querySelector');
  var appendChildToElement = function appendChildToElement(elem, child) {
    apply(originalAppendChild, elem, [child]);
  };

  /**
   * Creating element instead `document.createElement`
   * to prevented a custom `document.createElement`
   * see: https://github.com/AdguardTeam/AdguardAssistant/issues/165
   *
   * And also if browser supports Trusted Types,
   * we will use it with default AdGuard policy to create elements from strings.
   * see: https://github.com/AdguardTeam/AdguardAssistant/issues/438
   */
  var createElement = function createElement(markup) {
    var doc = document.implementation.createHTMLDocument('');
    if (markup && markup[0] !== '<') {
      // eslint-disable-next-line no-param-reassign
      markup = "<".concat(markup, "></").concat(markup, ">");
    }
    try {
      if (win.trustedTypes && win.trustedTypes.createPolicy) {
        var policy = win.trustedTypes.createPolicy(DEFAULT_POLICY_NAME, {
          createHTML: function createHTML(s) {
            return s;
          }
        });
        // eslint-disable-next-line no-param-reassign
        markup = policy.createHTML(markup);
      }
    } catch (e) {
      // Do nothing
    }
    doc.body.innerHTML = markup;
    return doc.body.firstChild;
  };

  /**
   * Set innerHTML to element.
   *
   * @param {HTMLElement} element Element to add HTML.
   * @param {string} html HTML string.
   */
  var setInnerHtml = function setInnerHtml(element, html) {
    // Clear existing content
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }

    // Add new content
    element.appendChild(createElement(html));
  };
  var json = {
    parse: methodCallerFactory(originalJSON, 'parse'),
    stringify: methodCallerFactory(originalJSON, 'stringify')
  };

  /**
   * Creating style element
   * @param {String} styles css styles in string
   * @param {String} nonce  attribute for content-security-policy
   * @param {String} id to prevent duplicates, can be empty
   * @return {Object|false} style tag with styles or false
   * if the styles with transferred id is exist
   */
  var createStylesElement = function createStylesElement(styles, nonce, id) {
    if (id && querySelector("#".concat(id))) {
      return false;
    }
    var tagNode = createElement('style');
    tagNode.setAttribute('type', 'text/css');
    if (id) {
      tagNode.setAttribute('id', id);
    }
    tagNode.setAttribute('nonce', nonce);
    if (tagNode.styleSheet) {
      tagNode.styleSheet.cssText = styles;
    } else {
      appendChildToElement(tagNode, document.createTextNode(styles));
    }
    return tagNode;
  };

  /**
   * Check browser shadow dom support.
   * Safari crashes after adding style tag in attachShadow so exclude it
   * see: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/974
   */
  var checkShadowDomSupport = function checkShadowDomSupport() {
    var SAFARI_UA_REGEX = /^((?!chrome|android).)*safari/i;
    var isSafari = window.safari !== undefined || SAFARI_UA_REGEX.test(navigator.userAgent);
    return typeof originalAttachShadow !== 'undefined' && !isSafari;
  };
  return {
    functionBind: functionBind,
    addListenerToWindow: addListenerToWindow,
    removeListenerFromWindow: removeListenerFromWindow,
    getReadyState: getReadyState,
    documentMode: documentMode,
    appendChildToElement: appendChildToElement,
    createElement: createElement,
    setInnerHtml: setInnerHtml,
    json: json,
    createStylesElement: createStylesElement,
    checkShadowDomSupport: checkShadowDomSupport
  };
}
var protectedApi = new ProtectedApi();
/* harmony default export */ const src_protectedApi = (protectedApi);
;// ./src/wot.js
/**
 * Object that manages wot data
 * @returns {{
 * registerWotEventHandler: Function,
 * getWotData: Function,
 * getWotScorecardUrl: Function,
 * WOT_URL: string
 * }}
 * @constructor
 */
function Wot() {
  var wotUrlScorecardTemplate = 'https://link.adtidy.org/forward.html?action=wot_scorecard&from=main_menu&app=assistant&domain=';
  var WOT_URL = 'https://link.adtidy.org/forward.html?action=wot&from=main_menu&app=assistant';
  var wotData = null;
  var registerWotEventHandler = function registerWotEventHandler() {
    var wotDataCb = function wotDataCb(data) {
      wotData = data;
    };
    if (window.WotData) {
      wotData = window.WotData;
    } else {
      window.WotData = wotDataCb;
    }
  };
  var getWotData = function getWotData() {
    return wotData;
  };
  var getWotScorecardUrl = function getWotScorecardUrl(url) {
    return "".concat(wotUrlScorecardTemplate).concat(url);
  };
  return {
    registerWotEventHandler: registerWotEventHandler,
    getWotData: getWotData,
    getWotScorecardUrl: getWotScorecardUrl,
    WOT_URL: WOT_URL
  };
}
var wot = new Wot();
/* harmony default export */ const src_wot = (wot);
;// ./src/utils/common-utils.js
var cropDomain = function cropDomain(domain) {
  return domain.replace('www.', '').replace(/:\d+/, '');
};

/**
 * Force clear the page cache
 * see: https://stackoverflow.com/questions/10719505/force-a-reload-of-page-in-chrome-using-javascript-no-cache/27058362#27058362
 * @param callback
 */
var bypassCache = function bypassCache(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', window.location.href, true);
  xhr.setRequestHeader('Pragma', 'no-cache');
  xhr.setRequestHeader('Expires', '-1');
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && callback) {
      callback();
    }
  };
  xhr.send();
};

/**
 * Reload page after bypassing cache
 */
var reloadPageBypassCache = function reloadPageBypassCache() {
  bypassCache(function () {
    window.location.reload(true);
  });
};

/**
 * Multiple event handler helper.
 * @param {Object}  elements  element or nodeList.
 * @param {String}  events    multiple events divided by space.
 * @param {Function}  eventHandler   event handler.
 * @param {Boolean}  useCapture   capture.
 * @return {Function} add/remove.
 */
var events = {
  add: function add(elements, es, eventHandler, useCapture) {
    this.addRemoveEvents(true, elements, es, eventHandler, useCapture);
  },
  remove: function remove(elements, es, eventHandler, useCapture) {
    this.addRemoveEvents(false, elements, es, eventHandler, useCapture);
  },
  // eslint-disable-next-line consistent-return
  addRemoveEvents: function addRemoveEvents(add, elements, es, eventHandler, useCapture) {
    if (!elements || !es || !eventHandler) {
      return false;
    }
    var eventList = es.split(' ');
    if (!eventList || eventList.length < 1) {
      return false;
    }
    if (!elements.length) {
      // eslint-disable-next-line no-param-reassign
      elements = new Array(elements);
    }
    for (var el = 0; el < elements.length; el += 1) {
      for (var evt = 0; evt < eventList.length; evt += 1) {
        if (!eventList[evt] || !eventList[evt].length) {
          // eslint-disable-next-line no-continue
          continue;
        }
        if (add) {
          elements[el].addEventListener(eventList[evt], eventHandler, !!useCapture);
        } else {
          elements[el].removeEventListener(eventList[evt], eventHandler, !!useCapture);
        }
      }
    }
  }
};

/**
 * Common utils
 * @type {{
 * cropDomain: Function,
 * bypassCache: Function,
 * reloadPageBypassCache: Function,
 * events: Object
 * }}
 */
var CommonUtils = {
  cropDomain: cropDomain,
  bypassCache: bypassCache,
  reloadPageBypassCache: reloadPageBypassCache,
  events: events
};
/* harmony default export */ const common_utils = ((/* unused pure expression or super */ null && (CommonUtils)));
;// ./src/log.js
function log_typeof(o) { "@babel/helpers - typeof"; return log_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, log_typeof(o); }
/* global DEBUG */
/**
 * Simple logger with log levels
 * @returns {{
 *  warn: warn,
 *  info: info,
 *  debug: debug,
 *  error: error
 * }}
 * @constructor
 */
function Log() {
  var currentLevel =  false ? 0 : 'ERROR';
  var LogLevels = {
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4
  };
  var print = function print(level, method, args) {
    // check log level
    if (LogLevels[currentLevel] < LogLevels[level]) {
      return;
    }
    if (!args || args.length === 0 || !args[0]) {
      return;
    }
    var formatted;
    if (log_typeof(args[0]) === 'object') {
      // eslint-disable-next-line prefer-destructuring
      formatted = args[0];
    } else {
      var str = "".concat(args[0]);
      // eslint-disable-next-line no-param-reassign
      args = Array.prototype.slice.call(args, 1);
      formatted = str.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
      });
      if (LogLevels[level] >= LogLevels[currentLevel]) {
        var now = new Date();
        formatted = "".concat(now.toISOString(), ": ").concat(formatted);
      }
    }
    // eslint-disable-next-line no-console
    console[method](formatted);
  };
  var debug = function debug() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    print('DEBUG', 'log', args);
  };
  var info = function info() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    print('INFO', 'info', args);
  };
  var warn = function warn() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    print('WARN', 'info', args);
  };
  var error = function error() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    print('ERROR', 'error', args);
  };
  return {
    debug: debug,
    info: info,
    warn: warn,
    error: error
  };
}
var log = new Log();
/* harmony default export */ const src_log = (log);
;// ./src/upgradeHelper.js
function upgradeHelper_typeof(o) { "@babel/helpers - typeof"; return upgradeHelper_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, upgradeHelper_typeof(o); }
function upgradeHelper_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function upgradeHelper_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, upgradeHelper_toPropertyKey(o.key), o); } }
function upgradeHelper_createClass(e, r, t) { return r && upgradeHelper_defineProperties(e.prototype, r), t && upgradeHelper_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function upgradeHelper_toPropertyKey(t) { var i = upgradeHelper_toPrimitive(t, "string"); return "symbol" == upgradeHelper_typeof(i) ? i : i + ""; }
function upgradeHelper_toPrimitive(t, r) { if ("object" != upgradeHelper_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != upgradeHelper_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* eslint-disable no-param-reassign */
/**
 * Helper for backward compatibility
 * @returns {{}}
 * @constructor
 */
var UpgradeHelper = /*#__PURE__*/function () {
  function UpgradeHelper() {
    upgradeHelper_classCallCheck(this, UpgradeHelper);
    this.Constants = {
      BUTTON_POSITION_ITEM_NAME: '__adbpos'
    };
  }
  return upgradeHelper_createClass(UpgradeHelper, [{
    key: "getButtonPositionData",
    value: function getButtonPositionData() {
      try {
        var userPosition = localStorage.getItem(this.Constants.BUTTON_POSITION_ITEM_NAME);
        if (userPosition) {
          return src_protectedApi.json.parse(userPosition);
        }
        return undefined;
      } catch (ex) {
        src_log.error(ex);
        return undefined;
      }
    }
  }, {
    key: "removeUserPositionForButton",
    value: function removeUserPositionForButton() {
      try {
        localStorage.removeItem(this.Constants.BUTTON_POSITION_ITEM_NAME);
      } catch (ex) {
        src_log.error(ex);
      }
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "upgradeGmStorage",
    value: function upgradeGmStorage(settings, version) {
      settings.personal = {};
      settings.scriptVersion = version;
      settings.personalConfig = true;
      return settings;
    }

    // Helper for assistant update from 4.1 to 4.2
  }, {
    key: "upgradeLocalStorage",
    value: function upgradeLocalStorage(settings, sitename) {
      var position = this.getButtonPositionData();
      if (position) {
        if (!settings.personal[sitename]) {
          settings.personal[sitename] = {};
        }
        settings.personal[sitename].position = position;
        settings.personal[sitename].largeIcon = settings.largeIcon;
      }
      this.removeUserPositionForButton();
      return settings;
    }
  }]);
}();
var upgradeHelper = new UpgradeHelper();
/* harmony default export */ const src_upgradeHelper = (upgradeHelper);
;// ./src/gm.js
/* harmony default export */ const gm = ({});
;// ./src/settings.js
function settings_typeof(o) { "@babel/helpers - typeof"; return settings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, settings_typeof(o); }






/**
 * Object that manages user settings.
 * @returns {{
 * Constants: {
 *  MINIMUM_IE_SUPPORTED_VERSION: number,
 *  MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number,
 *  BUTTON_POSITION_ITEM_NAME: string,
 *  IFRAME_ID: string
 * },
 * MenuItemsNames: {
 *  DetailedMenu: string,
 *  SelectorMenu: string,
 *  SliderMenu: string,
 *  BlockPreview: string,
 *  SettingsMenu: string
 * },
 * getSettings: getSettings,
 * loadSettings: loadSettings,
 * getWotData: getWotData,
 * setWotData: setWotData,
 * saveSettings: saveSettings,
 * getUserPositionForButton: getUserPositionForButton,
 * removeUserPositionForButton: removeUserPositionForButton,
 * selectedElement: *,
 * setAdguardSettings: setAdguardSettings,
 * getAdguardSettings: getAdguardSettings
 * }}
 * @constructor
 */
function Settings() {
  var Constants = {
    MINIMUM_IE_SUPPORTED_VERSION: 10,
    MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
    IFRAME_ID: 'adguard-assistant-dialog',
    REPORT_URL: 'https://link.adtidy.org/forward.html?action=site_report_page&domain={0}&from=main_menu&app=assistant'
  };
  var MenuItemsNames = {
    DetailedMenu: 'mainMenu.html',
    SelectorMenu: 'selectorMenu.html',
    SliderMenu: 'sliderMenu.html',
    BlockPreview: 'blockPreview.html',
    SettingsMenu: 'settingsMenu.html'
  };

  /**
   * Config data stored in GM storage
   * @typedef {Object} DefaultConfig
   * @property {boolean} buttonPositionTop - Static button position from top.
   * @property {boolean} buttonPositionLeft - Static button position from left.
   * @property {boolean} smallIcon - Button size. true - small, false - large.
   * @property {boolean} personalConfig - Is the settings save for all
   * sites or for each site individually.
   * @property {number} scriptVersion - Version of scheme. 2 is set since assistant version 4.2.
   * @property {object} personal - Object config that may includes the same properties,
   * except `scriptVersion`, but for each site individually.
   */
  var DefaultConfig = {
    buttonPositionTop: false,
    buttonPositionLeft: false,
    smallIcon: false,
    personalConfig: true,
    scriptVersion: 2,
    personal: {}
  };
  var wotData = null;
  var Config = null;
  var adguardSettings = null;
  var SITENAME = window.location.host;
  var getSettings = function getSettings() {
    return gm.getValue('settings').then(function (config) {
      try {
        return config && src_protectedApi.json.parse(config);
      } catch (ex) {
        src_log.error(ex);
        return null;
      }
    });
  };
  var validateSettings = function validateSettings(settings) {
    if (!settings) {
      src_log.error('Invalid settings object');
      return false;
    }
    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (var prop in settings) {
      // eslint-disable-next-line no-prototype-builtins
      if (!settings.hasOwnProperty(prop)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      var property = DefaultConfig[prop];
      if (property && settings_typeof(property) !== settings_typeof(settings[prop])) {
        src_log.error('Invalid settings object');
        return false;
      }
    }
    if (settings.scriptVersion > DefaultConfig.scriptVersion) {
      src_log.error('Invalid settings object');
      return false;
    }
    if (settings.scriptVersion < DefaultConfig.scriptVersion) {
      src_log.info('Settings object is outdated. Updating...');
      // eslint-disable-next-line no-param-reassign
      settings = src_upgradeHelper.upgradeGmStorage(settings, DefaultConfig.scriptVersion);
    }

    // save to gm store position data from localStorage
    // eslint-disable-next-line no-param-reassign
    settings = src_upgradeHelper.upgradeLocalStorage(settings, SITENAME);
    return settings;
  };
  var loadSettings = function loadSettings(showButton) {
    src_log.debug('Trying to get settings');

    // getting config from gm storage
    getSettings().then(function (config) {
      // check and validate config data for prevent errors and backward compatibility
      var checkedConfig = config && validateSettings(config);
      if (checkedConfig) {
        // saving existing settings to Config variable in the gm storage
        Config = checkedConfig;
        src_log.debug('Settings parsed successfully');
      } else {
        // use default settings without saving
        Config = DefaultConfig;
        src_log.debug('No settings found');
      }
      showButton();
    });
  };
  var saveSettings = function saveSettings(config) {
    if (config) {
      Config = config;
    }
    src_log.debug('Update settings...');
    src_log.debug(Config);
    gm.setValue('settings', Config);
    bypassCache();
  };
  var getWotData = wotData;
  var setWotData = function setWotData(data) {
    wotData = data;
  };
  var setAdguardSettings = function setAdguardSettings(settings) {
    if (typeof settings === 'undefined') {
      src_log.info('No Adguard API Found');
      return;
    }
    adguardSettings = settings;
  };
  var getAdguardSettings = function getAdguardSettings() {
    return adguardSettings;
  };
  var getUserPositionForButton = function getUserPositionForButton() {
    var userPosition;
    if (Config.personalConfig) {
      if (Config.personal && Config.personal[SITENAME]) {
        userPosition = Config.personal[SITENAME].position;
      }
    } else {
      userPosition = Config.position;
    }
    if (userPosition) {
      return userPosition;
    }
    return null;
  };
  var setUserPositionForButton = function setUserPositionForButton(position) {
    if (Config.personalConfig) {
      if (!Config.personal[SITENAME]) {
        Config.personal[SITENAME] = {};
      }
      Config.personal[SITENAME].position = position;
    } else {
      Config.position = position;
    }
    saveSettings(Config);
  };
  var setIconSize = function setIconSize(smallIcon) {
    if (Config.personalConfig) {
      Config.personal[SITENAME].smallIcon = smallIcon;
    } else {
      Config.smallIcon = smallIcon;
    }
  };
  var getIconSize = function getIconSize() {
    if (Config.personalConfig && Config.personal && Config.personal[SITENAME]) {
      return Config.personal[SITENAME].smallIcon;
    }
    return Config.smallIcon;
  };

  /**
   * Set the parameters to which corner of the browser
   * window the button position is placed by option (not drag)
   */
  var setButtonSide = function setButtonSide(buttonSides) {
    if (Config.personalConfig) {
      delete Config.personal[SITENAME].position;
      Config.personal[SITENAME].buttonPositionTop = buttonSides.top;
      Config.personal[SITENAME].buttonPositionLeft = buttonSides.left;
    } else {
      delete Config.position;
      Config.buttonPositionTop = buttonSides.top;
      Config.buttonPositionLeft = buttonSides.left;
    }
  };

  /**
   * Save a setting that specifies how to save button settings: for all sites or only on this
   */
  var setPersonalParam = function setPersonalParam(personalConfig) {
    Config.personalConfig = personalConfig;
    if (Config.personalConfig && !Config.personal) {
      Config.personal = {};
    }
    if (Config.personalConfig && !Config.personal[SITENAME]) {
      Config.personal[SITENAME] = {};
      Config.personal[SITENAME].position = Config.position;
    }
    if (!Config.personalConfig && Config.personal) {
      Config.position = Config.personal[SITENAME] && Config.personal[SITENAME].position;
      delete Config.personal;
    }
  };

  /**
   * Get config that specifies how to save button settings: for all sites or only on this
   */
  var getPersonalConfig = function getPersonalConfig() {
    return Config.personalConfig;
  };

  /**
   * Get the option to which corner of the browser window the button position is placed
   * @return {Object}
   */
  var getButtonSide = function getButtonSide() {
    var config = Config;
    if (config.personalConfig && config.personal && config.personal[SITENAME]) {
      return {
        top: config.personal[SITENAME].buttonPositionTop,
        left: config.personal[SITENAME].buttonPositionLeft
      };
    }
    return {
      top: config.buttonPositionTop,
      left: config.buttonPositionLeft
    };
  };
  return {
    Constants: Constants,
    MenuItemsNames: MenuItemsNames,
    getSettings: getSettings,
    loadSettings: loadSettings,
    getWotData: getWotData,
    setWotData: setWotData,
    saveSettings: saveSettings,
    getUserPositionForButton: getUserPositionForButton,
    getButtonSide: getButtonSide,
    setIconSize: setIconSize,
    setUserPositionForButton: setUserPositionForButton,
    setAdguardSettings: setAdguardSettings,
    setPersonalParam: setPersonalParam,
    setButtonSide: setButtonSide,
    getAdguardSettings: getAdguardSettings,
    getIconSize: getIconSize,
    getPersonalConfig: getPersonalConfig
  };
}
var settings = new Settings();
/* harmony default export */ const src_settings = (settings);
// EXTERNAL MODULE: ./src/templates/button.html
var templates_button = __webpack_require__(8523);
var button_default = /*#__PURE__*/__webpack_require__.n(templates_button);
// EXTERNAL MODULE: ./src/templates/mainMenu.html
var mainMenu = __webpack_require__(817);
var mainMenu_default = /*#__PURE__*/__webpack_require__.n(mainMenu);
// EXTERNAL MODULE: ./src/templates/selectorMenu.html
var selectorMenu = __webpack_require__(2013);
var selectorMenu_default = /*#__PURE__*/__webpack_require__.n(selectorMenu);
// EXTERNAL MODULE: ./src/templates/settingsMenu.html
var settingsMenu = __webpack_require__(6109);
var settingsMenu_default = /*#__PURE__*/__webpack_require__.n(settingsMenu);
// EXTERNAL MODULE: ./src/templates/sliderMenu.html
var sliderMenu = __webpack_require__(2725);
var sliderMenu_default = /*#__PURE__*/__webpack_require__.n(sliderMenu);
// EXTERNAL MODULE: ./src/templates/blockPreview.html
var blockPreview = __webpack_require__(6088);
var blockPreview_default = /*#__PURE__*/__webpack_require__.n(blockPreview);
// EXTERNAL MODULE: ./src/templates/mobilePopup.html
var mobilePopup = __webpack_require__(1903);
var mobilePopup_default = /*#__PURE__*/__webpack_require__.n(mobilePopup);
// EXTERNAL MODULE: ./src/templates/mobileMenu.html
var mobileMenu = __webpack_require__(2902);
var mobileMenu_default = /*#__PURE__*/__webpack_require__.n(mobileMenu);
// EXTERNAL MODULE: ./src/templates/svgIcons.html
var svgIcons = __webpack_require__(2079);
var svgIcons_default = /*#__PURE__*/__webpack_require__.n(svgIcons);
// EXTERNAL MODULE: ./src/styles/base/base-common.less
var base_common = __webpack_require__(742);
var base_common_default = /*#__PURE__*/__webpack_require__.n(base_common);
// EXTERNAL MODULE: ./src/styles/button.less
var styles_button = __webpack_require__(5037);
var styles_button_default = /*#__PURE__*/__webpack_require__.n(styles_button);
// EXTERNAL MODULE: ./src/styles/menu.less
var menu = __webpack_require__(8914);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);
// EXTERNAL MODULE: ./src/styles/selector.less
var selector = __webpack_require__(9060);
var selector_default = /*#__PURE__*/__webpack_require__.n(selector);
// EXTERNAL MODULE: ./src/styles/mobile-style.less
var mobile_style = __webpack_require__(3131);
var mobile_style_default = /*#__PURE__*/__webpack_require__.n(mobile_style);
;// ./src/inline-resources.js














var CSS = {
  common: (base_common_default()),
  button: (styles_button_default()),
  iframe: (menu_default()),
  selector: (selector_default()),
  mobile: (mobile_style_default())
};
var HTML = {
  button: (button_default()),
  detailed_menu: (mainMenu_default()),
  selector_menu: (selectorMenu_default()),
  settings_menu: (settingsMenu_default()),
  slider_menu: (sliderMenu_default()),
  preview: (blockPreview_default()),
  popup: (mobilePopup_default()),
  mobile_menu: (mobileMenu_default()),
  svg_icons: (svgIcons_default())
};
;// ./src/event.js
/**
 * Custom event
 * @returns {{attach: attach, notify: notify}}
 * @constructor
 */
function CustomEvent() {
  // jshint ignore:line
  var listeners = [];
  var attach = function attach(listener) {
    listeners.push(listener);
  };
  var notify = function notify(args) {
    for (var i = 0; i < listeners.length; i += 1) {
      listeners[i](args);
    }
  };
  return {
    attach: attach,
    notify: notify
  };
}
;// ./src/utils/dom-utils.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Returns tag name for passed element
 * @param {Element} element target element
 */
var getNodeName = function getNodeName(element) {
  return element && element.nodeName ? element.nodeName.toUpperCase() : '';
};

/**
 * Returns arrays of parents for passed element
 * @param {Element} element target element
 */
var getParentsLevel = function getParentsLevel(element) {
  var parent = element;
  var parentArr = [];
  // eslint-disable-next-line no-cond-assign
  while ((parent = parent.parentNode) && getNodeName(parent) !== 'BODY') {
    parentArr.push(parent);
  }
  return parentArr;
};

/**
 * Returns child element if it only one ELEMENT_NODE child
 * @param {Element} element target element
 */
// eslint-disable-next-line consistent-return
var getSingleChildren = function getSingleChildren(element) {
  var children = element.childNodes;
  if (children) {
    var count = 0;
    var child;
    for (var i = 0; i < children.length; i += 1) {
      if (children[i].nodeType === 1) {
        child = children[i];
        count += 1;
      }
    }
    return count === 1 ? child : null;
  }
};

/**
 * Returns all children for target element
 * @param {Element} element target element
 */
var getAllChildren = function getAllChildren(element) {
  var childArray = [];
  var child = element;
  // eslint-disable-next-line no-cond-assign
  while (child = getSingleChildren(child)) {
    childArray.push(child);
  }
  return childArray;
};

/**
 * Converts passed argument to array
 * Usually used for transformatin NodeList to simple Array
 * @param {any} elems
 */
var toArray = function toArray(elems) {
  return elems && elems.length !== undefined ? Array.prototype.slice.call(elems) : [elems];
};

/**
 * Adds passed classes to target element
 * @param {Element} elem target element
 * @param {string} className string where classess must be separeted with space
 */
var addClass = function addClass(elem, className) {
  var elems = toArray(elem);
  elems.forEach(function (item) {
    var classList = item.classList;
    classList.add.apply(classList, _toConsumableArray(className.split(/\s/)));
  });
};

/**
 * Removes passed classes from target element
 * @param {Element} elem target element
 * @param {string} className string where classess must be separeted with space
 */
var removeClass = function removeClass(elem, className) {
  var elems = toArray(elem);
  elems.forEach(function (item) {
    var classList = item.classList;
    classList.remove.apply(classList, _toConsumableArray(className.split(/\s/)));
  });
};

/**
 * Checks whether class in target element
 * @param {Element} elem target element
 * @param {string} className target classname
 */
var hasClass = function hasClass(elem, className) {
  var elems = toArray(elem);
  var _elems = _slicedToArray(elems, 1),
    target = _elems[0];
  return !!(target.classList && target.classList.contains(className));
};

/**
 * Makes element visible via style.display = block
 * @param {Element} elem target element
 */
var show = function show(elem) {
  var elems = toArray(elem);
  elems.forEach(function (item) {
    // eslint-disable-next-line no-param-reassign
    item.style.display = 'block';
  });
};

/**
 * Makes element invisible via style.display = none
 * @param {Element} elem target element
 */
var hide = function hide(elem) {
  var elems = toArray(elem);
  elems.forEach(function (item) {
    // eslint-disable-next-line no-param-reassign
    item.style.display = 'none';
  });
};

/**
 * Inlines css styles to target element
 * @param {Element} elem target element
 * @param {string} attr css name
 * @param {string} value css value
 */
var addStyle = function addStyle(elem, attr, value) {
  var elems = toArray(elem);
  elems.forEach(function (item) {
    // eslint-disable-next-line no-param-reassign
    item.style[attr] = value;
  });
};
// EXTERNAL MODULE: ./locales/index.js
var locales = __webpack_require__(3412);
;// ./src/localization.js
function localization_typeof(o) { "@babel/helpers - typeof"; return localization_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, localization_typeof(o); }
function localization_slicedToArray(r, e) { return localization_arrayWithHoles(r) || localization_iterableToArrayLimit(r, e) || localization_unsupportedIterableToArray(r, e) || localization_nonIterableRest(); }
function localization_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function localization_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return localization_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? localization_arrayLikeToArray(r, a) : void 0; } }
function localization_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function localization_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function localization_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global AdguardSettings */


var _require = __webpack_require__(6539),
  _require2 = localization_slicedToArray(_require, 1),
  BASE_LOCALE = _require2[0].base_locale;

/**
 * Object that manages localizations
 * @returns {{getMessage: Function, translateElement: Function}}
 * @constructor
 */
function Localization() {
  var currentLocale = null;
  var locale;

  // convert locales keys to lower case
  var supportedLocales = Object.keys(locales["default"]).reduce(function (acc, key) {
    var lowerCasedKey = key.toLowerCase();
    acc[lowerCasedKey] = locales["default"][key];
    return acc;
  }, {});

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
    locale = BASE_LOCALE;
  }
  if (supportedLocales[locale]) {
    currentLocale = locale;
  } else if (supportedLocales[locale.toLowerCase()]) {
    currentLocale = locale.toLowerCase();
  } else {
    var langSplit = locale.split('-')[0];
    if (supportedLocales[langSplit]) {
      currentLocale = langSplit;
    } else {
      currentLocale = BASE_LOCALE;
    }
  }
  var getMessage = function getMessage(messageId) {
    var message = supportedLocales[currentLocale][messageId];
    if (!message) {
      return localization_typeof(supportedLocales[BASE_LOCALE][messageId]) === 'object' ? supportedLocales[BASE_LOCALE][messageId].message : supportedLocales[BASE_LOCALE][messageId] || '';
    }
    return supportedLocales[currentLocale][messageId].message || supportedLocales[currentLocale][messageId];
  };
  var createElement = function createElement(tagName, attributes) {
    var el = src_protectedApi.createElement(tagName);
    if (!attributes) {
      return el;
    }
    var attrs = attributes.split(/([a-z]+='[^']+')/);
    for (var i = 0; i < attrs.length; i += 1) {
      var attr = attrs[i].trim();
      if (!attr) {
        // eslint-disable-next-line no-continue
        continue;
      }
      var index = attr.indexOf('=');
      var attrName = void 0;
      var attrValue = void 0;
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
  var _processString = function processString(str, element) {
    var el;
    var match1 = /^([^]*?)<(a|strong|span|i)([^>]*)>(.*?)<\/\2>([^]*)$/m.exec(str);
    var match2 = /^([^]*?)<(br|input)([^>]*)\/?>([^]*)$/m.exec(str);
    if (match1) {
      _processString(match1[1], element);
      el = createElement(match1[2], match1[3]);
      _processString(match1[4], el);
      element.appendChild(el);
      _processString(match1[5], element);
    } else if (match2) {
      _processString(match2[1], element);
      el = createElement(match2[2], match2[3]);
      element.appendChild(el);
      _processString(match2[4], element);
    } else {
      element.appendChild(document.createTextNode(str.replace(/&nbsp;/g, "\xA0")));
    }
  };
  var translateElement = function translateElement(element, message) {
    try {
      while (element.lastChild) {
        element.removeChild(element.lastChild);
      }
      _processString(message, element);
    } catch (ex) {
      // Ignore exceptions
    }
  };
  return {
    getMessage: getMessage,
    translateElement: translateElement
  };
}
var localization = new Localization();
/* harmony default export */ const src_localization = (localization);
;// ./src/controllers/mainMenuController.js









/**
 * Main menu controller
 * @param iframe
 * @returns {{init: init}}
 * @constructor
 */
function DetailedMenuController(iframe) {
  var contentDocument = null;
  var iframeCtrl = iframe;
  var domain = null;
  var FILTERING_STATE_LS_PROPERTY = '__adfstate';
  var CONFIDENCE_LEVEL = {
    ZERO: {
      from: 0,
      to: 5
    },
    ONE: {
      from: 6,
      to: 11
    },
    TWO: {
      from: 12,
      to: 22
    },
    THREE: {
      from: 23,
      to: 33
    },
    FOUR: {
      from: 34,
      to: 44
    },
    FIVE: {
      from: 45,
      to: Infinity
    }
  };
  var setDomain = function setDomain() {
    domain = decodeURIComponent(window.location.hostname);
    contentDocument.getElementsByClassName('menu-head_name')[0].textContent = domain || 'unknown';
  };
  var truncateDecimals = function truncateDecimals(number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
  };
  var getWotReputationSettings = function getWotReputationSettings(wotData) {
    if (!wotData) {
      return null;
    }
    var prefix = 'adg-wot-';
    var averageWot = wotData.reputation;
    var wotRatingText = null;
    var wotRating = null;
    if (averageWot === 0) {
      wotRatingText = src_localization.getMessage('wot_unknown_description');
      wotRating = "".concat(prefix, "unknown");
      return {
        text: wotRatingText,
        "class": wotRating
      };
    }
    var wotSettings = {
      0: {
        color: 'red',
        string: src_localization.getMessage('wot_bad_description')
      },
      1: {
        color: 'lightRed',
        string: src_localization.getMessage('wot_poor_description')
      },
      2: {
        color: 'yellow',
        string: src_localization.getMessage('wot_unsatisfactory_description')
      },
      3: {
        color: 'lightGreen',
        string: src_localization.getMessage('wot_good_description')
      },
      4: {
        color: 'green',
        string: src_localization.getMessage('wot_excellent_description')
      },
      5: {
        color: 'green',
        string: src_localization.getMessage('wot_excellent_description')
      }
    };
    var current = wotSettings[truncateDecimals(averageWot / 20)];
    wotRatingText = current.string;
    wotRating = prefix + current.color;
    return {
      text: wotRatingText,
      "class": wotRating
    };
  };
  var getWotConfidenceClass = function getWotConfidenceClass(wotData) {
    if (!wotData) {
      return null;
    }
    var prefix = 'adg-wot-confidence-';
    var isThisLevel = function isThisLevel(num, level) {
      return num >= level.from && num <= level.to;
    };
    var confidenceWot = wotData.confidence;
    if (isThisLevel(confidenceWot, CONFIDENCE_LEVEL.ZERO)) {
      return "".concat(prefix, "0");
    }
    if (isThisLevel(confidenceWot, CONFIDENCE_LEVEL.ONE)) {
      return "".concat(prefix, "1");
    }
    if (isThisLevel(confidenceWot, CONFIDENCE_LEVEL.TWO)) {
      return "".concat(prefix, "2");
    }
    if (isThisLevel(confidenceWot, CONFIDENCE_LEVEL.THREE)) {
      return "".concat(prefix, "3");
    }
    if (isThisLevel(confidenceWot, CONFIDENCE_LEVEL.FOUR)) {
      return "".concat(prefix, "4");
    }
    if (isThisLevel(confidenceWot, CONFIDENCE_LEVEL.FIVE)) {
      return "".concat(prefix, "5");
    }
    return undefined;
  };
  var setWotData = function setWotData() {
    var wotData = src_wot.getWotData();
    var wotReputationSettings = getWotReputationSettings(wotData);
    if (!wotReputationSettings) {
      return;
    }
    var wotIndication = contentDocument.querySelector('#WotIndication');
    addClass(wotIndication, wotReputationSettings["class"]);
    wotIndication.dataset.title = src_localization.getMessage('menu_wot_reputation_indicator');
    var wotDescriptionText = contentDocument.querySelector('#WotDescriptionText');
    var wotLogo = '<span id="WotLogo"><span class="wot-logo"></span></span>';
    src_protectedApi.setInnerHtml(wotDescriptionText, wotReputationSettings.text.replace('$1', wotLogo));
    var confidenceIndication = contentDocument.querySelector('#ConfidenceIndication');
    var wotConfidenceClass = getWotConfidenceClass(wotData);
    addClass(confidenceIndication, wotConfidenceClass);
    wotIndication.dataset.title = src_localization.getMessage('menu_wot_reputation_confidence_level');
    var wotLinkElem = contentDocument.querySelector('.wot-indicator');
    wotLinkElem.href = src_wot.getWotScorecardUrl(domain);
    removeClass(contentDocument.querySelectorAll('.wot-hide'), 'wot-hide');
  };
  var startAdSelector = function startAdSelector() {
    iframeCtrl.showSelectorMenu();
  };
  var goToWotUrl = function goToWotUrl() {
    window.open(src_wot.WOT_URL, '_blank');
  };
  var doNotBlock = function doNotBlock() {
    gm.ADG_temporaryDontBlock(30, function () {
      reloadPageBypassCache();
    });
  };
  var reportAbuse = function reportAbuse() {
    gm.ADG_sendAbuse(function () {
      iframeCtrl.removeIframe();
    });
  };
  var goToSiteReport = function goToSiteReport() {
    var url = src_settings.Constants.REPORT_URL.replace('{0}', domain);
    window.open(url, '_blank');
  };
  var showHideBlockAdButton = function showHideBlockAdButton(isFilter) {
    var blockAd = contentDocument.querySelector('#block-ad');
    if (isFilter) {
      removeClass(blockAd, 'hidden');
    } else {
      addClass(blockAd, 'hidden');
    }
    iframeCtrl.resizeIframe();
  };

  /**
   * Storing the filtering state for quick initialization
   *
   * @param {Boolean} state  on/off filtering state
   */
  // eslint-disable-next-line consistent-return
  var setFilteringStateToStore = function setFilteringStateToStore(state) {
    try {
      localStorage.setItem(FILTERING_STATE_LS_PROPERTY, src_protectedApi.json.stringify({
        state: state
      }));
    } catch (ex) {
      src_log.error(ex);
      return null;
    }
  };
  var onIsFilterChange = function onIsFilterChange() {
    var isFilter = contentDocument.getElementById('is-filter').checked;

    // animate class for prevent animation while the state from the application is determined
    addClass(contentDocument.querySelectorAll('.menu-filter_label'), 'animate');
    showHideBlockAdButton(isFilter);
    setFilteringStateToStore(isFilter);
    gm.ADG_changeFilteringState(isFilter, function () {
      reloadPageBypassCache();
    });
  };
  var bindEvents = function bindEvents() {
    var menuEvents = {
      '.close': iframeCtrl.removeIframe,
      '#block-ad': startAdSelector,
      '#assistant-settings': iframeCtrl.showSettingsMenu,
      '#WotLogo': goToWotUrl,
      '#do-not-block-30-sec': doNotBlock,
      '#report-abuse': reportAbuse,
      '#site-report': goToSiteReport,
      '#is-filter': onIsFilterChange
    };
    Object.keys(menuEvents).forEach(function (item) {
      var elems = contentDocument.querySelectorAll(item);
      toArray(elems).forEach(function (elem) {
        return elem.addEventListener('click', menuEvents[item]);
      });
    });
  };

  /**
   * Getting the filtering state for quick initialization from the localStorage,
   * while the state from the application is determined
   *
   * @returns {Boolean} on/off filtering state
   */
  var getFilteringStateFromStore = function getFilteringStateFromStore() {
    try {
      var state = localStorage.getItem(FILTERING_STATE_LS_PROPERTY);
      if (state) {
        return src_protectedApi.json.parse(state).state;
      }
      return false;
    } catch (ex) {
      src_log.error(ex);
      return false;
    }
  };
  var setInitFilteringState = function setInitFilteringState() {
    var input = contentDocument.getElementById('is-filter');
    input.checked = getFilteringStateFromStore();
    gm.ADG_isFiltered(function (isFiltered) {
      input.checked = isFiltered;
      setFilteringStateToStore(isFiltered);
      showHideBlockAdButton(isFiltered);
    });
  };

  /*
   Called from IframeController._showMenuItem to initialize view
   */
  // eslint-disable-next-line no-shadow
  var init = function init(iframe) {
    // eslint-disable-next-line prefer-destructuring
    contentDocument = iframe.contentDocument;
    setDomain();
    setWotData();
    bindEvents();
    setInitFilteringState();
  };
  return {
    init: init
  };
}
;// ./src/adguard-selector.js
function adguard_selector_typeof(o) { "@babel/helpers - typeof"; return adguard_selector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, adguard_selector_typeof(o); }
/* eslint-disable no-param-reassign, func-names */



/**
 * Adguard selector
 * @type {Function}
 */
function AdguardSelector() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var PLACEHOLDER_PREFIX = 'adguard-placeholder';
  var placeholdedElements = null;
  var transparentPlaceholdedElement = null;
  var restrictedElements = null;
  var SELECTED_CLASS = 'adguard_sg_selected';
  var REJECTED_CLASS = 'adguard_sg_rejected';
  var IGNORED_CLASS = 'adguard_sg_ignore';
  var unbound = true;
  var onElementSelectedHandler = null;
  var ignoreTouchEvent = 0;
  var selectionRenderer;

  // PRIVATE METHODS

  var removeClassName = function removeClassName(className) {
    var elem = document.querySelectorAll(".".concat(className));
    removeClass(elem, className);
  };
  var firstSelectedOrSuggestedParent = function firstSelectedOrSuggestedParent(element) {
    if (hasClass(element, SELECTED_CLASS)) {
      return element;
    }

    // eslint-disable-next-line no-cond-assign, no-param-reassign
    while (element.parentNode && (element = element.parentNode)) {
      if (restrictedElements.indexOf(element) === -1) {
        if (hasClass(element, SELECTED_CLASS)) {
          return element;
        }
      }
    }
    return null;
  };
  var px = function px(p) {
    return "".concat(p, "px");
  };
  var getTagPath = function getTagPath(element) {
    if (element.parentNode) {
      return "".concat(element.parentNode.tagName.toLowerCase(), " ").concat(element.tagName.toLowerCase());
    }
    return element.tagName.toLowerCase();
  };

  /** ******** Events ************** */
  var sgMouseoverHandler = function sgMouseoverHandler(e) {
    e.stopPropagation();
    if (unbound) {
      return true;
    }
    if (this === document.documentElement || this === document.documentElement.parentNode) {
      return false;
    }
    var parent = firstSelectedOrSuggestedParent(this);
    if (parent !== null && parent !== this) {
      selectionRenderer.add(parent);
    } else {
      selectionRenderer.add(this);
    }
    return false;
  };

  // e.isTrusted checking for prevent programmatically events
  // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
  var sgMousedownHandler = function sgMousedownHandler(e) {
    if (e && e.isTrusted === false) {
      return false;
    }
    if (hasClass(e.target, IGNORED_CLASS)) {
      return false;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    if (unbound) {
      return true;
    }
    var elem = e.target;
    var borders = elem === selectionRenderer.borderTop || elem === selectionRenderer.borderLeft || elem === selectionRenderer.borderRight || elem === selectionRenderer.borderBottom;
    if (borders) {
      // Clicked on one of our floating borders, target the element that we are bordering.
      elem = elem.target_elem || elem;
    }
    if (elem === document.documentElement || elem === document.documentElement.parentNode) {
      return undefined;
    }
    selectionRenderer.remove();
    onElementSelectedHandler(elem);
    return false;
  };

  /** ******** Touch event handlers ************** */
  var touchElementSelectHandler = function touchElementSelectHandler(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    sgMouseoverHandler.call(this, e);
    sgMousedownHandler.call(this, e);
  };
  var removeElementToPreventEvents = function removeElementToPreventEvents() {
    if (!transparentPlaceholdedElement) {
      return false;
    }
    transparentPlaceholdedElement.removeEventListener('click', touchElementSelectHandler);
    transparentPlaceholdedElement.removeEventListener('touchstart', touchElementSelectHandler);
    transparentPlaceholdedElement.removeEventListener('pointerdown', touchElementSelectHandler);
    transparentPlaceholdedElement.parentNode.removeChild(transparentPlaceholdedElement);
    transparentPlaceholdedElement = null;
    return undefined;
  };
  var clearSelected = function clearSelected() {
    removeElementToPreventEvents();
    removeClassName(SELECTED_CLASS);
    removeClassName(REJECTED_CLASS);
    selectionRenderer.remove();
  };

  /**
   * Returns element offset coordinates extended with width and height values.
   *
   * @param elem
   * @returns {{top: number, left: number, outerWidth: number, outerHeight: number}}
   */
  var getOffsetExtended = function getOffsetExtended(elem) {
    var bodyRect = document.documentElement.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();
    var rectTop = elemRect.top - bodyRect.top;
    var rectLeft = elemRect.left - bodyRect.left;
    return {
      top: rectTop,
      left: rectLeft,
      outerWidth: elem.offsetWidth,
      outerHeight: elem.offsetHeight
    };
  };

  /**
   * Adds borders to selected element.
   *
   * Default implementation of selection renderer.
   * Can be overwritten with custom implementation as a parameter of init function.
   *
   * @param element
   * @private
   */
  // eslint-disable-next-line no-shadow
  var BorderSelectionRenderer = function (api) {
    var BORDER_WIDTH = 5;
    var BORDER_PADDING = 2;
    var BORDER_CSS = {
      position: 'absolute',
      background: 'white',
      margin: '0px',
      padding: '0px',
      display: 'block',
      "float": 'none',
      border: '0',
      outline: '0',
      'background-color': '#13a35e',
      'font-style': 'normal',
      'vertical-align': 'baseline',
      'text-align': 'left',
      'line-height': '12px',
      'box-sizing': 'content-box',
      'min-height': 'auto',
      'max-height': 'auto',
      'min-width': 'auto',
      'max-width': 'auto',
      width: 0,
      height: 0,
      'z-index': 2147483646,
      'border-radius': 0
    };
    var BORDER_BOTTOM_CSS = {
      'font-size': '10px',
      'font-weight': 'bold',
      color: 'white',
      padding: '2px 0px 2px 5px',
      overflow: 'hidden'
    };
    var borderTop = null;
    var borderLeft = null;
    var borderRight = null;
    var borderBottom = null;
    var showBorders = function showBorders() {
      if (borderTop && borderBottom && borderLeft && borderRight) {
        show(borderTop);
        show(borderBottom);
        show(borderLeft);
        show(borderRight);
      }
    };
    var addBorderToDom = function addBorderToDom() {
      document.documentElement.appendChild(borderTop);
      document.documentElement.appendChild(borderBottom);
      document.documentElement.appendChild(borderLeft);
      document.documentElement.appendChild(borderRight);
    };
    var addBorderCSS = function addBorderCSS() {
      Object.keys(BORDER_CSS).forEach(function (item) {
        borderTop.style[item] = BORDER_CSS[item];
        borderBottom.style[item] = BORDER_CSS[item];
        borderLeft.style[item] = BORDER_CSS[item];
        borderRight.style[item] = BORDER_CSS[item];
      });
      Object.keys(BORDER_BOTTOM_CSS).forEach(function (item) {
        borderBottom.style[item] = BORDER_BOTTOM_CSS[item];
      });
    };
    var removeBorderFromDom = function removeBorderFromDom() {
      if (borderTop) {
        var parent = borderTop.parentNode;
        if (parent) {
          parent.removeChild(borderTop);
          parent.removeChild(borderBottom);
          parent.removeChild(borderLeft);
          parent.removeChild(borderRight);
        }
      }
      borderTop = null;
      borderBottom = null;
      borderRight = null;
      borderLeft = null;
    };

    /**
     * Preparing renderer.
     */
    api.init = function () {
      if (!borderTop) {
        var width = px(BORDER_WIDTH);
        var bottomHeight = px(BORDER_WIDTH + 6);
        borderTop = src_protectedApi.createElement('div');
        borderBottom = src_protectedApi.createElement('div');
        borderLeft = src_protectedApi.createElement('div');
        borderRight = src_protectedApi.createElement('div');
        borderTop.addEventListener('click', sgMousedownHandler);
        borderBottom.addEventListener('click', sgMousedownHandler);
        borderLeft.addEventListener('click', sgMousedownHandler);
        borderRight.addEventListener('click', sgMousedownHandler);
        addStyle(borderTop, 'height', width);
        addStyle(borderBottom, 'height', bottomHeight);
        addStyle(borderLeft, 'width', width);
        addStyle(borderRight, 'width', width);
        hide(borderTop);
        hide(borderBottom);
        hide(borderLeft);
        hide(borderRight);

        // eslint-disable-next-line prefer-destructuring
        api.borderTop = borderTop;
        // eslint-disable-next-line prefer-destructuring
        api.borderBottom = borderBottom;
        // eslint-disable-next-line prefer-destructuring
        api.borderLeft = borderLeft;
        // eslint-disable-next-line prefer-destructuring
        api.borderRight = borderRight;
        addBorderCSS();
        addBorderToDom();
      }
    };

    /**
     * Clearing DOM and so on.
     */
    api.finalize = function () {
      removeBorderFromDom();
    };

    /**
     * Adds borders to specified element
     *
     * @param element
     */
    api.add = function (element) {
      api.remove();
      if (!element) {
        return;
      }
      var p = getOffsetExtended(element);
      var top = p.top;
      var left = p.left;
      var width = p.outerWidth;
      var height = p.outerHeight;
      addStyle(borderTop, 'width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH * 2));
      addStyle(borderTop, 'height', px(5));
      addStyle(borderTop, 'top', px(top - BORDER_WIDTH - BORDER_PADDING));
      addStyle(borderTop, 'left', px(left - BORDER_PADDING - BORDER_WIDTH));
      addStyle(borderBottom, 'width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH));
      addStyle(borderBottom, 'height', px(12));
      addStyle(borderBottom, 'top', px(top + height + BORDER_PADDING));
      addStyle(borderBottom, 'left', px(left - BORDER_PADDING - BORDER_WIDTH));
      addStyle(borderLeft, 'height', px(height + BORDER_PADDING * 2));
      addStyle(borderLeft, 'width', px(5));
      addStyle(borderLeft, 'top', px(top - BORDER_PADDING));
      addStyle(borderLeft, 'left', px(left - BORDER_PADDING - BORDER_WIDTH));
      addStyle(borderRight, 'height', px(height + BORDER_PADDING * 2));
      addStyle(borderRight, 'width', px(5));
      addStyle(borderRight, 'top', px(top - BORDER_PADDING));
      addStyle(borderRight, 'left', px(left + width + BORDER_PADDING));
      borderBottom.textContent = getTagPath(element);
      borderRight.target_elem = element;
      borderLeft.target_elem = element;
      borderTop.target_elem = element;
      borderBottom.target_elem = element;
      showBorders();
    };

    /**
     * Removes borders
     */
    api.remove = function () {
      if (borderTop && borderBottom && borderLeft && borderRight) {
        hide(borderTop);
        hide(borderBottom);
        hide(borderLeft);
        hide(borderRight);
      }
    };
    return api;
    // eslint-disable-next-line no-use-before-define
  }(BorderSelectionRenderer || {});
  var linkHelper = src_protectedApi.createElement('a');
  var getHost = function getHost(url) {
    if (!url) {
      return '';
    }
    linkHelper.href = url;
    return linkHelper.hostname;
  };
  var makePlaceholderImage = function makePlaceholderImage(element) {
    var placeHolder = src_protectedApi.createElement('div');
    var style = window.getComputedStyle(element);
    placeHolder.style.height = style.height;
    placeHolder.style.width = style.width;
    placeHolder.style.position = style.position;
    placeHolder.style.top = style.top;
    placeHolder.style.bottom = style.bottom;
    placeHolder.style.left = style.left;
    placeHolder.style.right = style.right;
    placeHolder.className += "".concat(PLACEHOLDER_PREFIX, " ").concat(IGNORED_CLASS);
    var icon = src_protectedApi.createElement('div');
    icon.className += "".concat(PLACEHOLDER_PREFIX, "-icon ").concat(IGNORED_CLASS);
    var domain = src_protectedApi.createElement('div');
    domain.textContent = getHost(element.src);
    domain.className += "".concat(PLACEHOLDER_PREFIX, "-domain ").concat(IGNORED_CLASS);
    icon.appendChild(domain);
    placeHolder.appendChild(icon);
    return placeHolder;
  };
  var removePlaceholders = function removePlaceholders() {
    removeElementToPreventEvents();
    if (!placeholdedElements) {
      return;
    }
    var elements = placeholdedElements;
    for (var i = 0; i < elements.length; i += 1) {
      var current = elements[i];
      var id = PLACEHOLDER_PREFIX + i;
      var placeHolder = document.querySelector("#".concat(id));
      if (placeHolder) {
        var parent = placeHolder.parentNode;
        if (parent) {
          parent.replaceChild(current, placeHolder);
        }
      }
    }
    placeholdedElements = null;
  };
  var placeholderClick = function placeholderClick(element) {
    selectionRenderer.remove();
    removePlaceholders();
    onElementSelectedHandler(element);
  };

  /**
   * Making top level transparent layer to prevented events on emerging ad.
   * see: https://github.com/AdguardTeam/AdguardAssistant/issues/220
   *
   * @param element element where ad is added
   */
  var preventEvents = function preventEvents(element) {
    var placeHolder = src_protectedApi.createElement('div');
    var style = getOffsetExtended(element);
    placeHolder.style.height = px(style.outerHeight);
    placeHolder.style.width = px(style.outerWidth);
    placeHolder.style.top = px(style.top);
    placeHolder.style.left = px(style.left);
    placeHolder.style.background = 'transparent';
    placeHolder.style.position = 'absolute';
    placeHolder.style['pointer-events'] = 'all';
    placeHolder.style['box-sizing'] = 'content-box';
    placeHolder.style['z-index'] = '2147483646';
    placeHolder.className += IGNORED_CLASS;
    transparentPlaceholdedElement = placeHolder;
    placeHolder.addEventListener('click', touchElementSelectHandler);
    placeHolder.addEventListener('touchstart', touchElementSelectHandler);
    placeHolder.addEventListener('pointerdown', touchElementSelectHandler);
    document.documentElement.appendChild(placeHolder);
  };
  var gestureEndHandler = function gestureEndHandler() {
    ignoreTouchEvent = 2;
    return true;
  };
  var touchMoveHandler = function touchMoveHandler() {
    ignoreTouchEvent = 1;
    return true;
  };
  var needIgnoreTouchEvent = function needIgnoreTouchEvent() {
    if (ignoreTouchEvent > 0) {
      ignoreTouchEvent -= 1;
      return true;
    }
    return false;
  };
  var makeIFrameAndEmbeddedSelector = function makeIFrameAndEmbeddedSelector() {
    placeholdedElements = document.querySelectorAll("iframe:not(.".concat(IGNORED_CLASS, "),embed,object"));
    toArray(placeholdedElements).filter(function (elem) {
      var isVisible = elem.style.display !== 'none';
      var isHaveSize = elem.offsetWidth !== 0 && elem.offsetHeight !== 0;
      return isVisible && isHaveSize;
    });
    var elements = placeholdedElements;
    var _loop = function _loop(i) {
      var current = elements[i];
      // eslint-disable-next-line no-shadow
      (function (current) {
        var placeHolder = makePlaceholderImage(current);
        var id = PLACEHOLDER_PREFIX + i;
        placeHolder.setAttribute('id', id);
        var parent = current.parentNode;
        if (parent) {
          parent.replaceChild(placeHolder, current);
          placeHolder.addEventListener('gestureend', gestureEndHandler);
          placeHolder.addEventListener('touchmove', touchMoveHandler);
          // eslint-disable-next-line consistent-return
          placeHolder.addEventListener('touchend', function (e) {
            e.preventDefault();
            if (needIgnoreTouchEvent()) {
              return true;
            }
            placeholderClick(current);
          });
          var elems = document.querySelectorAll("#".concat(id));
          toArray(elems).forEach(function (elem) {
            elem.addEventListener('click', function (e) {
              e.preventDefault();
              placeholderClick(current);
            });
          });
        }
      })(current);
    };
    for (var i = 0; i < elements.length; i += 1) {
      _loop(i);
    }
  };
  var sgMouseoutHandler = function sgMouseoutHandler() {
    if (unbound) {
      return true;
    }
    if (this === document.documentElement || this === document.documentElement.parentNode) {
      return false;
    }
    selectionRenderer.remove();
    return false;
  };
  var elementTouchendHandler = function elementTouchendHandler(e) {
    if (hasClass(e.target, IGNORED_CLASS)) {
      return false;
    }
    e.stopPropagation();
    if (needIgnoreTouchEvent()) {
      return true;
    }
    touchElementSelectHandler.call(this, e);
    return false;
  };
  var emptyEventHandler = function emptyEventHandler(e) {
    e.stopPropagation();
    return false;
  };
  var setupEventHandlers = function setupEventHandlers() {
    makeIFrameAndEmbeddedSelector();
    var elements = document.querySelectorAll("body *:not(.".concat(IGNORED_CLASS, ")"));
    toArray(elements).forEach(function (el) {
      el.addEventListener('gestureend', gestureEndHandler);
      el.addEventListener('touchmove', touchMoveHandler);
      el.addEventListener('touchend', elementTouchendHandler, true);
      el.addEventListener('touchstart', emptyEventHandler);
      el.addEventListener('mouseover', sgMouseoverHandler);
      el.addEventListener('mouseout', sgMouseoutHandler);
      el.addEventListener('click', sgMousedownHandler, true);
    });
  };
  var deleteEventHandlers = function deleteEventHandlers() {
    removePlaceholders();
    var elements = document.querySelectorAll('body *');
    toArray(elements).forEach(function (el) {
      el.removeEventListener('gestureend', gestureEndHandler);
      el.removeEventListener('touchmove', touchMoveHandler);
      el.removeEventListener('touchend', elementTouchendHandler, true);
      el.removeEventListener('touchstart', emptyEventHandler);
      el.removeEventListener('mouseover', sgMouseoverHandler);
      el.removeEventListener('mouseout', sgMouseoutHandler);
      el.removeEventListener('click', sgMousedownHandler, true);
    });
  };

  // Define default implementation of selection renderer.
  selectionRenderer = BorderSelectionRenderer;

  // PUBLIC API

  /**
   * Starts selector module.
   *
   * @param onElementSelected callback function
   * @param selectionRenderImpl optional object contains selection presentation implementation
   */
  api.init = function (onElementSelected, selectionRenderImpl) {
    onElementSelectedHandler = onElementSelected;
    if (selectionRenderImpl && adguard_selector_typeof(selectionRenderImpl) === 'object') {
      selectionRenderer = selectionRenderImpl;
    }
    restrictedElements = ['html', 'body', 'head', 'base'].map(function (selector) {
      return document.querySelector(selector);
    });
    selectionRenderer.init();
    setupEventHandlers();
    unbound = false;
  };

  /**
   * Resets state of selector.
   * Clears current selection.
   */
  api.reset = function () {
    clearSelected();
  };

  /**
   * Destroys selector module.
   * Removes all selector elements and unbinds event handlers.
   */
  api.close = function () {
    unbound = true;
    selectionRenderer.finalize();
    deleteEventHandlers();
  };

  /**
   * Selects specified element.
   * Marks element as selected and holds selection on it.
   *
   * @param element
   */
  api.selectElement = function (element) {
    selectionRenderer.add(element);
    removePlaceholders();
    unbound = true;
    preventEvents(element);
  };

  /**
   Returns css class name.
   If this class assigns to HTML element, then Adguard Selector ignores it.
   */
  // eslint-disable-next-line func-names
  api.ignoreClassName = function () {
    return IGNORED_CLASS;
  };
  return api;
}
var adguard_selector_selector = new AdguardSelector();
/* harmony default export */ const adguard_selector = (adguard_selector_selector);
;// ./src/controllers/selectorMenuController.js



/**
 * Selector menu controller
 * @returns {{init: init}}
 * @constructor
 */
function SelectorMenuController(iframe) {
  var contentDocument = null;
  var iframeCtrl = iframe;
  var close = function close() {
    iframeCtrl.removeIframe();
  };
  var bindEvents = function bindEvents() {
    var menuEvents = {
      '.main_close': close,
      '.btn-default': close
    };
    Object.keys(menuEvents).forEach(function (item) {
      var elems = contentDocument.querySelectorAll(item);
      toArray(elems).forEach(function (elem) {
        return elem.addEventListener('click', menuEvents[item]);
      });
    });
  };
  var onElementSelected = function onElementSelected(element) {
    iframeCtrl.showSliderMenu(element);
  };
  var startSelector = function startSelector() {
    adguard_selector.reset();
    adguard_selector.init(onElementSelected);
  };

  /*
   Called from IframeController._showMenuItem to initialize view
   */
  // eslint-disable-next-line no-shadow
  var init = function init(iframe) {
    // eslint-disable-next-line prefer-destructuring
    contentDocument = iframe.contentDocument;
    bindEvents();
    startSelector();
  };
  iframeCtrl.onCloseMenu.attach(adguard_selector.close);
  return {
    init: init,
    startSelector: startSelector
  };
}
;// ./src/slider-widget.js


/**
 * Slider widget
 * @type {Function}
 */
function SliderWidget() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var CLUE_CLASS = 'adg-slide_clue';
  var CLUE_MIN_CLASS = "".concat(CLUE_CLASS, " ").concat(CLUE_CLASS, "--min");
  var CLUE_MAX_CLASS = "".concat(CLUE_CLASS, " ").concat(CLUE_CLASS, "--max");
  var TRACK_CLASS = 'adg-slide_track';
  var HANDLE_CLASS = 'adg-slide_handle';
  var TICK_CLASS = 'adg-slide_tick';
  var TICK_ACTIVE_CLASS = "".concat(TICK_CLASS, " ").concat(TICK_CLASS, "--active");

  // Horizontal padding of the track, should match with .adg-slide_track class in CSS
  var TRACK_OFFSET = 28;
  var placeholder = null;
  var clueMin = null;
  var clueMax = null;
  var track = null;
  var handle = null;
  var ticks = null;
  var min = 0;
  var max = 1;
  var value = 0;
  var onValueChanged = null;
  var activateValue = function activateValue(newValue) {
    // Do nothing if the value is the same
    if (newValue === value) {
      return;
    }

    // Clamp the new value between min and max
    if (newValue < min) {
      value = min;
    } else if (newValue > max) {
      value = max;
    } else {
      value = newValue;
    }

    // Update handle position
    var trackWidth = track.offsetWidth - TRACK_OFFSET * 2;
    var valueRange = max - min;
    var valuePercentage = (value - min) / valueRange;
    var handlePosition = valuePercentage * trackWidth + TRACK_OFFSET;
    handle.style.left = "".concat(handlePosition, "px");

    // Activate all ticks up to the new value
    for (var i = 0; i < ticks.length; i += 1) {
      // Add `min`, because ticks are 0-based, but values are starts from `min`
      if (i + min < value) {
        ticks[i].setAttribute('class', TICK_ACTIVE_CLASS);
      } else {
        ticks[i].setAttribute('class', TICK_CLASS);
      }
    }
    onValueChanged(value);
  };
  var render = function render() {
    // Render clue min
    clueMin = src_protectedApi.createElement('div');
    clueMin.setAttribute('class', CLUE_MIN_CLASS);
    clueMin.textContent = 'Min';
    placeholder.appendChild(clueMin);

    // Render clue max
    clueMax = src_protectedApi.createElement('div');
    clueMax.setAttribute('class', CLUE_MAX_CLASS);
    clueMax.textContent = 'Max';
    placeholder.appendChild(clueMax);

    // Render handle
    handle = src_protectedApi.createElement('div');
    handle.setAttribute('class', HANDLE_CLASS);

    // Render track
    track = src_protectedApi.createElement('div');
    track.setAttribute('class', TRACK_CLASS);
    track.appendChild(handle);
    placeholder.appendChild(track);

    // Render ticks
    var tickCount = max - min;
    ticks = [];
    for (var i = 0; i < tickCount; i += 1) {
      var tick = src_protectedApi.createElement('div');
      tick.setAttribute('class', TICK_CLASS);
      track.appendChild(tick);
      ticks.push(tick);
    }
  };
  var bindEvents = function bindEvents() {
    clueMin.addEventListener('click', function () {
      activateValue(min);
    });
    clueMax.addEventListener('click', function () {
      activateValue(max);
    });

    // Track dragging logic using pointer events with pointer capture
    track.addEventListener('pointerdown', function (pointerDownEvent) {
      // Prevent default behavior to avoid text selection during dragging
      pointerDownEvent.preventDefault();

      // Set pointer capture to the track element
      track.setPointerCapture(pointerDownEvent.pointerId);

      // Flag to track active dragging
      var isDragging = true;

      // Calculate the value based on pointer position
      var calculateValueFromPosition = function calculateValueFromPosition(clientX) {
        var trackRect = track.getBoundingClientRect();
        var trackWidth = trackRect.width - TRACK_OFFSET * 2;
        var valueRange = max - min;

        // Calculate the offset within the track, accounting for padding
        var offsetX = clientX - trackRect.left - TRACK_OFFSET;

        // Keep offset within bounds
        if (offsetX < 0) {
          offsetX = 0;
        }
        if (offsetX > trackWidth) {
          offsetX = trackWidth;
        }

        // Calculate value based on position
        var valuePercentage = offsetX / trackWidth;
        var newValue = min + valuePercentage * valueRange;

        // Round to nearest value
        return Math.round(newValue);
      };

      // Set initial value based on where the user clicked
      activateValue(calculateValueFromPosition(pointerDownEvent.clientX));

      // Handle pointer movement
      var handlePointerMove = function handlePointerMove(pointerMoveEvent) {
        if (!isDragging) {
          return;
        }

        // Prevent default to avoid unwanted side effects
        pointerMoveEvent.preventDefault();

        // Update value based on pointer position
        activateValue(calculateValueFromPosition(pointerMoveEvent.clientX));
      };

      // Handle pointer up - cleanup
      var _handlePointerUp = function handlePointerUp(pointerUpEvent) {
        // Release pointer capture
        if (track.hasPointerCapture(pointerUpEvent.pointerId)) {
          track.releasePointerCapture(pointerUpEvent.pointerId);
        }

        // Set dragging flag to false
        isDragging = false;

        // Remove event listeners
        track.removeEventListener('pointermove', handlePointerMove);
        track.removeEventListener('pointerup', _handlePointerUp);
        track.removeEventListener('pointercancel', _handlePointerUp);
        track.removeEventListener('pointerleave', _handlePointerUp);
      };

      // Add pointer event listeners
      track.addEventListener('pointermove', handlePointerMove);
      track.addEventListener('pointerup', _handlePointerUp);
      track.addEventListener('pointercancel', _handlePointerUp);
      track.addEventListener('pointerleave', _handlePointerUp);
    });
  };

  /**
   * @param placeholderElement
   * @param options
   */
  // eslint-disable-next-line no-param-reassign
  api.init = function (placeholderElement, options) {
    placeholder = placeholderElement;
    // eslint-disable-next-line prefer-destructuring
    min = options.min;
    // eslint-disable-next-line prefer-destructuring
    max = options.max;
    // eslint-disable-next-line prefer-destructuring
    value = options.value;
    // eslint-disable-next-line prefer-destructuring
    onValueChanged = options.onValueChanged;
    render();
    bindEvents();
  };
  return api;
}
var sliderWidget = new SliderWidget();
/* harmony default export */ const slider_widget = (sliderWidget);
;// ./src/libs/css.escape.js
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

// https://drafts.csswg.org/cssom/#serialize-an-identifier
function cssEscape(value) {
  if (arguments.length === 0) {
    throw new TypeError('`CSS.escape` requires an argument.');
  }
  var string = String(value);
  var length = string.length;
  var index = -1;
  var codeUnit;
  var result = '';
  var firstCodeUnit = string.charCodeAt(0);
  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    codeUnit = string.charCodeAt(index);
    // Note: there’s no need to special-case astral symbols, surrogate
    // pairs, or lone surrogates.

    // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
    // (U+FFFD).
    if (codeUnit === 0x0000) {
      result += "\uFFFD";
      // eslint-disable-next-line no-continue
      continue;
    }
    if (
    // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
    // U+007F, […]
    // eslint-disable-next-line eqeqeq
    codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F
    // If the character is the first character and is in the range [0-9]
    // (U+0030 to U+0039), […]
    || index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039
    // If the character is the second character and is in the range [0-9]
    // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
    || index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039
    // eslint-disable-next-line eqeqeq
    && firstCodeUnit == 0x002D) {
      // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
      result += "\\".concat(codeUnit.toString(16), " ");
      // eslint-disable-next-line no-continue
      continue;
    }
    if (
    // If the character is the first character and is a `-` (U+002D), and
    // there is no second character, […]
    index === 0 && length === 1
    // eslint-disable-next-line eqeqeq
    && codeUnit == 0x002D) {
      result += "\\".concat(string.charAt(index));
      // eslint-disable-next-line no-continue
      continue;
    }

    // If the character is not handled by one of the above rules and is
    // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
    // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
    // U+005A), or [a-z] (U+0061 to U+007A), […]
    if (codeUnit >= 0x0080
    // eslint-disable-next-line eqeqeq
    || codeUnit == 0x002D
    // eslint-disable-next-line eqeqeq
    || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
      // the character itself
      result += string.charAt(index);
      // eslint-disable-next-line no-continue
      continue;
    }

    // Otherwise, the escaped character.
    // https://drafts.csswg.org/cssom/#escape-a-character
    result += "\\".concat(string.charAt(index));
  }
  return result;
}
;// ./src/adguard-rules-constructor.js



/**
 * Adguard rules constructor
 * @type {Function}
 */
function AdguardRulesConstructorLib() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var CSS_RULE_MARK = '##';
  var RULE_OPTIONS_MARK = '$';
  var URLBLOCK_ATTRIBUTES = ['src', 'data'];
  var linkHelper = src_protectedApi.createElement('a');

  /**
   * Constructs css selector by combining classes by AND
   * @param classList
   * @returns {string}
   */
  var constructClassCssSelectorByAND = function constructClassCssSelectorByAND(classList) {
    var selectors = [];
    if (classList) {
      for (var i = 0; i < classList.length; i += 1) {
        selectors.push(".".concat(cssEscape(classList[i])));
      }
    }
    return selectors.join('');
  };

  /**
   * Constructs css selector for element using tag name,
   * id and classed, like: tagName#id.class1.class2
   *
   * @param element Element
   * @param classList Override element classes
   * (If classList is null, element classes will be used)
   * @param excludeTagName Omit tag name in selector
   * @param excludeId Omit element id in selector
   * @returns {string}
   */
  var makeDefaultCssFilter = function makeDefaultCssFilter(element, classList, excludeTagName, excludeId) {
    var cssSelector = excludeTagName ? '' : element.tagName.toLowerCase();
    if (element.id && !excludeId) {
      cssSelector += "#".concat(cssEscape(element.id));
    }
    cssSelector += constructClassCssSelectorByAND(classList || element.classList);
    return cssSelector;
  };

  /**
   * Constructs css selector for element using parent elements
   * and nth-child (first-child, last-child) pseudo classes.
   *
   * @param element Element
   * @param options Construct options.
   * For example: {excludeTagName: false, excludeId: false, classList: []}
   * @returns {string}
   */
  var makeCssNthChildFilter = function makeCssNthChildFilter(element, options) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    var _options = options,
      classList = _options.classList,
      excludeTagName = _options.excludeTagName,
      excludeId = _options.excludeId;
    var excludeTagNameOverride = 'excludeTagName' in options;
    var excludeIdOverride = 'excludeId' in options;
    var path = [];
    var el = element;
    while (el.parentNode) {
      var nodeName = el && el.nodeName ? el.nodeName.toUpperCase() : '';
      if (nodeName === 'BODY') {
        break;
      }
      if (el.id) {
        /**
         * Be default we don't include tag name and classes
         * to selector for element with id attribute
         */
        var cssSelector = '';
        if (el === element) {
          cssSelector = makeDefaultCssFilter(el, classList || [], excludeTagNameOverride ? excludeTagName : true, excludeIdOverride ? excludeId : false);
        } else {
          cssSelector = makeDefaultCssFilter(el, [], true, false);
        }
        path.unshift(cssSelector);
        break;
      } else {
        var c = 1;
        for (var e = el; e.previousSibling; e = e.previousSibling) {
          if (e.previousSibling.nodeType === 1) {
            c += 1;
          }
        }
        var cldCount = 0;
        for (var i = 0; el.parentNode && i < el.parentNode.childNodes.length; i += 1) {
          cldCount += el.parentNode.childNodes[i].nodeType === 1 ? 1 : 0;
        }
        var ch = void 0;
        if (cldCount === 0 || cldCount === 1) {
          ch = '';
        } else if (c === 1) {
          ch = ':first-child';
        } else if (c === cldCount) {
          ch = ':last-child';
        } else {
          ch = ":nth-child(".concat(c, ")");
        }

        /**
         * By default we include tag name and
         * element classes to selector for element without id attribute
         */
        if (el === element) {
          var p = makeDefaultCssFilter(el, classList, excludeId, excludeTagNameOverride ? excludeTagName : false);
          p += ch;
          path.unshift(p);
        } else {
          path.unshift(makeDefaultCssFilter(el, el.classList, false, false) + ch);
        }
        el = el.parentNode;
      }
    }
    return path.join(' > ');
  };

  /**
   * Constructs css selector by combining classes by OR
   * @param classList
   * @returns {string}
   */
  var constructClassCssSelectorByOR = function constructClassCssSelectorByOR(classList) {
    var selectors = [];
    if (classList) {
      for (var i = 0; i < classList.length; i += 1) {
        selectors.push(".".concat(cssEscape(classList[i])));
      }
    }
    return selectors.join(', ');
  };

  /**
   * Constructs element selector for matching elements
   * that contain any of classes in original element.
   * For example <el class='cl1 cl2 cl3'></el> => .cl1, .cl2, .cl3
   *
   * @param element Element
   * @param classList Override element classes
   * (If classList is null, element classes will be used)
   * @returns {string}
   */
  var makeSimilarCssFilter = function makeSimilarCssFilter(element, classList) {
    return constructClassCssSelectorByOR(classList || element.classList);
  };

  /**
   * Creates css rule text
   * @param element Element
   * @param options Construct options.
   * For example: {
   *  cssSelectorType: 'STRICT_FULL',
   *  excludeTagName: false,
   *  excludeId: false, classList: []
   * }
   * @returns {string}
   */
  var constructCssRuleText = function constructCssRuleText(element, options) {
    if (!element) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    options = options || {};
    var cssSelectorType = options.cssSelectorType || 'STRICT_FULL';
    var selector;
    switch (cssSelectorType) {
      case 'STRICT_FULL':
        selector = makeCssNthChildFilter(element, options);
        break;
      case 'STRICT':
        selector = makeDefaultCssFilter(element, options.classList, options.excludeTagName, options.excludeId);
        break;
      case 'SIMILAR':
        selector = makeSimilarCssFilter(element, options.classList, true);
        break;
      default:
        break;
    }

    // eslint-disable-next-line consistent-return
    return selector ? CSS_RULE_MARK + selector : '';
  };
  var constructUrlBlockRuleText = function constructUrlBlockRuleText(element, urlBlockAttribute, oneDomain, domain) {
    if (!urlBlockAttribute) {
      return null;
    }
    var blockUrlRuleText = urlBlockAttribute.replace(/^http:\/\/(www\.)?/, '||');
    if (blockUrlRuleText.indexOf('.') === 0) {
      blockUrlRuleText = blockUrlRuleText.substring(1);
    }
    if (!oneDomain) {
      blockUrlRuleText = "".concat(blockUrlRuleText).concat(RULE_OPTIONS_MARK, "domain=").concat(domain);
    }
    return blockUrlRuleText;
  };
  var isValidUrl = function isValidUrl(value) {
    if (value) {
      linkHelper.href = value;
      if (linkHelper.hostname) {
        return true;
      }
    }
    return false;
  };
  var getUrlBlockAttribute = function getUrlBlockAttribute(element) {
    if (!element || !element.getAttribute) {
      return null;
    }
    for (var i = 0; i < URLBLOCK_ATTRIBUTES.length; i += 1) {
      var attr = URLBLOCK_ATTRIBUTES[i];
      var value = element.getAttribute(attr);
      if (isValidUrl(value)) {
        return value;
      }
    }
    return null;
  };
  var haveUrlBlockParameter = function haveUrlBlockParameter(element) {
    var value = getUrlBlockAttribute(element);
    return value && value !== '';
  };
  var haveClassAttribute = function haveClassAttribute(element) {
    return element.classList && element.classList.length > 0;
  };
  var haveIdAttribute = function haveIdAttribute(element) {
    return element.id && element.id.trim() !== '';
  };
  var getUrl = function getUrl(url) {
    var pattern = '^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$';
    var rx = new RegExp(pattern);
    var parts = rx.exec(url);
    return {
      host: parts[4] || '',
      path: parts[7] || ''
    };
  };
  var cropDomain = function cropDomain(url) {
    var domain = getUrl(url).host;
    return domain.replace('www.', '').replace(/:\d+/, '');
  };

  /**
   * Utility method
   *
   * @param element
   * @returns {string}
   */
  // eslint-disable-next-line no-param-reassign
  api.makeCssNthChildFilter = makeCssNthChildFilter;

  /**
   * Returns detailed element info
   *
   * @param element
   */
  // eslint-disable-next-line no-param-reassign
  api.getElementInfo = function (element) {
    // Convert attributes to array
    var attributes = [];
    var elementAttributes = element.attributes;
    if (elementAttributes) {
      for (var i = 0; i < elementAttributes.length; i += 1) {
        var attr = elementAttributes[i];
        attributes.push({
          name: attr.name,
          value: attr.value
        });
      }
    }
    return {
      tagName: element.tagName,
      attributes: attributes,
      urlBlockAttributeValue: getUrlBlockAttribute(element),
      haveUrlBlockParameter: haveUrlBlockParameter(element),
      haveClassAttribute: haveClassAttribute(element),
      haveIdAttribute: haveIdAttribute(element)
    };
  };

  /**
   * Constructs css selector for specified rule
   *
   * @param ruleText rule text
   * @returns {string} css style selector
   */
  // eslint-disable-next-line no-param-reassign
  api.constructRuleCssSelector = function (ruleText) {
    if (!ruleText) {
      return null;
    }
    var index = ruleText.indexOf(CSS_RULE_MARK);
    var optionsIndex = ruleText.indexOf(RULE_OPTIONS_MARK);
    if (index >= 0) {
      return ruleText.substring(index + CSS_RULE_MARK.length, optionsIndex >= 0 ? optionsIndex : ruleText.length);
    }
    var s = ruleText.substring(0, optionsIndex);
    s = s.replace(/[|]|[\^]/g, '');
    if (isValidUrl(s)) {
      return "[src*=\"".concat(s, "\"]");
    }
    return null;
  };

  /**
   * Constructs adguard rule text from element node and specified options
   *
   * const options = {
   *  urlMask: url block attributes,
   *  isBlockOneDomain: boolean,
   *  url: url,
   *  attributes: attributesSelectorText,
   *  ruleType: (URL, CSS)
   *  cssSelectorType: (STRICT_FULL, STRICT, SIMILAR),
   *  excludeTagName: false, (Exclude element tag name from selector)
   *  excludeId: false, (Exclude element identifier from selector)
   *  classList: []
   *      (Override element classes (If classList is null, element classes will be used))
   * }
   *
   * @param element
   * @param options
   * @returns {*}
   */
  // eslint-disable-next-line no-param-reassign
  api.constructRuleText = function (element, options) {
    var croppedDomain = cropDomain(options.url);
    var ruleType = options.ruleType;
    if (ruleType === 'URL') {
      var blockUrlRuleText = constructUrlBlockRuleText(element, options.urlMask, options.isBlockOneDomain, croppedDomain);
      if (blockUrlRuleText) {
        return blockUrlRuleText;
      }
    }
    var result;
    if (ruleType === 'CSS') {
      result = constructCssRuleText(element, options);

      // Append html attributes to css selector
      if (options.attributes) {
        result = (result || CSS_RULE_MARK + result) + options.attributes;
      }
    }
    if (!options.isBlockOneDomain) {
      result = croppedDomain + result;
    }
    return result;
  };
  return api;
}
var adguardRulesConstructor = new AdguardRulesConstructorLib();
/* harmony default export */ const adguard_rules_constructor = (adguardRulesConstructor);
;// ./src/controllers/sliderMenuController.js






/**
 * Slider menu controller
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
function SliderMenuController(addRule, iframe) {
  var contentDocument = null;
  var selectedElement = null;
  var startElement = null;
  var currentElement = null;
  var iframeCtrl = iframe;
  var getFilterRuleInputText = function getFilterRuleInputText() {
    return contentDocument.getElementById('filter-rule').value;
  };
  var close = function close() {
    iframeCtrl.removeIframe();
  };
  var expandAdvanced = function expandAdvanced() {
    var advancedSettings = contentDocument.querySelector('#advanced-settings');
    var extendedSettingsText = contentDocument.querySelector('#ExtendedSettingsText');
    var extendedSettingsTextMobile = contentDocument.querySelector('#ExtendedSettingsTextMobile');
    var hidden = !hasClass(advancedSettings, 'open');
    if (hidden) {
      addClass(advancedSettings, 'open');
      addClass(extendedSettingsText, 'active');
      addClass(extendedSettingsTextMobile, 'active');
      iframeCtrl.resizeSliderMenuToAdvanced();
    } else {
      removeClass(advancedSettings, 'open');
      removeClass(extendedSettingsText, 'active');
      removeClass(extendedSettingsTextMobile, 'active');
      iframeCtrl.resizeSliderMenuToNormal();
    }
  };
  var showPreview = function showPreview() {
    var options = {
      isBlockByUrl: contentDocument.getElementById('block-by-url-checkbox').checked,
      isBlockSimilar: contentDocument.getElementById('block-similar-checkbox').checked,
      isBlockOneDomain: contentDocument.getElementById('one-domain-checkbox').checked
    };
    iframeCtrl.showBlockPreview(selectedElement, getFilterRuleInputText(), startElement, options);
  };
  var blockElement = function blockElement() {
    var path = getFilterRuleInputText();
    iframeCtrl.blockElement(path, addRule);
  };
  var handleShowBlockSettings = function handleShowBlockSettings(showBlockByUrl, showBlockSimilar) {
    var blockByUrlBlock = contentDocument.querySelector('#block-by-url-checkbox-block');
    var blockSimilarBlock = contentDocument.querySelector('#block-similar-checkbox-block');
    if (showBlockByUrl) {
      show(blockByUrlBlock);
    } else {
      contentDocument.getElementById('block-by-url-checkbox').checked = false;
      hide(blockByUrlBlock);
    }
    if (showBlockSimilar) {
      show(blockSimilarBlock);
    } else {
      contentDocument.getElementById('block-similar-checkbox').checked = false;
      hide(blockSimilarBlock);
    }
  };
  var getUrlBlockAttribute = function getUrlBlockAttribute(element) {
    var urlBlockAttributes = ['src', 'data'];
    for (var i = 0; i < urlBlockAttributes.length; i += 1) {
      var attr = urlBlockAttributes[i];
      var value = element.getAttribute(attr);
      if (value) {
        return value;
      }
    }
    return null;
  };
  var haveUrlBlockParameter = function haveUrlBlockParameter(element) {
    var value = getUrlBlockAttribute(element);
    return value && value !== '';
  };
  var haveClassAttribute = function haveClassAttribute(element) {
    var className = element.className;
    return className && typeof className === 'string' && className.trim() !== '';
  };
  var setFilterRuleInputText = function setFilterRuleInputText(ruleText) {
    contentDocument.getElementById('filter-rule').value = ruleText;
  };
  var onScopeChange = function onScopeChange() {
    var isBlockByUrl = contentDocument.getElementById('block-by-url-checkbox').checked;
    var isBlockSimilar = contentDocument.getElementById('block-similar-checkbox').checked;
    var isBlockOneDomain = contentDocument.getElementById('one-domain-checkbox').checked;
    handleShowBlockSettings(haveUrlBlockParameter(selectedElement) && !isBlockSimilar, haveClassAttribute(selectedElement) && !isBlockByUrl);
    var options = {
      urlMask: getUrlBlockAttribute(selectedElement),
      cssSelectorType: isBlockSimilar ? 'SIMILAR' : 'STRICT_FULL',
      isBlockOneDomain: isBlockOneDomain,
      url: document.location,
      ruleType: isBlockByUrl ? 'URL' : 'CSS'
    };
    var ruleText = adguard_rules_constructor.constructRuleText(selectedElement, options);
    setFilterRuleInputText(ruleText);
    iframeCtrl.resizeIframe();
  };
  var bindEvents = function bindEvents() {
    var menuEvents = {
      '.main_close': close,
      '#ExtendedSettingsText': expandAdvanced,
      '#ExtendedSettingsTextMobile': expandAdvanced,
      '#adg-cancel': iframeCtrl.showSelectorMenu,
      '#adg-preview': showPreview,
      '#adg-accept': blockElement,
      '#block-by-url-checkbox-block': onScopeChange,
      '#one-domain-checkbox-block': onScopeChange,
      '#block-similar-checkbox-block': onScopeChange
    };
    Object.keys(menuEvents).forEach(function (item) {
      var elems = contentDocument.querySelectorAll(item);
      toArray(elems).forEach(function (elem) {
        return elem.addEventListener('click', menuEvents[item]);
      });
    });
  };
  var makeDefaultCheckboxesForDetailedMenu = function makeDefaultCheckboxesForDetailedMenu(options) {
    contentDocument.getElementById('block-by-url-checkbox').checked = options && options.isBlockByUrl;
    contentDocument.getElementById('block-similar-checkbox').checked = options && options.isBlockSimilar;
    contentDocument.getElementById('one-domain-checkbox').checked = options && options.isBlockOneDomain;
    if (options && (options.isBlockByUrl || options.isBlockSimilar)) {
      handleShowBlockSettings(options.isBlockByUrl, options.isBlockSimilar);
    }
  };
  var onSliderMove = function onSliderMove(element) {
    selectedElement = element;
    adguard_selector.selectElement(element);
    makeDefaultCheckboxesForDetailedMenu();
    onScopeChange();
    handleShowBlockSettings(haveUrlBlockParameter(element), haveClassAttribute(element));
  };
  var createSlider = function createSlider(setElement) {
    var parents = getParentsLevel(selectedElement);
    var children = getAllChildren(selectedElement);
    var value = Math.abs(parents.length + 1);
    var max = parents.length + children.length + 1;
    var min = 1;
    var options = {
      value: value,
      min: min,
      max: max
    };
    var slider = contentDocument.querySelector('#slider');
    if (min === max) {
      // hide slider text
      hide(slider);
      hide(contentDocument.querySelectorAll('.element-rule_text'));
      expandAdvanced();
    }
    options.onSliderMove = function (delta) {
      var elem;
      if (delta > 0) {
        elem = parents[delta - 1];
      }
      if (delta === 0) {
        elem = startElement;
      }
      if (delta < 0) {
        elem = children[Math.abs(delta + 1)];
      }
      onSliderMove(elem);
    };
    var currentVal = options.value;

    // set slider position on current element after returning from preview mode
    if (setElement) {
      var setElementparents = getParentsLevel(setElement);
      currentVal = setElementparents.length + 1;
    }
    slider_widget.init(slider, {
      min: options.min,
      max: options.max,
      value: currentVal,
      // eslint-disable-next-line no-shadow
      onValueChanged: function onValueChanged(value) {
        // max - value + min is because we have reversed slider
        var delta = options.value - (options.max - value + options.min);
        options.onSliderMove(delta);
      }
    });
  };

  /*
   Called from IframeController._showMenuItem to initialize view
   */
  // eslint-disable-next-line no-shadow
  var init = function init(iframe, options) {
    selectedElement = options.element;
    startElement = selectedElement;
    // eslint-disable-next-line prefer-destructuring
    contentDocument = iframe.contentDocument;
    // eslint-disable-next-line prefer-destructuring
    currentElement = options.currentElement;
    bindEvents();
    createSlider(currentElement);
    onScopeChange();
    adguard_selector.selectElement(selectedElement);

    // select current element after returning from preview mode
    if (currentElement) {
      onSliderMove(currentElement);
    }

    // make input clickable with right mouse button for text editing
    events.add(contentDocument.getElementById('filter-rule'), 'contextmenu', function (e) {
      e.stopPropagation();
    });
    if (options.path) {
      setFilterRuleInputText(options.path);
      expandAdvanced();
    }
    if (options.options) {
      makeDefaultCheckboxesForDetailedMenu(options.options);
    }
  };
  return {
    init: init
  };
}
;// ./src/controllers/blockPreviewController.js




/**
 * Block preview controller
 * @param addRule
 * @param iframe
 * @returns {{init: init}}
 * @constructor
 */
function BlockPreviewController(addRule, iframe) {
  var contentDocument = null;
  var currentElement = null;
  var selectedElement = null;
  var selectedPath = null;
  var optionsState = null;
  var iframeCtrl = iframe;
  var previewStyleID = 'ag-preview-style-id';
  var showElement = function showElement() {
    iframeCtrl.showHiddenElements(previewStyleID);
  };
  var close = function close() {
    showElement();
    iframeCtrl.removeIframe();
  };
  var selectAnotherElement = function selectAnotherElement() {
    showElement();
    iframeCtrl.showSelectorMenu();
  };
  var blockElement = function blockElement(e) {
    e.stopPropagation();
    iframeCtrl.blockElement(selectedPath, addRule);
  };
  var showDetailedMenu = function showDetailedMenu() {
    showElement();
    iframeCtrl.showSliderMenu(currentElement, selectedElement, selectedPath, optionsState);
  };
  var bindEvents = function bindEvents() {
    var menuEvents = {
      '.main_close': close,
      '#select-another-element': selectAnotherElement,
      '#end-preview': showDetailedMenu,
      '#block-element': blockElement
    };
    Object.keys(menuEvents).forEach(function (item) {
      var elems = contentDocument.querySelectorAll(item);
      toArray(elems).forEach(function (elem) {
        return elem.addEventListener('click', menuEvents[item]);
      });
    });
  };
  var hideElement = function hideElement() {
    if (!selectedPath) {
      src_log.error('Can`t block element: `selector` path is empty');
      return;
    }
    iframeCtrl.hideElementsByPath(selectedPath, previewStyleID);
  };

  /*
   Called from IframeController.showMenuItem to initialize view
   */
  // eslint-disable-next-line no-shadow
  var init = function init(iframe, options) {
    selectedElement = options.element;
    selectedPath = options.path;
    // eslint-disable-next-line prefer-destructuring
    currentElement = options.currentElement;
    // eslint-disable-next-line prefer-destructuring
    contentDocument = iframe.contentDocument;
    optionsState = options.options;
    adguard_selector.reset();
    bindEvents();
    hideElement();
  };
  return {
    init: init
  };
}
;// ./src/utils/ui-validation-utils.js



/**
 * Utils that checks environment for compatibility with assistant
 * @returns {{
 * checkVisibleAreaSize: checkVisibleAreaSize,
 * validateBrowser: validateBrowser,
 * validatePage: validatePage,
 * getViewPort: getViewPort
 * }}
 * @constructor
 */
function UIValidationUtils() {
  var _window = window,
    document = _window.document;
  var getViewPort = function getViewPort() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    return {
      width: width,
      height: height
    };
  };

  /**
   * Check if visible area are enough to show menu.
   * @returns boolean. True if area enough
   */
  var checkVisibleAreaSize = function checkVisibleAreaSize() {
    var viewPort = getViewPort();
    // eslint-disable-next-line max-len
    var visibleAreaSize = viewPort.height > src_settings.Constants.MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON;
    if (!visibleAreaSize) {
      src_log.error("Viewport height is too small: ".concat(viewPort.height));
    }
    return visibleAreaSize;
  };

  /**
   * Checks if browser is valid for Adguard assistant
   * @returns boolean. True if browser valid
   */
  var validateBrowser = function validateBrowser() {
    var valid = !document.documentMode || document.documentMode > src_settings.Constants.MINIMUM_IE_SUPPORTED_VERSION;
    if (!valid) {
      src_log.error("IE version is ".concat(document.documentMode));
    }
    return valid;
  };

  /**
   * Checks if page is valid for Adguard assistant to work here.
   */
  var validatePage = function validatePage() {
    // Assistant do not work in iframes
    if (window.window !== window.top) {
      return false;
    }
    return true;
  };
  return {
    checkVisibleAreaSize: checkVisibleAreaSize,
    validateBrowser: validateBrowser,
    validatePage: validatePage,
    getViewPort: getViewPort
  };
}
var uiValidationUtils = new UIValidationUtils();
/* harmony default export */ const ui_validation_utils = (uiValidationUtils);
;// ./src/utils/ui-utils.js




/**
 * UI utils
 * @returns {{
 *  makeElementDraggable: Function,
 *  makeIframeDraggable: Function,
 *  moveElementTo: Function,
`*  setAnchorPosition: Function,
 *  checkElementPosition: Function,
 * }}
 * @constructor
 */
function UIUtils() {
  var elWidth;
  var elHeight;
  var windowWidth;
  var windowHeight;

  // Stored button anchor position
  var storedAnchor = {};

  /**
   * Get original event object for touch
   * devices to getting current coordinates
   * @param {Object}
   * @returns {Object}
   */
  var getOriginalEvent = function getOriginalEvent(e) {
    return e.targetTouches ? e.targetTouches[0] : e;
  };
  var outsidePosition = {
    top: function top(pos) {
      return storedAnchor.top && (pos.y + elHeight > windowHeight || pos.y < 0);
    },
    bottom: function bottom(pos) {
      return !storedAnchor.top && (Math.abs(pos.y) + elHeight > windowHeight || pos.y > 0);
    },
    left: function left(pos) {
      return storedAnchor.left && (pos.x + elWidth > windowWidth || pos.x < 0);
    },
    right: function right(pos) {
      return !storedAnchor.left && (Math.abs(pos.x) + elWidth > windowWidth || pos.x > 0);
    }
  };

  /**
   * Set transition css property for drag
   * translate3d is for better rendering performance
   * see: https://www.html5rocks.com/en/tutorials/speed/layers/
   */
  var moveElementTo = function moveElementTo(el, x, y) {
    var transform = "translate3d(".concat(x, "px,").concat(y, "px, 0px)");
    // eslint-disable-next-line no-param-reassign
    el.style.webkitTransform = transform;
    // eslint-disable-next-line no-param-reassign
    el.style.mozTransform = transform;
    // eslint-disable-next-line no-param-reassign
    el.style.msTransform = transform;
    // eslint-disable-next-line no-param-reassign
    el.style.oTransform = transform;
    // eslint-disable-next-line no-param-reassign
    el.style.transform = transform;
  };

  // getting screen width and height without scroll bars
  var getWindowSize = function getWindowSize() {
    return {
      width: Math.min(document.documentElement.clientWidth, window.innerWidth || window.screen.width),
      height: Math.min(document.documentElement.clientHeight, window.innerHeight || window.screen.height)
    };
  };

  /**
   * Functions for saving left/top anchors and setting class position
   *
   * @param {Object} element  button element
   * @param {Boolean} anchor  anchors positions `true` for top/left or `false` for bottom/right
   */
  var setAnchorPosition = {
    positionY: function positionY(element, anchor) {
      storedAnchor.top = anchor;
      if (storedAnchor.top) {
        addClass(element, 'adguard-assistant-button-top');
        removeClass(element, 'adguard-assistant-button-bottom');
      } else {
        addClass(element, 'adguard-assistant-button-bottom');
        removeClass(element, 'adguard-assistant-button-top');
      }
    },
    positionX: function positionX(element, anchor) {
      storedAnchor.left = anchor;
      if (storedAnchor.left) {
        addClass(element, 'adguard-assistant-button-left');
        removeClass(element, 'adguard-assistant-button-right');
      } else {
        addClass(element, 'adguard-assistant-button-right');
        removeClass(element, 'adguard-assistant-button-left');
      }
    }
  };

  /**
   * Make element draggable
   * @param element
   * @param onDragEnd
   * @param onClick
   */
  function makeElementDraggable(element, onDragEnd, onClick) {
    var coords;
    var shiftX;
    var shiftY;

    /**
     * Prevent text selection
     * With cursor drag
     */
    var pauseEvent = function pauseEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    };
    var onMouseMove = function onMouseMove(e) {
      pauseEvent(e);
      // eslint-disable-next-line no-use-before-define
      moveAt(e);
    };
    var preventedEvent = function preventedEvent(e) {
      e.preventDefault();
    };
    var getCoords = function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top,
        left: box.left,
        bottom: box.bottom,
        right: box.right
      };
    };

    /**
     * On mouse up event
     * @param {Object} e  event object
     * @param {Boolean|undefined} doNotOpenIframe do not open the iframe if true.
     * This is necessary when the cursor is out of bounds
     */
    var _onMouseUp = function onMouseUp(e, doNotOpenIframe) {
      e.stopPropagation();

      // make scroll availalbe
      events.remove(document.documentElement, 'wheel mousewheel', preventedEvent);

      // When a user finishes dragging icon, we set icon anchor
      // depending on the icon position, i.e. which quarter
      // of the screen it belongs.
      var lastX;
      var lastY;
      var lastCoords = getCoords(element);
      var topHalf = lastCoords.top < windowHeight / 2;
      var leftHalf = lastCoords.left < windowWidth / 2;
      setAnchorPosition.positionY(element, topHalf);
      setAnchorPosition.positionX(element, leftHalf);
      if (topHalf) {
        lastY = lastCoords.top;
      } else {
        lastY = lastCoords.bottom - windowHeight;
      }
      if (leftHalf) {
        lastX = lastCoords.left;
      } else {
        lastX = lastCoords.right - windowWidth;
      }
      moveElementTo(element, lastX, lastY);

      // Open the frame if the button has been shifted by no more than 5 pixels
      if (Math.abs(coords.left - lastCoords.left) > 5 || Math.abs(coords.top - lastCoords.top) > 5) {
        if (onDragEnd) {
          var store = {
            x: lastX,
            y: lastY,
            storedAnchor: storedAnchor
          };
          onDragEnd(store);
        }
      } else if (onClick && !doNotOpenIframe) {
        onClick(e);
      }
      events.remove(document.documentElement, 'mouseup touchend pointerup', _onMouseUp);
      events.remove(document.documentElement, 'mousemove touchmove pointermove', onMouseMove);
    };
    var moveAt = function moveAt(e) {
      var position = {
        x: getOriginalEvent(e).pageX - shiftX,
        y: getOriginalEvent(e).pageY - shiftY
      };

      // disable mousemove if button element outside the screen
      var out = outsidePosition.top(position) || outsidePosition.left(position) || outsidePosition.bottom(position) || outsidePosition.right(position);
      if (out) {
        _onMouseUp(e, true);
      } else {
        moveElementTo(element, position.x, position.y);
      }
    };
    var mouseDown = function mouseDown(e) {
      pauseEvent(e);

      // prevent browser scroll
      events.add(document.documentElement, 'wheel mousewheel', preventedEvent);

      // prevent right button mousedown
      if (e.button > 0) return;
      elWidth = element.clientWidth;
      elHeight = element.clientWidth;
      windowWidth = getWindowSize().width;
      windowHeight = getWindowSize().height;
      coords = getCoords(element);
      if (storedAnchor.top) {
        shiftY = getOriginalEvent(e).pageY - coords.top;
      } else {
        shiftY = windowHeight - (coords.bottom - getOriginalEvent(e).pageY);
      }
      if (storedAnchor.left) {
        shiftX = getOriginalEvent(e).pageX - coords.left;
      } else {
        shiftX = windowWidth - (coords.right - getOriginalEvent(e).pageX);
      }

      /**
       * binding both mouse and touch/pointer events simultaneously
       * see: http://www.html5rocks.com/en/mobile/touchandmouse/
       */
      events.add(document.documentElement, 'mouseup touchend pointerup', _onMouseUp);
      events.add(document.documentElement, 'mousemove touchmove pointermove', onMouseMove);
    };
    events.add(element, 'mousedown touchstart', src_protectedApi.functionBind.call(mouseDown, this));
    events.add(element, 'dragstart', function () {});
  }

  /**
   * Makes iframe draggable
   *
   * @param iframe
   * @param handleElement
   */
  var makeIframeDraggable = function makeIframeDraggable(iframe, handleElement) {
    var iframeDoc = iframe.contentDocument;
    var offset = Object.create(null);

    /**
     * Function that does actual "dragging"
     *
     * @param x
     * @param y
     */
    var drag = function drag(x, y) {
      // eslint-disable-next-line no-param-reassign
      iframe.style.left = "".concat(x, "px");
      // eslint-disable-next-line no-param-reassign
      iframe.style.top = "".concat(y, "px");
    };
    var cancelIFrameSelection = function cancelIFrameSelection(e) {
      e.preventDefault();
      e.stopPropagation();
    };
    var onMouseMove = function onMouseMove(e) {
      var eventPosition = getOriginalEvent(e);
      drag(eventPosition.screenX + offset.x, eventPosition.screenY + offset.y);
    };
    var onMouseDown = function onMouseDown(e) {
      var eventPosition = getOriginalEvent(e);
      var rect = iframe.getBoundingClientRect();
      offset.x = rect.left + handleElement.offsetLeft - eventPosition.screenX;
      offset.y = rect.top + handleElement.offsetTop - eventPosition.screenY;
      events.add(iframeDoc, 'mousemove touchmove pointermove', onMouseMove);
      events.add(iframeDoc, 'selectstart', cancelIFrameSelection);
    };
    var onMouseUp = function onMouseUp() {
      events.remove(iframeDoc, 'mousemove touchmove pointermove', onMouseMove);
      events.remove(iframeDoc, 'selectstart', cancelIFrameSelection);
    };

    // prevent iframe dragging while browser tabs is switching
    document.addEventListener('visibilitychange', onMouseUp);
    events.add(handleElement, 'mousedown touchstart', onMouseDown);
    events.add(iframeDoc, 'mouseup touchend pointerup', onMouseUp);
    events.add(iframeDoc, 'contextmenu', function (e) {
      e.preventDefault();
      return false;
    });
  };
  var checkElementPosition = function checkElementPosition(element, pos) {
    var position = pos;
    windowWidth = getWindowSize().width;
    windowHeight = getWindowSize().height;
    elWidth = element.clientWidth;
    elHeight = element.clientHeight;
    if (outsidePosition.top(position)) position.y = windowHeight - 60;
    if (outsidePosition.bottom(position)) position.y = -windowHeight + 60;
    if (outsidePosition.left(position)) position.x = windowWidth - 60;
    if (outsidePosition.right(position)) position.x = -windowWidth + 60;
    moveElementTo(element, position.x, position.y);
  };
  return {
    makeElementDraggable: makeElementDraggable,
    makeIframeDraggable: makeIframeDraggable,
    moveElementTo: moveElementTo,
    setAnchorPosition: setAnchorPosition,
    checkElementPosition: checkElementPosition
  };
}
var uiUtils = new UIUtils();
/* harmony default export */ const ui_utils = (uiUtils);
;// ./src/button.js









/**
 * Adguard assistant button
 * @returns {{show: show, remove: remove}}
 * @constructor
 */
function UIButton() {
  var button = null;
  var buttonElement = null;
  var isFullScreenEventsRegistered = false;
  var iframeController = null;

  // Important attribute for all inline stylesheets.
  // It needs for Content-Security-Policy.
  var getStyleNonce = function getStyleNonce() {
    var adgSettings = src_settings.getAdguardSettings();
    if (adgSettings === null) {
      return '';
    }
    return adgSettings.nonce;
  };
  var isButtonAlreadyInDOM = function isButtonAlreadyInDOM() {
    var alert = document.querySelector('.adguard-alert');
    if (alert) {
      src_log.error('Assistant button is already in DOM');
      return true;
    }
    return false;
  };

  /**
   * Checking browser and other requirements.
   * @private
   */
  var checkRequirements = function checkRequirements() {
    if (!ui_validation_utils.validateBrowser()) {
      return false;
    }
    if (!ui_validation_utils.validatePage()) {
      return false;
    }
    if (!ui_validation_utils.checkVisibleAreaSize()) {
      return false;
    }
    if (isButtonAlreadyInDOM()) {
      return false;
    }
    return true;
  };

  /**
   * Set a special classes for the pages on which
   * under the button there are important elements
   * issue: https://github.com/AdguardTeam/AdguardAssistant/issues/32
   */
  var respectPageElements = function respectPageElements(btn) {
    var buttonInRightBottom = hasClass(btn, 'adguard-assistant-button-bottom') && hasClass(btn, 'adguard-assistant-button-right');
    if (buttonInRightBottom && document.location.hostname.indexOf('vk.com') >= 0) {
      addClass(btn, 'adguard-assistant-button-respect adguard-assistant-button-respect-vk');
    }
    if (buttonInRightBottom && document.location.hostname.indexOf('facebook.com') >= 0) {
      addClass(btn, 'adguard-assistant-button-respect adguard-assistant-button-respect-fb');
    }
    return false;
  };
  var setPositionSettingsToButton = function setPositionSettingsToButton(btn) {
    var position = src_settings.getUserPositionForButton();
    if (src_settings.getIconSize()) {
      addClass(btn, 'logo-small');
    }

    // The anchor determines from which side of the
    // browser the positions of `position.x`, `position.y`.
    // If `position` parameter is not defined,
    // so the position of the button is set in the corners of the browser
    if (position && position.storedAnchor) {
      ui_utils.setAnchorPosition.positionY(btn, position.storedAnchor.top);
      ui_utils.setAnchorPosition.positionX(btn, position.storedAnchor.left);
      ui_utils.moveElementTo(btn, position.x, position.y);
      ui_utils.checkElementPosition(btn, position);
      return false;
    }

    // Getting the corner of the browser where the button is placed
    var side = src_settings.getButtonSide();
    if (side) {
      ui_utils.setAnchorPosition.positionY(btn, side.top);
      ui_utils.setAnchorPosition.positionX(btn, side.left);
      respectPageElements(btn);
    }
    return undefined;
  };

  /**
   * Get center button position
   * @returns {{left: *, top: *}}
   * @private
   */
  var getButtonPosition = function getButtonPosition(btn) {
    var box = btn.getBoundingClientRect();
    return {
      top: box.top + btn.offsetHeight / 2,
      left: box.left + btn.offsetWidth / 2
    };
  };
  var hideButton = function hideButton() {
    if (!button) {
      return;
    }
    button.style.setProperty('display', 'none', 'important');
  };
  var showButton = function showButton() {
    if (!button) {
      return;
    }
    button.style.setProperty('display', 'block', 'important');
  };
  var hideRestoreOnFullScreen = function hideRestoreOnFullScreen() {
    if (isFullScreenEventsRegistered) {
      return;
    }
    var isFullScreen = false;
    var onFullScreen = function onFullScreen() {
      if (!isFullScreen) {
        hideButton();
        isFullScreen = true;
      } else {
        showButton();
        isFullScreen = false;
      }
    };
    document.addEventListener('webkitfullscreenchange', onFullScreen);
    document.addEventListener('mozfullscreenchange', onFullScreen);
    document.addEventListener('fullscreenchange', onFullScreen);
    isFullScreenEventsRegistered = true;
  };
  var registerEvents = function registerEvents(btn) {
    var onDragEnd = function onDragEnd(data) {
      src_settings.setUserPositionForButton(data);
    };
    var openMenu = function openMenu() {
      iframeController.setButtonPosition(getButtonPosition(btn));
      iframeController.showDetailedMenu();
    };
    ui_utils.makeElementDraggable(btn, onDragEnd, openMenu);
    hideRestoreOnFullScreen();
  };

  /**
   * Shows Adguard initial button
   */
  var show = function show() {
    // TODO: get rid of it
    iframeController = src_ioc.get('iframeController');
    iframeController.onCloseMenu.attach(showButton);
    iframeController.onShowMenuItem.attach(hideButton);
    if (!checkRequirements()) {
      src_log.info('Environment doesn\'t satisfy requirements, so don\'t show Adguard');
      return;
    }
    if (button) {
      return;
    }
    src_log.debug('Requirements checked, all ok');
    buttonElement = src_protectedApi.createElement('div');
    src_protectedApi.setInnerHtml(buttonElement, HTML.button);
    button = buttonElement.firstChild;
    var adgStylesButton;
    if (src_protectedApi.checkShadowDomSupport()) {
      var shadowbuttonElement = buttonElement.attachShadow({
        mode: 'closed'
      });
      adgStylesButton = src_protectedApi.createStylesElement(CSS.common + CSS.button, getStyleNonce());
      shadowbuttonElement.appendChild(adgStylesButton);
      shadowbuttonElement.appendChild(button);
      document.documentElement.appendChild(buttonElement);
    } else {
      adgStylesButton = src_protectedApi.createStylesElement(CSS.button, getStyleNonce(), 'adg-styles-button');
      if (adgStylesButton) {
        document.documentElement.appendChild(adgStylesButton);
      }
      document.documentElement.appendChild(button);
      buttonElement = button;
    }
    setPositionSettingsToButton(button);
    registerEvents(button);
  };
  var removeButton = function removeButton() {
    if (!button) {
      return;
    }
    document.documentElement.removeChild(buttonElement);
    button = null;
  };
  return {
    show: show,
    remove: removeButton
  };
}
var button_button = new UIButton();
/* harmony default export */ const src_button = (button_button);
;// ./src/controllers/settingsMenuController.js




/**
 * Settings menu controller
 * @returns {{init: init}}
 * @constructor
 */
function SettingsMenuController(iframe) {
  var contentDocument = null;
  var iframeCtrl = iframe;
  var buttonSides = {
    'position-bottom-right': {
      top: false,
      left: false
    },
    'position-bottom-left': {
      top: false,
      left: true
    },
    'position-top-right': {
      top: true,
      left: false
    },
    'position-top-left': {
      top: true,
      left: true
    }
  };
  var close = function close() {
    iframeCtrl.removeIframe();
  };
  var setIconSize = function setIconSize() {
    var smallIcon = contentDocument.getElementById('size-small').checked;
    src_settings.setIconSize(smallIcon);
  };
  var setPersonalParam = function setPersonalParam() {
    var personalConfig = contentDocument.getElementById('this-site').checked;
    src_settings.setPersonalParam(personalConfig);
  };
  var setButtonSide = function setButtonSide() {
    var sideItem = null;
    Object.keys(buttonSides).forEach(function (item) {
      if (contentDocument.getElementById(item).checked) {
        sideItem = item;
      }
    });
    if (sideItem) {
      src_settings.setButtonSide(buttonSides[sideItem]);
    }
  };
  var setDefaultSettings = function setDefaultSettings() {
    if (src_settings.getIconSize()) {
      contentDocument.getElementById('size-small').checked = true;
    } else {
      contentDocument.getElementById('size-big').checked = true;
    }
    if (src_settings.getPersonalConfig()) {
      contentDocument.getElementById('this-site').checked = true;
    } else {
      contentDocument.getElementById('all-site').checked = true;
    }
    var position = src_settings.getUserPositionForButton();
    if (position) {
      return;
    }
    var sideFromSettings = src_settings.getButtonSide();
    Object.keys(buttonSides).forEach(function (item) {
      var sideItem = buttonSides[item];
      if (sideItem.left === sideFromSettings.left && sideItem.top === sideFromSettings.top) {
        contentDocument.getElementById(item).checked = true;
      }
    });
  };
  var saveSettings = function saveSettings() {
    setPersonalParam();
    setIconSize();
    setButtonSide();
    src_settings.saveSettings();
    close();
    src_button.remove();
    src_button.show();
  };
  var bindEvents = function bindEvents() {
    var menuEvents = {
      '.close': close,
      '#cancel': iframeCtrl.showDetailedMenu,
      '#save-settings': saveSettings
    };
    Object.keys(menuEvents).forEach(function (item) {
      var elems = contentDocument.querySelectorAll(item);
      toArray(elems).forEach(function (elem) {
        return elem.addEventListener('click', menuEvents[item]);
      });
    });
  };

  /*
   Called from IframeController._showMenuItem to initialize view
   */
  // eslint-disable-next-line no-shadow
  var init = function init(iframe) {
    // eslint-disable-next-line prefer-destructuring
    contentDocument = iframe.contentDocument;
    bindEvents();
    setDefaultSettings();
  };
  return {
    init: init
  };
}
;// ./src/iframe.js


















/**
 * Manages iframe and it's content
 * @returns {{
 * showDetailedMenu: showDetailedMenu,
 * showSelectorMenu: showSelectorMenu,
 * showSliderMenu: showSliderMenu,
 * showBlockPreview: showBlockPreview,
 * showSettingsMenu: showSettingsMenu,
 * setButtonPosition: setButtonPosition,
 * onCloseMenu: CustomEvent,
 * onShowMenuItem: CustomEvent,
 * removeIframe: removeIframe,
 * resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced,
 * resizeSliderMenuToNormal: resizeSliderMenuToNormal
 * }}
 * @constructor
 */
function IframeController() {
  var iframe = null;
  var iframeAnchor = null;
  var currentItem = null;
  var iframeMaxWidth = 320;
  var iframeMaxHeight = 407;
  var menuMaxWidth = 600;
  var menuMaxHeight = 640;
  var menuInitialHeight = 252;
  var detailedMenuInitialHeight = 355;
  var settingsMaxWidth = 458;
  var iframePositionOffset = 20;
  var buttonPosition = null;
  var blockedElementsStyleID = 'ag-hide-elements-style-id';
  var views = {};
  views[src_settings.MenuItemsNames.DetailedMenu] = HTML.detailed_menu;
  views[src_settings.MenuItemsNames.SelectorMenu] = HTML.selector_menu;
  views[src_settings.MenuItemsNames.SliderMenu] = HTML.slider_menu;
  views[src_settings.MenuItemsNames.BlockPreview] = HTML.preview;
  views[src_settings.MenuItemsNames.SettingsMenu] = HTML.settings_menu;
  if (window.innerWidth < menuMaxWidth) menuMaxWidth = window.innerWidth;
  if (window.innerWidth < settingsMaxWidth) settingsMaxWidth = window.innerWidth;
  var onCloseMenu = new CustomEvent();
  var onShowMenuItem = new CustomEvent();

  // Important attribute for all inline stylesheets.
  // It needs for Content-Security-Policy.
  var getStyleNonce = function getStyleNonce() {
    var adgSettings = src_settings.getAdguardSettings();
    if (adgSettings === null) {
      return '';
    }
    return adgSettings.nonce;
  };
  var createShadowRootElement = function createShadowRootElement(iframeAnc) {
    var shadowiframeAnchor = iframeAnc.attachShadow({
      mode: 'closed'
    });
    var stylesElement = src_protectedApi.createStylesElement(CSS.common + CSS.iframe, getStyleNonce());
    shadowiframeAnchor.appendChild(stylesElement);
    return shadowiframeAnchor;
  };
  var createIframe = function createIframe(onIframeLoadCallback) {
    src_log.debug('Creating iframe');
    iframe = src_protectedApi.createElement('iframe');

    // IE hack for prevent access denied error
    // see: https://stackoverflow.com/questions/1886547/access-is-denied-javascript-error-when-trying-to-access-the-document-object-of
    if (navigator.userAgent.match(/msie/i)) {
      iframe.src = "javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"".concat(document.domain, "\\\";<\\\\/script>\\');document.close();};</script>'");
    }
    var attributes = {
      id: src_settings.Constants.IFRAME_ID,
      "class": adguard_selector.ignoreClassName(),
      frameBorder: 0,
      allowTransparency: 'true'
    };
    Object.keys(attributes).forEach(function (item) {
      iframe.setAttribute(item, attributes[item]);
    });
    var iframeAlreadyLoaded = false;
    iframe.addEventListener('load', function () {
      if (iframeAlreadyLoaded) {
        // IE calls load each time when we use document.close
        return;
      }
      iframeAlreadyLoaded = true;
      onIframeLoadCallback();
    });
    if (src_protectedApi.checkShadowDomSupport()) {
      iframeAnchor = src_protectedApi.createElement('div');
      createShadowRootElement(iframeAnchor).appendChild(iframe);
    } else {
      iframeAnchor = iframe;
    }
    document.documentElement.appendChild(iframeAnchor);
  };
  var getIframePosition = function getIframePosition() {
    var maxHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iframeMaxHeight;
    var viewPort = ui_validation_utils.getViewPort();
    if (!buttonPosition) {
      return {
        left: iframe.offsetLeft <= 0 ? window.innerWidth : iframe.offsetLeft,
        top: parseInt(iframe.style.top, 10) || iframePositionOffset
      };
    }
    var defaultPosition = {
      left: buttonPosition.left,
      top: buttonPosition.top
    };
    var sides = [{
      // left top
      left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
      top: buttonPosition.top - maxHeight - iframePositionOffset
    }, {
      // right top
      left: buttonPosition.left + iframePositionOffset,
      checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
      top: buttonPosition.top - maxHeight - iframePositionOffset
    }, {
      // bottom right
      left: buttonPosition.left + iframePositionOffset,
      checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
      checkTop: buttonPosition.top + maxHeight + iframePositionOffset,
      top: buttonPosition.top + iframePositionOffset
    }, {
      // bottom left
      left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
      checkTop: buttonPosition.top + maxHeight + iframePositionOffset,
      top: buttonPosition.top + iframePositionOffset
    }];
    for (var i = 0; i < sides.length; i += 1) {
      var currentSide = sides[i];
      var left = currentSide.checkLeft ? currentSide.checkLeft : currentSide.left;
      var top = currentSide.checkTop ? currentSide.checkTop : currentSide.top;
      if (left < 0 || left > viewPort.width) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (top < 0 || top > viewPort.height) {
        // eslint-disable-next-line no-continue
        continue;
      }
      return currentSide;
    }
    return defaultPosition;
  };
  var specifyIframePosition = function specifyIframePosition() {
    var viewPort = ui_validation_utils.getViewPort();
    if (iframe.offsetLeft + iframe.offsetWidth > viewPort.width) {
      iframe.style.left = "".concat(Math.max(0, viewPort.width - iframe.offsetWidth - iframePositionOffset), "px");
    }
    if (iframe.offsetLeft < 0) {
      iframe.style.left = "".concat(iframePositionOffset, "px");
    }
    if (iframe.offsetTop + iframe.offsetHeight > viewPort.height) {
      iframe.style.top = "".concat(Math.max(0, viewPort.height - iframe.offsetHeight - iframePositionOffset), "px");
    }
    if (iframe.offsetHeight < 0) {
      iframe.style.top = "".concat(iframePositionOffset, "px");
    }
  };
  var appendContent = function appendContent(view) {
    var body = iframe.contentDocument.body;
    for (var i = 0; i < body.children.length; i += 1) {
      body.removeChild(body.children[i]);
    }
    body.appendChild(view);
  };
  var localize = function localize() {
    var elements = iframe.contentDocument.querySelectorAll('[i18n]');
    for (var i = 0; i < elements.length; i += 1) {
      var message = src_localization.getMessage(elements[i].getAttribute('i18n'));
      src_localization.translateElement(elements[i], message);
    }
  };
  var resizeIframe = function resizeIframe(width, height) {
    var frame = iframe;

    // setting iframe height dynamically based on inner content
    if (height === 'auto' || !height) {
      // eslint-disable-next-line no-param-reassign
      height = frame.contentWindow.document.body.querySelector('.main').clientHeight || iframeMaxHeight;
    }
    if (width) {
      frame.width = width;
      frame.style.setProperty('width', "".concat(width, "px"), 'important');
    }
    if (height) {
      frame.height = height;
      frame.style.setProperty('height', "".concat(height, "px"), 'important');
    }
  };
  var showMenuItem = function showMenuItem(viewName, controller, width, height, options) {
    src_log.debug("Showing menu item: ".concat(viewName));
    if (currentItem === viewName) {
      return;
    }
    var onIframeLoad = function onIframeLoad() {
      var frameElement = iframe;
      var view = src_protectedApi.createElement(views[viewName]);
      var stylesElement = src_protectedApi.createStylesElement(CSS.common + CSS.button + CSS.iframe, getStyleNonce());
      view.appendChild(stylesElement);
      appendContent(view);
      localize();
      if (!options) {
        // eslint-disable-next-line no-param-reassign
        options = {};
      }
      // eslint-disable-next-line no-param-reassign
      options.iframeAnchor = iframeAnchor;
      controller.init(frameElement, options);
      currentItem = viewName;
      onShowMenuItem.notify();
      if (options.dragElement) {
        ui_utils.makeIframeDraggable(iframe, iframe.contentDocument.querySelector(options.dragElement));
      }
      if (options.includeSvgIcons) {
        var icons = src_protectedApi.createElement(HTML.svg_icons);
        view.appendChild(icons);
      }

      // make iframe size as like internal content size
      resizeIframe(width, height);
      var iframePosition = getIframePosition(options.maxHeight || iframeMaxHeight);
      iframe.style.left = "".concat(iframePosition.left, "px");
      iframe.style.top = "".concat(iframePosition.top, "px");

      // fixing iframe position after resize, to avoid iframe outside of the viewport
      specifyIframePosition();
    };
    if (!iframe) {
      var adgStylesSelector = src_protectedApi.createStylesElement(CSS.selector, getStyleNonce(), 'adg-styles-selector');
      if (adgStylesSelector) {
        document.documentElement.appendChild(adgStylesSelector);
      }
      createIframe(onIframeLoad);
      return;
    }
    onIframeLoad();
  };
  var setButtonPosition = function setButtonPosition(coords) {
    buttonPosition = coords;
  };

  // e.isTrusted checking for prevent programmatically events
  // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
  var _removeIframe = function removeIframe(e) {
    if (e && e.isTrusted === false) {
      return false;
    }
    if (!iframeAnchor) {
      return false;
    }
    document.removeEventListener('click', _removeIframe);
    document.documentElement.removeChild(iframeAnchor);
    iframe = null;
    iframeAnchor = null;
    currentItem = null;
    adguard_selector.close();
    onCloseMenu.notify();
    return undefined;
  };
  var setCloseEventIfNotHitIframe = function setCloseEventIfNotHitIframe(setEvent) {
    document.removeEventListener('click', _removeIframe);
    if (setEvent) {
      window.setTimeout(function () {
        document.addEventListener('click', _removeIframe);
      }, 150);
    }
  };
  var showDetailedMenu = function showDetailedMenu() {
    var controller = new DetailedMenuController(src_ioc.get('iframeController'));
    var options = {
      dragElement: '.menu-head',
      maxHeight: detailedMenuInitialHeight
    };
    showMenuItem(src_settings.MenuItemsNames.DetailedMenu, controller, iframeMaxWidth, 'auto', options);
    setCloseEventIfNotHitIframe(true);
  };
  var showSelectorMenu = function showSelectorMenu() {
    var controller = new SelectorMenuController(src_ioc.get('iframeController'));
    var options = {
      dragElement: '.head',
      includeSvgIcons: true,
      maxHeight: menuMaxHeight
    };
    showMenuItem(src_settings.MenuItemsNames.SelectorMenu, controller, menuMaxWidth, menuInitialHeight, options);
    setCloseEventIfNotHitIframe(false);
  };
  var showSliderMenu = function showSliderMenu(initElement, currentElement, path, optionsState) {
    var controller = new SliderMenuController(src_ioc.get('addRule'), src_ioc.get('iframeController'));
    var options = {
      path: path,
      currentElement: currentElement,
      element: initElement,
      dragElement: '.head',
      options: optionsState,
      includeSvgIcons: true,
      maxHeight: menuMaxHeight
    };
    showMenuItem(src_settings.MenuItemsNames.SliderMenu, controller, menuMaxWidth, 'auto', options);
    setCloseEventIfNotHitIframe(true);
  };
  var showBlockPreview = function showBlockPreview(initElement, path, currentElement, optionsState) {
    var controller = new BlockPreviewController(src_ioc.get('addRule'), src_ioc.get('iframeController'));
    var options = {
      path: path,
      currentElement: currentElement,
      element: initElement,
      dragElement: '.head',
      options: optionsState,
      includeSvgIcons: true,
      maxHeight: menuMaxHeight
    };
    showMenuItem(src_settings.MenuItemsNames.BlockPreview, controller, menuMaxWidth, 'auto', options);
    setCloseEventIfNotHitIframe(true);
  };
  var showSettingsMenu = function showSettingsMenu() {
    var controller = new SettingsMenuController(src_ioc.get('iframeController'));
    var options = {
      dragElement: '.head'
    };
    showMenuItem(src_settings.MenuItemsNames.SettingsMenu, controller, 400, 468, options);
    setCloseEventIfNotHitIframe(true);
  };
  var resizeSliderMenuToAdvanced = function resizeSliderMenuToAdvanced() {
    resizeIframe(null, null);
  };
  var resizeSliderMenuToNormal = function resizeSliderMenuToNormal() {
    resizeIframe(null, null);
  };
  var hideElementsByPath = function hideElementsByPath(selectedPath, styleID) {
    if (!selectedPath) {
      return false;
    }
    var slctr;
    var style;
    if (selectedPath.indexOf('://') > 0) {
      // all images by src
      slctr = "[src*=\"".concat(selectedPath.split('$domain=')[0], "\"]");
    } else {
      // eslint-disable-next-line prefer-destructuring
      slctr = selectedPath.split('##')[1];
    }
    if (slctr) {
      style = "".concat(slctr, "{display:none!important}");
    } else {
      src_log.error('Can`t block element: `selector` path is empty');
      return false;
    }
    if (!styleID) {
      // eslint-disable-next-line no-param-reassign
      styleID = blockedElementsStyleID;
    }
    var stylesElement = document.documentElement.querySelector("#".concat(styleID));
    if (stylesElement) {
      src_protectedApi.setInnerHtml(stylesElement, "".concat(stylesElement.innerHTML, " ").concat(style));
    } else {
      document.documentElement.appendChild(src_protectedApi.createStylesElement(style, getStyleNonce(), styleID));
    }

    // do not hide assistant div if the user wrote a rule
    // that blocks all div or iframe elements
    if (iframeAnchor) {
      iframeAnchor.style.setProperty('display', 'block', 'important');
    }
    return undefined;
  };

  // show elements hidden by `hideElementsByPath` function
  var showHiddenElements = function showHiddenElements(styleID) {
    if (!styleID) {
      // eslint-disable-next-line no-param-reassign
      styleID = blockedElementsStyleID;
    }
    var stylesElement = document.documentElement.querySelector("#".concat(styleID));
    if (stylesElement) {
      stylesElement.parentNode.removeChild(stylesElement);
    }
  };
  var blockElement = function blockElement(path, addRule) {
    if (gm.ADG_addRule) {
      gm.ADG_addRule(path, function () {
        _removeIframe();
        hideElementsByPath(path);
        bypassCache();
      });
    } else {
      if (!addRule) {
        src_log.error('Callback function `addRule` can\'t be undefined!');
      }
      addRule(path);
      _removeIframe();
      hideElementsByPath(path);
      bypassCache();
    }
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
    removeIframe: _removeIframe,
    resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced,
    resizeSliderMenuToNormal: resizeSliderMenuToNormal,
    resizeIframe: resizeIframe,
    hideElementsByPath: hideElementsByPath,
    showHiddenElements: showHiddenElements,
    blockElement: blockElement
  };
}
/* harmony default export */ const iframe = (IframeController);
;// ./src/controllers/sliderMenuControllerMobile.js




/**
 * Slider menu controller mobile
 * @param addRule
 * @param iframe
 * @returns {{init: init}}
 * @constructor
 */
function SliderMenuControllerMobile(addRule, iframe) {
  var contentDocument = null;
  var selectedElement = null;
  var iframeCtrl = iframe;
  var nodeParentsCount = 0;
  var nodeChildsCount = 0;
  var parents;
  var children;
  var nodeNumber = 0;
  function showPreview() {
    adguard_selector.reset();
    if (this.classList.contains('active')) {
      removeClass(selectedElement, 'sg_hide_element');
      removeClass(this, 'active');
      adguard_selector.selectElement(selectedElement);
      contentDocument.querySelector('.adg-plus').removeAttribute('disabled');
      contentDocument.querySelector('.adg-minus').removeAttribute('disabled');
      contentDocument.querySelector('.adg-close').removeAttribute('disabled');
    } else {
      addClass(selectedElement, 'sg_hide_element');
      addClass(this, 'active');
      contentDocument.querySelector('.adg-plus').setAttribute('disabled', 'disabled');
      contentDocument.querySelector('.adg-minus').setAttribute('disabled', 'disabled');
      contentDocument.querySelector('.adg-close').setAttribute('disabled', 'disabled');
    }
  }
  var getUrlBlockAttribute = function getUrlBlockAttribute(element) {
    var urlBlockAttributes = ['src', 'data'];
    for (var i = 0; i < urlBlockAttributes.length; i += 1) {
      var attr = urlBlockAttributes[i];
      var value = element.getAttribute(attr);
      if (value) {
        return value;
      }
    }
    return null;
  };
  var getFilterText = function getFilterText() {
    var options = {
      urlMask: getUrlBlockAttribute(selectedElement),
      cssSelectorType: 'STRICT_FULL',
      isBlockOneDomain: false,
      url: document.location,
      ruleType: 'CSS'
    };
    return adguard_rules_constructor.constructRuleText(selectedElement, options);
  };
  var blockElement = function blockElement() {
    selectedElement.classList.remove('sg_hide_element');
    selectedElement.style.display = 'none';
    addRule(getFilterText());
    iframeCtrl.removeIframe();
  };
  var onSliderMove = function onSliderMove(element) {
    selectedElement = element;
    adguard_selector.selectElement(element);
  };
  var plus = function plus() {
    nodeNumber = nodeNumber + 1 > nodeParentsCount ? nodeNumber : nodeNumber + 1;
    if (nodeNumber >= 0) {
      if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
      // eslint-disable-next-line no-bitwise
    } else if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
  };
  var minus = function minus() {
    // TODO: rewrite this
    // eslint-disable-next-line no-unused-expressions, no-self-assign
    nodeNumber <= -nodeChildsCount ? nodeNumber = nodeNumber : nodeNumber -= 1;
    if (nodeNumber >= 0) {
      if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
      // eslint-disable-next-line no-bitwise
    } else if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
  };
  var bindEvents = function bindEvents() {
    var menuEvents = {
      '.adg-close': iframeCtrl.showSelectorMenu,
      '.adg-preview': showPreview,
      '.adg-accept': blockElement,
      '.adg-plus': plus,
      '.adg-minus': minus
    };
    Object.keys(menuEvents).forEach(function (item) {
      var elems = contentDocument.querySelectorAll(item);
      toArray(elems).forEach(function (elem) {
        return elem.addEventListener('click', menuEvents[item]);
      });
    });
    window.addEventListener('orientationchange', iframeCtrl.showSelectorMenu);
  };

  /*
   Called from IframeController._showMenuItem to initialize view
   */
  // eslint-disable-next-line no-shadow
  var init = function init(iframe, options) {
    selectedElement = options.element;
    // eslint-disable-next-line prefer-destructuring
    contentDocument = iframe.contentDocument;
    bindEvents();
    adguard_selector.selectElement(selectedElement);
    children = getAllChildren(selectedElement);
    parents = getParentsLevel(selectedElement);
    parents.splice(0, 0, selectedElement);
    nodeParentsCount = parents.length;
    nodeChildsCount = children.length;
  };
  return {
    init: init
  };
}
;// ./package.json
const package_namespaceObject = {"rE":"4.3.77"};
;// ./src/iframe.mobile.js
function iframe_mobile_typeof(o) { "@babel/helpers - typeof"; return iframe_mobile_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, iframe_mobile_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = iframe_mobile_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function iframe_mobile_toPropertyKey(t) { var i = iframe_mobile_toPrimitive(t, "string"); return "symbol" == iframe_mobile_typeof(i) ? i : i + ""; }
function iframe_mobile_toPrimitive(t, r) { if ("object" != iframe_mobile_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != iframe_mobile_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }











/**
 * Manages iframe and it's content
 * @returns {{
 * showSelectorMenu: showSelectorMenu,
 * showSliderMenu: showSliderMenu,
 * setButtonPosition: setButtonPosition,
 * onCloseMenu: CustomEvent,
 * onShowMenuItem: CustomEvent,
 * removeIframe: removeIframe
 * }}
 * @constructor
 */
function IframeControllerMobile() {
  var iframe = null;
  var iframeElement = null;
  var currentItem = null;
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
    "class": adguard_selector.ignoreClassName(),
    frameBorder: 0,
    allowTransparency: 'true',
    id: 'iframe-x2eRYVVQRsG9'
  };
  var updateIframeAttrs = function updateIframeAttrs(attrs) {
    iframe.removeAttribute('style');
    iframe.removeAttribute('height');
    var attributes = _objectSpread(_objectSpread({}, defaultAttributes), attrs);
    Object.keys(attributes).forEach(function (item) {
      iframe.setAttribute(item, attributes[item]);
    });
  };
  var updateIframeStyles = function updateIframeStyles(styles) {
    var css = _objectSpread(_objectSpread({}, defaultCSS), styles);
    Object.keys(css).forEach(function (item) {
      iframe.style[item] = css[item];
    });
  };
  var createIframe = function createIframe(onIframeLoadCallback, styles, attrs) {
    src_log.debug('Creating iframe');
    if (document.querySelector("#".concat(defaultAttributes.id))) {
      src_log.error('Iframe already added');
      return;
    }
    iframe = src_protectedApi.createElement('iframe');
    iframe.addEventListener('load', function () {
      onIframeLoadCallback();
      updateIframeAttrs(attrs);
      updateIframeStyles(styles);
    });
    iframeElement = iframe;
    var adgStylesSelector = src_protectedApi.createStylesElement(CSS.selector, 'adg-styles-selector');
    if (adgStylesSelector) {
      document.documentElement.appendChild(adgStylesSelector);
    }
    document.documentElement.appendChild(iframeElement);
  };
  var appendContent = function appendContent(view) {
    var body = iframe.contentDocument.body;
    for (var i = 0; i < body.children.length; i += 1) {
      body.removeChild(body.children[i]);
    }
    body.appendChild(view);
  };
  var localize = function localize() {
    var elements = iframe.contentDocument.querySelectorAll('[i18n]');
    for (var i = 0; i < elements.length; i += 1) {
      var message = src_localization.getMessage(elements[i].getAttribute('i18n'));
      src_localization.translateElement(elements[i], message);
    }
    var elementsWithTitle = iframe.contentDocument.querySelectorAll('[i18n-title]');
    for (var j = 0; j < elementsWithTitle.length; j += 1) {
      var title = src_localization.getMessage(elementsWithTitle[j].getAttribute('i18n-title'));
      elementsWithTitle[j].setAttribute('title', title);
    }
  };
  var hideIframe = function hideIframe() {
    if (iframe) {
      iframe.style.display = 'none';
    }
  };
  var showIframe = function showIframe() {
    if (iframe) {
      iframe.style.display = 'block';
    }
  };
  var showMenuItem = function showMenuItem(viewName, controller, options, styles, attrs) {
    if (currentItem === viewName) {
      return;
    }
    var onIframeLoad = function onIframeLoad() {
      var frameElement = iframe;
      var view = src_protectedApi.createElement(views[viewName]);
      var iframeStyles = CSS.common + CSS.mobile;
      view.appendChild(src_protectedApi.createStylesElement(iframeStyles));
      appendContent(view);
      localize();
      if (!options) {
        // eslint-disable-next-line no-param-reassign
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
      var adgStylesSelector = src_protectedApi.createStylesElement(CSS.selector, 'adg-styles-selector');
      if (adgStylesSelector) {
        document.documentElement.appendChild(adgStylesSelector);
      }
      createIframe(onIframeLoad, styles, attrs);
      return;
    }
    onIframeLoad();
  };
  var startSelect = function startSelect() {
    hideIframe();
    var controller = new SelectorMenuController(src_ioc.get('iframeController'));
    controller.startSelector();
  };
  var showSelectorMenu = function showSelectorMenu() {
    hideIframe();
    adguard_selector.close();
    var styles = {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      'border-radius': '2px',
      background: 'transparent',
      width: '40vmax',
      height: '40vmax'
    };

    // eslint-disable-next-line no-use-before-define
    showMenuItem('mobilePopup.html', mobilePopupButtonsInit(), null, styles);
  };

  // e.isTrusted checking for prevent programmatically events
  // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
  var _removeIframe = function removeIframe(e) {
    if (e && e.isTrusted === false) {
      return false;
    }
    if (!iframeElement) {
      return false;
    }
    document.removeEventListener('click', _removeIframe);
    window.removeEventListener('orientationchange', showSelectorMenu);
    document.documentElement.removeChild(iframeElement);
    iframe = null;
    iframeElement = null;
    currentItem = null;
    adguard_selector.close();
    onCloseMenu.notify();
    return undefined;
  };
  var mobilePopupButtonsInit = function mobilePopupButtonsInit() {
    return {
      init: function init() {
        var startSelectMode = iframe.contentDocument.querySelector('.start-select-mode');
        var cancelSelectMode = iframe.contentDocument.querySelector('.cancel-select-mode');
        var appVersionElem = iframe.contentDocument.querySelector('#appVersion');
        startSelectMode.addEventListener('click', startSelect);
        cancelSelectMode.addEventListener('click', _removeIframe);
        appVersionElem.innerText = "v".concat(package_namespaceObject.rE);
      }
    };
  };
  var showSliderMenu = function showSliderMenu(element) {
    var controller = new SliderMenuControllerMobile(src_ioc.get('addRule'), src_ioc.get('iframeController'));
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
  return {
    showSelectorMenu: showSelectorMenu,
    showSliderMenu: showSliderMenu,
    onCloseMenu: onCloseMenu,
    onShowMenuItem: onShowMenuItem,
    removeIframe: _removeIframe,
    startSelect: startSelect
  };
}
;// ./src/embedded.js
/* global AdguardSettings */








/* embedded script for extensions */
/*
 * adguardAssistantExtended main function is for desktop browsers
 */
function adguardAssistantExtended() {
  var adguardSettings = typeof AdguardSettings === 'undefined' ? null : AdguardSettings;
  src_wot.registerWotEventHandler();
  src_settings.setAdguardSettings(adguardSettings);
  var iframeController = new iframe();
  src_ioc.register('iframeController', iframeController);
  return {
    start: function start(element, callback) {
      src_ioc.register('addRule', src_protectedApi.functionBind.call(callback, this));
      if (element) {
        iframeController.showSelectorMenu();
        iframeController.showSliderMenu(element);
      } else {
        iframeController.showSelectorMenu();
      }
    },
    close: function close() {
      iframeController.removeIframe();
    }
  };
}

/*
 * adguardAssistantMini function is for mobile browsers
 */
function adguardAssistantMini() {
  var iframeController = new IframeControllerMobile();
  src_ioc.register('iframeController', iframeController);
  return {
    start: function start(element, callback) {
      src_ioc.register('addRule', src_protectedApi.functionBind.call(callback, this));
      if (element) {
        iframeController.showSelectorMenu();
        iframeController.showSliderMenu(element);
      } else {
        iframeController.showSelectorMenu();
      }
    },
    close: function close() {
      iframeController.removeIframe();
    }
  };
}
;// ./src/helpers.js
// eslint-disable-next-line max-len
var mobileReg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
var isMobile = function isMobile(ua) {
  return mobileReg.test(ua);
};
;// ./src/index.js


var adguardAssistant = isMobile(navigator.userAgent) ? adguardAssistantMini : adguardAssistantExtended;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
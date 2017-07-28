// ==UserScript==
// @name Adguard Assistant Mobile
// @name:ru Помощник Adguard
// @name:uk Помічник Adguard
// @name:pl Asystent Adguarda
// @name:de Adguard-Assistent
// @name:zh 使用 Adguard 助手
// @name:he העוזר האישי של אדגארד
// @name:it Assistente Adguard
// @name:fa دستیار اَدگارد
// @name:sr Koristi Adguard-ovog pomoćnika
// @name:es Asistente de Adguard
// @name:id Asisten Aguard
// @namespace Adguard
// @description Provides easy and convenient way to manage filtering right from the browser
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера
// @description:uk Забезпечує легкий і зручний спосіб керування фільтрацією прямо з веб-переглядача
// @description:pl Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki
// @description:de Bietet einen einfachen und nützlichen Weg die Filterung direkt im Browser zu verwalten
// @description:zh 提供简单方便的方法来管理浏览器筛选
// @description:he מספק דרך קלה ונוחה לנהל סינון תקין ישירות מהדפדפן
// @description:it Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser
// @description:fa روش راحت و آسان برای مدیریت فیلترینگ مستیق از داخل مرورگر.
// @description:sr Pruža lak i zgodan način za upravljanje filtriranjem direktno iz pregledača.
// @description:es Permite fácilmente gestionar los filtros desde el navegador
// @description:id Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban
// @version 4.0.11
// @downloadURL https://cdn.adguard.com/public/Userscripts/AdguardAssistant/4.0/assistant.user.js
// @updateURL https://cdn.adguard.com/public/Userscripts/AdguardAssistant/4.0/assistant.meta.js
// @include *
// @exclude *://mil.ru/*
// @exclude *://feedly.com/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/сomments*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget_comments*
// @exclude *www.youtube.com/embed/*
// @require src\utils\css.escape.js
// @require src\ioc.js
// @require src\log.js
// @require src\balalaika.patched.js
// @require src\settings.js
// @require src\utils\ui-utils.js
// @require src\utils\common-utils.js
// @require src\utils\punycode.js
// @require src\event.js
// @require src\selector\diff_match_patch.js
// @require src\selector\dom.patched.js
// @require src\selector\adguard-selector.js
// @require src\adguard-rules-constructor.js
// @require src\iframe.js
// @require src\gm.js
// @require src\slider-widget.js
// @require src\wot.js
// @require src\_locales\ru.js
// @require src\_locales\en.js
// @require src\_locales\fa.js
// @require src\_locales\he.js
// @require src\_locales\it.js
// @require src\_locales\pl.js
// @require src\_locales\uk.js
// @require src\_locales\zh.js
// @require src\_locales\de.js
// @require src\localization.js
// @require src\controllers\mainMenuController.js
// @require src\controllers\selectorMenuController.js
// @require src\controllers\sliderMenuController.js
// @require src\controllers\blockPreviewController.js
// @require src\controllers\settingsMenuController.js
// @require src\button.mobile.js
// @require src\mobile.js
// @resource button.css src\styles\button.css
// @resource selector.css src\styles\selector.css
// @resource button.html    src\templates\button.html
// @resource style.css  src\styles\style.css
// @resource mainMenu.html src\templates\mainMenu.html
// @resource selectorMenu.html src\templates\selectorMenu.html
// @resource sliderMenu.html src\templates\sliderMenu.html
// @resource blockPreview.html src\templates\blockPreview.html
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// ==/UserScript==

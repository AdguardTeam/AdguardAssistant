// ==UserScript==
// @name Adguard Assistant Dev
// @name:ru Помощник Adguard Dev
// @name:uk Помічник Adguard Dev
// @name:de Adguard-Assistent Dev
// @name:sr Koristi Adguard-ovog pomoćnika Dev
// @name:pl Asystent Adguarda Dev
// @name:zh-cn 使用 Adguard 助手 Dev
// @name:it Assistente Adguard Dev
// @name:es Asistente de Adguard Dev
// @name:id Asisten Aguard Dev
// @namespace Adguard
// @description Provides easy and convenient way to manage filtering right from the browser
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера
// @description:uk Забезпечує легкий і зручний спосіб керування фільтрацією прямо з веб-переглядача
// @description:de Bietet einen einfachen und nützlichen Weg die Filterung direkt im Browser zu verwalten
// @description:sr Pruža lak i zgodan način za upravljanje filtriranjem direktno iz pregledača.
// @description:pl Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki
// @description:zh-cn 提供简单方便的方法来管理浏览器筛选
// @description:it Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser
// @description:es Permite fácilmente gestionar los filtros desde el navegador
// @description:id Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban
// @version 4.0.4
// @downloadURL https://AdguardTeam.github.io/AdguardAssistant/assistant.user.js
// @updateURL https://AdguardTeam.github.io/AdguardAssistant/assistant.meta.js
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
// @require src\localization.js
// @require src\controllers\mainMenuController.js
// @require src\controllers\selectorMenuController.js
// @require src\controllers\sliderMenuController.js
// @require src\controllers\blockPreviewController.js
// @require src\controllers\settingsMenuController.js
// @require src\button.js
// @require src\main.js
// @resource button.css src\styles\button.css
// @resource selector.css src\styles\selector.css
// @resource button.html    src\templates\button.html
// @resource style.css  src\styles\style.css
// @resource mainMenu.html src\templates\mainMenu.html
// @resource selectorMenu.html src\templates\selectorMenu.html
// @resource sliderMenu.html src\templates\sliderMenu.html
// @resource blockPreview.html src\templates\blockPreview.html
// @resource settingsMenu.html src\templates\settingsMenu.html
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// @grant   property:settings
// ==/UserScript==

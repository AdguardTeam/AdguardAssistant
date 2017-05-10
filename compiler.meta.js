 // ==UserScript==
// @name	Adguard Assistant
// @name:ru	Помощник Adguard
// @name:uk Помічник Adguard
// @name:de	Adguard-Assistent
// @name:sr	Koristi Adguard-ovog pomoćnika
// @name:pl	Asystent Adguarda
// @name:zh	使用 Adguard 助手
// @name:it	Assistente Adguard
// @name:es	Asistente de Adguard
// @name:id	Asisten Aguard
// @namespace	Adguard
// @description	Provides easy and convenient way to manage filtering right from the browser
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера
// @description:uk Забезпечує легкий та зручний спосіб управління фільтрацією прямо з браузеру
// @description:de  Bietet einen einfachen und bequemen Weg, um Filter direkt aus dem Browser zu verwalten
// @description:tr Tarayıcı içinden kolay ve uygun biçimde filtrelemeyi yönetmenizi sağlar.
// @description:ko 브라우저에서 바로 필터링 할 수 있는 쉽고 편리한 방법을 제공 합니다.
// @description:sr	Pruža lak i zgodan način za upravljanje filtriranjem direktno iz pregledača.
// @description:pl	Zapewnia łatwy i dogodny sposób na zarządzaniem filtrowaniem bezpośrednio z przeglądarek
// @description:zh	提供简单方便的方法来管理浏览器筛选
// @description:zh-TW	提供簡單方便的方法來管理瀏覽器過濾
// @description:sk	Poskytuje pohodlný spôsob na manažment filtrov priamo z prehliadača
// @description:fr	Fournit un moyen facile et pratique de gérer le filtrage à partir du navigateur
// @description:it	Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser
// @description:vi	Cung cấp cách dễ dàng và thuận tiện để quản lý lọc ngay trong trình duyệt
// @description:es	Permite fácilmente gestionar los filtros desde el navegador
// @description:id	Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban
// @description:hu	Könnyű és kényelmes módot nyújt egyenesen a böngészőből történő szűrések kezeléséhez
// @version	4.0.4
// @downloadURL	https://cdn.adguard.com/public/Userscripts/AdguardAssistant/4.0/assistant.user.js
// @updateURL	https://cdn.adguard.com/public/Userscripts/AdguardAssistant/4.0/assistant.meta.js
// @include *
 // @exclude	*://mil.ru/*
// @exclude	*://feedly.com/*
// @exclude	*wikipedia.org*
// @exclude	*icloud.com*
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
// @grant	GM_getValue
// @grant	GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// @grant	property:settings
// ==/UserScript==

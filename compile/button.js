/**
 * Adguard assistant button
 * @param log Logger
 * @param settings User settings
 * @param uiValidationUtils Validation utils
 * @param $ balalaika
 * @param gmApi Gm API impl
 * @param uiUtils UI Utils
 * @param iframeController Iframe controller
 * @param resources Resources that generates in compiler
 * @returns {{show: show, remove: remove}}
 * @constructor
 */
var UIButton = function(log, settings, uiValidationUtils, $, gmApi, uiUtils, iframeController, resources) { // jshint ignore:line
    var button = null;
    var isFullScreenEventsRegistered = false;

    /**
     * Shows Adguard initial button
     */
    var show = function() {
        if (!checkRequirements()) {
            log.info("Environment doesn't satisfy requirements, so don't show Adguard");
            return;
        }
        if (button) {
            return;
        }
        log.debug("Requirements checked, all ok");
        button = "<div class=\"adguard-alert adguard-assistant-button-fixed\"><span class=\"adguard-a-logo\"><span class=\"adguard-logo\"></span></span></div>";
        gmApi.GM_addStyle(".adguard-alert{cursor:pointer;left:0;top:0;position:fixed!important;font:12px Arial,sans-serif!important;line-height:1.5!important;z-index:2147483646!important;width:auto!important;background:0 0!important;height:auto!important;zoom:1!important;display:inline-block!important;margin:0!important;border:0!important;padding:0!important;will-change:transform;opacity:.7;touch-action:none;-ms-touch-action:none;visibility:visible!important;min-height:auto!important;max-height:auto!important;min-width:auto!important;max-width:auto!important}.adguard-hide{display:none!important}.adguard-assistant-button-right{left:auto;right:0}.adguard-assistant-button-left{left:0;right:auto}.adguard-assistant-button-top{top:0;bottom:auto}.adguard-assistant-button-bottom{top:auto;bottom:0}.adguard-assistant-button-top.adguard-assistant-button-left{left:0;right:auto;transform:translate3d(5px,5px,0)}.adguard-assistant-button-top.adguard-assistant-button-right{left:auto;right:0;transform:translate3d(-5px,5px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-left{left:0;right:auto;transform:translate3d(5px,-5px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-right{left:auto;right:0;transform:translate3d(-5px,-5px,0)}.adguard-logo{display:inline-block!important;vertical-align:top!important;width:1em!important;line-height:1!important;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDEwMCAxMDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6IzRGQkU4NX0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0i0KHQu9C+0LlfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNNTAgMWMxNiwwIDM1LDMgNTAsMTEgMCwxNyAxLDYwIC01MCw4OSAtNTAsLTI5IC01MCwtNzIgLTUwLC04OSAxNiwtOCAzNSwtMTEgNTAsLTExem0wIDhjLTE0LDAgLTI5LDMgLTQxLDggMCwxOCA0LDUwIDQxLDc0IDM4LC0yNCA0MSwtNTYgNDIsLTczIC0xMywtNiAtMjgsLTkgLTQyLC05eiIvPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTc3IDI1YzIsMCAxLDAgMiwxbC0zMiA0MWMwLDAgLTIyLC0yNiAtMjMsLTI2IDIsLTEgOCwtNSAxMywwbDEwIDEyIDI3IC0yN2MxLC0xIDIsLTEgMywtMWwwIDB6Ii8+DQogPC9nPg0KPC9zdmc+DQo=) no-repeat 0 0/cover!important;font-size:inherit!important}.adguard-a-logo:hover .adguard-logo{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMGMxNSAwIDMzLjIgMy42IDQ4LjEgMTEuNCAwIDE3LjEuMiA1OS42LTQ4LjEgODguNkMxLjcgNzEgMS45IDI4LjUgMS45IDExLjQgMTYuOCAzLjYgMzUgMCA1MCAwem0wIDguNGMtMTMuNSAwLTI4IDMtMzkuNyA4LjIuMyAxNy42IDMuNiA0OS44IDM5LjcgNzMuNiAzNi4xLTIzLjkgMzkuNC01NiAzOS43LTczLjRDNzggMTEuNSA2My41IDguNCA1MCA4LjR6bTI2LjQ0NiAxNS4xNzdjMS44NTYuNDYxIDEuMDk5LjA5IDIuMzU0LjkyM0w0OC4yIDY2LjRTMjYuMSA0MCAyNiA0MGMxLjUtMS4xIDcuNy01LjIgMTIuMy4ybDkuNiAxMS43TDczLjUgMjVjLjg4OC0uOTY5IDEuNzE5LTEuMTQ3IDIuOTQ2LTEuNDIzeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==)!important}.adguard-a-logo:hover{background:#4fbe85!important}.adguard-logo__white{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDEwMCAxMDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0i0KHQu9C+0LlfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNNTAgMWMxNiwwIDM1LDMgNTAsMTEgMCwxNyAxLDYwIC01MCw4OSAtNTAsLTI5IC01MCwtNzIgLTUwLC04OSAxNiwtOCAzNSwtMTEgNTAsLTExem0wIDhjLTE0LDAgLTI5LDMgLTQxLDggMCwxOCA0LDUwIDQxLDc0IDM4LC0yNCA0MSwtNTYgNDIsLTczIC0xMywtNiAtMjgsLTkgLTQyLC05eiIvPg0KICA8cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTc3IDI1YzIsMCAxLDAgMiwxbC0zMiA0MWMwLDAgLTIyLC0yNiAtMjMsLTI2IDIsLTEgOCwtNSAxMywwbDEwIDEyIDI3IC0yN2MxLC0xIDIsLTEgMywtMWwwIDB6Ii8+DQogPC9nPg0KPC9zdmc+DQo=)!important}.adguard-a-logo{display:inline-block!important;box-sizing:border-box!important;vertical-align:top!important;width:40px!important;height:40px!important;padding:10px 0 0!important;font-size:20px!important;text-align:center!important;border:1px solid #cdcdcd!important;border-radius:50%!important;background:#fff!important}.adguard-a-logo__small{width:24px!important;height:24px!important;font-size:12px!important;padding:6px 0 0!important}.adguard-logo:before{content:\"\\00a0\"!important}.adguard-assistant-button-bottom.adguard-assistant-button-respect-vk{transform:translate3d(-70px,-5px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-respect-fb{transform:translate3d(-5px,-40px,0)}@media print{#adguard-assistant-dialog,.adguard-alert{display:none!important;opacity:0!important;visibility:hidden!important}}");
        gmApi.GM_addStyle("#adguard-assistant-dialog{overflow:hidden!important;z-index:2147483647!important;visibility:visible!important}.sg_suggested{background-color:#ff5!important;background-image:none!important}.sg_border{position:absolute!important;z-index:2147483646!important;background:#fff!important;background-color:#13a35e!important;margin:0!important;padding:0!important;display:block;float:none!important;border:0!important;font-style:normal!important;outline:0!important;vertical-align:baseline!important;text-align:left!important;line-height:12px;box-sizing:content-box!important;min-height:auto!important;max-height:auto!important;min-width:auto!important;max-width:auto!important}.sg_bottom_border{font-size:10px!important;font-weight:700;color:#fff!important;padding:2px 0 2px 5px!important;overflow:hidden!important}.sg_border_red{background-color:red!important}.sg_rejected{background-color:salmon!important;background-image:none!important}img.sg_rejected{border:5px solid red!important}img.sg_suggested{border:5px solid #ff5!important}img.sg_selected{border:5px solid #0f0!important}#_sg_div.sg_top{top:5px!important}#_sg_div.sg_bottom{bottom:5px!important}#_sg_div input{margin-right:10px!important;font-size:15px!important}#_sg_path_field{width:400px!important}#_sg_div .sg_new_line{clear:both!important}#_sg_div .sg_option{float:left!important}#_sg_div .sg_selected_option{text-decoration:underline}.adguard-placeholder{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUM5OUE4MEZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUM5OUE4MUZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Qzk5QTdFRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5Qzk5QTdGRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rJm9wAAAAZQTFRF2+7g1OfZ+LX/EgAAACtJREFUeNpiYIQABhhA5TIyoHIhfCS1DKhcEB/FJAZG7AYzoNlLLy5AgAEAMigAar6TcqkAAAAASUVORK5CYII=)}.adguard-placeholder-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkNBQTNGMkZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkNBQTNGM0ZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2Q0FBM0YwRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2Q0FBM0YxRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49sbDwAAAl9JREFUeNrMmE0o5VEYxq9vJmpI2SBZjCSNKKGwkDE0m8mg2QwzEtkNCeUjGyVhYTbTUIZEMWmkbCVlw9QkG4mammbK5zAWuLqek3ch3W7v+Z8P/7d+u/cczz3neM7zP0Htg12eR6wUkA+eg2yQDOLAYegjiIkEr0AjyAPRfnp8toW9Be20QoHKa0tYEhgCVdwBNoQVgCmQKjPItLAKMAtiZAeaFFYM5sATJ4ODDYl6BuadijIlLAJMgHiFOWJMbGUfmaZsHYN98Bvs6haWA1olx2yCMfAd/DF1+Psl5rwGPWAYXJn8r3wNXjB7L0ENrZLRwy/m6ZDorw8kSqewUpDL7P0Epm3YRRBoYfbugW5bPpZDK8apTnBqS9h7WjWOLXyz5fxPQSWjz0dWcmPrEhdJNIEprIlW198Z7aUV1SasQWJnAp3Dzw+FqWxlOmV2HeXVecbegHBTYS5YYVy1yejrVJhIpxluFPaB6V1WhSWQTXjcJqyKjFVnhagabBhFFk7tgnPmlp+oChNbmMXM70XgL3Nen6qwj8y+xfv53fQZKweFzN5xW4c/Cgwwe9fAui1hIuBlMntHZOKNirAyiQ+NLbBkw8fEE9IM2QSnBv19I+oWVguWQSxzrnX6EVrqoV2I15kS0AxeSszjo+326hQm3hoSQRqR6mCeL2BV5x0VSjYQojDHNmgzcYn/Uxj/H9SBM7fkMQ951Tuw4aageEMpY8FUHnPy+XZECXbRTUFxhezEqCiZFfsFRnXdg1xhgcT9BF/BJG2htRKiDjx376EX9Md36HoR/NDp5jJ1K8AAcQBmooZhTgQAAAAASUVORK5CYII=);background-position:center center;background-repeat:no-repeat;height:100%}.adguard-placeholder-domain{background:#778b7c;color:#fff;left:0;top:0;padding:2px 4px;position:relative}");
        setPositionSettingsToButton(button);
        document.documentElement.appendChild(button[0]);
        registerEvents(button);
    };

    /**
     * Checking browser and other requirements.
     * @private
     */
    var checkRequirements = function() {
        if (!uiValidationUtils.validateBrowser()) {
            return false;
        }

        if (!uiValidationUtils.validatePage()) {
            return false;
        }

        if (!uiValidationUtils.checkVisibleAreaSize()) {
            return false;
        }

        if (isButtonAlreadyInDOM()) {
            return false;
        }
        return true;
    };

    var isButtonAlreadyInDOM = function() {
        var already =  $('.adguard-alert').length > 0;

        if (already) {
            log.error('Assistant button is already in DOM');
            return true;
        }
    };

    var setUserPositionIfExists = function(button) {
        var position = settings.getUserPositionForButton();

        // check if the browser stores old data without a anchor to prevent an error
        if (!position || !position.storedAnchor) {
            return false;
        }

        uiUtils.setAnchorPosition.positionY(button[0], position.storedAnchor.top);
        uiUtils.setAnchorPosition.positionX(button[0], position.storedAnchor.left);

        uiUtils.moveElementTo(button[0], position.x, position.y);

        // validate that button is in the viewport
        // with timeout for deferred execution
        setTimeout(function () {
            uiUtils.checkElementPosition(button[0], position);
        });

        return true;
    };

    var setPositionSettingsToButton = function(button) {
        var config = settings.getSettings();
        if (!config.largeIcon) {
            $(button[0].getElementsByClassName('adguard-a-logo')[0]).addClass('adguard-a-logo__small');
        }
        if (setUserPositionIfExists(button)) {
            return;
        }

        uiUtils.setAnchorPosition.positionY(button[0], config.buttonPositionTop);
        uiUtils.setAnchorPosition.positionX(button[0], config.buttonPositionLeft);

        respectPageElements(button[0]);
    };

    var registerEvents = function(button) {
        var onDragEnd = function(data) {
            settings.setUserPositionForButton(data);
        };

        var openMenu = function() {
            iframeController.setButtonPosition(getButtonPosition());
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(button[0], onDragEnd, openMenu);
        hideRestoreOnFullScreen();
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    var getButtonPosition = function() {
        var box = button[0].getBoundingClientRect();
        return {
            top: box.top + button[0].offsetHeight / 2,
            left: box.left + button[0].offsetWidth / 2
        };
    };

    var hideRestoreOnFullScreen = function() {
        if (isFullScreenEventsRegistered) {
            return;
        }
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function() {
            if (uiUtils.tryFullScreenPrefix(document, "FullScreen") || uiUtils.tryFullScreenPrefix(document, "IsFullScreen")) {
                hideButton();
            } else {
                showButton();
            }
        });
        isFullScreenEventsRegistered = true;
    };

    var hideButton = function() {
        if (!button) {
            return;
        }
        button.addClass('adguard-hide');
    };

    var showButton = function() {
        if (!button) {
            return;
        }
        button.removeClass('adguard-hide');
    };

    var removeButton = function() {
        if (!button) {
            return;
        }
        document.documentElement.removeChild(button[0]);
        button = null;
    };

    /**
     * Set a special classes for the pages on which
     * under the button there are important elements
     * issue: https://github.com/AdguardTeam/AdguardAssistant/issues/32
     */
    var respectPageElements = function(element) {
        var buttonInRightBottom =
            $(element).hasClass('adguard-assistant-button-bottom') &&
            $(element).hasClass('adguard-assistant-button-right');

        if (buttonInRightBottom && document.location.hostname.indexOf('vk.com') >= 0) {
            $(element).addClass('adguard-assistant-button-respect adguard-assistant-button-respect-vk');
        }
        if (buttonInRightBottom && document.location.hostname.indexOf('facebook.com') >= 0) {
            $(element).addClass('adguard-assistant-button-respect adguard-assistant-button-respect-fb');
        }
        return false;
    };

    iframeController.onCloseMenu.attach(showButton);
    iframeController.onShowMenuItem.attach(hideButton);

    return {
        show: show,
        remove: removeButton
    };
};

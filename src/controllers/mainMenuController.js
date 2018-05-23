/**
 * Main menu controller
 * @param $
 * @param wot
 * @param localization
 * @param gmApi
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc, StringUtils */
var DetailedMenuController = function($, wot, localization, gmApi, settings, log, protectedApi) { // jshint ignore:line
    var contentDocument = null;
    var iframeCtrl = null;
    var domain = null;
    var FILTERING_STATE_LS_PROPERTY = '__adfstate';

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function(iframe) {
        contentDocument = iframe.contentDocument;
        iframeCtrl = Ioc.get('iframeController');
        setDomain();
        setWotData();
        bindEvents();
        setInitFilteringState();
    };

    var setDomain = function() {
        domain = decodeURIComponent(location.hostname);
        contentDocument.getElementsByClassName('menu-head_name')[0].textContent = domain || 'unknown';
    };

    var bindEvents = function() {
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
        Object.keys(menuEvents).forEach(function(item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var onIsFilterChange = function() {
        var isFilter = contentDocument.getElementById('is-filter').checked;

        // animate class for prevent animation while the state from the application is determined
        $(contentDocument.querySelectorAll(".menu-filter_label")).addClass("animate");

        showHideBlockAdButton(isFilter);
        setFilteringStateToStore(isFilter);
        gmApi.ADG_changeFilteringState(isFilter, function() {
            CommonUtils.reloadPageBypassCache();
        });
    };

    var setInitFilteringState = function() {
        var input = contentDocument.getElementById('is-filter');
        input.checked = getFilteringStateFromStore();
        gmApi.ADG_isFiltered(function(isFiltered) {
            input.checked = isFiltered;
            setFilteringStateToStore(isFiltered);
            showHideBlockAdButton(isFiltered);
        });
    };

    /**
     * Storing the filtering state for quick initialization
     *
     * @param {Boolean} state  on/off filtering state
     */
    var setFilteringStateToStore = function(state) {
        try {
            localStorage.setItem(FILTERING_STATE_LS_PROPERTY, protectedApi.json.stringify({
                "state": state
            }));
        } catch (ex) {
            log.error(ex);
            return null;
        }
    };

    /**
     * Getting the filtering state for quick initialization from the localStorage,
     * while the state from the application is determined
     *
     * @returns {Boolean} on/off filtering state
     */
    var getFilteringStateFromStore = function() {
        try {
            var state = localStorage.getItem(FILTERING_STATE_LS_PROPERTY);
            if (state) {
                return protectedApi.json.parse(state).state;
            } else {
                return false;
            }
        } catch (ex) {
            log.error(ex);
            return false;
        }
        return false;
    };

    var doNotBlock = function() {
        gmApi.ADG_temporaryDontBlock(30, function() {
            CommonUtils.reloadPageBypassCache();
        });
    };

    var reportAbuse = function() {
        gmApi.ADG_sendAbuse(function() {
            iframeCtrl.removeIframe();
        });
    };

    var goToSiteReport = function() {
        var url = StringUtils.format(settings.Constants.REPORT_URL, domain);
        window.open(url, '_blank');
    };

    var setWotData = function() {
        var wotData = wot.getWotData();
        var wotReputationSettings = getWotReputationSettings(wotData);

        if (wotReputationSettings) {
            var wotIndication = $(contentDocument.getElementById('WotIndication'));
            var wotDescriptionText = contentDocument.getElementById('WotDescriptionText');
            var confidenceIndication = $(contentDocument.getElementById('ConfidenceIndication'));

            contentDocument.getElementsByClassName('wot-indicator')[0].href = wot.getWotScorecardUrl(domain);
            wotIndication.addClass(wotReputationSettings.class);
            var wotLogo = protectedApi.createElement('<span id="WotLogo"><span class="wot-logo"></span></span>');
            wotDescriptionText.textContent = wotReputationSettings.text;
            wotDescriptionText.appendChild(wotLogo);

            var wotConfidenceClass = getWotConfidenceClass(wotData);
            confidenceIndication.addClass(wotConfidenceClass);

            $(contentDocument.getElementsByClassName('wot-hide')).removeClass('wot-hide');
        }
    };

    var goToWotUrl = function() {
        window.open(wot.WOT_URL, '_blank');
    };

    var getWotReputationSettings = function(wotData) {
        if (!wotData) {
            return null;
        }
        var prefix = 'adg-wot-';
        var averageWot = wotData.reputation;
        var wotRatingText = null;
        var wotRating = null;
        if (averageWot === 0) {
            wotRatingText = localization.getMessage('wot_unknown_description');
            wotRating = prefix + 'unknown';
            return {
                text: wotRatingText,
                class: wotRating
            };
        }
        var wotSettings = {
            0: {
                color: 'red',
                string: localization.getMessage('wot_bad_description')
            },
            1: {
                color: 'lightRed',
                string: localization.getMessage('wot_poor_description')
            },
            2: {
                color: 'yellow',
                string: localization.getMessage('wot_unsatisfactory_description')
            },
            3: {
                color: 'lightGreen',
                string: localization.getMessage('wot_good_description')
            },
            4: {
                color: 'green',
                string: localization.getMessage('wot_excellent_description')
            },
            5: {
                color: 'green',
                string: localization.getMessage('wot_excellent_description')
            }
        };
        var current = wotSettings[truncateDecimals(averageWot / 20)];
        wotRatingText = current.string;
        wotRating = prefix + current.color;
        return {
            text: wotRatingText,
            class: wotRating
        };
    };

    var truncateDecimals = function(number) {
        return Math[number < 0 ? 'ceil' : 'floor'](number);
    };

    var getWotConfidenceClass = function(wotData) {
        if (!wotData) {
            return null;
        }
        var prefix = 'adg-wot-confidence-';
        var confidenceWot = wotData.confidence;
        if (confidenceWot >= 0 && confidenceWot < 6) {
            return prefix + '0';
        }
        if (confidenceWot >= 6 && confidenceWot < 12) {
            return prefix + '1';
        }
        if (confidenceWot >= 12 && confidenceWot < 23) {
            return prefix + '2';
        }
        if (confidenceWot >= 23 && confidenceWot < 34) {
            return prefix + '3';
        }
        if (confidenceWot >= 34 && confidenceWot < 45) {
            return prefix + '4';
        }
        if (confidenceWot >= 45) {
            return prefix + '5';
        }
    };

    var startAdSelector = function() {
        iframeCtrl.showSelectorMenu();
    };

    var showHideBlockAdButton = function(isFilter) {
        if (isFilter) {
            $(contentDocument.getElementById('block-ad')).removeClass('hidden');
        } else {
            $(contentDocument.getElementById('block-ad')).addClass('hidden');
        }

        iframeCtrl.resizeIframe();
    };

    return {
        init: init
    };
};

/**
 * Adguard rules constructor
 * @type {Function}
 */
var AdguardRulesConstructorLib = (function (api) {

    var makeCssNthChildFilter = function (element) {

        var path = [];
        var el = element;
        while (el.parentNode) {
            var nodeName = el && el.nodeName ? el.nodeName.toUpperCase() : "";
            if (nodeName == "BODY") {
                break;
            }
            if (el.id) {
                var id = el.id.split(':').join('\\:');//case of colon in id. Need to escape
                if (el.id.indexOf('.') > -1) {
                    path.unshift('[id="' + id + '"]');
                } else {
                    path.unshift('#' + id);
                }
                break;
            } else {
                var c = 1;
                for (var e = el; e.previousSibling; e = e.previousSibling) {
                    if (e.previousSibling.nodeType === 1) {
                        c++;
                    }
                }

                var cldCount = 0;
                for (var i = 0; el.parentNode && i < el.parentNode.childNodes.length; i++) {
                    cldCount += el.parentNode.childNodes[i].nodeType == 1 ? 1 : 0;
                }

                var ch;
                if (cldCount === 0 || cldCount == 1) {
                    ch = "";
                } else if (c == 1) {
                    ch = ":first-child";
                } else if (c == cldCount) {
                    ch = ":last-child";
                } else {
                    ch = ":nth-child(" + c + ")";
                }

                var className = el.className;
                if (className) {
                    if (className.indexOf('.') > 0) {
                        className = '[class="' + className + '"]';
                    } else {
                        className = className.trim().replace(/\s+(?= )/g, ''); //delete more than one space between classes;
                        className = '.' + className.replace(/\s/g, ".");
                    }
                } else {
                    className = '';
                }
                path.unshift(el.tagName + className + ch);

                el = el.parentNode;
            }
        }
        return path.join(" > ");
    };

    var createRuleText = function (element) {
        if (!element) {
            return;
        }

        var selector = makeCssNthChildFilter(element);
        return selector ? "##" + selector : "";
    };

    var createSimilarElementSelector = function (element) {
        if (!element) {
            return "";
        }

        var className = element.className;
        if (!className) {
            return "";
        }

        return '.' + className.trim().replace(/\s+/g, ', .');
    };

    var createSimilarRuleText = function (element) {
        var selector = createSimilarElementSelector(element);
        return selector ? "##" + selector : "";
    };

    var constructUrlBlockRuleText = function (element, urlBlockAttribute, oneDomain, domain) {
        if (!urlBlockAttribute || urlBlockAttribute === '') {
            return null;
        }

        var blockUrlRuleText = urlBlockAttribute.replace(/^http:\/\/(www\.)?/, "||");
        if (blockUrlRuleText.indexOf('.') === 0) {
            blockUrlRuleText = blockUrlRuleText.substring(1);
        }

        if (!oneDomain) {
            blockUrlRuleText = blockUrlRuleText + "$" + "domain=" + domain;
        }

        return blockUrlRuleText;
    };

    /**
     * Utility method
     *
     * @param element
     * @returns {string}
     */
    api.makeCssNthChildFilter = makeCssNthChildFilter;

    /**
     * Constructs css selector for element
     *
     * @param element
     * @param isBlockSimilar
     */
    api.constructCssSelector = function (element, isBlockSimilar) {
        if (isBlockSimilar) {
            var selector = createSimilarElementSelector(element);
            if (selector) {
                return selector;
            }
        }

        return makeCssNthChildFilter(element);
    };

    /**
     * Constructs adguard rule text from element node and specified options
     *
     * var options = {
		 *  isBlockByUrl: boolean,
		 *	urlBlockAttribute: url mask,
		 *	isBlockSimilar : boolean,
		 *	isBlockOneDomain: boolean,
		 *	domain: domain string
		 * }
     *
     * @param element
     * @param options
     * @returns {*}
     */
    api.constructRuleText = function (element, options) {
        if (options.isBlockByUrl) {
            var blockUrlRuleText = constructUrlBlockRuleText(element, options.urlMask, options.isBlockOneDomain, options.domain);
            if (blockUrlRuleText) {
                return blockUrlRuleText;
            }
        }

        var result;
        if (options.isBlockSimilar) {
            result = createSimilarRuleText(element);
        } else {
            result = createRuleText(element);
        }

        if (!options.isBlockOneDomain) {
            result = options.domain + result;
        }

        return result;
    };

    return api;

});
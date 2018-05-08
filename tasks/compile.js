/**
 * Compile all src files to single.
 */

const gulp = require('gulp');
const clean = require('gulp-clean');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');
const InlineResource = require('inline-resource-literal');

module.exports = () => {
    gutil.log('Compiling userscript...');

    const options = global.options || {};

    let userJsFileName = options.scriptName + '.user.js';
    let userMetaFileName = options.scriptName + '.meta.js';

    let resources = [
        'src/utils/polyfill.min.js',
        'src/utils/css.escape.js',
        'src/ioc.js',
        'src/log.js',
        'src/upgradeHelper.js',
        'src/balalaika.patched.js',
        'src/settings.js',
        'src/utils/ui-utils.js',
        'src/utils/common-utils.js',
        'src/event.js',
        'src/selector/adguard-selector.js',
        'src/adguard-rules-constructor.js',
        'src/iframe.js',
        'src/gm.js',
        'src/slider-widget.js',
        'src/wot.js',
        'src/localization.js',
        'src/controllers/mainMenuController.js',
        'src/controllers/selectorMenuController.js',
        'src/controllers/sliderMenuController.js',
        'src/controllers/SliderMenuControllerMobile.js',
        'src/controllers/blockPreviewController.js',
        'src/controllers/settingsMenuController.js',
        'src/button.js',
        'src/iframe.mobile.js',
        'src/main.js'
    ];

    resources = options.languagesFiles.concat(resources);

    if (options.embedded) {
        // replacing init file from userscript main.js file to embedded.js
        resources[resources.indexOf('src/main.js')] = 'src/embedded.js';
        userJsFileName = options.fileName;
    }

    let metaPath = path.join(options.src, '_compiled', options.metaPath);
    let metaContent;
    let finalContent = [];

    const inlineResourcesList = {
        'CSS_COMMON': './compile/base-common.css',
        'CSS_BUTTON': './compile/button.css',
        'CSS_IFRAME': './compile/menu.css',
        'CSS_SELECTOR': './compile/selector.css',
        'CSS_MOBILE': './compile/mobile-style.css',

        'TEMPLATE_DETAILEDMENU': './src/templates/mainMenu.html',
        'TEMPLATE_SELECTORMENU': './src/templates/selectorMenu.html',
        'TEMPLATE_SETTINGSMENU': './src/templates/settingsMenu.html',
        'TEMPLATE_SLIDERMENU': './src/templates/sliderMenu.html',
        'TEMPLATE_BLOCKPREVIEW': './src/templates/blockPreview.html',
        'TEMPLATE_BUTTON': './src/templates/button.html',
        'TEMPLATE_POPUP': './src/templates/mobilePopup.html',
        'TEMPLATE_MENU': './src/templates/mobileMenu.html'
    };

    try {
        metaContent = fs.readFileSync(metaPath).toString();
    } catch (err) {
        throw new gutil.PluginError({
            plugin: 'compile',
            message: gutil.colors.green('Make sure you have already uploaded localizations with `gulp locales` command!')
        });
    }

    var prepareResources = function() {
        const inlineResourcesInit = fs.readFileSync('./src/inline-resources.js').toString();

        const prepeareResources = (new InlineResource(inlineResourcesList)).inline(inlineResourcesInit);

        if (!fs.existsSync('compile')) {
            fs.mkdirSync('compile');
        }

        fs.writeFileSync('./compile/inline-resources.js', prepeareResources);

        resources.unshift('./compile/inline-resources.js');
    };

    var prepareRequires = function() {
        resources.forEach(function(element) {
            var require = fs.readFileSync(path.join(...element.split('/')));
            finalContent.push(require);
        });
    };

    var wrapScript = function(content) {
        content.unshift('(function() {');
        content.push('})();');

        if (options.embedded) {
            let currentDate = {
                year: (new Date()).getFullYear(),
                month: ('0' + ((new Date()).getMonth()+1)).slice(-2),
                day: ('0' + (new Date()).getDate()).slice(-2)
            };

            copyright = `/*! AdGuard Assistant - v${options.version} - ${currentDate.year}-${currentDate.month}-${currentDate.day}\r\n* https://github.com/AdguardTeam/AdguardAssistant\r\n* Copyright (c) ${currentDate.year}; Licensed LGPL 3.0 */\r\n`;

            content.unshift(copyright);
        }
    };

    prepareResources();
    prepareRequires();
    wrapScript(finalContent);

    return gulp.src(userJsFileName)
        .pipe(file(userJsFileName, finalContent.join('\n')))
        .pipe(file(userMetaFileName, metaContent))
        .pipe(gulp.dest(options.outputPath));
};

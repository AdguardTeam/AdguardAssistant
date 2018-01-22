/**
 * Compile all src files to single.
 */

const gulp = require('gulp');
const clean = require('gulp-clean');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');

const InlineResource = require("inline-resource-literal");

module.exports = () => {
    gutil.log('Compiling userscript');

    const RESOURCES = [
        'src/utils/css.escape.js',
        'src/ioc.js',
        'src/log.js',
        'src/balalaika.patched.js',
        'src/settings.js',
        'src/utils/ui-utils.js',
        'src/utils/common-utils.js',
        // 'src/utils/punycode.js',
        'src/event.js',
        'src/selector/diff_match_patch.js',
        'src/selector/dom.patched.js',
        'src/selector/adguard-selector.js',
        'src/adguard-rules-constructor.js',
        'compile/iframe.js',
        'src/gm.js',
        'src/slider-widget.js',
        'src/wot.js',
        'src/_locales/ru.js',
        'src/_locales/en.js',
        'src/_locales/fa.js',
        'src/_locales/he.js',
        'src/_locales/it.js',
        'src/_locales/pl.js',
        'src/_locales/uk.js',
        'src/_locales/zh.js',
        'src/_locales/de.js',
        'src/_locales/tr.js',
        'src/_locales/ja.js',
        'src/_locales/ar.js',
        'src/_locales/es-419.js',
        'src/_locales/pt-BR.js',
        'src/_locales/ko.js',
        'src/localization.js',
        'src/controllers/mainMenuController.js',
        'src/controllers/selectorMenuController.js',
        'src/controllers/sliderMenuController.js',
        'src/controllers/blockPreviewController.js',
        'src/controllers/settingsMenuController.js',
        'compile/button.js',
        'src/main.js'
    ];

    const options = global.options || {};

    let metaPath = path.join(options.localesDir, options.metaPath);
    let metaContent;
    let finalContent = [];

    try {
        metaContent = fs.readFileSync(metaPath).toString();
    } catch (err) {
        throw new gutil.PluginError({
          plugin: 'compile',
          message: gutil.colors.green('Make sure you have already uploaded localizations with `gulp locales` command!')
        });
    }

    var prepareResources = function (resources, content) {
        const button = fs.readFileSync('./src/button.js').toString();
        const iframe = fs.readFileSync('./src/iframe.js').toString();

        const buttonResources = (new InlineResource({
            "TEMPLATE_BUTTON": './src/templates/button.html',
            "CSS_BUTTON": './src/styles/button.css',
            "CSS_SELECTOR": './src/styles/selector.css'
        })).inline(button);

        const iframeResources = (new InlineResource({
            "TEMPLATE_DETAILEDMENU": './src/templates/mainMenu.html',
            "TEMPLATE_SELECTORMENU": './src/templates/selectorMenu.html',
            "TEMPLATE_SETTINGSMENU": './src/templates/settingsMenu.html',
            "TEMPLATE_SLIDERMENU": './src/templates/sliderMenu.html',
            "TEMPLATE_BLOCKPREVIEW": './src/templates/blockPreview.html',
            "CSS_IFRAME": './src/styles/style.css'
        })).inline(iframe);

        fs.writeFileSync('./compile/button.js', buttonResources);
        fs.writeFileSync('./compile/iframe.js', iframeResources);
    };

    var prepareRequires = function () {
        RESOURCES.forEach(function (element) {
            var require = fs.readFileSync(path.join(...element.split('/')));
            finalContent.push(require);
        });
    };

    var wrapScript = function (content) {
        content.unshift('(function() {');
        content.push('})();');
    };

    prepareResources();
    prepareRequires();
    wrapScript(finalContent);

    var userJsFileName = options.scriptName + '.user.js';
    var userMetaFileName = options.scriptName + '.meta.js';

    return gulp.src(userJsFileName)
        .pipe(file(userJsFileName, finalContent.join('\n')))
        .pipe(file(userMetaFileName, metaContent))
        .pipe(gulp.dest(options.outputPath));
};

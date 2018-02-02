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
    gutil.log('Compiling userscript...');

    const options = global.options || {};

    let userJsFileName = options.scriptName + '.user.js';
    let userMetaFileName = options.scriptName + '.meta.js';

    let resources = [
        'src/utils/css.escape.js',
        'src/ioc.js',
        'src/log.js',
        'src/balalaika.patched.js',
        'src/settings.js',
        'src/utils/ui-utils.js',
        'src/utils/common-utils.js',
        'src/event.js',
        'src/selector/adguard-selector.js',
        'src/adguard-rules-constructor.js',
        'compile/iframe.js',
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
        'compile/button.js',
        'compile/mobile.js',
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

    const buttonInlineResources = {
        "TEMPLATE_BUTTON": './src/templates/button.html',
        "CSS_BUTTON": './compile/button.css'
    };

    const mainMenuInlineResources = {
        "TEMPLATE_DETAILEDMENU": './src/templates/mainMenu.html',
        "TEMPLATE_SELECTORMENU": './src/templates/selectorMenu.html',
        "TEMPLATE_SETTINGSMENU": './src/templates/settingsMenu.html',
        "TEMPLATE_SLIDERMENU": './src/templates/sliderMenu.html',
        "TEMPLATE_BLOCKPREVIEW": './src/templates/blockPreview.html',
        "CSS_IFRAME": './compile/menu.css',
        "CSS_SELECTOR": './compile/selector.css'
    };

    const mobileInlineResources = {
        "CSS_SELECTOR": './compile/selector.css',
        "CSS_MOBILE": './compile/mobile-style.css',
        "TEMPLATE_POPUP": './src/templates/mobilePopup.html',
        "TEMPLATE_MENU": './src/templates/mobileMenu.html',
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
        const button = fs.readFileSync('./src/button.js').toString();
        const iframe = fs.readFileSync('./src/iframe.js').toString();
        const mobileMenu = fs.readFileSync('./src/iframe.mobile.js').toString();

        const buttonResources = (new InlineResource(buttonInlineResources)).inline(button);
        const iframeResources = (new InlineResource(mainMenuInlineResources)).inline(iframe);
        const mobileMenuResources = (new InlineResource(mobileInlineResources)).inline(mobileMenu);

        if (!fs.existsSync('compile')) {
            fs.mkdirSync('compile');
        }

        fs.writeFileSync('./compile/button.js', buttonResources);
        fs.writeFileSync('./compile/iframe.js', iframeResources);
        fs.writeFileSync('./compile/mobile.js', mobileMenuResources);
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
    };

    prepareResources();
    prepareRequires();
    wrapScript(finalContent);

    return gulp.src(userJsFileName)
        .pipe(file(userJsFileName, finalContent.join('\n')))
        .pipe(file(userMetaFileName, metaContent))
        .pipe(gulp.dest(options.outputPath));
};

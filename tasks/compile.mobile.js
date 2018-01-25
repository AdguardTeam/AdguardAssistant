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
    gutil.log('Compiling script...');

    const options = global.options || {};

    let finalContent = [];

    let resources = [
        'src/utils/css.escape.js',
        'src/ioc.js',
        'src/log.js',
        'src/balalaika.patched.js',
        'src/settings.js',
        'src/utils/ui-utils.js',
        'src/utils/common-utils.js',
        'src/event.js',
        'src/selector/diff_match_patch.js',
        'src/selector/dom.patched.js',
        'src/selector/adguard-selector.js',
        'src/adguard-rules-constructor.js',
        'compile/script.js',
        'src/localization.js',
        'src/controllers/selectorMenuController.js',
        'src/controllers/SliderMenuControllerMobile.js',
        'src/main.mobile.js'
    ];

    resources = options.languagesFiles.concat(resources);

    const mobileInlineResources = {
        "CSS_SELECTOR": './src/styles/selector.css',
        "CSS_MOBILE": './src/styles/mobile-style.css',
        "TEMPLATE_POPUP": './src/templates/mobilePopup.html',
        "TEMPLATE_MENU": './src/templates/mobileMenu.html',
    };

    var prepareResources = function() {
        const mobileMenu = fs.readFileSync('./src/iframe.mobile.js').toString();

        const mobileMenuResources = (new InlineResource(mobileInlineResources)).inline(mobileMenu);

        if (!fs.existsSync('compile')) {
            fs.mkdirSync('compile');
        }

        fs.writeFileSync('./compile/script.js', mobileMenuResources);
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

    var userJsFileName = options.scriptName + '.js';

    return gulp.src(userJsFileName)
        .pipe(file(userJsFileName, finalContent.join('\n')))
        .pipe(gulp.dest(options.outputPath));
};

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

    const REQUIRE_DIRECTIVE = '// @require';
    const RESOURCE_DIRECTIVE = '// @resource';
    const SUPPORTED_DIRECTIVES = [REQUIRE_DIRECTIVE, RESOURCE_DIRECTIVE];

    const options = global.options || {};

    var parseDirectives = function (line, directives) {
        for (var i = 0; i < directives.length; i++) {
            var directive = directives[i];
            var directiveIdx = line.indexOf(directive);
            if (directiveIdx > -1) {
                return {directive: directive, value: line.substring(directive.length).trim()};
            }
        }
        return null;
    };

    let metaPath = path.join(options.localesDir, options.metaPath);
    let metaContent;

    try {
        metaContent = fs.readFileSync(metaPath).toString();
    } catch (err) {
        throw new gutil.PluginError({
          plugin: 'compile',
          message: gutil.colors.green('Make sure you have already uploaded localizations with `gulp locales` command!')
        });
    }

    var metaLines = metaContent.split('\n');
    var finalContent = [];
    var newMeta = [];
    var directivesToHandle = [];
    metaLines.forEach(function (currentLine) {
        currentLine = currentLine.trim();
        if (currentLine.length === 0) {
            return;
        }
        var directive = parseDirectives(currentLine, SUPPORTED_DIRECTIVES);
        if (directive === null) {
            newMeta.push(currentLine);
            return;
        }
        directivesToHandle.push(directive);
    });

    var requires = directivesToHandle.filter(function (value) {
        return value.directive === REQUIRE_DIRECTIVE;
    });
    var resources = directivesToHandle.filter(function (value) {
        return value.directive === RESOURCE_DIRECTIVE;
    });

    var prepareResources = function (resources, content) {
        // content.push('var _resources = {');
        console.log(resources);
        const file = fs.readFileSync('./src/button.js').toString();
        const inlined = (new InlineResource({
            "TEMPLATE": './src/templates/button.html',
            "BUTTON_CSS": './src/styles/button.css',
            "SELECTOR_CSS": './src/styles/selector.css'
        })).inline(file);
        fs.writeFileSync('./compile/button.js', inlined);
        return false;
        resources.forEach(function (element, idx, array) {
            var resource = element.value.split(' ').filter(String);
            var resourceName = '"' + resource[0] + '"';
            var resourcePath = path.join(...resource[1].split('\\'));
            var resourceContent = '"' + new Buffer(fs.readFileSync(resourcePath)).toString('base64') + '"';
            var isLast = idx == array.length - 1;
            content.push(resourceName + ': ' + resourceContent + (isLast ? '\n' : ',\n'));
        });
        content.push("};");

        var addConstructorAndMethods = function (content) {
            content.unshift('var Resources = function () {');
            var getResource = function (name) {
                return Base64.decode(_resources[name]);
            };
            content.push('var _getResource = ' + getResource.toString());
            content.push('return {getResource: _getResource};');
            content.push('};');
        };
        addConstructorAndMethods(content);
    };

    var prepareRequires = function (requires, content) {
        requires.forEach(function (element) {
            var require = fs.readFileSync(path.join(...element.value.split('\\')));
            content.push(require);
        });
    };

    var wrapScript = function (content) {
        content.unshift('(function() {');
        content.push('})();');
    };

    prepareResources(resources, finalContent);
    prepareRequires(requires, finalContent);
    wrapScript(finalContent);

    var userJsFileName = options.scriptName + '.user.js';
    var userMetaFileName = options.scriptName + '.meta.js';

    return gulp.src(userJsFileName)
        .pipe(file(userJsFileName, finalContent.join('\n')))
        .pipe(file(userMetaFileName, newMeta.join('\n')))
        .pipe(gulp.dest(options.outputPath));
};

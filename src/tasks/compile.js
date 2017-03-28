module.exports = function (grunt) {
    grunt.registerMultiTask('compile', 'Compile userscript in to one file', function () {
        grunt.log.writeln('Compiling userscript');
        grunt.log.writeln(this.target + " : " + JSON.stringify(this.data));

        const REQUIRE_DIRECTIVE = "// @require";
        const RESOURCE_DIRECTIVE = "// @resource";
        const SUPPORTED_DIRECTIVES = [REQUIRE_DIRECTIVE, RESOURCE_DIRECTIVE];

        const ARGS_TO_CHECK = [{argName: 'metaPath', type: 'string'},
            {argName: 'outputPath', type: 'string'}, {argName: 'scriptName', type: 'string'}];
        var options = {};

        var checkArgs = function (target, data) {
            var checkArg = function (argName, type) {
                var arg = data[argName];
                if (!arg || typeof arg !== type) {
                    grunt.log.error(argName + ' is not specified!');
                    return;
                }
                options[argName] = arg;
            };
            ARGS_TO_CHECK.forEach(function (element) {
                checkArg(element.argName, element.type);
            });
        };

        checkArgs(this.target, this.data);

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

        var metaContent = grunt.file.read(options.metaPath).toString();
        var metaLines = metaContent.split('\r\n');
        var finalContent = [];
        var newMeta = [];
        var directivesToHandle = [];
        metaLines.forEach(function (currentLine) {
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
            content.push('var _resources = {');
            resources.forEach(function (element, idx, array) {
                var resource = element.value.split(' ').filter(String);
                var resourceName = '"' + resource[0] + '"';
                var resourcePath = resource[1];
                var resourceContent = '"' + new Buffer(grunt.file.read(resourcePath)).toString('base64') + '"';
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
                var require = grunt.file.read(element.value);
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
        finalContent.unshift.apply(finalContent, newMeta);

        var userJsFileName = options.outputPath + '/' + options.scriptName + '.user.js';
        var userMetaFileName = options.outputPath + '/' + options.scriptName + '.meta.js';
        grunt.file.delete(options.outputPath);
        grunt.file.write(userJsFileName, finalContent.join("\n"));
        grunt.file.write(userMetaFileName, newMeta.join('\n'));
    });
};
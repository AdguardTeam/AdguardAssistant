module.exports = function (grunt) {
    grunt.registerMultiTask('restore-meta', 'Restoring meta after compress', function () {
        grunt.log.writeln('Restoring meta...');

        const ARGS_TO_CHECK = [{argName: 'metaPath', type: 'string'},
            {argName: 'outputPath', type: 'string'}];
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

        var metaString = grunt.file.read(options.metaPath).toString();
        var scriptContent = grunt.file.read(options.outputPath).toString();
        var finalString = metaString + '\r\n' + scriptContent;
        grunt.file.write(options.outputPath, finalString);
        grunt.log.writeln('Meta was restored');
    });
};

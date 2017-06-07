/**
 * Setting meta commentaries after uglify.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');

module.exports = () => {
    gutil.log('Restoring meta...');

    const options = global.options || {};

    var userJsFileName = options.scriptName + '.user.js';
    var metaString = fs.readFileSync(options.metaPath).toString();
    var scriptContent = fs.readFileSync(path.join(options.outputPath, userJsFileName)).toString();
    var finalString = metaString + '\n\r' + scriptContent;

    gutil.log('Meta was restored');

    return gulp.src(userJsFileName)
        .pipe(file(userJsFileName, finalString))
        .pipe(gulp.dest(options.outputPath));
};

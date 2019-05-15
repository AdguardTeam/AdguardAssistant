/**
 * Setting meta commentaries after uglify.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');

const restoreMeta = () => {
    gutil.log('Restoring meta...');

    const options = global.options || {};

    var userJsFileName = options.scriptName + options.ext;
    var metaString = fs.readFileSync(path.join(options.outputPath, 'assistant.meta.js')).toString();
    var scriptContent = fs.readFileSync(path.join(options.outputPath, userJsFileName)).toString();
    var finalString = metaString + '\n\r' + scriptContent;

    gutil.log('Meta was restored');

    return gulp.src(userJsFileName, { allowEmpty: true })
        .pipe(file(userJsFileName, finalString))
        .pipe(gulp.dest(options.outputPath));
};

export default restoreMeta;

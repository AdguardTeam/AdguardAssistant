const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

module.exports = () => {
    const options = global.options || {};

    return gulp.src(options.outputPath + '/assistant.user.js')
        .pipe(preprocess({
            context: {
                DEBUG: true
            }
        }))
        .pipe(gulp.dest(options.outputPath));
};

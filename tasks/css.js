/**
 * Clean build folder.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const clean = require('gulp-clean');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const lessAutoprefix = require('less-plugin-autoprefix');
const inlineImages = require('less-plugin-inline-urls');
const inlineAssets = require('gulp-inline-assets');

module.exports = () => {
    const options = global.options || {};

    gutil.log('Building css...');

    const styles = [
        options.src + '/styles/base/base-common.less',
        options.src + '/styles/menu.less',
        options.src + '/styles/button.less',
        options.src + '/styles/selector.less',
        options.src + '/styles/mobile-style.less'
    ];

    const autoprefix = new lessAutoprefix({ browsers: ['last 3 versions', '>1%'] });

    return gulp.src(styles)
      .pipe(less({
        plugins: [autoprefix, inlineImages]
      }))
      .pipe(inlineAssets())
      .pipe(cleanCSS())
      .pipe(gulp.dest('compile'));
};

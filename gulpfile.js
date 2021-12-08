const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const {series} = require('gulp');

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
}

function watch() {
  gulp.watch('./scss/*.scss', buildStyles);
}

exports.buildStyles = buildStyles;
exports.watch = series(buildStyles, watch);
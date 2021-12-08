const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const {series} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
}

function watch() {
  gulp.watch('./scss/**/*.scss', buildStyles);
}

exports.buildStyles = buildStyles;
exports.watch = series(buildStyles, watch);
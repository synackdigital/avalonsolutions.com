const gulp = require('gulp');
const changed = require('gulp-changed');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const bs = require('browser-sync').get('bs');
const config = require('../config/scripts');

gulp.task('scripts', ['scripts:lint'], function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(babel())
    .pipe(gulp.dest(config.dest))
    .pipe(bs.stream());
});

gulp.task('scripts:lint', function() {
  return gulp.src(config.watch)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

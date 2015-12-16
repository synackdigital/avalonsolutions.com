const config = require('../config/styles');
const gulp = require('gulp');
// const changed = require('gulp-changed');
const bs = require('browser-sync').get('bs');
const postcss = require('gulp-postcss');
const nano = require('gulp-cssnano');

gulp.task('styles', function () {
  return gulp.src(config.src)
    // .pipe(changed(config.dest))
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-custom-media'),
      require('postcss-custom-properties'),
      require('postcss-calc'),
      require('autoprefixer')
    ]))
    .pipe(nano())
    .pipe(gulp.dest(config.dest))
    .pipe(bs.stream());
});

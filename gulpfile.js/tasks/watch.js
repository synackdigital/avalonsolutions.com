const gulp = require('gulp');
const config = require('../config');
const scripts = require('../config/scripts');
const styles = require('../config/styles');

gulp.task('watch', ['build', 'bs'], function() {
  gulp.watch(config.gulp, ['scripts']);
  gulp.watch(scripts.watch, ['scripts']);
  gulp.watch(styles.watch, ['styles']);
});

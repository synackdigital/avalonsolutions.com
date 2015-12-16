const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task('build', function(cb) {
  sequence(
    'scripts',
    'styles',
    cb
  );
});

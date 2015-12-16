const gulp = require('gulp');
const extend = require('node.extend');
const exists = require('file-exists');
const bs = require('browser-sync').create('bs');
const config = require('../config/bs');
const local = (exists('./gulpfile.js/config/bs.local.js')) ? require('../config/bs.local') : {};

gulp.task('bs', function() {
  return bs.init(
    extend(config, local)
  );
});

const config = require('./');

module.exports = {
  src: config.src + '/styles/[^_]*.css',
  watch: config.src + '/styles/**/*.css',
  dest: config.dest + '/styles'
};

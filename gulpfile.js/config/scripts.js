const config = require('./');

module.exports = {
  src: config.src + '/scripts/**/*.js',
  watch: config.src + '/scripts/**/*.js',
  dest: config.dest + '/scripts'
};

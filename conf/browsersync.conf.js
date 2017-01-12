const conf = require('./gulp.conf');
const historyApiFallback = require('connect-history-api-fallback');

module.exports = function (baseDir, port) {
  return {
    server: {
      baseDir: [
        `${conf.paths.tmp}/${baseDir}`,
        conf.paths.src
      ]
    },
    port,
    ui: false,
    middleware: [historyApiFallback()],
    open: false
  }
};

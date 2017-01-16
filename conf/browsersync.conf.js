const conf = require('./gulp.conf');
const historyApiFallback = require('connect-history-api-fallback');
const proxy = require('proxy-middleware');
const url = require('url');
const proxyOptions = url.parse('http://localhost:3000/api');
proxyOptions.route = '/api';
const proxyMiddleware = proxy(proxyOptions);

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
    middleware: [proxyMiddleware, historyApiFallback()],
    open: false
  }
};

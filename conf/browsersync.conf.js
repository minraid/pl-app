const conf = require('./gulp.conf');
const historyApiFallback = require('connect-history-api-fallback');
const proxy = require('proxy-middleware');
const url = require('url');
const apiProxyOptions = url.parse('http://localhost:3000/api');
apiProxyOptions.route = '/api';
const apiProxy = proxy(apiProxyOptions);

const authProxyOptions = url.parse('http://localhost:3000/auth');
authProxyOptions.route = '/auth';
const authProxy = proxy(authProxyOptions);

module.exports = function (baseDir, port) {
  return {
    server: {
      baseDir: [
        `${conf.paths.dist}/${baseDir}`,
        conf.paths.src
      ]
    },
    port,
    ui: false,
    middleware: [apiProxy, authProxy, historyApiFallback()],
    open: false
  }
};

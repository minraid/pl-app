const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require('webpack');
const webpackConf = require('../conf/webpack.conf');
const gulpConf = require('../conf/gulp.conf');
const {bsClient, bsAdmin} = require('./browsersync');

gulp.task('webpack', done => {
  webpackWrapper(webpackConf, done);
});

function webpackWrapper(conf, done) {
  const webpackBundler = webpack(conf);

  const webpackChangeHandler = (err, stats) => {
    if (err) {
      gulpConf.errorHandler('Webpack')(err);
    }
    gutil.log(stats.toString({
      colors: true,
      chunks: false,
      hash: false,
      version: false
    }));
    if (done) {
      done();
      done = null;
    } else {
      bsClient.reload();
      bsAdmin.reload();
    }
  };

  webpackBundler.watch(100, webpackChangeHandler);
}

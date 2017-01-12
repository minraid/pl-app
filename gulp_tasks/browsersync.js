const gulp = require('gulp');
const browserSync = require('browser-sync');
const browserSyncConf = require('../conf/browsersync.conf');

gulp.task('browsersync', browserSyncServe);

const bsAdmin = browserSync.create();
const bsClient = browserSync.create();

function browserSyncServe(done) {
  bsAdmin.init(browserSyncConf('app', 1111));
  bsClient.init(browserSyncConf('admin', 9999));
  done();
}

module.exports = {bsClient, bsAdmin};

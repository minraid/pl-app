const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('app', gulp.series('clean', 'webpack'));
gulp.task('server', gulp.series('compile', 'nodemon'));
gulp.task('default', gulp.series('app', 'server'));

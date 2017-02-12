const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bs = require('./browsersync');

gulp.task('nodemon', () => {
  nodemon({
    script: 'src/server/app.js',
    ext: 'ts',
    tasks: ['compile'],
    ignore: ['client/']
  }).on('restart', () => {
    bs.bsClient.reload();
    bs.bsAdmin.reload();
  })
});

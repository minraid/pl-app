const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bs = require('./browsersync');

gulp.task('nodemon', () => {
  nodemon({
    script: 'src/server/app.js',
    tasks: ['compile'],
    ext: 'ts',
    ignore: ['client/']
  }).on('restart', () => {
    bs.reload()
  })
});

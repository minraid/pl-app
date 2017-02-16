const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', () => {
  nodemon({
    script: 'src/server/app.js',
    ext: 'ts',
    tasks: ['compile'],
    ignore: ['client/']
  })
});

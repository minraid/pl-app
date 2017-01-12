const gulp = require('gulp');
const ts = require('gulp-typescript');

const project = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
  return gulp.src('src/server/**/*.ts')
    .pipe(project()).js
    .pipe(gulp.dest('src/server'))
});

'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
  src: 'src/',
  dest: 'build/'
}
gulp.task('build:source', () => {
  return gulp.src(paths.src + '**/*', {base: paths.src})
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
})

gulp.task('default',['build:source']);

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: ['./**/*.scss']
};

gulp.task('minify-css',() => {
  return gulp.src('aperture.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

// Runs on 'gulp'
gulp.task('default', ['minify-css'], function() { });

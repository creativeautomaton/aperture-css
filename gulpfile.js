var gulp = require('gulp');
var sass = require('gulp-ruby-sass'); 
var uglify = require('gulp-uglify');
var pump = require('pump');

var paths = {
  sass: ['./**/*.scss']
};

// Runs on 'gulp'
gulp.task('default', ['minify'], function() { });

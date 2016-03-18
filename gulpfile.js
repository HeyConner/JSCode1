var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilites.env.production;
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var lib = require('bower-files')({
  "overrides": {
    "bootstrap": {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
  gulp.task('concatInterface', function() {
    return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
  }

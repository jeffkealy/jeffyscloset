'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('public/styles/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('public/styles/scss/style.scss', ['sass']);
});

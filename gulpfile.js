var gulp = require('gulp');
const babel = require('gulp-babel');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var scsslint = require('gulp-scss-lint');

gulp.task('sass', ['scss-lint'], function () {
  return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('js-lint', function () {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(jshint.reporter('default'));

});

gulp.task('scss-lint', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(scsslint());
});

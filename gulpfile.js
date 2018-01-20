
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('js', function(){
    return gulp.scr('gulpfile.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});


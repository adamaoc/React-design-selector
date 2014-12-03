var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('copy-html', function() {
    gulp.src('html/index.html')
      .pipe(gulp.dest('dist-html'));
});

gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', ['copy-html']);

gulp.task('default',['browserify', 'copy', 'sass']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
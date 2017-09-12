const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function() {
    gulp.src('./public/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
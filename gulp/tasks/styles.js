var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer');

gulp.task('styles', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass(autoprefixer)
        .on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

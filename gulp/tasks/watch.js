var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        proxy: {
            target: "wpdist.dev"
        }
    });

    watch('index.php', function () {
        browserSync.reload();
    });

    watch('./sass/**/*.scss', function () {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./style.css')
    .pipe(browserSync.stream());
});

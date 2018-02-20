const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

gulp.task("sass", function () {
    gulp.src("sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['sass' ,'browserSync'], function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});

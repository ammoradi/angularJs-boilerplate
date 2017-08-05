var gulp = require('gulp') ;
var connect = require('gulp-connect') ;
var browserSync = require('browser-sync') ;
var sass = require('gulp-sass') ;
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('webserver', function() {
    browserSync.init({
        server: "."
    });
}) ;

// to do : should be solved somehow better
var jsFiles = './js/Controllers/*.js',
    jsDest = './dist/js';
gulp.task('minify', function() {
    console.log("Minifinig");
    return gulp.src(jsFiles)
        .pipe(concat('Controller.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('Controller.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('reload' , function () {
    console.log("Re-Loading");
    browserSync.reload('./index.html') ;
}) ;

gulp.task('styles', function() {
    console.log("Re-Compiling");
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task("watch" , function () {
    gulp.watch([
            "js/**/*.js",
            "sass/**/*.scss"
        ] ,
        ['styles' , 'minify', 'reload'])
});

gulp.task('default', ['minify', 'webserver' , 'watch']);

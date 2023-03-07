var gulp = require('gulp');
//var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');


gulp.task('fileinclude', function() {
    gulp.src(['./2023portfolio/index.html', './2023portfolio/src/assets/html/*.html'], {base : './'})
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});


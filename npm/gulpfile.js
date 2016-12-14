
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('../Rosenholm Jagtforening/assets/scss/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('../Rosenholm Jagtforening/assets/css/'));
});

gulp.task('default',function() {
    gulp.watch('../Rosenholm Jagtforening/assets/scss/**',['sass']);
});
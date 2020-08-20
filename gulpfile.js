var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 

// auto prefixer css 

gulp.task('prefix', () =>
    gulp.src('./src/css/main.css')
        .pipe(autoprefixer({
            browsers: [
              ">1%",
              "last 4 versions",
              "Firefox ESR",
              "not ie < 9"
            ],
            cascade: false
    }))
    .pipe(gulp.dest('./src/dist'))
);


// minify css ----- npm i gulp-uglifycss

// gulp.task('css', function () {
//   gulp.src('./src/css/**/*.css')
//     .pipe(uglifycss({
//       "uglyComments": true
//     }))
//     .pipe(gulp.dest('./src/dist/'));
// });
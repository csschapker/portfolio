var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return sass('assets/styles/sass/main.scss', {
        style: 'compressed',
        compass: true
    }).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/styles'));
});
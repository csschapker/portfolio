var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var stylishReporter = require('jshint-stylish');

var files = {
    sass : {
        main: 'assets/styles/sass/main.scss',
        all: 'assets/styles/sass/**/*.scss',
        dest: 'assets/styles'
    },
    js: {
        app: 'app/**/*.js'
    }
};

gulp.task('sass', function() {
    return sass(files.sass.main, {
        style: 'compressed',
        compass: true
    }).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(files.sass.dest));
});

gulp.task('jshint', function() {
    gulp.src(files.js.app)
        .pipe(jshint())
        .pipe(jshint.reporter(stylishReporter));
});

gulp.task('dev', ['sass', 'jshint'], function() {
    gulp.watch(files.sass.all, ['sass']);
    gulp.watch(files.js.app, ['jshint']);
});
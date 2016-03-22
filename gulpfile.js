var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var stylishReporter = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var files = {
    sass : {
        main: 'assets/styles/sass/main.scss',
        all: 'assets/styles/sass/**/*.scss',
        dest: 'assets/styles'
    },
    js: {
        app: [
            'app/app.module.js',
            'app/app.config.js',
            'app/app.run.js',
            'app/util/**/*.js',
            'app/components/**/*.js',
            'app/states/**/*.js'
        ]
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

gulp.task('minify', function() {
    return gulp.src(files.js.app)
        .pipe( sourcemaps.init() )
        .pipe( ngAnnotate() )
        .pipe( concat('index.js') )
        .pipe( rename('index.min.js') )
        .pipe( uglify() )
        .pipe( sourcemaps.write('./') )
        .pipe( gulp.dest('./src') );
});

gulp.task('dev', ['sass', 'jshint', 'minify'], function() {
    gulp.watch(files.sass.all, ['sass']);
    gulp.watch(files.js.app, ['jshint', 'minify']);
});

gulp.task('build', ['sass'], function() {
    gulp.src(['src/**/*', '!**/*.min.js']).pipe(gulp.dest('frontend/src'));
    gulp.src('assets/images/**/*').pipe(gulp.dest('frontend/assets/images'));
    gulp.src('assets/libs/**/*').pipe(gulp.dest('frontend/assets/libs'));
    gulp.src('assets/fonts/**/*').pipe(gulp.dest('frontend/assets/fonts'));
    gulp.src('assets/downloads/**/*').pipe(gulp.dest('frontend/assets/downloads'));
    gulp.src('assets/styles/*.css').pipe(gulp.dest('frontend/assets/styles'));
    gulp.src('index.html').pipe(gulp.dest('frontend'));
});
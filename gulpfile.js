'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

sass.compiler = require('node-sass');

function reload(cb) {
    browserSync.reload();
    cb();
}

function browser_sync() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
};

function scss() {
    return gulp.src('./source/scss/components/**/*.scss', { base: './source/scss/' })
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./source/css'));
}

function css() {
    return gulp.src('./source/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            casade: false
        }))
        .pipe(gulp.dest('./source/css'))
        .pipe(cssmin())
        .pipe(concat('build.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream({ match: '**/*.css' }));
}

function js() {
    return gulp.src(['./source/js/**/*.js', '!./source/js/{bootstrap,bootstrap/**}'])
        .pipe(sourcemaps.init())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(eslint.failAfterError())
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
};

// Minify images and cache them
function images(cb) {
    return gulp.src('./source/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // .pipe(cache(imagemin({
        //     interlaced: true
        // })))
        .pipe(gulp.dest('dist/images'));
    cb();
};

function watch() {
    gulp.watch('./source/scss/**/*.scss', gulp.series(scss, css));
    gulp.watch('./source/js/**/*.js', gulp.series(js));
    gulp.watch('./source/images/**/*.+(png|jpg|jpeg|gif|svg)', gulp.series(images, reload));
    gulp.watch('./dist/**/*.html', reload);
};

exports.default = gulp.series(
    gulp.parallel(gulp.series(scss, css), js, images),
    gulp.parallel(watch, browser_sync)
);
exports.js = gulp.task(js)
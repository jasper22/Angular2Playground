/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

var libs = './wwwroot/lib/';

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('restore:core-js', function () {
    gulp.src([
        'node_modules/core-js/client/*.js'
    ]).pipe(gulp.dest(libs + 'core-js'));
});
gulp.task('restore:zone.js', function () {
    gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(libs + 'zone.js'));
});
gulp.task('restore:reflect-metadata', function () {
    gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(libs + 'reflect-metadata'));
});
gulp.task('restore:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(libs + 'systemjs'));
});
gulp.task('restore:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest(libs + 'rxjs'));
});
gulp.task('restore:angular-in-memory-web-api', function () {
    gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});

gulp.task('restore:angular', function () {
    gulp.src([
        'node_modules/@angular/**/*.js'
    ]).pipe(gulp.dest(libs + '@angular'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});
gulp.task('restore:primeng', function () {
    gulp.src([
        'node_modules/primeng/**/*.*'
    ]).pipe(gulp.dest(libs + 'primeng'));
});

gulp.task('restore:fontawesome', function () {
    gulp.src([
        'node_modules/font-awesome/**/*.*'
    ]).pipe(gulp.dest(libs + 'font-awesome'));
});

gulp.task('compile:scss', function () {
    return gulp.src('Assets/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('wwwroot/css/'));
      //.pipe(minifyCss({ compatibility: 'ie8' }))
});

gulp.task('restore:images', function () {
    gulp.src([
        'Assets/*.jpg'
    ]).pipe(gulp.dest('wwwroot/images/'));
});


gulp.task('restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:rxjs',
    'restore:angular-in-memory-web-api',
    'restore:angular',
    'restore:bootstrap',
    'restore:primeng',
    'restore:fontawesome',
    'compile:scss',
    'restore:images'
]);
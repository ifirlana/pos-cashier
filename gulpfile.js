/**
 * Created by ikhlasfirlana on 1/1/17.
 */

"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var myth = require("gulp-myth");
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");
var imagemin = require("gulp-imagemin");
var connect = require("connect");
var serve = require("serve-static");
var browserSync = require("browser-sync").create();
var minifyHTML = require('gulp-minify-html');
var cleanCSS = require('gulp-clean-css');
var replace = require('gulp-string-replace');
var gutil = require('gulp-util');


gulp.task('default', function () {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

'use strict'

var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var babelify = require('babelify');

gulp.task('browserify', function(){
  browserify('./app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function(e) { console.log("Error: " + e.message); })
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('./*.jsx', ['default'])
});

gulp.task('default', ['browserify']);

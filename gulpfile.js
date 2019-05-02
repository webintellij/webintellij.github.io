'use strict';

var gulp = require('gulp'),    
    del = require('del'),
    imagemin = require('gulp-imagemin');

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Images
gulp.task('imagemin', function() {
    return gulp.src('img/**')
        .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean'], function() {
    gulp.start('imagemin');
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('imagemin');
});
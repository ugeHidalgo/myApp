'use strict';

// Include gulp
var _ = require('lodash'),
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');;

// Develop task with nodemon to relaunch when changes in files.
gulp.task('develop', function(){
    nodemon({ 
      script: './server.js',
      env: { 'NODE_ENV': 'development' },
      ignore: ['public/dist/']
    })
});

// Lint JS server side files.
gulp.task('lintServer', function() {
  var serverJsFiles = [
    'server.js',  
    './config/**/*.js', 
    './server/**/*.js' 
  ];

  return gulp.src(serverJsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

// Default Task
gulp.task('default', ['develop', 'lintServer']);

'use strict';

// Include gulp
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

// Develop task with nodemon to relaunch when changes in files.
gulp.task('develop', function(){
    nodemon({ 
      script: './server.js',
      env: { 'NODE_ENV': 'development' },
      ignore: ['public/dist/']
    })
  });

// Default Task
gulp.task('default', ['develop']);

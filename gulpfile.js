'use strict';

var gulp       = require('gulp');

var livereload = require('gulp-livereload');
var csso       = require('gulp-csso');
var cleanhtml  = require('gulp-cleanhtml');
var concat     = require('gulp-concat');

var _          = require('lodash');
var karma      = require('karma').server;

gulp.task('default', function () {
  gulp.start('build');
});

gulp.task('test', function () {

});

var karmaFirst = {
  browsers: ['Chrome'],
  frameworks: ['jasmine'],
  files: [
    'app/js/TemperatureConverter.js',
    'test/TemperatureConverter.spec.js'
  ]
};

var karmaCommonConf = {
  browsers: ['Chrome'],
  frameworks: ['jasmine'],
  files: [
    'app/**/*.js',
    'test/**/*.spec.js'
  ]
};


/**
 * Run test once and exit
 */
gulp.task('test-first', function( done ) {
  karma.start(_.assign({}, karmaFirst, {singleRun: true}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
// gulp.task('tdd', function( done ) {
//   karma.start(karmaCommonConf, done);
// });

// gulp.task('default', ['tdd']);


gulp.task('styles', function() {
  gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(csso())
    .pipe(gulp.dest('dist/css/min'));
});

gulp.task('pages', function() {
  return gulp.src('app/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  gulp.src('app/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['styles', 'pages', 'scripts']);

gulp.task('server', function () {
  var connect = require('connect');
  var server  = connect();

  server.use(connect.static('dist')).listen(process.env.PORT || 9122);
  require('opn')('http://localhost:' + (process.env.PORT || 9122));
});

gulp.task('watch', ['server'], function () {
  gulp.start('build');

  gulp.watch('app/*.html', ['pages']);

  var server = livereload();
  gulp.watch('dist/**').on('change', function (file) {
    server.changed(file.path);
  });
});

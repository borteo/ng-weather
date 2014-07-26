'use strict';

var gulp       = require('gulp');

var livereload = require('gulp-livereload');
var sass       = require('gulp-sass');
var cleanhtml  = require('gulp-cleanhtml');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglifyjs');

var _          = require('lodash');
var karma      = require('karma').server;

var karmaConf = {
  browsers: ['Chrome'],
  frameworks: ['jasmine'],
  files: [
    'app/js/TemperatureConverter.js',
    'test/TemperatureConverter.spec.js'
  ]
};

/**
 * Run test once and exit
 */
gulp.task('test-converter', function( done ) {
  karma.start( _.assign({}, karmaConf, { singleRun: true } ), done );
});

gulp.task('styles', function () {
  return gulp.src('app/css/**/*.scss')
    .pipe( sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }))  
    .pipe(gulp.dest('dist/css'));
});

gulp.task('pages', function() {
  return gulp.src('app/**/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('partials', function() {
  return gulp.src('app/partials/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('dist/partials'));
});

gulp.task('scripts', function() {
  gulp.src('app/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
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

  gulp.watch('app/**/*.html', ['pages', 'partials']);
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/css/*.scss', ['styles']);


  var server = livereload();
  gulp.watch('dist/**').on('change', function (file) {
    server.changed(file.path);
  });
});

gulp.task('default', function () {
  gulp.start('build');
});

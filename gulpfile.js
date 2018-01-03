
//REQUIRE STATEMENTS
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//vinyl is used for putting browserified source code into a new file
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;
//buildProduction is an environment variable

//CLEAN TASK
gulp.task('clean', function(){
  return del(['build', 'tmp']);
});
//pass del an array of paths to delete and it removes them
//clean task is called automatically by making it a dependency of the build task

//BUILD TASK
gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify')
  }
});
//when running $ gulp build --production: sets the environment variable to true and its a production build
//when running  $ gulp build: sets variable to false and makes it a development build

//CONCAT TASK
gulp.task('concatInterface', function(){
  return gulp.src(['./js/*-interface.js'])
//* is a globbing pattern (wildcard symbol), telling gulp-concat to concatinate all files ending in -interface.js
//gulp.src pulls in the files used in the browser--formatted as an array of file names we are passing in
    .pipe(concat('allConcat.js'))
//call the concat() function that was created with 'require' at the top; pass in the name of the file we want to create: allConcat.js
    .pipe(gulp.dest('./tmp'))
});
//gulp.dest tells gulp where to save the new file, which contains both -interface files
//it's temporary ('tmp') because it will not be used in the browser; first we have to browserify to pull in any modules it uses

//BROWSERIFY TASK
//adding tasks will call functions
gulp.task('jsBrowserify', ['concatInterface'], function(){
  return browserify({ entries: ['./tmp/allConcat.js']})
//here the browserify function is called and intructed which files to browserify by passing in an object with a key 'entries'; its corresponding value is an array of file names
//pulling in front-end only, not backend because backend was taken care of by the require keyword in -interface file
//tmp b/c allConcat.js isn't used in the browser
  .bundle()
//bundle is a process built into browserify pkg
  .pipe(source('app.js'))
//tell it to create a new file called app.js
  .pipe(gulp.dest('./build/js'));
//put it into a new folder named build inside its own js folder
});
//build folder is used to separate out production version of the project

//MINIFY TASK
//(after jsBrowserify task b/c jsBrowserify is a dependency of the minification task)
gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src('./build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});
//so when minifyScripts task is run, it will run jsBrowserify, which will run concatInterface

//LINTING TASK
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
//this will pull in all the js files in js folder, run jshint on them and report back any errors found

/// <binding Clean='default' />
"use strict";

var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var rename = require("gulp-rename");
//var uglify = require("gulp-uglify");
var concatCss = require("gulp-concat-css");

var config = {
    scriptsPath: "./wwwroot/scripts/",
    cssPath: "./wwwroot/css/",
    fontsPath: "./wwwroot/fonts/",
    depsFiles: [
            "./node_modules/systemjs/dist/system.src.js",
            "./node_modules/es6-shim/es6-shim.js",
            "./node_modules/rxjs/bundles/Rx.js",
            "./node_modules/angular2/bundles/angular2-polyfills.js",
            "./node_modules/angular2/bundles/angular2.dev.js",
            "./node_modules/angular2/bundles/http.js",
            "./node_modules/jquery/dist/jquery.min.js",
            "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],
    cssFiles: [
            "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    fontsFiles: [
        "./node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot",
        "./node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg",
        "./node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf",
        "./node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff",
        "./node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2"
    ]
};

// Bundle js and css
gulp.task('bundle', ['bundle:js', 'bundle:css']);

// Bundle js files
/* commented out because ngIf won't work with minified code, possibly same reason for issues in IE11 https://github.com/angular/angular/issues/6380
gulp.task('bundle:js', function () {
    return gulp.src(config.depsFiles)
      .pipe(concat("deps.js"))
      .pipe(gulp.dest(config.scriptsPath))
      .pipe(rename("deps.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.scriptsPath));
});*/

gulp.task('bundle:js', function () {
    return gulp.src(config.depsFiles)
      .pipe(concat("deps.js"))
      .pipe(gulp.dest(config.scriptsPath))
      .pipe(gulp.dest(config.scriptsPath));
});

// Bundle css files
gulp.task('bundle:css', function () {
    return gulp.src(config.cssFiles)
      .pipe(concatCss("styles.css"))
      .pipe(gulp.dest(config.cssPath));
});

// Bundle fonts files
gulp.task('bundle:fonts', function () {
    return gulp.src(config.fontsFiles)
        .pipe(gulp.dest(config.fontsPath));
});

    // Clean up copied scripts and generated js files
gulp.task("clean", function () {
    return del([
      config.scriptsPath,
      config.cssPath,
      config.fontsPath
    ]);
});

// The default task (called when you run `gulp` from cli)
gulp.task("default", ["bundle"]);
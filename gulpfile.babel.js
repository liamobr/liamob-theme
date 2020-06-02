"use strict";

import plugins from "gulp-load-plugins";
import yargs from "yargs";
import gulp from "gulp";
import rimraf from "rimraf";
import yaml from "js-yaml";
import fs from "fs";
import webpackStream from "webpack-stream";
import webpack2 from "webpack";
import named from "vinyl-named";

const path = require("path");
const $ = plugins();

const PRODUCTION = !!yargs.argv.production;
const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync("config.yml", "utf8");
  return yaml.load(ymlFile);
}

gulp.task(
  "build",
  gulp.series(clean, gulp.parallel(sass, javascript, images, copy))
);

gulp.task("default", gulp.series("build", watch));

function clean(done) {
  rimraf(PATHS.dist, done);
}

function copy() {
  return gulp.src(PATHS.assets).pipe(gulp.dest(PATHS.dist));
}

function sass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: PATHS.sass
      }).on("error", $.sass.logError)
    )
    .pipe(
      $.autoprefixer({
        grid: false,
        browsers: COMPATIBILITY
      })
    )
    .pipe(
      $.if(
        PRODUCTION,
        $.cleanCss({
          compatibility: "ie9"
        })
      )
    )
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + "/css"));
}

let webpackConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      }
    ],
    loaders: [
      // {
      //   test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
      //   loader: "imports-loader?this=>window"
      // }
    ]
  },
  // externals: {
  //   jquery: 'jQuery',
  //   'popper.js': 'popper.js'
  // },
};

function javascript() {
  return gulp
    .src(PATHS.entries)
    .pipe(named())
    .pipe($.sourcemaps.init())
    .pipe(webpackStream(webpackConfig, webpack2))
    .pipe(
      $.if(
        PRODUCTION,
        $.uglify().on("error", e => {
          console.log(e);
        })
      )
    )
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + "/js"));
}

function images() {
  return gulp
    .src("src/img/**/*")
    .pipe(
      $.if(
        PRODUCTION,
        $.imagemin({
          progressive: true
        })
      )
    )
    .pipe(gulp.dest(PATHS.dist + "/img"));
}

function watch() {
  gulp.watch(PATHS.assets, copy);
  gulp.watch("src/scss/**/*.scss").on("all", gulp.series(sass));
  gulp.watch("src/js/**/*.js").on("all", gulp.series(javascript));
  gulp.watch("src/img/**/*").on("all", gulp.series(images));
}

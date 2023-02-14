const gulp = require("gulp");
// const sass = require('gulp-sass'); //sass-css
var sass = require("gulp-sass")(require("sass"));
const lessTask = () => {
  return gulp
    .src("packages/theme-chalk/src/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("theme-chalk"));
};
exports.default = lessTask;

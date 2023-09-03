// 打包样式
// pnpm install gulp-sass @types/gulp-sass @types/sass @types/gulp-autoprefixer gulp-autoprefixer @types/gulp-clean-css gulp-clean-css sass -D -w
import { series, src, dest } from "gulp";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import dartSass from "sass";
import path from "path";

function compile() {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest(path.resolve(__dirname, "../../dist/theme-chalk/css")));
}

function copyfont() {
  return src(path.resolve(__dirname, "./src/fonts/**")).pipe(
    dest(path.resolve(__dirname, "../../dist/theme-chalk/fonts")),
  );
}

export default series(compile, copyfont);

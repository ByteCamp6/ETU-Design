import delPath from "./utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "./utils/paths";
const sass = require("gulp-sass")(require("sass"));
import autoprefixer from "gulp-autoprefixer";
import run from "./utils/run";
//删除dist

export const removeDist = () => {
  return delPath(`${pkgPath}/dist`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/packages/theme-chalk/src/*.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/dist/theme-chalk`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath + `/packages/components`);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
  ),
);

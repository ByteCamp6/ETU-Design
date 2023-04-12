import run from "../build/utils/run";
import { pkgPath } from "../build/utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/dist`);
};
export default series(async () => publishComponent());

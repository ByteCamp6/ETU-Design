import { withInstall } from "@etu-design/utils";
import Popper from "./src/popper.vue";
console.log(Popper, "opper");
export const EtuPopper = withInstall(Popper);
export default EtuPopper;
export * from "./src/popper";

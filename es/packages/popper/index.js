import { withInstall } from "../utils/vue/install.js";
import "vue";
import "../utils/types.js";
import _sfc_main from "./src/popper.vue.js";
import { popperProps, roleTypes } from "./src/popper.js";
console.log(_sfc_main, "opper");
const EtuPopper = withInstall(_sfc_main);
export {
  EtuPopper,
  EtuPopper as default,
  popperProps,
  roleTypes
};

import { buildProps } from "../../utils/vue/props/runtime.js";
import "vue";
import "../../utils/types.js";
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
export {
  popperProps,
  roleTypes
};

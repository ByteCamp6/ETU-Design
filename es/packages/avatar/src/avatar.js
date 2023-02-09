import { definePropType } from "../../utils/vue/props/runtime.js";
import "vue";
import "../../utils/types.js";
import { isNumber } from "../../../node_modules/@vueuse/shared/index.js";
const componentSizes = ["", "default", "small", "large"];
const shapeTypes = ["circle", "square"];
const avatarProps = {
  icon: {
    type: String
  },
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: shapeTypes,
    default: "circle"
  },
  src: {
    type: String
  },
  srcSet: {
    type: String
  },
  alt: {
    type: String
  },
  fit: {
    type: definePropType(String),
    default: "cover"
  }
};
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
export {
  avatarEmits,
  avatarProps
};

import "vue";
import { definePropType } from "../../utils/vue/runtime.js";
const dropdownItemProps = {
  command: {
    type: definePropType([Object, String, Number]),
    default: () => "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  divided: {
    type: Boolean,
    default: false,
  },
};
export { dropdownItemProps };

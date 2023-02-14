import "vue";
import { definePropType } from "../../../utils/vue/runtime.js";
const paginationSizesProps = {
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => [10, 20, 30, 40, 50, 100]
  },
  popperClass: {
    type: String
  },
  disabled: Boolean
};
export {
  paginationSizesProps
};

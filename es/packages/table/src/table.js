import "vue";
import { definePropType } from "../../utils/vue/runtime.js";
const tableProps = {
  columns: {
    type: definePropType(Array),
    default: () => [],
    required: true
  },
  data: {
    type: definePropType(Array),
    default: () => [],
    required: true
  },
  stripe: Boolean,
  rowKey: {
    type: String,
    default: "key"
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  rowSelection: {
    type: definePropType(Object)
  },
  selectedKeys: {
    type: definePropType(Array)
  },
  rowClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Function
    ])
  }
};
export {
  tableProps
};

import "vue";
import { definePropType } from "../../utils/vue/runtime.js";
import { dialogContentProps } from "./dialog-content.js";
import { isBoolean } from "../../../node_modules/@vueuse/shared/index.js";
const dialogProps = {
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false,
  },
  beforeClose: {
    type: definePropType(Function),
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  top: {
    type: String,
    default: "15vh",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  modalClass: String,
  width: {
    type: [String, Number],
    default: "50%",
  },
  zIndex: {
    type: Number,
  },
  trapFocus: {
    type: Boolean,
    default: false,
  },
};
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  "update:modelValue": (value) => isBoolean(value),
};
export { dialogEmits, dialogProps };

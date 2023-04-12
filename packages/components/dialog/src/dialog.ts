import type { ExtractPropTypes } from "vue";
import { definePropType, isBoolean } from "@etu-design/utils";
import { dialogContentProps } from "./dialog-content";

type DoneFn = (cancel?: boolean) => void;
export type DialogBeforeCloseFn = (done: DoneFn) => void;

export const dialogProps = {
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false,
  },
  beforeClose: {
    type: definePropType<DialogBeforeCloseFn>(Function),
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
} as const;

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  "update:modelValue": (value: boolean) => isBoolean(value),
};
export type DialogEmits = typeof dialogEmits;

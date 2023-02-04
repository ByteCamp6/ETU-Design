import type { ExtractPropTypes } from "vue";
import type UploadDragger from "./upload-dragger.vue";
import { isArray } from "@etu-design/utils";

export const uploadDraggerProps = {
  accept: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;
export type UploadDraggerProps = ExtractPropTypes<typeof uploadDraggerProps>;

export const uploadDraggerEmits = {
  file: (file: File[]) => isArray(file),
};
export type UploadDraggerEmits = typeof uploadDraggerEmits;

export type UploadDraggerInstance = InstanceType<typeof UploadDragger>;

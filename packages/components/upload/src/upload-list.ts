import { uploadListTypes } from "./upload";
import type { UploadFile } from "./upload";
import type { ExtractPropTypes } from "vue";

export const uploadListProps = {
  files: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  handlePreview: {
    type: Function,
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text",
  },
} as const;

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>;
export const uploadListEmits = {
  remove: (file: UploadFile) => !!file,
};
export type UploadListEmits = typeof uploadListEmits;

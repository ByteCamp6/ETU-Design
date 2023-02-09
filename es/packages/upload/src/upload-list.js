import { uploadListTypes } from "./upload.js";
const uploadListProps = {
  files: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  handlePreview: {
    type: Function
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  }
};
const uploadListEmits = {
  remove: (file) => !!file
};
export {
  uploadListEmits,
  uploadListProps
};

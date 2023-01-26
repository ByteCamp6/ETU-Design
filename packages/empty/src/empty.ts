import type { ExtractPropTypes } from "vue";

export const emptyProps = {
  description: {
    type: String,
    default: "No Data",
  },
  image: {
    type: String,
  },
  imageSize: Number,
};

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;

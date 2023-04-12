import type { ExtractPropTypes } from "vue";

export const collapseItemProps = {
  name: {
    type: [String, Number],
  },
  title: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;

import type { ExtractPropTypes } from "vue";

export const rowProps = {
  tag: {
    type: String,
    default: "div",
  },
  gutter: {
    type: Number,
    default: 0,
  }, // 分栏间隔
  type: {
    type: String,
    default: "",
  }, // 布局方式
  justify: {
    type: String,
    default: "center",
    validator: function (value) {
      return (
        ["start", "end", "center", "space-around", "space-between"].indexOf(
          value,
        ) !== -1
      );
    },
  }, // flex下的水平排列方式
  align: {
    type: String,
    default: "middle",
    validator: function (value) {
      return ["top", "middle", "bottom"].indexOf(value) !== -1;
    },
  },
} as const;

export type RowProps = ExtractPropTypes<typeof rowProps>;

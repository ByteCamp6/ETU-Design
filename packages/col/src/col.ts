import type { ExtractPropTypes } from "vue";

export const colProps = {
  span: {
    type: Number,
    default: 0,
  }, // 栏位数
  offset: {
    type: Number,
    default: 0,
  }, // 偏移量
} as const;

export type ColProps = ExtractPropTypes<typeof colProps>;

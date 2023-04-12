import type { ExtractPropTypes } from "vue";
import type Sizes from "./sizes.vue";
import { definePropType } from "@etu-design/utils";

export const paginationSizesProps = {
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => [10, 20, 30, 40, 50, 100],
  },
  popperClass: {
    type: String,
  },
  disabled: Boolean,
} as const;

export type PaginationSizesProps = ExtractPropTypes<
  typeof paginationSizesProps
>;

export type SizesInstance = InstanceType<typeof Sizes>;

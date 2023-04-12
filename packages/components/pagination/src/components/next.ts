import type { ExtractPropTypes } from "vue";
import type Next from "./next.vue";

export const paginationNextProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    default: 50,
  },
  nextText: {
    type: String,
  },
} as const;

export const paginationNextEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type PaginationNextProps = ExtractPropTypes<typeof paginationNextProps>;

export type NextInstance = InstanceType<typeof Next>;

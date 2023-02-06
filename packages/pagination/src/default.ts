import { definePropType, isNumber } from "@etu-design/utils";
import type { ExtractPropTypes } from "vue";

export type LayoutKey =
  | "prev"
  | "pager"
  | "next"
  | "jumper"
  | "total"
  | "sizes";

export const paginationProps = {
  total: Number,
  /**
   * @description options of item count per page
   */
  pageSize: Number,
  /**
   * @description default initial value of page size
   */
  defaultPageSize: Number,
  /**
   * @description current page number
   */
  currentPage: Number,
  /**
   * @description default initial value of current-page
   */
  defaultCurrentPage: Number,
  /**
   * @description total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required
   */
  pageCount: Number,
  /**
   * @description number of pagers. Pagination collapses when the total page count exceeds this value
   */
  pagerCount: {
    type: Number,
    validator: (value: unknown) => {
      return (
        isNumber(value) &&
        Math.trunc(value) === value &&
        value > 4 &&
        value < 22 &&
        value % 2 === 1
      );
    },
    default: 7,
  },
  /**
   * @description layout of Pagination, elements separated with a comma
   */
  layout: {
    type: String,
    default: (
      ["prev", "pager", "next", "jumper", "sizes", "total"] as LayoutKey[]
    ).join(", "),
  },
  /**
   * @description item count of each page
   */
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => [10, 20, 30, 40, 50, 100],
  },
  /**
   * @description custom class name for the page size Select's dropdown
   */
  popperClass: {
    type: String,
    default: "",
  },
  /**
   * @description text for the prev button
   */
  prevText: {
    type: String,
    default: "",
  },
  /**
   * @description text for the next button
   */
  nextText: {
    type: String,
    default: "",
  },
  /**
   * @description whether to use small pagination
   */
  small: Boolean,
  /**
   * @description whether the buttons have a background color
   */
  background: Boolean,
  /**
   * @description whether Pagination is disabled
   */
  disabled: Boolean,
  /**
   * @description whether to hide when there's only one page
   */
  hideOnSinglePage: Boolean,
} as const;

export type PaginationProps = ExtractPropTypes<typeof paginationProps>;

export const paginationEmits = {
  "update:current-page": (val: number) => isNumber(val),
  "update:page-size": (val: number) => isNumber(val),
  "size-change": (val: number) => isNumber(val),
  "current-change": (val: number) => isNumber(val),
  "prev-click": (val: number) => isNumber(val),
  "next-click": (val: number) => isNumber(val),
};
export type PaginationEmits = typeof paginationEmits;

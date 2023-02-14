"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const runtime = require("../../utils/vue/runtime.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const paginationProps = {
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
    validator: (value) => {
      return index.isNumber(value) && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  /**
   * @description layout of Pagination, elements separated with a comma
   */
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "sizes", "total"].join(", ")
  },
  /**
   * @description item count of each page
   */
  pageSizes: {
    type: runtime.definePropType(Array),
    default: () => [10, 20, 30, 40, 50, 100]
  },
  /**
   * @description custom class name for the page size Select's dropdown
   */
  popperClass: {
    type: String,
    default: ""
  },
  /**
   * @description text for the prev button
   */
  prevText: {
    type: String,
    default: ""
  },
  /**
   * @description text for the next button
   */
  nextText: {
    type: String,
    default: ""
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
  hideOnSinglePage: Boolean
};
const paginationEmits = {
  "update:current-page": (val) => index.isNumber(val),
  "update:page-size": (val) => index.isNumber(val),
  "size-change": (val) => index.isNumber(val),
  "current-change": (val) => index.isNumber(val),
  "prev-click": (val) => index.isNumber(val),
  "next-click": (val) => index.isNumber(val)
};
exports.paginationEmits = paginationEmits;
exports.paginationProps = paginationProps;

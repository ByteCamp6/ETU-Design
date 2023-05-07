"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const paginationPagerProps = {
  currentPage: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  pagerCount: {
    type: Number,
    default: 7,
  },
  disabled: Boolean,
};
exports.paginationPagerProps = paginationPagerProps;

"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  prevText: {
    type: String,
  },
};
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent,
};
exports.paginationPrevEmits = paginationPrevEmits;
exports.paginationPrevProps = paginationPrevProps;

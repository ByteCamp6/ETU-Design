"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const paginationNextProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  }
};
const paginationNextEmits = {
  click: (evt) => evt instanceof MouseEvent
};
exports.paginationNextEmits = paginationNextEmits;
exports.paginationNextProps = paginationNextProps;
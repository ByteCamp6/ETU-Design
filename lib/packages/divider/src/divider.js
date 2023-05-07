"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dividerProps = {
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  contentPosition: {
    type: String,
    values: ["center", "left", "right"],
    default: "center",
  },
  borderStyle: {
    type: String,
    values: [
      "solid",
      "dotted",
      "dashed",
      "double",
      "groove",
      "ridge",
      "inset",
      "outset",
    ],
    default: "solid",
  },
};
exports.dividerProps = dividerProps;

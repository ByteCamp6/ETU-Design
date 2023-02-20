"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const linkProps = {
  /**
   * @description type
   */
  type: {
    type: String,
    values: ["primary", "success", "warning", "error", "indfo", "danger"],
    default: "default"
  },
  /**
   * @description whether the component has underline
   */
  underline: {
    type: Boolean,
    default: true
  },
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: "" },
  /**
   * @description icon component
   */
  icon: {
    type: String
  }
};
const linkEmits = {
  click: (env) => env instanceof MouseEvent
};
exports.linkEmits = linkEmits;
exports.linkProps = linkProps;

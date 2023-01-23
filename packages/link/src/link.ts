import type { ExtractPropTypes } from "vue";
import type Link from "./link.vue";

export const linkProps = {
  /**
   * @description type
   */
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "default",
  },
  /**
   * @description whether the component has underline
   */
  underline: {
    type: Boolean,
    default: true,
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
  //   icon: {
  //     type: iconPropType,
  //   },
} as const;
export type linkProps = ExtractPropTypes<typeof linkProps>;
export const linkEmits = {
  click: (env: MouseEvent) => env instanceof MouseEvent,
};

export type LinkEmits = typeof linkEmits;

export type LinkInstance = InstanceType<typeof Link>;

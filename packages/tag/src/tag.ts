import type { ExtractPropTypes } from "vue";

export const tagProps = {
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", "primary"],
    default: "primary",
  },
  // hit: Boolean,
  // disableTransitions: Boolean,
  color: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light",
  },
  round: Boolean,
} as const;

export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type TagEmits = typeof tagEmits;

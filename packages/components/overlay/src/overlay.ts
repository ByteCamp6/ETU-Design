import type { ExtractPropTypes } from "vue";

export const overlayProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  maskEvent: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: Number,
  },
} as const;

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;

export const overlayEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
export type OverlayEmits = typeof overlayEmits;

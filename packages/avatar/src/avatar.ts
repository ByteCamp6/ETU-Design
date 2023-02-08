import type { ExtractPropTypes } from "vue";
import { isNumber } from "@etu-design/utils";
import { definePropType } from "@etu-design/utils";
import type { ObjectFitProperty } from "csstype";

const componentSizes = ["", "default", "small", "large"] as const;
const shapeTypes = ["circle", "square"] as const;
const fitTypes = ["fill", "contain", "cover", "none", "scale-down"];

export const avatarProps = {
  icon: {
    type: String,
  },
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val: unknown): val is number => isNumber(val),
  },
  shape: {
    type: String,
    values: shapeTypes,
    default: "circle",
  },
  src: {
    type: String,
  },
  srcSet: {
    type: String,
  },
  alt: {
    type: String,
  },
  fit: {
    type: definePropType<ObjectFitProperty>(String),
    default: "cover",
  },
};

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
};

export type Props = ExtractPropTypes<typeof avatarProps>;

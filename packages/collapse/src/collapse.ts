import type { ExtractPropTypes } from "vue";
import { isString, isArray } from "@etu-design/utils";
import type Collapse from "./collapse.vue";

export const collapseProps = {
  modelValue: {
    type: [String, Array],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
};

export const collapseEmits = {
  change: (val: string | Array<any>) => isString(val) || isArray(val),
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export type CollapseInstance = InstanceType<typeof Collapse>;

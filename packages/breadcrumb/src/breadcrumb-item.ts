import type { ExtractPropTypes } from "vue";
import type BreadcrumbItem from "./breadcrumb-item.vue";

export const breadcrumbItemProps = {
  to: {
    type: String,
    default: "",
  },
  replace: {
    type: Boolean,
    values: [true, false],
    default: false,
  },
} as const;

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>;

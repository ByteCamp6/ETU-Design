import type { ExtractPropTypes } from "vue";
import type Breadcrumb from "./breadcrumb.vue";

export const breadcrumbProps = {
  separator: {
    type: String,
    default: "/",
  },
} as const;

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>;

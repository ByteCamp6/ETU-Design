import { PaginationKey } from "@etu-design/tokens";
import { inject } from "vue";

export const usePagination = () => inject(PaginationKey, {});

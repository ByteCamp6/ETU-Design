import { PaginationKey } from "../../tokens/pagination.js";
import { inject } from "vue";
const usePagination = () => inject(PaginationKey, {});
export {
  usePagination
};

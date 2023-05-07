import { inject } from "vue";
import { TableKey } from "../../tokens/table.js";
const useTable = () => inject(TableKey, void 0);
export { useTable };

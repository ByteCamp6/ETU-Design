import { inject } from "vue";
import { TableKey } from "@etu-design/tokens";

export const useTable = () => inject(TableKey, undefined);

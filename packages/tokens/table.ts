import type { ComputedRef, InjectionKey, Ref } from "vue";
import type {
  SortingColumn,
  TableColumnCtx,
} from "../table/src/table-column/defaults";
import type { ClassName } from "@etu-design/table/src/table";

export interface TableCtx {
  emit: (event: string, ...args: any[]) => void;
  hasKey: ComputedRef<boolean>;
  originColumns: ComputedRef<TableColumnCtx<any>[]>;
  data: ComputedRef<any[]>;
  rowClass: ClassName | ((data: { record: any; rowIndex: number }) => any);
  sortingColumn: Ref<SortingColumn>;
  changeSortingColumn: (data: SortingColumn) => void;
  changeFilterRules: (columnProp: string, filtersValue: string[]) => void;
}

export const TableKey: InjectionKey<TableCtx> = Symbol("TableKey");

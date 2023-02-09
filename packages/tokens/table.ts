import type { ComputedRef, InjectionKey } from "vue";
import type { TableColumnCtx } from "../table/src/table-column/defaults";
import type { ClassName } from "@etu-design/table/src/table";

export interface TableCtx {
  hasKey: ComputedRef<boolean>;
  originColumns: ComputedRef<TableColumnCtx<any>[]>;
  data: Readonly<any[]>;
  rowClass: ClassName | ((data: { record: any; rowIndex: number }) => any);
}

export const TableKey: InjectionKey<TableCtx> = Symbol("TableKey");

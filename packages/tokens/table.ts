import type { ComputedRef, InjectionKey } from "vue";
import type { TableColumnCtx } from "../table/src/table-column/defaults";

export interface TableCtx {
  originColumns: ComputedRef<TableColumnCtx<any>[]>;
  data: Readonly<any[]>;
}

export const TableKey: InjectionKey<TableCtx> = Symbol("TableKey");

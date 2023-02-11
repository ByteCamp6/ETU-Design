import type { VNodeChild } from "vue";
import type { ClassName } from "../table";

export interface TableSortable<T> {
  sorter: (a: T, b: T) => number;
  sortDirections: ("ascend" | "descend")[];
}

export interface TableFilterData {
  text: string;
  value: string;
}

export interface TableFilterable<T> {
  filters: TableFilterData[];
  filter: (value: string, record: T) => boolean;
  multiple: boolean;
}

export interface TableColumnCtx<T> {
  label: string;
  prop: string;
  id?: string;
  width?: number;
  fixed?: "left" | "right";
  styleOffsetWidth?: number;
  stylePosition?: "first" | "last";
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  sortable?: TableSortable<T>;
  filterable?: TableFilterable<T>;
  headerRender?: (data: {
    column: TableColumnCtx<T>;
    columnIndex: number;
  }) => VNodeChild;
  cellRender?: (data: {
    cellData: any;
    record: T;
    column: TableColumnCtx<T>;
    rowIndex: number;
    columnIndex: number;
  }) => VNodeChild;
  headerCellClass?:
    | ClassName
    | ((data: { column: TableColumnCtx<T>; columnIndex: number }) => any);
  bodyCellClass?:
    | ClassName
    | ((data: {
        cellData: any;
        record: T;
        column: TableColumnCtx<T>;
        rowIndex: number;
        columnIndex: number;
      }) => any);
}

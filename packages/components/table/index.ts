import Table from "./src/table.vue";
import type { App } from "vue";

export type {
  TableSortable,
  TableFilterData,
  TableFilterable,
  TableColumnCtx,
  SortingColumn,
  FilterColumn,
} from "./src/table-column";

export * from "./src/table";

Table.install = (app: App) => {
  // 注册组件
  app.component(Table.name, Table);
};

export default Table;

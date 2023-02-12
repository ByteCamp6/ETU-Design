import { defineComponent } from "vue";
import EtuIcon from "@etu-design/icon";
import { useTable } from "../use-table";
import { useNamespace } from "@etu-design/hooks";
import { isArray, isFunction } from "@etu-design/utils";
import { combineClass } from "../utils";

export default defineComponent({
  name: "ElTableHeader",
  components: {
    EtuIcon,
  },

  setup() {
    const ns = useNamespace("table");
    const { originColumns, changeSortingColumn, sortingColumn } = useTable()!;
    return () => {
      return (
        <thead>
          <tr>
            {originColumns.value.map((column, columnIndex) => {
              // @ts-ignore
              return (
                <th
                  key={column.prop}
                  class={combineClass(
                    [
                      ns.e("cell"),
                      column.headerAlign
                        ? ns.is(column.headerAlign)
                        : ns.is(column.align!),
                      ns.bm("fixed-column", column.fixed),
                      ns.is("last-column", column.stylePosition === "last"),
                      ns.is("first-column", column.stylePosition === "first"),
                      sortingColumn.value?.column === column.prop
                        ? sortingColumn.value.sortDirections
                        : undefined,
                    ],
                    column?.headerCellClass,
                    {
                      column: column,
                      columnIndex: columnIndex,
                    },
                  )}
                  style={
                    column?.fixed === "left"
                      ? { left: `${column.styleOffsetWidth}px` }
                      : column?.fixed === "right"
                      ? { right: `${column.styleOffsetWidth}px` }
                      : undefined
                  }
                >
                  <div class={"cell"}>
                    {column.headerRender
                      ? column.headerRender({
                          column: column,
                          columnIndex: columnIndex,
                        })
                      : column.label}
                    {column.sortable && (
                      <span class={"caret-wrapper"}>
                        {column.sortable.sortDirections.includes("ascend") && (
                          <i
                            class={["etu-i-arrow-up-filling", "sort-caret"]}
                            onClick={() => {
                              changeSortingColumn({
                                column: column.prop,
                                sortDirections: "ascend",
                              });
                            }}
                          ></i>
                        )}
                        {column.sortable.sortDirections.includes("descend") && (
                          <i
                            class={["etu-i-arrow-down-filling", "sort-caret"]}
                            onClick={() => {
                              changeSortingColumn({
                                column: column.prop,
                                sortDirections: "descend",
                              });
                            }}
                          ></i>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
      );
    };
  },
});

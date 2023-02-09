import { defineComponent } from "vue";
import EtuCheckbox from "@etu-design/checkbox";
import { useTable } from "../use-table";
import { useNamespace } from "@etu-design/hooks";
import { isArray, isFunction } from "@etu-design/utils";
import { combineClass } from "../utils";

export default defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox,
  },

  setup() {
    const ns = useNamespace("table");
    const { originColumns } = useTable()!;
    return () => {
      return (
        <thead>
          <tr>
            {originColumns.value.map((column, columnIndex) => {
              return (
                <th
                  key={column.prop}
                  class={combineClass(
                    [
                      ns.e("cell"),
                      column.headerAlign
                        ? ns.is(column.headerAlign)
                        : ns.is(column.align!),
                    ],
                    column?.headerCellClass,
                    {
                      column: column,
                      columnIndex: columnIndex,
                    },
                  )}
                >
                  <div class={"cell"}>
                    {column.headerRender
                      ? column.headerRender({
                          column: column,
                          columnIndex: columnIndex,
                        })
                      : column.label}
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

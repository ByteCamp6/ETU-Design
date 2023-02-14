import { defineComponent } from "vue";
import { useTable } from "../use-table";
import { useNamespace } from "@etu-design/hooks";
import { combineClass, fixedStyle } from "../utils";
import { addClass, removeClass } from "@etu-design/utils";

export default defineComponent({
  name: "ElTableBody",

  setup() {
    const ns = useNamespace("table");
    const { data, originColumns, rowClass, emit } = useTable()!;
    return () => {
      return (
        <tbody>
          {data.value.map((rowData, rowIndex) => {
            return (
              <tr
                key={rowData.id}
                class={combineClass([ns.e("row")], rowClass, {
                  record: rowData,
                  rowIndex: rowIndex,
                })}
                onClick={($event) => {
                  emit("row-click", rowData, $event);
                }}
                onMouseenter={($event) => {
                  const el = $event.currentTarget as Element;
                  addClass(el, "hover-row");
                }}
                onMouseleave={($event) => {
                  const el = $event.currentTarget as Element;
                  removeClass(el, "hover-row");
                }}
              >
                {originColumns.value.map((column, columnIndex) => {
                  return (
                    <td
                      key={columnIndex}
                      class={combineClass(
                        [
                          ns.e("cell"),
                          ns.is(column.align!),
                          ns.bm("fixed-column", column.fixed),
                          ns.is("last-column", column.stylePosition === "last"),
                          ns.is(
                            "first-column",
                            column.stylePosition === "first",
                          ),
                        ],
                        column?.bodyCellClass,
                        {
                          cellData: rowData[column.prop],
                          column: column,
                          columnIndex: columnIndex,
                          record: rowData,
                          rowIndex: rowIndex,
                        },
                      )}
                      style={fixedStyle(column)}
                      onClick={($event) => {
                        emit("cell-click", rowData, column, $event);
                      }}
                    >
                      <div class={"cell"}>
                        {column.cellRender
                          ? column.cellRender({
                              cellData: rowData[column.prop],
                              column: column,
                              columnIndex: columnIndex,
                              record: rowData,
                              rowIndex: rowIndex,
                            })
                          : rowData[column.prop]}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      );
    };
  },
});

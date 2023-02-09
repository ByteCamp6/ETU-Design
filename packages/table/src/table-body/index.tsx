import { defineComponent } from "vue";
import EtuCheckbox from "@etu-design/checkbox";
import EtuRadio from "@etu-design/radio";
import { useTable } from "../use-table";
import { useNamespace } from "@etu-design/hooks";

export default defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox,
    EtuRadio,
  },

  setup() {
    const ns = useNamespace("table");
    const { data, originColumns } = useTable()!;
    // const cellData = data.map((rowData) => {
    //   return originColumns.value.map((column) => {
    //     return {
    //       text: rowData[column.prop],
    //     };
    //   });
    // });
    return () => {
      return (
        <tbody>
          {data.map((rowData, rowIndex) => {
            return (
              <tr key={rowIndex} class={ns.e("row")}>
                {originColumns.value.map((column, columnIndex) => {
                  return (
                    <td
                      key={columnIndex}
                      class={[ns.e("cell"), ns.is(column.align!)]}
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

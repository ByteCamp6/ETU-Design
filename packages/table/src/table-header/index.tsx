import { defineComponent } from "vue";
import EtuCheckbox from "@etu-design/checkbox";
import { useTable } from "../use-table";
import { useNamespace } from "@etu-design/hooks";

export default defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox,
  },

  setup(props, { emit }) {
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
                  class={[
                    ns.e("cell"),
                    column.headerAlign
                      ? ns.is(column.headerAlign)
                      : ns.is(column.align!),
                  ]}
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

import { defineComponent, ref, computed, openBlock, createBlock, unref, withCtx, createVNode, createElementVNode, normalizeClass, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString } from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import "../../../popper/index.js";
import "../../../icon/index.js";
import scrollbar from "../../../scrollbar/index.js";
import checkbox from "../../../checkbox/index.js";
import { useTable } from "../use-table.js";
import _sfc_main$1 from "../../../popper/src/popper.vue.js";
import _sfc_main$2 from "../../../icon/src/icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "filter-panel",
  props: {
    placement: null,
    column: null
  },
  setup(__props) {
    const props = __props;
    const { Checkbox: EtuCheckbox, CheckboxGroup: EtuCheckboxGroup } = checkbox;
    const { Scrollbar: EtuScrollbar } = scrollbar;
    const ns = useNamespace("table");
    const { changeFilterRules } = useTable();
    const PopperRef = ref();
    const checkFilters = ref([]);
    const filters = computed(() => {
      return props.column.filterable.filters;
    });
    const hidden = () => {
      PopperRef.value.doClose();
    };
    const handleConfirm = () => {
      changeFilterRules(props.column.prop, checkFilters.value);
      hidden();
    };
    const handleReset = () => {
      checkFilters.value = [];
      changeFilterRules(props.column.prop, checkFilters.value);
      hidden();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        ref_key: "PopperRef",
        ref: PopperRef,
        placement: __props.placement
      }, {
        content: withCtx(() => [
          createVNode(unref(EtuScrollbar), { maxHeight: 280 }, {
            default: withCtx(() => [
              createElementVNode("div", {
                class: normalizeClass(unref(ns).be("filter", "content"))
              }, [
                createVNode(unref(EtuCheckboxGroup), {
                  modelValue: checkFilters.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkFilters.value = $event),
                  class: normalizeClass(unref(ns).be("filter", "checkbox-group"))
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filters), (filter) => {
                      return openBlock(), createBlock(unref(EtuCheckbox), {
                        key: filter.value,
                        label: filter.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(filter.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "class"]),
                createElementVNode("div", {
                  class: normalizeClass(unref(ns).be("filter", "button"))
                }, [
                  createElementVNode("button", { onClick: handleConfirm }, "确认"),
                  createElementVNode("button", { onClick: handleReset }, "重置")
                ], 2)
              ], 2)
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(ns).e("column-filter-trigger"))
          }, [
            createVNode(unref(_sfc_main$2), { name: "arrow-down-bold" })
          ], 2)
        ]),
        _: 1
      }, 8, ["placement"]);
    };
  }
});
export {
  _sfc_main as default
};

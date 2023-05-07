"use strict";
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
require("../../../popper/index.js");
require("../../../icon/index.js");
const index$2 = require("../../../scrollbar/index.js");
const index$1 = require("../../../checkbox/index.js");
const useTable = require("../use-table.js");
const popper_vue_vue_type_script_setup_true_name_EtuPopper_lang = require("../../../popper/src/popper.vue.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../../icon/src/icon.vue.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "filter-panel",
  props: {
    placement: null,
    column: null,
  },
  setup(__props) {
    const props = __props;
    const { Checkbox: EtuCheckbox, CheckboxGroup: EtuCheckboxGroup } = index$1;
    const { Scrollbar: EtuScrollbar } = index$2.default;
    const ns = index.useNamespace("table");
    const { changeFilterRules } = useTable.useTable();
    const PopperRef = vue.ref();
    const checkFilters = vue.ref([]);
    const filters = vue.computed(() => {
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
      return (
        vue.openBlock(),
        vue.createBlock(
          vue.unref(popper_vue_vue_type_script_setup_true_name_EtuPopper_lang),
          {
            ref_key: "PopperRef",
            ref: PopperRef,
            placement: __props.placement,
          },
          {
            content: vue.withCtx(() => [
              vue.createVNode(
                vue.unref(EtuScrollbar),
                { maxHeight: 280 },
                {
                  default: vue.withCtx(() => [
                    vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass(
                          vue.unref(ns).be("filter", "content"),
                        ),
                      },
                      [
                        vue.createVNode(
                          vue.unref(EtuCheckboxGroup),
                          {
                            modelValue: checkFilters.value,
                            "onUpdate:modelValue":
                              _cache[0] ||
                              (_cache[0] = ($event) =>
                                (checkFilters.value = $event)),
                            class: vue.normalizeClass(
                              vue.unref(ns).be("filter", "checkbox-group"),
                            ),
                          },
                          {
                            default: vue.withCtx(() => [
                              (vue.openBlock(true),
                              vue.createElementBlock(
                                vue.Fragment,
                                null,
                                vue.renderList(vue.unref(filters), (filter) => {
                                  return (
                                    vue.openBlock(),
                                    vue.createBlock(
                                      vue.unref(EtuCheckbox),
                                      {
                                        key: filter.value,
                                        label: filter.value,
                                      },
                                      {
                                        default: vue.withCtx(() => [
                                          vue.createTextVNode(
                                            vue.toDisplayString(filter.text),
                                            1,
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["label"],
                                    )
                                  );
                                }),
                                128,
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue", "class"],
                        ),
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(
                              vue.unref(ns).be("filter", "button"),
                            ),
                          },
                          [
                            vue.createElementVNode(
                              "button",
                              { onClick: handleConfirm },
                              "确认",
                            ),
                            vue.createElementVNode(
                              "button",
                              { onClick: handleReset },
                              "重置",
                            ),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode(
                "span",
                {
                  class: vue.normalizeClass(
                    vue.unref(ns).e("column-filter-trigger"),
                  ),
                },
                [
                  vue.createVNode(
                    vue.unref(icon_vue_vue_type_script_setup_true_lang),
                    { name: "arrow-down-bold" },
                  ),
                ],
                2,
              ),
            ]),
            _: 1,
          },
          8,
          ["placement"],
        )
      );
    };
  },
});
module.exports = _sfc_main;

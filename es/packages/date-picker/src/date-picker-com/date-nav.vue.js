import { defineComponent, inject, toRefs, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, withDirectives, createVNode, withModifiers, vShow, createElementVNode, toDisplayString } from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { datePickerKey } from "../../../tokens/data-picker.js";
import { getMonthEn } from "../utils.js";
import { dateNavProps } from "../props/date-nav.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "date-nav",
  props: dateNavProps,
  setup(__props) {
    const props = __props;
    const datePicker = inject(datePickerKey);
    const {
      changeType,
      monthAdd,
      dateAdd,
      yearAdd,
      dateSubtract,
      yearSubtract,
      monthSubtract
    } = datePicker;
    const { date, originDate, type } = toRefs(datePicker);
    const { model, value } = toRefs(props);
    const ns = useNamespace("date-picker");
    console.log(value.value);
    const yearRange = computed(() => {
      const year = Math.floor(value.value.year() / 10) * 10;
      return `${year}-${year + 10 - 1}`;
    });
    const navIconClass = computed(() => {
      return [ns.e("nav-icon")];
    });
    const navTitleClass = computed(() => {
      return [ns.e("nav-title")];
    });
    const navInnerClass = computed(() => {
      return [ns.e("nav-inner")];
    });
    const handleClickYear = (option) => {
      if (option === "add") {
        type.value === "year" ? dateAdd(10, "year", props.index) : yearAdd(props.index);
      } else {
        type.value === "year" ? dateSubtract(10, "year", props.index) : yearSubtract(props.index);
      }
    };
    const handleClickType = (type2) => {
      if (!props.change)
        return;
      changeType(type2);
    };
    return (_ctx, _cache) => {
      const _component_etu_icon = resolveComponent("etu-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).e("nav"))
      }, [
        withDirectives(createVNode(_component_etu_icon, {
          class: normalizeClass(unref(navIconClass)),
          name: "arrow-double-left",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => handleClickYear("subtract"), ["stop"]))
        }, null, 8, ["class"]), [
          [vShow, _ctx.left]
        ]),
        withDirectives(createVNode(_component_etu_icon, {
          class: normalizeClass(unref(navIconClass)),
          name: "arrow-right",
          style: { "transform": "rotate(-180deg)", "margin-top": "-5px" },
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => unref(monthSubtract)(_ctx.index), ["stop"]))
        }, null, 8, ["class"]), [
          [vShow, unref(type) === "date" || unref(type) === "daterange" && _ctx.left]
        ]),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("nav-header"))
        }, [
          unref(type) === "year" ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(navTitleClass))
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(navInnerClass))
            }, toDisplayString(unref(yearRange)), 3)
          ], 2)) : unref(type) === "month" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(navTitleClass))
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(navInnerClass)),
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleClickType("year"), ["stop"]))
            }, toDisplayString(unref(value).year()), 3)
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(unref(navTitleClass))
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(navInnerClass)),
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => handleClickType("year"), ["stop"]))
            }, toDisplayString(unref(value).year()), 3),
            createElementVNode("span", {
              class: normalizeClass(unref(navInnerClass)),
              onClick: _cache[4] || (_cache[4] = withModifiers(($event) => handleClickType("month"), ["stop"]))
            }, toDisplayString(unref(getMonthEn)(unref(value).month())), 3)
          ], 2))
        ], 2),
        withDirectives(createVNode(_component_etu_icon, {
          class: normalizeClass(unref(navIconClass)),
          name: "arrow-right",
          onClick: _cache[5] || (_cache[5] = withModifiers(($event) => unref(monthAdd)(_ctx.index), ["stop"]))
        }, null, 8, ["class"]), [
          [vShow, unref(type) === "date" || unref(type) === "daterange" && _ctx.right]
        ]),
        withDirectives(createVNode(_component_etu_icon, {
          class: normalizeClass(unref(navIconClass)),
          name: "arrow-double-right",
          onClick: _cache[6] || (_cache[6] = withModifiers(($event) => handleClickYear("add"), ["stop"]))
        }, null, 8, ["class"]), [
          [vShow, _ctx.right]
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

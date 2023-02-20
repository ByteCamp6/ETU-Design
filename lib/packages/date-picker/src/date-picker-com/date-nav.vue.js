"use strict";
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const dataPicker = require("../../../tokens/data-picker.js");
const utils = require("../utils.js");
const dateNav = require("../props/date-nav.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "date-nav",
  props: dateNav.dateNavProps,
  setup(__props) {
    const props = __props;
    const datePicker = vue.inject(dataPicker.datePickerKey);
    const {
      changeType,
      monthAdd,
      dateAdd,
      yearAdd,
      dateSubtract,
      yearSubtract,
      monthSubtract
    } = datePicker;
    const { date, originDate, type } = vue.toRefs(datePicker);
    const { model, value } = vue.toRefs(props);
    const ns = index.useNamespace("date-picker");
    console.log(value.value);
    const yearRange = vue.computed(() => {
      const year = Math.floor(value.value.year() / 10) * 10;
      return `${year}-${year + 10 - 1}`;
    });
    const navIconClass = vue.computed(() => {
      return [ns.e("nav-icon")];
    });
    const navTitleClass = vue.computed(() => {
      return [ns.e("nav-title")];
    });
    const navInnerClass = vue.computed(() => {
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
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).e("nav"))
      }, [
        vue.withDirectives(vue.createVNode(_component_etu_icon, {
          class: vue.normalizeClass(vue.unref(navIconClass)),
          name: "arrow-double-left",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => handleClickYear("subtract"), ["stop"]))
        }, null, 8, ["class"]), [
          [vue.vShow, _ctx.left]
        ]),
        vue.withDirectives(vue.createVNode(_component_etu_icon, {
          class: vue.normalizeClass(vue.unref(navIconClass)),
          name: "arrow-right",
          style: { "transform": "rotate(-180deg)", "margin-top": "-5px" },
          onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => vue.unref(monthSubtract)(_ctx.index), ["stop"]))
        }, null, 8, ["class"]), [
          [vue.vShow, vue.unref(type) === "date" || vue.unref(type) === "daterange" && _ctx.left]
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("nav-header"))
        }, [
          vue.unref(type) === "year" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(vue.unref(navTitleClass))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(navInnerClass))
            }, vue.toDisplayString(vue.unref(yearRange)), 3)
          ], 2)) : vue.unref(type) === "month" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: vue.normalizeClass(vue.unref(navTitleClass))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(navInnerClass)),
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => handleClickType("year"), ["stop"]))
            }, vue.toDisplayString(vue.unref(value).year()), 3)
          ], 2)) : (vue.openBlock(), vue.createElementBlock("div", {
            key: 2,
            class: vue.normalizeClass(vue.unref(navTitleClass))
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(navInnerClass)),
              onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => handleClickType("year"), ["stop"]))
            }, vue.toDisplayString(vue.unref(value).year()), 3),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(navInnerClass)),
              onClick: _cache[4] || (_cache[4] = vue.withModifiers(($event) => handleClickType("month"), ["stop"]))
            }, vue.toDisplayString(vue.unref(utils.getMonthEn)(vue.unref(value).month())), 3)
          ], 2))
        ], 2),
        vue.withDirectives(vue.createVNode(_component_etu_icon, {
          class: vue.normalizeClass(vue.unref(navIconClass)),
          name: "arrow-right",
          onClick: _cache[5] || (_cache[5] = vue.withModifiers(($event) => vue.unref(monthAdd)(_ctx.index), ["stop"]))
        }, null, 8, ["class"]), [
          [vue.vShow, vue.unref(type) === "date" || vue.unref(type) === "daterange" && _ctx.right]
        ]),
        vue.withDirectives(vue.createVNode(_component_etu_icon, {
          class: vue.normalizeClass(vue.unref(navIconClass)),
          name: "arrow-double-right",
          onClick: _cache[6] || (_cache[6] = vue.withModifiers(($event) => handleClickYear("add"), ["stop"]))
        }, null, 8, ["class"]), [
          [vue.vShow, _ctx.right]
        ])
      ], 2);
    };
  }
});
module.exports = _sfc_main;

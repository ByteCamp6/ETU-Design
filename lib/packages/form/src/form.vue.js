"use strict";
const vue = require("vue");
const form = require("./form.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const __default__ = {
  name: "EtuForm",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: form.formProps,
  setup(__props, { expose }) {
    const props = __props;
    const bem = index.useNamespace("form");
    const validate = async (callback) => {
      let errors = {};
      for (const field of fields) {
        try {
          await field.validate("");
        } catch (error) {
          errors = {
            ...errors,
            ...error.fields,
          };
        }
      }
      if (Object.keys(errors).length === 0)
        return callback == null ? void 0 : callback(true);
      else {
        callback == null ? void 0 : callback(false, errors);
        return Promise.reject(errors);
      }
    };
    const fields = [];
    const addField = (context) => {
      fields.push(context);
    };
    const etuForm = vue.reactive({
      ...vue.toRefs(props),
      addField,
    });
    let formClass = vue.computed(() => {
      return [bem.b()];
    });
    vue.provide("etuForm", etuForm);
    expose({
      // 暴露校验方法
      validate,
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "form",
          {
            class: vue.normalizeClass(vue.unref(formClass)),
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;

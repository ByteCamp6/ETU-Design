"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const formItem = require("./form-item.js");
const index$1 = require("../../../node_modules/async-validator/dist-web/index.js");
const __default__ = {
  name: "EtuFormItem",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: formItem.formItemProps,
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("form-item");
    const FormContext = vue.inject("etuForm");
    const validateState = vue.ref();
    const validateMessage = vue.ref("");
    const validate = async (trigger, callback) => {
      const rules = getRuleFiltered(trigger);
      const modelName = props.prop;
      const validator = new index$1({
        [modelName]: rules,
      });
      const model = FormContext == null ? void 0 : FormContext.model;
      return validator
        .validate({
          [modelName]: model[modelName],
        })
        .then(() => {
          validateSuccess();
          console.log("成功");
        })
        .catch((err) => {
          validateFailed(err);
          return Promise.reject(err);
        });
    };
    const validateSuccess = () => {
      validateState.value = "success";
      validateMessage.value = "";
    };
    const validateFailed = (error) => {
      validateState.value = "error";
      const { errors } = error;
      validateMessage.value = errors ? errors[0].message : "";
    };
    const getRuleFiltered = (trigger) => {
      const rules = _rules.value;
      return rules.filter((rule) => {
        if (!rule.trigger || !trigger) return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      });
    };
    const context = {
      ...props,
      validate,
    };
    const converArray = (rules) => {
      return rules ? (Array.isArray(props.rules) ? rules : [rules]) : [];
    };
    const _rules = vue.computed(() => {
      const myRules = converArray(props.rules);
      const formRules = FormContext == null ? void 0 : FormContext.rules;
      if (formRules && props.prop) {
        const temp = formRules[props.prop];
        if (temp) {
          myRules.push(...converArray(temp));
        }
      }
      return myRules;
    });
    let formItemClass = vue.computed(() => {
      return [
        bem.b(),
        bem.is("success", validateState.value == "success"),
        bem.is("error", validateState.value == "error"),
      ];
    });
    vue.provide("form-item", context);
    vue.onMounted(() => {
      FormContext == null ? void 0 : FormContext.addField(context);
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(formItemClass)),
          },
          [
            vue.createElementVNode(
              "label",
              {
                class: vue.normalizeClass(vue.unref(bem).e("label")),
              },
              vue.toDisplayString(_ctx.label),
              3,
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(bem).e("content")),
              },
              [
                vue.renderSlot(_ctx.$slots, "default"),
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(bem).e("error")),
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "error", {}, () => [
                      vue.createTextVNode(
                        vue.toDisplayString(validateMessage.value),
                        1,
                      ),
                    ]),
                  ],
                  2,
                ),
              ],
              2,
            ),
          ],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;

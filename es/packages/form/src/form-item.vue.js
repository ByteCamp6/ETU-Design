import {
  defineComponent,
  inject,
  ref,
  computed,
  provide,
  onMounted,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  createElementVNode,
  toDisplayString,
  renderSlot,
  createTextVNode,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { formItemProps } from "./form-item.js";
import Schema from "../../../node_modules/async-validator/dist-web/index.js";
const __default__ = {
  name: "EtuFormItem",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: formItemProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("form-item");
    const FormContext = inject("etuForm");
    const validateState = ref();
    const validateMessage = ref("");
    const validate = async (trigger, callback) => {
      const rules = getRuleFiltered(trigger);
      const modelName = props.prop;
      const validator = new Schema({
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
    const _rules = computed(() => {
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
    let formItemClass = computed(() => {
      return [
        bem.b(),
        bem.is("success", validateState.value == "success"),
        bem.is("error", validateState.value == "error"),
      ];
    });
    provide("form-item", context);
    onMounted(() => {
      FormContext == null ? void 0 : FormContext.addField(context);
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(formItemClass)),
          },
          [
            createElementVNode(
              "label",
              {
                class: normalizeClass(unref(bem).e("label")),
              },
              toDisplayString(_ctx.label),
              3,
            ),
            createElementVNode(
              "div",
              {
                class: normalizeClass(unref(bem).e("content")),
              },
              [
                renderSlot(_ctx.$slots, "default"),
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass(unref(bem).e("error")),
                  },
                  [
                    renderSlot(_ctx.$slots, "error", {}, () => [
                      createTextVNode(
                        toDisplayString(validateMessage.value),
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
export { _sfc_main as default };

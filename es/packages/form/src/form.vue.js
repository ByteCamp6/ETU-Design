import { defineComponent, reactive, toRefs, computed, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { formProps } from "./form.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const __default__ = {
  name: "EtuForm"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: formProps,
  setup(__props, { expose }) {
    const props = __props;
    const bem = useNamespace("form");
    const validate = async (callback) => {
      let errors = {};
      for (const field of fields) {
        try {
          await field.validate("");
        } catch (error) {
          errors = {
            ...errors,
            ...error.fields
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
    const etuForm = reactive({
      ...toRefs(props),
      addField
    });
    let formClass = computed(() => {
      return [bem.b()];
    });
    provide("etuForm", etuForm);
    expose({
      // 暴露校验方法
      validate
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(unref(formClass))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

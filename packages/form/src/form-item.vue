<template>
  <div :class="formItemClass">
    <label :class="bem.e('label')">{{ label }}</label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error">{{ validateMessage }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuFormItem",
};
</script>

<script lang="ts" setup>
// npm i async-validator
import { computed, ref, provide, inject } from "vue";
import { useNamespace } from "../../hooks";
import { formItemProps, formItemContextKey } from "./form-item";
import AsyncValdaitor from "async-validator";
// import { FormItemValidateState } from "./form-item";
// import { FormItemContext } from "./form-item";

const bem = useNamespace("form-item");
const props = defineProps(formItemProps);

const FormContext: any = inject("etuForm");
// console.log("form", FormContext);

// 校验结果
const validateState = ref();
const validateMessage = ref("");

// 触发时机和校验是否通过
const validate = async (trigger, callback?) => {
  const rules = getRuleFiltered(trigger);
  // console.log(trigger, rules);
  const modelName = props.prop!;
  const validator = new AsyncValdaitor({
    [modelName]: rules,
  });
  const model = FormContext?.model;

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
    });
};

const validateSuccess = () => {
  validateState.value = "success";
  validateMessage.value = "";
};
const validateFailed = (error) => {
  validateState.value = "error";
  const { errors } = error;
  // console.dir(error);
  validateMessage.value = errors ? errors[0].message : "";
};

const getRuleFiltered = (trigger: string) => {
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
  const formRules = FormContext?.rules;
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
</script>

<style scoped lang="scss">
.errors {
  color: red;
  font-size: 12px;
}
</style>

<template>
  <div>
    <label for="">
      {{ props.label }}
    </label>
    <slot></slot>
    <p class="errors">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts" setup>
// import mitt from "mitt";
import {
  reactive,
  onMounted,
  ref,
  toRefs,
  provide,
  inject,
  getCurrentInstance,
} from "vue";

import { formItemProps } from "./form-item";
// npm i async-validator
import Schema from "async-validator";

const props = defineProps(formItemProps);
// @ts-ignore
const { proxy } = getCurrentInstance();

// 接受父组件传递的`formItemEmitter`、`prop`、`model`、`rules`属性和方法
const etuForm: any = inject("etuForm");
let error = ref();

const validate = () => {
  // 当前表单项校验
  // 获取校验规则和当前数据
  if (!props.prop) return;
  const rules = etuForm.rules[props.prop];
  const value = etuForm.model[props.prop];
  const validator = new Schema({ [props.prop]: rules });
  // 返回promise，全局可以统一处理
  return validator.validate({ [props.prop]: value }, (errors) => {
    // errors存在则校验失败
    if (errors) {
      error.value = errors[0].message;
    } else {
      // 校验通过
      error.value = "";
    }
  });
};

// 定义响应式的表单项对象，将props、校验方法、事件总线通过`provide`传递给子孙后代组件，如input等UI控件
const etuFormItem = reactive({
  ...toRefs(props),
  validate,
});
provide("etuFormItem", etuFormItem);

onMounted(() => {
  // 注册validate事件， 用于UI控件触发校验, 如ti-input控件
  proxy.$sub("etu.form.item.validate", validate);

  // 通过父组件的事件总线，将表单项校验方法传递给父组件
  if (props.prop) {
    etuForm;
    proxy.$pub("etu.form.addField", etuFormItem);
  }
});
</script>

<style scoped lang="scss">
.errors {
  color: red;
  font-size: 12px;
}
</style>

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
import {
  reactive,
  computed,
  ref,
  toRefs,
  provide,
  inject,
  getCurrentInstance,
} from "vue";
import { useNamespace } from "../../hooks";
import { formItemProps } from "./form-item";
import type { FormItemValidateState } from "./form-item";

const bem = useNamespace("form-item");
const props = defineProps(formItemProps);
// @ts-ignore
const { proxy } = getCurrentInstance();

// 接受父组件传递的`formItemEmitter`、`prop`、`model`、`rules`属性和方法
const etuForm: any = inject("etuForm");
// 校验结果
const validateState = ref<FormItemValidateState>();
const validateMessage = ref("校验结果");

let formItemClass = computed(() => {
  return [
    bem.b(),
    bem.is("success", validateState.value == "success"),
    bem.is("error", validateState.value == "error"),
  ];
});
</script>

<style scoped lang="scss">
.errors {
  color: red;
  font-size: 12px;
}
</style>

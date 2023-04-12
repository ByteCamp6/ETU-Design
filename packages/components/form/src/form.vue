<template>
  <form :class="formClass">
    <slot></slot>
  </form>
</template>

<script lang="ts">
export default {
  name: "EtuForm",
};
</script>

<script lang="ts" setup>
import { provide, reactive, toRefs, computed } from "vue";
import { formProps } from "./form";
// import { FormItemContext } from "./form-item";
import { useNamespace } from "@etu-design/hooks";

const props = defineProps(formProps);
const bem = useNamespace("form");

const validate = async (callback?: (valid: boolean, fields?: any) => void) => {
  let errors: any = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (error) {
      errors = {
        ...errors,
        ...(error as any).fields,
      };
    }
  }
  // 没错即成功
  if (Object.keys(errors).length === 0) return callback?.(true);
  else {
    // 有错就失败
    callback?.(false, errors);
    return Promise.reject(errors);
  }
};

const fields: any = [];
const addField = (context) => {
  fields.push(context);
  // console.log(fields);
};

const etuForm = reactive({
  ...toRefs(props),
  addField,
});

let formClass = computed(() => {
  return [bem.b()];
});

// 用于提供可以被后代组件注入的值。
provide("etuForm", etuForm);

defineExpose({
  // 暴露校验方法
  validate,
});
</script>

<!-- 表单校验方法，用来在表单提交前校验，其实就是调用子组件form-item的validate方法。其主要实现步骤：

父组件etu-form中通过事件总线注册一个方法收集所有子组件etu-form-item的validate方法
provide/inject将收集方法传递给子组件
子组件加载完成后，调用收集方法，将自身validate方法保存到父组件中 -->

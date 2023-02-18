<template>
  <form>
    <slot></slot>
  </form>
</template>

<script lang="ts">
export default {
  name: "EtuForm",
};
</script>

<script lang="ts" setup>
import { provide, reactive, toRefs } from "vue";
import { formProps } from "./form";

const props = defineProps(formProps);
const etuForm = reactive({
  ...toRefs(props),
});
const fields: any = reactive([]);

// import mitt from "mitt";
// const emitter = mitt();

const validate = (e) => {
  // 调用子组件form-item的校验方法
  const tasks = fields.map((item) => item.validate());
  Promise.all(tasks)
    .then(() => e(true))
    .catch(() => {
      console.log("catch-false");
      e(false);
    });
};

// 用于提供可以被后代组件注入的值。
provide("etuForm", etuForm);
</script>

<!-- 表单校验方法，用来在表单提交前校验，其实就是调用子组件form-item的validate方法。其主要实现步骤：

父组件etu-form中通过事件总线注册一个方法收集所有子组件etu-form-item的validate方法
provide/inject将收集方法传递给子组件
子组件加载完成后，调用收集方法，将自身validate方法保存到父组件中 -->

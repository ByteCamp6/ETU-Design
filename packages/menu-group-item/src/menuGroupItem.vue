<template>
  <div :class="tClass" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="EtuMenuItem">
import { computed, defineEmits} from "vue";
import { useNamespace } from "@etu-design/hooks";
import {createWebHashHistory, createRouter, RouterView} from "vue-router";

const props = defineProps({
  mode: {
    type: String,
    default: "vertical",
  },
  collapse: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: "inherit",
  },
  textColor: {
    type: String,
    default: "inherit",
  },
  defaultActive: {
    type: String,
    default: "",
  },
  menuTrigger: {
    type: String,
    default: "hover",
  },
  disabled: {
    type: String,
    default: "false",
  },
  route: {
    type: String,
    default: "/",
  },
  component: {
    type: String,
    default: null,
  },
});
const bem = useNamespace("menuItem");
const tClass = computed(() => {
  // el-form-item__content--xxx
  return [
    bem.e(props.disabled),
    bem.bem(props.menuTrigger, props.bgColor, props.textColor),
  ];
});
const emits = defineEmits<{
  (e: "click", v?: any): void; // 函数类型
}>();
function handleClick() {
  emits("click");
  // const router = createRouter({
  //   history: createWebHashHistory(),
  //   routes: [
  //     {
  //       path: String(props.route),
  //       component: props.component,
  //     },
  //   ],
  // });
  // router.push(String(props.route));
}
</script>

<style lang="scss"></style>

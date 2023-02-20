<template>
  <div :class="tClass" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="EtuMenuItem">
import { computed, defineEmits } from "vue";
import { useNamespace } from "@etu-design/hooks";
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
</script>

<style lang="scss"></style>

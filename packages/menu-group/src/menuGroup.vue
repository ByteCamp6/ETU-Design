<template>
  <div :class="tClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="EtuMenuGroup">
import { computed } from "vue";
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
    default: "#ffffff",
  },
  textColor: {
    type: String,
    default: "#303133",
  },
  defaultActive: {
    type: String,
    default: "",
  },
  menuTrigger: {
    type: String,
    default: "hover",
  },
});
const bem = useNamespace("menuGroup");
const tClass = computed(() => {
  // el-form-item__content--xxx
  return [
    bem.e(props.mode),
    bem.bem(props.menuTrigger, props.bgColor, props.textColor),
  ];
});
</script>

<style lang="scss"></style>

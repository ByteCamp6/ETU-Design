<template>
  <etu-overlay v-show="isShow">
    <div :class="tClass">
      <div class="close_Icon" @click="changeIsShow">
        <etu-icon name="close"></etu-icon>
      </div>
      <h1>
        {{ Tittle }}
      </h1>
      <div>
        <slot></slot>
      </div>
    </div>
  </etu-overlay>
</template>

<script setup lang="ts" name="EtuDrawer">
import { useNamespace } from "@etu-design/hooks";
import EtuIcon from "@etu-design/icon";
import EtuOverlay from "@etu-design/overlay";
import { computed, ref, watch } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    size: String,
    default: "normal",
  },
  bgColor: {
    bgColor: String,
    default: "white",
  },
  modelValue: {
    type: [Boolean],
    default: false,
  },
  value: {
    type: [Boolean, String, Number],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  direction: {
    type: String,
    default: "Right",
  },
  name: {
    type: String,
    default: "",
  },
  Tittle: {
    type: String,
    default: "标题",
  },
});
const isShow = ref(props.modelValue);
const Tittle = ref(props.Tittle);
const bem = useNamespace("Drawer");
// el-drawer-white__false--Right
const tClass = computed(() => {
  return [
    bem.b(),
    bem.bem(props.bgColor, String(props.disabled), props.direction),
  ];
});
watch(
  () => props.modelValue,
  () => {
    isShow.value = props.modelValue;
    console.log("isShow is " + isShow.value);
  },
);
function changeIsShow() {
  isShow.value = !isShow.value;
}
</script>

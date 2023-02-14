<template>
  <label :class="tClass">
    <input
      ref="input"
      type="checkbox"
      class="RealCheck"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :checked="checkedValue"
      v-model="demo"
      :value="val"
      @change="handleChange"
      :disabled="state"
    />
    <div class="etu-Switch-inBox"></div>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { useNamespace } from "../../hooks";
const bem = useNamespace("Switch");
import { computed, ref, watch, nextTick } from "vue";

// const emit = defineEmits(switchEmits);
const emits = defineEmits<{
  (e: "change", v: any): void; // 函数类型
  (e: "dataVal", v: any): void;
}>();
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
    default: "dodgerblue",
  },
  modelValue: {
    type: [Boolean, String, Number],
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
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
});
const isControlled = ref(typeof props.modelValue === "boolean");
const state = ref(props.disabled);
watch(
  () => props.modelValue,
  () => {
    isControlled.value = true;
  },
);
watch(
  () => props.value,
  () => {
    isControlled.value = false;
  },
);
const activeValue = ref(props.activeValue);
const inactiveValue = ref(props.inactiveValue);
const tClass = computed(() => {
  return [bem.b(), bem.bem(props.bgColor, String(props.disabled), props.size)];
});
const inClass = computed(() => {
  return [bem.e()];
});
let checkedValue = ref(false);
let demo = ref();
let val = demo;
const handleChange = (): void => {
  const v = checkedValue.value ? props.inactiveValue : props.activeValue;
  emits("change", v);
  emits("dataVal", val.value);
  nextTick(() => {
    checkedValue.value = !checkedValue.value;
  });
};
</script>

<script lang="ts">
export default {
  name: "EtuSwitch",
};
</script>

<style scoped></style>

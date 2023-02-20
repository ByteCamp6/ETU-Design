<template>
  <label :class="tClass">
    <input
      type="checkbox"
      class="RealCheck"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :value="valueBridge"
      @change="handleChange"
      :disabled="isDisabled"
    />
    <div class="etu-Switch-inBox"></div>
    <slot></slot>
  </label>
</template>

<script setup lang="ts" name="EtuSwitch">
import { useDisabled, useNamespace } from "../../hooks";
const bem = useNamespace("Switch");
import { computed, ref } from "vue";
import { isBoolean, isUndefined } from "@etu-design/utils";

// const emit = defineEmits(switchEmits);
const emits = defineEmits<{
  (e: "change", v: any): void; // 函数类型
  (e: "update:modelValue", v: any): void;
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
const innerValue = ref<boolean | string | number>(false);
const valueBridge = computed(() => {
  return isUndefined(props.modelValue) ? props.modelValue : innerValue.value;
});
const isCheck = computed<boolean>(() => {
  if (isBoolean(innerValue.value)) {
    return innerValue.value;
  } else {
    return props.activeValue === innerValue.value;
  }
});
const isDisabled = useDisabled();
const tClass = computed(() => {
  return [
    bem.b(),
    bem.bem(props.bgColor, String(isDisabled.value), props.size),
    bem.is("checked", isCheck.value),
  ];
});
const handleChange = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const checked = target.checked;
  const value = checked
    ? isUndefined(props.activeValue)
      ? checked
      : props.activeValue
    : isUndefined(props.inactiveValue)
    ? checked
    : props.inactiveValue;
  emits("change", value);
  emits("update:modelValue", value);
  innerValue.value = value;
};
</script>

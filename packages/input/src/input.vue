<template>
  <div
    :class="bem.b()"
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
  >
    <!-- 前置插槽 -->
    <div :class="bem.e('prepend')" v-if="slots.prepend">
      <slot name="prepend"></slot>
    </div>

    <input
      ref="inputRef"
      :class="classes"
      :value="inputProps.modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="changeInputVal"
    />
    <!-- 后置插槽 -->
    <div :class="bem.e('append')" v-if="slots.append">
      <slot name="append"></slot>
    </div>
    <!-- 是否可清除 -->
    <div
      @click="clearValue"
      v-if="inputProps.clearable && isClearAbled"
      v-show="isEnter"
      :class="bem.e('suffix')"
    >
      <i class="etu-i-close"></i>
    </div>
    <!-- 是否显示密码 -->
    <div :class="bem.e('suffix')" v-show="isShowEye">
      <etu-icon :name="eyeIcon" @click="changeType"></etu-icon>
    </div>

    <!-- 首尾icon图标 -->
    <div :class="bem.e('prefix')" v-if="isShowPrefixIcon">
      <etu-icon :name="inputProps.prefixIcon" />
    </div>
    <div :class="bem.e('suffix')" v-if="isShowSuffixIcon">
      <etu-icon :name="inputProps.suffixIcon" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuInput",
};
</script>

<script lang="ts" setup>
import { computed, ref, useAttrs } from "vue";
import { useNamespace } from "../../hooks/index";
import { InputProps } from "./input";
import { useSlots } from "vue";
//复合输入框
const slots = useSlots();

const inputProps = defineProps(InputProps);
const inputEmits = defineEmits<InputEmits>();

//清除input value
const isEnter = ref(false);
const isClearAbled = ref(false);
const clearValue = () => {
  inputEmits("update:modelValue", "");
};
// 密码框显示与隐藏
const inputRef = ref();
Promise.resolve().then(() => {
  if (inputProps.showPassword) {
    inputRef.value.type = "password";
  }
});
const eyeIcon = ref("browse");
const isShowEye = computed(() => {
  return (
    inputProps.showPassword && inputProps.modelValue && !inputProps.clearable
  );
});
const changeType = () => {
  if (inputRef.value.type === "password") {
    eyeIcon.value = "hide";
    inputRef.value.type = "text";
    return;
  }
  inputRef.value.type = "password";
  eyeIcon.value = "browse";
};

//组件发送事件类型
type InputEmits = {
  (e: "update:modelValue", value: string): void;
};

const changeInputVal = (event: Event) => {
  (event.target as HTMLInputElement).value
    ? (isClearAbled.value = true)
    : (isClearAbled.value = false);
  inputEmits("update:modelValue", (event.target as HTMLInputElement).value);
};

//带Icon输入框
const isShowSuffixIcon = computed(() => {
  return (
    inputProps.suffixIcon && !inputProps.clearable && !inputProps.showPassword
  );
});
const isShowPrefixIcon = computed(() => {
  return inputProps.prefixIcon;
});

const bem = useNamespace("input");
const classes = computed(() => {
  const { type, size } = inputProps;
  // console.log(classes);
  return [
    bem.e("inner"),
    bem.m(type),
    bem.m(size),
    bem.is("prefix", !!inputProps.prefixIcon),
    bem.is("disabled", inputProps.disabled),
  ];
});
</script>

<template>
  <div
    :class="bemArea.b()"
    v-if="type === 'textarea'"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <textarea
      :class="bemArea.e('inner')"
      v-bind="attrs"
      ref="textareaRef"
      :value="props.modelValue"
      :readonly="props.readonly"
      @input="handleInput"
      @change="handleChange"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
    />
  </div>
  <!-- 输入框 -->
  <div
    v-else
    :class="headClass"
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
      v-bind="attrs"
      :value="props.modelValue"
      :readonly="props.readonly"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :disabled="inputDisabled"
      @input="handleInput"
      @change="handleChange"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
    />
    <!-- 后置插槽 -->
    <div :class="bem.e('append')" v-if="slots.append">
      <slot name="append"></slot>
    </div>
    <!-- 是否可清除 -->
    <div
      @click="clear"
      v-if="isClearable"
      v-show="isEnter"
      :class="bem.e('suffix')"
    >
      <i class="etu-i-close"></i>
    </div>
    <!-- 是否显示密码 -->
    <div :class="bem.e('suffix')" v-show="isPwdVisible">
      <etu-icon :name="eyeIcon" @click="changeType"></etu-icon>
    </div>

    <!-- 首尾icon图标 -->
    <div :class="bem.e('prefix')" v-if="isShowPrefixIcon">
      <etu-icon :name="props.prefixIcon" />
    </div>
    <div :class="bem.e('suffix')" v-if="isShowSuffixIcon">
      <etu-icon :name="props.suffixIcon" />
    </div>
  </div>
</template>

<script lang="ts" setup name="EtuInput">
import { computed, inject, useAttrs, watch } from "vue";
import { useNamespace } from "@etu-design/hooks/index";
import { inputEmits, inputProps } from "./input";
import EtuIcon from "@etu-design/components/icon";
import { useSlots } from "vue";
import { useInput } from "./composables";
import { formItemContextKey } from "../../form/src/form-item";
const attrs = useAttrs();
//复合输入框
const slots = useSlots();

const props = defineProps(inputProps);
defineEmits(inputEmits);

const bem = useNamespace("input");
const bemArea = useNamespace("textarea");

// 获取form表单上下文
const formItemContext: any = inject("form-item");
// 监控value
watch(
  () => props.modelValue,
  () => {
    // console.log(formItemContext);
    formItemContext?.validate("change");
  },
);

const {
  inputRef,
  textareaRef,
  aimRef,
  inputDisabled,
  handleInput,
  handleChange,
  handleCompositionStart,
  handleCompositionEnd,
  isEnter,
  isClearable,
  handleMouseEnter,
  handleMouseLeave,
  clearValue: clear,
  isPwdVisible,
  passwordVisible,
  eyeIcon,
  changeType,
  isShowPrefixIcon,
  isShowSuffixIcon,
} = useInput(props);

const classes = computed(() => {
  const { type, size } = props;
  return [
    bem.e("inner"),
    bem.m(type),
    bem.m(size),
    bem.is("prefix", !!props.prefixIcon),
    bem.is("disabled", inputDisabled.value),
  ];
});

const headClass = computed(() => {
  return [
    bem.b(),
    bem.is("prepend", !!slots.prepend),
    bem.is("append", !!slots.append),
  ];
});

defineExpose({
  inputRef,
  textareaRef,
  aimRef,
  clear,
});
</script>

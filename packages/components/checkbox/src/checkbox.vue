<template>
  <label :class="labelClass">
    <span :class="spanClass">
      <input
        type="checkbox"
        v-model="model"
        :class="ns.e('original')"
        :disabled="isDisabled"
        :value="props.label"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <span :class="ns.e('inner')" />
    </span>
    <span v-if="hasOwnLabel" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ props.label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup name="EtuCheckbox">
import { checkboxProps, checkboxEmits } from "./checkbox.ts";
import { useCheckbox } from "./composables";
import { computed, useSlots } from "vue";
import { useNamespace } from "@etu-design/hooks";

const props = defineProps(checkboxProps);
defineEmits(checkboxEmits);
const slots = useSlots();

const { isChecked, isDisabled, isFocused, hasOwnLabel, model, handleChange } =
  useCheckbox(props, slots);

const ns = useNamespace("checkbox");

const labelClass = computed(() => {
  return [
    ns.b(),
    ns.is("disabled", isDisabled.value),
    ns.is("checked", isChecked.value),
  ];
});

const spanClass = computed(() => {
  return [
    ns.e("input"),
    ns.is("disabled", isDisabled.value),
    ns.is("checked", isChecked.value),
    ns.is("indeterminate", props.indeterminate),
    ns.is("focus", isFocused.value),
  ];
});
</script>

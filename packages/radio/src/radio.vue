<template>
  <label :class="labelClass">
    <span :class="spanClass">
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="ns.e('original')"
        :value="props.label"
        :disabled="disabled"
        type="radio"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
      <span :class="ns.e('inner')" />
    </span>
    <span :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ props.label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: "EtuRadio",
};
</script>

<script lang="ts" setup>
import { useNamespace } from "@etu-design/hooks";
import { computed, nextTick } from "vue";
import { useRadio } from "./use-radio";
import { radioEmits, radioProps } from "./radio.ts";

const ns = useNamespace("radio");

const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);

const { radioRef, focus, size, disabled, modelValue } = useRadio(props);

console.log(disabled.value);

const labelClass = computed(() => {
  return [
    ns.b(),
    ns.is("disabled", disabled.value),
    ns.is("focus", focus.value),
    ns.is("checked", modelValue.value === props.label),
    ns.m(size),
  ];
});

const spanClass = computed(() => {
  return [
    ns.e("input"),
    ns.is("disabled", disabled.value),
    ns.is("checked", modelValue.value === props.label),
  ];
});

function handleChange() {
  nextTick(() => emit("change", modelValue.value));
}
</script>

<template>
  <div :class="ns.b('group')" role="radiogroup">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuRadioGroup",
};
</script>

<script lang="ts" setup>
import { nextTick, provide, toRefs } from "vue";
import { radioGroupKey } from "@etu-design/tokens";
import { radioGroupEmits, radioGroupProps } from "./radio-group.ts";
import type { RadioGroupProps } from "./radio-group.ts";
import { useNamespace } from "@etu-design/hooks";

const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);

const ns = useNamespace("radio");

const changeEvent = (value: RadioGroupProps["modelValue"]) => {
  emit("update:modelValue", value);
  nextTick(() => emit("change", value));
};

// noinspection TypeScriptValidateTypes
provide(radioGroupKey, {
  ...toRefs(props),
  changeEvent,
});
</script>

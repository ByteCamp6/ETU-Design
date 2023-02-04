<template>
  <slot />
</template>

<script setup lang="ts" name="EtuPopperRoot">
import { computed, provide, ref } from "vue";

// console.log(POPPER_INJECTION_KEY, "POPPER_INJECTION_KEY");
import { popperProps } from "./popper";

import type { Instance as PopperInstance } from "@popperjs/core";
import type { ElPopperInjectionContext } from "@etu-design/tokens";
// console.log(@etu-design,"?")
import { POPPER_INJECTION_KEY } from "@etu-design/tokens";

const props = defineProps(popperProps);

const triggerRef = ref<HTMLElement>();
const popperInstanceRef = ref<PopperInstance>();
const contentRef = ref<HTMLElement>();
const referenceRef = ref<HTMLElement>();
const role = computed(() => props.role);

const popperProvides = {
  /**
   * @description trigger element
   */
  triggerRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef,
  /**
   * @description popper content element
   */
  contentRef,
  /**
   * @description popper reference element
   */
  referenceRef,
  /**
   * @description role determines how aria attributes are distributed
   */
  role,
} as ElPopperInjectionContext;

defineExpose(popperProvides);

provide(POPPER_INJECTION_KEY, popperProvides);
</script>

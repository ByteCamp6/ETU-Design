<template>
  <div ref="dialogRef" :class="dialogClass" :style="style">
    <header ref="headerRef" :class="ns.e('header')">
      <slot name="header">
        <span role="heading" :class="ns.e('title')">
          {{ props.title }}
        </span>
      </slot>
      <button
        v-if="props.showClose"
        :class="ns.e('headerbtn')"
        type="button"
        @click="$emit('close')"
      >
        <etu-icon :class="ns.e('close')" :name="props.closeIcon || 'close'">
        </etu-icon>
      </button>
    </header>
    <div :class="ns.e('body')">
      <slot />
    </div>
    <footer v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup name="EtuDialogContent">
import { dialogInjectionKey } from "@etu-design/tokens";
import { computed, inject } from "vue";
import type { ComputedRef } from "vue";
import { dialogContentEmits, dialogContentProps } from "./dialog-content.ts";
import EtuIcon from "@etu-design/icon";
import { useNamespace } from "@etu-design/hooks";
import { useDraggable } from "@etu-design/hooks";

const props = defineProps(dialogContentProps);
defineEmits(dialogContentEmits);
const { dialogRef, headerRef, style } = inject(dialogInjectionKey)!;

const ns = useNamespace("dialog");

const dialogClass = computed(() => {
  return [
    ns.b(),
    ns.is("draggable", props.draggable),
    ns.is("align-center", props.alignCenter),
    { [ns.m("center")]: props.center },
    props.customClass,
  ];
});

const draggable = computed(() => props!.draggable) as ComputedRef<boolean>;
useDraggable(dialogRef, headerRef, draggable);
</script>

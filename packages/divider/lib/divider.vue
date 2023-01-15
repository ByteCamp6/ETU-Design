<template>
  <div :class="[bem.b(),bem.m(props.direction)]" :style="style">
    <span v-if="$slots.default && props.direction !== 'vertical'" :class="[bem.e('text'), bem.is(props.contentPosition)]"><slot/></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuDivider",
};
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '../../hooks'
import { dividerProps } from './divider'
import { isUndefined } from '../../utils'
import type {CSSProperties} from 'vue'

const props = defineProps(dividerProps);
const bem = useNamespace('divider');

const style = computed<CSSProperties>(() => {
  return {
    "--border-style": isUndefined(props.borderStyle) ? 'solid' : props.borderStyle,
  }
})
</script>

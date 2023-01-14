<template>
  <button :class="bem.b()">
    按钮：
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "EtuButton",
};
</script>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useNamespace } from '../../hooks'

const bem = useNamespace("button");
</script>

<template>
  <button :class="bem.b()">
    按钮：
    <slot></slot>
  </button>
</template>


<script setup lang="ts" name="EtuButton">
import { useNamespace } from "../../hooks";

const bem = useNamespace("button");
</script>

<template>
  <button>
    按钮：
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default {
  name: "EtuButton",
};
</script>

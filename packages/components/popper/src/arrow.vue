<template>
  <div :class="ns.e('arrow')" data-popper-arrow=""></div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@etu-design/hooks";

const ns = useNamespace("popper");
</script>

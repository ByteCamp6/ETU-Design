<template>
  <etu-tree :options="treeOptions"></etu-tree>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const inpVal = ref("");
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      checked: false,
      children: [
        {
          label: "一级-1",
          checked: false,
        },
        {
          label: "一级-2",
          checked: false,
          children: [
            {
              label: "一级-2-1",
              checked: false,
            },
            {
              label: "一级-2-2",
              checked: false,
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
</script>

<style scoped></style>

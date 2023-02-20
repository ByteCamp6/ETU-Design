<template>
  <div style="height: 165px">
    <etu-select v-model="value" placeholder="please select a option">
      <etu-option
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        :value="item.value"
      ></etu-option>
    </etu-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
i

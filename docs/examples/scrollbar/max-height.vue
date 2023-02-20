<template>
  <etu-button @click="add">Add Item</etu-button>
  <etu-button @click="onDelete">Delete Item</etu-button>
  <etu-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </etu-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--etu-color-primary-light-9);
  color: var(--etu-color-primary);
}
</style>

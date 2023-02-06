<template>
  <etu-pagination
    layout="prev, pager, next, total, sizes, jumper"
    :total="1000"
    :disabled="isDisabled"
    v-model:page-size="pageSize"
    v-model:currentPage="currentPage"
  ></etu-pagination>
  <etu-button @click="isDisabled = !isDisabled">禁用</etu-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentPage = ref(1);
const isDisabled = ref(false);
const pageSize = ref(10);
</script>

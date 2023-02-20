<template>
  <etu-upload
    ref="uploadRef"
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    name="files"
    multiple
  >
    <etu-button type="primary">点击上传</etu-button>
  </etu-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const fileList = ref([
  {
    name: "test1.svg",
    url: "https://test/test1.svg",
  },
  {
    name: "test2.svg",
    url: "https://test/test2.svg",
  },
]);
</script>

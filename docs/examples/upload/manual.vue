<template>
  <etu-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <etu-button type="primary">选择文件</etu-button>
    </template>

    <etu-button class="ml-3" type="success" @click="submitUpload">
      点击上传
    </etu-button>
  </etu-upload>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const uploadRef = ref();

const submitUpload = () => {
  uploadRef.value!.submit();
};
</script>

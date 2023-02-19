<template>
  <div>
    <etu-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      name="files"
      :auto-upload="true"
      drag
      multiple
      accept="image/png, image/jpeg"
    >
      <template #tip>
        <div>格式要求：png/jpg</div>
      </template>
    </etu-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const fileList = ref();
</script>

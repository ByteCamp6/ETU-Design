<template>
  <div style="width: 500px; height: 500px">
    <etu-upload
      ref="uploadRef"
      v-model:file-list="fileList"
      class="upload-demo"
      action="http://127.0.0.1:8000/uploadfiles/"
      name="files"
      :auto-upload="false"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed"
      :before-upload="beforeAvatarUpload"
    >
      <template #trigger>
        <etu-button type="primary">上传文件</etu-button>
      </template>
      <etu-button type="success" @click="submitUpload">
        upload to server
      </etu-button>
      <template #tip>
        <div>格式要求：</div>
      </template>
    </etu-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import EtuMessage from "@etu-design/message";

const fileList = ref([
  {
    name: "element-plus-logo.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
  {
    name: "element-plus-logo2.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
]);

const uploadRef = ref();

const submitUpload = () => {
  uploadRef.value!.submit();
};

const handleRemove = () => {
  console.log("handleRemove");
};

const handlePreview = () => {
  console.log("handlePreview");
};

const beforeRemove = () => {
  console.log("beforeRemove");
};

const handleExceed = () => {
  console.log("handleExceed");
};
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  console.log(rawFile);
  if (rawFile.type !== "image/jpeg") {
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    EtuMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};
</script>

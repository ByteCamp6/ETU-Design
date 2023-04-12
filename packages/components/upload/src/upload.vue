<template>
  <div>
    <upload-content
      v-if="!isPictureCard || (isPictureCard && !props.showFileList)"
      ref="uploadRef"
      v-bind="uploadContentProps"
    >
      <slot v-if="slots.trigger" name="trigger" />
      <slot v-if="!slots.trigger && slots.default" />
    </upload-content>

    <!--  如果有trigger插槽，那么default就放在这里和tip一起，否则default插槽将代替trigger插槽  -->
    <slot v-if="slots.trigger" />
    <slot name="tip" />

    <upload-list
      v-if="!isPictureCard && props.showFileList"
      :disabled="disabled"
      :list-type="props.listType"
      :files="uploadFiles"
      :handle-preview="props.onPreview"
      @remove="handleRemove"
    >
      <template v-if="slots.file" #default="{ file }">
        <slot name="file" :file="file" />
      </template>
    </upload-list>
  </div>
</template>

<script lang="ts" setup name="EtuUpload">
import UploadList from "./upload-list.vue";
import UploadContent from "./upload-content.vue";
import { uploadProps } from "./upload.ts";
import { computed, shallowRef, useSlots } from "vue";
import { useDisabled } from "@etu-design/hooks";
import { useUpload } from "./use-upload";
import type {
  UploadContentInstance,
  UploadContentProps,
} from "./upload-content.ts";

const props = defineProps(uploadProps);

const slots = useSlots();
const disabled = useDisabled();

const isPictureCard = computed(() => props.listType === "picture-card");
const uploadRef = shallowRef<UploadContentInstance>();

const {
  abort,
  submit,
  clearFiles,
  uploadFiles,
  handleStart,
  handleError,
  handleRemove,
  handleSuccess,
  handleProgress,
} = useUpload(props, uploadRef);

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  fileList: uploadFiles.value,
  onStart: handleStart,
  onProgress: handleProgress,
  onSuccess: handleSuccess,
  onError: handleError,
  onRemove: handleRemove,
}));

defineExpose({
  /** @description cancel upload request */
  abort,
  /** @description upload the file list manually */
  submit,
  /** @description clear the file list  */
  clearFiles,
  /** @description select the file manually */
  handleStart,
  /** @description remove the file manually */
  handleRemove,
});
</script>

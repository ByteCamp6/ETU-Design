<template>
  <div :class="classes" @click="handleClick">
    <template v-if="props.drag">
<!--      <upload-dragger :disabled="disabled" @file="uploadFiles">-->
<!--        <slot />-->
<!--      </upload-dragger>-->
    </template>
    <template v-else>
      <slot />
    </template>
    <input
      ref="inputRef"
      :class="ns.e('input')"
      :name="name"
      :multiple="props.multiple"
      :accept="props.accept"
      type="file"
      @change="handleChange"
      @click.stop
    />
  </div>
</template>

<script lang="ts" setup name="EtuUploadContent">
import { useNamespace } from "@etu-design/hooks";
import { uploadContentProps } from "./upload-content.ts";
import { computed } from "vue";
import { useUploadContent } from "./use-upload-content";

const props = defineProps(uploadContentProps);
const ns = useNamespace("upload");

const {
  inputRef,
  disabled,
  handleClick,
  handleChange,
  uploadFiles,
  upload,
  abort,
} = useUploadContent(props);

const classes = computed(() => {
  return [ns.b(), ns.m(props.listType), ns.is("drag", props.drag)];
});

defineExpose({
  abort,
  upload,
});
</script>

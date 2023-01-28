<template>
  <div
    :class="[ns.b('dragger'), ns.is('dragover', dragover)]"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="dragover = false"
  >
    <slot>
      <etu-icon :class="ns.e('icon-upload')" name="upload"></etu-icon>
      <div :class="ns.e('text')">Drop file here or click to upload</div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { useDisabled, useNamespace } from "@etu-design/hooks";
import { ref } from "vue";
import { uploadDraggerEmits, uploadDraggerProps } from "./upload-dragger.ts";
import EtuIcon from "@etu-design/icon";

const props = defineProps(uploadDraggerProps);
const emit = defineEmits(uploadDraggerEmits);

const ns = useNamespace("upload");
const dragover = ref(false);
const disabled = useDisabled();

/**
 * @description 通过拖拽事件获取上传的文件，并对文件格式进行检验
 */
const onDrop = (e: DragEvent) => {
  console.log(2);
  if (disabled.value) return;
  dragover.value = false;

  const files = Array.from(e.dataTransfer!.files);
  const { accept } = props;
  if (!accept) {
    emit("file", files);
    return;
  }

  /**
   * @description 对file格式进行检验，筛选出检验通过的文件（只会抄，怎么检验完全不会捏）
   */
  const filesFiltered = files.filter((file) => {
    const { type, name } = file;
    const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
    const baseType = type.replace(/\/.*$/, "");
    return accept
      .split(",")
      .map((type) => type.trim())
      .filter((type) => type)
      .some((acceptedType) => {
        if (acceptedType.startsWith(".")) {
          return extension === acceptedType;
        }
        if (/\/\*$/.test(acceptedType)) {
          return baseType === acceptedType.replace(/\/\*$/, "");
        }
        if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
          return type === acceptedType;
        }
        return false;
      });
  });

  emit("file", filesFiltered);
};

/**
 * @description 正在拖拽
 */
const onDragover = () => {
  if (!disabled.value) dragover.value = true;
};
</script>

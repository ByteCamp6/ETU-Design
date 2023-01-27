<template>
  <transition-group tag="ul" :class="ulClass" :name="ns.b()">
    <li
      v-for="file in props.files"
      :key="file.uid || file.name"
      :class="[ns.be('list', 'item'), ns.is(file.status)]"
    >
      <slot :file="file">
        <div :class="ns.be('list', 'item-info')">
          <div
            :class="ns.be('list', 'item-name')"
            @click.prevent="props.handlePreview(file)"
          >
            <etu-icon name="file"></etu-icon>
            <span :class="ns.be('list', 'item-file-name')">
              {{ file.name }}
            </span>
          </div>
        </div>
        <label :class="ns.be('list', 'item-status-label')">
          <etu-icon
            name="success"
            :class="ns.be('list', 'item-status-icon-success')"
          ></etu-icon>
          <etu-icon
            v-if="!disabled"
            name="close"
            :class="ns.be('list', 'item-status-icon-close')"
            @click="handleRemove(file)"
          >
          </etu-icon>
        </label>
      </slot>
    </li>
  </transition-group>
  <slot name="append" />
</template>

<script lang="ts" setup name="EtuUploadList">
import { useDisabled, useNamespace } from "@etu-design/hooks";
import { computed } from "vue";
import EtuIcon from "@etu-design/icon";
import { uploadListEmits, uploadListProps } from "./upload-list.ts";
import type { UploadFile } from "./upload.ts";

const props = defineProps(uploadListProps);
const emit = defineEmits(uploadListEmits);

const ns = useNamespace("upload");
const disabled = useDisabled();

const ulClass = computed(() => {
  return [
    ns.b("list"),
    ns.bm("list", props.listType),
    ns.is("disabled", props.disabled),
  ];
});

const handleRemove = (file: UploadFile) => {
  emit("remove", file);
};
</script>

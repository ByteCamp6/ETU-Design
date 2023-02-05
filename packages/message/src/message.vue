<template>
  <transition
    :name="ns.b('fade')"
    @before-leave="props.onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="props.id"
      ref="messageRef"
      :class="classes"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <etu-icon
        v-if="iconComponent"
        :name="iconComponent"
        :class="iconClass"
      ></etu-icon>
      <slot>
        <p :class="ns.e('content')">{{ props.message }}</p>
      </slot>
      <etu-icon
        v-if="props.showClose"
        name="close-bold"
        :class="ns.e('closeBtn')"
        @click.stop="close"
      ></etu-icon>
    </div>
  </transition>
</template>

<script lang="ts" setup name="EtuMessage">
import { messageEmits, messageProps } from "./message.ts";
import EtuIcon from "@etu-design/icon";
import { useNamespace } from "@etu-design/hooks";
import { useMessage } from "./composables";
import { computed } from "vue";

const props = defineProps(messageProps);
defineEmits(messageEmits);

const ns = useNamespace("message");

const {
  messageRef,
  bottom,
  visible,
  customStyle,
  startTimer,
  clearTimer,
  close,
  iconComponent,
} = useMessage(props);

const classes = computed(() => {
  return [ns.b(), ns.m(props.type), ns.is("closable", props.showClose)];
});

const iconClass = computed(() => {
  return [ns.e("icon"), ns.bm("icon", props.type)];
});

defineExpose({
  visible,
  bottom,
  close,
});
</script>

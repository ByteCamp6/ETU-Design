<template>
  <teleport to="body">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <etu-overlay v-show="visible" maskEvent :z-index="zIndex">
        <div
          role="dialog"
          :class="'etu-overlay-dialog'"
          :style="overlayDialogStyle"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <etu-dialog-content
            v-if="rendered"
            ref="dialogContentRef"
            v-bind="$attrs"
            :custom-class="props.customClass"
            :center="props.center"
            :align-center="props.alignCenter"
            :close-icon="props.closeIcon"
            :draggable="draggable"
            :show-close="props.showClose"
            :title="props.title"
            @close="handleClose"
          >
            <template #header>
              <slot
                v-if="!$slots.title"
                name="header"
                :close="handleClose"
                :title-class="ns.e('title')"
              />
              <slot v-else name="title" />
            </template>
            <slot />
            <template v-if="$slots.footer" #footer>
              <slot name="footer" />
            </template>
          </etu-dialog-content>
        </div>
      </etu-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup name="EtuDialog">
import { dialogEmits, dialogProps } from "./dialog.ts";
import { computed, provide, ref } from "vue";
import { useNamespace, useSameTarget } from "@etu-design/hooks";
import { useDialog } from "./use-dialog";
import EtuOverlay from "@etu-design/overlay";
import EtuDialogContent from "./dialog-content.vue";
import { dialogInjectionKey } from "@etu-design/tokens";

const props = defineProps(dialogProps);
defineEmits(dialogEmits);

const ns = useNamespace("dialog");
const dialogRef = ref<HTMLElement>();
const headerRef = ref<HTMLElement>();
const dialogContentRef = ref();

const {
  visible,
  style,
  overlayDialogStyle,
  rendered,
  zIndex,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
  onModalClick,
} = useDialog(props, dialogRef);

const draggable = computed(() => props.draggable);
provide(dialogInjectionKey, {
  dialogRef,
  headerRef,
  rendered,
  style,
});

const overlayEvent = useSameTarget(onModalClick);

defineExpose({
  visible,
  dialogContentRef,
});
</script>

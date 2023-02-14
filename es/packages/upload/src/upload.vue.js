import { defineComponent, useSlots, computed, shallowRef, openBlock, createElementBlock, unref, createBlock, mergeProps, withCtx, renderSlot, createCommentVNode, createSlots } from "vue";
import _sfc_main$2 from "./upload-list.vue.js";
import _sfc_main$1 from "./upload-content.vue.js";
import { uploadProps } from "./upload.js";
import { useDisabled } from "../../hooks/use-common-props/index.js";
import "../../hooks/use-z-index/index.js";
import { useUpload } from "./use-upload.js";
const __default__ = defineComponent({
  name: "EtuUpload"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    const disabled = useDisabled();
    const isPictureCard = computed(() => props.listType === "picture-card");
    const uploadRef = shallowRef();
    const {
      abort,
      submit,
      clearFiles,
      uploadFiles,
      handleStart,
      handleError,
      handleRemove,
      handleSuccess,
      handleProgress
    } = useUpload(props, uploadRef);
    const uploadContentProps = computed(() => ({
      ...props,
      fileList: uploadFiles.value,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    expose({
      /** @description cancel upload request */
      abort,
      /** @description upload the file list manually */
      submit,
      /** @description clear the file list  */
      clearFiles,
      /** @description select the file manually */
      handleStart,
      /** @description remove the file manually */
      handleRemove
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        !unref(isPictureCard) || unref(isPictureCard) && !props.showFileList ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
          key: 0,
          ref_key: "uploadRef",
          ref: uploadRef
        }, unref(uploadContentProps)), {
          default: withCtx(() => [
            unref(slots).trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
            !unref(slots).trigger && unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16)) : createCommentVNode("", true),
        unref(slots).trigger ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "tip"),
        !unref(isPictureCard) && props.showFileList ? (openBlock(), createBlock(_sfc_main$2, {
          key: 2,
          disabled: unref(disabled),
          "list-type": props.listType,
          files: unref(uploadFiles),
          "handle-preview": props.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({ _: 2 }, [
          unref(slots).file ? {
            name: "default",
            fn: withCtx(({ file }) => [
              renderSlot(_ctx.$slots, "file", { file })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};

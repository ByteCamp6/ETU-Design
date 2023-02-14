"use strict";
const vue = require("vue");
const uploadList_vue_vue_type_script_setup_true_name_EtuUploadList_lang = require("./upload-list.vue.js");
const uploadContent_vue_vue_type_script_setup_true_name_EtuUploadContent_lang = require("./upload-content.vue.js");
const upload = require("./upload.js");
const index = require("../../hooks/use-common-props/index.js");
require("../../hooks/use-z-index/index.js");
const useUpload = require("./use-upload.js");
const __default__ = vue.defineComponent({
  name: "EtuUpload"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: upload.uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = vue.useSlots();
    const disabled = index.useDisabled();
    const isPictureCard = vue.computed(() => props.listType === "picture-card");
    const uploadRef = vue.shallowRef();
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
    } = useUpload.useUpload(props, uploadRef);
    const uploadContentProps = vue.computed(() => ({
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
      return vue.openBlock(), vue.createElementBlock("div", null, [
        !vue.unref(isPictureCard) || vue.unref(isPictureCard) && !props.showFileList ? (vue.openBlock(), vue.createBlock(uploadContent_vue_vue_type_script_setup_true_name_EtuUploadContent_lang, vue.mergeProps({
          key: 0,
          ref_key: "uploadRef",
          ref: uploadRef
        }, vue.unref(uploadContentProps)), {
          default: vue.withCtx(() => [
            vue.unref(slots).trigger ? vue.renderSlot(_ctx.$slots, "trigger", { key: 0 }) : vue.createCommentVNode("", true),
            !vue.unref(slots).trigger && vue.unref(slots).default ? vue.renderSlot(_ctx.$slots, "default", { key: 1 }) : vue.createCommentVNode("", true)
          ]),
          _: 3
        }, 16)) : vue.createCommentVNode("", true),
        vue.unref(slots).trigger ? vue.renderSlot(_ctx.$slots, "default", { key: 1 }) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "tip"),
        !vue.unref(isPictureCard) && props.showFileList ? (vue.openBlock(), vue.createBlock(uploadList_vue_vue_type_script_setup_true_name_EtuUploadList_lang, {
          key: 2,
          disabled: vue.unref(disabled),
          "list-type": props.listType,
          files: vue.unref(uploadFiles),
          "handle-preview": props.onPreview,
          onRemove: vue.unref(handleRemove)
        }, vue.createSlots({ _: 2 }, [
          vue.unref(slots).file ? {
            name: "default",
            fn: vue.withCtx(({ file }) => [
              vue.renderSlot(_ctx.$slots, "file", { file })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : vue.createCommentVNode("", true)
      ]);
    };
  }
});
module.exports = _sfc_main;

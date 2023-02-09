"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const uploadContent = require("./upload-content.js");
const useUploadContent = require("./use-upload-content.js");
const uploadDragger_vue_vue_type_script_setup_true_lang = require("./upload-dragger.vue.js");
const _hoisted_1 = ["name", "multiple", "accept"];
const __default__ = vue.defineComponent({
  name: "EtuUploadContent"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: uploadContent.uploadContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = index.useNamespace("upload");
    const {
      inputRef,
      disabled,
      handleClick,
      handleChange,
      uploadFiles,
      upload,
      abort
    } = useUploadContent.useUploadContent(props);
    const classes = vue.computed(() => {
      return [ns.b(), ns.m(props.listType), ns.is("drag", props.drag)];
    });
    expose({
      abort,
      upload
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(classes)),
        onClick: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => vue.unref(handleClick) && vue.unref(handleClick)(...args))
      }, [
        props.drag ? (vue.openBlock(), vue.createBlock(uploadDragger_vue_vue_type_script_setup_true_lang, {
          key: 0,
          disabled: vue.unref(disabled),
          onFile: vue.unref(uploadFiles)
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["disabled", "onFile"])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }),
        vue.createElementVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          class: vue.normalizeClass(vue.unref(ns).e("input")),
          name: _ctx.name,
          multiple: props.multiple,
          accept: props.accept,
          type: "file",
          onChange: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => vue.unref(handleChange) && vue.unref(handleChange)(...args)),
          onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1)
      ], 2);
    };
  }
});
module.exports = _sfc_main;

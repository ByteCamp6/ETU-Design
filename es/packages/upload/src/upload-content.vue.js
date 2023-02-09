import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, withCtx, renderSlot, createElementVNode, withModifiers } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { uploadContentProps } from "./upload-content.js";
import { useUploadContent } from "./use-upload-content.js";
import _sfc_main$1 from "./upload-dragger.vue.js";
const _hoisted_1 = ["name", "multiple", "accept"];
const __default__ = defineComponent({
  name: "EtuUploadContent"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("upload");
    const {
      inputRef,
      disabled,
      handleClick,
      handleChange,
      uploadFiles,
      upload,
      abort
    } = useUploadContent(props);
    const classes = computed(() => {
      return [ns.b(), ns.m(props.listType), ns.is("drag", props.drag)];
    });
    expose({
      abort,
      upload
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes)),
        onClick: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(handleClick) && unref(handleClick)(...args))
      }, [
        props.drag ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          disabled: unref(disabled),
          onFile: unref(uploadFiles)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["disabled", "onFile"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
        createElementVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          class: normalizeClass(unref(ns).e("input")),
          name: _ctx.name,
          multiple: props.multiple,
          accept: props.accept,
          type: "file",
          onChange: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};

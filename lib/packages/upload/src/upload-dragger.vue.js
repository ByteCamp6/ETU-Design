"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
const index$1 = require("../../hooks/use-common-props/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const uploadDragger = require("./upload-dragger.js");
require("../../icon/index.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../icon/src/icon.vue.js");
const _hoisted_1 = ["onDrop", "onDragover"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "upload-dragger",
  props: uploadDragger.uploadDraggerProps,
  emits: uploadDragger.uploadDraggerEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("upload");
    const dragover = vue.ref(false);
    const disabled = index$1.useDisabled();
    const onDrop = (e) => {
      if (disabled.value)
        return;
      dragover.value = false;
      const files = Array.from(e.dataTransfer.files);
      const { accept } = props;
      if (!accept) {
        emit("file", files);
        return;
      }
      const filesFiltered = files.filter((file) => {
        const { type, name } = file;
        const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
        const baseType = type.replace(/\/.*$/, "");
        return accept.split(",").map((type2) => type2.trim()).filter((type2) => type2).some((acceptedType) => {
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
    const onDragover = () => {
      if (!disabled.value)
        dragover.value = true;
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ns).b("dragger"), vue.unref(ns).is("dragover", dragover.value)]),
        onDrop: vue.withModifiers(onDrop, ["prevent"]),
        onDragover: vue.withModifiers(onDragover, ["prevent"]),
        onDragleave: _cache[0] || (_cache[0] = vue.withModifiers(($event) => dragover.value = false, ["prevent"]))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
            class: vue.normalizeClass(vue.unref(ns).e("icon-upload")),
            name: "upload"
          }, null, 8, ["class"]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("text"))
          }, "Drop file here or click to upload", 2)
        ])
      ], 42, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;

"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
const index$1 = require("../../hooks/use-common-props/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
require("../../icon/index.js");
require("../../progress/index.js");
const uploadList = require("./upload-list.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../icon/src/icon.vue.js");
const progress_vue_vue_type_script_setup_true_lang = require("../../progress/src/progress.vue.js");
const _hoisted_1 = ["onClick"];
const __default__ = vue.defineComponent({
  name: "EtuUploadList"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: uploadList.uploadListProps,
  emits: uploadList.uploadListEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("upload");
    const disabled = index$1.useDisabled();
    const ulClass = vue.computed(() => {
      return [
        ns.b("list"),
        ns.bm("list", props.listType),
        ns.is("disabled", props.disabled)
      ];
    });
    const handleRemove = (file) => {
      emit("remove", file);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createVNode(vue.TransitionGroup, {
          tag: "ul",
          class: vue.normalizeClass(vue.unref(ulClass)),
          name: vue.unref(ns).b()
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.files, (file) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                key: file.uid || file.name,
                class: vue.normalizeClass([vue.unref(ns).be("list", "item"), vue.unref(ns).is(file.status)])
              }, [
                vue.renderSlot(_ctx.$slots, "default", { file }, () => [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass(vue.unref(ns).be("list", "item-info"))
                  }, [
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(vue.unref(ns).be("list", "item-name")),
                      onClick: vue.withModifiers(($event) => props.handlePreview(file), ["prevent"])
                    }, [
                      vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), { name: "file" }),
                      vue.createElementVNode("span", {
                        class: vue.normalizeClass(vue.unref(ns).be("list", "item-file-name"))
                      }, vue.toDisplayString(file.name), 3)
                    ], 10, _hoisted_1),
                    file.status === "uploading" ? (vue.openBlock(), vue.createBlock(vue.unref(progress_vue_vue_type_script_setup_true_lang), {
                      key: 0,
                      percentage: Number(file.percentage)
                    }, null, 8, ["percentage"])) : vue.createCommentVNode("", true)
                  ], 2),
                  vue.createElementVNode("label", {
                    class: vue.normalizeClass(vue.unref(ns).be("list", "item-status-label"))
                  }, [
                    vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
                      name: "success",
                      class: vue.normalizeClass(vue.unref(ns).be("list", "item-status-icon-success"))
                    }, null, 8, ["class"]),
                    !vue.unref(disabled) ? (vue.openBlock(), vue.createBlock(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
                      key: 0,
                      name: "close",
                      class: vue.normalizeClass(vue.unref(ns).be("list", "item-status-icon-close")),
                      onClick: ($event) => handleRemove(file)
                    }, null, 8, ["class", "onClick"])) : vue.createCommentVNode("", true)
                  ], 2)
                ])
              ], 2);
            }), 128))
          ]),
          _: 3
        }, 8, ["class", "name"]),
        vue.renderSlot(_ctx.$slots, "append")
      ], 64);
    };
  }
});
module.exports = _sfc_main;

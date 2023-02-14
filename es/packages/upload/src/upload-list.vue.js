import { defineComponent, computed, openBlock, createElementBlock, Fragment, createVNode, TransitionGroup, normalizeClass, unref, withCtx, renderList, renderSlot, createElementVNode, withModifiers, toDisplayString, createBlock, createCommentVNode } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import { useDisabled } from "../../hooks/use-common-props/index.js";
import "../../hooks/use-z-index/index.js";
import "../../icon/index.js";
import "../../progress/index.js";
import { uploadListProps, uploadListEmits } from "./upload-list.js";
import _sfc_main$1 from "../../icon/src/icon.vue.js";
import _sfc_main$2 from "../../progress/src/progress.vue.js";
const _hoisted_1 = ["onClick"];
const __default__ = defineComponent({
  name: "EtuUploadList"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadListProps,
  emits: uploadListEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("upload");
    const disabled = useDisabled();
    const ulClass = computed(() => {
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
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(TransitionGroup, {
          tag: "ul",
          class: normalizeClass(unref(ulClass)),
          name: unref(ns).b()
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.files, (file) => {
              return openBlock(), createElementBlock("li", {
                key: file.uid || file.name,
                class: normalizeClass([unref(ns).be("list", "item"), unref(ns).is(file.status)])
              }, [
                renderSlot(_ctx.$slots, "default", { file }, () => [
                  createElementVNode("div", {
                    class: normalizeClass(unref(ns).be("list", "item-info"))
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass(unref(ns).be("list", "item-name")),
                      onClick: withModifiers(($event) => props.handlePreview(file), ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$1), { name: "file" }),
                      createElementVNode("span", {
                        class: normalizeClass(unref(ns).be("list", "item-file-name"))
                      }, toDisplayString(file.name), 3)
                    ], 10, _hoisted_1),
                    file.status === "uploading" ? (openBlock(), createBlock(unref(_sfc_main$2), {
                      key: 0,
                      percentage: Number(file.percentage)
                    }, null, 8, ["percentage"])) : createCommentVNode("", true)
                  ], 2),
                  createElementVNode("label", {
                    class: normalizeClass(unref(ns).be("list", "item-status-label"))
                  }, [
                    createVNode(unref(_sfc_main$1), {
                      name: "success",
                      class: normalizeClass(unref(ns).be("list", "item-status-icon-success"))
                    }, null, 8, ["class"]),
                    !unref(disabled) ? (openBlock(), createBlock(unref(_sfc_main$1), {
                      key: 0,
                      name: "close",
                      class: normalizeClass(unref(ns).be("list", "item-status-icon-close")),
                      onClick: ($event) => handleRemove(file)
                    }, null, 8, ["class", "onClick"])) : createCommentVNode("", true)
                  ], 2)
                ])
              ], 2);
            }), 128))
          ]),
          _: 3
        }, 8, ["class", "name"]),
        renderSlot(_ctx.$slots, "append")
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};

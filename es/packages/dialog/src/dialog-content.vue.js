import {
  defineComponent,
  inject,
  computed,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  normalizeStyle,
  createElementVNode,
  renderSlot,
  toDisplayString,
  createVNode,
  createCommentVNode,
} from "vue";
import { dialogInjectionKey } from "../../tokens/dialog.js";
import { dialogContentProps, dialogContentEmits } from "./dialog-content.js";
import "../../icon/index.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { useDraggable } from "../../hooks/use-draggable/index.js";
import _sfc_main$1 from "../../icon/src/icon.vue.js";
const __default__ = defineComponent({
  name: "EtuDialogContent",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { dialogRef, headerRef, style } = inject(dialogInjectionKey);
    const ns = useNamespace("dialog");
    const dialogClass = computed(() => {
      return [
        ns.b(),
        ns.is("draggable", props.draggable),
        ns.is("align-center", props.alignCenter),
        { [ns.m("center")]: props.center },
        props.customClass,
      ];
    });
    const draggable = computed(() => props.draggable);
    useDraggable(dialogRef, headerRef, draggable);
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            ref_key: "dialogRef",
            ref: dialogRef,
            class: normalizeClass(unref(dialogClass)),
            style: normalizeStyle(unref(style)),
          },
          [
            createElementVNode(
              "header",
              {
                ref_key: "headerRef",
                ref: headerRef,
                class: normalizeClass(unref(ns).e("header")),
              },
              [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createElementVNode(
                    "span",
                    {
                      role: "heading",
                      class: normalizeClass(unref(ns).e("title")),
                    },
                    toDisplayString(props.title),
                    3,
                  ),
                ]),
                props.showClose
                  ? (openBlock(),
                    createElementBlock(
                      "button",
                      {
                        key: 0,
                        class: normalizeClass(unref(ns).e("headerbtn")),
                        type: "button",
                        onClick:
                          _cache[0] ||
                          (_cache[0] = ($event) => _ctx.$emit("close")),
                      },
                      [
                        createVNode(
                          unref(_sfc_main$1),
                          {
                            class: normalizeClass(unref(ns).e("close")),
                            name: props.closeIcon || "close",
                          },
                          null,
                          8,
                          ["class", "name"],
                        ),
                      ],
                      2,
                    ))
                  : createCommentVNode("", true),
              ],
              2,
            ),
            createElementVNode(
              "div",
              {
                class: normalizeClass(unref(ns).e("body")),
              },
              [renderSlot(_ctx.$slots, "default")],
              2,
            ),
            _ctx.$slots.footer
              ? (openBlock(),
                createElementBlock(
                  "footer",
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).e("footer")),
                  },
                  [renderSlot(_ctx.$slots, "footer")],
                  2,
                ))
              : createCommentVNode("", true),
          ],
          6,
        )
      );
    };
  },
});
export { _sfc_main as default };

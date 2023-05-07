import {
  defineComponent,
  computed,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  createElementVNode,
  renderSlot,
  normalizeStyle,
  toDisplayString,
  createCommentVNode,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { emptyProps } from "./empty.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 2,
  x: "1674394526690",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "10441",
  width: "200",
  height: "200",
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M839.2 101.3H184.9L65.3 539.5 64 922.7h896V549.3l-120.8-448zM241.9 176h540.3L884 549.3H678.7l-74.7 112H420l-74.7-112H140.1L241.9 176z",
    "p-id": "10442",
  },
  null,
  -1,
);
const _hoisted_4 = [_hoisted_3];
const _hoisted_5 = { key: 1 };
const __default__ = defineComponent({
  name: "EtuEmpty",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: emptyProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("empty");
    const imageStyle = computed(() => ({
      width: props.imageSize ? `${props.imageSize}px` : "",
    }));
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(ns).b()),
          },
          [
            createElementVNode(
              "div",
              {
                class: normalizeClass(unref(ns).e("image")),
              },
              [
                _ctx.$slots.image
                  ? renderSlot(_ctx.$slots, "image", { key: 0 })
                  : props.image
                  ? (openBlock(),
                    createElementBlock(
                      "img",
                      {
                        key: 1,
                        src: props.image,
                        style: normalizeStyle(unref(imageStyle)),
                      },
                      null,
                      12,
                      _hoisted_1,
                    ))
                  : (openBlock(),
                    createElementBlock("svg", _hoisted_2, _hoisted_4)),
              ],
              2,
            ),
            createElementVNode(
              "div",
              {
                class: normalizeClass(unref(ns).e("description")),
              },
              [
                _ctx.$slots.description
                  ? renderSlot(_ctx.$slots, "description", { key: 0 })
                  : (openBlock(),
                    createElementBlock(
                      "p",
                      _hoisted_5,
                      toDisplayString(props.description),
                      1,
                    )),
              ],
              2,
            ),
            _ctx.$slots.default
              ? (openBlock(),
                createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).e("bottom")),
                  },
                  [renderSlot(_ctx.$slots, "default")],
                  2,
                ))
              : createCommentVNode("", true),
          ],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };

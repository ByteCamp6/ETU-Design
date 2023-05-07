"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const progress = require("./progress.js");
const __default__ = {
  name: "EtuProgress",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: progress.progressProps,
  setup(__props) {
    const props = __props;
    const progressBarOuterStyle = vue.computed(() => {
      return { height: props.strokeWidth + "px" };
    });
    const progressBarInnerStyle = vue.computed(() => {
      return {
        width: props.percentage + "%",
        height: props.strokeWidth + "px",
      };
    });
    const ns = index.useNamespace("progress");
    return (_ctx, _cache) => {
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return (
        vue.openBlock(),
        vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass([
                  vue.unref(ns).b(),
                  vue.unref(ns).m(props.status),
                ]),
              },
              [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(ns).b("bar")),
                  },
                  [
                    vue.createElementVNode(
                      "div",
                      {
                        class: vue.normalizeClass(
                          vue.unref(ns).be("bar", "outer"),
                        ),
                        style: vue.normalizeStyle(
                          vue.unref(progressBarOuterStyle),
                        ),
                      },
                      [
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(
                              vue.unref(ns).be("bar", "inner"),
                            ),
                            style: vue.normalizeStyle(
                              vue.unref(progressBarInnerStyle),
                            ),
                          },
                          [
                            vue.withDirectives(
                              vue.createElementVNode(
                                "div",
                                {
                                  class: vue.normalizeClass(
                                    vue.unref(ns).be("bar", "innerText"),
                                  ),
                                },
                                [
                                  vue.createElementVNode(
                                    "span",
                                    null,
                                    vue.toDisplayString(props.percentage + "%"),
                                    1,
                                  ),
                                ],
                                2,
                              ),
                              [[vue.vShow, props.textInside && props.showText]],
                            ),
                          ],
                          6,
                        ),
                      ],
                      6,
                    ),
                  ],
                  2,
                ),
                vue.withDirectives(
                  vue.createElementVNode(
                    "div",
                    {
                      class: vue.normalizeClass(vue.unref(ns).e("text")),
                    },
                    [
                      vue.withDirectives(
                        vue.createElementVNode(
                          "span",
                          null,
                          vue.toDisplayString(props.percentage) + "%",
                          513,
                        ),
                        [[vue.vShow, props.status === ""]],
                      ),
                      vue.withDirectives(
                        vue.createVNode(
                          _component_etu_icon,
                          {
                            name: "success",
                            class: vue.normalizeClass(vue.unref(ns).e("icon")),
                          },
                          null,
                          8,
                          ["class"],
                        ),
                        [[vue.vShow, props.status === "success"]],
                      ),
                      vue.withDirectives(
                        vue.createVNode(
                          _component_etu_icon,
                          {
                            name: "error",
                            class: vue.normalizeClass(vue.unref(ns).e("icon")),
                          },
                          null,
                          8,
                          ["class"],
                        ),
                        [[vue.vShow, props.status === "danger"]],
                      ),
                      vue.withDirectives(
                        vue.createVNode(
                          _component_etu_icon,
                          {
                            name: "prompt",
                            class: vue.normalizeClass(vue.unref(ns).e("icon")),
                          },
                          null,
                          8,
                          ["class"],
                        ),
                        [[vue.vShow, props.status === "warning"]],
                      ),
                    ],
                    2,
                  ),
                  [[vue.vShow, !props.textInside && props.showText]],
                ),
              ],
              2,
            ),
            vue.renderSlot(_ctx.$slots, "default"),
          ],
          64,
        )
      );
    };
  },
});
module.exports = _sfc_main;

"use strict";
const vue = require("vue");
require("../../../icon/index.js");
const pager = require("./pager.js");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../../icon/src/icon.vue.js");
const _hoisted_1 = ["onClick"];
const __default__ = vue.defineComponent({
  name: "EtuPaginationPager",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: pager.paginationPagerProps,
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("pager");
    const showPrevMore = vue.ref(false);
    const showNextMore = vue.ref(false);
    const pagers = vue.computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    vue.watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onPagerClick(pager2) {
      if (props.disabled) {
        return;
      }
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      let newPage = pager2;
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "ul",
          {
            class: vue.normalizeClass([vue.unref(ns).b()]),
          },
          [
            props.pageCount > 0
              ? (vue.openBlock(),
                vue.createElementBlock(
                  "li",
                  {
                    key: 0,
                    class: vue.normalizeClass([
                      "number",
                      [
                        vue.unref(ns).is("active", props.currentPage === 1),
                        vue.unref(ns).is("disabled", props.disabled),
                      ],
                    ]),
                    onClick:
                      _cache[0] || (_cache[0] = ($event) => onPagerClick(1)),
                  },
                  " 1 ",
                  2,
                ))
              : vue.createCommentVNode("", true),
            showPrevMore.value
              ? (vue.openBlock(),
                vue.createElementBlock(
                  "li",
                  {
                    key: 1,
                    class: vue.normalizeClass([
                      vue.unref(ns).is("disabled", props.disabled),
                    ]),
                    onClick:
                      _cache[1] ||
                      (_cache[1] = ($event) =>
                        onPagerClick(props.currentPage - props.pagerCount + 2)),
                  },
                  [
                    vue.createVNode(
                      vue.unref(icon_vue_vue_type_script_setup_true_lang),
                      { name: "elipsis" },
                    ),
                  ],
                  2,
                ))
              : vue.createCommentVNode("", true),
            (vue.openBlock(true),
            vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(pagers), (pager2) => {
                return (
                  vue.openBlock(),
                  vue.createElementBlock(
                    "li",
                    {
                      class: vue.normalizeClass([
                        [
                          vue
                            .unref(ns)
                            .is("active", props.currentPage === pager2),
                          vue.unref(ns).is("disabled", props.disabled),
                        ],
                        "number",
                      ]),
                      key: pager2,
                      onClick: ($event) => onPagerClick(pager2),
                    },
                    vue.toDisplayString(pager2),
                    11,
                    _hoisted_1,
                  )
                );
              }),
              128,
            )),
            showNextMore.value
              ? (vue.openBlock(),
                vue.createElementBlock(
                  "li",
                  {
                    key: 2,
                    class: vue.normalizeClass([
                      vue.unref(ns).is("disabled", props.disabled),
                    ]),
                    onClick:
                      _cache[2] ||
                      (_cache[2] = ($event) =>
                        onPagerClick(props.currentPage + props.pagerCount - 2)),
                  },
                  [
                    vue.createVNode(
                      vue.unref(icon_vue_vue_type_script_setup_true_lang),
                      { name: "elipsis" },
                    ),
                  ],
                  2,
                ))
              : vue.createCommentVNode("", true),
            props.pageCount > 1
              ? (vue.openBlock(),
                vue.createElementBlock(
                  "li",
                  {
                    key: 3,
                    class: vue.normalizeClass([
                      [
                        vue
                          .unref(ns)
                          .is("active", props.currentPage === props.pageCount),
                        vue.unref(ns).is("disabled", props.disabled),
                      ],
                      "number",
                    ]),
                    onClick:
                      _cache[3] ||
                      (_cache[3] = ($event) => onPagerClick(props.pageCount)),
                  },
                  vue.toDisplayString(props.pageCount),
                  3,
                ))
              : vue.createCommentVNode("", true),
          ],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;

"use strict";
const vue = require("vue");
const _default = require("./default.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const pagination = require("../../tokens/pagination.js");
const total_vue_vue_type_script_setup_true_name_EtuPaginationTotal_lang = require("./components/total.vue.js");
const jumper_vue_vue_type_script_setup_true_name_EtuPaginationJumper_lang = require("./components/jumper.vue.js");
const next_vue_vue_type_script_setup_true_name_EtuPaginationNext_lang = require("./components/next.vue.js");
const prev_vue_vue_type_script_setup_true_name_EtuPaginationPrev_lang = require("./components/prev.vue.js");
const pager_vue_vue_type_script_setup_true_name_EtuPaginationPager_lang = require("./components/pager.vue.js");
const sizes_vue_vue_type_script_setup_true_name_EtuPaginationSizes_lang = require("./components/sizes.vue.js");
const isAbsent = (v) => typeof v !== "number";
const Pagination = /* @__PURE__ */ vue.defineComponent({
  name: "EtuPagination",
  props: _default.paginationProps,
  emits: _default.paginationEmits,
  setup(props, {
    emit
  }) {
    const ns = index.useNamespace("pagination");
    const vnodeProps = vue.getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = vue.computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = vue.ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = vue.ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = vue.computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v);
          emit("size-change", v);
        }
      }
    });
    const pageCountBridge = vue.computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = vue.computed({
      get() {
        console.log(innerCurrentPage.value, props.currentPage);
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v) {
        let newCurrentPage = v;
        if (v < 1) {
          newCurrentPage = 1;
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    vue.watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      console.log(val);
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function addClass(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    vue.provide(pagination.PaginationKey, {
      pageCount: pageCountBridge,
      disabled: vue.computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      if (!assertValidUsage.value) {
        console.warn("检验有问题，请检查参数是否存在和双向绑定");
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const TEMPLATE_MAP = {
        prev: vue.createVNode(prev_vue_vue_type_script_setup_true_name_EtuPaginationPrev_lang, {
          "disabled": props.disabled,
          "currentPage": currentPageBridge.value,
          "prevText": props.prevText,
          "onClick": prev
        }, null),
        next: vue.createVNode(next_vue_vue_type_script_setup_true_name_EtuPaginationNext_lang, {
          "disabled": props.disabled,
          "currentPage": currentPageBridge.value,
          "pageCount": pageCountBridge.value,
          "nextText": props.nextText,
          "onClick": next
        }, null),
        jumper: vue.createVNode(jumper_vue_vue_type_script_setup_true_name_EtuPaginationJumper_lang, null, null),
        pager: vue.createVNode(pager_vue_vue_type_script_setup_true_name_EtuPaginationPager_lang, {
          "disabled": props.disabled,
          "currentPage": currentPageBridge.value,
          "pageCount": pageCountBridge.value,
          "pagerCount": props.pagerCount,
          "onChange": handleCurrentChange
        }, null),
        total: vue.createVNode(total_vue_vue_type_script_setup_true_name_EtuPaginationTotal_lang, {
          "total": isAbsent(props.total) ? 0 : props.total
        }, null),
        sizes: vue.createVNode(sizes_vue_vue_type_script_setup_true_name_EtuPaginationSizes_lang, {
          "pageSize": pageSizeBridge.value,
          "pageSizes": props.pageSizes,
          "popperClass": props.popperClass,
          "disabled": props.disabled
        }, null)
      };
      const components = props.layout.split(",").map((item) => item.trim());
      components.forEach((each) => {
        rootChildren.push(TEMPLATE_MAP[each]);
      });
      addClass(rootChildren[0], ns.is("first"));
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      return vue.createVNode("div", {
        "role": "pagination",
        "class": [ns.b(), ns.is("background", props.background), {
          [ns.m("small")]: props.small
        }]
      }, [rootChildren]);
    };
  }
});
module.exports = Pagination;

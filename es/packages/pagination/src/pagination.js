import {
  defineComponent,
  getCurrentInstance,
  computed,
  ref,
  watch,
  provide,
  createVNode,
} from "vue";
import { paginationProps, paginationEmits } from "./default.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { PaginationKey } from "../../tokens/pagination.js";
import _sfc_main$4 from "./components/total.vue.js";
import _sfc_main$2 from "./components/jumper.vue.js";
import _sfc_main$1 from "./components/next.vue.js";
import _sfc_main from "./components/prev.vue.js";
import _sfc_main$3 from "./components/pager.vue.js";
import _sfc_main$5 from "./components/sizes.vue.js";
const isAbsent = (v) => typeof v !== "number";
const Pagination = /* @__PURE__ */ defineComponent({
  name: "EtuPagination",
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit }) {
    const ns = useNamespace("pagination");
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener =
      "onUpdate:currentPage" in vnodeProps ||
      "onUpdate:current-page" in vnodeProps ||
      "onCurrentChange" in vnodeProps;
    const hasPageSizeListener =
      "onUpdate:pageSize" in vnodeProps ||
      "onUpdate:page-size" in vnodeProps ||
      "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount)) return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener) return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener) return false;
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
    const innerPageSize = ref(
      isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize,
    );
    const innerCurrentPage = ref(
      isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage,
    );
    const pageSizeBridge = computed({
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
      },
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        console.log(innerCurrentPage.value, props.currentPage);
        return isAbsent(props.currentPage)
          ? innerCurrentPage.value
          : props.currentPage;
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
      },
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val) currentPageBridge.value = val;
    });
    function prev() {
      if (props.disabled) return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled) return;
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
    provide(PaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange,
    });
    return () => {
      if (!assertValidUsage.value) {
        console.warn("检验有问题，请检查参数是否存在和双向绑定");
        return null;
      }
      if (!props.layout) return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null;
      const rootChildren = [];
      const TEMPLATE_MAP = {
        prev: createVNode(
          _sfc_main,
          {
            disabled: props.disabled,
            currentPage: currentPageBridge.value,
            prevText: props.prevText,
            onClick: prev,
          },
          null,
        ),
        next: createVNode(
          _sfc_main$1,
          {
            disabled: props.disabled,
            currentPage: currentPageBridge.value,
            pageCount: pageCountBridge.value,
            nextText: props.nextText,
            onClick: next,
          },
          null,
        ),
        jumper: createVNode(_sfc_main$2, null, null),
        pager: createVNode(
          _sfc_main$3,
          {
            disabled: props.disabled,
            currentPage: currentPageBridge.value,
            pageCount: pageCountBridge.value,
            pagerCount: props.pagerCount,
            onChange: handleCurrentChange,
          },
          null,
        ),
        total: createVNode(
          _sfc_main$4,
          {
            total: isAbsent(props.total) ? 0 : props.total,
          },
          null,
        ),
        sizes: createVNode(
          _sfc_main$5,
          {
            pageSize: pageSizeBridge.value,
            pageSizes: props.pageSizes,
            popperClass: props.popperClass,
            disabled: props.disabled,
          },
          null,
        ),
      };
      const components = props.layout.split(",").map((item) => item.trim());
      components.forEach((each) => {
        rootChildren.push(TEMPLATE_MAP[each]);
      });
      addClass(rootChildren[0], ns.is("first"));
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null;
      return createVNode(
        "div",
        {
          role: "pagination",
          class: [
            ns.b(),
            ns.is("background", props.background),
            {
              [ns.m("small")]: props.small,
            },
          ],
        },
        [rootChildren],
      );
    };
  },
});
export { Pagination as default };

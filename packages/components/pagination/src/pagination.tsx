import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  watch,
} from "vue";
import type { VNode } from "vue";
import { paginationEmits, paginationProps } from "./default";
import { useNamespace } from "@etu-design/hooks";
import { PaginationKey } from "@etu-design/tokens";
import type { LayoutKey } from "./default";

import Total from "./components/total.vue";
import Jumper from "./components/jumper.vue";
import Next from "./components/next.vue";
import Prev from "./components/prev.vue";
import Pager from "./components/pager.vue";
import Sizes from "./components/sizes.vue";

const isAbsent = (v: unknown): v is undefined => typeof v !== "number";

export default defineComponent({
  name: "EtuPagination",
  props: paginationProps,
  emits: paginationEmits,

  setup(props, { emit }) {
    const ns = useNamespace("pagination");
    // 获取在vnode上的事件，判断是Current和PageSize是否有双向绑定
    const vnodeProps = getCurrentInstance()!.vnode.props || {};
    const hasCurrentPageListener =
      "onUpdate:currentPage" in vnodeProps ||
      "onUpdate:current-page" in vnodeProps ||
      "onCurrentChange" in vnodeProps;
    const hasPageSizeListener =
      "onUpdate:pageSize" in vnodeProps ||
      "onUpdate:page-size" in vnodeProps ||
      "onSizeChange" in vnodeProps;
    // 对传入的数据进行预检查，判断其是否符合要求
    const assertValidUsage = computed(() => {
      // 用户必须设置其中之一，否则无法确定页数
      if (isAbsent(props.total) && isAbsent(props.pageCount)) return false;
      // 如果传入了 current-page，必须监听 current-page 变更的事件（@update:current-page），否则分页切换不起作用；
      // 如果用户只想提供默认值，“defaultCurrentPage”就在这里
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener) return false;
      // 当您想要更改大小时，事情会变得更加复杂，详细信息如下。
      // 基本上，我们需要的最重要的值是直接从props.pageCount或从props.total计算的页面计数。
      // 我们会将props.pageCount优先于props.totals
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          // 如果传入了 page-size，且布局包含 page-size 选择器（即 layout 包含 sizes），
          // 必须监听 page-size 变更的事件（@update:page-size），否则分页大小的变化将不起作用
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

    // 内部每页记录数量，当没有给定pageSize时使用
    const innerPageSize = ref(
      isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize,
    );

    // 内部的当前的页，当没有给定currentPage时医用
    const innerCurrentPage = ref(
      isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage,
    );

    // 每页数量
    const pageSizeBridge = computed<number>({
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

    // 总页数
    const pageCountBridge = computed<number>(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });

    // 当前的页
    const currentPageBridge = computed<number>({
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

    // 如果总页数比当前页数小，那么就让当前页数和总页数相等
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val) currentPageBridge.value = val;
    });

    // 点击上一页
    function prev() {
      if (props.disabled) return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }

    // 点击下一页
    function next() {
      if (props.disabled) return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }

    function handleCurrentChange(val: number) {
      currentPageBridge.value = val;
    }

    function handleSizeChange(val: number) {
      console.log(val);
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }

    function addClass(element: any, cls: string) {
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
      const rootChildren: Array<VNode | VNode[] | null> = [];

      const TEMPLATE_MAP = {
        prev: (
          <Prev
            disabled={props.disabled}
            currentPage={currentPageBridge.value}
            prevText={props.prevText}
            onClick={prev}
          ></Prev>
        ),
        next: (
          <Next
            disabled={props.disabled}
            currentPage={currentPageBridge.value}
            pageCount={pageCountBridge.value}
            nextText={props.nextText}
            onClick={next}
          ></Next>
        ),
        jumper: <Jumper></Jumper>,
        pager: (
          <Pager
            disabled={props.disabled}
            currentPage={currentPageBridge.value}
            pageCount={pageCountBridge.value}
            pagerCount={props.pagerCount}
            onChange={handleCurrentChange}
          ></Pager>
        ),
        total: <Total total={isAbsent(props.total) ? 0 : props.total}></Total>,
        sizes: (
          <Sizes
            pageSize={pageSizeBridge.value}
            pageSizes={props.pageSizes}
            popperClass={props.popperClass}
            disabled={props.disabled}
          ></Sizes>
        ),
      };

      const components = props.layout
        .split(",")
        .map((item: string) => item.trim()) as LayoutKey[];

      components.forEach((each) => {
        rootChildren.push(TEMPLATE_MAP[each]);
      });

      addClass(rootChildren[0], ns.is("first"));
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null;
      return (
        <div
          role={"pagination"}
          class={[
            ns.b(),
            ns.is("background", props.background),
            {
              [ns.m("small")]: props.small,
            },
          ]}
        >
          {rootChildren}
        </div>
      );
    };
  },
});

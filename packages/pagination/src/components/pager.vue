<template>
  <ul :class="[ns.b()]">
    <!--    第一页-->
    <li
      v-if="props.pageCount > 0"
      class="number"
      :class="[
        ns.is('active', props.currentPage === 1),
        ns.is('disabled', props.disabled),
      ]"
      @click="onPagerClick(1)"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      :class="[ns.is('disabled', props.disabled)]"
      @click="onPagerClick(props.currentPage - props.pagerCount + 2)"
    >
      <etu-icon name="elipsis"></etu-icon>
    </li>
    <li
      v-for="pager in pagers"
      :class="[
        ns.is('active', props.currentPage === pager),
        ns.is('disabled', props.disabled),
      ]"
      class="number"
      :key="pager"
      @click="onPagerClick(pager)"
    >
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      :class="[ns.is('disabled', props.disabled)]"
      @click="onPagerClick(props.currentPage + props.pagerCount - 2)"
    >
      <etu-icon name="elipsis"></etu-icon>
    </li>
    <!--    最后一页-->
    <li
      v-if="props.pageCount > 1"
      :class="[
        ns.is('active', props.currentPage === props.pageCount),
        ns.is('disabled', props.disabled),
      ]"
      class="number"
      @click="onPagerClick(props.pageCount)"
    >
      {{ props.pageCount }}
    </li>
  </ul>
</template>

<script lang="ts" setup name="EtuPaginationPager">
import EtuIcon from "@etu-design/icon";
import { paginationPagerProps } from "./pager.ts";
import { computed, ref, watchEffect } from "vue";
import { useNamespace } from "@etu-design/hooks";

const props = defineProps(paginationPagerProps);
const emit = defineEmits(["change"]);
const ns = useNamespace("pager");

const showPrevMore = ref(false);
const showNextMore = ref(false);

const pagers = computed(() => {
  // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
  const pagerCount = props.pagerCount;
  const halfPagerCount = (pagerCount - 1) / 2;
  const currentPage = Number(props.currentPage);
  const pageCount = Number(props.pageCount);
  // 举个例子，当页面为5时比7-3大，此时showPrevMore为true
  let showPrevMore = false;
  let showNextMore = false;
  if (pageCount > pagerCount) {
    if (currentPage > pagerCount - halfPagerCount) {
      showPrevMore = true;
    }
    if (currentPage < pageCount - halfPagerCount) {
      showNextMore = true;
    }
  }

  const array: number[] = [];
  // 在分页的后面时，显示后面的5页（pagerCount为7）
  if (showPrevMore && !showNextMore) {
    const startPage = pageCount - (pagerCount - 2);
    for (let i = startPage; i < pageCount; i++) {
      array.push(i);
    }
  } //在分页前面时，显示前5页
  else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i);
    }
  } // 在中间时
  else if (showPrevMore && showNextMore) {
    // 当pagerCount为7时，offset为2，显示中间的5个
    const offset = Math.floor(pagerCount / 2) - 1;
    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
      array.push(i);
    }
  } // 全部显示
  else {
    for (let i = 2; i < pageCount; i++) {
      array.push(i);
    }
  }
  return array;
});

watchEffect(() => {
  const halfPagerCount = (props.pagerCount - 1) / 2;
  showPrevMore.value = false;
  showNextMore.value = false;
  if (props.pageCount! > props.pagerCount) {
    if (props.currentPage > props.pagerCount - halfPagerCount) {
      showPrevMore.value = true;
    }
    if (props.currentPage < props.pageCount! - halfPagerCount) {
      showNextMore.value = true;
    }
  }
});

function onPagerClick(pager) {
  if (props.disabled) {
    return;
  }
  const pageCount = props.pageCount;
  const currentPage = props.currentPage;
  let newPage = pager;
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
</script>

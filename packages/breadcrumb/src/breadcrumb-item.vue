<template>
  <span :class="bem.e('item')">
    <span :class="[bem.e('inner'), bem.is('link',!!props.to)]" @click="onClick"><slot/></span>
    <span :class="bem.e('separator')">{{ separator }}</span>
  </span>
</template>

<script lang="ts">
export default {
  name: "EtuBreadcrumbItem",
};
</script>

<script setup lang="ts" name="EtuBreadcrumbItem">
import { inject, toRefs, getCurrentInstance } from 'vue';
import { useNamespace } from '../../hooks';
import { breadcrumbKey } from '../../tokens';
import { breadcrumbItemProps } from './breadcrumb-item';
// import { Router } from 'vue-router';

const props = defineProps(breadcrumbItemProps);

console.log(props)
const bem = useNamespace('breadcrumb');
const breadcrumbContext = inject(breadcrumbKey, undefined)!;
const instance = getCurrentInstance();

const { separator } = toRefs(breadcrumbContext);

const router = instance!.appContext.config.globalProperties.$router!;
const onClick = ():void => {
  if(props.to === undefined || props.to === '') return;
  props.replace ? router.replace(props.to) : router.push(props.to);
}

</script>
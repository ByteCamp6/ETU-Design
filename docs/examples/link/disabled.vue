<template>
  <etu-link
    type="primary"
    :disabled="true"
    href="https://juejin.cn/"
    class="l-a l-1"
  >
    这是一个LINK
  </etu-link>
  <etu-link type="primary" href="https://juejin.cn/" class="l-2"
    >这是一个LINK</etu-link
  >
</template>
<style scoped>
/* .vp-doc a {
  color: var(--etu-link-text-color);
}
.l-a {
  margin-right: 30px;
} */

.vp-doc a:hover {
  color: var(--etu-link-disabled-text-color);
}
.l-1 {
  margin-right: 30px;
}
.l-2 {
  color: var(--etu-link-text-color);
  margin-right: 30px;
}
</style>

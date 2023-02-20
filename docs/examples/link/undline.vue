<template>
  <etu-link
    type="primary"
    :underline="false"
    href="https://juejin.cn/"
    class="l-a"
  >
    这是一个LINK
  </etu-link>
  <etu-link type="primary" class="l-a" href="https://juejin.cn/">
    这是一个LINK
  </etu-link>
</template>
<style scoped>
.vp-doc a {
  color: var(--etu-link-text-color);
}
.l-a {
  margin-right: 30px;
}
</style>

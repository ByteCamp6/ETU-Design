<template>
  <div class="box">
    <etu-progress :percentage="50"></etu-progress>
    <etu-progress :percentage="50" status="success"></etu-progress>
    <etu-progress :percentage="50" status="danger"></etu-progress>
    <etu-progress :percentage="50" status="warning"></etu-progress>
    <etu-progress
      :percentage="50"
      :text-inside="true"
      :stroke-width="26"
      status="info"
    ></etu-progress>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-flow: column;
  gap: 20px;
  width: 35%;
}
</style>

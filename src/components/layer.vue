<template>
  <etu-row :gutter="10">
    <etu-col :span="8" title="span=8">
      <div class="row-demo bg-blue-5">11</div>
    </etu-col>
    <etu-col :span="16" title="span=16">
      <div class="row-demo bg-blue-5">111</div>
    </etu-col>
  </etu-row>

  <etu-row :gutter="10">
    <etu-col :span="3" title="span=3"
      ><div class="row-demo bg-blue-5">a</div></etu-col
    >
    <etu-col :span="10" title="span=10"
      ><div class="row-demo bg-blue-5">b</div></etu-col
    >
    <etu-col :span="11" title="span=11"
      ><div class="row-demo bg-blue-5">c</div></etu-col
    >
  </etu-row>

  <etu-row :gutter="20">
    <etu-col :span="4" title="span=4">
      <div class="row-demo bg-blue-5">1</div>
    </etu-col>
    <etu-col :span="8" title="span=8"
      ><div class="row-demo bg-blue-5">2</div></etu-col
    >
    <etu-col :span="3" title="span=3"
      ><div class="row-demo bg-blue-5">3</div></etu-col
    >
    <etu-col :span="9" title="span=9"
      ><div class="row-demo bg-blue-5">4</div></etu-col
    >
  </etu-row>
</template>

<style>
.bg-blue-5 {
  background-color: skyblue;
}
</style>

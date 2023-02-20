<template>
  <etu-row :gutter="20">
    <etu-col :span="6"><div class="blue">offset</div></etu-col>
    <etu-col :span="6" :offset="6"><div class="blue">offset</div></etu-col>
  </etu-row>
  <etu-row :gutter="20">
    <etu-col :span="6" :offset="6"><div class="blue">offset</div></etu-col>
    <etu-col :span="6" :offset="6"><div class="blue">offset</div></etu-col>
  </etu-row>
  <etu-row :gutter="20">
    <etu-col :span="12" :offset="6"><div class="blue">offset</div></etu-col>
  </etu-row>
</template>

<style>
.blue {
  background-color: skyblue;
}
</style>

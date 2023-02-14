<template>
  <etu-row :gutter="10">
    <etu-col :span="8"><div class="blue">offset</div></etu-col>
    <etu-col :span="10" offset="5"><div class="blue">5</div></etu-col>
  </etu-row>

  <etu-row :gutter="30" type="flex" justify="space-between">
    <etu-col :span="2"><div class="blue">flex</div></etu-col>
    <etu-col :span="10"><div class="blue">space</div></etu-col>
    <etu-col :span="6"><div class="blue">between</div></etu-col>
  </etu-row>

  <etu-row :gutter="20" type="flex" justify="center">
    <etu-col :span="4"><div class="blue">flex</div></etu-col>
    <etu-col :span="8"><div class="blue">center</div></etu-col>
    <etu-col :span="3"><div class="blue">gutter</div></etu-col>
    <etu-col :span="5"><div class="blue">20</div></etu-col>
  </etu-row>
</template>

<style>
.blue {
  background-color: skyblue;
}
</style>

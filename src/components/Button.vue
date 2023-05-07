<template>
  <etu-button>按钮</etu-button>
  <etu-button type="primary" @click="show" disabled="true"
    ><etu-icon name="close"></etu-icon
    >一个超级超级超级超级超级超级超级超极长的按钮</etu-button
  >
  <etu-button type="success">按钮</etu-button>
  <etu-button type="Info">按钮</etu-button>
  <etu-button type="warning">按钮</etu-button>
  <etu-button type="danger"
    >一个超级超级超级超级超级超级超级超极长的按钮</etu-button
  >
  <etu-button type="rainbow">按钮</etu-button>

  <etu-button Hollow="Hollow">按钮</etu-button>
  <etu-button type="primary" Hollow="Hollow">按钮</etu-button>
  <etu-button type="success" Hollow="Hollow">按钮</etu-button>
  <etu-button type="Info" Hollow="Hollow">按钮</etu-button>
  <etu-button type="warning" Hollow="Hollow">按钮</etu-button>
  <etu-button type="danger" Hollow="Hollow">按钮</etu-button>
  <etu-button type="rainbow" Hollow="Hollow">按钮</etu-button>

  <etu-button Curvature="curved">按钮</etu-button>
  <etu-button type="primary" Curvature="curved">按钮</etu-button>
  <etu-button type="success" Curvature="curved">按钮</etu-button>
  <etu-button type="Info" Curvature="curved">按钮</etu-button>
  <etu-button type="warning" Curvature="curved">按钮</etu-button>
  <etu-button type="danger" Curvature="curved">按钮</etu-button>
  <etu-button type="rainbow" Curvature="curved">按钮</etu-button>
  <!-- 还可以指定size指定尺寸和circle来指定按钮的圆形方形 -->
  <etu-button type="primary" Hollow="Hollow" size="large">按钮</etu-button>
  <etu-button type="primary" Hollow="Hollow" size="small">按钮</etu-button>
  <etu-button type="success" Hollow="Hollow" circle="true">圆</etu-button>
</template>

<style lang="scss"></style>

<script setup lang="ts">
function show() {
  console.log("show");
}
</script>

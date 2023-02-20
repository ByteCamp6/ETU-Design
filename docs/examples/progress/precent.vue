<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <etu-progress :percentage="20" text-inside stroke-width="20"></etu-progress>
    <etu-progress
      :percentage="50"
      text-inside
      stroke-width="20"
      status="success"
    ></etu-progress>
    <etu-progress
      :percentage="70"
      text-inside
      stroke-width="20"
      status="danger"
    ></etu-progress>
    <etu-progress
      :percentage="100"
      text-inside
      stroke-width="20"
      status="warning"
    ></etu-progress>
  </div>
</template>

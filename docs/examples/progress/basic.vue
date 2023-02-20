<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <etu-progress :percentage="50"></etu-progress>
    <etu-progress :percentage="50" status="success"></etu-progress>
    <etu-progress :percentage="50" status="danger"></etu-progress>
    <etu-progress :percentage="50" status="warning"></etu-progress>
  </div>
</template>

<template>
  <etu-popper content="This is the Popper content 🍿" arrow placement="right">
    <button>PopperDemo</button>
  </etu-popper>
  <etu-popper arrow>
    <button>PopperDemo</button>
    <template #content>
      <div class="popper-checkbox">
        <etu-checkbox label="Option A" />
        <etu-checkbox label="Option B" />
        <etu-checkbox label="Option C" />
      </div>
    </template>
  </etu-popper>
</template>

<style lang="scss" scoped>
.popper-checkbox {
  display: flex;
  flex-direction: column;
  .etu-checkbox {
    margin-bottom: 5px;
  }
}
</style>

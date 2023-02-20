<template>
  <div class="popper-box">
    <div class="row center">
      <etu-popper content="这是一个top-start" hover placement="top-start">
        <etu-button>top-start</etu-button>
      </etu-popper>
      <etu-popper content="这是一个top" hover placement="top">
        <etu-button>top</etu-button>
      </etu-popper>
      <etu-popper content="这是一个top-end" hover placement="top-end">
        <etu-button>top-end</etu-button>
      </etu-popper>
    </div>
    <div class="row">
      <etu-popper content="这是一个left-start" hover placement="left-start">
        <etu-button>left-start</etu-button>
      </etu-popper>
      <etu-popper content="这是一个right-start" hover placement="right-start">
        <etu-button>right-start</etu-button>
      </etu-popper>
    </div>
    <div class="row">
      <etu-popper content="这是一个left" hover placement="left">
        <etu-button>left</etu-button>
      </etu-popper>
      <etu-popper content="这是一个right-start" hover placement="right">
        <etu-button>right</etu-button>
      </etu-popper>
    </div>
    <div class="row">
      <etu-popper content="这是一个left-end" hover placement="left-end">
        <etu-button>left-end</etu-button>
      </etu-popper>
      <etu-popper content="这是一个right-end" hover placement="right-end">
        <etu-button>right-end</etu-button>
      </etu-popper>
    </div>
    <div class="row center">
      <etu-popper content="这是一个bottom-start" hover placement="bottom-start">
        <etu-button>bottom-start</etu-button>
      </etu-popper>
      <etu-popper content="这是一个bottom" hover placement="bottom">
        <etu-button>bottom</etu-button>
      </etu-popper>
      <etu-popper content="这是一个bottom-end" hover placement="bottom-end">
        <etu-button>bottom-end</etu-button>
      </etu-popper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popper-box {
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .center {
    justify-content: center;
  }
}
</style>

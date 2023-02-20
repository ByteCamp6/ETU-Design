<template>
  <div class="popper-box">
    <div class="row center">
      <etu-popper content="这是一个top-start" placement="top-start">
        <etu-button>top-start</etu-button>
      </etu-popper>
      <etu-popper content="这是一个top" placement="top">
        <etu-button>top</etu-button>
      </etu-popper>
      <etu-popper content="这是一个top-end" placement="top-end">
        <etu-button>top-end</etu-button>
      </etu-popper>
    </div>
    <div class="row">
      <etu-popper content="这是一个left-start" placement="left-start">
        <etu-button>left-start</etu-button>
      </etu-popper>
      <etu-popper content="这是一个right-start" placement="right-start">
        <etu-button>right-start</etu-button>
      </etu-popper>
    </div>
    <div class="row">
      <etu-popper content="这是一个left" placement="left">
        <etu-button>left</etu-button>
      </etu-popper>
      <etu-popper content="这是一个right-start" placement="right">
        <etu-button>right</etu-button>
      </etu-popper>
    </div>
    <div class="row">
      <etu-popper content="这是一个left-end" placement="left-end">
        <etu-button>left-end</etu-button>
      </etu-popper>
      <etu-popper content="这是一个right-end" placement="right-end">
        <etu-button>right-end</etu-button>
      </etu-popper>
    </div>
    <div class="row center">
      <etu-popper content="这是一个bottom-start" placement="bottom-start">
        <etu-button>bottom-start</etu-button>
      </etu-popper>
      <etu-popper content="这是一个bottom" placement="bottom">
        <etu-button>bottom</etu-button>
      </etu-popper>
      <etu-popper content="这是一个bottom-end" placement="bottom-end">
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

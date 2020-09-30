<template>
  <div id="tab">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#tab {
  display: flex;
  background-color: var(--theme);
  height: 44px;
}
</style>
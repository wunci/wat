<template>
  <div id="nav">
    <div>
      <router-link to="/toast">Toast 提示</router-link>
      <router-link to="/dialog">Dialog 弹出框</router-link>
      <router-link to="/picker">Picker</router-link>
      <router-link to="/popup-picker">Popup-Picker</router-link>
      <router-link to="/datetime">Datetime</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#nav {
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  padding: 25px 0 75px;
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  border-right: 1px solid #f1f4f8;
  background: #fff;
  z-index: 1;
  div {
    padding-right: 30px;
  }
  a {
    display: block;
    color: #444;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    margin-left: 40px;
    &:hover,
    &.router-link-active {
      color: #0079f3;
    }
  }
}
</style>
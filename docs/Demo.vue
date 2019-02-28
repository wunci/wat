<template>
  <div id="app">
    <router-view class="child-view"> </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../src/style/common.less";
#app {
  h3 {
    border-left: 5px solid #3cc51f;
    padding-left: 15px;
    margin: 10px;
  }
  button {
    padding: 0 20px;
    height: 30px;
    background: #fff;
    border: none;
    margin: 10px;
    border-radius: 10px;
    color: #333;
    border: 1px solid #ccc;
    outline: none;
    &:active {
      background: #ccc;
    }
  }
}
</style>
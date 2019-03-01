<template>
  <div id="nav">
    <div>
      <router-link to="/toast">toast</router-link>
      <router-link to="/dialog">dialog</router-link>
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
  min-width: 240px;
  max-width: 240px;
  height: 100%;
  border-right: 1px solid #f1f4f8;
  background: #fff;
  z-index: 1;
  div {
    text-align: right;
    padding-right: 30px;
  }
  a {
    display: block;
  }
}
</style>
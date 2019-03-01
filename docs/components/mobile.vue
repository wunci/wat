<template>
  <div id="mobile">
    <iframe :src="'demo' + $route.path" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
#mobile {
  display: inline-block;
  position: fixed;
  top: 60px;
  margin-left: 980px;
  border-radius: 10px;
  overflow: hidden;
}
iframe {
  width: 360px;
  height: 700px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}
</style>
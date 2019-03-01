<template>
  <div id="app">
    <div :id="[bIsDemo ? '' : 'docs']">
      <Nav v-if="!bIsDemo" />
      <router-view v-if="!bIsDemo" class="wat-docs"> </router-view>
      <router-view v-if="bIsDemo"> </router-view>
      <Mobile v-if="!bIsDemo" />
    </div>
  </div>
</template>

<script>
import Nav from "./components/nav";
import Mobile from "./components/mobile";
export default {
  components: {
    Nav,
    Mobile
  },
  data() {
    return {
      bIsDemo: /demo/.test(this.$route.path)
    };
  },
  mounted() {
    console.log(this.bIsDemo);
  }
};
</script>

<style lang="less">
@import url(./style/docs.less);
</style>
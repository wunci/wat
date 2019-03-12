<template>
  <div id="app">
    <Header v-if="!bIsDemo" />
    <div :id="[bIsDemo ? '' : 'docs']">
      <Nav v-if="!bIsDemo" />
      <router-view v-if="!bIsDemo" class="wat-docs"> </router-view>
      <router-view v-if="bIsDemo"> </router-view>
      <Mobile v-if="!bIsDemo" />
    </div>
  </div>
</template>

<script>
import Header from './components/header';
import Nav from './components/nav';
import Mobile from './components/mobile';
export default {
  components: {
    Nav,
    Mobile,
    Header
  },
  data() {
    return {
      bIsDemo: /demo/.test(this.$route.path)
    };
  },
  mounted() {}
};
</script>

<style lang="less">
@import url(./style/docs.less);
</style>
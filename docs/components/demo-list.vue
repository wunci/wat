<template>
  <div class="demo-list">
    <div v-for="(oItem, index) in aDemoList" :key="index">
      <router-link :to="`/demo/${oItem.sLink}`">{{ oItem.sName }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aDemoList: [
        {
          sName: 'Toast',
          sLink: 'toast'
        },
        {
          sName: 'Dialog',
          sLink: 'dialog'
        },
        {
          sName: 'Picker',
          sLink: 'picker'
        },
        {
          sName: 'Popup-Picker',
          sLink: 'popup-picker'
        },
        {
          sName: 'Datetime',
          sLink: 'datetime'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import url('../../src/style/variable.less');
.demo-list {
  div {
    width: 33.33%;
    display: inline-block;
    text-align: center;
    line-height: 60px;
    a:visited,
    a {
      color: @theme-color;
    }
  }
}
</style>
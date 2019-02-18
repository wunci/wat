<template>
  <div class="wat-confirm">
    <transition name="wat-scale-in">
      <div
        class="wat-confirm_wrap"
        :style="zIndexVal(1)"
        v-if="show"
      >
        <div class="wat-confirm_title">
          {{title}}
        </div>
        <div class="wat-confirm_content">
          {{content}}
        </div>
        <div class="wat-confirm_ft">
          <a
            href="javascript:;"
            class="wat-confrim_cancel"
            v-if="showCancel"
            @click="hideConfirm('cancel')"
          >{{cancelBtnText}}</a>
          <a
            href="javascript:;"
            @click="hideConfirm('confirm')"
          >{{confirmBtnText}}</a>
        </div>
      </div>
    </transition>
    <transition name="wat-fade-in">
      <div
        v-if="show"
        class="wat-model"
        :style="zIndexVal()"
        @click="hideConfirm('model')"
      ></div>
    </transition>
  </div>
</template>

<script>
import transfer from "../../../directives/transfer.js";
export default {
  data() {
    return {
      show: false,
      title: "提示",
      content: "",
      cancelBtnText: "取消",
      confirmBtnText: "确定",
      showCancel: false,
      disabledClick: true,
      zIndex: 2000
    };
  },
  directives: {
    transfer
  },
  methods: {
    hideConfirm(action) {
      if (this.disabledClick && action === "model") return;
      this.show = false;
      this.callback && this.callback(action);
    },
    zIndexVal(val = 0) {
      return {
        zIndex: this.zIndex + val
      };
    }
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
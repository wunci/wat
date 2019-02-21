<template>
  <div>
    <transition name="wat-popup-in">
      <div
        class="wat-popup"
        v-if="show"
        style="height:238px"
      >
        <slot />
      </div>
    </transition>
    <transition name="wat-fade-in">
      <div
        v-if="show"
        class="wat-model"
        @click="hideModel"
      ></div>
    </transition>
  </div>
</template>

<script>
import transfer from "../../../directives/transfer.js";
export default {
  name: "popup",
  props: {
    value: Boolean
  },
  data() {
    return {
      show: false
    };
  },
  directives: {
    transfer
  },
  watch: {
    value(val) {
      this.show = val;
      if (val === true) {
        this.$emit("on-show");
      }
    }
  },
  methods: {
    hideModel() {
      this.show = false;
      this.$emit("on-hide");
    }
  }
};
</script>

<style lang="less">
.wat-popup {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2002;
}
</style>
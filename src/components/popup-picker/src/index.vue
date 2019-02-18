<template>
  <div>
    <transition name="wat-popup-in">
      <div
        class="wat-popup-picker"
        v-if="show"
      >
        <div>
          <div>取消</div>
          <div>确定</div>
        </div>
        <div class="wat-flex">
          <Picker
            :columns="columns"
            @change="popUpPicker"
            v-model="value"
          />
        </div>
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
import Picker from "../../picker/src/index";
export default {
  name: "popup-picker",
  components: {
    Picker
  },
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: true,
      value: "13"
    };
  },
  methods: {
    hideModel() {
      this.show = false;
    },
    popUpPicker(val) {
      console.log(val);
      this.$emit("change", val);
    }
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
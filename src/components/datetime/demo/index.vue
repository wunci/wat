<template>
  <div>
    <datetime
      v-model="datetimeValue"
      :title="'时间选择器'"
      @on-change="popupPickerChange"
    >
      <button>时间选择器</button>
    </datetime>
  </div>
</template>

<script>
import Datetime from "../src/";
export default {
  components: {
    Datetime
  },
  data() {
    return {
      datetimeValue: []
    };
  },
  methods: {
    popupPickerChange(val) {
      console.log(val);
    },
    popupPickerShow() {
      console.log("popupPickerShow");
    },
    popupPickerHide() {
      console.log("popupPickerHide");
    },
    popupPickerConfirm(val) {
      console.log(val);
    },
    pcikerChange(val) {
      console.log("picker value", val);
    }
  }
};
</script>

<style scoped>
</style>
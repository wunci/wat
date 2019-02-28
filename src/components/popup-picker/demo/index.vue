<template>
  <div>
    <popup-picker
      :lists="aList"
      :title="'12'"
      v-model="pickerValue"
      @on-confirm="popupPickerConfirm"
      @on-show="popupPickerShow"
      @on-hide="popupPickerHide"
      @on-change="popupPickerChange"
    >
      <button>popup-picker</button>
    </popup-picker>
  </div>
</template>

<script>
import PopupPicker from "../src";
export default {
  components: {
    PopupPicker
  },
  data() {
    return {
      pickerValue: [23, 41, 2, 1],
      datetimeValue: [],
      aList: [
        [1, { name: "hhh", value: "this is value" }, "[]", 41, 4],
        [1, 31, 2, { name: "xxx", value: "this is value" }],
        [1, 23, 123, 41, 4, 12, 112, 12, 31, 2, 4],
        [1, 23, 123, 41, 4, 12, 112, 12, 31, 2, 4]
      ]
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
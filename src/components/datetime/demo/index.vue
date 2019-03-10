<template>
  <div class="wat-demo">
    <h3>datetime</h3>
    <datetime
      v-model="datetimeValue"
      :title="'时间选择器'"
      max-year="2022"
      @on-change="popupPickerChange"
    >
      <div class="ml-20">
        <wat-button>时间选择器</wat-button>
      </div>
    </datetime>
  </div>
</template>

<script>
import Datetime from '../src/';
import WatButton from '../../button/src/index';
export default {
  components: {
    Datetime,
    WatButton
  },
  data() {
    return {
      datetimeValue: [2019, 3, 10]
    };
  },
  methods: {
    popupPickerChange(val) {
      console.log(val);
    },
    popupPickerShow() {
      console.log('popupPickerShow');
    },
    popupPickerHide() {
      console.log('popupPickerHide');
    },
    popupPickerConfirm(val) {
      console.log(val);
    },
    pcikerChange(val) {
      console.log('picker value', val);
    }
  }
};
</script>

<style scoped>
</style>
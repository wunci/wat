<template>
  <div class="wat-demo">
    <h3>datetime</h3>
    <datetime
      v-model="datetimeValue"
      :title="'时间选择器'"
      @on-change="popupPickerChange"
    >
      <div class="ml-20">
        <wat-button>默认</wat-button>
      </div>
    </datetime>
    <datetime
      v-model="datetimeValue"
      :title="'时间选择器'"
      max-year="2022"
      type="YYYY-MM-DD hh:mm"
      @on-change="popupPickerChange"
    >
      <div class="ml-20">
        <wat-button>YYYY-MM-DD hh:mm</wat-button>
      </div>
    </datetime>
    <datetime
      v-model="datetimeValue"
      :title="'时间选择器'"
      max-year="2022"
      max-month="10"
      max-days="20"
      min-days="10"
      type="YYYY-MM-DD hh"
      @on-change="popupPickerChange"
    >
      <div class="ml-20">
        <div style="margin-bottom:10px">
          // max-year="2022" max-month="10" mmin-days="20" max-days="20"
        </div>
        <wat-button>YYYY-MM-DD hh</wat-button>
      </div>
    </datetime>
    <datetime
      v-model="datetimeValue"
      :title="'时间选择器'"
      max-year="2022"
      type="hh:mm"
      max-hours="17"
      min-hours="9"
      min-minutes="10"
      max-minutes="40"
      @on-change="popupPickerChange"
    >
      <div class="ml-20">
        <div style="margin-bottom:10px">
          // min-hours="9" max-hours="17" min-minutes="10" max-minutes="40"
        </div>
        <wat-button>hh:mm</wat-button>
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
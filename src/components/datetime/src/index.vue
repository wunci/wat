<template>
  <div>
    <popup-picker
      :lists="aLists"
      :title="title"
      v-model="aDefaultValue"
      @on-confirm="fnTapConfirm"
      @on-show="fnShowPopup"
      @on-hide="fnHidePopup"
      @on-change="fnChangePopUpPicker"
    >
      <slot />
    </popup-picker>
  </div>
</template>

<script>
import PopupPicker from '../../popup-picker/src/index';
import { getDaysInOneMonth, getRange } from './tools';
export default {
  name: 'datetime',
  components: {
    PopupPicker
  },
  props: {
    title: [String, Number],
    value: {
      type: Array,
      default: () => []
    },
    maxYear: {
      type: [String, Number],
      default: new Date().getFullYear() + 20
    },
    minYear: {
      type: [String, Number],
      default: 2000
    },
    type: {
      type: String,
      default: 'YYYY-MM-dd'
    }
  },
  data() {
    return {
      bIsPopupShow: false,
      aDefaultValue: this.value,
      aLists: []
    };
  },
  created() {
    this.aDefaultValue = this.aDefaultValue.map(val => {
      return Number(val) < 10 ? '0' + val : val;
    });
    let nStartYear = this.minYear;
    if (this.minYear >= this.maxYear) {
      console.error('[WAT error] 最小年份不能大于或等于最大年份 datetime');
      return [];
    }
    this.aLists = getRange(nStartYear, this.maxYear, this.aDefaultValue);
  },
  methods: {
    fnShowModel() {
      this.bIsPopupShow = true;
    },
    fnChangePopUpPicker(val) {
      // 判断月份变更，需要修改当月总天数
      let maxDays = getDaysInOneMonth(val[0], val[1]);
      if (
        this.aDefaultValue[1] !== val[1] ||
        this.aDefaultValue[0] !== val[0]
      ) {
        let aDays = [];
        for (let i = 1; i <= maxDays; i++) {
          aDays.push(i < 10 ? '0' + i : i);
        }
        this.$set(this.aLists, 2, aDays);
        this.$set(this.aDefaultValue, 2, maxDays);
        if (val[2] > maxDays) {
          val[2] = maxDays;
        }
      }
      this.aDefaultValue = val;
      this.$emit('on-change', val);
    },
    fnHidePopup() {
      this.bIsPopupShow = false;
      this.$emit('on-hide');
    },
    fnShowPopup() {
      this.$emit('on-show');
    },
    fnTapCancel() {
      this.bIsPopupShow = false;
      this.$emit('on-hide');
    },
    fnTapConfirm() {
      this.bIsPopupShow = false;
      this.$emit('on-confirm', this.aDefaultValue);
      this.$emit('on-hide');
    }
  }
};
</script>

<style scoped lang="less">
@import './index.less';
</style>
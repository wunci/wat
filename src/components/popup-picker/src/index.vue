<template>
  <div>
    <div class="wat-popup-select_box" @click="fnShowModel">
      <slot />
    </div>
    <Popup v-model="bIsPopupShow" @on-hide="fnHidePopup" @on-show="fnShowPopup">
      <div class="wat-popup-picker">
        <div class="wat-popup-picker_control">
          <div @click="fnTapCancel" class="wat-popup-control_btn">取消</div>
          <div v-if="title !== ''">{{ title }}</div>
          <div @click="fnTapConfirm" class="wat-popup-control_btn">确定</div>
        </div>
        <Picker
          :lists="lists"
          @on-change="fnChangePopUpPicker"
          v-model="aDefaultValue"
        />
      </div>
    </Popup>
  </div>
</template>

<script>
import Picker from '../../picker/src/index';
import Popup from '../../popup/src/index';
export default {
  name: 'popup-picker',
  components: {
    Picker,
    Popup
  },
  props: {
    lists: {
      type: Array,
      required: true
    },
    title: [String, Number],
    value: Array
  },
  data() {
    return {
      bIsPopupShow: false,
      aDefaultValue: this.value,
      aPickerValue: []
    };
  },
  methods: {
    fnShowModel() {
      this.bIsPopupShow = true;
    },
    fnChangePopUpPicker(val) {
      this.aPickerValue = val;
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
      this.$emit(
        'on-confirm',
        this.aPickerValue.length === 0 ? this.value : this.aPickerValue
      );
      this.$emit('on-hide');
    }
  }
};
</script>

<style scoped lang="less">
@import './index.less';
</style>
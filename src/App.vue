<template>
  <div id="app">
    <h3>toast</h3>
    <button @click="showToast('success', 'success')">success</button>
    <button @click="showToast('fail', 'fail')">fail</button>
    <button @click="showDirection('bottom', 'I\'m from bottom')">bottom</button>
    <button @click="showDirection('top', 'I\'m from top')">top</button>
    <button @click="loading('circular', 'loading...')">loading-circular</button>
    <button @click="loading('spinner', 'loading...')">loading-spinner</button>
    <button @click="closeAll">closeAll</button>
    <h3>dialog</h3>
    <button @click="alert">alert</button>
    <button @click="confirm">confirm</button>
    <picker
      :lists="aLinkedList"
      v-model="pickerValue"
      columns="3"
      @on-change="pcikerChange"
    />
    <picker :lists="aList" v-model="pickerValue" @on-change="pcikerChange" />
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
import Picker from "./components/picker/src/index";
import PopupPicker from "./components/popup-picker/src/index";
import Datetime from "./components/datetime/src/index";
export default {
  name: "app",
  components: {
    Picker,
    PopupPicker,
    Datetime
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
      ],
      aLinkedList: [
        {
          name: "中国",
          value: "china",
          parent: "0"
        },
        {
          name: "美国",
          value: "USA",
          parent: "0"
        },
        {
          name: "江西",
          value: "jx",
          parent: "china"
        },
        {
          name: "北京",
          value: "bj",
          parent: "china"
        },
        {
          name: "美国001",
          value: "usa001",
          parent: "USA"
        },
        {
          name: "美国002",
          value: "usa002",
          parent: "USA"
        },
        {
          name: "南昌",
          value: "nc",
          parent: "jx"
        },
        {
          name: "九江",
          value: "jiujiang",
          parent: "jx"
        },
        {
          name: "朝阳区",
          value: "caoyang",
          parent: "bj"
        },
        {
          name: "海淀区",
          value: "haidian",
          parent: "bj"
        },
        {
          name: "美国001_001",
          value: "0003",
          parent: "usa001"
        },
        {
          name: "美国001_002",
          value: "0004",
          parent: "usa001"
        },
        {
          name: "美国002_001",
          value: "0005",
          parent: "usa002"
        },
        {
          name: "美国002_002",
          value: "0006",
          parent: "usa002"
        }
      ]
    };
  },
  mounted() {},
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
    },
    showToast(type = "success", text) {
      this.$toast({
        text,
        mask: true,
        disabledClick: false,
        type,
        // direction:'bottom',
        duration: 0,
        zIndex: 3000,
        onClose: val => {
          console.log(val.disabledClick);
        }
      });
    },
    closeAll() {
      this.$toast.closeAll();
    },
    showDirection(direction, text) {
      this.$toast[direction](text);
    },
    loading(loading, text) {
      this.$toast({
        text,
        mask: true,
        //   disabledClick:true,
        type: "loading",
        loadingType: loading,
        duration: 0,
        onClose: val => {
          console.log(val.text);
        }
      });
    },
    alert() {
      this.$dialog
        .alert({
          content: "This is content",
          title: "Tips",
          disabledClick: false,
          zIndex: 3000,
          cancelBtnText: "cancel",
          confirmBtnText: "confirm",
          callback: () => {
            console.log(1);
          }
        })
        .then(res => {
          this.$toast.top("click confirm");
        })
        .catch(res => {
          this.$toast.top("click cancel");
        });
    },
    confirm() {
      this.$dialog
        .confirm({
          content: "This is content",
          title: "Tips",
          disabledClick: true,
          cancelBtnText: "cancel",
          confirmBtnText: "confirm",
          callback: () => {
            console.log(1);
          }
        })
        .then(res => {
          this.$toast("click confirm");
        })
        .catch(res => {
          this.$toast.top("click cancel");
        });
    }
  }
};
</script>

<style scope lang="less">
@import "./style/common.less";
#app {
  h3 {
    border-left: 5px solid #3cc51f;
    padding-left: 15px;
    margin: 10px;
  }
  button {
    padding: 0 20px;
    height: 30px;
    background: #fff;
    border: none;
    margin: 10px;
    border-radius: 10px;
    color: #333;
    border: 1px solid #ccc;
    outline: none;
    &:active {
      background: #ccc;
    }
  }
}
</style>

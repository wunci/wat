## Popup-Picker 

```html
<template>
  <popup-picker
    :lists="aList"
    :title="'12'"
    v-model="pickerValue" 
    @on-confirm="popupPickerConfirm"
    @on-show="popupPickerShow"
    @on-hide="popupPickerHide"
    @on-change="popupPickerChange"
  >
    <div class="ml-20">
      <wat-button>popup-picker</wat-button>
    </div>
  </popup-picker>
</template>
```

```javascript
export default {
  methods: {
    data(){
      return {
        pickerValue: [23, 41, 2, 1],
        aList: [
          [1, { name: 'hhh', value: 'this is value' }, '[]', 41, 4],
          [1, 31, 2, { name: 'xxx', value: 'this is value' }],
          [1, 23, 123, 41, 4, 12, 112, 12, 31, 2, 4],
          [1, 23, 123, 41, 4, 12, 112, 12, 31, 2, 4]
        ]
      }
    }
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
}
```

> Api

| 参数   | 说明    |  类型  |  可选值 | 
| :----: | :----:   | :----: |:----: |
|   lists    |   数据列表    |   Araay    |  []    |  
|   title    |   标题    |   String    |  空    |  
|   v-model    |   绑定默认值    |   Araay    |  []    | 

> Event

| 事件名   | 说明    |  参数  |  
| :----: | :----:   | :----: |
|   @on-confirm    |   点击确定触发    |   Function    |  
|   @on-change    |   滑动改变触发    |   Function    |  
|   @on-show    |   组件显示触发    |   Function    |  
|   @on-hide    |   组件隐藏触发    |   Function    |  
## Datetime

> YYY-MM-DD hh

```html
<template>
  <datetime
    v-model="datetimeValue"
    :title="'时间选择器'"
    max-year="2022"
    max-month="10"
    max-days="20"
    min-days="10"
    type="YYYY-MM-DD hh"
  >
    <div class="ml-20">
      <wat-button>默认</wat-button>
    </div>
  </datetime>
</template>
```

```javascript
export default {
  methods: {
    data(){
      return {
        datetimeValue: [2019, 3, 10]
      }
    }
    popupPickerChange(val) {
      console.log(val);
    },
  }
}
```

> Api

| 参数   | 说明    |  类型  |  可选值 | 
| :----: | :----:   | :----: |:----: |
|   title    |   标题    |   String    |  -    |  
|   type    |   类型    |   String    |  YYYY-MM-DD hh:mm   |  
|   min-year    |   最小年份    |   String    |  -    |  
|   max-year    |   最大年份    |   String    |  -    | 
|   max-month    |   最大月    |   String    |  -    |  
|   min-month    |   最小月    |   String    |  -    |  
|   max-days    |   最大日期    |   String    |  -    |  
|   min-days    |   最小日期    |   String    |  -    | 
|   max-hours    |   最大小时    |   String    |  -    |  
|   min-hours    |   最小小时    |   String    |  -    |  
|   max-minutes    |   最大分钟   |   String    |  -    |  
|   min-minute   |   最小分钟    |   String    |  -    | 

> Event

| 事件名   | 说明    |  参数  |  
| :----: | :----:   | :----: |
|   @on-show    |   组件显示触发    |   Function    |  
|   @on-hide    |   组件隐藏触发    |   Function    |  
|   @on-confirm    |   点击确定触发    |   Function    |  
|   @on-change    |   滑动改变触发    |   Function    |  

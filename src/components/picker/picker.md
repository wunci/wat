## Picker 

> 普通滑动列表

```html
<template>
  <picker :lists="aList" v-model="pickerValue" @on-change="pcikerChange" />
</template>
```

```javascript
export default {
  data(){ 
    return{
      pickerValue: ['床', '是', '明', '思'],
       aList: [
        ['床', '前', '明', '月', '光'],
        ['疑', '是', '地', '上', '霜'],
        ['举', '头', '望', '明', '月'],
        ['低', '头', '思', '故', '乡']
        // [1, 31, 2, { name: 'xxx', value: 'this is value' }],
      ],
    }
  },
  methods: {
    pcikerChange(val) {
      console.log(val)
    }
  }
}
```

> 普通滑动列表

```html
<template>
  <picker
    :lists="aLinkedList"
    v-model="pickerValue"
    columns="3"
    @on-change="pcikerChange"
  />
</template>
```

```javascript
export default {
  data(){
    return{
      pickerValue: ['lpl', 'ig', 'ning'],
      aLinkedList: [
        {
          name: '中国',
          value: 'china',
          parent: '0'
        },
        {
          name: 'LPL',
          value: 'lpl',
          parent: '0'
        },
        {
          name: '江西',
          value: 'jx',
          parent: 'china'
        },
        {
          name: '北京',
          value: 'bj',
          parent: 'china'
        },
        {
          name: 'IG',
          value: 'ig',
          parent: 'lpl'
        },
        {
          name: 'RNG',
          value: 'rng',
          parent: 'lpl'
        },
        {
          name: 'rookie',
          value: 'rookie',
          parent: 'ig'
        },
        {
          name: 'ning',
          value: 'ning',
          parent: 'ig'
        },
        {
          name: 'mlxg',
          value: 'mlxg',
          parent: 'rng'
        },
        {
          name: 'uzi',
          value: 'uzi',
          parent: 'rng'
        },
        {
          name: '南昌',
          value: 'nc',
          parent: 'jx'
        },
        {
          name: '九江',
          value: 'jiujiang',
          parent: 'jx'
        },
        {
          name: '朝阳区',
          value: 'chaoyang',
          parent: 'bj'
        },
        {
          name: '海淀区',
          value: 'haidian',
          parent: 'bj'
        }
    }
  },
  methods: {
    pcikerChange(val) {
      console.log(val)
    }
  }
}
```

> Api

| 参数   | 说明    |  类型  |  可选值 | 
| :----: | :----:   | :----: |:----: |
|   lists    |   数据列表    |   Araay    |  []    |  
|   columns    |   联动数据列表数    |   number    |  -    |  
|   v-model    |   绑定默认值    |   Araay    |  []    | 

<template>
  <div class="wat-demo">
    <h3>picker</h3>
    <div>{{ value1 }}</div>
    <picker
      :lists="aLinkedList"
      v-model="pickerValue1"
      columns="3"
      @on-change="pcikerChange1"
    />
    <div>{{ value2 }}</div>
    <!-- <picker :lists="aList" v-model="pickerValue2" @on-change="pcikerChange2" /> -->
  </div>
</template>

<script>
import Picker from '../src/';
export default {
  components: {
    Picker
  },
  data() {
    return {
      pickerValue1: [],
      pickerValue2: ['床', '是', '明', '思'],
      aList: [
        ['床', '前', '明', '月', '光'],
        ['疑', '是', '地', '上', '霜'],
        ['举', '头', '望', '明', '月'],
        ['低', '头', '思', '故', '乡']
        // [1, 31, 2, { name: 'xxx', value: 'this is value' }],
      ],
      aLinkedList: [
        {
          name: '中国',
          value: 'china',
          parent: '0'
        },
        {
          name: '南昌',
          value: 'nanchang',
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
          name: '大桥',
          value: 'bridge',
          parent: 'nanchang'
        },
        {
          name: '早餐',
          value: 'breakfast',
          parent: 'nanchang'
        },
        {
          name: '八一大桥',
          value: 'bayi',
          parent: 'bridge'
        },
        {
          name: '南昌大桥',
          value: 'ncdq',
          parent: 'bridge'
        },
        {
          name: '南昌炒粉',
          value: 'nccf',
          parent: 'breakfast'
        },
        {
          name: '瓦罐汤',
          value: 'wgt',
          parent: 'breakfast'
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
      ],
      value1: [],
      value2: ['床', '是', '明', '思']
    };
  },
  methods: {
    pcikerChange1(val) {
      console.log('picker value', val);
      this.value1 = val;
    },
    pcikerChange2(val) {
      console.log('picker value', val);
      this.value2 = val;
    }
  }
};
</script>

<style scoped>
</style>
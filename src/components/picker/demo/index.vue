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
    <picker :lists="aList" v-model="pickerValue2" @on-change="pcikerChange2" />
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
      pickerValue1: ['lpl', 'ig', 'ning'],
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
      ],
      value1: ['lpl', 'ig', 'ning'],
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
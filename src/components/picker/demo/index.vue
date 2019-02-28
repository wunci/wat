<template>
  <div>
    <picker
      :lists="aLinkedList"
      v-model="pickerValue"
      columns="3"
      @on-change="pcikerChange"
    />
    <picker :lists="aList" v-model="pickerValue" @on-change="pcikerChange" />
  </div>
</template>

<script>
import Picker from "../src/";
export default {
  components: {
    Picker
  },
  data() {
    return {
      pickerValue: [23, 41, 2, 1],
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
  methods: {
    pcikerChange(val) {
      console.log("picker value", val);
    }
  }
};
</script>

<style scoped>
</style>
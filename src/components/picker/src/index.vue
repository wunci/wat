<template>
  <div
    class="wat-flex"
    @touchstart="touchstart($event)"
    @touchmove="touchmove($event)"
    @touchend="touchend($event)"
  >
    <div
      class="wat-picker wat-flex-item"
      v-for="(list,index) in aLists"
      :key="index"
    >
      <div
        class="wat-picker_mask"
        :data-index="index"
      ></div>
      <div
        class="wat-picker_line"
        :data-index="index"
      ></div>
      <div class="wat-picker_slider wat-flex">
        <ul
          class="wat-flex-item"
          v-if="aPickerData[index]"
          :style="aPickerData[index].oPosition"
        >
          <li
            v-for="(item,index) in list"
            :key="index"
          >{{item.name || item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picker",
  props: {
    lists: {
      type: Array,
      required: true
    },
    columns: {
      type: String
    },
    value: {
      type: Array
    }
  },
  data() {
    return {
      bIsLinkage: false,
      nWaitTime: 150,
      aLists: [],
      aPickerData: [],
      aResult: []
    };
  },
  created() {
    // copy data
    this.aLists = this.lists;
    if (this.columns) {
      this.bIsLinkage = true;
      let aLinkageList = [[]];
      this.aLists.forEach(val => {
        if (val.parent === "0") {
          aLinkageList[0].push(val);
        }
      });
      this.aLists = this.resolveLinkageData(aLinkageList);
    }
  },
  mounted() {
    this.aPickerData = this.aLists.map((oData, index) => {
      let nFindIndex;
      // 初始化定位
      if (this.value.length > 0) {
        nFindIndex = oData.findIndex(val => {
          if (typeof val === "object") {
            return val.value === this.value[index];
          } else {
            return val === this.value[index];
          }
        });
        nFindIndex = nFindIndex < 0 ? 0 : nFindIndex;
      } else {
        nFindIndex = 0;
      }
      return {
        nStartY: 0,
        nEndPosition: (3 - nFindIndex) * 34,
        oPosition: {
          transform: `translate3d(0, ${(3 - nFindIndex) * 34}px, 0)`
        }
      };
    });
  },
  watch: {
    aResult(newData, oldData) {
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        setTimeout(
          () => {
            this.$emit("change", newData);
          },
          this.bIsLinkage ? 50 : this.nWaitTime
        );
      }
    }
  },
  methods: {
    touchstart(e) {
      let index = e.touches[0].target.dataset.index;
      this.aPickerData[index].nStartY = e.touches[0].clientY;
      this.nStartTime = new Date().getTime();
    },
    touchmove(e) {
      let index = e.touches[0].target.dataset.index;
      let clientY = e.touches[0].clientY;
      let nScrollY = parseInt(
        this.aPickerData[index].nEndPosition +
          clientY -
          this.aPickerData[index].nStartY
      );
      this.aPickerData[index].oPosition = {
        transform: `translate3d(0, ${nScrollY}px, 0)`
      };
    },
    touchend(e) {
      let index = e.changedTouches[0].target.dataset.index;
      let sDirection =
        e.changedTouches[0].clientY - this.aPickerData[index].nStartY > 0
          ? "up"
          : "down";
      // 加速度
      let nSpeed =
        e.changedTouches[0].clientY - this.aPickerData[index].nStartY;
      let nTime = new Date().getTime() - this.nStartTime;
      if (nTime < 300) {
        nSpeed = nSpeed * 3;
        this.nWaitTime = 500;
      }

      let nScrollY = parseInt(this.aPickerData[index].nEndPosition + nSpeed);
      let nMaxLen = this.aLists[index].length - 4;
      // 处理边界问题
      if (Math.abs(nScrollY) > nMaxLen * 34 && sDirection === "down") {
        nScrollY = -nMaxLen * 34;
      } else if (nScrollY > 102 && sDirection === "up") {
        nScrollY = 102;
      } else if (nScrollY % 34 !== 0) {
        nScrollY = Math.round(nScrollY / 34) * 34;
      }
      this.aPickerData[index].oPosition = {
        transform: `translate3d(0, ${nScrollY}px, 0)`,
        transition: "all .5s ease-out"
      };
      this.aPickerData[index].nEndPosition = nScrollY;
      // if linkage
      if (this.bIsLinkage) {
        this.aLists = this.resolveLinkageData(
          this.aLists,
          +index,
          3 - nScrollY / 34
        );
        this.aPickerData.forEach((oData, i) => {
          if (i > index) {
            oData.oPosition = {
              transform: `translate3d(0, 102px, 0)`,
              transition: "all .3s ease-out"
            };
          }
        });
      }
      // return result
      let aResult = this.aPickerData.map((val, index) => {
        let result = this.aLists[index][3 - val.nEndPosition / 34];
        return typeof result === "object" ? result.value : result;
      });
      this.aResult = aResult;
    },
    // 解析联动数据
    resolveLinkageData(columns, nStartIdx = 0, nFristIdx) {
      let len = columns.length - 1;
      let bIsNext = false;
      let value = columns[nStartIdx][nFristIdx ? nFristIdx : 0].value;
      // 如果当前滑动的列表存在，则重置
      if (columns[nStartIdx + 1]) {
        columns[nStartIdx + 1] = undefined;
      }
      // 循环查找关联的下一级
      for (let i = 0; i < this.lists.length; i++) {
        if (this.lists[i].parent === value) {
          if (!columns[nStartIdx + 1]) {
            columns[nStartIdx + 1] = [this.lists[i]];
          } else {
            columns[nStartIdx + 1].push(this.lists[i]);
          }
          bIsNext = true;
        }
      }
      // 如果没有下一级结束递归
      if (!bIsNext) {
        return columns;
      }
      return this.resolveLinkageData(columns, nStartIdx + 1, 0);
    }
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
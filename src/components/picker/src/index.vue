<template>

  <div
    class="wat-flex"
    @touchstart="touchstart($event)"
    @touchmove="touchmove($event)"
    @touchend="touchend($event)"
  >
    <div
      class="wat-picker wat-flex-item"
      v-for="(list,index) in columns"
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
          >{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picker",
  props: {
    columns: {
      type: Array,
      required: true
    },
    value: {
      type: Array
    }
  },
  data() {
    return {
      aPickerData: []
    };
  },
  mounted() {
    this.aPickerData = this.columns.map((oData, index) => {
      let nFindIndex;
      if (this.value.length > 0) {
        nFindIndex = oData.findIndex(val => val === this.value[index]);
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
        transform: `translate3d(0,${parseInt(nScrollY)}px, 0)`
      };
    },
    touchend(e) {
      let index = e.changedTouches[0].target.dataset.index;
      let sDirection =
        e.changedTouches[0].clientY - this.aPickerData[index].nStartY > 0
          ? "up"
          : "down";
      let nSpeed =
        e.changedTouches[0].clientY - this.aPickerData[index].nStartY;
      let nTime = new Date().getTime() - this.nStartTime;

      if (nTime < 300) {
        nSpeed = nSpeed * 3;
      }
      let nScrollY = parseInt(this.aPickerData[index].nEndPosition + nSpeed);
      let nMaxLen = this.columns[index].length - 4;
      if (Math.abs(nScrollY) > nMaxLen * 34 && sDirection === "down") {
        nScrollY = -nMaxLen * 34;
      } else if (nScrollY > 102 && sDirection === "up") {
        nScrollY = 102;
      } else if (nScrollY % 34 !== 0) {
        nScrollY = Math.round(nScrollY / 34) * 34;
      }
      this.aPickerData[index].oPosition = {
        transform: `translate3d(0,${nScrollY}px, 0)`,
        transition: "all .5s ease-out"
      };
      this.aPickerData[index].nEndPosition = nScrollY;
      let aResult = this.aPickerData.map((val, index) => {
        return this.columns[index][3 - val.nEndPosition / 34];
      });
      setTimeout(() => {
        this.$emit("change", aResult);
      }, 500);
    }
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div
    @touchstart="touchstart($event)"
    @touchmove="touchmove($event)"
    @touchend="touchend($event)"
    @mousedown="touchstart($event)"
  >
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    touchstart(e) {
      e.preventDefault();
      let Y = e.touches ? e.touches[0].pageY : e.pageY;
      let X = e.touches ? e.touches[0].pageX : e.pageX;
      let nIndex = e.touches
        ? +e.touches[0].target.dataset.index
        : +e.target.dataset.index;
      this.$emit(
        'touchstart',
        {
          Y,
          X,
          nIndex
        },
        e
      );
      // pc滑动兼容
      if ('onmousemove' in window) {
        document.addEventListener('mousemove', this.touchmove, false);
        document.addEventListener('mouseup', this.touchend, false);
      }
    },
    touchmove(e) {
      e.preventDefault();
      let Y = e.touches ? e.touches[0].pageY : e.pageY;
      let X = e.touches ? e.touches[0].pageX : e.pageX;
      let nIndex = e.touches
        ? +e.touches[0].target.dataset.index
        : +e.target.dataset.index;
      this.$emit(
        'touchmove',
        {
          Y,
          X,
          nIndex
        },
        e
      );
    },
    touchend(e) {
      e.preventDefault();
      let Y = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
      let X = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
      let nIndex = e.changedTouches
        ? +e.changedTouches[0].target.dataset.index
        : +e.target.dataset.index;
      this.$emit(
        'touchend',
        {
          Y,
          X,
          nIndex
        },
        e
      );
      // 移除滑动和抬起时间
      if ('onmousemove' in window) {
        document.removeEventListener('mousemove', this.touchmove, false);
        document.removeEventListener('mouseup', this.touchend, false);
      }
    }
  }
};
</script>

<style scoped>
</style>
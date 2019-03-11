<template>
  <div class="wat-toast">
    <transition :name="transitionName">
      <div
        class="wat-taost_wrap"
        :style="zIndexVal(1)"
        :class="directionCls"
        v-if="show"
      >
        <!-- default -->
        <span v-if="type === 'default'" class="wat-toast_text">{{ text }}</span>
        <!-- loading框 -->
        <div v-if="type !== 'default'" class="wat-icon-wrap">
          <template v-if="type === 'loading'">
            <div v-if="loadingType !== 'spinner'" class="wat-loading_icon">
              <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none"></circle>
              </svg>
            </div>
            <span v-else class="wat-loading_spinner"></span>
          </template>
          <i v-else class="wat-icon" :class="'wat-icon-' + type"></i>
          <div class="wat-icon_text">{{ text || '加载中...' }}</div>
        </div>
      </div>
    </transition>
    <!-- 遮罩层 -->
    <transition name="wat-fade-in">
      <div
        :style="zIndexVal()"
        v-if="(mask || disabledClick) && show"
        class="wat-model"
        :class="[disabledClick && !mask ? 'wat-model_transparent' : '']"
        @click="hideModel"
      ></div>
    </transition>
  </div>
</template>

<script>
import transfer from '../../../directives/transfer.js';
export default {
  data() {
    return {
      duration: 3000,
      text: '',
      type: 'default',
      show: false,
      onClose: '',
      mask: false,
      timer: null,
      disabledClick: false,
      direction: 'middle',
      loadingType: 'circular',
      zIndex: 2000
    };
  },
  computed: {
    directionCls() {
      return `wat-toast-direction_${this.direction}`;
    },
    transitionName() {
      let type = this.type;
      return type !== 'loading'
        ? this.direction === 'bottom'
          ? 'wat-toast-fade-bottom'
          : type == 'success' || type == 'fail'
          ? 'wat-fade-in'
          : 'wat-toast-fade'
        : '';
    }
  },
  directives: {
    transfer
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.duration === 0) return;
      this.timer = setTimeout(() => {
        this.close();
        this.$el.addEventListener('webkitAnimationEnd', this.destroyElement);
      }, this.duration);
    },
    close() {
      this.show = false;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    destroyElement() {
      this.$el.removeEventListener('webkitAnimationEnd', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    hideModel() {
      if (this.disabledClick) return;
      clearTimeout(this.timer);
      this.close();
    },
    zIndexVal(val = 0) {
      return {
        zIndex: this.zIndex + val
      };
    }
  }
};
</script>

<style lang="less">
@import './index.less';
</style>
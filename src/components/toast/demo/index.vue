<template>
  <div class="wat-demo">
    <h3>toast</h3>
    <wat-button @click.native="showToast('success', 'success')"
      >success</wat-button
    >
    <wat-button @click.native="showToast('fail', 'fail')">fail</wat-button>
    <wat-button @click.native="showDirection('bottom', 'I\'m from bottom')"
      >bottom</wat-button
    >
    <wat-button @click.native="showDirection('top', 'I\'m from top')"
      >top</wat-button
    >
    <wat-button @click.native="loading('circular', 'loading...')"
      >loading-circular</wat-button
    >
    <wat-button @click.native="loading('spinner', 'loading...')"
      >loading-spinner</wat-button
    >
    <wat-button @click.native="closeAll">closeAll</wat-button>
  </div>
</template>

<script>
import WatButton from "../../button/src/index";
export default {
  components: {
    WatButton
  },
  data() {
    return {};
  },
  methods: {
    showToast(type = "success", text) {
      this.$toast({
        text,
        mask: true,
        disabledClick: false,
        type,
        // direction:'bottom',
        duration: 0,
        zIndex: 3000,
        onClose: val => {
          console.log(val.disabledClick);
        }
      });
    },
    closeAll() {
      this.$toast.closeAll();
    },
    showDirection(direction, text) {
      this.$toast[direction](text);
    },
    loading(loading, text) {
      this.$toast({
        text,
        mask: true,
        //   disabledClick:true,
        type: "loading",
        loadingType: loading,
        duration: 0,
        onClose: val => {
          console.log(val.text);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
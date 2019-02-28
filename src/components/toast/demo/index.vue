<template>
  <div>
    <h3>toast</h3>
    <button @click="showToast('success', 'success')">success</button>
    <button @click="showToast('fail', 'fail')">fail</button>
    <button @click="showDirection('bottom', 'I\'m from bottom')">bottom</button>
    <button @click="showDirection('top', 'I\'m from top')">top</button>
    <button @click="loading('circular', 'loading...')">loading-circular</button>
    <button @click="loading('spinner', 'loading...')">loading-spinner</button>
    <button @click="closeAll">closeAll</button>
  </div>
</template>

<script>
export default {
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
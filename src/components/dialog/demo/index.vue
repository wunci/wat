<template>
  <div>
    <h3>dialog</h3>
    <button @click="alert">alert</button>
    <button @click="confirm">confirm</button>
  </div>
</template>

<script>
export default {
  methods: {
    alert() {
      this.$dialog
        .alert({
          content: "This is content",
          title: "Tips",
          disabledClick: false,
          zIndex: 3000,
          cancelBtnText: "cancel",
          confirmBtnText: "confirm",
          callback: () => {
            console.log(1);
          }
        })
        .then(res => {
          this.$toast.top("click confirm");
        })
        .catch(res => {
          this.$toast.top("click cancel");
        });
    },
    confirm() {
      this.$dialog
        .confirm({
          content: "This is content",
          title: "Tips",
          disabledClick: true,
          cancelBtnText: "cancel",
          confirmBtnText: "confirm",
          callback: () => {
            console.log(1);
          }
        })
        .then(res => {
          this.$toast("click confirm");
        })
        .catch(res => {
          this.$toast.top("click cancel");
        });
    }
  }
};
</script>

<style scoped>
</style>
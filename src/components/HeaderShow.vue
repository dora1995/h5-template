<template>
  <div class="Header">
    <van-icon
      v-if="backButton"
      @click="back"
      name="arrow-left"
      class="goBack"
    />
    {{ title || "" }}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    backButton: Boolean,
  },
  methods: {
    toAddTrip() {
      this.$router.push("/addTrip");
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
.Header {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
  text-align: center;
  box-shadow: 0 0 1px 1px #e6e6e6;
  z-index: 100;
  .goBack {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
}
</style>

<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" />
    <div class="loadingMain" v-if="showLoading">
      <van-loading class="loading" size="24px" vertical>提交中...</van-loading>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
    showLoading() {
      return this.$store.state.showLoading;
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  position: relative;
}
.loadingMain {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(#000, 0.5);
  z-index: 999;
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

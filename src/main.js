import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 格式化样式
import "normalize.css/normalize.css";

Vue.config.productionTip = false;

// 全局引入按需引入UI库 vant
import "@/plugins/vant";
// 移动端适配
import "lib-flexible/flexible.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

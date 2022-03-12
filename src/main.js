import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import httpRequest from '@/utils/newRequest'
// 格式化样式
import "normalize.css/normalize.css";

Vue.config.productionTip = false;

// 全局引入按需引入UI库 vant
import "@/plugins/vant";
// 移动端适配
import "lib-flexible/flexible.js";

Vue.prototype.$http = httpRequest

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

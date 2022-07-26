import Vue from "vue";
import App from "./App.vue";
import router from "../src/router/index.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "../src/store";
import { BAlert } from "bootstrap-vue";
Vue.component("b-alert", BAlert);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
new Vue({
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");

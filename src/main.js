import Vue from "vue";
import App from "./App.vue";
import router from "../src/router/index.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "../src/store";
import { BAlert } from "bootstrap-vue";
Vue.component("b-alert", BAlert);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
new Vue({
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");

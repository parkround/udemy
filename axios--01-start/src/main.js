import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://vue-01-edeab.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "test1";
axios.defaults.headers.get["accepts"] = "test2";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

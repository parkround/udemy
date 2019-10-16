import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});
Vue.filter("appendsLength", function(value) {
  if (!value.length == 0) {
    return value + "(" + value.length + ")";
  }
});

Vue.mixin({
  created() {
    console.log("Global Mixin - Created Hook");
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

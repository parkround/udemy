<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-myOn:click="clicked" class="btn btn-primary">Clicked me</button>
        <hr />
        <div
          style="width: 100px; height: 100px; background-color: lightgreen"
          v-myOn:click="mouseEnter"
          v-myOn:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myOn: {
      bind(el, binding, vnode) {
        // el.onclick = () => {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("I was clicked");
    },
    mouseEnter() {
      console.log("mouse entered");
    },
    mouseLeave() {
      console.log("mouse left");
    }
  }
};
</script>

<style>
</style>

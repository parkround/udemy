<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="firstName" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="lastName" />
    </div>
    <p>{{fullNameed}}</p>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data: () => {
    return {
      firstName: "",
      lastName: "",
      fullName: ""
    };
  },
  methods: {
    fullNamed() {
      this.fullName = this.firstName + " " + this.lastName;
      this.$emit("input", this.fullName);
    }
  }
};
</script>
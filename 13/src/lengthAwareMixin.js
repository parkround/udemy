export const lengthAwareMixin = {
  computed: {
    computedAppends() {
      if (!this.text.length == 0) {
        return this.text + "(" + this.text.length + ")";
      }
    }
  }
};

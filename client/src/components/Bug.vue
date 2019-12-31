<template>
  <div class="bugDetail" :class="{color: bugData.closed.true}"></div>
</template>

<script>
export default {
  name: "bugDetail",
  props: ["bugData"],

  computed: {
    bugs() {
      return this.$store.state.bug;
    },

    methods: {
    close() {
      this.$store.dispatch("delete", this.bugData.id);
    }
  }
}
</script>


<style scoped>
</style>
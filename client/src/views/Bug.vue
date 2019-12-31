<template>
  <div class="bugs container-fluid">
    <h1>Bug Details</h1>
    <div class="row">
      <div class="col-3 text-left">{{bug.title}}</div>
      <div class="col-9 text-center">{{bug.description}}</div>
    </div>
    <div
      class="row"
      :class="{ color: bug.closed == true, open: bug.closed == false }"
    >{{bug.closed}}</div>
    <button @click="close">Close Bug</button>
  </div>
</template>

<script>
export default {
  name: "bugs",

  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },

  methods: {
    close() {
      let close = window.confirm("Did you resolve this bug???");

      if (close == true) {
        this.$store.dispatch("delete", this.bug.id);
      }
    }
  },

  mounted() {
    this.$store.dispatch("getById", this.$route.params.id);
  }
};
</script>

<style scoped>
.color {
  color: green;
}

.open {
  color: red;
}
</style>
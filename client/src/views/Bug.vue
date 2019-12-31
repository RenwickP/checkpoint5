<template>
  <div class="bugs">
    <h1>Bug Details</h1>
    {{bug.title}}{{bug.description}}
  </div>

  <!-- <div v-for="bug in bugs" :key="bug.id">
      <div class="row">
        <th>{{bug.title}}</th>
        <th>{{bug.reportedBy}}</th>
        <th class="open">{{bug.closed}}</th>
        <th>
          {{bug.updatedAt}}
          <button @click="close">Close</button>
        </th>
      </div>
  </div>-->
</template>

<script>
export default {
  name: "bugs",

  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },

  mounted() {
    this.$store.dispatch("getById", this.$route.params.id);
  }
};
</script>

<style>
.color {
  color: red;
}
</style>
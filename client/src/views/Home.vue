<template>
  <div class="container home">
    <div class="row">
      <!-- <div class="col-6 bug">
        <h3>Bug Report</h3>
      </div>-->
      <div class="col-6 report">
        <p>Report Bug</p>
        <form @submit.prevent="makeBug">
          <input type="text" v-model="newBug.title" placeholder="name" />
          <input type="text" v-model="newBug.description" placeholder="comment" />
          <input type="text" v-model="newBug.reportedBy" placeholder="User Name" />
          <button>Press</button>
        </form>
        <div v-for="bug in bugs" :key="bug._id"></div>
        <p>{{bugs}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      newBug: {
        title: "",
        description: "",
        reportedBy: ""
      }
    };
  },

  components: {
    swal
  },
  computed: {
    bugs() {
      return this.$store.state.bug;
    }
  },

  methods: {
    makeBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("makeBug", bug);
      this.newBug = {
        title: "",
        description: "",
        reportedBy: ""
      };
    }
  },
  mounted() {
    this.$store.dispatch("getBugs");
  }
};
</script>

<style scoped>
/* .bug {
  text-align-last: start;
} */

.report {
  text-align: end;
  background-color: aqua;
}
</style>

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
        <div class="row">
          <div v-for="bug in bugs" :key="bug._id">
            <div class="col-4 name">{{bug.title}}</div>
            <div class="col-4 problem">{{bug.desctiption}}</div>
            <div class="col-4 type">{{bug.reportedBy}}</div>
          </div>
        </div>
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

.name {
  text-align: start;
}
</style>

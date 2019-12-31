<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col report text-center">
        <p>Report Bug</p>

        <form @submit.prevent="makeBug">
          <input type="text" v-model="newBug.title" placeholder="name" />
          <input type="text" v-model="newBug.description" placeholder="comment" />
          <input type="text" v-model="newBug.reportedBy" placeholder="User Name" />
          <button>Press</button>
        </form>

        <div class>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Posted By</th>
                <th scope="col">Closed</th>
                <th scope="col">Modified</th>
              </tr>
            </thead>
          </table>
          <div v-for="bug in bugs" :key="bug.id">
            <table class="table">
              <thead>
                <tr>
                  <div class="row">
                    <router-link :to="{name: 'bugs' , params: {id: bug.id} }">
                      <th>{{bug.title}}</th>
                      <th>{{bug.reportedBy}}</th>
                      <th>{{bug.closed}}</th>
                      <th>{{bug.updatedAt}}</th>
                    </router-link>
                  </div>
                </tr>
              </thead>
            </table>
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



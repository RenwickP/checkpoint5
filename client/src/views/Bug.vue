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
    <div class="row">
      <div class="col text-center note-color">
        <h1>Notes</h1>

        <div class="col note-box">
          <p class="text-color">{{note}}</p>
        </div>

        <div class="col text-right button-box">
          <form @submit.prevent="makeNote">
            <input type="text" v-model="newNote.content" placeholder="notes" />
            <input type="text" v-model="newNote.reportedBy" placeholder="User Name" />
            <button>Add Note</button>
          </form>
        </div>
        <p>Test</p>
        <div v-for="realNote in realNotes" :key="realNote.id">{{realNote.content}}</div>
      </div>
    </div>
    <!-- <div class="row">
      <form @submit.prevent="editBug">
        <input type="text" v-model="newEdit.title" placeholder="edit name" />
        <input type="text" v-model="newEdit.description" placeholder="edit comment" />
        <input type="text" v-model="newEdit.reportedBy" placeholder="edit User Name" />
        <button>Edit Bug</button>
      </form>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "bugs",

  data() {
    return {
      newNote: {
        content: "",
        bug: {},
        reportedBy: ""
      }

      // newEdit: {
      //   title: "",
      //   description: "",
      //   reportedBy: ""
      // }
    };
  },

  computed: {
    bug() {
      return this.$store.state.activeBug;
    },

    realNotes() {
      return this.$store.state.note;
    },

    note() {
      return this.$store.state.activeNote;
    }
  },

  methods: {
    makeNote() {
      // debugger;
      let note = { ...this.newNote };
      this.$store.dispatch("makeNote", note);
      this.newNote = {
        content: "",
        bug: {},
        reportedBy: ""
      };
    },

    // editBug() {
    //   let edit = { ...this.newEdit };
    //   this.$store.dispatch("editBugs", edit);
    //   this.editBug = {
    //     title: "",
    //     description: "",
    //     reportedBy: ""
    //   };
    // },

    close() {
      let close = window.confirm("Did you resolve this bug???");
      if (close == true) {
        this.$store.dispatch("delete", this.bug.id);
      }
    }
  },

  mounted() {
    this.$store.dispatch("getById", this.$route.params.id);
    console.log("hello", this.$store.state.note);
    console.log("hello bug", this.$store.state.bug);
    // this.$store.dispatch("getNotesById", this.$route.params.id);
    // this.$store.dispatch("getNotesById", this.realNotes.id);
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

.note-color {
  color: purple;
}

.text-color {
  color: red;
}

.note-box {
  opacity: 0.5;
  min-height: 15vh;
  background-color: grey;
}
</style>
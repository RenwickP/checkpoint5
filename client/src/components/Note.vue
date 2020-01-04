<template>
  <div class="noteDetail"></div>
</template>

<script>
export default {
  name: "noteDetail",
  props: ["noteData"],

  computed: {
    notes() {
      return this.$store.state.note;
    },
    realNotes() {
      return this.$store.state.note;
    }
  },

  methods: {}
};
</script>

<template>
  <div class="container">
    <Header title="Add New Idea" />

    <form class="mt-3">
      <div class="form-group">
        <label for="projectname">Idea Title</label>
        <input
          type="text"
          class="form-control"
          id="ideatitle"
          placeholder="Idea Title"
        />
      </div>

      <div class="form-group">
        <label for="projectname">Idea Description</label>
        <textarea
          class="form-control"
          id="ideadesc"
          placeholder="Idea Description"
        ></textarea>
      </div>

      <div class="form-group">
        <button class="btn btn-login">Submit Your Idea</button>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "../Header.vue";
export default {
  name: "AddIdea",
  components: {
    Header,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

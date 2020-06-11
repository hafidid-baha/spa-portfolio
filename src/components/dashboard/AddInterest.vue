<template>
  <div class="container">
    <Header title="Add New Interest" />

    <form class="mt-3">
      <div class="form-group">
        <label for="interestname">Interest Name</label>
        <input
          type="text"
          class="form-control"
          id="interestname"
          placeholder="Interest Title"
        />
      </div>

      <div class="form-group">
        <label for="interestdesc">Interest Description</label>
        <textarea
          class="form-control"
          id="interestdesc"
          placeholder="Interest Description"
        ></textarea>
      </div>

      <div class="form-group">
        <button class="btn btn-login">Submit Your Interst</button>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "../Header.vue";
export default {
  name: "AddInterest",
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

<template>
  <div class="container">
    <Header title="Create New Project" />

    <form class="mt-3">
      <div class="form-group">
        <label for="projectname">Project Name</label>
        <input
          type="text"
          class="form-control"
          id="projectname"
          placeholder="Project Name"
        />
      </div>
      <div class="form-group">
        <label for="projectdesc">Project Description</label>
        <textarea
          class="form-control"
          id="projectdesc"
          placeholder="Project Description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="projectcatefory">Project Category</label>
        <select class="form-control" id="projectcatefory">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="projectlink">Project Video Link</label>
        <input
          type="text"
          class="form-control"
          id="projectlink"
          placeholder="Project Video Link"
        />
      </div>
      <div class="form-group">
        <label for="projectcouse">Why This Project</label>
        <textarea
          class="form-control"
          id="projectcouse"
          placeholder="Why This Project"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="projectlearn">What You Wanna Learn From This Project</label>
        <textarea
          class="form-control"
          id="projectlearn"
          placeholder="What You Wanna Learn From This Project"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="projectoutcomes">Outcomes</label>
        <textarea
          class="form-control"
          id="projectoutcomes"
          placeholder="Outcomes"
        ></textarea>
      </div>
        <div class="form-group">
          <button class="btn btn-login">Add Project</button> 
        </div>
    </form>
  </div>
</template>
<script>
import Header from "../Header.vue";
export default {
  name: "AddProjects",
  components: {
    Header,
  },
};
</script>
<style>
form{
	font-family: 'Changa', sans-serif !important;	
}
input,textarea,select{
	/* border: 1px solid #EE9D24 !important; */
	border: 1px solid #ced4da !important;
}
.form-control{
  border-radius:0px;
}
.form-control:focus{
	/* box-shadow: 0px 0px 6px rgba(238, 157, 36, 1); */
	box-shadow: none;
}
.btn-form{
	background: #EE9D24;
	color: white;
}
</style>

<template>
  <div class="container">
    <Header title="Profile" />

    <form class="mt-3">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Full Name"
            />
          </div>

          <div class="form-group">
            <label for="aboutme">About Me</label>
            <textarea
              class="form-control"
              id="aboutme"
              placeholder="About Me"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="slug">Slug</label>
            <input
              type="text"
              class="form-control"
              id="slug"
              placeholder="Put Your Slug Here"
            />
          </div>
          <div class="form-group">
            <label for="facebook">Facebook</label>
            <input
              type="text"
              class="form-control"
              id="facebook"
              placeholder="Facebook Acount Url"
            />
          </div>
          <div class="form-group">
            <label for="linkedin">LinkedIn</label>
            <input
              type="text"
              class="form-control"
              id="linkedin"
              placeholder="LinkedIn Acount Url"
            />
          </div>
          <div class="form-group">
            <label for="github">Github</label>
            <input
              type="text"
              class="form-control"
              id="github"
              placeholder="Github Acount Url"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">Profile Image</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile"
                >Choose file</label
              >
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <label for="email">Passowrd</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-login">Save</button> 
      </div>
    </form>
  </div>
</template>
<script>
import Header from "../Header.vue";
export default {
  name: "Profile",
  components: {
    Header,
  },
};
</script>

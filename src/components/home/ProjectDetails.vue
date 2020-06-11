<template>
  <div class="row ">
    <div class="col-md-8">
      <div class="row justify-content-center">
        <div class="col-md-10 left position-relative">
          <div class="col-md-12 mt-3">
            <h6>Complete Project Name - Done</h6>
            <span class="d-block sub-title ml-2">
              Started Date : 2020-11-12</span
            >
            <span class="d-block sub-title ml-2">
              Completed Date : 2020-11-12</span
            >
            <div class="mt-2 ml-2">
              <a href=""
                ><img
                  class="img-fluid"
                  style="height:20px;width:25px"
                  src="@/assets/share.png"
              /></a>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h6>Application Details</h6>
            <div>
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></b-embed>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h6>Description</h6>
            <p class="smallPara">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like
            </p>
          </div>

          <div class="col-md-12 mt-3">
            <h6>Why This Project</h6>
            <p class="smallPara">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution
            </p>
          </div>

          <div class="col-md-12 mt-3">
            <h6>What You Wanna Learn From This Project</h6>

            <div class="income w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="income w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="income w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="income w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="income w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <h6>Outcomes</h6>

            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 pb-1 pl-2"
                >This is The First Thing I Wanna Learn Creating This
                Project</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row justify-content-center">
        <div class="col-md-11 right">
          <div class="mt-3 project-statistic">
            <span class="d-block text-center">50 Tasks</span>
            <span class="d-block text-center">30 Days</span>

            <img src="@/assets/graph.png" class="img-fluid mt-2 mb-2" />
          </div>

          <div class="">
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 task-title pb-1 pl-2 flaot-left"
                >Task Title goes her ..
              </span>
              <span class="d-inline-block pt-1 task-time pb-1 pr-2 float-right"
                >12min</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 task-title pb-1 pl-2 flaot-left"
                >Task Title goes her ..
              </span>
              <span class="d-inline-block pt-1 task-time pb-1 pr-2 float-right"
                >1200min</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 task-title pb-1 pl-2 flaot-left"
                >Task Title goes her ..
              </span>
              <span class="d-inline-block pt-1 task-time pb-1 pr-2 float-right"
                >100min</span
              >
            </div>
            <div class="outcomes w-80 mb-2">
              <span class="d-inline-block pt-1 task-title pb-1 pl-2 flaot-left"
                >Task Title goes her ..
              </span>
              <span class="d-inline-block pt-1 task-time pb-1 pr-2 float-right"
                >50min</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectDetails",
};
</script>

<style scoped>
.left,
.right {
  min-height: 95vh;
  background: #f9f9f9;
  /* box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05); */
  border: none;
  border-radius: 0.5em;
  overflow: hidden;
}
h6 {
  font-family: "Changa", sans-serif;
  color: #6b7a73;
  font-weight: bold;
}
.sub-title {
  color: #ee9d24;
  font-family: "Annie Use Your Telescope", cursive;
}
.smallPara {
  font-family: "Annie Use Your Telescope", cursive;
  color: #6b7a73;
}
.income {
  background: #ee9d24;
  font-family: "Changa", sans-serif;
  border-radius: 1em;
}
.income span {
  font-size: 0.9em;
  color: #fbfbfb;
}

.outcomes {
  background: #fbfbfb;
  font-family: "Changa", sans-serif;
  border-radius: 1em;
}

.outcomes span {
  color: #6b7a73;
  font-size: 0.9em;
}

.project-statistic span {
  font-family: "Changa", sans-serif;
  font-weight: bold;
}
.project-statistic span:nth-child(1) {
  color: #ee9d24;
}
.project-statistic span:nth-child(2) {
  color: #6b7a73;
}

.task-time {
  color: #ee9d24 !important;
  font-family: "Annie Use Your Telescope", cursive;
}
</style>

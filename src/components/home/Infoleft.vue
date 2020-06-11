<template>
        <div class="row justify-content-center mb-2">
          <transition name="scale1">
            <div v-if="show" class="col-md-5 mx-auto left mt-2"> 
              <div class="row mt-2 justify-content-center align-items-center">
                <div class="col-md-6 p-4"><img src="@/assets/persone.png" class="img-fluid rounded-circle" /></div>
                <div class="col-md-6 p-4 text-center">
                  <span class="w-100 d-block name">hafid id-baha</span>
                  <span class="w-100 details mr-1">+23 Projects</span>
                  <span class="w-100 details ml-1">+100 Tasks</span>
                </div>
              </div>

              <div class="row justify-content-center align-items-center">
                <div class="col-md-12 d-flex justify-content-center">
                    <div class="social-icon p-2 ml-1 mr-1 text-center">
                        <a href="#">
                          <svg viewBox="0 0 512 512" width="20" heigth="20" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#655757"  d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"/></svg>
                        </a>
                    </div>
                    <div class="social-icon p-2 ml-1 mr-1 text-center">
                        <a href="#">
                          <svg viewBox="0 0 512 512" width="20" heigth="20" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#655757" d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/></svg>
                        </a>
                    </div>
                    <div class="social-icon p-2 ml-1 mr-1 text-center">
                        <a href="#">
                          <svg viewBox="0 0 512 512" width="20" heigth="20" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#655757" d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"/></svg>
                        </a>
                    </div>
                    <div class="social-icon p-2 ml-1 mr-1 text-center">
                        <a href="#" >
                          <svg viewBox="0 -91 512 512" width="20" heigth="20" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#655757" d="m166 60c34.667969 0 66.027344 17.789062 84 42.300781l42.597656-42.902343c-25.476562-33.128907-74.511718-59.398438-126.597656-59.398438-91.199219 0-166 73.800781-166 165s74.800781 165 166 165c75.601562 0 139.199219-50.699219 158.699219-120 4.199219-14.402344 6.300781-29.402344 6.300781-45v-15h-150v59.988281h79.5c-16.5 35.402344-52.800781 60.011719-94.5 60.011719-57.898438 0-106-47.101562-106-105s48.101562-105 106-105zm0 0"/>
                          <path fill="#655757" d="m466 90h-60v45h-45v60h45v45h60v-45h46v-60h-46zm0 0"/></svg>
                        </a>
                    </div>
                    
                </div>
              </div>

              <div class="row  about pl-3 pr-3 mt-4">
                <h6>About Me</h6>
                <p>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                </p>
              </div>

              <div class="row hire">
                <div class="col-md-12 mt-4 text-center">
                  <span class="d-block text-center">You Look For Full Stack Devlopper For Your Next Project</span>
                  <a href="#" class="btnhire d-inline-block pt-2 pb-2 pr-4 pl-4 mt-4">Contact Me</a>
                </div>
              </div>
              
            </div>
          </transition>

           <transition name="scale2">
            <b-col v-if="show" class="right mt-xs-4 mt-2" md="6" offset-md="1">
                <div class="row justify-content-center">
                    <div class="col-md-12 mt-2 mb-2">
                        <h6>Interests</h6>
                        <div class="interests-container p-2">
                            <span>this is my first interst</span>
                            <span>this is my secound interst</span>
                            <span>this is my theard interst</span>
                            <span>this is my theard interst</span>
                            <span>this is my theard interst</span>
                            <span>this is my theard interst</span>
                            <span>this is my theard interst</span>
                            
                        </div>
                    </div>
                </div>

                <div class="row projects pl-2 pr-2">
                    <div class="col-md-12 pt-1 pb-1 pl-2 pr-2">
                        <div class="project-container ongo overflow-hidden">
                            <div class="row">
                                <div class="col-md-10  pl-4 pt-2 pb-2">
                                    <h6><a href="#">Project Name</a></h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium nam doloribus corporis fugit temporibus repudiandae, dolor,</p>
                                    <div class="details">
                                        <span class="data">20 Task</span>
                                        <span class="data">On Progresse</span>
                                        <span>S : 20-11-2018</span>
                                        <!-- <span>E : 20-11-2018</span> -->
                                    </div>
                                </div>
                                <div class="col-md-2 position-relative">
                                    <div class="side h-100"><span>On Going</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 pt-1 pb-1 pl-2 pr-2">
                        <div class="project-container completed overflow-hidden">
                            <div class="row">
                                <div class="col-md-10  pl-4 pt-2 pb-2">
                                    <h6><a href="#">Project Name</a></h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium nam doloribus corporis fugit temporibus repudiandae, dolor,</p>
                                    <div class="details">
                                        <span class="data">20 Task</span>
                                        <span class="data">Completed</span>
                                        <span>S : 20-11-2018</span>
                                        <span>E : 20-11-2018</span>
                                    </div>
                                </div>
                                <div class="col-md-2 position-relative">
                                    <div class="side h-100"><span>Completed</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 pt-1 pb-1 pl-2 pr-2">
                        <div class="project-container completed overflow-hidden">
                            <div class="row">
                                <div class="col-md-10  pl-4 pt-2 pb-2">
                                    <h6><a href="#">Project Name</a></h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium nam doloribus corporis fugit temporibus repudiandae, dolor,</p>
                                    <div class="details">
                                        <span class="data">20 Task</span>
                                        <span class="data">Completed</span>
                                        <span>S : 20-11-2018</span>
                                        <span>E : 20-11-2018</span>
                                    </div>
                                </div>
                                <div class="col-md-2 d-none d-md-block position-relative">
                                    <div class="side h-100"><span>Completed</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
           </transition>
        </div>
        
</template>
<script>
export default {
    name:'Infoleft',
    data(){
      return{
        show:false
      }
    },
    methods:{
      
    },
    mounted(){
      this.show = true
    }
}
</script>

<style scoped>
/** animation keys start */
.scale1-enter-active, .scale1-leave-active,
.scale2-enter-active, .scale2-leave-active {
  /* transition: opacity .5s; */
  transform: scale(1);
  transition: all ease-in-out .4s;
}
.scale1-enter-active, .scale1-leave-active{
  transform-origin: center center ;
}
.scale1-enter, .scale1-leave-to,
.scale2-enter, .scale2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}

.scale2-enter-active, .scale2-leave-active{
  transition-delay: .2s !important;
  transform-origin: center center !important ;
  
}





/** animation keys ends */



.right, .left,.interests-container{
  background: #F9F9F9;
  border-radius: 20px;
  min-height: 95vh;
  /* box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05); */
}
.project-container{
    border-radius: 20px;
    border: none;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
}

.project-container.ongo{
  background-color: #ACACAC;
}

.project-container.ongo p,.project-container.ongo h6 a{
  color: #F9F9F9;
}

.project-container .details .data{
    padding-left:8px;
    padding-right:8px;
    border-radius: 10px;
    font-size: 0.9em;
    font-family: 'Annie Use Your Telescope', cursive;
}

.project-container.completed .details .data{
  color: #F9F9F9;
  background:#EE9D24;
}

.project-container.ongo .details .data{
  color: #6B7A73;
  background:#F9F9F9;
}

.project-container .details span{
    margin-right:5px;
    font-size: 0.9em;
    font-family: 'Changa', sans-serif;
}

.project-container.ongo .details span{
    color: #F9F9F9;
}

.project-container .side{
    width: 60px;
    position: absolute;
    right: 0;
    top: 0;
    border-bottom-left-radius: 20px;
}

.project-container.completed .side{
    background: #EE9D24;
}

.project-container.ongo .side{
    background: #F9F9F9;
    color: black !important;
}

.project-container.completed .side{
    color: #F9F9F9;
}

.project-container .side span{
  font-family: 'Annie Use Your Telescope', cursive;
  transform: rotate(-90deg) translateX(-100%);
  display: inline-block;
}

.project-container a{
    color: #6B7A73;
    text-decoration: none;
}

.project-container p{
    font-family: 'Annie Use Your Telescope', cursive;   
}

.interests-container{
    border-radius: 5px;
    min-height: auto;
    max-height: 25vh;
    overflow-x: hidden;
    overflow-y: scroll;
}

.projects{
    max-height: 65vh;
    overflow-x: hidden;
    overflow-y: scroll;
}

.interests-container span{
    color: #F9F9F9;
    background:#EE9D24;
    margin-left:5px;
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    display: inline-block;
    margin-bottom: 5px;
    font-family: 'Changa', sans-serif;
    text-transform: capitalize;
    font-size: 0.9em;
}
.left .name{
  font-family: 'Annie Use Your Telescope', cursive;
  color: #6B7A73;
  font-size: 25px;
}
.left .details{
  font-family: 'Annie Use Your Telescope', cursive;
}
.social-icon{
  width:40px;
  height:40px;
  /* border: 1px solid black; */
  border-radius: 0px 50% 50% 50%;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  transform: translateY(-50);
}

.about h6,h6{
  font-family: 'Changa', sans-serif;
  color: #6B7A73;
}

.about p{
  /* font-family: 'Changa', sans-serif; */
  font-family: 'Annie Use Your Telescope', cursive;
  color: #6B7A73;
}
.hire span{
  font-family: 'Annie Use Your Telescope', cursive;
  color: #6B7A73;
}
.btnhire{
  font-family: 'Changa', sans-serif;
  /* border: 1px solid black; */
  color: #F9F9F9;
  background:#EE9D24;
  text-decoration: none;
  border-radius: 20% 0% 20% 0% /100% 0% 100% 0%;
  font-size: 0.9em;
}
</style>
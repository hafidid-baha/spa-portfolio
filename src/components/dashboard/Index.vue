<template>
    <div class="container">
        <Header title="Home" />
        <div class="row mt-4">
            <transition name="scale">
                <div v-if="show" class="col-md-3">
                    <div class="row pt-2 pb-2 rounded">
                        <div class="col-11 dashProjectItem pt-2 pb-2">
                            <p class="ProjectItemstitle">Projects</p>
                            <div class="col-11">
                                <span class="projectItemCount d-block text-center">201</span>
                            </div>
                            <div class="col-11 text-center">
                                <a href="" class="projectItemLink text-decoration-none" >Manage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            
            <transition name="scale">
                <div v-if="show" class="col-md-3">
                    <div class="row pt-2 pb-2 rounded">
                        <div class="col-11 dashProjectItem pt-2 pb-2">
                            <p class="ProjectItemstitle">Tasks</p>
                            <div class="col-11">
                                <span class="projectItemCount d-block text-center">1020</span>
                            </div>
                            <div class="col-11 text-center">
                                <a href="" class="projectItemLink text-decoration-none" >Manage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="scale">
                <div v-if="show" class="col-md-3">
                    <div class="row pt-2 pb-2 rounded">
                        <div class="col-11 dashProjectItem pt-2 pb-2">
                            <p class="ProjectItemstitle">Ideas</p>
                            <div class="col-11">
                                <span class="projectItemCount d-block text-center">20</span>
                            </div>
                            <div class="col-11 text-center">
                                <a href="" class="projectItemLink text-decoration-none" >Manage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="scale">
                <div v-if="show" class="col-md-3">
                    <div class="row pt-2 pb-2 rounded">
                        <div class="col-11 dashProjectItem pt-2 pb-2">
                            <p class="ProjectItemstitle">Interests</p>
                            <div class="col-11">
                                <span class="projectItemCount d-block text-center">10</span>
                            </div>
                            <div class="col-11 text-center">
                                <a href="" class="projectItemLink text-decoration-none" >Manage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="scale">
            <div v-if="show" class="row">
                <div class="col-12">
                    <hr />
                    <h5 class="lastActivity text-dark">Last Activity</h5>
                </div>
            </div>
        </transition>
        
        <transition name="scale">
            <div v-if="show" class="row mt-4 justify-content-center">
                
                <div class="col-md-3">
                    <div class="row pt-2 pb-2 rounded">
                        <div class="col-11 dashProjectItem pt-2 pb-2">
                            <p class="ProjectItemstitle">Last Project</p>
                            <div class="col-11">
                                <span class="projectItemCount font-normal d-block text-center">C programming langauge</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row pt-2 pb-2 rounded">
                        <div class="col-11 dashProjectItem pt-2 pb-2">
                            <p class="ProjectItemstitle">Last Activity</p>
                            <div class="col-11">
                                <span class="projectItemCount d-block text-center">10-11-2012</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Header from '../Header.vue';
export default {
    name:'Index',
    components:{
        Header
    },
    data(){
        return{
            show:false
        }
    },
    mounted(){
        this.show = true
    }
}
</script>

<style>
.dashProjectItem{
    background: #EE9D24;
    min-height: 130px;
}
.ProjectItemstitle,.projectItemCount,.lastActivity,.projectItemLink{
    font-family: 'Changa', sans-serif !important;
    color: #FBFBFB;
}
.projectItemCount{
    font-size: 2em !important;
}
.projectItemLink{
    /* text-decoration: none !important; */
    color: #FBFBFB !important;
}
.lastActivity{
    text-align:center ;   
}
.font-normal{
    font-size: 1em !important;
}

</style>
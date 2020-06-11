<template>
    <nav class="mt-2 p-0 d-none d-md-block">
        <ul class="p-2 ">
            
            <li class="p-1 mb-2"><router-link to="/Dashboard"><img src="@/assets/home.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Dashboard/Project"><img src="@/assets/toolbox.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Dashboard/Interests"><img src="@/assets/tasks.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Dashboard/Ideas"><img src="@/assets/brain.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Dashboard/Profile"><img src="@/assets/gear.png" class="img-fluid" /></router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'DashNav'
}
</script>

<style scoped>
nav{
    width:50px;
    overflow: hidden;
    left:10px;
    min-height: 60vh;
    /* border: 1px solid black; */
    border-radius: 30px;
    background: #F5F5F5;
    /* box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16); */
    position: fixed;
    z-index: 1000;
}
nav li{
    list-style: none;
}
</style>
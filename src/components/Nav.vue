<template>
    <nav class="mt-2 p-0 d-none d-md-block">
        <ul class="p-2 ">
            <li class="p-1 mb-2"><router-link to="/"><img src="@/assets/home.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Details"><img src="@/assets/wordpress.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Details"><img src="@/assets/html.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Details"><img src="@/assets/laravel.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Details"><img src="@/assets/vue js.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Details"><img src="@/assets/wordpress.png" class="img-fluid" /></router-link></li>
            <li class="p-1 mb-2"><router-link to="/Login"><img src="@/assets/enter.png" class="img-fluid" /></router-link></li>
            
        </ul>
    </nav>
</template>
<script>
export default {
    name:'Nav'
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
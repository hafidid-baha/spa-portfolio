<template>
  <div>
    <div class="container-fluid">
      <DashNav />
      <div class="container mt-2">
        <transition name="route" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import DashNav from "@/components/DashNav.vue";
export default {
  name:'Dashboard',
  components: {
    DashNav,
  }
}
</script>

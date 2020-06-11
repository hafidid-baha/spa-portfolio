<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition name="route" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
@import url('https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@200&display=swap');

body{
  // background: #FBFBFB;
  background: white;
  min-height:100vh ;
}
/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.btn-login{
    border-radius: 20px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 6px rgba(238, 157, 36, 1);
    text-align: center;
    font-family: 'Changa', sans-serif;
    background: #EE9D24;
    color: white;
}

/** animation and routes transitions start */
.route-enter-active, .route-leave-active {
  transition: all .2s;

}
.route-enter, .route-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30%);
}

/** animation and routes transitions ends */

/** animations and transitions */
.scale-enter-active, .scale-leave-active {
  transition: all ease-in-out .2s;
  transition-delay: 0.2s;
  transform: scale(1);
  transform-origin: center bottom;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
  opacity: 0;
}

/** animations and transitions */

</style>

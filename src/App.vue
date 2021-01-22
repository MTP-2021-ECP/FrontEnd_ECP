<template>
  <v-app>
    <MyNavbar />
    <transition name="component-fade" mode="out-in">
       <router-view/>
    </transition>  
    <MyFooter />
  </v-app>
</template>

<script>
import MyNavbar from "./views/layouts/MyNavBar";
import MyFooter from "./views/layouts/MyFooter";


export default {
  name: "App",

  components: {
    MyNavbar,
    MyFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: #eaeded;
  font-family: 'Roboto', sans-serif;
  color: #435f71;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to
{
  opacity: 0;
}
</style>

<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
  },

  created() {
    console.log(window)
    console.log(document)
    
    
      let e = () => {
        
        (e.q = e.q || []).push(arguments);
      };
      (e.q = e.q || []), (window.BotStarApi = e);
      let n = () => {
        let window = document.createElement("script");
        (window.type = "text/javascript"),
          (window.async = !0),
          (window.src = "https://widget.botstar.com/embed/bundle.js");
        let e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(window, e);
      };
      window.attachEvent
        ? window.attachEvent("onload", n)
        : window.addEventListener("load", n, !1);
  },
};
</script>

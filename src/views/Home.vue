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
    !(function(t, a) {
      var e = function() {
        (e.q = e.q || []).push(arguments);
      };
      (e.q = e.q || []), (t.BotStarApi = e);
      var n = function() {
        var t = a.createElement("script");
        (t.type = "text/javascript"),
          (t.async = !0),
          (t.src = "https://widget.botstar.com/embed/bundle.js");
        var e = a.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e);
      };
      t.attachEvent
        ? t.attachEvent("onload", n)
        : t.addEventListener("load", n, !1);
    })(window, document);

    this.BotStarApi("update", {
      user_id: "1b80c408-0e11-46f6-8b0a-7c7022338d29",
      first_name: "Foo",
      last_name: "Boo",
      email: "your@user.email",
    });
  },
};
</script>

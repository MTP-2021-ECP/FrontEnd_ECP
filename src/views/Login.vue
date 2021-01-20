<template>
  <div>
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/LoginComponent.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>

<template>
  <div>
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/RegisterComponent.vue";

export default {
  name: "Home",
  components: {
    Register,
  },
};
</script>

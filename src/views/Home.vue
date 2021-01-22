<template>
  <div>
    <HomeComponent class="mx-auto" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent
  }
};
</script>

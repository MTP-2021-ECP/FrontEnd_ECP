<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/DashboardComponent.vue";

export default {
  name: "Home",
  components: {
    Dashboard,
  },
};
</script>

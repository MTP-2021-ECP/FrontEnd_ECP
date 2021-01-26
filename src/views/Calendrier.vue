<template>
  <div>
    <Calendrier />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendrier from "@/components/CalendrierComponent.vue";

export default {
  name: "Home",
  components: {
    Calendrier,
  },
};
</script>

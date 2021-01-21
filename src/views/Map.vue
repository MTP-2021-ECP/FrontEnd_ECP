<template>
  <div>
    <MapComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "Home",
  components: {
    MapComponent,
  },
};
</script>

<template>
  <flight-info
    v-for="(flight, index) in flightsList"
    :key="index"
    :info="flight"
  />
</template>

<script>
import FlightInfo from "@/components/FlightInfo.vue";
export default {
  name: "FlightsList",
  components: {
    FlightInfo,
  },
  props: {
    flightsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<template>
  <div class="flights">
    <img
      class="main-image"
      src="../assets/images/mainPageImage.jpeg"
      alt="main page image"
    />
    <FlightFilters />
    <FlightsList :items="filteredFlights" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FlightFilters from "@/components/FlightFilters.vue";
import FlightsList from "@/components/FlightsList.vue";
export default {
  name: "FlightsView",
  components: {
    FlightFilters,
    FlightsList,
  },
  computed: {
    ...mapGetters({
      flights: "flights",
    }),
  },
  data() {
    return {
      filteredFlights: [],
    };
  },
  created() {
    this.getFlights().then(() => {
      this.filteredFlights = this.flights;
    });
  },
  methods: {
    ...mapActions({
      getFlights: "getFlights",
    }),
  },
};
</script>

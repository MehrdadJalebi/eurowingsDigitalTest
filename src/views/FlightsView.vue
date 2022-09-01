<template>
  <div class="flights">
    <img
      class="main-image"
      src="../assets/images/mainPageImage.jpeg"
      alt="main page image"
    />
    <div class="container">
      <FlightFilters :items="flights" @filter="filter" />
      <FlightsList :flights-list="filteredFlights" />
    </div>
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
  async created() {
    await this.getFlights();
    this.filteredFlights = this.flights;
  },
  methods: {
    ...mapActions({
      getFlights: "getFlights",
    }),
    filter(val) {
      this.filteredFlights = val;
    },
  },
};
</script>

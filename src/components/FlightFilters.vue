<template>
  <div class="filters">
    <div class="row">
      <div class="col-md-6 col-12">
        <v-select
          class="mb-2"
          placeholder="Departure Airport"
          :options="origins"
          :clearable="false"
        >
        </v-select>
      </div>
      <div class="col-md-6 col-12">
        <v-select
          class="mb-2"
          placeholder="Destination Airport"
          :options="destinations"
          :clearable="false"
        >
        </v-select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-12">
        <input type="text" />
      </div>
      <div class="col-md-3 col-12">
        <input type="text" />
      </div>
      <div class="col-md-3 col-12">
        <input type="text" />
      </div>
      <div class="col-md-3 col-12">
        <button>Search for flight</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VSelect from "vue-select";
export default {
  name: "FlightFilters",
  components: {
    VSelect,
  },
  computed: {
    ...mapGetters({
      origins: "origins",
      destinations: "destinations",
    }),
  },
};
</script>

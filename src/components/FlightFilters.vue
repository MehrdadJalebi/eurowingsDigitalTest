<template>
  <div class="filters">
    <div class="row">
      <div class="col-md-6 col-12">
        <v-select
          class="mb-2"
          :options="['Canada', 'United States']"
          :clearable="false">
        </v-select>
      </div>
      <div class="col-md-6 col-12">
        <v-select
          class="mb-2"
          :options="['Canada', 'United States']"
          :clearable="false">
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
import VSelect from "vue-select";
export default {
  name: "FlightFilters",
  components: {
    VSelect,
  },
  data() {
    return {
      value: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>

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
        <Datepicker
          placeholder="Outgoing Flight"
          :enableTimePicker="false"
          v-model="date"
        >
        </Datepicker>
      </div>
      <div class="col-md-3 col-12">
        <Datepicker
          placeholder="Return Flight"
          :enableTimePicker="false"
          v-model="date"
        >
        </Datepicker>
      </div>
      <div class="col-md-3 col-12">
        <v-select
          class="mb-2"
          placeholder="Offer Type"
          :options="services"
          :clearable="false"
          label="name"
        >
        </v-select>
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
import Datepicker from '@vuepic/vue-datepicker';
export default {
  name: "FlightFilters",
  components: {
    VSelect,
    Datepicker,
  },
  computed: {
    ...mapGetters({
      origins: "origins",
      destinations: "destinations",
      services: "services",
    }),
  },
  data() {
    return {
      date: null,
    };
  }
};
</script>

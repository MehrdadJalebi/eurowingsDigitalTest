<template>
  <div class="filters">
    <div class="row">
      <div class="col-md-6 col-12">
        <v-select
          class="mb-2"
          v-model="departureAirport"
          placeholder="Departure Airport"
          :options="origins"
          :clearable="false"
        >
        </v-select>
      </div>
      <div class="col-md-6 col-12">
        <v-select
          class="mb-2"
          v-model="destinationAirport"
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
          v-model="departureDate"
          placeholder="Outgoing Flight"
          :enableTimePicker="false"
        >
        </Datepicker>
      </div>
      <div class="col-md-3 col-12">
        <Datepicker
          v-model="destinationDate"
          placeholder="Return Flight"
          :enableTimePicker="false"
        >
        </Datepicker>
      </div>
      <div class="col-lg-4 col-md-3 col-12">
        <v-select
          class="mb-2"
          v-model="offerType"
          placeholder="Offer Type"
          :options="services"
          :clearable="false"
          label="name"
        >
        </v-select>
      </div>
      <div class="col-lg-2 col-md-3 col-12 d-flex flex-row">
        <button class="tertiary" @click="onClear">clear</button>
        <button class="secondary" @click="onFilter">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VSelect from "vue-select";
import Datepicker from "@vuepic/vue-datepicker";
export default {
  name: "FlightFilters",
  components: {
    VSelect,
    Datepicker,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      origins: "origins",
      destinations: "destinations",
      services: "services",
    }),
    filtered() {
      return (
        this.departureAirport ||
        this.destinationAirport ||
        this.departureDate ||
        this.destinationDate
      );
    },
  },
  data() {
    return {
      filterItems: [],
      departureAirport: null,
      destinationAirport: null,
      departureDate: null,
      destinationDate: null,
      offerType: null,
    };
  },
  methods: {
    onFilter() {
      let departureAirportArray = [];
      let destinationAirportArray = [];
      let departureDateArray = [];
      let destinationDateArray = [];
      this.items.forEach((item) => {
        if (this.departureAirport && item.origin === this.departureAirport) {
          departureAirportArray.push(item);
        }
        if (
          this.destinationAirport &&
          item.destination === this.destinationAirport
        ) {
          destinationAirportArray.push(item);
        }
        if (
          this.departureDate &&
          item.departureDate.slice(0, 10) ===
            this.departureDate.toISOString().slice(0, 10)
        ) {
          departureDateArray.push(item);
        }
        if (
          this.destinationDate &&
          item.returnDate.slice(0, 10) ===
            this.destinationDate.toISOString().slice(0, 10)
        ) {
          destinationDateArray.push(item);
        }
      });
      let resultArrays = [];
      if (departureAirportArray.length > 0) {
        resultArrays.push(departureAirportArray);
      }
      if (destinationAirportArray.length > 0) {
        resultArrays.push(destinationAirportArray);
      }
      if (departureDateArray.length > 0) {
        resultArrays.push(departureDateArray);
      }
      if (destinationDateArray.length > 0) {
        resultArrays.push(destinationDateArray);
      }
      const filterItems = {
        departureAirport: this.departureAirport,
        destinationAirport: this.destinationAirport,
        departureDate: this.departureDate,
        destinationDate: this.destinationDate,
      };
      const filteredFillItems = Object.values(filterItems).filter((e) => {
        return e !== null;
      });
      if (
        resultArrays.length > 0 &&
        resultArrays.length === filteredFillItems.length
      ) {
        this.filterItems = resultArrays.shift().filter((v) => {
          return resultArrays.every((a) => {
            return a.indexOf(v) !== -1;
          });
        });
      } else {
        this.filterItems = this.filtered ? [] : this.items;
      }
      this.$emit("filter", this.filterItems);
    },
    onClear() {
      this.departureAirport = null;
      this.destinationAirport = null;
      this.departureDate = null;
      this.destinationDate = null;
      this.filterItems = this.items;
      this.$emit("filter", this.filterItems);
    },
  },
};
</script>

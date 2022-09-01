<template>
  <div class="flight-info">
    <div class="left-section">
      <div class="airports">
        <div class="origin-airport">
          <span>{{ flightInfo.origin }}</span>
          <span class="bold-15">{{ flightInfo.departureHour }}</span>
        </div>
        <div class="destination-airport">
          <span>{{ flightInfo.destination }}</span>
          <span class="bold-15">{{ flightInfo.returnHour }}</span>
        </div>
      </div>
      <div class="flight-dates">
        <div class="origin-date">
          <span>Departure Date</span>
          <span class="bold-15">{{ flightInfo.departureDate }}</span>
        </div>
        <div class="destination-date">
          <span>Return Date</span>
          <span class="bold-15">{{ flightInfo.returnDate }}</span>
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="seats low-available" v-if="flightInfo.seatAvailability < 10">
        Only {{ flightInfo.seatAvailability }} seats left
      </div>
      <div class="seats" v-else>
        <span>Seat Availability: {{ flightInfo.seatAvailability }}</span>
      </div>
      <div class="price bold-17">
        {{ flightInfo.price.amount + " " + flightInfo.price.currency }}
      </div>
    </div>
  </div>
  <div class="seats-md d-lg-none d-block">
    <div class="low-available" v-if="flightInfo.seatAvailability < 10">
      Only {{ flightInfo.seatAvailability }} seats left
    </div>
    <div v-else>
      <span>Seat Availability: {{ flightInfo.seatAvailability }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightInfo",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      flightInfo: {},
    };
  },
  watch: {
    info: {
      handler(newVal) {
        if (newVal) {
          this.setFlightHours();
        }
      },
      immediate: true,
    },
  },
  methods: {
    setFlightHours() {
      const departureHour = this.info.departureDate.substr(11, 5);
      const returnHour = this.info.returnDate.substr(11, 5);
      const departureDate = this.info.departureDate.substr(0, 10);
      const returnDate = this.info.returnDate.substr(0, 10);
      this.flightInfo = {
        ...this.info,
        departureHour: departureHour,
        returnHour: returnHour,
        departureDate: departureDate,
        returnDate: returnDate,
      };
    },
  },
};
</script>

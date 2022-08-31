<template>
  <div class="flight-info">
    <div class="left-section">
      <div class="airports">
        <div class="origin-airport">{{ info.origin }}</div>
        <div class="destination-airport">{{ info.destination }}</div>
      </div>
      <div class="flight-dates">
        <div class="origin-date">{{ info.departureDate }}</div>
        <div class="destination-date">{{ info.returnDate }}</div>
      </div>
    </div>
    <div class="right-section">
      <div class="seats">{{ info.seatAvailability }}</div>
      <div class="price-info">
        {{ info.price.amount + info.price.currency }}
      </div>
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
};
</script>

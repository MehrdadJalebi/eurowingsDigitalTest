<template>
  <div class="flight-info">
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

<template>
  <main-header />
  <router-view />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main";
</style>

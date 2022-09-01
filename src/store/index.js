import { createStore } from "vuex";
import { FlightsUrl } from "@/services/urls";
import axios from "axios";

export default createStore({
  state: {
    flights: [],
    origins: [],
    destinations: [],
  },
  getters: {
    flights(state) {
      return state.flights;
    },
    origins(state) {
      return state.origins;
    },
    destinations(state) {
      return state.destinations;
    },
  },
  mutations: {
    setFlights(state, flights) {
      state.flights = flights;
    },
    setOrigins(state, origins) {
      state.origins = origins;
    },
    setDestinations(state, destinations) {
      state.destinations = destinations;
    },
  },
  actions: {
    getFlights(context) {
      return axios.get(FlightsUrl()).then((response) => {
        const flights = response.data.data;
        context.commit("setFlights", flights);
        let origins = [];
        let destinations = [];
        flights.forEach((flight) => {
          if (origins.indexOf(flight.origin) === -1) {
            origins.push(flight.origin);
          }
          if (destinations.indexOf(flight.destination) === -1) {
            destinations.push(flight.destination);
          }
        });
        context.commit("setOrigins", origins);
        context.commit("setDestinations", destinations);
      });
    },
  },
  modules: {},
});

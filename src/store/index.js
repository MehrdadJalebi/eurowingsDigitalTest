import { createStore } from "vuex";
import { FlightsUrl } from "@/services/urls";
import axios from "axios";

export default createStore({
  state: {
    flights: [],
  },
  getters: {
    flights(state) {
      return state.flights;
    },
  },
  mutations: {
    setFlights(state, flights) {
      state.flights = flights;
    },
  },
  actions: {
    getFlights(context) {
      return axios.get(FlightsUrl()).then((response) => {
        context.commit("setFlights", response.data.data);
      });
    },
  },
  modules: {},
});

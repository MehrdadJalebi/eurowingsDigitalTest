import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import vSelect from "vue-select";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios, vSelect, Datepicker)
  .mount("#app");

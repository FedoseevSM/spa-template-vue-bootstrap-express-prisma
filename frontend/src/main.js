// main.ts
import { createApp } from "vue";
import './style.css'
import App from "./App.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BButton } from "bootstrap-vue";

createApp(App)
  .component('b-button', BButton)
  .mount("#app");
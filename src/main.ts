import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";

createApp(App).use(store).use(router).mount("#app");

import { createApp } from "vue";
import "./styles/core.scss";
import App from "./App.vue";
import router from "./routes/routes.js";

const app = createApp(App);

app.use(router);

app.mount("#app");

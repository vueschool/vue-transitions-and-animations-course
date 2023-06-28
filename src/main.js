import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { MotionPlugin } from "@vueuse/motion";

// prettier-ignore
createApp(App)
.use(autoAnimatePlugin)
.use(MotionPlugin)
.mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import "@fortawesome/fontawesome-free/css/all.css";

import * as content from "./content.json";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.prototype.$content = content.default

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

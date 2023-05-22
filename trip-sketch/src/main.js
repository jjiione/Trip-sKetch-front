import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import swal from "sweetalert2";
import Axios from "axios";
window.Swal = swal;
window.axios = Axios;

// import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.use(VueLazyload, {
// 	observer: true,
// 	// optional
// 	observerOptions: {
// 		rootMargin: "0px",
// 		threshold: 0.1,
// 	},
// });

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import swal from "sweetalert2";
import Axios from "axios";
window.Swal = swal;
window.axios = Axios;

  // Import the functions you need from the SDKs you need
import firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	measurementId: process.env.measurementId,
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

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

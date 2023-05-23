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

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
	

	
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

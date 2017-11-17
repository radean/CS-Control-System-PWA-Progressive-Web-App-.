// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// inporting vuetify
import Vuetify from 'Vuetify'
// importing Vue Resource
import VueResource from 'vue-resource'
// importing Firebase
import * as firebase from 'firebase'
// importing Routers
import VueRouter from'vue-router';
import { routes } from './routes';


// using Vuetify
Vue.use(Vuetify);

// using Vue Resource
Vue.use(VueResource);

// using vue-router
Vue.use(VueRouter);

// using Image imageCompressor
// Vue.use(imageCompressor);
// Registring Routes
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.http.options.root = 'https://vdmdb-3d8b4.firebaseio.com';


// Adding Vuetify Css
import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;




// Accesseing Storage
import { store } from './store/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created (){
    firebase.initializeApp({
      apiKey: "AIzaSyDsQvtEgYT_SiYeZ7YXtbAP0MLE1rudkJY",
      authDomain: "bams-e190d.firebaseapp.com",
      databaseURL: "https://bams-e190d.firebaseio.com",
      projectId: "bams-e190d",
      storageBucket: "bams-e190d.appspot.com",
      messagingSenderId: "110309011275"
    });
  }
})

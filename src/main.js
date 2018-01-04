// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// importing Vuelidate
import VeeValidate from 'vee-validate'
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
Vue.use(Vuetify,{
  theme: {
    primary: '#ff0000',
      secondary: '#b0bec5',
  }
});
Vue.use(VeeValidate);
// using Vue Resource
Vue.use(VueResource);
// Setting HTTP
// Vue.http.headers.common['Content-Type'] = 'application/json';
// Vue.http.headers.common['Authorization'] = 'key=AIzaSyDOUy35eMYN7woRgGdiRw0ypeShbHMDxgM';
// using vue-router
Vue.use(VueRouter);

// using Image imageCompressor
// Vue.use(imageCompressor);
// Registring Routes
const router = new VueRouter({
  routes,
  mode: 'history'
});

// Adding Vuetify Css
import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;

// ENABLEING OFFLINE DATA

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

// ====================
//  PUSH NOTIFICATION
// ====================
const messaging = firebase.messaging();
let topicName = 'alert';
messaging.requestPermission().then(() => {
  console.log('Have Permission');
  return messaging.getToken()
})
  .then((token) => {
  if (token){

    let url = 'https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topicName;
    console.log(url)
    Vue.http.post(url,{},{
      headers: {'Authorization': 'key=AIzaSyDOUy35eMYN7woRgGdiRw0ypeShbHMDxgM'}
    })
  } else {
  }
})
  .catch((err) => {
  console.log(err)
})

messaging.onMessage((payload) => {
  let data = payload
  store.dispatch('onNotification', data);
})


// ===================

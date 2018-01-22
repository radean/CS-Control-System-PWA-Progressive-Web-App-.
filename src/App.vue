<template>
  <v-app dark>
    <v-layout>
      <v-content transition="fade-transition">
        <!--<v-fade-transition>-->
        <router-view></router-view>
        <!--</v-fade-transition>-->
      </v-content>
    </v-layout>
    <v-footer class="pa-3" dark>
      <div>{{ appdata.name }} {{appdata.version}}</div>
      <v-spacer></v-spacer>
      <div> VDM™ {{ new Date().getFullYear() }}</div>
      <v-snackbar
        v-model="successFlag"
        :top="true"
        class="green"
        dark
      >
        {{ successMsg }}
        <v-btn flat color="white" @click.native="successFlag = false">Close</v-btn>
      </v-snackbar>
      <v-dialog v-model="notificationUI" persistent >
        <v-card class="gradientDialog" dark>
          <v-card-title class="headline">{{ notiTitle }}</v-card-title>
          <v-card-text>{{ onNotification }}<br> From Admin
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="notificationUI = false">Acknowledged</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-footer>
  </v-app>
</template>

<script>

//  Importing components
  import Header from './components/Temp/Header.vue'
  import Login from './components/Auth/Login.vue'
  import ShopList from './components/AppMain/ShopList.vue'
  import ShopDetail from './components/AppMain/ShopDetail.vue'


export default {
  name: 'app',
  data() {
      return {
        selectedComponent: 'app-shoplist',
//        Notification
        notificationUI: false,
        notiTitle: '',
//        Application Data
        appTitle: 'LOGIN',
        helpDialog: false,
        users: [],
        resource: {}
      }
  },
  computed: {
    appdata () {
      return this.$store.getters.appinfo;
    },
    userInfo(){
      return this.$store.getters.userInfo;
    },
    user(){
      return this.$store.getters.user
    },
    onNotification(){
      let noti = this.$store.getters.notification;
      let notiBody = noti.body
      this.notiTitle = noti.title;
      console.log('Result', this.notiTitle);
      if (noti.title !== null){
        this.notificationUI = true;
      }
      setTimeout(() => {
        this.notificationUI = false;
      },10000)
      return notiBody;
    },
    successMsg(){
      return this.$store.getters.successMsg
    },
    successFlag(){
      return this.$store.getters.successFlag
    },
    checkConnection(){
      return this.$store.getters.connectionStat;
    },
  },
  watch: {
    userInfo (value){
      if (value !== null && value !== undefined) {
        this.$router.push('/storelist');
//        switch (this.userInfo.role) {
//          case "Supervisor":
//            this.$router.push('/shoplist');
//            break;
//
//          case "BrandAmbassador":
//              let storeData = {
//                storeid: this.userInfo.storeId,
//                storeName: this.userInfo.name,
//                storeLocation: this.userInfo.address
//              };
//              this.$store.dispatch('setStoreId', storeData);
//            this.$router.push('/shopdetailba');
//            break;
//        }
      } else {
        this.$router.push('/');
      }
    },
  },
  created(){
    let header = 'LOGIN';
    this.$store.dispatch('appHeader', header);
    this.$store.dispatch('connectionRef');
    this.$store.dispatch('userSession');

  },
  components: {
    //Temporary Components
    'app-header-main': Header,
    'app-login': Login,
    'app-shoplist': ShopList,
    'app-shopdetail': ShopDetail,
  }
}
</script>

<style>
  /*importing Font*/
  @import url('https://fonts.googleapis.com/css?family=Marvel');
  /*Applying Font*/
  body {
    font-family: 'Marvel', sans-serif;
    /*background: url("../static/img/bg/bg.jpg") left  fixed;*/
    background: #000428;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .gradientDialog{
    background: #000428;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  #app {
    background: transparent;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  form {
    margin: 0px; padding: 0px; width: 100%;
  }
</style>

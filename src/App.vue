<template>
  <v-app>
    <v-layout>
      <v-content transition="fade-transition">
        <!--<v-fade-transition>-->
        <router-view></router-view>
        <!--</v-fade-transition>-->
      </v-content>
    </v-layout>
    <v-footer class="pa-3" fixed light>
      <div>{{ appdata.name }}</div>
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
    successMsg(){
      return this.$store.getters.successMsg
    },
    successFlag(){
      return this.$store.getters.successFlag
    }
  },
  watch: {
    userInfo (value){
      if (value !== null && value !== undefined) {
        switch (this.userInfo.role) {
          case "Supervisor":
            this.$router.push('/shoplist');
            break;

          case "BrandAmbassador":
              let storeData = {
                storeid: this.userInfo.storeId,
                storeName: this.userInfo.name,
                storeLocation: this.userInfo.address
              };
              this.$store.dispatch('setStoreId', storeData);
            this.$router.push('/shopdetailba');
            break;
        }
      }
//      if (value !== null && value !== undefined && this.userInfo.role === "Supervisor"){
//        console.log("User is Supervisor");
//        this.$router.push('/shoplist')
//      }else if(value !== null && value !== undefined && this.userInfo.role === "BrandAmbassador");
//      console.log("User is Brand Ambassador");
//      this.$router.push('/shopdetail')
    }
  },
  created(){
    this.$store.dispatch('userSession');
//    if(this.userInfo.role === "Supervisor"){
//      console.log('SP');
//    }else if(this.userInfo.role === "BrandAmbassador"){
////        if user is B.A then redirect him to store detail page
//      console.log('BA');
//      this.$router.push('/shopdetail')
//    }
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
  body {
    background: url("../static/img/bg/bg.jpg") left repeat-y fixed;
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

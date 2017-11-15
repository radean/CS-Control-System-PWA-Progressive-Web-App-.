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
      <div>BAMS™ Node</div>
      <v-spacer></v-spacer>
      <div> VDM™ {{ new Date().getFullYear() }}</div>
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
    gettingInfo(){
//      this.userinfo.password = parseInt(this.$store.state.userpass);
//      this.userinfo.name = this.$store.state.username;
//      this.authorizing();
    }
  },
  methods: {
  },
  created(){
      const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          getData: {method: 'GET'}
    };
      this.resource = this.$resource('merchandiser.json', {}, customActions);
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
    background: url("../static/img/bg/bg.jpg") left repeat-y;
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

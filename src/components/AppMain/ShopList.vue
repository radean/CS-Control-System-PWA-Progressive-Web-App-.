<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mb-5 align-center" >
        <app-header></app-header>
        <v-subheader>STORE LIST | {{ dateChanged }}</v-subheader>
        <v-divider></v-divider>
        <!--Vuetify Circle Loader-->
        <v-progress-circular  v-if="pageLoading" indeterminate v-bind:size="70" v-bind:width="2" color="red"></v-progress-circular>
        <app-shoListEnum v-else="pageLoading" v-for="shop in shops" :key="shop.id" :shopList="shop" ></app-shoListEnum>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  //  importing Temps
  import Header from '../Temp/Header.vue'
  import ShopListEnum from '../AppMain/Enums/ShopListEnum.vue'


export default {
  data () {
    return {
      currentDate: '',
      drawer: false,
      appTitle: '',
      today: '',
      pageLoading: true,
    }
  },
  computed: {
    dateChanged(){
       return this.currentDate = new Date().toDateString() ;
    },
    shops(){
        return this.$store.getters.shops
    },
    appData(){
        return this.$store.getters.appinfo
    },
  },
  components:{
    'app-header': Header,
    'app-shoListEnum': ShopListEnum
  },
  created(){
    if (this.$store.getters.user === null){
      this.$router.push('/')
    }else{
      setTimeout(() => {
//        fetching current Date to get unvisited stores
      let today;
      this.$http.get('https://api.timezonedb.com/v2/list-time-zone?key=QNVJJL9QLWE4&format=json&country=PK').then(response => {
        let date = new Date((response.body.zones[0].timestamp * 1000) - response.body.zones[0].gmtOffset * 1000);
        let day = ("0" + date.getDate()).slice(-2) ;
        let month = date.getMonth() + 1;
        today = month + '-' + day;
        this.$store.dispatch('shopsListUPD', today).then(() => {
            setTimeout(() => {
              this.pageLoading = false;
            },2000)
        });
      }).catch(() => {
        let date = new Date();
        let hours = date.getHours();
        let day = ("0" + date.getDate()).slice(-2);
        let month = date.getMonth() + 1;
        let minutes = "0" + date.getMinutes();
        this.currentDate = month + '-' + day;
        this.currentTime = hours + ':' + minutes.substr(-2)
        //    generating Variable
        this.visits[this.currentDate] = 'done';
        this.$store.dispatch('shopsListUPD', today).then(() => {
          setTimeout(() => {
            this.pageLoading = false;
          },2000)
        });
      });
      },2000)
    }
  },

}
</script>

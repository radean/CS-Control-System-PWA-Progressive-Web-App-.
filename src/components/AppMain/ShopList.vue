<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mb-5" >
        <app-header></app-header>
        <v-subheader>STORE LIST | {{ dateChanged }}</v-subheader>
        <v-divider></v-divider>
        <app-shoListEnum v-for="shop in shops" :key="shop.id" :shopList="shop" ></app-shoListEnum>
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
      today: ''
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
      this.$http.get('http://api.timezonedb.com/v2/list-time-zone?key=QNVJJL9QLWE4&format=json&country=PK').then(response => {
        let date = new Date((response.body.zones[0].timestamp * 1000) - response.body.zones[0].gmtOffset * 1000);
        let day = ("0" + date.getDate()).slice(-2) ;
        let month = date.getMonth() + 1;
        today = month + '-' + day;
        this.$store.dispatch('shopsListUPD', today);
      });
      },2000)
    }
  },

}
</script>

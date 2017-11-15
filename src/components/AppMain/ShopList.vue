<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mb-5" >
        <app-header></app-header>
        <v-subheader>STORE LIST | {{ dateChanged }}</v-subheader>
        <v-divider></v-divider>
        <app-shoListEnum v-for="shop in shops" :key="shop.id" :shopList="shop" ></app-shoListEnum>
      </v-card>
      <v-card v-if="appData.mode === 'Supervisor'" color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div class="headline">Unlimited music now</div>
          <div>To check if supervisor Mode or BA</div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat dark>Listen now</v-btn>
        </v-card-actions>
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
    }
  },
  components:{
    'app-header': Header,
    'app-shoListEnum': ShopListEnum
  },
  created(){
    if (this.$store.getters.user === null){
      this.$router.push('/')
    }else{
      this.$store.dispatch('shopsListUPD');
    }
  },

}
</script>

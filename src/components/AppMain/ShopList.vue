<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mb-5">
        <app-header></app-header>
        <v-subheader>STORE LIST | {{ dateChanged }}</v-subheader>
        <v-divider></v-divider>
        <app-shoListEnum v-for="shop in shops" :key="shop.id" :shopList="shop" ></app-shoListEnum>
      </v-card>
    </v-flex>
    <!--Navigation Bar-->


    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
      width="240"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="static/img/icons/favicon-32x32.png" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>MCS™ NODE CP</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> Report a bug</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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

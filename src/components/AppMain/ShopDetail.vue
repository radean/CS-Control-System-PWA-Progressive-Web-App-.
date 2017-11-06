<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <app-header></app-header>
      <app-shopDetail-Enum v-for="store in storeDetail" :key="store.id" :store="store"></app-shopDetail-Enum>
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
//  importing Components
import Header from '../Temp/Header.vue'
import shopDetailEnum from './Enums/ShopDetailEnum.vue'
export default {
  data () {
    return {
      date: '265',
      drawer: false,
    }
  },
  computed: {
      storeDetail(){
          return this.$store.getters.storeDetail
      }
  },
  components:{
      'app-header': Header,
      'app-shopDetail-Enum':shopDetailEnum
  },
  created(){
    if (this.$store.getters.user === null){
      this.$router.push('/')
    }
    this.$store.dispatch('fetchShopDetails');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alphaTrans {
    background: rgba(255,255,255,0.2);
  }

</style>

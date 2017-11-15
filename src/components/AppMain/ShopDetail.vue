<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <app-header></app-header>
      <app-shopDetail-Enum v-for="store in storeDetail" :key="store.id" :store="store"></app-shopDetail-Enum>

    </v-flex>
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
      supervisorMode: false,
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

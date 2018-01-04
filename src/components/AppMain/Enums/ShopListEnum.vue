<template>
  <div>
    <!--Content After Loading-->
    <v-list two-line>
        <v-list-tile ripple to="/shopdetail" v-on:click="setStoreId()" class="alphaTrans">
          <v-list-tile-avatar>
            <v-icon large color="black">store</v-icon>
          </v-list-tile-avatar>
          <!---->
          <v-list-tile-content>
            <v-list-tile-title> {{ shopList.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ shopList.location }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <!---->
          <v-list-tile-action>
            <v-btn icon >
              <v-icon color="grey lighten-1" right >arrow_forward</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
  //  importing Temps


  export default {
    data () {
      return {
//          dateChanged: ''
      }
    },
    methods:{
        setStoreId(){
          let storeData = {
                storeid: this.shopList.id,
                storeName: this.shopList.name,
                storeLocation: this.shopList.location
              };
          this.$store.dispatch('setStoreId', storeData)
        }
    },
    computed:{
        changeStore(){
            console.log(this.storeid)
        }
    },
    props: ['shopList']
  }
</script>

<style scoped>
  ul {
    padding-bottom: 0;
    padding-top: 0;
    background: rgba(255,255,255,0.2);
  }
  .alphaTrans {
    background: rgba(255,255,255,0.2);
  }
</style>

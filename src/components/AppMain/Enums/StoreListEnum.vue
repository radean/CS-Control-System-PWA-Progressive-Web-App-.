<template>
  <div>
    <!--Content After Loading-->
    <v-list two-line>
        <v-list-tile ripple to="/storedetail" v-on:click="setStoreId()" class="alphaTrans">
          <v-list-tile-avatar>
            <v-icon large color="white">store</v-icon>
          </v-list-tile-avatar>
          <!---->
          <v-list-tile-content>
            <v-list-tile-title> {{ storeList.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ storeList.address }}</v-list-tile-sub-title>
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
                storeid: this.storeList.id,
                storeName: this.storeList.name,
                storeAddress: this.storeList.address
              };
          this.$store.dispatch('setStoreId', storeData)
        }
    },
    computed:{
        changeStore(){
            console.log(this.storeid)
        }
    },
    props: ['storeList']
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

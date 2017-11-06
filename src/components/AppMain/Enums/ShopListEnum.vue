<template>
    <v-list two-line>
        <v-list-tile ripple to="/shopdetail" v-on:click="setStoreId()">
          <v-list-tile-avatar>
            <img src="static/img/icons/applicant.png">
          </v-list-tile-avatar>
          <!---->
          <v-list-tile-content>
            <v-list-tile-title>{{ shopList.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ shopList.location }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <!---->
          <v-list-tile-action>
            <v-btn icon >
              <v-icon color="grey lighten-1" right >arrow_forward</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      <v-divider><</v-divider>
    </v-list>
</template>

<script>
  //  importing Temps


  export default {
    data () {
      return {
//          dateChanged: ''
        storeid: this.shopList.id,
      }
    },
    methods:{
        setStoreId(){
          this.$store.dispatch('setStoreId', this.storeid);
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

<template>
  <v-container text-xs-center>
    <app-header></app-header>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 style="margin: 0px">Registration</h4>
      </v-flex>

      <form @submit.prevent="onSignUp" class="mb-5">

      <!--username-->
      <v-flex xs10 offset-xs1>
        <v-text-field
          required
          name="emailId"
          label="E-MAIL"
          v-model="useremail"
        ></v-text-field>
      </v-flex>
      <!--password-->
      <v-flex xs10 offset-xs1>
        <v-text-field
          required
          name="userPassword"
          label="PASSCODE"
          min="6"
          v-model="userpass"
          :type="'password'"
        ></v-text-field>
      </v-flex>
      <!--username-->
      <v-flex xs10 offset-xs1>
      <v-text-field
        required
        name="userId"
        label="USERNAME"
        id="testing"
        v-model="userInfo.name"
      ></v-text-field>
      </v-flex>
      <!-- Location -->
      <v-flex xs10 offset-xs1>
        <v-text-field
          required
          name="userLocation"
          label="ADDRESS"
          min="6"
          v-model="userInfo.address"
        ></v-text-field>
      </v-flex>
      <!-- Role -->
      <v-flex xs10 offset-xs1>
        <v-select
          v-bind:items="roles"
          v-model="userInfo.role"
          label="ROLE"
          single-line
          bottom
        ></v-select>
      </v-flex>
        <!-- Assign Store -->
        <v-flex xs10 offset-xs1>
          <v-select
            v-if="checkRole"
            v-bind:items="availableStores"
            v-model="userInfo.assignStore"
            label="ASSIGN STORE"
            single-line
            :loading="availableStoreLoading"
            bottom
          ></v-select>
        </v-flex>
      <!--submission-->
      <v-flex xs12>
        <v-btn :disabled="!formIsValid" type="submit" >SUBMIT <v-icon right>send</v-icon></v-btn>
      </v-flex>
      <v-flex xs12>
        <v-btn small color="red" dark to="/">Cancel</v-btn>
      </v-flex>

      </form>

    </v-layout>
  </v-container>
</template>

<script>
//  importing Temps
import Header from '../Temp/Header.vue'
export default {
  data () {
    return {
//    UI Data
//    setting Loading on Selector
      availableStoreLoading: false,
      roles: [
        'Administrator',
        'BrandAmbassador',
        'Supervisor'
      ],
      availableStores: [
      ],
//    =============
      appTitle: 'LOGIN',
//    userInfo
      userInfo:{
        name: '',
        address: '',
        role: '',
        assignStore: ''
      },
      useremail: '',
      userpass: '',
    }
  },
  computed: {
//      Validating Fields
    formIsValid(){
        return this.useremail !== '' && this.userInfo.name !== '' && this.userInfo.role !== '' && this.userpass !== ''
    },
    checkRole(){
        return this.userInfo.role === 'BrandAmbassador';
    },
    user (){
        return this.$store.getters.user
    }
  },
  watch: {
  },
  mounted(){
    this.$store.dispatch('shopsListUPD');
    this.availableStoreLoading = true;
    setTimeout(() => {
//  dispatch Order to retrieve Current store List
      this.populateStoreList();
      this.availableStoreLoading = false;
    },6000);
  },
  methods:{
    onSignUp() {
        this.$store.dispatch('userSignUp', {email: this.useremail, password: this.userpass, user: this.userInfo})
    },
    populateStoreList(){
//      Converting Firebase Raw Returns to Vialable Form
      let obj = this.$store.getters.shops;
      let convert = Object.keys(obj).map((key) => {
        return obj[key].name
      });
//  Storing to Application
        this.availableStores = convert;
    },
  },
  components:{
      'app-header': Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .bordered {
    border: 4px solid #eee;
  }
  form {
    margin: 0px; padding: 0px; width: 100%;
  }
</style>

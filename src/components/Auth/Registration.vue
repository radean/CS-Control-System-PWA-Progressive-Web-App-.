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
          id="testing"
          v-model="useremail"
        ></v-text-field>
      </v-flex>
      <!--vdm key-->
      <v-flex xs10 offset-xs1>
        <v-text-field
          required
          name="v_key"
          label="V-KEY"
          id="testing"
          min="6"
          v-model="v_key"
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
        v-model="username"
      ></v-text-field>
    </v-flex>
      <!--password-->
      <v-flex xs10 offset-xs1>
        <v-text-field
          required
          name="userPassword"
          label="PASSCODE"
          id="testing"
          min="6"
          v-model="userpass"
          :type="'password'"
        ></v-text-field>
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
      appTitle: 'LOGIN',
//      userInfo
      useremail: '',
      username: '',
      v_key: '',
      userpass: '',
    }
  },
  computed: {
//      Validating Fields
    formIsValid(){
        return this.useremail !== '' && this.username !== '' && this.v_key !== '' && this.userpass !== '' && this.v_key == 2648
    },
    user (){
        return this.$store.getters.user
    }
  },
  watch: {
    user (value){
        if (value !== null && value !== undefined){
            this.$router.push('/')
        }
    }
  },
  methods:{
    onSignUp() {
        this.$store.dispatch('userSignUp', {email: this.useremail, password: this.userpass})
    }
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

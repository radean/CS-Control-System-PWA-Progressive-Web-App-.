<template>
  <v-container text-xs-center>
    <app-header></app-header>
    <v-layout row wrap>
      <v-flex xs12>
        <v-avatar :tile="false" :size="'128px'" class="grey lighten-4 ma-1">
          <img class="bordered" src="../../assets/placeholder.jpg" alt="avatar">
        </v-avatar>
      </v-flex><form @submit.prevent="onSignIn">
      <!--username-->
      <v-flex xs10 offset-xs1>
        <v-text-field
          v-validate="'required|email'"
          :error="errors.has('email')"
          name="email"
          autocomplete="username"
          label="E-MAIL"
          class="form-control letter-small"
          type="text"
          v-model="useremail"
        >
        </v-text-field>
      </v-flex>
      <!--password-->
      <v-flex xs10 offset-xs1>
        <v-text-field
          v-validate="'required|min:6|max:12'"
          :error="errors.has('password')"
          name="password"
          label="PASSCODE"
          autocomplete="current-password"
          min="6"
          v-model="userpass"
          type="password"
        >
        </v-text-field>
      </v-flex>
      <!--submission-->
      <v-flex xs12>
        <v-btn color="green" :disabled="!formIsValid" type="submit"> SUBMIT <v-icon right>send</v-icon></v-btn>
      </v-flex>
      <!--Registration -->
      <v-flex xs12>
        <h6>Tap info button at top left of the screen for help.</h6>
        <!--<img align-center src="../../assets/BAMSlogob.png"  />-->
      </v-flex>
      <!--<v-flex xs12>-->
        <!--<v-btn small color="white" to="Registration">Registration</v-btn>-->
      <!--</v-flex>-->
      <!--<v-flex xs12>-->
        <!--<v-btn small color="red" >Forgotten Pass</v-btn>-->
      <!--</v-flex>-->
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
      userpass: '',
    }
  },
  computed: {
    formIsValid(){
      return this.username !== '' && this.userpass !== ''
    },
  },
  created(){
    this.$store.dispatch('userSession');
  },
  methods:{
    onSignIn() {
      this.$store.dispatch('userSignIn', {email: this.useremail, password: this.userpass})
    }
  },
  components:{
      'app-header': Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    text-transform: lowercase;
  }
  .bordered {
    border: 4px solid #eee;
  }
</style>

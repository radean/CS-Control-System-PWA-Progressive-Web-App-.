<template>
  <v-layout row justify-center>
  <v-toolbar fixed app :color="appdata.theme" dark >
      <v-btn icon v-on:click="helpDialog = !helpDialog">
        <v-icon>info</v-icon>
      </v-btn>
    <v-toolbar-title>{{ appdata.header.name }}</v-toolbar-title>
  </v-toolbar>
    <v-dialog v-model="helpDialog" persistent>
      <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
      <v-card>
        <v-card-title class="headline">Help & Contact</v-card-title>
        <v-card-text>Email: help@vdm.com.pk<br>Phone #: (021)-85432156</v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" @click.native="onSignOut">LogOut</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="helpDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--Loading Dialog-->
    <v-dialog v-model="loading.mainLoading" persistent >
      <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
      <v-card dark>
        <v-card-title class="headline">Please Wait </v-card-title>
        <v-card-text>if this query taking more than 30 seconds contact VDM.</v-card-text>
        <v-container>
          <v-layout row wrap center>
            <v-flex xs2 offset-xs5>
              <v-progress-circular indeterminate v-bind:size="50" color="amber"></v-progress-circular>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <!--Errors-->
    <!--Merchandiser Sign in Error-->
    <v-dialog v-model="appError" persistent >
      <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
      <v-card>
        <v-card-title class="headline">Authorization Error</v-card-title>
        <v-card-text>Please double check your Username and Password.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat>Wait 5 seconds</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
//        Errors
      errorText: 'Please Check your Username & Password.',
//      App Info
      app: [],
//      loadings:{
//        app: loading.mainLoading,
//        compressor: 0,
//      },
      helpDialog: false,
    }
  },
  methods:{
    onSignOut(){
      this.$store.dispatch('userSignOut');
      this.$router.push('/')
    }
  },
  computed: {
    appdata() {
      return this.$store.getters.appinfo;
    },
    userInfo(){
      return this.$store.getters.userInfo;
    },
    loading(){
      return this.$store.getters.loadingState
    },
    appError(){
      return this.$store.getters.userError
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

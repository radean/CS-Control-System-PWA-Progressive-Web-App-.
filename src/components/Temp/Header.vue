<template>
  <v-layout row justify-center>
  <v-toolbar fixed app :color="appdata.theme" dark >
      <v-btn icon v-on:click="helpDialog = !helpDialog">
        <v-icon>info</v-icon>
      </v-btn>
    <v-toolbar-title>{{ appdata.header.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon slot="activator">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-menu :nudge-width="60" v-if="userInfo">
      <v-btn icon slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile @click.native="pmDialog = !pmDialog">
          <v-list-tile-title>P.M</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click.native="onSignOut">
          <v-list-tile-title >Log Out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
    <v-dialog v-model="helpDialog" persistent>
      <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
      <v-card>
        <v-card-title class="headline">Help & Contact</v-card-title>
        <v-card-text>Email: help@vdm.com.pk<br>Phone #: (021) 34546491<br>
          -----------------------------<br>
          Change Log<br>
          -----------------------------<br>
          + Header Menu <br>
          + Absent Button <br>
          + Field reset after submission <br>
          + Works offline for sessions <br>
          + Text field re-placement <br>
          + Notification Alerts <br>
          F Order of Fields. <br>
          F Null Entries <br>
          F Disconnect Badge <br>
          F Reset Fields <br>
          F Field color change <br>
          - Incerception Field <br>
          - Unused options removed <br>

          ----------------------------------------------------------<br>
          NOTE: IF YOU EXPERIENCE ANY ERROR PLEASE NOTIFY WITH P.M
          ----------------------------------------------------------<br>
        </v-card-text>
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
    <!--B.A Sign in Error-->
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
    <!--B.A report post Error-->
    <v-snackbar
      v-model="reportErrorFlag"
      :top="true"
      class="red"
      dark
    >
      {{ errorMsg }}
      <v-btn flat color="white" @click.native="reportErrorFlag = false">Close</v-btn>
    </v-snackbar>
    <!-- REPORTS -->
    <!--Messages from B.As-->
    <v-dialog v-model="pmDialog" persistent >
      <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
      <v-card>
        <v-card-title class="headline">Message to Admin</v-card-title>
        <v-card-text>Type your message Below
          <v-text-field
            name="msg"
            label="Message"
            v-model="msg"
            maxlength="160"
            multi-line
            :counter="160"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat v-on:click="pmDialog = !pmDialog">cancel</v-btn>
          <v-btn color="red darken-1" flat v-on:click="onPMsend">Send</v-btn>
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
      reportErrorFlag: false,
      errorMsg: 'operation Failed',
//      App Info
      loggedIn: false,
      pmDialog: false,
      msg: '',
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
    },
    onPMsend(){
//    Initialization
      let value = this.msg
//    Sent to State
      this.$store.dispatch('pushMessages', value).then(() => {

      });
//    Close Dialog
      this.pmDialog = false;
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
    },
    snickError(){
      let source = this.$store.getters.snickError
      this.reportErrorFlag = source.state;
      this.errorMsg = source.msg
      return true
    },
    userInfo(){
      let fetch = this.$store.getters.userInfo
      if (fetch !== null && fetch !== undefined) {
        return true
      } else{
        return false
      }

    }
  },
//  watch: {
//    userInfo (value){
//      if (value !== null && value !== undefined) {
//        this.loggedIn = true;
//      } else{
//        this.loggedIn = false;
//      }
//    }
//  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

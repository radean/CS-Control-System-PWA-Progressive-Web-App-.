<template>
  <v-layout row justify-center>
  <v-toolbar fixed app color="red accent-4" dark>
      <v-btn icon v-on:click="helpDialog = !helpDialog">
        <v-icon>info</v-icon>
      </v-btn>
    <v-toolbar-title>MCS™ NODE</v-toolbar-title>
  </v-toolbar>
    <v-dialog v-model="helpDialog" persistent>
      <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
      <v-card>
        <v-card-title class="headline">Help & Contact</v-card-title>
        <v-card-text>Email: help@vdm.com.pk<br>Phone #: (021)-85432156</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="helpDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      appTitle: '',
      helpDialog: false
    }
  },
  computed: {
    appTitlechanged () {
        this.appTitle = this.$store.state.username;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

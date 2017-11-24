<template>
  <v-container fill-height fluid class="mb-2">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center >
        <div class="caption red ma-0 pa-0 white--text">DISCONNECTED</div>
        <div class="title ma-0 pa-0">CUSTOMER ENTRY</div>
      </v-flex>
      <form @submit.prevent="onSubmitDetails">





        <!--<v-layout row wrap v-if="!baMode">-->
          <!--<v-flex xs4 text-xs-center >-->
            <!--<v-card ripple>-->
              <!--&lt;!&ndash;image&ndash;&gt;-->
              <!--<div style="height:0px;overflow:hidden">-->
              <!--<input-->
                <!--type="file"-->
                <!--id="shopPicture"-->
                <!--name="shoppicture"-->
                <!--accept="image/*"-->
                <!--@change="onShopPicture"-->
              <!--/>-->
            <!--</div>-->
              <!--<v-card-media raised :src="storePic" height="64" v-on:click="chooseFile('shopPicture')"></v-card-media>-->
            <!--</v-card>-->
            <!--&lt;!&ndash;Title&ndash;&gt;-->
              <!--<h6 class="caption ma-2">SHOP PICTURE</h6>-->
          <!--</v-flex>-->

          <!--<v-flex xs4 text-xs-center fluid>-->
            <!--<v-card ripple>-->
              <!--&lt;!&ndash;image&ndash;&gt;&lt;!&ndash;image&ndash;&gt;<div style="height:0px;overflow:hidden">-->
              <!--<input-->
                <!--type="file"-->
                <!--id="baPicture"-->
                <!--name="baPicture"-->
                <!--accept="image/*"-->
                <!--@change="onbaPicture"-->
              <!--/>-->
            <!--</div>-->
              <!--<v-card-media raised :src="baPicture" height="64" v-on:click="chooseFile('baPicture')"></v-card-media>-->
            <!--</v-card>-->
            <!--&lt;!&ndash;title&ndash;&gt;-->
              <!--<h6 class="caption ma-2">B.A PICTURE</h6>-->
          <!--</v-flex>-->
          <!--<v-flex xs4 text-xs-center >-->
            <!--<v-card ripple>-->
              <!--<div style="height:0px;overflow:hidden">-->
              <!--<input-->
                <!--type="file"-->
                <!--id="shelfPicture"-->
                <!--name="shelfPicture"-->
                <!--accept="image/*"-->
                <!--@change="onShelfPicture"-->
              <!--/>-->
            <!--</div>-->
              <!--<v-card-media raised :src="shelfPicture" height="64" v-on:click="chooseFile('shelfPicture')"></v-card-media>-->
            <!--</v-card>-->
            <!--&lt;!&ndash;title&ndash;&gt;-->
              <!--<h6 class="caption ma-2">SHELF PICTURE</h6>-->
          <!--</v-flex>-->
        <!--</v-layout>-->




      <!--Basic Information-->
      <v-flex xs12 text-xs-center >
          <v-list style="background: transparent;">
            <!--Customers Name-->
            <v-list-tile class="alphaTrans">
              <v-list-tile-content>
                <v-text-field
                  name="customer'sName"
                  label="CUSTOMER'S NAME"
                  v-model="customerName"
                  type="text"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>
            <!--Customer Contact-->
            <v-list-tile class="alphaTrans">
              <v-list-tile-content>
                <v-text-field
                  name="ContactNumber"
                  label="CONTACT NUMBER"
                  v-model="customerContactNumber"
                  type="number"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>

      <!--Timing of Submittion-->
      <v-flex xs12 text-xs-center >
        <div class="title ma-0 pa-0">{{ currentTime }}</div>
      </v-flex>
        <!--Heading of Content-->
      <v-flex xs12 text-xs-center >
        <div class="subheading">SKU's PURCHASED</div>
        <div class="body-1">Soya Supreme Cooking Oil</div>
      </v-flex>

      <!--Stock Update-->
        <!--Soya supreme Cooking Oil-->
        <div class="title alphaPanel" >BOTTLE</div>
        <v-layout row wrap class="alphaPanel">
            <!--1 Ltr-->
            <v-flex xs5>
              <v-text-field
                suffix="piece"
                name="bottle_1ltr"
                label="1Ltr"
                v-model="soyaSupremeStock.sscbottle1ltr"
                tabindex="1"
                placeholder="0"
                type="number"
              ></v-text-field>
            </v-flex>
            <!--3 Ltr-->
            <v-flex xs5>
              <v-text-field
                suffix="piece"
                name="bottle_3ltr"
                label="3 Ltr"
                v-model="soyaSupremeStock.sscbottle3ltr"
                tabindex="2"
                placeholder="0"
                type="number"
              ></v-text-field>
            </v-flex>
            <v-flex xs5>
              <v-text-field
                suffix="piece"
                name="bottle5ltr"
                label="5 Ltr"
                v-model="soyaSupremeStock.sscbottle5ltr"
                tabindex="3"
                placeholder="0"
                type="number"
              ></v-text-field>
            </v-flex>
        </v-layout>

        <div class="title alphaPanel" >POLY</div>
        <v-layout row wrap class="alphaPanel">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.sscpoly1_5ltr"
              tabindex="4"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >Press & Pour</div>
        <v-layout row wrap class="alphaPanel">
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="3 Ltr"
              v-model="soyaSupremeStock.sscpresspour3ltr"
              tabindex="5"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle5ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.sscpresspour5ltr"
              tabindex="6"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel">
          <!--2.5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="2.5 Ltr"
              v-model="soyaSupremeStock.ssctin2_5ltr"
              tabindex="7"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssctin5ltr"
              tabindex="8"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle5ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.ssctin10ltr"
              tabindex="9"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >J.CAN</div>
        <v-layout row wrap class="alphaPanel">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.sscjcan10ltr"
              tabindex="10"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--16 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="16 Ltr"
              v-model="soyaSupremeStock.sscjcan16ltr"
              tabindex="11"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>


        <!--=====================================-->



        <!--Smart Canola Oil-->
        <v-flex xs12 text-xs-center >
          <div class="title">Smart Canola Oil</div>
        </v-flex>

        <div class="title marginFields" >BOTTLE</div>
        <v-layout row wrap class="marginFields">
          <!--1 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1Ltr"
              v-model="soyaSupremeStock.scbottle1ltr"
              tabindex="12"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--3 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="3 Ltr"
              v-model="soyaSupremeStock.scbottle3ltr"
              tabindex="13"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle5ltr"
              label="4.5 Ltr"
              v-model="soyaSupremeStock.scbottle4_5ltr"
              tabindex="14"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title marginFields" >POLY</div>
        <v-layout row wrap class="marginFields">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.scpoly1_5ltr"
              tabindex="15"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title marginFields" >J.CAN</div>
        <v-layout row wrap class="marginFields">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.scjcan10ltr"
              tabindex="16"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--16 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="16 Ltr"
              v-model="soyaSupremeStock.scjcan16ltr"
              tabindex="17"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->


        <!--Soya Supreme Banaspati-->
        <v-flex xs12 text-xs-center >
          <div class="title alphaPanel"> SS Banaspati</div>
        </v-flex>

        <div class="title alphaPanel" >POLY</div>
        <v-layout row wrap class="alphaPanel">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.ssbpoly1_5ltr"
              tabindex="18"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="2.5 Ltr"
              v-model="soyaSupremeStock.ssbtin10ltr"
              tabindex="19"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--16 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssbtin16ltr"
              tabindex="20"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->


        <!--Soya Supreme Banaspati Olive Oil-->
        <v-flex xs12 text-xs-center >
          <div class="title marginFields"> Banaspati with Olive Oil </div>
        </v-flex>

        <div class="title marginFields" >POLY</div>
        <v-layout row wrap class="marginFields">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.ssbopoly1_5ltr"
              tabindex="21"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title marginFields" >TIN</div>
        <v-layout row wrap class="marginFields">
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssbotin5ltr"
              tabindex="22"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--25 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="2.5 Ltr"
              v-model="soyaSupremeStock.ssbotin25ltr"
              tabindex="23"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->


        <v-flex xs12 text-xs-center class="mb-4">
          <!--<v-btn raised large color="black" dark to="/shoplist"><v-icon>chevron_left</v-icon> BACK </v-btn>-->
          <v-btn raised large color="green" :disabled="!formIsValid" dark type="submit"> SUBMIT REPORT <v-icon right>send</v-icon></v-btn>
        </v-flex><br>
      </form>
      <!--Compressor Loading-->
      <v-dialog v-model="compressing" persistent >
        <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
        <v-card dark>
          <v-card-title class="headline">Compressing</v-card-title>
          <v-card-text>This should take less than a minute</v-card-text>
          <v-container>
            <v-layout row wrap center>
              <v-flex xs2 offset-xs5>
                <v-progress-circular indeterminate v-bind:size="50" color="amber"></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout><br>
  </v-container>
</template>

<script>
//  importing Image Library
  import ImageCompressor from '@xkeshi/image-compressor';

export default {
  data () {
    return {
//      Loading
      compressing: false,
//      App
      baMode: false,
      currentTime: 0,
      baNames: [],
      visits: {},
      options: {
        quality: 0.1,
      },
//      Basic Info
      customerName: null,
      customerContactNumber: null,
//      REF
      storePic: '/static/img/app/placeholder.png',
      baPicture: '/static/img/app/placeholder.png',
      shelfPicture: '/static/img/app/placeholder.png',
//      REF DATA
      storePicImg: null,
      baPictureImg: null,
      shelfPictureImg: null,
//      stock Report
      currentDate: '',
      interceptions: '',
//      soya supreme cooking oil
      soyaSupremeStock: {
        sscbottle1ltr: '',
        sscbottle3ltr: '',
        sscbottle5ltr: '',
        sscpoly1_5ltr: '',
        ssctin2_5ltr: '',
        ssctin5ltr: '',
        ssctin10ltr: '',
        sscpresspour3ltr: '',
        sscpresspour5ltr: '',
        sscjcan10ltr: '',
        sscjcan16ltr: '',
//      smart canola oil
        scbottle1ltr: '',
        scbottle3ltr: '',
        scbottle4_5ltr: '',
        scpoly1_5ltr: '',
        sctin2_5ltr: '',
        scjcan10ltr: '',
        scjcan16ltr: '',
//      soya supreme banaspati
        ssbpoly1_5ltr: '',
        ssbtin10ltr: '',
        ssbtin16ltr: '',
//      soya supreme banaspati with Olive Oil
        ssbopoly1_5ltr: '',
        ssbotin5ltr: '',
        ssbotin25ltr: '',
      },
    }
  },
  computed: {
    formIsValid(){
      return this.customerContactNumber !== '' && this.customerName !== ''
    },
//    checkConnection(){
//      return this.$store.getters.userInfo.connection;
//    },
    userInfo(){
      return this.$store.getters.userInfo;
    }
  },
  methods:{
//    converting Object to list array
    chooseFile(field) {
        document.getElementById(field).click();
    },
//    Changing Shop Images
//    Getting Raw Files
    onShopPicture(event){
//     Declaring Compressor
      //set Loading FALSE
      this.compressing = true;
      const imageCompressor = new ImageCompressor();
      const files = event.target.files[0];
      imageCompressor.compress(files,{
        quality: 0.6
      }).then((result) => {
        let imagename = result.filename;
        const fileReader = new FileReader();
        //adding Event listener. when file change
        fileReader.addEventListener('load', () => {
          this.storePic = fileReader.result
        })
        fileReader.readAsDataURL(result)
        this.storePicImg = result
        //set Loading FALSE
        this.compressing = false;
      })
    },
    onbaPicture(event){
      //set Loading FALSE
      this.compressing = true;
      const imageCompressor = new ImageCompressor();
      const files = event.target.files[0];
      imageCompressor.compress(files,{
        quality: 0.6
      }).then((result) => {
        let imagename = result.filename;
        const fileReader = new FileReader();
//      adding Event listener. when file change
        fileReader.addEventListener('load', () => {
          this.baPicture = fileReader.result
        })
        fileReader.readAsDataURL(result)
        this.baPictureImg = result
        //set Loading FALSE
        this.compressing = false;
      })
    },
    onShelfPicture(event){
      //set Loading FALSE
      this.compressing = true;
      const imageCompressor = new ImageCompressor();
      const files = event.target.files[0];
      imageCompressor.compress(files,{
        quality: 0.6
      }).then((result) => {
        let imagename = result.filename;
        const fileReader = new FileReader();
//      adding Event listener. when file change
        fileReader.addEventListener('load', () => {
          this.shelfPicture = fileReader.result
        })
        fileReader.readAsDataURL(result)
        this.shelfPictureImg = result
        //set Loading FALSE
        this.compressing = false;
      })
    },
//    Getting files and compressing


//    submitting Form Data
    onSubmitDetails(){

//    making an object for payload
      const report = {
        storename: this.store.name,
        storeid: this.store.id,
        purchased: this.soyaSupremeStock,
        customerContact: this.customerContactNumber,
        customerName: this.customerName,
        date: this.currentDate,
      };
      this.$store.dispatch('pushStoreReport', report).then(response => {
          console.log('Sent to state')
      })
    }
  },
  created () {
//      Checking user role
    switch (this.userInfo.role) {
      case "Supervisor":
        this.baMode = false;
        this.$router.push('/shoplist');
        break;

      case "BrandAmbassador":
        this.baMode = true;
        break;
    }
//      setting Informations
    setTimeout(() =>{
      let obj = this.$store.getters.baList;
      let convert = Object.keys(obj).map((key) => {
        return obj[key].name
      })
      this.baNames = convert;
      this.$http.get('http://api.timezonedb.com/v2/list-time-zone?key=QNVJJL9QLWE4&format=json&country=PK').then(response => {
        let date = new Date((response.body.zones[0].timestamp * 1000) - response.body.zones[0].gmtOffset * 1000);
        let hours = date.getHours();
        let day = date.getDate() ;
        let month = date.getMonth() + 1;
        let minutes = "0" + date.getMinutes();
        this.currentDate = month + '-' + day;
        this.currentTime = hours + ':' + minutes.substr(-2)
        //    generating Variable
        this.visits[this.currentDate] = 'done';
      });
    }, 1000)
  },
  props: ['store']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alphaTrans {
    background: rgba(255,255,255,0.2);
  }
  .alphaPanel {
    background: rgba(5,5,5,0.1);
    padding: 10px;
  }
  .alphaPanel div {
    margin: 5px
  }
  .marginFields {
    padding: 10px;
  }
  .marginFields div {
    margin: 5px
  }
  form {
    margin: 0px; margin-top: 5%; padding: 0px; width: 100%; height: fit-content;
  }

</style>

<!--//        sscbottle1ltr: soyaSupremeStock.sscbottle1ltr,-->
<!--//        sscbottle3ltr: soyaSupremeStock.,-->
<!--//        sscbottle5ltr: soyaSupremeStock.,-->
<!--//        sscpoly1_5ltr: soyaSupremeStock.,-->
<!--//        ssctin2_5ltr: soyaSupremeStock.,-->
<!--//        ssctin5ltr: soyaSupremeStock.,-->
<!--//        ssctin10ltr: soyaSupremeStock.,-->
<!--//        sscpresspour3ltr: soyaSupremeStock.,-->
<!--//        sscpresspour5ltr: soyaSupremeStock.,-->
<!--//        sscjcan10ltr: soyaSupremeStock.,-->
<!--//        sscjcan16ltr: soyaSupremeStock.,-->
<!--////      smart canola oil-->
<!--//        scbottle1ltr: soyaSupremeStock.,-->
<!--//        scbottle3ltr: soyaSupremeStock.,-->
<!--//        scbottle4_5ltr: soyaSupremeStock.,-->
<!--//        scpoly1_5ltr: soyaSupremeStock.,-->
<!--//        sctin2_5ltr: soyaSupremeStock.,-->
<!--//        scjcan10ltr: soyaSupremeStock.,-->
<!--//        scjcan16ltr: soyaSupremeStock.,-->
<!--////      soya supreme banaspati-->
<!--//        ssbpoly1_5ltr: soyaSupremeStock.,-->
<!--//        ssbtin10ltr: soyaSupremeStock.,-->
<!--//        ssbtin16ltr: soyaSupremeStock.,-->
<!--////      soya supreme banaspati with Olive Oil-->
<!--//        ssbopoly1_5ltr: soyaSupremeStock.,-->
<!--//        ssbotin5ltr: soyaSupremeStock.,-->
<!--//        ssbotin25ltr: soyaSupremeStock.,-->

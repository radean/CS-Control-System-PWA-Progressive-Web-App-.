<template>
  <v-container fill-height fluid class="mb-2">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center >
        <div class="title ma-0 pa-0">PICTURE UPDATE</div>
      </v-flex>

      <form @submit.prevent="onSubmitDetails">
        <v-layout row wrap>
          <v-flex xs4 text-xs-center >
            <v-card ripple>
              <!--image-->
              <div style="height:0px;overflow:hidden">
              <input
                type="file"
                id="shopPicture"
                name="shoppicture"
                accept="image/*"
                @change="onShopPicture"
              />
            </div>
              <v-card-media raised :src="storePic" height="64" v-on:click="chooseFile('shopPicture')"></v-card-media>
            </v-card>
            <!--Title-->
              <h6 class="caption ma-2">SHOP PICTURE</h6>
          </v-flex>

          <v-flex xs4 text-xs-center fluid>
            <v-card ripple>
              <!--image--><!--image--><div style="height:0px;overflow:hidden">
              <input
                type="file"
                id="baPicture"
                name="baPicture"
                accept="image/*"
                @change="onbaPicture"
              />
            </div>
              <v-card-media raised :src="baPicture" height="64" v-on:click="chooseFile('baPicture')"></v-card-media>
            </v-card>
            <!--title-->
              <h6 class="caption ma-2">B.A PICTURE</h6>
          </v-flex>
          <v-flex xs4 text-xs-center >
            <v-card ripple>
              <div style="height:0px;overflow:hidden">
              <input
                type="file"
                id="shelfPicture"
                name="shelfPicture"
                accept="image/*"
                @change="onShelfPicture"
              />
            </div>
              <v-card-media raised :src="shelfPicture" height="64" v-on:click="chooseFile('shelfPicture')"></v-card-media>
            </v-card>
            <!--title-->
              <h6 class="caption ma-2">SHELF PICTURE</h6>
          </v-flex>
        </v-layout>

      <!--Basic Information-->
      <v-flex xs12 text-xs-center >
          <v-list style="background: transparent;">
            <!--B.A Name-->
            <v-list-tile class="alphaTrans">
              <v-list-tile-content>
                <v-text-field
                  name="baName"
                  label="B.A NAME"
                  v-model="baName"
                  type="text"
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
        <div class="subheading">STOCK UPDATE</div>
        <div class="body-1">Soya Supreme Cooking Oil</div>
      </v-flex>

      <!--Stock Update-->
        <!--Soya supreme Cooking Oil-->
        <div class="title alphaPanel" >BOTTLE</div>
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
            <!--1 Ltr-->
            <v-flex xs3>
              <v-text-field
                suffix="piece"
                name="bottle_1ltr"
                label="1Ltr"
                v-model="soyaSupremeStock.sscbottle1ltr"
                tabindex="1"
                type="number"
              ></v-text-field>
            </v-flex>
            <!--3 Ltr-->
            <v-flex xs4>
              <v-text-field
                suffix="piece"
                name="bottle_3ltr"
                label="3 Ltr"
                v-model="soyaSupremeStock.sscbottle3ltr"
                tabindex="2"
                type="number"
              ></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-text-field
                suffix="piece"
                name="bottle5ltr"
                label="5 Ltr"
                v-model="soyaSupremeStock.sscbottle5ltr"
                tabindex="3"
                type="number"
              ></v-text-field>
            </v-flex>
        </v-layout>

        <div class="title alphaPanel" >POLY</div>
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.sscpoly1_5ltr"
              tabindex="4"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >Press & Pour</div>
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="3 Ltr"
              v-model="soyaSupremeStock.sscpresspour3ltr"
              tabindex="5"
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
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
          <!--2.5 Ltr-->
          <v-flex xs3>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="2.5 Ltr"
              v-model="soyaSupremeStock.ssctin2_5ltr"
              tabindex="7"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--5 Ltr-->
          <v-flex xs4>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssctin5ltr"
              tabindex="8"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--10 Ltr-->
          <v-flex xs3>
            <v-text-field
              suffix="piece"
              name="bottle5ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.ssctin10ltr"
              tabindex="9"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >J.CAN</div>
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.sscjcan10ltr"
              tabindex="10"
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
        <v-layout row wrap class="marginFields pa-0 ma-0">
          <!--1 Ltr-->
          <v-flex xs3>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1Ltr"
              v-model="soyaSupremeStock.scbottle1ltr"
              tabindex="12"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--3 Ltr-->
          <v-flex xs4>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="3 Ltr"
              v-model="soyaSupremeStock.scbottle3ltr"
              tabindex="13"
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs3>
            <v-text-field
              suffix="piece"
              name="bottle5ltr"
              label="4.5 Ltr"
              v-model="soyaSupremeStock.scbottle4_5ltr"
              tabindex="14"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title marginFields" >POLY</div>
        <v-layout row wrap class="marginFields pa-0 ma-0">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.scpoly1_5ltr"
              tabindex="15"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title marginFields" >J.CAN</div>
        <v-layout row wrap class="marginFields pa-0 ma-0">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.scjcan10ltr"
              tabindex="16"
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
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.ssbpoly1_5ltr"
              tabindex="18"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel pa-0 ma-0">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="2.5 Ltr"
              v-model="soyaSupremeStock.ssbtin5ltr"
              tabindex="19"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--16 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssbtin25ltr"
              tabindex="20"
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
        <v-layout row wrap class="marginFields pa-0 ma-0">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1x5 Ltr"
              v-model="soyaSupremeStock.ssbopoly1_5ltr"
              tabindex="21"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="title marginFields" >TIN</div>
        <v-layout row wrap class="marginFields pa-0 ma-0">
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssbotin5ltr"
              tabindex="22"
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
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->

        <!--Unlocker-->
        <v-flex xs12 text-xs-center>
          <v-btn raised color="purple" :disabled="!validAbsent" outline dark v-on:click="submitAbsent"> B.A Absent <v-icon right>send</v-icon></v-btn>
        </v-flex>
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
      baName: '',
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
        sscbottle1ltr: null,
        sscbottle3ltr: null,
        sscbottle5ltr: null,
        sscpoly1_5ltr: null,
        ssctin2_5ltr: null,
        ssctin5ltr: null,
        ssctin10ltr: null,
        sscpresspour3ltr: null,
        sscpresspour5ltr: null,
        sscjcan10ltr: null,
        sscjcan16ltr: null,
//      smart canola oil
        scbottle1ltr: null,
        scbottle3ltr: null,
        scbottle4_5ltr: null,
        scpoly1_5ltr: null,
//        sctin2_5ltr: null,
        scjcan10ltr: null,
        scjcan16ltr: null,
//      soya supreme banaspati
        ssbpoly1_5ltr: null,
        ssbtin5ltr: null,
        ssbtin25ltr: null,
//      soya supreme banaspati with Olive Oil
        ssbopoly1_5ltr: null,
        ssbotin5ltr: null,
        ssbotin25ltr: null,
      },
    }
  },
  computed: {
    formIsValid(){
      return this.storePicImg !== null
    },
    userInfo(){
      return this.$store.getters.userInfo;
    },
    validAbsent(){
        if (this.baName === 'Absent' || this.baName === 'absent'){
          return true;
        } else{
          return false;
        }
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

//    On Absent
    submitAbsent () {
      //    making an object for payload
      const storeData = {
        storename: this.store.name,
        storeid: this.store.id,
        soyaSupremeStock: this.soyaSupremeStock,
        interceptions: this.interceptions,
        baName: this.baName,
        date: this.currentDate,
        visits: this.visits,
//        images
        storePicImg: this.storePicImg,
        baPictureImg: this.baPictureImg,
        shelfPictureImg: this.shelfPictureImg,
      };
      this.$store.dispatch('pushStoreData', storeData).then(response => {
        this.$router.push('/shoplist')
      })
    },
//    On Present
    onSubmitDetails(){
        let stock = this.soyaSupremeStock;
        let filtered = {};
      for (let key in stock){
        if (stock[key] == '' || stock[key] == null){
          filtered[key] = 0
        } else {
          filtered[key] = stock[key]
        }
      }
//    making an object for payload
      const storeData = {
        storename: this.store.name,
        storeid: this.store.id,
        soyaSupremeStock: filtered,
        interceptions: this.interceptions,
        baName: this.baName,
        date: this.currentDate,
        visits: this.visits,
//        images
        storePicImg: this.storePicImg,
        baPictureImg: this.baPictureImg,
        shelfPictureImg: this.shelfPictureImg,
      };
      this.$store.dispatch('pushStoreData', storeData).then(response => {
          this.$router.push('/shoplist')
      })
    }
  },
  created () {
//      Checking user role
    switch (this.userInfo.role) {
      case "Supervisor":
        this.baMode = false;
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
      this.$http.get('https://api.timezonedb.com/v2/list-time-zone?key=QNVJJL9QLWE4&format=json&country=PK').then(response => {
        let date = new Date((response.body.zones[0].timestamp * 1000) - response.body.zones[0].gmtOffset * 1000);
        let hours = date.getHours();
        let day = ("0" + date.getDate()).slice(-2);
        let month = date.getMonth() + 1;
        let minutes = "0" + date.getMinutes();
        this.currentDate = month + '-' + day;
        this.currentTime = hours + ':' + minutes.substr(-2)
        //    generating Variable
        this.visits[this.currentDate] = 'done';
      }).catch(() => {
        let date = new Date();
        let hours = date.getHours();
        let day = ("0" + date.getDate()).slice(-2);
        let month = date.getMonth() + 1;
        let minutes = "0" + date.getMinutes();
        this.currentDate = month + '-' + day;
        this.currentTime = hours + ':' + minutes.substr(-2)
        //    generating Variable
        this.visits[this.currentDate] = 'done';
      });
      this.pageLoading = false;
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

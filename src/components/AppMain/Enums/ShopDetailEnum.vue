<template>
  <v-container fill-height fluid class="mb-2">
    <v-layout row wrap>
      <v-flex xs12 md12 text-xs-center>
        <h6 class="subheading">{{ store.name }} | {{ store.id }} | {{ store.location }}</h6>
      </v-flex><br>
      <form @submit.prevent="onSubmitDetails">
        <v-layout row wrap>
          <v-flex xs4 text-xs-center >
            <v-card ripple>
              <!--image--><div style="height:0px;overflow:hidden">
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
            <!--title-->
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
              <v-card-media raised :src="baPicture" height="64" v-on:click="chooseFile('beforeStock')"></v-card-media>
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
              <v-card-media raised :src="shelfPicture" height="64" v-on:click="chooseFile('afterStock')"></v-card-media>
            </v-card>
            <!--title-->
              <h6 class="caption ma-2">SHELF PICTURE</h6>
          </v-flex>
        </v-layout>

      <!--Basic Information-->
      <v-flex xs12 text-xs-center >
          <v-list style="background: transparent;">
            <!--Interception-->
            <v-list-tile class="alphaTrans">
              <v-list-tile-content>
                <v-text-field
                  suffix="times"
                  name="interception"
                  label="INTERCEPTIONS"
                  v-model="interceptions"
                  tabindex="1"
                  placeholder="0"
                  type="number"
                  hint="Type number of items of this category"
                ></v-text-field>
              </v-list-tile-content>
            </v-list-tile>
            <!--B.A Name-->
            <v-list-tile class="alphaTrans">
              <v-list-tile-content>
                <v-select
                  v-bind:items="baNames"
                  v-model="sel_ba"
                  label="Select"
                  single-line
                  bottom
                ></v-select>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>

      <!--Timing of Submittion-->
      <v-flex xs12 text-xs-center >
        <div class="title ma-0 pa-0">{{ currentTime }}</div>
      </v-flex>
      <v-flex xs12 text-xs-center >
        <div class="subheading">STOCK UPDATE</div>
        <div class="body-1">Soya Supreme Cooking Oil</div>
      </v-flex>

      <!--Stock Update-->
        <!--Soya supreme Cooking Oil-->
        <div class="body-1 alphaPanel" >BOTTLE</div>
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
                tabindex="1"
                placeholder="0"
                type="number"
              ></v-text-field>
            </v-flex>
        </v-layout>

        <div class="body-1 " >POLY</div>
        <v-layout row wrap class="marginFields">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1.5 Ltr"
              v-model="soyaSupremeStock.sscpoly1_5ltr"
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel">
          <!--2.5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="2.5 Ltr"
              v-model="soyaSupremeStock.ssctin2_5ltr"
              tabindex="1"
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
              tabindex="2"
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
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 marginFields" >J.CAN</div>
        <v-layout row wrap class="marginFields">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.sscjcan10ltr"
              tabindex="1"
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
              tabindex="2"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 alphaPanel" >Press & Pour</div>
        <v-layout row wrap class="alphaPanel">
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="3 Ltr"
              v-model="soyaSupremeStock.sscpresspour3ltr"
              tabindex="2"
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
              tabindex="1"
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

        <div class="body-1 alphaPanel" >BOTTLE</div>
        <v-layout row wrap class="alphaPanel">
          <!--1 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1Ltr"
              v-model="soyaSupremeStock.scbottle1ltr"
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
              v-model="soyaSupremeStock.scbottle3ltr"
              tabindex="2"
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
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 " >POLY</div>
        <v-layout row wrap class="marginFields">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1.5 Ltr"
              v-model="soyaSupremeStock.scpoly1_5ltr"
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 marginFields" >J.CAN</div>
        <v-layout row wrap class="marginFields">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.scjcan10ltr"
              tabindex="1"
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
              tabindex="2"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->


        <!--Soya Supreme Banaspati Oil-->
        <v-flex xs12 text-xs-center >
          <div class="title"> Banaspati Oil</div>
        </v-flex>

        <div class="body-1" >POLY</div>
        <v-layout row wrap class="marginFields">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1.5 Ltr"
              v-model="soyaSupremeStock.ssbpoly1_5ltr"
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel">
          <!--10 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="10 Ltr"
              v-model="soyaSupremeStock.ssbtin10ltr"
              tabindex="1"
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
              v-model="soyaSupremeStock.ssbtin16ltr"
              tabindex="2"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->


        <!--Soya Supreme Banaspati Olive Oil-->
        <v-flex xs12 text-xs-center >
          <div class="title"> Banaspati Olive Oil</div>
        </v-flex>

        <div class="body-1" >POLY</div>
        <v-layout row wrap class="marginFields">
          <v-flex xs6 text-xs-center >
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="1.5 Ltr"
              v-model="soyaSupremeStock.ssbopoly1_5ltr"
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div class="body-1 alphaPanel" >TIN</div>
        <v-layout row wrap class="alphaPanel">
          <!--5 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_1ltr"
              label="5 Ltr"
              v-model="soyaSupremeStock.ssbotin5ltr"
              tabindex="1"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
          <!--25 Ltr-->
          <v-flex xs5>
            <v-text-field
              suffix="piece"
              name="bottle_3ltr"
              label="25 Ltr"
              v-model="soyaSupremeStock.ssbotin25ltr"
              tabindex="2"
              placeholder="0"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--=====================================-->


        <v-flex xs12 text-xs-center class="mb-4">
          <v-btn raised large color="black" dark to="/shoplist"><v-icon>chevron_left</v-icon> BACK </v-btn>
          <v-btn raised large color="green" :disabled="!formIsValid" dark type="submit"> DONE <v-icon right>send</v-icon></v-btn>
        </v-flex><br>
      </form>
    </v-layout><br>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
//      App
      currentTime: 0,
      baNames: [],
//      Basic Info
      sel_ba: '',
//      REF
      storePic: '/static/img/app/placeholder.png',
      baPicture: '/static/img/app/placeholder.png',
      shelfPicture: '/static/img/app/placeholder.png',
//      REF DATA
      storePicImg: null,
      baPictureImg: null,
      shelfPictureImg: null,
//      stock Report
      storeId: '',
      storeName: '',
      storeArea: '',
      interceptions: 0,
//      soya supreme cooking oil
      soyaSupremeStock: {
        sscbottle1ltr: 0,
        sscbottle3ltr: 0,
        sscbottle5ltr: 0,
        sscpoly1_5ltr: 0,
        ssctin2_5ltr: 0,
        ssctin5ltr: 0,
        ssctin10ltr: 0,
        sscpresspour3ltr: 0,
        sscpresspour5ltr: 0,
        sscjcan10ltr: 0,
        sscjcan16ltr: 0,
//      smart canola oil
        scbottle1ltr: 0,
        scbottle3ltr: 0,
        scbottle4_5ltr: 0,
        scpoly1_5ltr: 0,
        sctin2_5ltr: 0,
        scjcan10ltr: 0,
        scjcan16ltr: 0,
//      soya supreme banaspati
        ssbpoly1_5ltr: 0,
        ssbtin10ltr: 0,
        ssbtin16ltr: 0,
//      soya supreme banaspati with Olive Oil
        ssbopoly1_5ltr: 0,
        ssbotin5ltr: 0,
        ssbotin25ltr: 0,
      },
    }
  },
  computed: {
    formIsValid(){
      return this.uhtPlainSmall !== '' &&  this.uhtPlainBig !== '' && this.fmChocolate !== '' && this.fmPistaZafran !== '' && this.fmStrawberry !== '' && this.storePicImg !== null && this.storeStockBeforeImg !== null && this.storeStockAfterImg !== null
    },
    setBaNames(){
      let obj = this.$store.getters.baList;
      let convert = Object.keys(obj).map((key) => {
          return obj[key].name
      })
      this.baNames = convert;
    }

  },
  created () {
//      setting Informations
    this.storeName = this.store.name;
    this.storeArea = this.store.location;
    this.storeId = this.store.id;
    setTimeout(() =>{
        this.$http.get('http://api.timezonedb.com/v2/list-time-zone?key=QNVJJL9QLWE4&format=json&country=PK').then(response => {
        let date = new Date(response.body.zones[0].timestamp * 1000);
        let hours = date.getHours() - 5;
        let minutes = "0" + date.getMinutes();
        this.currentTime = hours + ':' + minutes.substr(-2)
      });
        console.log('done')
    }, 1000)
  },
  methods:{
    chooseFile(field) {
        document.getElementById(field).click();
    },
//    Changing Shop Images
    onShopPicture(event){
      const files = event.target.files
      let imagename = files[0].filename
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
          this.storePic = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.storePicImg = files[0]
    },
    onbaPicture(event){
      const files = event.target.files
      let imagename = files[0].filename
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.baPicture = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.baPictureImg = files[0]
    },
    onShelfPicture(event){
      const files = event.target.files
      let imagename = files[0].filename
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.shelfPicture = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.shelfPictureImg = files[0]
    },


//    submitting Form Data
    onSubmitDetails(){
      const storeData = {
        storename: this.store.name,
        storeid: this.store.id,
        uhtPlainBig: this.uhtPlainBig,
        uhtPlainSmall: this.uhtPlainSmall,
        fmChocolate: this.fmChocolate,
        fmPistaZafran: this.fmPistaZafran,
        fmStrawberry: this.fmStrawberry,
        date: new Date(),
//        images
        storePicImg: this.storePicImg,
        storeStockBeforeImg: this.baPictureImg,
        storeStockAfterImg: this.shelfPictureImg,
      };
      this.$store.dispatch('pushStoreData', storeData).then(response => {
          if(this.$store.getters.mainLoading === false){
            this.$router.push('/shoplist')
          }
      })
    }
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
  }
  .alphaPanel div {
    margin: 5px
  }
  .marginFields {
    margin: 5px
  }
  .marginFields div {
    margin: 5px
  }
  form {
    margin: 0px; margin-top: 5%; padding: 0px; width: 100%; height: fit-content;
  }

</style>

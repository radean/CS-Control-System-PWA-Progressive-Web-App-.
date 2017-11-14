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
                id="beforeStock"
                name="beforestock"
                accept="image/*"
                @change="onBeforeStock"
              />
            </div>
              <v-card-media raised :src="storeStockBefore" height="64" v-on:click="chooseFile('beforeStock')"></v-card-media>
            </v-card>
            <!--title-->
              <h6 class="caption ma-2">BEFORE STOCK</h6>
          </v-flex>
          <v-flex xs4 text-xs-center >
            <v-card ripple>
              <div style="height:0px;overflow:hidden">
              <input
                type="file"
                id="afterStock"
                name="afterstock"
                accept="image/*"
                @change="onAfterStock"
              />
            </div>
              <v-card-media raised :src="storeStockAfter" height="64" v-on:click="chooseFile('afterStock')"></v-card-media>
            </v-card>
            <!--title-->
              <h6 class="caption ma-2">AFTER STOCK</h6>
          </v-flex>
        </v-layout>

      <!--Timing of Submittion-->
      <v-flex xs12 text-xs-center >
        <div class="title ma-0 pa-0">{{ currentTime }}</div>
      </v-flex>
      <v-flex xs12 text-xs-center >
        <div class="title">STOCK UPDATE</div>
      </v-flex>

      <!--Stock Update-->
      <v-flex xs12 text-xs-center >
        <v-list style="background: transparent;">
          <!--UHT Plain-->
          <v-list-tile class="alphaTrans">
            <v-list-tile-content>
              <v-text-field
                suffix="Piece(s)"
                name="uht-Plain-1000ml"
                label="UHT PLAIN 1000ML"
                v-model="uhtPlainBig"
                tabindex="1"
                placeholder="0"
                type="number"
                hint="Type number of items of this category"
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <!--uht-Plain-250ml-->
          <v-list-tile>
            <v-list-tile-content>
              <v-text-field
                suffix="Piece(s)"
                name="uht-Plain-250ml"
                label="UHT PLAIN 250ML"
                v-model="uhtPlainSmall"
                tabindex="2"
                placeholder="0"
                type="number"
                hint="Type number of items of this category"
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <!--fm-chocolate-235ML-->
          <v-list-tile class="alphaTrans">
            <v-list-tile-content>
              <v-text-field
                suffix="Piece(s)"
                name="fm-chocolate-235ML"
                label="FM Chocolate 235ML"
                v-model="fmChocolate"
                tabindex="3"
                placeholder="0"
                type="number"
                hint="Type number of items of this category"
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <!--fm-pistazafran-235ML-->
          <v-list-tile>
            <v-list-tile-content>
              <v-text-field
                suffix="Piece(s)"
                name="fm-pistazafran-235ML"
                label="FM Pista Zafran 235ML"
                v-model="fmPistaZafran"
                tabindex="4"
                placeholder="0"
                type="number"
                hint="Type number of items of this category"
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <!--fm-strawberry-235ML-->
          <v-list-tile class="alphaTrans">
            <v-list-tile-content>
              <v-text-field
                suffix="Piece(s)"
                name="fm-strawberry-235ML"
                label="FM Strawberry 235ML"
                v-model="fmStrawberry"
                tabindex="5"
                placeholder="0"
                type="number"
                hint="Type number of items of this category"
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-flex xs12 text-xs-center class="mb-4">
          <v-btn raised large color="black" dark to="/shoplist"><v-icon>chevron_left</v-icon> BACK </v-btn>
          <v-btn raised large color="green" :disabled="!formIsValid" dark type="submit"> DONE <v-icon right>send</v-icon></v-btn>
        </v-flex>
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
//      images
//      REF
      storePic: '/static/img/app/placeholder.png',
      storeStockBefore: '/static/img/app/placeholder.png',
      storeStockAfter: '/static/img/app/placeholder.png',
//      REF DATA
      storePicImg: null,
      storeStockBeforeImg: null,
      storeStockAfterImg: null,
//      stock Report
      uhtPlainBig: 0,
      uhtPlainSmall: 0,
      fmChocolate: 0,
      fmPistaZafran: 0,
      fmStrawberry: 0
    }
  },
  computed: {
    formIsValid(){
      return this.uhtPlainSmall !== '' &&  this.uhtPlainBig !== '' && this.fmChocolate !== '' && this.fmPistaZafran !== '' && this.fmStrawberry !== '' && this.storePicImg !== null && this.storeStockBeforeImg !== null && this.storeStockAfterImg !== null
    }
//    let ctr = new Date();
//        return ctr.getUTCHours() + ":" + ctr.getUTCMinutes();
  },
  created () {

    setTimeout(() =>{
        this.$http.get('http://api.timezonedb.com/v2/list-time-zone?key=QNVJJL9QLWE4&format=json&country=PK').then(response => {
        let date = new Date(response.body.zones[0].timestamp * 1000);
        let hours = date.getHours() - 5;
        let minutes = "0" + date.getMinutes();
        this.currentTime = hours + ':' + minutes.substr(-2)
      });
        console.log('done')
    }, 2000)
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
    onBeforeStock(event){
      const files = event.target.files
      let imagename = files[0].filename
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.storeStockBefore = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.storeStockBeforeImg = files[0]
    },
    onAfterStock(event){
      const files = event.target.files
      let imagename = files[0].filename
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.storeStockAfter = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.storeStockAfterImg = files[0]
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
        storeStockBeforeImg: this.storeStockBeforeImg,
        storeStockAfterImg: this.storeStockAfterImg,
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
  form {
    margin: 0px; margin-top: 5%; padding: 0px; width: 100%; height: fit-content;
  }

</style>

/**
 * Created by VisionVr on 10/27/2017.
 */
// importing VUE X
import Vue from 'vue';
import Vuex from 'vuex';
// importing Routers
import { routes } from '../routes'
// importing Firebase
import * as firebase from 'firebase'


Vue.use(Vuex);


// Storage
export const store = new Vuex.Store({
  state: {
    // Application Information
    app:{
      name: 'BAMS™ Node',
      fullname: 'Brand Ambassador Management System Nexus',
      author : 'radean',
      authorEmail : 'radeanf@gmail.com',
      developer : 'radean',
      company : 'Vision Direct Marketing',
      version : 'initial',
      status : true,
      broadcast: true,
      subscription: true
    },
    // Current user Details
    username: '',
    userpass: 0,
    userid: 0,
    usermail: '',
    // App Loading Stats
    userError: false,
    mainLoading: false,
    // setting Store ID
    sel_storeid: '30502',
    // shoplists:
    shops: [],
    shopDetail: [],
    //User Session
    user: null,

  },
  mutations: {
    RegisterUser (state, payload) {
    },
    setUser (state, payload){
      state.user = payload;
    },
    'SET_STORES'(state, payload){
      state.shops = payload;
    },
    'SET_STORE_DETAILS'(state, payload){
      state.shopDetail = payload;
    },
    'SET_SEL_STORE_ID'(state, payload){
      state.sel_storeid = payload;
    },
    'SET_MAIN_LOADING'(state, payload) {
      state.mainLoading = payload;
    },
    'SET_USER_ERROR'(state, payload){
      state.userError = payload;
    }
  },
  actions: {

    // USER AUTHENTICATION
    userSignUp({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
            }
            commit('setUser', newUser)
          }
        ).catch(
          error => {
            console.log(error)
          }
      )
    },
    userSignIn({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebase.auth().onAuthStateChanged(appUser => {
            commit('setUser', appUser)
        })).catch(
          error => {
            commit('SET_USER_ERROR', true);
            console.log(error);
            setTimeout(() => {
              commit('SET_USER_ERROR', false);
            }, 4000)
          })
      },
    // User Session Check
    userSession({commit}){
      // Checking Firebase user
      firebase.auth().onAuthStateChanged(appUser => {
        if(appUser) {
          console.log(appUser);
          commit('setUser', appUser)
        }else{
          commit('setUser', null);
          console.log("Not logged in")
        }
      })
    },
    userSignOut({commit}){
      firebase.auth().signOut().then(() =>{
        commit('setUser', null);
      });
    },
    // ==================================


    // setting Store ID
    setStoreId({commit}, payload){
      let sel_store_id = payload;
      commit('SET_SEL_STORE_ID', sel_store_id)
    },


    // Uploading Data
    pushStoreData({commit, getters}, payload){
      commit('SET_MAIN_LOADING', true);
      const storedata = {
        storename: payload.storename,
        storeid: payload.storeid,
        uhtPlainBig: payload.uhtPlainBig,
        uhtPlainSmall: payload.uhtPlainSmall,
        fmChocolate: payload.fmChocolate,
        fmPistaZafran: payload.fmPistaZafran,
        fmStrawberry: payload.fmStrawberry,
        date: payload.date.toString(),
        time: payload.date.toDateString(),
        creatorId: getters.user.id,
        merchandiserName: getters.user.name,
        // image
        storePicImg: payload.storePicImg,
        storeStockBeforeImg: payload.storeStockBeforeImg,
        storeStockAfterImg: payload.storeStockAfterImg,
      };
      let storePicImgUrl;
      let storeStockBeforeImgUrl;
      let storeStockAfterImgUrl;
      let key;

      firebase.database().ref('storedata').push(storedata)
      .then((data) => {
        key = data.key;
        return key
      }).then(key => {


        // Image 1
        const filenameA = payload.storePicImg.name;
        const ext = filenameA.slice(filenameA.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + key + 'storePic' + '.' + ext).put(payload.storePicImg)
      }).then(fileData => {
        storePicImgUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({storePicImgUrl: storePicImgUrl})
      }).then(() => {


        // Image 2
        const filenameB = payload.storeStockBeforeImg.name;
        const ext = filenameB.slice(filenameB.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + key + 'storeStockBefore' + '.' + ext).put(payload.storeStockBeforeImg)
      }).then(fileData => {
        storeStockBeforeImgUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({storeStockBeforeImgUrl: storeStockBeforeImgUrl})
      }).then(() => {


        // Image 3
        const filenameC = payload.storeStockAfterImg.name;
        const ext = filenameC.slice(filenameC.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + key + 'storeStockAfter' + '.' + ext).put(payload.storeStockAfterImg)
      }).then(fileData => {
        storeStockAfterImgUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({storeStockAfterImgUrl: storeStockAfterImgUrl})
      }).then(() => {
        commit('SET_MAIN_LOADING', false);
        console.log('Success');
      })
        .catch((error) => {
          console.log(error)
        })
    },



    // Fetching Data
    shopsListUPD({commit, getters}){
      commit('SET_MAIN_LOADING', true);
      firebase.database().ref('stores').on('value', (storelist) => {
        const stores = [];
        const obj = storelist.val();
        for (let key in obj) {
          stores.push({
            id: key,
            name: obj[key].name,
            location: obj[key].location,
          })
        }
        commit('SET_MAIN_LOADING', false);
        commit('SET_STORES', stores);
      });
    },
    fetchShopDetails({commit, getters}){
      firebase.database().ref('stores').orderByKey().equalTo(getters.selStoreId).once('value', (storedetails) => {
        const storeDetail = [];
        const obj = storedetails.val();
        for (let key in obj) {
          storeDetail.push({
            id: key,
            name: obj[key].name,
            location: obj[key].location
          })
        }
        commit('SET_STORE_DETAILS', storeDetail)
      });
    }
  },
  getters: {
    appinfo (state){
      return state.app
    },
    user (state){
      return state.user
    },
    shops (state) {
      return state.shops
    },
    storeDetail (state) {
      return state.shopDetail
    },
    selStoreId (state){
      return state.sel_storeid
    },
    mainLoading (state){
      return state.mainLoading
    },
    userError (state){
      return state.userError
    }
  }
});

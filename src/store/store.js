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
// importing Vue Resource
import VueResource from 'vue-resource'


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
      theme: 'red accent-4',
      header:{
        name: 'BAMS™',
        location: 'KHI'
      },
      mode: '',
      status : true,
      broadcast: true,
      subscription: true
    },
    // Current user Details
    userinfo: {},
    baList: {},
    // Store List
    // storeList: {},
    // App Loading Stats
    userError: false,
    loadingState:{
      mainLoading: false,
      compressorLoadingStats: false,
    },
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
    setTheme(state, payload){
      state.app.theme = payload;
    },
    setAppHeader(state, payload){
      state.app.header.name = payload.name;
      state.app.header.location = payload.location;
    },
    setMode(state, payload){
      state.app.mode = payload;
    },
    setUser (state, payload){
      state.user = payload;
    },
    setBaList (state, payload){
      state.baList = payload;
    },
    setUserInfo (state, payload){
      state.userinfo = payload;
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
      state.loadingState.mainLoading = payload;
    },
    'SET_USER_ERROR'(state, payload){
      state.userError = payload;
    }
  },
  actions: {

    // USER AUTHENTICATION
    userSignUp({commit}, payload){

      // Converting Varialble

      let userID;
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
        commit('SET_MAIN_LOADING', true);
        const userInfo = {
          uniqueId: user.uid,
          name: payload.user.name,
          password: payload.password,
          email: payload.email,
          assignStore: payload.user.assignStore,
          address: payload.user.address,
          role: payload.user.role
        };
          return firebase.database().ref('users').push(userInfo).then(() => {
          commit('SET_MAIN_LOADING', false);
          console.log('Success');
        }).catch((error) => {
          console.log(error)
        })
        }).catch(
        error => {
          commit('SET_USER_ERROR', true);
          console.log(error);
          setTimeout(() => {
            commit('SET_USER_ERROR', false);
          }, 4000)
        }
      );
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
    userSession({dispatch, commit}){
      // Checking Firebase user
      firebase.auth().onAuthStateChanged(appUser => {
        if(appUser) {
          // setting Authorization
          commit('setUser', appUser);
          dispatch('subUserInfo');
          // dispatch('appMode');
        }else{
          commit('setUser', null);
          console.log("Not logged in")
        }
      });
    },
    // user information update
    subUserInfo({commit, getters}){
      // Setting Loading
      commit('SET_MAIN_LOADING', true);
      // setting user information
      firebase.database().ref('users').orderByChild('uniqueId').equalTo(getters.user.uid).once('value', (user) => {
        let userinfo = {};
        const obj = user.val();
        for (let key in obj) {
          userinfo = {
            uid: obj[key].uniqueId,
            name: obj[key].name,
            email: obj[key].email,
            address: obj[key].address,
            role: obj[key].role
          };
        }
        commit('setUserInfo', userinfo);
        if(getters.userInfo.role === "Supervisor"){
          commit('setMode', 'Supervisor');
          commit('setTheme', 'blue accent-4');
          console.log('Supervisor')
        }else if(getters.userInfo.role === "BrandAmbassador"){
          commit('setMode', 'BrandAmbassador');
          commit('setTheme', 'red accent-4');
          console.log('BA')
        }
        commit('SET_MAIN_LOADING', false);
      });
    },
    // user Log out
    userSignOut({commit}){
      commit('SET_MAIN_LOADING', true);
      firebase.auth().signOut().then(() =>{
        // Setting ApplicationDetails
        let storeData = {
          name: 'BAMS™',
          location: ''
        }
        // setting App Header
        commit('setAppHeader', storeData);
        commit('setUserInfo', {});
        commit('setUser', null);
        commit('SET_MAIN_LOADING', false);
      });
    },
    // ==================================

    // setting Store ID
    setStoreId({dispatch ,commit}, payload){
      // Getting Assigned BA
      dispatch('baListUPD');
      let sel_store_id = payload.storeid;
      let storeData = {
        name: payload.storeName,
        location: payload.storeLocation
      }
      // setting App Header
      commit('setAppHeader', storeData);
      commit('SET_SEL_STORE_ID', sel_store_id)
    },


    // Uploading Data
    pushStoreData({commit, getters}, payload){
      commit('SET_MAIN_LOADING', true);
      const storedata = {
        storename: payload.storename,
        storeid: payload.storeid,
        soyaSupremeStock: payload.soyaSupremeStock,
        date: payload.date,
        // visits: payload.visits,
        interception: payload.interception,
        creatorId: getters.userInfo.uid,
        userName: getters.userInfo.name,
        // image
        storePicImg: payload.storePicImg,
        baPictureImg: payload.baPictureImg,
        shelfPictureImg: payload.shelfPictureImg,
      };
      console.log(payload.visits);
      let storePicImgUrl;
      let baPictureImgUrl;
      let shelfPictureImgUrl;
      let key;
      let date = storedata.date;

      firebase.database().ref('storedata').push(storedata)
      .then((data) => {
        key = data.key;
        return key
      }).then(key => {


        // Image 1
        const filenameA = payload.storePicImg.name;
        const ext = filenameA.slice(filenameA.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + date + '/' + key + 'storePic' + '.' + ext).put(payload.storePicImg)
      }).then(fileData => {
        storePicImgUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({storePicImgUrl: storePicImgUrl})
      }).then(() => {


        // Image 2
        const filenameB = payload.baPictureImg.name;
        const ext = filenameB.slice(filenameB.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + date + '/' + key + 'baPicture' + '.' + ext).put(payload.baPictureImg)
      }).then(fileData => {
        baPictureImgUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({baPictureImgUrl: baPictureImgUrl})
      }).then(() => {


        // Image 3
        const filenameC = payload.shelfPictureImg.name;
        const ext = filenameC.slice(filenameC.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + date + '/' + key + 'shelfPicture' + '.' + ext).put(payload.shelfPictureImg)
      }).then(fileData => {
        shelfPictureImgUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({shelfPictureImgUrl: shelfPictureImgUrl})
      }).then(() => {
        // putting Date
        console.log(payload.visits);
        return firebase.database().ref('stores/' + payload.storeid + '/visits/').update(payload.visits);
      }).then(() => {
        commit('SET_MAIN_LOADING', false);
        console.log('Success');
      })
        .catch((error) => {
          console.log(error)
        })
    },


    // Fetching Data
    // Store Lists
    // B.A List
    baListUPD({commit}){
      // Fetching FB
      firebase.database().ref('users').orderByChild('role').equalTo("BrandAmbassador").once('value', (ba) => {
        let baList = {};
        const obj = ba.val();
        for (let key in obj) {
          let baname= obj[key].name;
          baList[baname] = {
            uid: obj[key].uniqueId,
            name: obj[key].name,
            email: obj[key].email,
            address: obj[key].address,
            role: obj[key].role
          };
        }
        // setting Mutations
        commit('setBaList', baList)
      })
    },
    // Store List
    shopsListUPD({commit}, payload){
      let today = payload;
      commit('SET_MAIN_LOADING', true);
      firebase.database().ref('stores')
        .orderByChild('visits/' + today)
        .equalTo(null)
        .on('value', (storelist) => {
        const stores = [];
        const obj = storelist.val();
        for (let key in obj) {
          stores.push({
            id: key,
            name: obj[key].name,
            location: obj[key].location,
            visits: obj[key].visits,
          });
        }
        console.log(stores);
        commit('SET_MAIN_LOADING', false);
        commit('SET_STORES', stores);
      });
    },
    // Store Detail
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
    userInfo (state) {
      return state.userinfo
    },
    baList (state) {
      return state.baList
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
    loadingState (state){
      return state.loadingState
    },
    userError (state){
      return state.userError
    }
  }
});

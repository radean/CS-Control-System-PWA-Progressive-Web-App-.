/**
 * Created by VisionVr on 10/27/2017.
 */
// importing VUE X
import Vue from 'vue';
import Vuex from 'vuex';
// importing Firebase
import * as firebase from 'firebase'


Vue.use(Vuex);


// Storage
export const store = new Vuex.Store({
  state: {
    // Current user Details
    username: '',
    userpass: 0,
    userid: 0,
    usermail: '',
    // setting Store ID
    sel_storeid: '30502',
    // shoplists:
    shops: [],
    shopDetail: [],
    //User Session
    user: null
  },
  mutations: {
    RegisterUser (state, payload) {
    },
    setUser (state, payload){
      state.user = payload
    },
    'SET_STORES'(state, payload){
      state.shops = payload
    },
    'SET_STORE_DETAILS'(state, payload){
      state.shopDetail = payload;
    },
    'SET_SEL_STORE_ID'(state, payload){
      state.sel_storeid = payload
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
        .then( user => {
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
        ).catch(
          error => {
            console.log(error)
          }
      )
    },
    // ==================================


    // setting Store ID
    setStoreId({commit}, payload){
      let sel_store_id = payload
      commit('SET_SEL_STORE_ID', sel_store_id)
    },



    // Uploading Data
    pushStoreData({commit, getters}, payload){
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
        // image
        storePicImg: payload.storePicImg
      }
      let imageUrl
      let key
      firebase.database().ref('storedata').push(storedata)
      .then((data) => {
        key = data.key
        return key
      }).then(key => {
        const filename = payload.storePicImg.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase.storage().ref('storeimages/' + key + '.' + ext).put(payload.storePicImg)
      }).then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0];
        return firebase.database().ref('storedata').child(key).update({imageUrl: imageUrl})
      }).then(() => {
        console.log('Success')
      })
        .catch((error) => {
          console.log(error)
        })
    },



    // Fetching Data
    shopsListUPD({commit}){
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
    }
  }
});

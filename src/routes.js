import Login from './components/Auth/Login.vue';
import Registration from './components/Auth/Registration.vue'
import StoreList from './components/AppMain/StoreList.vue'
import StoreDetail from './components/AppMain/StoreDetail.vue'
import ShopDetailBA from './components/AppMain/ShopDetailBA.vue'

export const routes = [
  { path: '/', name: 'Home', component: Login },
  { path: '/registration', name: 'Registration', component: Registration },
  { path: '/storelist', name: 'StoreList', component: StoreList },
  { path: '/storedetail', name: 'ShopDetail', component: StoreDetail },
  { path: '/shopdetailba', name: 'ShopDetailBA', component: ShopDetailBA },
  { path: '*', name: 'HomeLink', component: Login}
]

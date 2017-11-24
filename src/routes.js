import Login from './components/Auth/Login.vue';
import Registration from './components/Auth/Registration.vue'
import ShopList from './components/AppMain/ShopList.vue'
import ShopDetail from './components/AppMain/ShopDetail.vue'
import ShopDetailBA from './components/AppMain/ShopDetailBA.vue'

export const routes = [
  { path: '/', name: 'Home', component: Login },
  { path: '/registration', name: 'Registration', component: Registration },
  { path: '/shoplist', name: 'ShopList', component: ShopList },
  { path: '/shopdetail', name: 'ShopDetail', component: ShopDetail },
  { path: '/shopdetailba', name: 'ShopDetailBA', component: ShopDetailBA }
]

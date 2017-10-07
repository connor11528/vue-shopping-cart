import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

Vue.use(Element)

Vue.component('NavBar', NavBar)
Vue.component('ProductList', ProductList)
Vue.component('ShoppingCart', ShoppingCart)

new Vue({
  el: '#app',
  render: h => h(App)
})

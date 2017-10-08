import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'

import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

// Services
Vue.use(Element, { locale })

// Components
Vue.component('NavBar', NavBar)
Vue.component('ProductList', ProductList)
Vue.component('ShoppingCart', ShoppingCart)

// Filters
Vue.filter('currency', function (value) {
    return '$' + parseFloat(value/100).toFixed(2);
});

new Vue({
  el: '#app',
  render: h => h(App)
})

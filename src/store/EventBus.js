import Vue from 'vue';
import products from '../products'

export const EventBus = new Vue({
	data() {
	    return {
	    	products,
	    	cart: []
	    };
	},
	methods: {
		addToCart(product){

		},
		removeFromCart(sku){

		}
	}
});
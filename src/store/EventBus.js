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
			const locationInCart = this.cart.findIndex(p => {
				return p.details.sku === product.sku
			})

		    if (locationInCart === -1) {
		        this.cart.push({
		          details: product,
		          quantity: 1
		        })
		    } else {
		        this.cart[locationInCart].quantity++
		    }
		},
		removeFromCart(sku){

		}
	}
});
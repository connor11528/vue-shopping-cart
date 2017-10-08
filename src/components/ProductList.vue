<template>
	<el-row>
	  <el-col :span="12" v-for="(product, index) in products" :key="product.sku">
	    <el-card>
	    	<img :src="product.images[0]" class="image">
	        <span>{{ product.name }}</span>
	        <span>{{ product.price | currency }}</span>
	        <div class="bottom clearfix">
	        	<el-button type="info" @click='addToCart(product)'>Add to cart</el-button>
	        </div>
	    </el-card>
	  </el-col>
	</el-row>
</template>

<script>
import {Store} from '../store/Store'

export default {
  data() {
    return {
    	products: Store.$data.products
    };
  },
  methods: {
  	addToCart(product){
  		Store.addToCart(product)
  	}
  }
}
</script>
<style>
  .image {
    width: 100%;
    display: block;
  } 
</style> 


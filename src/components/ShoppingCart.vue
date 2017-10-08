<template>
	<ul>
		<li v-for='item in cart'>{{ item.name }}</li>
	</ul>
</template>

<script>
import {EventBus} from '../store/EventBus'

export default {
	computed: {
		cart(){
			return EventBus.$data.cart
		}
	}
}
</script>

<template>
	<el-table
    :data="cart"
    stripe
    style="width: 100%">
    	<el-table-column
			prop="details.name"
			label="Item Name"></el-table-column>
		<el-table-column
			label="Price">
			<template scope='scope'>
			{{ scope.row.details.price | currency }}
			</template>
		</el-table-column>
		<el-table-column
			prop="quantity"
			label="Quantity"></el-table-column>
	</el-table>
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

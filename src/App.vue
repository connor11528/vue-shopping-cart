<template>
  <div id="app">
    <nav-bar></nav-bar>
    <el-row :gutter="20">
      <el-col :span="16">
        <h1>Product List</h1>
        <product-list></product-list>
      </el-col>
      <el-col :span="8">
        <h1>Shopping Cart</h1>
        <shopping-cart></shopping-cart>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

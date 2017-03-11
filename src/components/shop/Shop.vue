<template>
  <div class="page-container">
    <el-row>
      {{msg}}
    </el-row>

    <el-row :gutter="24">
      <el-col :span="18"> <ProductList></ProductList></el-col>
      <el-col :span="6">  <Cart></Cart></el-col>
    </el-row>

  </div>
</template>

<script>
  import ProductList from './products/List';
  import Cart from './cart/Cart';

  export default {
    name: 'shop',
    data() {
      return {
        msg: 'SHOP - LIST OF PRODUCTS',
      };
    },
    components: {
      ProductList,
      Cart,
    },
  };
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

</style>

<template>
  <div class="shop">
      <el-row>
        {{msg}}
      </el-row>
      <el-row>
        <el-col :span="18">
            <ProductList></ProductList>
        </el-col>
        <el-col :span="6">
            <Cart></Cart>
        </el-col>
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
        msg: 'SHOP',
      };
    },
    components: {
      ProductList,
      Cart,
    },
  };
</script>

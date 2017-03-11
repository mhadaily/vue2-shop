<template>
  <div class="shop">
    {{msg}}
    <ProductList></ProductList>
    <Cart></Cart>
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

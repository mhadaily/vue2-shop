<template>
  <div class="cart">
      <h3>Your Cart</h3>
      <p v-show="!products.length"><i>Please add some products to cart.</i></p>

      <Items
        v-for="product in products"
        :product="product"
        :key="product.id"></Items>

      <!--<Summery :total="total"></Summery>-->

    <br>
    <router-link to="/checkout">
      <el-button type="success" size="large">Go to Checkout</el-button>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Items from './Items';
  import Summery from './Summery';

  export default {
    components: {
      Items,
      Summery,
    },
    computed: {
      ...mapGetters({
        products: 'cartProducts',
      }),
      total() {
        return this.products.reduce((total, p) => total + (p.price * p.quantity), 0);
      },
    },
  };
</script>

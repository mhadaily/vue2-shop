<template>
  <div class="cart">
    <el-steps :space="100" :active="1" finish-status="success">
      <el-step title="Your Cart"></el-step>
      <el-step title="Checkout"></el-step>
    </el-steps>
      <p v-show="!products.length"><i>Please add some products to cart.</i></p>
      <Items
        v-for="product in products"
        :product="product"
        :key="product.id"></Items>

      <Summery :total="total"></Summery>

    <hr>

    <router-link to="/checkout">
      <el-button>Go to Checkout</el-button>
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

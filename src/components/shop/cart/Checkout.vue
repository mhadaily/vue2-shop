<template>
  <div class="checkout">
    <div class="page-container">
      <el-steps :space="100" :active="3" finish-status="success">
        <el-step title="Select"></el-step>
        <el-step title="Cart"></el-step>
        <el-step title="Checkout"></el-step>
        <el-step title="Payment"></el-step>
        <el-step title="Done"></el-step>
      </el-steps>
      <br>

      <Items
        v-for="product in products"
        :product="product"
        :key="product.id"></Items>

      <Summery :total="total"></Summery>

      <br>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
      <router-link to="/thanks">
        <el-button :disabled="!products.length" @click="checkout(products)" type="danger">PAYMENT and DONE</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Items from './../cart/Items';
  import Summery from './../cart/Summery';

  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus',
      }),
    },
    components: {
      Items,
      Summery,
    },
    methods: {
      checkout(products) {
        this.$store.dispatch('checkout', products);
      },
    },
  };
</script>

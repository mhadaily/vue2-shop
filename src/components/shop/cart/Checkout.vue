<template>
  <div class="checkout">
    <p>
      <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    <router-link to="/thanks">
      <el-button>Go to Thanks</el-button>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'checkout',
    data() {
      return {
        msg: 'Checkout Page',
      };
    },
    computed: {
      ...mapGetters({
        checkoutStatus: 'checkoutStatus',
      }),
    },
    methods: {
      checkout(products) {
        this.$store.dispatch('checkout', products);
      },
    },
  };
</script>

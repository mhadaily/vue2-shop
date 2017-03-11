<template>
  <div class="cart">
    <!--<Summery></Summery>-->
    <div class="cart">
      <h2>Your Cart</h2>
      <p v-show="!products.length"><i>Please add some products to cart.</i></p>
      <ul>
        <li v-for="p in products">
          {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
        </li>
      </ul>
      <p>Total: {{ total | currency }}</p>
      <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'cart',
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus',
      }),
      total() {
        return this.products.reduce((total, p) => total + (p.price * p.quantity), 0);
      },
    },
    methods: {
      checkout(products) {
        this.$store.dispatch('checkout', products);
      },
    },
  };
</script>

<template>
  <div class="products">
    <Single :product="product" v-for="product in products"></Single>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Single from './Single';

  export default {
    name: 'products',
    computed: mapGetters({
      products: 'allProducts',
    }),
    created() {
      this.$store.dispatch('getAllProducts');
    },
    components: {
      Single,
    },
  };
</script>

<template>
  <el-button type="danger" size="mini" icon="delete" @click="removeFromCart(product)"></el-button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      product: Object,
    },
    methods: mapActions([
      'removeFromCart',
    ]),
  };
</script>

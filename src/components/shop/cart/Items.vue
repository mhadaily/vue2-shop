<template>
  <div class="media mb-1">
    <div class="media-body">
      <strong class="d-block">{{product.title}}</strong>
      <span>Quantity: {{product.quantity}} - {{product.price}}</span>
    </div>
    <div class="media-right align-middle">
      <remove-from-cart :product="product"></remove-from-cart>
    </div>
  </div>
</template>

<script>
  import RemoveFromCart from './../products/RemoveFromCart';

  export default {
    props: {
      product: Object,
    },
    components: {
      RemoveFromCart,
    },
  };
</script>

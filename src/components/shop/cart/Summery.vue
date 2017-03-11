<template>
  <div class="basket">
    {{msg}}
    <router-link to="/cart/checkout">
      <el-button>Go to  Checkout page</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'basket',
    data() {
      return {
        msg: 'Your basket',
      };
    },
  };
</script>

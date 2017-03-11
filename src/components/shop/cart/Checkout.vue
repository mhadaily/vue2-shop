<template>
  <div class="checkout">
    {{msg}}
    <router-link to="/cart/thanks">
      <el-button>Go to  Thank you page</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'checkout',
    data() {
      return {
        msg: 'Checkout Page',
      };
    },
  };
</script>

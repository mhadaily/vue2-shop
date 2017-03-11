<template>
  <div class="checkout">
    {{msg}}
    <router-link to="/thanks">
      <el-button>Go to Thanks</el-button>
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

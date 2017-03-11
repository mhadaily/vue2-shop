<template>
  <div class="products">
    {{msg}}
    <router-link to="/cart">
      <el-button>Go to  Cart page</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'products',
    data() {
      return {
        msg: 'Product List compoenrnt',
      };
    },
  };
</script>

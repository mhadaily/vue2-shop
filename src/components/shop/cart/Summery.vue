<template>
  <div class="summery">
    {{msg}}
    <br/>
    <router-link to="/checkout">
      <el-button>Go to  Checkout</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'summery',
    data() {
      return {
        msg: 'Your basket',
      };
    },
  };
</script>

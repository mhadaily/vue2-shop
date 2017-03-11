<template>
  <div class="cart">
    {{msg}}

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'cart',
    data() {
      return {
        msg: 'Cart Page',
      };
    },
  };
</script>

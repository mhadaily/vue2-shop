<template>
  <div class="thanks">
    {{msg}}
    <router-link to="/products">
      <el-button>Go to Products page</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'thanks',
    data() {
      return {
        msg: 'Thank you',
      };
    },
  };
</script>

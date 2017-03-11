<template>
  <div class="hello">
    <Slideshow></Slideshow>
    <h1>{{ msg }}</h1>
    <router-link to="/products">
      <el-button>Go to Products</el-button>
    </router-link>
  </div>
</template>

<script>
  import Slideshow from './homepage/Slideshow';

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js Shop App By Majid Hajian',
      };
    },
    components: {
      Slideshow,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

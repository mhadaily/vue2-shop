<template>
  <div class="hello">
    <div class="page-container">
      <br>
      <Slideshow></Slideshow>

    </div>
    <el-row>
      <div class="parallax">
        <h1>{{ msg }}</h1>
        <router-link to="/products">
          <el-button>Go to Products</el-button>
        </router-link>
      </div>
    </el-row>
    <el-row>
        <p>
          This app has been made with Vue.js in order to compare with Angular 2 and Ember.js. <br/>
          A tutorial and comparison chart and table will be published soon.
        </p>
    </el-row>

  </div>
</template>

<script>
  import Slideshow from './homepage/Slideshow';

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js Shop App',
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
    color: #fff;
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

  .parallax {
    margin: 50px 0;
    padding: 100px 0;
    background: url('../assets/bg.jpg') no-repeat center center fixed;
  }
</style>

<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <Navbar></Navbar>
        <transition name="move" mode="out-in"><router-view></router-view></transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Navbar from './components/shared/Navbar';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 1024px;
    margin: 0 auto;
  }
</style>

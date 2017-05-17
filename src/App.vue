<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <Navbar></Navbar>
        <transition name="move" mode="out-in"><router-view></router-view></transition>
        <siteFooter></siteFooter>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Navbar from './components/shared/Navbar';
  import siteFooter from './components/shared/Footer';

  export default {
    name: 'app',
    components: {
      Navbar,
      siteFooter,
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

  .container, .page-container {
    width: 1140px;
    padding: 0 30px;
    margin: 0 auto;
  }
  .el-card{
    margin-bottom: 20px;
  }
</style>

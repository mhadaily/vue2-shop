<template>
  <div class="navbar">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

      <el-menu-item index="1">
        <router-link to="/">Home</router-link>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/products">Products</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/checkout">Checkout</router-link>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data: {
      activeIndex: '1',
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>
<style>
  .navbar {
    margin-bottom: 30px;
  }

  .navbar a {
    text-decoration: none;
  }
</style>

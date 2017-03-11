<template>
  <div class="navbar">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="container">
        <router-link to="/">
          <el-menu-item index="1">
            Home
          </el-menu-item>
        </router-link>

        <router-link to="/products">
          <el-menu-item index="2">
            Products
          </el-menu-item>
        </router-link>

        <el-submenu index="3">
          <template slot="title">Contact</template>
          <router-link to="/contact">
            <el-menu-item index="3-1">Email</el-menu-item>
          </router-link>
          <router-link to="/contact/phone">
            <el-menu-item index="3-2">
              Phone
            </el-menu-item>
          </router-link>
          <router-link to="/contact/gmap">
            <el-menu-item index="3-3">
              Map
            </el-menu-item>
          </router-link>
        </el-submenu>

        <router-link to="/checkout">
          <el-menu-item index="4">
            Checkout
          </el-menu-item>
        </router-link>

      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        activeIndex: '1',
      };
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

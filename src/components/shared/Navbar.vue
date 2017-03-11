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
          <template slot="title">Your Cart</template>
          <router-link to="/cart">
            <el-menu-item index="3-1">Summery</el-menu-item>
          </router-link>
          <router-link to="/cart/checkout">
            <el-menu-item index="3-2">
              Checkout
            </el-menu-item>
          </router-link>
        </el-submenu>
      </div>
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

<template>
  <div class="navbar">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
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

        <router-link to="/checkout" style="float: right;">
          <el-menu-item index="4">
            <el-badge :value="itemsQuantity" class="item">
            Checkout ({{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }})
            </el-badge>
          </el-menu-item>
        </router-link>

      </div>
    </el-menu>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'navbar',
    computed: {
      ...mapGetters([
        'itemsQuantity',
      ]),
    },
    data() {
      return {
        activeIndex: '1',
      };
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
  .el-badge__content.is-fixed {
    top:15px;
  }
</style>

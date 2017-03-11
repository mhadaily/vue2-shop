<template>
  <div class="footer">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <div class="page-container">
          <a target="_blank" href="https://www.majidhajian.com">
              {{footer}}
          </a>
      </div>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: 'footer',
    data() {
      return {
        footer: 'Copyright 2017, Majid Hajian. Made with Love by Vue.js',
      };
    },
  };
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
  .footer{
    margin-top:50px;
  }
  .footer .page-container{
    padding:20px 0px;
  }
  .footer a{
    color:#fff;
    text-decoration: none;
  }
</style>

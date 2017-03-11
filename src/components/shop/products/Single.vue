<template>
    <el-col :span="7">
      <el-card :body-style="{ padding: '0px' }">
        <img src="http://lorempixel.com/300/400/" class="image" :alt="product.title">
        <div style="padding: 10px;">
          <span><strong>{{product.title}}</strong></span>
          <div class="bottom clearfix">
            <p class="card-text">{{product.price}} - Stock: {{product.inventory}}</p>
            <add-to-cart :product="product"></add-to-cart>
          </div>
        </div>
      </el-card>
    </el-col>
</template>

<script>
  import AddToCart from './AddToCart';

  export default {
    props: {
      product: Object,
    },
    data() {
      return {
        currentDate: new Date(),
      };
    },
    components: {
      AddToCart,
    },
  };
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
  }
  .el-col {
    border-radius: 4px;
    margin: 10px;
  }
</style>

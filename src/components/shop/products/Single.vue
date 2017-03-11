<template>
    <el-col :span="8" :body-style="{ margin: '15px' }">
      <el-card :body-style="{ padding: '0px' }">
        <img src="http://lorempixel.com/300/400/" class="image">
        <div style="padding: 14px;">
          <span>{{product.title}}</span>
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

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

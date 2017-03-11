<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><strong> {{product.title}} </strong></span>
      <remove-from-cart style="float: right;" :product="product"></remove-from-cart>

    </div>
    <div class="text item">
      <i class="el-icon-circle-check"></i> Quantity: <strong>{{product.quantity}}</strong><br/>
      <i class="el-icon-circle-check"></i> Unit-Price: <strong>{{product.price | formatMoney}}</strong><br>
      <i class="el-icon-circle-check"></i> Unit-Total: <strong>{{product.price * product.quantity}}</strong>
    </div>
  </el-card>

</template>

<script>
  import RemoveFromCart from './../products/RemoveFromCart';

  export default {
    props: {
      product: Object,
    },
    components: {
      RemoveFromCart,
    },
  };
</script>
<style scoped>
  .text{
    text-align: left;
  }
</style>

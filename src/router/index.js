import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Products from '@/components/shop/products/List';
import Basket from '@/components/shop/cart/Summery';
import Thanks from '@/components/shop/cart/Thanks';
import Checkout from '@/components/shop/cart/Checkout';
import Cart from '@/components/shop/cart/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/cart',
      component: Cart,
      children: [
        {
          path: '',
          component: Basket,
        },
        {
          path: 'checkout',
          component: Checkout,
        },
        {
          path: 'thanks',
          component: Thanks,
        },
      ],
    },

  ],
});

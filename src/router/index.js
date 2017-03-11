/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';

import Thanks from '@/components/shop/cart/Thanks';
import Checkout from '@/components/shop/cart/Checkout';
import Cart from '@/components/shop/cart/Cart';

import Email from '@/components/contact/Email';
import Phone from '@/components/contact/Phone';
import Gmap from '@/components/contact/Gmap';

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
      name: 'Shop',
      component: resolve => require(['./../components/shop/Shop.vue'], resolve),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks,
    },
    {
      path: '/contact',
      component: resolve => require(['./../components/contact/Index.vue'], resolve),
      children: [
        {
          path: '',
          component: Email,
        },
        {
          path: 'phone',
          component: Phone,
        },
        {
          path: 'gmap',
          component: Gmap,
        },
      ],
    },

  ],
});

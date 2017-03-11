import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';

import Shop from '@/components/shop/Shop';
import Thanks from '@/components/shop/cart/Thanks';
import Checkout from '@/components/shop/cart/Checkout';
import Cart from '@/components/shop/cart/Cart';

import Contact from '@/components/contact/Index';
import Email from '@/components/contact/Email';
import Phone from '@/components/contact/Phone';
import Map from '@/components/contact/Map';

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
      component: Shop,
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
      component: Contact,
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
          path: 'map',
          component: Map,
        },
      ],
    },

  ],
});

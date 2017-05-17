/* eslint-disable */
import api from './../../../api/fixtures';
import * as types from './../mutation-constant';

// initial state
const state = {
  added: [],
  checkoutStatus: null,
  productDiscount: false,
  totalDiscount: false,
  freeShipping: false,
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added];
    commit(types.CHECKOUT_REQUEST);
    api.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems }),
    );
  },
};

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, id) {
    state.lastCheckout = null;
    const record = state.added.find(p => p.id === id);
    if (!record) {
      state.added.push({
        id,
        quantity: 1,
      });
    } else {
      record.quantity++;
    }
  },
  
  [types.REMOVE_FROM_CART] (state, item) {
    const index = state.added.findIndex(added => added.id === item.id);
    state.added.splice(index, 1);
  },
  
  [types.TOGGLE_COUPON] (state, coupon) {
    const coupons = {
      '1': 'productDiscount',
      '2': 'totalDiscount',
      '3': 'freeShipping',
    };
    
    if (coupons[coupon.id]) {
      state[coupons[coupon.id]] = !state[coupons[coupon.id]];
    }
  },
  
  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = [];
    state.checkoutStatus = null;
  },
  
  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful';
  },
  
  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems;
    state.checkoutStatus = 'failed';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

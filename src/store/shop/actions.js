/* eslint-disable */
import * as types from './mutation-constant'

export const addToCart = ({commit}, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, product.id)
  }
};

export const removeFromCart = ({commit}, product) => {
  commit(types.REMOVE_FROM_CART, product)
};

export const toggleCoupon = ({commit}, coupon) => {
  commit(types.TOGGLE_COUPON, coupon);
};

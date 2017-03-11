/* eslint-disable */
import * as types from './mutation-constant'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id,
    });
  }
};

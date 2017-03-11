/* eslint-disable */
import api from './../../../api/fixtures';
import * as types from './../mutation-constant';

// initial state
const state = {
  all: []
};

// getters
const getters = {
  allProducts: state => state.all
};

// actions
const actions = {
  getAllProducts({ commit }) {
    api.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  },
};

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },
  [types.ADD_TO_CART] (state,  id ) {
     state.all.find(p =>  p.id === id).inventory--;
  },
  [types.REMOVE_FROM_CART] (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .inventory += removedProduct.quantity
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

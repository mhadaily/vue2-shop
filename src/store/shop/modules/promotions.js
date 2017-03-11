/* eslint-disable */
import api from './../../../api/fixtures';
import * as types from './../mutation-constant';

const state = {
  all: []
};

// getters
const getters = {
  allPromotions: state => state.all
};

// actions
const actions = {
  getAllPromotions({commit}){
    api.getPromotions(promotions => {
      commit(types.RECEIVE_PROMOTIONS, promotions)
    })
  },
};

const mutations = {
  [types.RECEIVE_PROMOTIONS] (state, promotions) {
    state.all = promotions
  },

  [types.TOGGLE_COUPON] (state, coupon) {
    coupon.active = !coupon.active
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
}

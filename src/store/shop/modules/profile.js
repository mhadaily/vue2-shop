/* eslint-disable */
import api from './../../../api/fixtures';
import * as types from './../mutation-constant';

// initial state
const state = {
  data: []
};

// getters
const getters = {
  profile: state => state.data
};

// actions
const actions = {
  getProfile({commit}){
    api.getProfile(profile => {
      commit(types.RECEIVE_PROFILE, profile)
    })
  },
};

const mutations = {
  [types.RECEIVE_PROFILE] (state, profile) {
    state.data = profile
  },

  [types.TOGGLE_COUPON] (state, coupon) {
    const couponLimitId = 4;

    if (coupon.id !== couponLimitId) return;

    if (!coupon.active) {
      state.data.limit += 100
    } else {
      state.data.limit -= 100
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
}

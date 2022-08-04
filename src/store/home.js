const state = {
  tags: [],
};
const mutations = {
  GETTAGS(state, value) {
    state.tags = value;
  },
};
const actions = {
  getTags({ commit }, value) {
    // console.log(value);
    commit("GETTAGS", value);
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};

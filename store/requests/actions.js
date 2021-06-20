export default {
  init({ commit }) {
    commit('set', this.$cookies.get('requests') || [])
  },
  delete({ commit }, id) {
    commit('delete', id)
  },
}

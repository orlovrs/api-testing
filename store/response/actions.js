export default {
  init({ dispatch }, response) {
    dispatch('clear')
    dispatch('setStatusCode', `${response.status} ${response.statusText}`)
    dispatch('setBody', response.data)
    dispatch('setHeaders', response.headers)
  },
  setStatusCode({ commit }, code) {
    commit('setStatusCode', code)
  },
  setBody({ commit }, body) {
    commit('setBody', body)
  },
  setHeaders({ commit }, headers) {
    commit('setHeaders', headers)
  },
  clear({ commit }) {
    commit('setStatusCode', null)
    commit('setBody', null)
    commit('setHeaders', [])
  },
}

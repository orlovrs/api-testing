export default {
  init({ commit, dispatch }, id) {
    const request = this.$cookies.get('requests').find((x) => x.id === id)
    if (request) {
      dispatch('setMethod', request.method)
      dispatch('setEndpoint', request.endpoint)
      request.headers.map((x) =>
        dispatch('setHeader', { key: x.key, value: x.value })
      )
      dispatch('setBody', request.body)
    }
  },
  setMethod({ commit }, method) {
    commit('setMethod', method)
  },
  setEndpoint({ commit }, endpoint) {
    commit('setEndpoint', endpoint)
  },
  setBody({ commit }, body) {
    commit('setBody', body)
  },
  setHeader({ commit }, { key, value }) {
    commit('addHeader', { key, value })
  },
  updateHeader({ commit }, { key, header }) {
    commit('setHeader', { key, header })
  },
  deleteHeader({ commit }, key) {
    commit('deleteHeader', key)
  },
  clear({ commit }) {
    commit('setMethod', null)
    commit('setEndpoint', null)
    commit('setHeaders', [])
    commit('setBody', null)
  },
  save({ state }) {
    const requests = this.$cookies.get('requests') || []
    const maxId = Math.max(requests.map((x) => x.id))
    requests.push({ ...state.request, id: maxId + 1 || requests.length + 1 })
    this.$cookies.set('requests', requests)
  },
  update({ state }, id) {
    const requests = this.$cookies.get('requests')
    const request = requests.find((x) => x.id === id)

    if (request) {
      requests[requests.indexOf(request)] = { ...state.request, id }
      this.$cookies.set('requests', requests)
    }
  },
}

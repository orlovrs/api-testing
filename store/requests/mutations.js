export default {
  set(state, data) {
    state.requests = data
  },
  delete(state, id) {
    const request = state.requests.find((x) => x.id === id)
    if (request) {
      state.requests.splice(state.requests.indexOf(request), 1)
    }

    this.$cookies.set('requests', state.requests)
  },
}

export default {
  setMethod(state, data) {
    state.request.method = data
  },
  setEndpoint(state, data) {
    state.request.endpoint = data
  },
  setBody(state, data) {
    state.request.body = data
  },
  setHeaders(state, data) {
    state.request.headers = data
  },
  addHeader(state, { key, value }) {
    state.request.headers.push({ key, value })
  },
  setHeader(state, { key, header }) {
    const h = state.request.headers.find((x) => x.key === key)
    h.key = header.key
    h.value = header.value
  },
  deleteHeader(state, key) {
    const h = state.request.headers.find((x) => x.key === key)
    const i = state.request.headers.indexOf(h)
    if (i >= 0) {
      state.request.headers.splice(i, 1)
    }
  },
}

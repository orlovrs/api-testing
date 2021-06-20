export default {
  setStatusCode(state, data) {
    state.response.statusCode = data
  },
  setBody(state, data) {
    state.response.body = data
  },
  setHeaders(state, data) {
    state.response.headers = data
  },
}

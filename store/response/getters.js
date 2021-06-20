export default {
  response: (state) => state.response,
  statusCode: (state) => state.response.statusCode,
  statusText: (state) => state.response.statusText,
  body: (state) => state.response.body,
  headers: (state) => state.response.headers,
}

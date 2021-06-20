export default {
  request: (state) => state.request,
  method: (state) => state.request.method,
  endpoint: (state) => state.request.endpoint,
  body: (state) => state.request.body,
  headers: (state) => state.request.headers,
  isValid: (state) =>
    state.request.method != null && state.request.endpoint != null,
}

<template>
  <b-form-input
    id="endpoint"
    v-model="endpoint"
    placeholder="http://example.com"
  />
</template>

<script>
export default {
  computed: {
    endpoint: {
      get() {
        return this.$store.getters['request/endpoint']
      },
      set(val) {
        this.$store.dispatch('request/setEndpoint', val)
      },
    },
  },
}
</script>

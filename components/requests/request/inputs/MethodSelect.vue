<template>
  <b-form-select
    id="type"
    v-model="method"
    :options="[
      { value: null, text: '' },
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE',
    ]"
  />
</template>

<script>
export default {
  computed: {
    method: {
      get() {
        return this.$store.getters['request/method']
      },
      set(val) {
        this.$store.dispatch('request/setMethod', val)
      },
    },
  },
}
</script>

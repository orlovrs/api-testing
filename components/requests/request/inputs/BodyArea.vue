<template>
  <b-form-group id="body-group" label="Тело запроса" label-for="body">
    <b-form-textarea id="body" v-model="body" rows="8" max-rows="12" />
  </b-form-group>
</template>

<script>
export default {
  computed: {
    body: {
      get() {
        return this.$store.getters['request/body']
      },
      set(val) {
        this.$store.dispatch('request/setBody', val)
      },
    },
  },
}
</script>

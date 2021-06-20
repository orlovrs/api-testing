<template>
  <button
    type="button"
    class="btn btn-sm btn-danger"
    @click="$store.dispatch('request/deleteHeader', headerKey)"
  >
    <b-icon icon="trash-fill" />
  </button>
</template>

<script>
export default {
  props: {
    headerKey: { type: String, required: true },
  },
}
</script>

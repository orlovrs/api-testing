<template>
  <button
    type="button"
    class="btn btn-sm btn-danger"
    @click.prevent="$store.dispatch('requests/delete', id)"
  >
    <b-icon icon="trash-fill" />
  </button>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
  },
}
</script>

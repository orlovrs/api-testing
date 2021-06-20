<template>
  <span>
    <button type="button" class="btn btn-sm btn-info" :to="`/requests/${id}`">
      <b-icon icon="pencil-fill" />
    </button>
  </span>
</template>

<script>
export default {
  props: { id: { type: Number, required: true } },
}
</script>

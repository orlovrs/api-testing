<template>
  <span>
    <button
      type="button"
      class="btn btn-sm btn-info"
      @click="$bvModal.show('edit-header-' + headerKey)"
    >
      <b-icon icon="pencil-fill" />
    </button>
    <HeaderModal
      :id="'edit-header-' + headerKey"
      title="Изменить заголовок"
      mode="edit"
      :header-key="headerKey"
    />
  </span>
</template>

<script>
import HeaderModal from '@/components/requests/request/other/HeaderModal'

export default {
  components: { HeaderModal },
  props: { headerKey: { type: String, required: true } },
}
</script>

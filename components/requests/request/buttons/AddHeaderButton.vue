<template>
  <div>
    <b-button
      v-b-modal.add-header
      variant="primary"
      class="text-center align-self-center"
      pill
    >
      +
    </b-button>
    <HeaderModal id="add-header" title="Новый заголовок" />
  </div>
</template>

<script>
import HeaderModal from '@/components/requests/request/other/HeaderModal'

export default {
  components: { HeaderModal },
}
</script>

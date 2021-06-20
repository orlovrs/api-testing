<template>
  <div>
    <b-button to="/requests/add" class="mb-3" variant="outline-primary">
      Добавить запрос
    </b-button>
    <Alert
      v-if="!requests || requests.length == 0"
      variant="info"
      message="У вас нет ни одного запроса"
    />
    <Requests />
  </div>
</template>

<script>
import Requests from '@/components/requests/Requests'
import Alert from '~/components/global/Alert.vue'

export default {
  components: { Requests, Alert },
  layout: 'managing',
  asyncData({ store }) {
    store.dispatch('requests/init')
  },
  computed: {
    requests() {
      return this.$store.getters['requests/all']
    },
  },
}
</script>

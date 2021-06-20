<template>
  <b-overlay :show="isLoading" rounded="sm">
    <h1 class="my-3">{{ header }}</h1>
    <RequestForm
      class="mb-4"
      @request="isLoading = true"
      @done="isLoading = false"
    />
    <b-row align-h="end" class="mb-5">
      <b-col cols="4" class="text-right">
        <b-button
          type="submit"
          variant="primary"
          :disabled="!$store.getters['request/isValid']"
          @click="save"
        >
          Сохранить
        </b-button>
        <b-button to="/requests" type="reset" variant="danger" @click="clear">
          Отмена
        </b-button>
      </b-col>
    </b-row>
  </b-overlay>
</template>

<script>
import RequestForm from '@/components/requests/request/RequestForm'

export default {
  components: { RequestForm },
  layout: 'operation',
  asyncData({ store, route }) {
    store.dispatch('request/clear')
    store.dispatch('request/init', Number.parseInt(route.params.id))
    return {
      header: `${store.getters['request/method']} ${store.getters['request/endpoint']}`,
    }
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    save() {
      this.isLoading = true
      this.$store.dispatch(
        'request/update',
        Number.parseInt(this.$route.params.id)
      )
      this.$router.push('/requests')
      this.isLoading = false
    },
    clear() {
      this.$store.dispatch('request/clear')
    },
  },
}
</script>

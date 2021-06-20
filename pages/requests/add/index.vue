<template>
  <b-overlay :show="isLoading" rounded="sm">
    <h1 class="my-3">Новый запрос</h1>
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
import RequestForm from '@/components/requests/request/RequestForm.vue'

export default {
  components: {
    RequestForm,
  },
  layout: 'operation',
  asyncData({ store }) {
    store.dispatch('request/clear')
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    save() {
      this.isLoading = true
      this.$store.dispatch('request/save')
      this.$router.push('/requests')
      this.isLoading = false
    },
    clear() {
      this.$store.dispatch('request/clear')
    },
  },
}
</script>

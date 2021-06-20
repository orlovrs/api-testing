<template>
  <div>
    <b-button class="w-100" variant="primary" @click="send"> Послать </b-button>
    <ResponseModal />
  </div>
</template>

<script>
import ResponseModal from '@/components/requests/request/other/ResponseModal'
export default {
  components: { ResponseModal },
  methods: {
    send() {
      const headers = {}
      this.$store.getters['request/headers'].forEach((x) => {
        headers[x.key] = x.value
      })
      const options = {
        baseURL: 'https://cors-anywhere.herokuapp.com/',
        url: this.$store.getters['request/endpoint'],
        method: this.$store.getters['request/method'],
        data: JSON.parse(this.$store.getters['request/body']),
        headers,
      }
      this.$emit('request')
      this.$axios
        .request(options)
        .then((response) => this.$store.dispatch('response/init', response))
        .catch((error) => {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            this.$store.dispatch('response/init', error.response)
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            alert(error.request)
          } else {
            // Something happened in setting up the request and triggered an Error
            alert(error.message)
          }
        })
        .finally(() => {
          this.$emit('done')
          this.$bvModal.show('response')
        })
    },
  },
}
</script>

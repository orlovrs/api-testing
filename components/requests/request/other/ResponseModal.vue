<template>
  <b-modal id="response" size="xl" ok-only title="Ответ">
    <pre><strong>Код: </strong>{{ code }}</pre>
    <pre><strong>Заголовки:</strong></pre>
    <pre>{{ headers | pretty }}</pre>
    <pre><strong>Тело:</strong></pre>
    <pre>{{ body | pretty }}</pre>
  </b-modal>
</template>

<script>
export default {
  filters: {
    pretty(val) {
      return JSON.stringify(val, null, 2)
    },
  },
  computed: {
    body() {
      return this.$store.getters['response/body']
    },
    headers() {
      return this.$store.getters['response/headers']
    },
    code() {
      const code = this.$store.getters['response/statusCode']
      const text = this.$store.getters['response/statusText']

      return text ? `${code} (${text})` : code
    },
  },
}
</script>

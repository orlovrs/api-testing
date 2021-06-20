<template>
  <b-row>
    <b-col cols="12">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Значение</th>
            <th scope="col" style="width: 20%">Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(header, index) in headers" :key="index">
            <td>{{ header.key }}</td>
            <td>{{ header.value }}</td>
            <td>
              <EditHeaderButton :header-key="header.key" />
              <DeleteHeaderButton :header-key="header.key" />
            </td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>
import EditHeaderButton from '@/components/requests/request/buttons/EditHeaderButton'
import DeleteHeaderButton from '@/components/requests/request/buttons/DeleteHeaderButton'

export default {
  components: { DeleteHeaderButton, EditHeaderButton },
  computed: {
    headers() {
      return this.$store.getters['request/headers']
    },
  },
}
</script>

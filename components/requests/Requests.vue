<template>
  <b-list-group>
    <b-list-group-item
      v-for="request in $store.getters['requests/all']"
      :key="request.id"
      :to="`/requests/${request.id}`"
    >
      <b-row align-v="center">
        <b-col cols="1">
          <b-badge variant="primary">{{ request.method }}</b-badge>
        </b-col>
        <b-col>{{ request.endpoint }}</b-col>
        <b-col cols="2" align="end">
          <EditRequestButton :id="request.id" />
          <DeleteRequestButton :id="request.id" />
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>
<script>
import DeleteRequestButton from '@/components/requests/buttons/DeleteRequestButton'
import EditRequestButton from '@/components/requests/buttons/EditRequestButton'
export default {
  components: { EditRequestButton, DeleteRequestButton },
}
</script>

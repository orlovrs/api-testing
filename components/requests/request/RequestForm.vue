<template>
  <b-form>
    <b-row class="mb-5">
      <b-col cols="2">
        <MethodSelect />
      </b-col>
      <b-col cols="8">
        <EndpointInput />
      </b-col>
      <b-col cols="2">
        <SendButton @request="$emit('request')" @done="$emit('done')" />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col cols="2">
        <h3>Заголовки</h3>
      </b-col>
      <b-col>
        <AddHeaderButton />
      </b-col>
    </b-row>
    <HeadersList v-if="$store.getters['request/headers'].length > 0" />
    <BodyArea />
  </b-form>
</template>

<script>
import AddHeaderButton from '@/components/requests/request/buttons/AddHeaderButton'
import MethodSelect from '@/components/requests/request/inputs/MethodSelect'
import EndpointInput from '@/components/requests/request/inputs/EndpointInput'
import HeadersList from '@/components/requests/request/HeadersList'
import BodyArea from '@/components/requests/request/inputs/BodyArea'
import SendButton from '@/components/requests/request/buttons/SendButton'

export default {
  components: {
    SendButton,
    BodyArea,
    HeadersList,
    EndpointInput,
    MethodSelect,
    AddHeaderButton,
  },
}
</script>

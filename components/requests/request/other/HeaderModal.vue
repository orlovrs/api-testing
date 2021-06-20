<template>
  <b-modal :id="id" :title="title" @show="resetHeader" @ok="handleOk">
    <form ref="form" @submit.stop.prevent="submit">
      <b-form-group
        label="Имя"
        label-for="key"
        :invalid-feedback="error"
        :state="isKeyValid"
      >
        <b-form-input
          id="key"
          v-model="header.key"
          :state="isKeyValid"
          required
        />
      </b-form-group>
      <b-form-group
        label="Значение"
        label-for="value"
        invalid-feedback="Не должно быть пустым"
        :state="isValueValid"
      >
        <b-form-input
          id="value"
          v-model="header.value"
          :state="isValueValid"
          required
        />
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    mode: { type: String, default: 'add' },
    headerKey: { type: String, default: null },
  },
  data() {
    return {
      header: {
        key: null,
        value: null,
      },
    }
  },
  computed: {
    isKeyValid() {
      if (this.mode === 'add') {
        return (
          !!this.header.key &&
          !this.$store.getters['request/headers'].some(
            (x) => x.key === this.header.key
          )
        )
      } else {
        return (
          !!this.header.key &&
          !this.$store.getters['request/headers'].some(
            (x) => x.key === this.header.key && x.key !== this.headerKey
          )
        )
      }
    },
    isValueValid() {
      return !!this.header.value
    },
    isHeaderValid() {
      return this.isKeyValid && this.isValueValid
    },
    error() {
      if (this.mode === 'add') {
        if (
          this.$store.getters['request/headers'].some(
            (x) => x.key === this.header.key
          )
        )
          return 'Заголовок с таким ключом уже существует'
      } else if (
        this.$store.getters['request/headers'].some(
          (x) => x.key === this.header.key && x.key !== this.headerKey
        )
      )
        return 'Заголовок с таким ключом уже существует'

      return 'Не должно быть пустым'
    },
  },
  methods: {
    resetHeader() {
      if (this.mode === 'add') {
        this.header.key = null
        this.header.value = null
      } else {
        const header = this.$store.getters['request/headers'].find(
          (x) => x.key === this.headerKey
        )
        this.header.key = header.key
        this.header.value = header.value
      }
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.submit()
    },
    submit() {
      if (!this.isHeaderValid) {
        return
      }

      if (this.mode === 'add') {
        this.$store.dispatch('request/setHeader', this.header)
      } else {
        this.$store.dispatch('request/updateHeader', {
          key: this.headerKey,
          header: this.header,
        })
      }

      this.$nextTick(() => {
        this.$bvModal.hide(this.id)
      })
    },
  },
}
</script>

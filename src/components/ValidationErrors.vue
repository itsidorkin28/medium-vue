<template>
  <div>
    <ul class='mb-3 mt-3'>
      <li v-for='errorMessage in errorMessages'
          :key='errorMessage'
      class='first-letter:uppercase text-red-600'>
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      })
    }
  }
}
</script>

